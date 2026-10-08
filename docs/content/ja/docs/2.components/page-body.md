---
title: PageBody
description: 'ページのメインコンテンツ。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageBody.vue
---

## 使用法

PageBodyコンポーネントはメインコンテンツをラップし、一貫した間隔のためにパディングを追加します。

[ Page ](/docs/components/page)コンポーネントのデフォルトスロット内で、[ PageHeader ](/docs/components/page-header)コンポーネントの後に使用します。

```vue {5}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

## 例

::note
これらの例では[ Nuxt Content ](https://content.nuxt.com)を使用していますが、コンポーネントは任意のコンテンツ管理システムと統合することができます。
::

### ページ内

ページ内のPageBodyコンポーネントを使用して、ページのコンテンツを表示します。

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
この例では、`@nuxt/content``ContentRenderer`](https://content.nuxt.com/docs/components/content-renderer)コンポーネントを使用して、ページのコンテンツをレンダリングします。
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
