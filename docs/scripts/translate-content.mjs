// AI-powered translation script for the Nuxt UI docs content.
//
// Walks `content/en/` and translates every `.md` / `.yml` file into each
// target locale, writing the result to `content/{locale}/...`. Designed for
// incremental runs: existing target files are skipped unless `--force` is
// passed. The script preserves MDC syntax, code blocks, frontmatter keys,
// and link/component paths so the translated Markdown stays valid for
// `@nuxt/content` to parse.
//
// Usage:
//   node scripts/translate-content.mjs                # incremental
//   node scripts/translate-content.mjs --force       # re-translate all
//   node scripts/translate-content.mjs --locale=zh    # one locale only
//   node scripts/translate-content.mjs --dry-run      # print plan, no writes
//
// Required env:
//   AI_GATEWAY_API_KEY   Vercel AI gateway key (also used by the docs site)
// Optional env:
//   TRANSLATION_MODEL    Override the chat model (default: gpt-4o-mini)
//   TRANSLATION_CONCURRENCY  Parallel requests per locale (default: 3)

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CONTENT_ROOT = join(__dirname, '..', 'content')
const SOURCE_DIR = join(CONTENT_ROOT, 'en')

const TARGET_LOCALES = ['zh', 'ja', 'ko', 'fr', 'de', 'nl', 'es']

const LANGUAGE_NAMES = {
  zh: 'Simplified Chinese (简体中文)',
  ja: 'Japanese (日本語)',
  ko: 'Korean (한국어)',
  fr: 'French (Français)',
  de: 'German (Deutsch)',
  nl: 'Dutch (Nederlands)',
  es: 'Spanish (Español)'
}

const API_KEY = process.env.AI_GATEWAY_API_KEY
const MODEL = process.env.TRANSLATION_MODEL || 'gpt-4o-mini'
const CONCURRENCY = Number(process.env.TRANSLATION_CONCURRENCY) || 3

const args = process.argv.slice(2)
const FORCE = args.includes('--force')
const DRY_RUN = args.includes('--dry-run')
const LOCALE_FILTER = (() => {
  const a = args.find(a => a.startsWith('--locale='))
  return a ? a.split('=')[1] : null
})()

if (!API_KEY) {
  console.error('❌ AI_GATEWAY_API_KEY is required. Copy docs/.env.example to docs/.env and fill it in.')
  process.exit(1)
}

if (!existsSync(SOURCE_DIR)) {
  console.error(`❌ Source directory not found: ${SOURCE_DIR}`)
  process.exit(1)
}

const locales = LOCALE_FILTER ? [LOCALE_FILTER] : TARGET_LOCALES
for (const l of locales) {
  if (!TARGET_LOCALES.includes(l)) {
    console.error(`❌ Unknown locale: ${l}. Supported: ${TARGET_LOCALES.join(', ')}`)
    process.exit(1)
  }
}

// ──────────────────────────────────────────────────────────────────────────
// File discovery
// ──────────────────────────────────────────────────────────────────────────

async function walk(dir) {
  const out = []
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...await walk(full))
    } else if (entry.isFile() && /\.(md|yml|yaml)$/.test(entry.name)) {
      out.push(full)
    }
  }
  return out
}

// ──────────────────────────────────────────────────────────────────────────
// Frontmatter parsing (lightweight; we don't need a full YAML parser here)
// ──────────────────────────────────────────────────────────────────────────

function splitFrontmatter(text) {
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(text)
  if (!match) return { frontmatter: null, body: text }
  return { frontmatter: match[1], body: match[2] }
}

function joinFrontmatter({ frontmatter, body }) {
  if (!frontmatter) return body
  return `---\n${frontmatter}\n---\n${body}`
}

// ──────────────────────────────────────────────────────────────────────────
// LLM call
// ──────────────────────────────────────────────────────────────────────────

const ENDPOINT = 'https://api.vercel-ai-gateway.com/v1/chat/completions'

async function translateText(text, targetLang, isYaml = false) {
  const langLabel = LANGUAGE_NAMES[targetLang]
  const systemPrompt = [
    'You are a professional translator for the Nuxt UI documentation site',
    '(a Vue/Nuxt UI component library). Translate the user-provided content',
    `into ${langLabel}.`,
    '',
    'Strict rules (viigrading them breaks the build):',
    '1. Preserve ALL frontmatter YAML structure and keys. Only translate the',
    '   human-readable *values* of keys like `title`, `description`,',
    '   `navigation.title`, `hero.lead`, `hero.accent`, `hero.description`,',
    '   `badge` (when string), `links[].label`. Leave code/paths/icons untouched.',
    '2. Preserve ALL MDC syntax: `::component`, `::component{props}`, `:props`,',
    '   `#slot`, `[[button]]`, `:icon="i-lucide-..."`, etc.',
    '3. Preserve ALL fenced code blocks ``` and their contents verbatim.',
    '4. Preserve ALL inline code `like this` verbatim.',
    '5. Preserve ALL URLs, file paths, `to:` values, and component names',
    '   (PascalCase like `UButton` stays `UButton`).',
    '6. Preserve ALL HTML tags and attributes; only translate visible text',
    '   inside them.',
    '7. Preserve Markdown structure: headings `#`, list markers `-`/`*`,',
    '   table pipes `|`, blockquotes `>`.',
    '8. Output ONLY the translated content. No preamble, no explanations,',
    '   no wrapping in another code block. The output must be drop-in',
    '   replaceable for the input.',
    isYaml ? '9. Input is pure YAML. Output pure YAML with the same key order.' : ''
  ].filter(Boolean).join('\n')

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.2,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: text }
      ]
    })
  })

  if (!res.ok) {
    const errText = await res.text().catch(() => '')
    throw new Error(`HTTP ${res.status} from AI gateway: ${errText.slice(0, 200)}`)
  }

  const data = await res.json()
  const content = data?.choices?.[0]?.message?.content
  if (!content) {
    throw new Error(`Empty response from AI gateway: ${JSON.stringify(data).slice(0, 200)}`)
  }
  return content
}

// ──────────────────────────────────────────────────────────────────────────
// Per-file translation pipeline
// ──────────────────────────────────────────────────────────────────────────

async function translateFile(sourcePath, targetPath, locale) {
  const source = await readFile(sourcePath, 'utf8')
  const isYaml = /\.(yml|yaml)$/.test(sourcePath)

  // For .md: split frontmatter and body, translate each separately so the
  // system prompt can be tailored. For .yml: translate the whole file as
  // YAML (the prompt above constrains the LLM to keep structure).
  let translated
  if (isYaml) {
    translated = await translateText(source, locale, true)
  } else {
    const { frontmatter, body } = splitFrontmatter(source)
    const [fmOut, bodyOut] = await Promise.all([
      frontmatter ? translateText(frontmatter, locale, true) : Promise.resolve(null),
      translateText(body, locale, false)
    ])
    translated = joinFrontmatter({ frontmatter: fmOut, body: bodyOut })
  }

  await mkdir(dirname(targetPath), { recursive: true })
  await writeFile(targetPath, translated, 'utf8')
}

// ──────────────────────────────────────────────────────────────────────────
// Simple concurrency limiter
// ──────────────────────────────────────────────────────────────────────────

async function mapLimit(items, limit, fn) {
  const results = Array.from({ length: items.length })
  let cursor = 0
  const workers = Array.from({ length: Math.min(limit, items.length) }).map(async () => {
    while (true) {
      const i = cursor++
      if (i >= items.length) return
      results[i] = await fn(items[i], i)
    }
  })
  await Promise.all(workers)
  return results
}

// ──────────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────────

async function main() {
  const files = await walk(SOURCE_DIR)
  console.log(`📚 Found ${files.length} source files under content/en/`)
  console.log(`🌐 Target locales: ${locales.join(', ')}`)
  console.log(`⚡ Concurrency: ${CONCURRENCY}, Force: ${FORCE}, Dry-run: ${DRY_RUN}`)
  console.log('')

  let totalTranslated = 0
  let totalSkipped = 0

  for (const locale of locales) {
    console.log(`\n━━━ ${locale} (${LANGUAGE_NAMES[locale]}) ━━━`)

    const tasks = files.map((src) => {
      const rel = relative(SOURCE_DIR, src)
      return { src, rel, target: join(CONTENT_ROOT, locale, rel) }
    })

    const plan = tasks.filter(t => FORCE || !existsSync(t.target))
    const skipCount = tasks.length - plan.length
    totalSkipped += skipCount
    console.log(`  ${plan.length} to translate, ${skipCount} already present (skipped)`)

    if (DRY_RUN) {
      for (const t of plan) console.log(`  [dry-run] ${t.rel}`)
      continue
    }

    let idx = 0
    await mapLimit(plan, CONCURRENCY, async (task) => {
      const i = ++idx
      try {
        await translateFile(task.src, task.target, locale)
        totalTranslated++
        if (i % 10 === 0 || i === plan.length) {
          console.log(`  [${locale}] ${i}/${plan.length} done`)
        }
      } catch (err) {
        console.error(`  ❌ [${locale}] ${task.rel}: ${err.message}`)
        // retry once after a short pause, then give up on this file
        await new Promise(r => setTimeout(r, 2000))
        try {
          await translateFile(task.src, task.target, locale)
          totalTranslated++
          console.log(`  ↻ [${locale}] ${task.rel} retried OK`)
        } catch (err2) {
          console.error(`  💥 [${locale}] ${task.rel} failed for good: ${err2.message}`)
        }
      }
    })
  }

  console.log(`\n✅ Done. Translated: ${totalTranslated}, skipped: ${totalSkipped}`)
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
