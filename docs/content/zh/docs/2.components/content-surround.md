---
title: ContentSurround
description: '一对上一页和下一页链接，用于在页面之间导航。'
category: content
framework: nuxt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSurround.vue
---

::warning{to="/docs/getting-started/integrations/content"}
此组件仅在安装`@nuxt/content`模块时可用。
::

## 用法

使用`surround` prop和`surround`{lang="ts-type"}值来获取页面环绕。

::component-example
---
name: 'content-surround-example'
props:
  class: 'w-full'
---
::

### 上一页/下一页

使用`prev-icon`和`next-icon`道具自定义按钮[Icon](/docs/components/icon)。

::component-code{prefix="content"}
---
prettier: true
collapse: true
ignore:
  - surround
external:
  - surround
externalTypes:
  - ContentSurroundLink[]
props:
  prevIcon: 'i-lucide-chevron-left'
  nextIcon: 'i-lucide-chevron-right'
  surround:
  - title: ContentSearchButton
    path: /docs/components/content-search-button
    stem: docs/2.components/content-search-button
    description: A pre-styled Button to open the ContentSearch modal.
  - title: ContentToc
    path: /docs/components/content-toc
    stem: docs/2.components/content-toc
    description: A sticky Table of Contents with customizable slots.
---
::

## 示例

### 页面内

在页面中使用ContentSurround组件可以显示上一个和下一个链接：

```vue [pages/\[...slug\\].vue]{19}
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('docs').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" />

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <USeparator v-if="surround?.filter(Boolean).length" />

      <UContentSurround :surround="(surround as any)" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
```

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog{prefix="content"}
