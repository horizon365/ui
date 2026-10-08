---
title: 散文步骤
description: '将标题转换为编号的分步指南和教程。'
category: components
navigation.title: Steps
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Steps.vue
---

## 使用情况

使用步骤组件将标题括起来以显示步骤列表。

使用`level`prop定义将用于步骤的标题。

:::code-preview{class="[&>div]:*:w-full"}
::steps{level="4"}

#### 在您的`nuxt.config.ts`中添加Nuxt UI模块

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

#### Import Tailwind CSS in your CSS

```css [app/assets/css/main.css]
@import "tailwindcss";
```

#### Start your development server

```bash
npm run dev
```

::

#代码

````mdc
::steps{level="4"}

#### Add the Nuxt UI module in your `nuxt.config.ts`

```ts [nuxt.config.ts]
defineNuxtConfig（{
  模块：'@ nuxt/ui']
})
```

#### Import Tailwind CSS in your CSS

```css [app/assets/css/main.css]
@import“tailwindcss”;
```

#### Start your development server

```bash
npm run dev
```

::
````

:::

## API

道具

：组件-道具{prose}

插槽

：组件插槽{prose}

## Theme

：组件主题{prose}

## Changelog

：component-changelog{prefix="prose"}
