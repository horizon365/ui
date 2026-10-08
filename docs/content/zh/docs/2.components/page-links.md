---
title: 页面链接
description: '要在页面中显示的链接列表。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLinks.vue
---

## 使用情况

使用PageLinks组件可显示链接列表。

::component-code
---
收阖：true
更漂亮：真的
忽略：
  链接
外部：
  链接
外部类型：
  - PageLink[]页面链接
道具：
  链接：
    - label：'编辑此页面'
      图标：i-lucide文件笔
      发送至：https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - 标签：“GitHub上的星星”
      图标：i-lucide-星星
      发送至：https://github.com/nuxt/ui
    - 标签：“版本”
      图标：i-lucide-火箭
      发送至：https://github.com/nuxt/ui/releases
---
::

链接

使用`links`属性作为具有下列属性的对象数组：

009年10月11日
我的天啊！
我的天啊！
我的天啊！

您可以从[Link](/docs/components/link#props)元件传递任何属性，例如`to`、`target`等。

::component-code
---
更漂亮：真的
忽略：
  链接
外部：
  链接
外部类型：
  页面链接[]
道具：
  链接：
    - label：'编辑此页面'
      图标：i-lucide文件笔
      发送至：https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - 标签：“GitHub上的星星”
      图标：i-lucide-星星
      发送至：https://github.com/nuxt/ui
    - 标签：“版本”
      图标：i-lucide-火箭
      发送至：https://github.com/nuxt/ui/releases
---
::

### 标题

使用`title`道具在链接上方显示标题。

::component-code
---
更漂亮：真的
忽略：
  链接
外部的：
  链接
外部类型：
  页面链接[]
道具：
  标题：“社区”
  链接：
    - label：'编辑此页面'
      图标：i-lucide文件笔
      发送至：https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - 标签：“GitHub上的星星”
      图标：i-lucide-星星
      发送至：https://github.com/nuxt/ui
    - 标签：“版本”
      图标：i-lucide-火箭
      发送至：https://github.com/nuxt/ui/releases
---
::

示例

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 在页面内

使用ContentToc组件的`bottom`插槽中的PageLinks组件，在目录下方显示链接列表。

```vue [pages/\[...slug\\].vue]{48-52}
<script setup lang="ts">
import type { PageLink } from '@nuxt/ui'

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

const links = computed<PageLink[]>(() => [{
  icon: 'i-lucide-file-pen',
  label: 'Edit this page',
  to: `https://github.com/nuxt/ui/edit/v4/docs/content/${page?.value?.stem}.md`,
  target: '_blank'
}, {
  icon: 'i-lucide-star',
  label: 'Star on GitHub',
  to: 'https://github.com/nuxt/ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases'
}])
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
      <UContentToc :links="page.body.toc.links">
        <template #bottom>
          <USeparator type="dashed" />

          <UPageLinks title="Community" :links="links" />
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
```

## 活性成分

### 道具

：组件-支柱

插槽

：组件插槽

## 主题

：组件主题

## 变更日志

：组件更改日志
