# Nuxt UI 项目规则（文档站 i18n fork）

适用于本仓库的所有会话。上游组件库的通用约定仍以 [AGENTS.md](file:///Users/yiqun/WebstormProjects/ui/AGENTS.md) 为准，本文件只补充本 fork 的硬约束。背景与踩坑记录见 [project_memory.md](file:///Users/yiqun/WebstormProjects/ui/.trae/memory/project_memory.md) 和 [nuxt-ui-docs-i18n-cloudflare.md](file:///Users/yiqun/WebstormProjects/ui/.trae/documents/nuxt-ui-docs-i18n-cloudflare.md)。

## 文档站与 i18n

- 内容目录为 `docs/content/{en,zh,ja,ko,fr,de,nl,es}/`，每种语言 196 个文件（184 个 .md + 12 个 .yml）；英文是默认语言（URL 无前缀），其余语言在 `/{locale}/...`。
- 每种语言使用独立 collection（`docs_<locale>` / `index_<locale>`），页面按 locale 查询并在缺失时回退 `docs_en`；不要改回单一 `docs` collection。
- sitemap hook 必须按精确集合名（`docs_zh` 等）注册，且不能闭包引用 `locale`（会被序列化）；非英文 `loc` 要补 `/{locale}` 前缀。
- `NUXT_PUBLIC_SITE_URL` 同时驱动 `site.url`、`i18n.baseUrl`、sitemap 和 canonical，不要硬编码域名。
- `/robots.txt`、`/sitemap.xml`、`/sitemap_index.xml`、`/__sitemap__/*` 必须留在 `nitro.prerender.routes` 中，否则会落到 SSR 函数返回 500。

## 翻译

- 唯一入口是 `docs/scripts/translate-content.mjs`；默认 free 引擎（zh/ja/ko/fr/de/es 走腾讯 Transmart，nl 走 Volcengine）。
- 不得破坏脚本的保护逻辑：代码围栏、MDC 容器内的 `---` YAML 块、`#slot` 标记、行首单冒号组件、YAML 白名单键，以及 `xphNNNx` 占位符。
- 批量翻译前先检查并清理遗留的 `translate-content` 进程，避免旧进程覆盖新译文。
- 验收口径：7 语言 × 196 文件，路径一致、frontmatter YAML 与代码块逐字节一致、MDC 骨架一致、无占位符残留。
- Nuxt Content v3 在 build 时把内容写入 SQLite；改完翻译必须重启 dev 或重新 build 才能看到。

## 构建与部署

- **本地完整预渲染构建不可行**：7 语言 × 196 个内容文件 + component-meta 解析 + 批量预渲染，即使把 `NODE_OPTIONS` 调到 `--max-old-space-size=12288`，在 macOS (darwin-arm64) 上仍经常 OOM；完整 `nuxt generate` **必须走 GitHub Actions**。本地验证可 `SKIP_PRERENDER=1 nuxt build docs`（只验打包）或 `PRERENDER_LOCALES=default nuxt generate`（只预渲染英文）。
- **部署是纯静态**：`nuxt generate` → `wrangler pages deploy .output/public`（Cloudflare Pages 直传）。不要引入 Worker/`cloudflare_module`：Worker Free 档 3 MiB gzip，而本站 Nitro 服务端约 5.5 MiB；Pages 免费档为无限请求、20,000 文件、单文件 25 MiB。
- 因为静态化，`/api/ai`、`/api/chat`、`/api/completion`、`/mcp` 不存在：`runtimeConfig.public.aiEnabled`（`NUXT_PUBLIC_AI_ENABLED`）在 production 默认 false，所有 Ask AI 入口按此隐藏。要恢复需改用付费 Worker 或外部 API。
- 依赖服务端的动态数据改为构建时快照：`/api/github/releases.json`、`/api/fonts.json` 走 `routeRules.prerender`；组件页 Changelog 只渲染最近发布列表。
- 重定向由 [generate-redirects.mjs](file:///Users/yiqun/WebstormProjects/ui/docs/scripts/generate-redirects.mjs) 从 `nuxt.config.ts` 的 `routeRules` 生成 `_redirects`；改重定向规则后必须确认脚本仍能解析（少于 100 条会直接报错）。
- 部署命令固定为 `wrangler pages deploy .output/public --project-name=nuxt-ui-docs --branch=v4`（在 `docs/` 下执行）；Pages 项目的生产分支必须是 `v4`，令牌需要 Cloudflare Pages:Edit。
- 构建时用 GitHub secret `NUXT_GITHUB_TOKEN` 预渲染 releases/contributors；`CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` 用于上传。

## 通用

- 未经用户明确要求，不要执行 `git commit` / `git push`；提交信息遵循 conventional commits。
- 修改 `src/` 或 `test/` 时，仍遵守 AGENTS.md 中的组件结构、主题与测试约定。
