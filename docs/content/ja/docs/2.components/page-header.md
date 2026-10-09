---
title: PageHeader
description: 'ページのレスポンシブヘッダー。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHeader.vue
---

## 使用法

PageHeaderコンポーネントはページのヘッダーを表示します。

[Page](/docs/components/page)コンポーネントのデフォルトスロット内、[PageBody](/docs/components/page-body)コンポーネントの前に使用します。

```vue {3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

### Title

ヘッダーにタイトルを表示するには、`title`プロパティを使用します。

::component-code
---
hide:
  - class
props:
  title: 'PageHeader'
  class: 'w-full'
---
::

### Description

ヘッダーに説明を表示するには、`description`プロパティを使用します。

::component-code
---
prettier: true
ignore:
  - title
hide:
  - class
props:
  title: 'PageHeader'
  description: 'A responsive page header with title, description and actions.'
  class: 'w-full'
---
::

### Headline

ヘッダーに見出しを表示するには、`headline`プロパティを使用します。

::component-code
---
prettier: true
ignore:
  - title
  - description
hide:
  - class
props:
  title: 'PageHeader'
  description: 'A responsive page header with title, description and actions.'
  headline: 'Components'
  class: 'w-full'
---
::

### Links

`links`プロパティを使用して、[Button](/docs/components/button)のリストをヘッダーに表示します。

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - headline
  - links
hide:
  - class
props:
  title: 'PageHeader'
  description: 'A responsive page header with title, description and actions.'
  headline: 'Components'
  links:
    - label: 'GitHub'
      icon: i-simple-icons-github
      to: 'https://github.com/nuxt/ui/tree/v4/src/runtime/components/PageHeader.vue'
      target: '_blank'
  class: 'w-full'
---
::

## 例

::note
これらの例は[Nuxt Content](https://content.nuxt.com)を使用していますが、コンポーネントは任意のコンテンツ管理システムと統合できます。
::

### ページ内

ページ内のPageHeaderコンポーネントを使用して、ページのヘッダーを表示します。

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

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
