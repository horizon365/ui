---
title: 内容目录
description: '具有自动活动锚链接突出显示的粘性目录。'
category: content
framework: nuxt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentToc.vue
---

::warning{to="/docs/getting-started/integrations/content"}
此组件仅在安装了`@nuxt/content`模块时可用。
::

## 用法

将`links`道具与获取页面时获得的`page?.body?.toc?.links`{lang="ts-type"}配合使用。

::component-example
---
名称：'内容目录范例'
道具：
  类别：'w-完整'
---
::

### 标题

使用`title`道具更改目录的标题。

::component-code{prefix="content"}
---
更漂亮：真的
收阖：true
隐藏：
  班级
忽略：
  链接
外部：
  链接
外部类型：
  - ContentTocLink[]内容目录链接
道具：
  title：'在此页上'
  类别：'w-完整'
  链接：
  - id：用法
    深度：2
    text：用法
    孩子们：
- id：标题
      深度：3
      text：标题
- id：颜色
      深度：3
      文字：颜色
    - id：高亮显示
      深度：3
      文本：突出显示
    - id：'突出显示颜色'
      深度：3
      文字：反白色彩
    - id：“突出显示的变量”
      深度：3
      文本：突出显示变量
---
::

颜色

使用`color`道具更改链接的颜色。

::component-code{prefix="content"}
---
更漂亮：真的
收阖：true
隐藏：
  班级
忽略：
  链接链接
外部：
  链接
外部类型：
  - 内容目录链接[]
道具：
  颜色："中性"
  类别：'w-完整'
  链接：
- id：用法
      深度：2
      text：用法
      孩子们：
        @ID：标题
          深度：3
          text：标题
- id：颜色
          深度：3
          文字：颜色
        - id：高亮显示
          深度：3
          文本：突出显示
        - id：'突出显示颜色'
          深度：3
          文字：反白色彩
        - id："突出显示的变体"
          深度：3
          文本：突出显示变量
---
::

醒目提示

使用`highlight`道具来显示现用项目的反白边框。

::component-code{prefix="content"}
---
更漂亮：真的
收阖：true
隐藏：
  班级
忽略：
  链接
外部：
  链接
外部类型：
  - ContentTocLink[]内容目录链接
道具类：
  高亮显示：真
  类别：'w-完整'
  链接：
- id：用法
      深度：2
      text：用法
      孩子们：
        @ ID：标题
          深度：3
          text：标题
        - id：颜色
          深度：3
          文字：颜色
        - id：高亮显示
          深度：3
          文本：突出显示
        - id：'突出显示颜色'
          深度：3
          文字：反白色彩
        - id：“突出显示的变体”
          深度：3
          文本：突出显示变量
---
::

### Highlight色彩

使用`highlight-color`属性更改突出显示的颜色。默认为`color`属性。

::component-code{prefix="content"}
---
更漂亮：真的
收阖：true
隐藏：
  班级
忽略：
  链接
  突出显示
外部：
  链接
外部类型：
  - 内容目录链接[]
道具：
  高亮显示：真
  highlightColor：'中性色'
  类别：'w-完整'
  链接：
    @ ID：用法
      深度：2
      text：用法
      孩子们：
        我的天啊
          深度：3
          text：标题
- 的颜色
          深度：3
          文字：颜色
        - id：高亮显示
          深度：3
          文本：突出显示
        - id：'突出显示颜色'
          深度：3
          文字：反白色彩
        - id：“突出显示的变体”
          深度：3
          文本：突出显示变量
---
::

### 突出显示变量：徽标{label="4.6+" class="align-text-top"}

使用`highlight-variant`道具更改高亮显示的样式。默认为`straight`。

::component-code{prefix="content"}
---
更漂亮：真的
收阖：true
隐藏：
  班级
忽略：
  链接
  突出显示
外部：
  链接
外部类型：
  - ContentTocLink[]内容目录链接
道具类：
  高亮显示：真
  highlightColor：“主要”
  highlightVariant：'电路'
  类别：'w-完整'
  链接：
    @@ ID：用法
      深度：2
      text：用法
      孩子们：
        @ ID：标题
          深度：3
          text：标题
        - id：颜色
          深度：3
          文字：颜色
        - id：高亮显示
          深度：3
          文本：突出显示
        - id：'突出显示颜色'
          深度：3
          文字：反白色彩
        - id：“突出显示的变体”
          深度：3
          文本：突出显示变量
    - id：示例
      深度：2
      文本：示例
      孩子们：
        - id：在一页内
          深度：3
          text：在页面内
    @ ID：API的一个字符串
      深度：2
      文本：API
      孩子们：
        我的天
          深度：3
          text：属性
        - id：slots
          深度：3
          文本：插槽
        - id：emits
          深度：3
          文本：发射
    - id：theme
      深度：2
      主题：Theme
---
::

## Examples

### 页内

在页面中使用ContentToc组件可显示目录：

```vue [pages/\[...slug\\].vue]{22-24}
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

：组件支柱

### Slots

：组件插槽

### Emits

：组件发射

## Theme

：组件主题

## Changelog

：组件-更改日志{prefix="content"}
