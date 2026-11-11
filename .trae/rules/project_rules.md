# Nuxt UI 项目规则（文档站 i18n fork）

适用于本仓库的所有会话。上游组件库的通用约定仍以 [AGENTS.md](file:///Users/yiqun/WebstormProjects/ui/AGENTS.md) 为准，本文件只补充本 fork 的硬约束。背景与踩坑记录见 [project_memory.md](file:///Users/yiqun/WebstormProjects/ui/.trae/memory/project_memory.md) 和 [nuxt-ui-docs-i18n-vercel.md](file:///Users/yiqun/WebstormProjects/ui/.trae/documents/nuxt-ui-docs-i18n-vercel.md)。

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

- **本地完整预渲染构建不可行**：7 语言 × 196 个内容文件 + component-meta 解析 + 批量预渲染，即使把 `NODE_OPTIONS` 调到 `--max-old-space-size=12288`，在 macOS (darwin-arm64) 上仍经常 OOM；完整预渲染和函数后处理 **必须走 GitHub Actions**。本地验证可临时 `SKIP_PRERENDER=1 nuxt build docs` 只跑 SSR 模式，或 `PRERENDER_LOCALES=default nuxt build docs` 只预渲染英文一批。
- 部署走 [deploy-docs.yml](file:///Users/yiqun/WebstormProjects/ui/.github/workflows/deploy-docs.yml)（`v4` 分支，ubuntu-latest，Node 22，pnpm `node-linker=hoisted`）；不要依赖 Vercel Dashboard 的 Git 自动构建。
- 禁止恢复 `vercel pull` / `vercel build`：服务端 `rootDirectory=docs` 会覆盖仓库 `vercel.json`，导致 Tsconfig not found 并绕过构建命令。
- 预渲染必须按语言分批（`default` / `zh,ja,ko` / `fr,de,nl,es`），保持 `concurrency: 1` 与 `failOnError: false`；不要用 `SKIP_PRERENDER=1` 替代分批。
- 部署命令固定为 `vercel deploy --prebuilt --prod --yes --archive=tgz`；不要用 preview + alias（`vercel alias set` 鉴权路径会报 User not found）。
- 构建后必须删除 `functions/` 下指向 `__fallback` 的软链、把 `config.json` 的 `dest` 归并到 `/__fallback`（Hobby 档 12 函数上限），并补齐函数目录缺失的传递依赖。

## 通用

- 未经用户明确要求，不要执行 `git commit` / `git push`；提交信息遵循 conventional commits。
- 修改 `src/` 或 `test/` 时，仍遵守 AGENTS.md 中的组件结构、主题与测试约定。
