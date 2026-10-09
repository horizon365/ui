---
title: ContentToc
description: '自動的にアクティブなアンカーリンクをハイライトするスティッキーな目次。'
category: content
framework: nuxt
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentToc.vue
---

::warning{to="/docs/getting-started/integrations/content"}
このコンポーネントは`@nuxt/content`モジュールがインストールされている場合にのみ使用できます。
::

## 使用法

`links`プロパティは、ページ取得時に取得する`page?.body?.toc?.links`{lang="ts-type"}と共に使用します。

::component-example
---
name: 'content-toc-example'
props:
  class: 'w-full'
---
::

### Title

`title`プロパティを使用して、目次のタイトルを変更します。

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

`color`プロパティを使用して、リンクの色を変更します。

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

### ハイライト

`highlight`プロパティを使用して、アクティブなアイテムのハイライトされた境界線を表示します。

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

### ハイライト色

ハイライトの色を変更するには、`highlight-color`プロパティを使用します。デフォルトでは`color`プロパティになります。

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

### Highlightバリアントbadge{label="4.6+" class="align-text-top"}

ハイライトのスタイルを変更するには、`highlight-variant`プロパティを使用します。デフォルトは`straight`です。

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

## サンプル

### ページ内

ページ内でContentTocコンポーネントを使用して、目次を表示します。

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

### スロット

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog{prefix="content"}
