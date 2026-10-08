---
title: 页面标题
description: '为您的页面提供响应式标题。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHeader.vue
---

## 使用情况

PageHeader组件显示页面的页眉。

请在[Page](/docs/components/page)组件的默认插槽中使用它，然后在[PageBody](/docs/components/page-body)组件之前使用它：

```vue {3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

### 标题

使用`title`道具在页眉中显示标题。

::component-code
---
隐藏：
  班级
道具：
  标题：'页面标题'
  类别：'w-完整'
---
::

说明：

使用`description`属性在标题中显示说明。

::component-code
---
更漂亮：真的
忽略：
  标题：
隐藏：
  班级
道具：
  标题：'页面标题'
  description：'带有标题、描述和操作的响应页面标题。'
  类别：'w-完整'
---
::

标题：

使用`headline`道具在页眉中显示标题。

::component-code
---
更漂亮：真的
忽略：
  标题：
  描述：
隐藏：
  班级
道具：
  标题：'页面标题'
  description：'带有标题、描述和操作的响应页面标题。'
  标题：“组件”
  类别：'w-完整'
---
::

链接

使用`links`属性可在标题中显示[按钮](/docs/components/button的列表。

::component-code
---
更漂亮：真的
外部：
  链接
外部类型：
  - 按钮属性[]
忽略：
  标题
  描述：
  - headline
  - links
隐藏：
  班级
道具：
  标题：'页面标题'
  description：'带有标题、描述和操作的响应页面标题。'
  标题：“组件”
  链接：
    - label：'GitHub'
      图标：i-simple-图标-github
      到：'https：//github.com/nuxt/ui/tree/v4/src/runtime/components/PageHeader.vue'
      目的：'_blank'
  类别：'w-完整'
---
::

示例

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 页内

使用页面中的PageHeader组件可显示页面的页眉：

```vue [pages/\[...slug\\].vue]{19-24}
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
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :headline="page.headline"
      :links="page.links"
    />

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

## API

### Props

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## 变更日志

：组件更改日志
