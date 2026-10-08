---
description: '填充可用视口高度的主元素。'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Main.vue
---

## 使用情况

Main组件呈现一个`<main>`元素，该元素与[Header](/docs/components/header)组件一起工作，以创建一个扩展到视口可用高度的全高布局。

::tip{to="/docs/getting-started/theme/css-variables#header"}
Main组件使用`--ui-header-height`CSS变量将其自身正确定位在`Header`下方。
::

## Examples

### `app.vue`内

在`app.vue`或布局中使用Main组件：

```vue [app.vue]{5-9}
<template>
  <UApp>
    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

## API

### Props

：组件支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
