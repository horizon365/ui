// Translation script for the Nuxt UI docs content.
//
// Walks `content/en/` and translates every `.md` / `.yml` file into each
// target locale, writing the result to `content/{locale}/...`. Incremental by
// default: existing target files are skipped unless `--force` is passed.
//
// Two engines:
//   free (default)  Keyless public endpoints — Tencent Transmart for
//                   zh/ja/ko/fr/de/es and the public Google endpoint for nl
//                   (Transmart has no Dutch). Code blocks, MDC tags/props,
//                   inline code and URLs are masked with placeholders so the
//                   machine translation cannot corrupt them.
//   llm             Vercel AI gateway chat model; needs AI_GATEWAY_API_KEY.
//                   Better at context-aware translation; keep for later.
//
// Usage:
//   node scripts/translate-content.mjs                 # free engine, incremental
//   node scripts/translate-content.mjs --force         # re-translate all
//   node scripts/translate-content.mjs --locale=zh     # one locale only
//   node scripts/translate-content.mjs --engine=llm    # force the LLM engine
//   node scripts/translate-content.mjs --dry-run       # print plan, no writes
//
// Optional env:
//   TRANSLATION_ENGINE       free (default) | llm
//   TRANSLATION_MODEL        LLM model override (default: gpt-4o-mini)
//   TRANSLATION_CONCURRENCY  Parallel files per locale (default: 2 free, 3 llm)
// Required for --engine=llm:
//   AI_GATEWAY_API_KEY       Vercel AI gateway key (also used by the docs site)

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

const args = process.argv.slice(2)
const FORCE = args.includes('--force')
const DRY_RUN = args.includes('--dry-run')
const LOCALE_FILTER = (() => {
  const a = args.find(a => a.startsWith('--locale='))
  return a ? a.split('=')[1] : null
})()
const ENGINE = (() => {
  const a = args.find(a => a.startsWith('--engine='))
  return (a ? a.split('=')[1] : process.env.TRANSLATION_ENGINE || 'free')
})()
const API_KEY = process.env.AI_GATEWAY_API_KEY
const MODEL = process.env.TRANSLATION_MODEL || 'gpt-4o-mini'
const CONCURRENCY = Number(process.env.TRANSLATION_CONCURRENCY) || (ENGINE === 'llm' ? 3 : 2)

if (!['free', 'llm'].includes(ENGINE)) {
  console.error(`❌ Unknown engine: ${ENGINE}. Supported: free, llm`)
  process.exit(1)
}
if (ENGINE === 'llm' && !API_KEY) {
  console.error('❌ AI_GATEWAY_API_KEY is required for --engine=llm. Use the default free engine instead.')
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

const sleep = ms => new Promise(r => setTimeout(r, ms))

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
    } else if (entry.isFile() && /\.(?:md|yaml|yml)$/.test(entry.name)) {
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

// ══════════════════════════════════════════════════════════════════════════
// FREE ENGINE — keyless machine translation with placeholder protection
// ══════════════════════════════════════════════════════════════════════════

// Placeholder pool. Tokens look like `@@PH000@@`; machine translation keeps
// them but occasionally injects spaces (esp. Japanese), so restoration uses
// a loose regex and indexes are zero-padded to avoid PH10/PH100 collisions.
class Placeholders {
  constructor() {
    this.items = []
    this.translate = new Set() // item indexes whose value must be translated
  }

  // Protect `value` from the translator.
  protect(value) {
    const i = this.items.length
    this.items.push(value)
    return `@@PH${String(i).padStart(3, '0')}@@`
  }

  // Expose `value` for translation: it rides as a placeholder inside a line
  // but its English value is itself sent to the translator, and the pool
  // entry is overwritten with the result before restoration.
  translatable(value) {
    const i = this.items.length
    this.items.push(value)
    this.translate.add(i)
    return `@@PH${String(i).padStart(3, '0')}@@`
  }

  applyTranslations(values) {
    // `values` maps 1:1 to the indexes in `translate`, ascending
    let p = 0
    for (const i of [...this.translate].sort((a, b) => a - b)) {
      this.items[i] = values[p++]
    }
  }

  restore(text) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const code = String(i).padStart(3, '0')
      // The translator strips `@` symbols sometimes (even all of them) and
      // inserts spaces between letters, so make the @s optional and tolerate
      // whitespace. A bare `PH002` never appears in natural prose, and the
      // lookahead prevents PH002 matching inside PH0020.
      const re = new RegExp(`@*[ \\t]*P[ \\t]*H[ \\t]*${code}[ \\t]*@*(?![0-9])`, 'g')
      text = text.replace(re, () => this.items[i])
    }
    return text
  }
}

// Markdown structural markers at line start: headings, blockquotes and
// list markers. Machine translation drops the required trailing space
// (`## Foo` -> `##Foo`) or the marker itself, so mask them before
// translation. Indentation stays outside the placeholder.
function protectLineStructure(line, ph) {
  line = line.replace(/^(#{1,6}\s+)/, m => ph.protect(m))
  line = line.replace(/^(>\s?)/, m => ph.protect(m))
  line = line.replace(/^(\s*)([-*+]\s+)/, (m, indent, marker) => indent + ph.protect(marker))
  line = line.replace(/^(\s*)(\d+\.\s+)/, (m, indent, marker) => indent + ph.protect(marker))
  // task list checkbox
  line = line.replace(/\[[ x]\]/i, m => ph.protect(m))
  return line
}

// Inline tokens that must never reach the translator. Order matters:
// inline code first (it may itself contain MDC-like syntax).
function protectInline(line, ph) {
  // 0. line-start structural markers
  line = protectLineStructure(line, ph)
  // 1. inline code
  line = line.replace(/`[^`\n]*`/g, m => ph.protect(m))
  // 2. MDC inline component `:Name[visible text]` — keep the visible text
  //    translatable, mask the wrapper.
  line = line.replace(/:([A-Z][\w.-]*)\[([^\]]*)\]/gi, (_m, name, text) =>
    ph.protect(`:${name}[`) + text + ph.protect(']'))
  // 3. markdown link/image: mask EVERY structural character (`[`, `](`, url,
  //    `)`); only the visible text is translated. This stops the translator
  //    turning `](url)` into a spaced/full-width `]（url）`, which breaks
  //    the link.
  line = line.replace(/(!?)\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g,
    (_m, bang, text, url) =>
      ph.protect(`${bang}[`) + text + ph.protect('](') + ph.protect(url) + ph.protect(')'))
  // 4. bold markers (mask only the markers, keep the text)
  line = line.replace(/\*\*([^*\n]+)\*\*/g, (_m, text) =>
    ph.protect('**') + text + ph.protect('**'))
  // 5. HTML tags
  line = line.replace(/<\/?[A-Z][^>]*>/gi, m => ph.protect(m))
  // 6. MDC props / attribute blocks `{...}` (single-line, no nested braces)
  line = line.replace(/\{[^{}\n]*\}/g, m => ph.protect(m))
  return line
}

// MDC container tag line (e.g. `::u-page-section{title="Components"}`). The
// tag/props are protected; natural-language `title`/`label`/`description`
// attribute values ride as translatable pool entries.
function protectTagLine(line, ph) {
  return line.replace(/\b(title|label|description)=("|')([^"']*)\2/g, (m, key, q, val) =>
    `${key}=${q}${val ? ph.translatable(val) : ''}${q}`)
}

// One YAML line in frontmatter (or a whole .yml file). Translate only string
// values of whitelisted keys; icons/paths/colors etc. pass through untouched.
// Returns { line, value } where `value` (protected) is the text to translate
// and is re-spliced into the line afterwards.
function protectYamlLine(line, ph) {
  const m = /^([ \t]*(?:-[ \t]*)?)(title|description|lead|accent|label):[ \t]?(.*)$/.exec(line)
  if (!m || !m[3].trim() || m[3].trim() === '""' || m[3].trim() === '\'\'') return null
  let v = m[3].trim()
  // structured (object/array) values are not plain text
  if (v[0] === '{' || v[0] === '[') return null
  const quote = (v[0] === '"' || v[0] === '\'') ? v[0] : ''
  if (quote) v = v.slice(1, -1)
  const protectedValue = protectInline(v, ph)
  return { prefix: m[1], key: m[2], sep: ': ', quote, protectedValue, raw: line }
}

// Translate one file with the free engine.
async function translateFileFree(source, locale, isYaml) {
  const ph = new Placeholders()
  const texts = [] // protected strings to send to the translator (batch order)

  // ── YAML-only file (.yml): every line is YAML ──
  let yamlLines
  let bodyLines = null

  if (isYaml) {
    yamlLines = source.split('\n')
  } else {
    const { frontmatter, body } = splitFrontmatter(source)
    yamlLines = frontmatter ? frontmatter.split('\n') : []
    bodyLines = body.split('\n')
  }

  // ── Body: per-line fence/container state machine ──
  let resultBody = null
  if (bodyLines) {
    let inFence = false
    const mask = bodyLines.map((line) => {
      if (/^\s*```/.test(line)) {
        inFence = !inFence
        return 'skip' // the fence delimiter itself
      }
      if (inFence) return 'skip'
      if (/^\s*:::?/.test(line)) return 'tag'
      return 'text'
    })

    const protectedLines = bodyLines.map((line, i) => {
      if (mask[i] === 'skip') return ph.protect(line)
      if (mask[i] === 'tag') return protectTagLine(line, ph)
      return protectInline(line, ph)
    })

    // Collect translatable lines (skip ones whose protected form has no
    // natural-language letters).
    const lineIndexes = []
    protectedLines.forEach((pl, i) => {
      if (mask[i] === 'text' && /[A-Za-z\u00C0-\u024F\u4E00-\u9FFF\u3040-\u30FF\uAC00-\uD7AF]/.test(pl)) {
        lineIndexes.push(i)
        texts.push(pl)
      }
    })

    // Run the batch, then fill body lines back in.
    const translated = await freeTranslate(texts, locale)
    if (translated.length !== texts.length) {
      throw new Error(`free engine returned ${translated.length} results for ${texts.length} units`)
    }
    lineIndexes.forEach((lineIdx, p) => {
      protectedLines[lineIdx] = translated[p]
    })
    // Pool entries that needed translation (tag attributes) come right after
    // the line units in the batch (they were appended during protectTagLine,
    // before this function ran — order is actually item-first. Handle below
    // via a separate pool slice: see rebuild below.)
    // NOTE: pool `translatable` entries are appended while lines are built,
    // i.e. BEFORE line texts are collected. Translate them in their own
    // request instead to keep ordering trivial.
    resultBody = { mask, protectedLines }
  }

  // ── Tag-attribute pool entries: separate mini-batch (order-sensitive) ──
  if (ph.translate.size) {
    const itemIndexes = [...ph.translate].sort((a, b) => a - b)
    const itemTexts = itemIndexes.map(i => ph.items[i])
    const itemOut = await freeTranslate(itemTexts, locale)
    ph.applyTranslations(itemOut)
  }

  // ── Restore placeholders in body and rebuild ──
  let outBody = ''
  if (resultBody) {
    const restored = resultBody.protectedLines.map(pl => ph.restore(pl))
    outBody = restored.join('\n')
  }

  // ── YAML lines: protect + translate + restore ──
  if (yamlLines) {
    const yamlUnits = []
    const protectedYaml = yamlLines.map((line, lineIdx) => {
      const unit = protectYamlLine(line, ph)
      if (!unit) return line
      yamlUnits.push({ ...unit, lineIdx })
      // protected line with the value masked; rebuilt again after translation
      return `${unit.prefix}${unit.key}${unit.sep}${unit.quote}${unit.protectedValue}${unit.quote}`
    })
    const yamlTexts = yamlUnits.map(u => u.protectedValue)
    const yamlOut = await freeTranslate(yamlTexts, locale)
    yamlUnits.forEach((u, p) => {
      const restoredValue = ph.restore(yamlOut[p])
      protectedYaml[u.lineIdx] = `${u.prefix}${u.key}${u.sep}${u.quote}${restoredValue}${u.quote}`
    })
    const yamlResult = protectedYaml.join('\n')

    if (isYaml) {
      return yamlResult
    }
    return joinFrontmatter({ frontmatter: yamlResult, body: outBody })
  }

  return outBody
}

// ── Free endpoint calls ───────────────────────────────────────────────────

// Tencent Transmart: batch of strings, keyless. Supports zh/ja/ko/fr/de/es.
// The public endpoint rate-limits (`ret_code: busy`) under sustained load,
// so each batch retries with a long exponential backoff on busy.
const tencentOnce = (batch, targetLang) => fetch('https://transmart.qq.com/api/imt', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    header: { fn: 'auto_translation', session: '', client_key: 'browser-edge-1.0.0.0', user: '' },
    type: 'text',
    model_category: 'normal',
    source: { lang: 'en', text_list: batch },
    target: { lang: targetLang }
  })
}).then(async (res) => {
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
})

async function tencentTranslate(texts, targetLang) {
  const out = []
  const BATCH = 25
  for (let i = 0; i < texts.length; i += BATCH) {
    const batch = texts.slice(i, i + BATCH)
    let data
    // Network errors: short retries; busy/error ret_code: long backoff.
    for (let attempt = 0; attempt < 6; attempt++) {
      try {
        data = await tencentOnce(batch, targetLang)
      } catch {
        await sleep(1000 * (attempt + 1))
        continue
      }
      const code = data.header?.ret_code
      if (code === 'succ' && data.auto_translation?.length === batch.length) break
      if (code === 'busy' || code === 'error') {
        await sleep(3000 * 2 ** attempt) // 3s, 6s, 12s, 24s, 48s, 96s
        continue
      }
      throw new Error(`tencent ${code || 'bad response'}`)
    }
    if (data.header?.ret_code !== 'succ') {
      throw new Error(`tencent ${data.header?.ret_code || 'unavailable'} after backoff`)
    }
    out.push(...data.auto_translation)
    await sleep(600)
  }
  return out
}

// Public Google web endpoint (gtx client): keyless, all languages incl. nl.
// Only one string per request (batch params are ignored server-side), so the
// endpoint rate-limits aggressively with HTTP 429. We pace every request and
// back off for minutes on 429. Long strings are kept in English (the GET
// endpoint truncates around 2k chars).
const GOOGLE_PACE_MS = Number(process.env.GOOGLE_PACE_MS) || 1200

async function googleOnce(q, targetLang) {
  const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en'
    + `&tl=${targetLang}&dt=t&q=${encodeURIComponent(q)}`
  const res = await fetch(url)
  if (res.status === 429) return { rateLimited: true }
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return { data: await res.json() }
}

async function googleTranslate(texts, targetLang) {
  const out = []
  for (const q of texts) {
    if (q.length > 1800) {
      console.warn(`    ⚠ ${q.length}-char unit exceeds free endpoint limit, kept in English`)
      out.push(q)
      continue
    }
    let result
    for (let attempt = 0; attempt < 6; attempt++) {
      result = await googleOnce(q, targetLang)
      if (!result.rateLimited) break
      // 30s, 60s, 2m, 4m, 8m, 16m — ride out the rate-limit window
      const wait = Math.min(30000 * 2 ** attempt, 960000)
      console.warn(`    ⚠ google 429, backing off ${Math.round(wait / 1000)}s`)
      await sleep(wait)
    }
    if (result.rateLimited) throw new Error('google 429 after long backoff')
    const { data } = result
    out.push(Array.isArray(data?.[0]) ? data[0].map(seg => seg[0]).join('') : q)
    await sleep(GOOGLE_PACE_MS)
  }
  return out
}

async function freeTranslate(texts, locale) {
  if (!texts.length) return []
  if (locale === 'nl') return googleTranslate(texts, 'nl')
  return tencentTranslate(texts, locale)
}

// ══════════════════════════════════════════════════════════════════════════
// LLM ENGINE — Vercel AI gateway chat completion (kept for when tokens exist)
// ══════════════════════════════════════════════════════════════════════════

const LLM_ENDPOINT = 'https://n.tokeness.dev/v1/chat/completions'

async function llmTranslate(text, targetLang, isYaml = false) {
  const langLabel = LANGUAGE_NAMES[targetLang]
  const systemPrompt = [
    'You are a professional translator for the Nuxt UI documentation site',
    '(a Vue/Nuxt UI component library). Translate the user-provided content',
    `into ${langLabel}.`,
    '',
    'Strict rules (violating them breaks the build):',
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

  const res = await fetch(LLM_ENDPOINT, {
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

async function translateFileLlm(source, locale, isYaml) {
  if (isYaml) return llmTranslate(source, locale, true)
  const { frontmatter, body } = splitFrontmatter(source)
  const [fmOut, bodyOut] = await Promise.all([
    frontmatter ? llmTranslate(frontmatter, locale, true) : Promise.resolve(null),
    llmTranslate(body, locale, false)
  ])
  return joinFrontmatter({ frontmatter: fmOut, body: bodyOut })
}

// ──────────────────────────────────────────────────────────────────────────
// Per-file dispatch
// ──────────────────────────────────────────────────────────────────────────

async function translateFile(sourcePath, targetPath, locale) {
  const source = await readFile(sourcePath, 'utf8')
  const isYaml = /\.(?:yml|yaml)$/.test(sourcePath)
  const translated = ENGINE === 'llm'
    ? await translateFileLlm(source, locale, isYaml)
    : await translateFileFree(source, locale, isYaml)
  await mkdir(dirname(targetPath), { recursive: true })
  await writeFile(targetPath, translated, 'utf8')
}

// ──────────────────────────────────────────────────────────────────────────
// Concurrency limiter
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
  console.log(`⚙ Engine: ${ENGINE}, concurrency: ${CONCURRENCY}, force: ${FORCE}, dry-run: ${DRY_RUN}`)
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
        await sleep(2000)
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
