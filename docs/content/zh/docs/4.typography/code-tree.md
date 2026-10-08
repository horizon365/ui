---
title: ProseCodeTree
description: '使用语法突出显示的代码可视化文件和文件夹结构。'
category: components
navigation.title: CodeTree
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeTree.vue
---

## 使用情况

用`code-tree`组件以任何特定顺序包装代码块，以显示文件的树视图。

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full"}

::code-tree{defaultValue="app/app.config.ts"}

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css']
})

```

```css [app/assets/css/main.css]
@import "tailwindcss";
@import "@nuxt/ui";
```

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'sky',
      colors: 'slate'
    }
  }
})
```

```vue [app/app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

```json [package.json]
{
  "name": "nuxt-app",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "typecheck": "nuxt typecheck"
  },
  "dependencies": {
    "@iconify-json/lucide": "^1.2.0",
    "@nuxt/ui": "^4.0.0",
    "nuxt": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^6.0.0",
    "vue-tsc": "^3.2.0"
  }
}
```

```json [tsconfig.json]
{
  "extends": "./.nuxt/tsconfig.json"
}
```

````md [README.md]
# Nuxt 4 Minimal Starter

Look at the [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm安装程序

# yarn
纱线安装

# bun
bun安装程序
```

## Development server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
纱线发展

# bun
面包运行设备
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
纱线结构

# bun
邦润建筑
```

Locally preview production build:

```bash
# npm
npm运行预览

# pnpm
pnpm运行预览

# yarn
纱线预览

# bun
面包跑预告
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
````

::

#代码

::code-collapse{class="[&>div>pre]:rounded-t-none [&>div]:my-0"}

`````mdc
::code-tree{defaultValue="app/app.config.ts"}

```ts [nuxt.config.ts]
defineNuxtConfig（{
  模块：'@nuxt/ui']，

  css：文件'assets/css/main.css']
})

```

```css [app/assets/css/main.css]
@import "tailwindcss";
@import "@nuxt/ui ";
```

```ts [app/app.config.ts]
defineAppConfig（{
  UI：{
    颜色：{
      主：'天空'，
      颜色：'slate'
    }
  }
})
```

```vue [app/app.vue]
<template>
  <UApp>
<NuxtPage />小时
  </UApp>
</template>
```

```json [package.json]
{
  "name"："nuxt-app"，
  "私有"：是，
  "type"："模块"，
  "脚本"：{
    "build"："nuxt build"，
    "dev"："nuxt dev"，
    “generate”：“nuxt generate”，
    "preview"："nuxt preview"，
    "postinstall"："nuxt prepare"，
    "typecheck"："nuxt typecheck"
  },
  "dependencies"：{
    "@iconify-json/lucide "："^1.2.0 "，
    "@nuxt/ui "："^4.0.0 "，
    "nuxt"："^4.0.0"
  },
  "develop"：{
    "typescript"："^6.0.0"，
    "vue-tsc"："^3.2.0"
  }
}
```

```json [tsconfig.json]
{
  "extends"："./.nuxt/tsv.json"
}
```

````md [README.md]
# Nuxt 4最小启动器

查看[Nuxt 4文档](https://nuxt.com/docs/getting-started/introduction)了解更多信息。

## Setup

确保安装依赖项：

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development server

在`http://localhost:3000`上启动开发服务器：

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

构建用于生产的应用程序：

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

本地预览生产版本：

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

有关详细信息，请查看[deployment documentation](https://nuxt.com/docs/getting-started/deployment)。
````

::
`````

::

::

::note{to="/docs/typography/code#code-blocks"}
与`ProsePre`组件一样，`CodeTree`处理文件名、图标和复制按钮。
::

## API

### Props

：组件-道具{prose}

### Slots

：组件插槽{prose}

## Theme

：组件主题{prose}

## Changelog

：component-changelog{prefix="prose"}
