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
此组件仅在安装`@nuxt/content`模块时可用。
::

## 用法

使用`links`属性和`page?.body?.toc?.links`{lang="ts-type"}属性获取页面。

::component-example
---
name: 'content-toc-example'
props:
  class: 'w-full'
---
::

### 标题

使用`title`属性更改目录的标题。

::component-code{prefix="content"}
---
prettier: true
collapse: true
hide:
  - class
ignore:
  - links
external:
  - links
externalTypes:
  - ContentTocLink[]
props:
  title: 'On this page'
  class: 'w-full'
  links:
  - id: usage
    depth: 2
    text: Usage
    children:
    - id: title
      depth: 3
      text: Title
    - id: color
      depth: 3
      text: Color
    - id: highlight
      depth: 3
      text: Highlight
    - id: 'highlight-color'
      depth: 3
      text: Highlight Color
    - id: 'highlight-variant'
      depth: 3
      text: Highlight Variant
---
::

### Color

使用`color`属性更改链接的颜色。

::component-code{prefix="content"}
---
prettier: true
collapse: true
hide:
  - class
ignore:
  - links
external:
  - links
externalTypes:
  - ContentTocLink[]
props:
  color: 'neutral'
  class: 'w-full'
  links:
    - id: usage
      depth: 2
      text: Usage
      children:
        - id: title
          depth: 3
          text: Title
        - id: color
          depth: 3
          text: Color
        - id: highlight
          depth: 3
          text: Highlight
        - id: 'highlight-color'
          depth: 3
          text: Highlight Color
        - id: 'highlight-variant'
          depth: 3
          text: Highlight Variant
---
::

### 亮点

使用`highlight`属性显示活动项的高亮边框。

::component-code{prefix="content"}
---
prettier: true
collapse: true
hide:
  - class
ignore:
  - links
external:
  - links
externalTypes:
  - ContentTocLink[]
props:
  highlight: true
  class: 'w-full'
  links:
    - id: usage
      depth: 2
      text: Usage
      children:
        - id: title
          depth: 3
          text: Title
        - id: color
          depth: 3
          text: Color
        - id: highlight
          depth: 3
          text: Highlight
        - id: 'highlight-color'
          depth: 3
          text: Highlight Color
        - id: 'highlight-variant'
          depth: 3
          text: Highlight Variant
---
::

### 高亮颜色

使用`highlight-color`属性来改变高亮的颜色。默认为`color`属性。

::component-code{prefix="content"}
---
prettier: true
collapse: true
hide:
  - class
ignore:
  - links
  - highlight
external:
  - links
externalTypes:
  - ContentTocLink[]
props:
  highlight: true
  highlightColor: 'neutral'
  class: 'w-full'
  links:
    - id: usage
      depth: 2
      text: Usage
      children:
        - id: title
          depth: 3
          text: Title
        - id: color
          depth: 3
          text: Color
        - id: highlight
          depth: 3
          text: Highlight
        - id: 'highlight-color'
          depth: 3
          text: Highlight Color
        - id: 'highlight-variant'
          depth: 3
          text: Highlight Variant
---
::

### 突出显示变体：badge{label="4.6+" class="align-text-top"}

使用`highlight-variant`属性将highlight.xml的样式更改为`straight`。

::component-code{prefix="content"}
---
prettier: true
collapse: true
hide:
  - class
ignore:
  - links
  - highlight
external:
  - links
externalTypes:
  - ContentTocLink[]
props:
  highlight: true
  highlightColor: 'primary'
  highlightVariant: 'circuit'
  class: 'w-full'
  links:
    - id: usage
      depth: 2
      text: Usage
      children:
        - id: title
          depth: 3
          text: Title
        - id: color
          depth: 3
          text: Color
        - id: highlight
          depth: 3
          text: Highlight
        - id: 'highlight-color'
          depth: 3
          text: Highlight Color
        - id: 'highlight-variant'
          depth: 3
          text: Highlight Variant
    - id: examples
      depth: 2
      text: Examples
      children:
        - id: within-a-page
          depth: 3
          text: Within a Page
    - id: api
      depth: 2
      text: API
      children:
        - id: props
          depth: 3
          text: Props
        - id: slots
          depth: 3
          text: Slots
        - id: emits
          depth: 3
          text: Emits
    - id: theme
      depth: 2
      text: Theme
---
::

## 示例

### 页面内

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

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog{prefix="content"}
