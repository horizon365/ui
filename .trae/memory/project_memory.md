## Hard Constraints
- Docs deploy is a **pure static export**: GitHub Actions runs `nuxt generate` (3 locale batches) and uploads `.output/public` to Cloudflare Pages with `wrangler pages deploy`. No Worker, no D1, no `cloudflare_module` preset.
- Cloudflare Workers Free cannot host the server: the Nitro bundle measured 27.8 MB raw / ~5.5 MB gzip vs the 3 MiB free cap (10 MiB paid). Static Pages free tier: unlimited requests, 20,000 files, 25 MiB per file.
- Server-only features are removed in production: `/api/ai`, `/api/chat`, `/api/completion`, `/mcp`. `runtimeConfig.public.aiEnabled` (env `NUXT_PUBLIC_AI_ENABLED`) is false in production and every Ask AI entry point is hidden by it.
- `@nuxt/image` must use `provider: 'ipxStatic'` — the `ipx` provider needs sharp at runtime.
- Must use Linux (ubuntu-latest) CI runner for builds — local full prerender OOMs and native modules (sharp, better-sqlite3) must match the Linux target

## Engineering Conventions
- Store build environment variables in `build.env` — for consistent environment configuration
- Create empty tsconfig.json in root .nuxt directory during build — to satisfy vite-transform's file existence check
- Sitemap locale grouping must be based on exact collection names (e.g. docs_en, docs_zh) instead of generic 'docs' to avoid cross-locale URL leakage into incorrect sitemap files
- Sitemap onUrl hooks must not rely on closure variables (use collection name parsing instead) to avoid serialization failures when passed to Nitro's virtual modules
- `/robots.txt` must be explicitly added to the prerender route list to generate a static file, preventing SSR fallback 500 errors that block Google Search Console sitemap ingestion

## Lessons Learned
- `docs:build` script was missing — caused 'ERR_PNPM_NO_SCRIPT' error
- Explicit `outputDirectory` configuration conflicted with Nitro's Vercel preset — resulted in 'No Output Directory' errors
- `NITRO_PRESET=node-server` forced incorrect output path — prevented Vercel from detecting build artifacts
- Vercel's Root Directory setting affects command execution context — led to incorrect path resolution for content.config.ts and tsconfig.json
- Vercel Hobby/Free tier only provides 2GB build memory — insufficient for full prerender of multi-language documentation, leading to repeated OOM (exit code 137) failures
- **Prefer batched prerender over SKIP_PRERENDER=1**: When prerender OOMs, split by locale/route and merge HTML output instead of disabling prerender entirely. SKIP_PRERENDER=1 makes every page go through the SSR function, which is fragile (native module ABI, missing transitive deps, cold starts). Static HTML from CDN is far more reliable.
- Local macOS builds produce darwin-arm64 native binaries (e.g. sharp) that crash on Vercel's Linux runtime — requires Linux CI to resolve architecture mismatch
- Vercel production deployments may return internal errors for large output bundles — use preview deployment + manual alias as a reliable workaround
- `vercel build` resolves project settings from the Vercel API, NOT from local .vercel/project.json — overwriting project.json (rootDirectory etc.) is ineffective; server settings rootDirectory=docs + framework default `pnpm run build` always win, bypassing repo-root vercel.json. Fix: skip `vercel pull`/`vercel build` entirely and build directly with `VERCEL=1 NITRO_PRESET=vercel` running the vercel.json buildCommand steps (locally verified byte-identical config.json after post-processing, 436 routes)
- Nitro vercel preset output structure: single real `__fallback.func` (full Nitro server) + ~300 symlinked per-route functions nested in empty dirs; routes dest mix = function refs (dead after symlink deletion) + /raw/*.md static refs (missing due to SKIP_PRERENDER) — both must be rewritten to /__fallback
- Use `pnpm exec nuxt-module-build`/`pnpm exec nuxt` in CI (node_modules/.bin not on PATH); Vercel CLI pinned to locally verified 63.1.0
- **Node version must match Nitro's runtime**: Nitro SUPPORTED_NODE_VERSIONS=[18,20,22], so .vc-config.json sets runtime=nodejs22.x. Building with Node 24 produces native binaries (better-sqlite3 uses NAN, not N-API) that crash on Node 22 runtime. Use Node 22 in CI.
- **pnpm needs node-linker=hoisted**: pnpm's default symlink layout leaves the Vercel function's node_modules with dangling symlinks. Set `node-linker=hoisted` so Nitro copies real native module files into __fallback.func/node_modules.
- **Nitro misses transitive deps for externalized packages**: @modelcontextprotocol/sdk was copied to the function but its dep `content-type` was missing (ERR_MODULE_NOT_FOUND). Add a post-build step that recursively scans the function's node_modules and copies missing transitive deps from the project node_modules.
- **Batched prerender implementation**: run `nuxt build` multiple times with `PRERENDER_LOCALES` env var (e.g. `default`, `zh,ja,ko`, `fr,de,nl,es`). Keep batch 1's output as base, merge only `*.html` from subsequent batches into base's static dir. Set `concurrency: 1` in nitro.prerender to minimize memory. max-old-space-size=6400 fits GitHub's 7GB runner.
- `vercel alias set` has a different auth resolution path than `vercel deploy` (fails with "User not found"). Prefer `vercel deploy --prod` instead of preview+alias.
- **Vercel free tier 24h upload quota**: `vercel deploy` uploads files individually; an output with >5000 files (1693 static assets + function's hoisted node_modules ≈ 865MB) trips the limit (code `api-upload-free`, blocks 24h). Fix: `--archive=tgz` packs the output into a single tarball upload.
- **GitHub public vs private repo runner RAM**: public repos get 16GB on ubuntu-latest, private get 7GB. horizon365/ui is public → max-old-space-size=12288 is safe (leaves ~3.5GB for native modules). Check via `curl https://api.github.com/repos/<owner>/<repo>` → `"private": false`.
- **Read the V8 heap limit from GC logs, don't guess**: `Mark-Compact 6268.9 (6449.3) MB` — the parenthesized 6449.3MB IS the effective heap ceiling (= --max-old-space-size + ~50MB young-gen/code overhead). Used to verify which NODE_OPTIONS actually reached the build.
- GitHub Actions free tier maximum workflow run time is 6 hours, Vercel's 40-minute limit only applies to Vercel-hosted builds, not GitHub CI builds. Split batches into no more than 3-4 groups to avoid exceeding reasonable total build time.
- Prerender 404 errors caused by Nitro misinterpreting page anchor hash fragments as routes do not block deployment; set `failOnError: false` in prerender configuration to skip these errors and avoid terminating the entire build process.
- Sitemap baseUrl must be set to match the deployment domain to avoid generating cross-domain sub-sitemap links that return 404 errors
- Sitemap sub-sitemap paths (e.g. /__sitemap__/zh-Hans.xml) must be added to the prerender route list to generate static XML files instead of relying on fragile SSR function execution

## Docs Site (i18n + Cloudflare)

### Content and local development
- Docs content lives under `docs/content/{en,zh,ja,ko,fr,de,nl,es}/` with 196 files per locale (184 .md + 12 .yml). Collections are per locale (`docs_<locale>`, `index_<locale>`); page queries strip the locale prefix and fall back to `docs_en`.
- Start the docs site with `pnpm install`, then `pnpm run dev:prepare` (it runs `nuxt prepare docs`), then `pnpm run docs` (`nuxt dev docs --uiDev`). Node must satisfy `^20.19.0 || >=22.12.0`; first start is slow because of fonts and the SQLite content index.
- Nuxt Content v3 compiles content into SQLite at build time: edited/added translations are not visible in a production bundle until the app is restarted or rebuilt; in dev mode the server re-parses files automatically.

### Translation pipeline
- Script is `docs/scripts/translate-content.mjs`. Default `free` engine: Tencent Transmart for zh/ja/ko/fr/de/es and Volcengine crx for nl (Transmart has no Dutch). `--engine=llm` uses the Vercel AI Gateway and needs `AI_GATEWAY_API_KEY`.
- Protections that must stay in place: skip fenced code; skip `---` YAML blocks inside MDC containers; keep container `#slot` markers; treat line-start single-colon components (`:badge{...}`, `:components-list{...}`) as tag lines; translate only `title`/`description`/`lead`/`accent`/`label` in YAML; use `xphNNNx` placeholders (both engines pass them through verbatim).
- Volcengine rejects payloads above roughly 5000 chars: pack units into 4500-char chunks and re-translate unit by unit when the returned newline count drifts.
- Before a batch run, check for leftover `translate-content` processes with `ps aux` and kill them; an old process running the previous script overwrites new translations.
- Acceptance: 7 locales × 196 files, identical paths, frontmatter YAML byte-identical to English, fenced code identical, MDC container/component skeleton sequence matching, no placeholder residue.

### Deployment (current: Cloudflare Pages, static)
- Deploy path is `.github/workflows/deploy-docs.yml` on `v4` (ubuntu-latest, Node 22, pnpm `node-linker=hoisted`): three batched `nuxt generate` runs (`PRERENDER_LOCALES` = `default` / `zh,ja,ko` / `fr,de,nl,es`), merge `.output/public`, generate `_redirects`, then `wrangler pages deploy .output/public --project-name=nuxt-ui-docs --branch=v4` from `docs/`.
- `docs/wrangler.jsonc` only holds `name` + `pages_build_output_dir`; the Pages project's production branch must be `v4`.
- One-time Cloudflare setup: create the Pages project (Direct Upload), bind `nuxt-ui.vite.js.cn`; GitHub secrets `CLOUDFLARE_API_TOKEN` (Pages:Edit) + `CLOUDFLARE_ACCOUNT_ID`, plus `NUXT_GITHUB_TOKEN` for build-time GitHub data.
- `docs/scripts/generate-redirects.mjs` parses the `routeRules` redirects in `nuxt.config.ts` into Pages `_redirects`; it throws when it parses fewer than 100 rules.
- Dynamic data is frozen at build: `/api/github/releases.json` and `/api/fonts.json` are prerendered; the component changelog shows the latest 10 releases (no per-component commits). `/theme` and `/docs/releases` are prerendered too.
- `NUXT_PUBLIC_SITE_URL` feeds `site.url`, `i18n.baseUrl`, sitemap and canonical URLs; production defaults to `https://nuxt-ui.vite.js.cn`.
- The full i18n + deployment record (including the Vercel and Workers history) lives in `.trae/documents/nuxt-ui-docs-i18n-cloudflare.md`.