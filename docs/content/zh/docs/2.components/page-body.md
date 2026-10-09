---
title: 页面正文
description: '您页面的主要内容。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageBody.vue
---

## 用法

PageBody组件包装您的主要内容并添加一些填充以保持一致的间距。

在[PageHeader](/docs/components/page-header)组件之后的[Page](/docs/components/page)组件的默认插槽中使用它：

```vue {5}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

## 示例

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 页面内

使用页面中的PageBody组件来显示页面的内容：

```vue [pages/\[...slug\\].vue]{21-27}
<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('content', route.path)
})
</script>

<template>
  <UPage>
    <UPageHeader :title="page.title" :description="page.description" />

    <UPageBody>
      <ContentRenderer :value="page" />

      <USeparator />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
```

::note
在本例中，我们使用`@nuxt/content`中的[`ContentRenderer`](https://content.nuxt.com/docs/components/content-renderer)组件来呈现页面内容。
::

## API

### Props

:component-props

### 老虎机

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
