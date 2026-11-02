## Hard Constraints
- Vercel build command must be configured to generate necessary type files before building — to avoid 'Tsconfig not found' errors
- Use Nitro's Vercel preset for deployment — ensures compatibility with Vercel's Build Output API
- Vercel build command must handle both Root Directory=docs and Root Directory=root configurations — to correctly locate nuxt.config.ts and generate type files
- Vercel Hobby tier has a hard limit of 12 serverless functions per deployment — all generated route functions must be replaced with a single __fallback function to avoid deployment rejection
- Must use Linux (ubuntu-latest) CI runner for builds — to avoid native module (e.g. sharp) architecture mismatch between macOS and Vercel's Linux runtime

## Engineering Conventions
- Store build environment variables in `build.env` — for consistent environment configuration
- Create empty tsconfig.json in root .nuxt directory during build — to satisfy vite-transform's file existence check
- After local or CI build, post-process the output to delete all route function symlinks and rewrite all config.json dest entries to point to /__fallback — preserves routing behavior while complying with function count limits
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