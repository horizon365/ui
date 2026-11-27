// Generates the Cloudflare Pages `_redirects` file from the `routeRules`
// redirects in docs/nuxt.config.ts. The static export has no server, so the
// legacy v2/v4 redirects have to be served by Pages itself.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const configPath = resolve(root, '../nuxt.config.ts')
const outputPath = resolve(root, '../.output/public/_redirects')

const source = readFileSync(configPath, 'utf8')
const start = source.indexOf('routeRules: {')
const end = source.indexOf('\n  },', start)
if (start === -1 || end === -1) {
  throw new Error('Could not locate the routeRules block in nuxt.config.ts')
}

const block = source.slice(start, end)
const rule = /'([^']+)':\s*\{\s*redirect:\s*(?:'([^']*)'|\{\s*to:\s*'([^']*)'(?:,\s*statusCode:\s*(\d+))?\s*\})/g

const lines = []
for (const match of block.matchAll(rule)) {
  const from = match[1].replace(/\/\*\*$/, '/*')
  const to = (match[2] ?? match[3]).replace(/\*\*/g, ':splat')
  const status = match[4] ?? '302'
  lines.push(`${from} ${to} ${status}`)
}

// Guard against the regex silently matching nothing after a config refactor.
if (lines.length < 100) {
  throw new Error(`Only parsed ${lines.length} redirects from nuxt.config.ts, expected at least 100`)
}

mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, `${lines.join('\n')}\n`)
console.log(`Wrote ${lines.length} redirects to ${outputPath}`)
