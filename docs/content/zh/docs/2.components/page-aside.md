---
title: PageAside
description: '一个粘性的旁边显示您的页面导航。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAside.vue
---

## 使用情况

PageAside组件是一个粘性的`<aside>`元素，仅从[`lg`断点](https://tailwindcss.com/docs/breakpoints)开始显示。

::tip{to="/docs/getting-started/theme/css-variables#header"}
PageAside组件使用`--ui-header-height`CSS变量将其自身正确定位在`Header`下方。
::

在[Page](/docs/components/page)组件的`left`或`right`插槽中使用：

```vue {4}
<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>
  </UPage>
</template>
```

## 示例

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 布局内

使用布局中的PageAside组件显示导航：

```vue [layouts/docs.vue]{9-13}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

::note
在本例中，我们使用`ContentNavigation`组件来显示注入到`app.vue`中的导航。
::

## API

### Props

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
