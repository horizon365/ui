# Nuxt UI 文档站多语言国际化 + Vercel 部署方案

## Context

Nuxt UI 文档站（[docs/](file:///Users/yiqun/WebStromProjects/ui/docs)）目前是纯英文单语言站点，所有 130+ 个 Markdown 文档直接放在 [docs/content/docs/](file:///Users/yiqun/WebStromProjects/ui/docs/content/docs) 下，由单个 `docs` collection 扫描（[content.config.ts:62-84](file:///Users/yiqun/WebStromProjects/ui/docs/content.config.ts#L62-L84)）。页面 [pages/docs/[...slug].vue](file:///Users/yiqun/WebStromProjects/ui/docs/app/pages/docs/[...slug].vue#L14) 直接用 `route.path` 查询 content，[useNavigation.ts](file:///Users/yiqun/WebStromProjects/ui/docs/app/composables/useNavigation.ts) 把 `/docs/${slug}` 硬编码进路径解析。站内无任何 `@nuxtjs/i18n` 模块、无 locale 切换 UI、无 Vercel 配置。

目标：把站点翻译成 7 种语言（中文 zh、日语 ja、韩语 ko、法语 fr、德语 de、荷兰语 nl、西班牙语 es），英文 en 为默认；URL 采用子路径（`/zh/docs/...`、`/ja/docs/...`，英文无前缀）；AI 翻译 + 人工校对；最终部署到 Vercel。

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
| Vercel 部署 | Root Directory = `docs/`，Build = `pnpm run dev:prepare && pnpm run docs:build`，Output = Nuxt 默认 `.output/public`，无需 vercel.json |

## 详细实施步骤

### 步骤 1：安装依赖

在仓库根 [package.json](file:///Users/yiqun/WebStromProjects/ui/package.json) 的 `devDependencies` 加入 `@nuxtjs/i18n`（用 catalog 方式），并更新 [pnpm-workspace.yaml](file:///Users/yiqun/WebStromProjects/ui/pnpm-workspace.yaml) 的 catalog 字段固定版本（参考最新稳定版 `@nuxtjs/i18n@^10`）。

```bash
pnpm install
```

### 步骤 2：内容文件目录重组

把 [docs/content/](file:///Users/yiqun/WebStromProjects/ui/docs/content) 下现有内容搬到 `en/` 子目录，保留相同相对结构。**范围限定在**：首页 `index.yml`、`docs/` 子目录（组件文档 + Getting Started）。

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

[docs/content.config.ts](file:///Users/yiqun/WebStromProjects/ui/docs/content.config.ts) 把 `docs` 和 `index` 集合拆为 8 个语言版本，共享 schema。用工厂函数减少重复：

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

[docs/nuxt.config.ts](file:///Users/yiqun/WebStromProjects/ui/docs/nuxt.config.ts) 修改：

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

3. 评估 [routeRules](file:///Users/yiqun/WebStromProjects/ui/docs/nuxt.config.ts#L83-L100)：`prefix_except_default` 下 i18n 自动为非默认 locale 路由加前缀，但**英文版重定向规则**（如 `/getting-started/** → /docs/getting-started/**`）仍生效，无需改动。`/zh/getting-started/**` 等会被 i18n 视为不存在 → 触发 404 + fallback 到 en，可接受。

### 步骤 5：页面查询适配

#### [docs/app/pages/docs/[...slug].vue](file:///Users/yiqun/WebStromProjects/ui/docs/app/pages/docs/[...slug].vue#L14)

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

注意 [line 85](file:///Users/yiqun/WebStromProjects/ui/docs/app/pages/docs/[...slug].vue#L85) 的 `useCanonical` 也要按 locale 调整。

#### [docs/app/pages/index.vue](file:///Users/yiqun/WebStromProjects/ui/docs/app/pages/index.vue#L2)

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

#### [docs/app/components/content/ComponentCode.vue](file:///Users/yiqun/WebStromProjects/ui/docs/app/components/content/ComponentCode.vue) 等

任何用 `queryCollection('docs')` 的地方都要按 locale 切换。搜 `queryCollection\('docs'\)` 全仓库定位（预计 5-10 处）。

### 步骤 6：导航适配

[docs/app/composables/useNavigation.ts](file:///Users/yiqun/WebStromProjects/ui/docs/app/composables/useNavigation.ts) 当前：

- [line 82](file:///Users/yiqun/WebStromProjects/ui/docs/app/composables/useNavigation.ts#L82) `/docs/${slug}` 写死 → 改为按 locale 查询对应 collection 的 navigation
- [line 174](file:///Users/yiqun/WebStromProjects/ui/docs/app/composables/useNavigation.ts#L174) `route.path.split('/')[2]` → 在 `/zh/docs/...` 下偏移要 +1

调用 navigation 的源头（[app.vue](file:///Users/yiqun/WebStromProjects/ui/docs/app/app.vue) 或 layout）也要传 locale-aware 的 collection。组别标题（Overview、Layout、Element 等）用 i18n vue-i18n 字典翻译。

新增 [docs/i18n/locales/en.json](file:///Users/yiqun/WebStromProjects/ui/docs/i18n) 等 8 个语言字典，存放 UI 字符串（"Edit this page"、"Ask AI"、"Search" 等），配合 [pages/docs/[...slug].vue#L121-L131](file:///Users/yiqun/WebStromProjects/ui/docs/app/pages/docs/[...slug].vue#L121-L131) 等 hardcoded 英文文案。

### 步骤 7：AI 翻译脚本

新建 [docs/scripts/translate-content.mjs](file:///Users/yiqun/WebStromProjects/ui/docs/scripts/translate-content.mjs)：

```js
// 伪代码
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const LOCALES = ['zh', 'ja', 'ko', 'fr', 'de', 'nl', 'es']
const SOURCE = 'content/en'
const FORCE = process.argv.includes('--force')

// 遍历 SOURCE 下所有 .md 和 .yml
// 对每个文件：
//   1. 解析 frontmatter（gray-matter）
//   2. 翻译正文（保留 MDC 语法 ::component、:props、代码块 ```、HTML 标签）
//   3. frontmatter 中的 title / description / hero / navigation.title 翻译
//   4. 路径中的 to / 链接不翻译
//   5. 写入 content/{locale}/对应路径
//   6. 已存在目标文件且非 --force 时跳过

async function translate(text, targetLang) {
  const res = await fetch('https://api.vercel-ai-gateway.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.AI_GATEWAY_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: `You are a professional translator for Vue/Nuxt UI documentation. Translate to ${targetLang}. Preserve all MDC syntax, code blocks, frontmatter YAML keys, and component paths. Only translate natural language text.` },
        { role: 'user', content: text }
      ]
    })
  })
  const data = await res.json()
  return data.choices[0].message.content
}
```

环境变量：复用 [docs/.env.example](file:///Users/yiqun/WebStromProjects/ui/docs/.env.example) 的 `AI_GATEWAY_API_KEY`；新增 `TRANSLATION_MODEL` 可选覆盖。

运行：

```bash
cd docs && node scripts/translate-content.mjs          # 增量
cd docs && node scripts/translate-content.mjs --force # 全量重译
```

### 步骤 8：UI 语言切换器

修改 [docs/app/components/header/Header.vue](file:///Users/yiqun/WebStromProjects/ui/docs/app/components/header/Header.vue#L41) 的 `#right` template，在 Ask AI 之前插入：

```vue
<UDropdownMenu
  :items="locales.map(l => ({ label: l.name, icon: l.code === currentLocale ? 'i-lucide-check' : undefined, to: switchLocalePath(l.code) }))"
>
  <UButton color="neutral" variant="ghost" icon="i-lucide-languages" aria-label="Language" />
</UDropdownMenu>
```

`locales` 与 `currentLocale` 从 `useI18n()` 取，`switchLocalePath` 是 `@nuxtjs/i18n` 内置 composable，自动生成切换后的对应 URL。

### 步骤 9：sitemap 与 hreflang

[docs/nuxt.config.ts](file:///Users/yiqun/WebStromProjects/ui/docs/nuxt.config.ts) 的 `@nuxtjs/sitemap` 在装了 `@nuxtjs/i18n` 后会自动扫描多 collection 并生成 hreflang。确认 [sitemap 配置](file:///Users/yiqun/WebStromProjects/ui/docs/content.config.ts#L47) 的 `defineSitemapSchema` 在每个语言 collection 都启用。

[nitro.prerender.routes](file:///Users/yiqun/WebStromProjects/ui/docs/nuxt.config.ts) 加上各语言首页：`/zh`、`/ja`、`/ko`、`/fr`、`/de`、`/nl`、`/es` 等。

### 步骤 10：Vercel 部署

Vercel Dashboard 配置（**无需在仓库加 vercel.json**，避免和现有 Nuxt 自动检测冲突）：

| 配置项 | 值 |
|--------|-----|
| Framework Preset | Nuxt |
| Root Directory | `docs` |
| Build Command | `pnpm install --frozen-lockfile && pnpm run dev:prepare && pnpm run docs:build` |
| Output Directory | （留空，Nuxt 自动） |
| Install Command | `pnpm install` |
| Environment Variables | `NUXT_PUBLIC_SITE_URL=https://your-domain.com`、`NUXT_GITHUB_TOKEN=...`、`AI_GATEWAY_API_KEY=...` |

`pnpm run dev:prepare` 会跑 `nuxt-module-build build --stub && ... && nuxt prepare docs`，确保 Nuxt UI 源码 stub 已构建（Vercel 上没有 dist）。`docs:build` 即 `nuxt build docs`。

注意：Vercel 默认 Node 版本可能太旧，设置 Node Version = 22.x。

## 关键文件清单

需要修改/新增的文件：

| 文件 | 动作 |
|------|------|
| [package.json](file:///Users/yiqun/WebStromProjects/ui/package.json) | 加 `@nuxtjs/i18n` devDep |
| [pnpm-workspace.yaml](file:///Users/yiqun/WebStromProjects/ui/pnpm-workspace.yaml) | catalog 加 i18n 版本 |
| [docs/content.config.ts](file:///Users/yiqun/WebStromProjects/ui/docs/content.config.ts) | 拆 8 个语言 collection |
| [docs/nuxt.config.ts](file:///Users/yiqun/WebStromProjects/ui/docs/nuxt.config.ts) | 加 i18n 模块、prerender routes |
| [docs/app/pages/docs/[...slug].vue](file:///Users/yiqun/WebStromProjects/ui/docs/app/pages/docs/[...slug].vue) | locale-aware 查询 |
| [docs/app/pages/index.vue](file:///Users/yiqun/WebStromProjects/ui/docs/app/pages/index.vue) | locale-aware 查询 |
| [docs/app/composables/useNavigation.ts](file:///Users/yiqun/WebStromProjects/ui/docs/app/composables/useNavigation.ts) | 按 locale 选 collection 与路径前缀 |
| [docs/app/components/header/Header.vue](file:///Users/yiqun/WebStromProjects/ui/docs/app/components/header/Header.vue) | 加语言切换 dropdown |
| [docs/app/app.vue](file:///Users/yiqun/WebStromProjects/ui/docs/app/app.vue) 或 layout | 注入 navigation 时按 locale |
| [docs/i18n/locales/{en,zh,ja,ko,fr,de,nl,es}.json](file:///Users/yiqun/WebStromProjects/ui/docs/i18n) | 新建，UI 字符串字典 |
| [docs/scripts/translate-content.mjs](file:///Users/yiqun/WebStromProjects/ui/docs/scripts/translate-content.mjs) | 新建，翻译脚本 |
| [docs/content/{en,zh,ja,ko,fr,de,nl,es}/](file:///Users/yiqun/WebStromProjects/ui/docs/content) | 新建语言目录，en/ 内放原 content |

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

2. **构建预演**：

   ```bash
   pnpm run docs:build
   ```

   确认 `.output/public/zh/docs/components/button/index.html` 等静态产物生成（或 SSR 模式下 `nitro` server 正常）。

3. **类型与代码质量**：

   ```bash
   pnpm run typecheck   # 含 nuxt typecheck docs
   pnpm run lint
   ```

4. **Vercel 预览部署**：在 Vercel 项目配置好后 push 任意分支，触发 Preview Deployment，在预览域名验证：
   - `/zh`、`/ja`、`/ko`、`/fr`、`/de`、`/nl`、`/es` 都返回 200
   - sitemap.xml 含 hreflang 链接
   - OG 图、canonical URL 正确

5. **fallback 测试**：手动删除某中文页面（如 `content/zh/docs/components/accordion.md`），访问 `/zh/docs/components/accordion`，应自动回退到英文版本而非 404。

## 风险与降级

1. **i18n 模块与 nuxt-og-image / nuxt-agent-discovery 等模块兼容性**：装好后跑 `pnpm run docs` 若有模块冲突，可暂时在 i18n 配置里 `bundle: { optimizeTranslationDirective: false }` 等。先 dev 模式跑起来看。
2. **MDC 语法被 LLM 破坏**：脚本里用强 prompt + 代码块白名单（`::alert`、`:icon` 等保留），跑完后跑 `pnpm run lint` 对 content 做 markdown 校验。
3. **翻译体量大**：约 130 文件 × 7 语言 ≈ 910 次翻译调用，AI gateway 速率限制可能触发，脚本加 `concurrency: 3` + 重试。
4. **routeRules 冲突**：现有 `/docs/components/button-group → /docs/components/field-group` 等大量重定向，i18n 加前缀后英文版规则仍生效，非默认语言版会进入 404 fallback，可接受但需要用 lint 验证没有死链。
5. **`dev:prepare` 在 Vercel 上较慢**：因为要构建 Nuxt UI 源码 stub + vue playground build，可能超过 Vercel 免费档 45 分钟构建上限。可考虑 pre-built dist 走 npm 包，或在 CI 里 cache。

## 后续可选优化

- 接入 [nuxtseo.dev](https://nuxtseo.dev) 的多语言 SEO 整合（已装 `@nuxtjs/sitemap`，可加 `nuxt-og-image` locale-aware OG 图）
- 用 `definePageMeta({ middleware: ['i18n'] })` 处理 docs catch-all 的 locale 解析
- 把 blog、community 等未翻译集合也加入翻译范围（用户后续如需）
- 翻译进度可视化：在 GitHub Actions 跑脚本生成翻译覆盖率报告
