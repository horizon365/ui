# Nuxt UI 文档站多语言国际化 + Cloudflare 部署方案

> 状态：已实现（2026-10 上线，2026-11 由 Vercel 迁移到 Cloudflare Workers）。本文档是最初的实施计划，步骤 7、10 已按落地结果改写。运行时的事实来源为 [docs/nuxt.config.ts](file:///Users/yiqun/WebstormProjects/ui/docs/nuxt.config.ts)、[docs/content.config.ts](file:///Users/yiqun/WebstormProjects/ui/docs/content.config.ts)、[docs/wrangler.jsonc](file:///Users/yiqun/WebstormProjects/ui/docs/wrangler.jsonc)、[deploy-docs.yml](file:///Users/yiqun/WebstormProjects/ui/.github/workflows/deploy-docs.yml) 和 [project_memory.md](file:///Users/yiqun/WebstormProjects/ui/.trae/memory/project_memory.md)。

## Context

最初的站点是纯英文单语言：130+ 个 Markdown 文档直接放在 `docs/content/docs/` 下，由单个 `docs` collection 扫描（[content.config.ts](file:///Users/yiqun/WebstormProjects/ui/docs/content.config.ts)），页面 [pages/docs/[...slug].vue](file:///Users/yiqun/WebstormProjects/ui/docs/app/pages/docs/[...slug].vue#L14) 直接用 `route.path` 查询 content，[useNavigation.ts](file:///Users/yiqun/WebstormProjects/ui/docs/app/composables/useNavigation.ts) 把 `/docs/${slug}` 硬编码进路径解析；站内没有 `@nuxtjs/i18n`、语言切换 UI 和 Vercel 配置。

目标：把站点翻译成 7 种语言（中文 zh、日语 ja、韩语 ko、法语 fr、德语 de、荷兰语 nl、西班牙语 es），英文 en 为默认；URL 采用子路径（`/zh/docs/...`、`/ja/docs/...`，英文无前缀）；AI 翻译 + 人工校对；部署到 Cloudflare Workers（2026-11 前为 Vercel）。当前 7 种语言各 196 个文件已全部翻译完成，结构/查询实现见步骤 2、3。

## 技术方案概览

采用 Nuxt 官方推荐栈（来源：[content.nuxt.com/docs/integrations/i18n](https://content.nuxt.com/docs/integrations/i18n) + [i18n.nuxtjs.org/docs/guide](https://i18n.nuxtjs.org/docs/guide)）：

| 关注点 | 选型 |
|--------|------|
| i18n 模块 | `@nuxtjs/i18n`，strategy = `prefix_except_default` |
| 默认语言 | `en`（无前缀），其他 7 种带 `/{locale}/` 前缀 |
| Content 组织 | 按语言子目录：`content/en/`、`content/zh/` 等 |
| Collection | 每种语言一个：`docs_en`、`docs_zh`、`docs_ja`、`docs_ko`、`docs_fr`、`docs_de`、`docs_nl`、`docs_es`（共享 schema） |
| 页面查询 | `queryCollection('docs_' + locale.value).path(slug).first()` + fallback 到 `docs_en` |
| sitemap hreflang | `@nuxtjs/sitemap` 与 `@nuxtjs/i18n` 集成后自动生成 |
| 部署 | GitHub Actions 预构建 + `wrangler deploy`，目标 Cloudflare Workers Static Assets（Nitro preset `cloudflare_module`） |

## 详细实施步骤

### 步骤 1：安装依赖

在仓库根 [package.json](file:///Users/yiqun/WebstormProjects/ui/package.json) 的 `devDependencies` 加入 `@nuxtjs/i18n`（用 catalog 方式），并更新 [pnpm-workspace.yaml](file:///Users/yiqun/WebstormProjects/ui/pnpm-workspace.yaml) 的 catalog 字段固定版本（参考最新稳定版 `@nuxtjs/i18n@^10`）。

```bash
pnpm install
```

### 步骤 2：内容文件目录重组

把 [docs/content/](file:///Users/yiqun/WebstormProjects/ui/docs/content) 下现有内容搬到 `en/` 子目录，保留相同相对结构。**范围限定在**：首页 `index.yml`、`docs/` 子目录（组件文档 + Getting Started）。

最终结构（示例）：

```
docs/content/
├── en/
│   ├── index.yml              ← 现有 content/index.yml 移入
│   └── docs/
│       ├── 1.getting-started/...
│       └── 2.components/...
├── zh/
│   ├── index.yml
│   └── docs/...
├── ja/ ...
├── ko/ ...
├── fr/ ...
├── de/ ...
├── nl/ ...
└── es/ ...
```

`blog/`、`community.yml`、`showcase.yml`、`templates.yml`、`team.yml`、`posts` 集合**保留原位**（不在本次翻译范围内），可继续用原集合；用户访问 `/zh/blog/...` 时由 i18n 自动加前缀但内容仍是英文（作为最小可用降级）。

### 步骤 3：改造 content.config.ts

[docs/content.config.ts](file:///Users/yiqun/WebstormProjects/ui/docs/content.config.ts) 把 `docs` 和 `index` 集合拆为 8 个语言版本，共享 schema。用工厂函数减少重复：

```ts
const locales = ['en', 'zh', 'ja', 'ko', 'fr', 'de', 'nl', 'es'] as const

function docsCollection(locale: string) {
  return defineCollection({
    type: 'page',
    source: { include: `${locale}/docs/**/*`, prefix: '/docs' },
    schema: DocsSchema  // 抽出当前 docs schema
  })
}

function indexCollection(locale: string) {
  return defineCollection({
    type: 'page',
    source: `${locale}/index.yml`,
    schema: Page
  })
}

export const collections = Object.fromEntries(
  locales.flatMap(l => [
    [`docs_${l}`, docsCollection(l)],
    [`index_${l}`, indexCollection(l)]
  ])
  // 加上未翻译的 blog、posts、showcase、templates、community、team 原集合
)
```

**关键点**：`source.prefix: '/docs'` 让英文版路径仍是 `/docs/...`（无 locale 前缀）；其他语言版本由 i18n 路由自动加 `/zh/docs/...` 前缀，content 内部 stem 仍是 `/docs/...`，页面查询时 strip 掉 locale 前缀即可复用同一 slug。

### 步骤 4：i18n 模块配置

[docs/nuxt.config.ts](file:///Users/yiqun/WebstormProjects/ui/docs/nuxt.config.ts) 修改：

1. `modules` 数组在 `@nuxt/content` **之后**加入 `'@nuxtjs/i18n'`（顺序参考官方集成文档）
2. 新增顶层 `i18n` 配置块：

```ts
i18n: {
  strategy: 'prefix_except_default',
  defaultLocale: 'en',
  baseUrl: 'https://ui.nuxt.com',  // 用于 hreflang
  detectBrowserLanguage: false,    // 文档站不强加重定向，让用户主动切
  locales: [
    { code: 'en', name: 'English', language: 'en-US', dir: 'ltr' },
    { code: 'zh', name: '简体中文', language: 'zh-Hans', dir: 'ltr' },
    { code: 'ja', name: '日本語', language: 'ja-JP', dir: 'ltr' },
    { code: 'ko', name: '한국어', language: 'ko-KR', dir: 'ltr' },
    { code: 'fr', name: 'Français', language: 'fr-FR', dir: 'ltr' },
    { code: 'de', name: 'Deutsch', language: 'de-DE', dir: 'ltr' },
    { code: 'nl', name: 'Nederlands', language: 'nl-NL', dir: 'ltr' },
    { code: 'es', name: 'Español', language: 'es-ES', dir: 'ltr' }
  ]
}
```

3. 评估 [routeRules](file:///Users/yiqun/WebstormProjects/ui/docs/nuxt.config.ts#L83-L100)：`prefix_except_default` 下 i18n 自动为非默认 locale 路由加前缀，但**英文版重定向规则**（如 `/getting-started/** → /docs/getting-started/**`）仍生效，无需改动。`/zh/getting-started/**` 等会被 i18n 视为不存在 → 触发 404 + fallback 到 en，可接受。

### 步骤 5：页面查询适配

#### [docs/app/pages/docs/[...slug].vue](file:///Users/yiqun/WebstormProjects/ui/docs/app/pages/docs/[...slug].vue#L14)

```ts
const { locale } = useI18n()
// i18n prefix_except_default 下 route.path 是 /zh/docs/button，需要 strip locale 前缀拿 content stem
const slug = computed(() => {
  const path = route.path.replace(/\/$/, '')
  // 移除可能的 locale 前缀
  const stripped = path.replace(/^\/(zh|ja|ko|fr|de|nl|es)(?=\/|$)/, '')
  return stripped
})

const { data: page } = await useAsyncData(
  `docs-${locale.value}-${slug.value}`,
  async () => {
    const collection = `docs_${locale.value}` as keyof Collections
    let content = await queryCollection(collection).path(slug.value).first()
    // Fallback：该语言没翻到位时回退到英文
    if (!content && locale.value !== 'en') {
      content = await queryCollection('docs_en').path(slug.value).first()
    }
    return content
  },
  { watch: [locale] }  // 切换语言时重新查询
)
```

注意 [line 85](file:///Users/yiqun/WebstormProjects/ui/docs/app/pages/docs/[...slug].vue#L85) 的 `useCanonical` 也要按 locale 调整。

#### [docs/app/pages/index.vue](file:///Users/yiqun/WebstormProjects/ui/docs/app/pages/index.vue#L2)

```ts
const { locale } = useI18n()
const { data: page } = await useAsyncData(`index-${locale.value}`, async () => {
  const collection = `index_${locale.value}` as keyof Collections
  let content = await queryCollection(collection).first()
  if (!content && locale.value !== 'en') {
    content = await queryCollection('index_en').first()
  }
  return content
}, { watch: [locale] })
```

#### [docs/app/components/content/ComponentCode.vue](file:///Users/yiqun/WebstormProjects/ui/docs/app/components/content/ComponentCode.vue) 等

任何用 `queryCollection('docs')` 的地方都要按 locale 切换。搜 `queryCollection\('docs'\)` 全仓库定位（预计 5-10 处）。

### 步骤 6：导航适配

[docs/app/composables/useNavigation.ts](file:///Users/yiqun/WebstormProjects/ui/docs/app/composables/useNavigation.ts) 当前：

- [line 82](file:///Users/yiqun/WebstormProjects/ui/docs/app/composables/useNavigation.ts#L82) `/docs/${slug}` 写死 → 改为按 locale 查询对应 collection 的 navigation
- [line 174](file:///Users/yiqun/WebstormProjects/ui/docs/app/composables/useNavigation.ts#L174) `route.path.split('/')[2]` → 在 `/zh/docs/...` 下偏移要 +1

调用 navigation 的源头（[app.vue](file:///Users/yiqun/WebstormProjects/ui/docs/app/app.vue) 或 layout）也要传 locale-aware 的 collection。组别标题（Overview、Layout、Element 等）当前仍为英文。

当前**没有** `docs/i18n/locales/*.json` 字典：站点 UI 文案（"Edit this page"、"Ask AI"、"Search" 等）仍为英文，只有内容页按 locale 渲染。这与最初计划不同，属于已知的未实现项；如需本地化 UI 文案再新增 8 个语言字典。

### 步骤 7：翻译脚本（已落地）

实际脚本是 [docs/scripts/translate-content.mjs](file:///Users/yiqun/WebstormProjects/ui/docs/scripts/translate-content.mjs)，默认走免密钥的 free 引擎，而不是单一 AI Gateway：

- `free`（默认）：zh/ja/ko/fr/de/es 走腾讯 Transmart，nl 走 Volcengine crx（Transmart 无荷兰语）。Volcengine 单请求约 5000 字符上限，脚本按 4500 字符预算贪心分块；返回行数漂移时逐条重翻。
- `llm`：Vercel AI Gateway，需 `AI_GATEWAY_API_KEY`，默认模型 `gpt-4o-mini`。
- 参数：默认增量（目标文件存在即跳过）、`--force` 全量、`--locale=xx` 单语言、`--dry-run` 只打印计划。
- 环境变量：`TRANSLATION_ENGINE`、`TRANSLATION_MODEL`、`TRANSLATION_CONCURRENCY`、`VOLC_MAX_CHUNK`。

保护规则（改脚本时必须保留）：

1. 代码围栏 ``` 内逐行跳过，围栏标记本身不动。
2. MDC 容器（`::`/`:::` 按冒号数入栈）内的 `---` YAML 配置块整体跳过——翻译键会破坏 `::component-code` 在线示例。
3. 容器内 `#slot` 标记行保留结构，只翻译 `title`/`label`/`description` 属性值。
4. 行首单冒号组件（`:badge{...}`、`:components-list{...}`）按 tag 行处理，避免被引擎吞掉或改坏。
5. frontmatter 仅翻译白名单字段 `title`/`description`/`lead`/`accent`/`label`；`to`/`icon`/路径/颜色等原样保留。
6. 占位符用 `xphNNNx`（腾讯/Volcengine 都能原样透传），不要改回 `@@PH@@`。

运行：

```bash
cd docs
node scripts/translate-content.mjs              # 增量，free 引擎
node scripts/translate-content.mjs --force      # 全量重译
node scripts/translate-content.mjs --locale=zh  # 单语言
node scripts/translate-content.mjs --dry-run    # 只打印计划
```

启动批量翻译前先 `ps aux | grep translate-content` 清理遗留进程，避免旧进程用旧脚本覆盖新译文。

### 步骤 8：UI 语言切换器（已落地）

已在 [Header.vue](file:///Users/yiqun/WebstormProjects/ui/docs/app/components/header/Header.vue#L73-L86) 实现，`useSwitchLocalePath()` 会保留当前页面的 slug。实现形态（计划示意）：

```vue
<UDropdownMenu
  :items="locales.map(l => ({ label: l.name, icon: l.code === currentLocale ? 'i-lucide-check' : undefined, to: switchLocalePath(l.code) }))"
>
  <UButton color="neutral" variant="ghost" icon="i-lucide-languages" aria-label="Language" />
</UDropdownMenu>
```

`locales` 与 `currentLocale` 从 `useI18n()` 取，`switchLocalePath` 是 `@nuxtjs/i18n` 内置 composable，自动生成切换后的对应 URL。

### 步骤 9：sitemap 与 hreflang

`@nuxtjs/sitemap` 在 `@nuxtjs/i18n` 下会生成子 sitemap 与 hreflang。落地时的关键点（详见 [content.config.ts](file:///Users/yiqun/WebstormProjects/ui/docs/content.config.ts) 的 `docsSchema`）：

- 每个语言 collection 用 `defineSitemapSchema({ z, name: 'docs_<locale>' })` 注册，hook 按精确集合名匹配；共用 `docs` 名字会让非英文 URL 漏进英文 sitemap（zh-Hans 曾只剩 7 条）。
- hook 会被 `fn.toString()` 序列化进 Nitro 虚拟模块，不能闭包引用 `locale`，要从集合名解析。
- 非英文条目的 `loc` 需要补 `/{locale}` 前缀（查询用的 content stem 本身不带前缀）。
- `i18n.baseUrl` 必须与部署域名同源（取 `NUXT_PUBLIC_SITE_URL`），否则子 sitemap 指向 `ui.nuxt.com` 导致 404。
- `/robots.txt`、`/sitemap.xml`、`/sitemap_index.xml`、`/__sitemap__/style.xsl` 以及 8 个 `/__sitemap__/*.xml` 必须加入 [nitro.prerender.routes](file:///Users/yiqun/WebstormProjects/ui/docs/nuxt.config.ts)，否则会落到 `__fallback` 函数返回 500，阻塞 Search Console 收录。

### 步骤 10：Cloudflare 部署（最终方案）

**GitHub Actions 预构建 + Cloudflare Pages 静态部署**，见 [deploy-docs.yml](file:///Users/yiqun/WebstormProjects/ui/.github/workflows/deploy-docs.yml)。站点没有 Worker：`nuxt generate` 产出 8 语言完整静态站，Pages 只回源静态文件。Workers 方案已放弃——Nitro 服务端实测 27.8 MB raw / 约 5.5 MB gzip，超过 Free 档 3 MiB 上限（付费 10 MiB），且 D1 首次导入会撞 10ms CPU 上限；GitHub 预构建只解决本机内存，改变不了运行时配额。

| 关注点 | 实际配置 |
|--------|----------|
| 触发 | push 到 `v4`（`docs/**`、`src/**`、workflow 变更）或 `workflow_dispatch` |
| 运行环境 | `ubuntu-latest` + Node 22 + pnpm `node-linker=hoisted` |
| 构建 | `docs/` 下 `pnpm exec nuxt generate`，按 `default` / `zh,ja,ko` / `fr,de,nl,es` 三批预渲染；第一批 `.output/public` 作基底，后两批合并进去 |
| 静态化取舍 | `/api/ai`、`/api/chat`、`/api/completion`、`/mcp` 不存在；`runtimeConfig.public.aiEnabled`（`NUXT_PUBLIC_AI_ENABLED`）在 production 默认 false，Ask AI 入口全部隐藏。`/theme`、`/docs/releases` 改为预渲染；`/api/github/releases.json`、`/api/fonts.json` 预渲染为构建时快照；组件页 Changelog 只显示最近 10 个发布 |
| 内存 | `NODE_OPTIONS=--max-old-space-size=12288`；`nitro.prerender.concurrency=1`、`failOnError=false`。**根因：本地 macOS 即便堆调到 12GB 仍 OOM**——7 语言 × 196 文件 + component-meta 解析 + 全量预渲染，在 darwin-arm64 上峰值超过 16GB。CI 的 Linux runner 16GB + hoisted pnpm 布局才能扛住 |
| 重定向 | [generate-redirects.mjs](file:///Users/yiqun/WebstormProjects/ui/docs/scripts/generate-redirects.mjs) 从 `nuxt.config.ts` 的 `routeRules` 生成 `_redirects`（解析少于 100 条会报错），Pages 原生支持 |
| 图片 | `@nuxt/image` 必须 `provider: 'ipxStatic'`：`ipx` 要在 Worker 里跑 sharp，Workers 不支持；静态模式在构建期生成变体 |
| 部署 | `docs/` 下 `wrangler pages deploy .output/public --project-name=nuxt-ui-docs --branch=v4`（[docs/wrangler.jsonc](file:///Users/yiqun/WebstormProjects/ui/docs/wrangler.jsonc) 只保留 `name` + `pages_build_output_dir`） |
| 域名 | `https://nuxt-ui.vite.js.cn`（Cloudflare Dashboard 绑定）；`NUXT_PUBLIC_SITE_URL` 同时喂给 `site.url`、`i18n.baseUrl` 和 sitemap |
| 密钥 | GitHub secrets `CLOUDFLARE_API_TOKEN`（Pages:Edit）/ `CLOUDFLARE_ACCOUNT_ID`，以及构建期用的 `NUXT_GITHUB_TOKEN` |

维护要点：

- **本地完整预渲染构建不可行**：即使把 `NODE_OPTIONS=--max-old-space-size=12288`，macOS 上跑全量 7 语言仍会 OOM。本地改完只跑 `nuxt dev docs`，或 `SKIP_PRERENDER=1 nuxt build docs` 验证能打包；完整 `nuxt generate` **必须** 让 GitHub Actions 跑完。
- Pages 项目的**生产分支必须是 `v4`**，否则 `--branch=v4` 会被当成预览部署。
- 不要恢复 `vercel pull` / `vercel build` / Vercel CLI：Vercel 项目及 `vercel.json` 已移除。
- 不要恢复 Worker / `cloudflare_module`：那需要 Workers Paid，并重新引入 D1 与首次导入。
- 改 `routeRules` 的 redirect 后，确认 `generate-redirects.mjs` 输出的条数没有骤降（脚本带 100 条下限保护）。
- Pages Free 额度：无限请求、20,000 个文件、单文件 25 MiB；workflow 的 Verify 步骤会打印文件数与体积。

历史（已废弃）：更早用 GitHub Actions 预构建 + `vercel deploy --prebuilt --prod --yes --archive=tgz`（Hobby 档 12 函数上限，把约 300 个 `__fallback` 软链归并成单函数）；中间尝试过 Workers Static Assets + D1，因 3 MiB / 10ms CPU 上限放弃。

## 关键文件清单

需要修改/新增的文件：

| 文件 | 动作 |
|------|------|
| [package.json](file:///Users/yiqun/WebstormProjects/ui/package.json) | 加 `@nuxtjs/i18n` devDep |
| [pnpm-workspace.yaml](file:///Users/yiqun/WebstormProjects/ui/pnpm-workspace.yaml) | catalog 加 i18n 版本 |
| [docs/content.config.ts](file:///Users/yiqun/WebstormProjects/ui/docs/content.config.ts) | 拆 8 个语言 collection |
| [docs/nuxt.config.ts](file:///Users/yiqun/WebstormProjects/ui/docs/nuxt.config.ts) | 加 i18n 模块、prerender routes；`$production.nitro` 切 `cloudflare_module`；`@nuxt/image` 用 `ipxStatic` |
| [docs/wrangler.jsonc](file:///Users/yiqun/WebstormProjects/ui/docs/wrangler.jsonc) | Cloudflare Pages 项目配置（`name` + `pages_build_output_dir`） |
| [docs/scripts/generate-redirects.mjs](file:///Users/yiqun/WebstormProjects/ui/docs/scripts/generate-redirects.mjs) | 把 `routeRules` 重定向生成 Pages `_redirects` |
| [.github/workflows/deploy-docs.yml](file:///Users/yiqun/WebstormProjects/ui/.github/workflows/deploy-docs.yml) | 分批预渲染 + `wrangler deploy` |
| [docs/app/pages/docs/[...slug].vue](file:///Users/yiqun/WebstormProjects/ui/docs/app/pages/docs/[...slug].vue) | locale-aware 查询 |
| [docs/app/pages/index.vue](file:///Users/yiqun/WebstormProjects/ui/docs/app/pages/index.vue) | locale-aware 查询 |
| [docs/app/composables/useNavigation.ts](file:///Users/yiqun/WebstormProjects/ui/docs/app/composables/useNavigation.ts) | 按 locale 选 collection 与路径前缀 |
| [docs/app/components/header/Header.vue](file:///Users/yiqun/WebstormProjects/ui/docs/app/components/header/Header.vue) | 加语言切换 dropdown |
| [docs/app/app.vue](file:///Users/yiqun/WebstormProjects/ui/docs/app/app.vue) 或 layout | 注入 navigation 时按 locale |
| `docs/i18n/locales/{en,zh,ja,ko,fr,de,nl,es}.json` | **未实现**，UI 字符串仍为英文 |
| [docs/scripts/translate-content.mjs](file:///Users/yiqun/WebstormProjects/ui/docs/scripts/translate-content.mjs) | 新建，翻译脚本 |
| [docs/content/{en,zh,ja,ko,fr,de,nl,es}/](file:///Users/yiqun/WebstormProjects/ui/docs/content) | 新建语言目录，en/ 内放原 content |

## 验证方式

1. **本地启动**：

   ```bash
   pnpm install && pnpm run dev:prepare && pnpm run docs
   ```

   访问：
   - `http://localhost:3000/` → 英文首页
   - `http://localhost:3000/zh` → 中文首页（翻译生效）
   - `http://localhost:3000/zh/docs/components/button` → 中文 Button 组件页
   - `http://localhost:3000/docs/components/button` → 英文（默认无前缀）
   - Header 右上角语言切换器点击切换 → URL 与内容都跟着变

2. **构建预演（本地只做打包验证）**：

   ```bash
   cd docs && SKIP_PRERENDER=1 pnpm exec nuxt build
   ```

   `nuxt generate` 的完整输出（含 8 语言 HTML、`_redirects`、404）只能由 CI 产出；本地不要指望能跑完。

3. **类型与代码质量**：

   ```bash
   pnpm run typecheck   # 含 nuxt typecheck docs
   pnpm run lint
   ```

4. **Cloudflare 上线验证**：push 到 `v4` 触发 workflow（`nuxt generate` + `wrangler pages deploy`），然后验证：
   - `/zh`、`/ja`、`/ko`、`/fr`、`/de`、`/nl`、`/es` 都返回 200
   - 旧 URL（如 `/docs/components/button-group`）按 `_redirects` 301 到新地址
   - sitemap.xml 含 hreflang 链接；`/raw/**`、`/llms.txt` 等静态文件可访问
   - OG 图、canonical URL 正确；Ask AI / MCP 入口不再出现

5. **fallback 测试**：手动删除某中文页面（如 `content/zh/docs/components/accordion.md`），访问 `/zh/docs/components/accordion`，应自动回退到英文版本而非 404。

## 风险与降级

1. **本地完整构建 OOM（已验证必须走 CI）**：7 语言 × 196 文件的 content SQLite 写入 + component-meta 全量解析 + 预渲染并发，在 macOS (darwin-arm64) 上峰值内存超 16GB，即使堆调到 `--max-old-space-size=12288` 也会在第二或第三批预渲染时崩掉。**没有可行的本地完整构建路径**，任何本地验证只跑 dev 或 `SKIP_PRERENDER=1 nuxt build` / `PRERENDER_LOCALES=default nuxt build`。完整预渲染必须依赖 GitHub Actions 的 Linux 16GB runner。
2. **为什么不用 Workers**：2026-11 实测 Nitro 服务端 27.8 MB raw / 约 5.5 MB gzip，超过 Workers Free 3 MiB（付费 10 MiB），且 D1 首次导入会撞 Free 档 10ms CPU。GitHub 预构建解决的是本机内存，解决不了运行时配额——所以改为纯静态 Pages。
3. **静态化的功能降级**：`/api/ai`、`/api/chat`、`/api/completion`、`/mcp` 不存在，Ask AI 入口由 `runtimeConfig.public.aiEnabled` 隐藏；组件页 Changelog 只剩最近 10 个发布快照（无逐组件 commit）；`/theme` 的 `?doc=` 主题在 hydration 后才应用；`/docs/releases` 详情页的按需拉取在静态下不可用。
4. **i18n 模块与 nuxt-og-image / nuxt-agent-discovery 等模块兼容性**：装好后跑 `pnpm run docs` 若有模块冲突，可暂时在 i18n 配置里 `bundle: { optimizeTranslationDirective: false }` 等。先 dev 模式跑起来看。
5. **MDC 语法被 LLM 破坏**：脚本里用强 prompt + 代码块白名单（`::alert`、`:icon` 等保留），跑完后跑 `pnpm run lint` 对 content 做 markdown 校验。
6. **翻译体量大**：约 130 文件 × 7 语言 ≈ 910 次翻译调用，AI gateway 速率限制可能触发，脚本加 `concurrency: 3` + 重试。
7. **routeRules 冲突**：现有 `/docs/components/button-group → /docs/components/field-group` 等大量重定向，i18n 加前缀后英文版规则仍生效，非默认语言版会进入 404 fallback，可接受但需要用 lint 验证没有死链。
8. **`dev:prepare` 较慢**：要构建 Nuxt UI 源码 stub + vue playground build。已改由 GitHub Actions 构建，本机不需要跑 `pnpm run dev:prepare` 全量。

## 后续可选优化

- 接入 [nuxtseo.dev](https://nuxtseo.dev) 的多语言 SEO 整合（已装 `@nuxtjs/sitemap`，可加 `nuxt-og-image` locale-aware OG 图）
- 用 `definePageMeta({ middleware: ['i18n'] })` 处理 docs catch-all 的 locale 解析
- 把 blog、community 等未翻译集合也加入翻译范围（用户后续如需）
- 翻译进度可视化：在 GitHub Actions 跑脚本生成翻译覆盖率报告
