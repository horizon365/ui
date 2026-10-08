---
title: ProseCodeGroup
description: '将多个代码示例分组在XML接口中，以便于比较。'
category: components
navigation.title: CodeGroup
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeGroup.vue
---

## 使用情况

将您的代码块围绕`code-group`组件，以将它们组合在选项卡中。

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full"}

:::code-group

```bash [pnpm]
pnpm add @nuxt/ui
```

```bash [yarn]
yarn add @nuxt/ui
```

```bash [npm]
npm install @nuxt/ui
```

```bash [bun]
bun add @nuxt/ui
```

:::

#代码

````mdc
::code-group

```bash [pnpm]
pnpm add @nuxt/ui
```

```bash [yarn]
yarn add @nuxt/ui
```

```bash [npm]
npm install @nuxt/ui
```

```bash [bun]
bun add @nuxt/ui
```

::
````

::

::note{to="/docs/typography/code#code-blocks"}
与`ProsePre`组件一样，`CodeGroup`处理文件名、图标和复制按钮。
::

活性成分

### Props

：组件-道具{prose}

### Slots

：组件插槽{prose}

## Theme

：组件主题{prose}

## Changelog

：component-changelog{prefix="prose"}
