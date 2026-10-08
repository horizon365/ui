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
此组件仅在安装了`@nuxt/content`模块时可用。
::

## 用法

将`surround`属性与获取页面环绕时获得的`surround`{lang="ts-type"}值一起使用。

::component-example
---
名称：'内容环绕范例'
道具类：
  类别：'w-完整'
---
::

### 上一个/下一个

使用`prev-icon`和`next-icon`道具来自定义按钮[](/docs/components/icon)。

::component-code{prefix="content"}
---
更漂亮：真的
收阖：true
忽略：
  环绕声
外部：
  环绕声
外部类型：
  - 内容环绕链接[]
道具：
  prevIcon：'i-透明-V形-左'
  nextIcon：'i-透明-V形-右'
  环绕：
  - title：内容搜索按钮
    路径：/docs/组件/内容搜索按钮
    stem：docs/2.组件/内容搜索按钮
    描述：一个打开ContentSearch模式的预样式按钮。
  标题：目录
    路径：/docs/组件/内容目录
    股骨柄：文件/2.组件/内容物-目录
    描述：一个带有可定制插槽的粘性目录。
---
::

示例

### 在页面内

在页面中使用ContentSurround组件可显示上一个和下一个链接：

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

美国石油学会

道具

：组件支柱

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志{prefix="content"}
