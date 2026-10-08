---
description: '左右の列を持つページのグリッドレイアウト。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Page.vue
---

## 使用法

ページコンポーネントは、オプションの左右列を持つレイアウトを作成するのに役立ちます。ドキュメントサイトやその他のコンテンツ重視のページを作成するのに最適です。

```vue {2,6}
<template>
  <UPage>
    <template #left />

    <template #right />
  </UPage>
</template>
```

::tip
スロットが指定されていない場合、ページは中央の単列レイアウトとして表示されます。
::

## 例

::note
これらの例では[ Nuxt Content ](https://content.nuxt.com)を使用していますが、コンポーネントは任意のコンテンツ管理システムと統合することができます。
::

### レイアウト内

ナビゲーションを表示するには、`left`スロットを持つレイアウトでPageコンポーネントを使用します。

```vue [layouts/docs.vue] {9-13}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

::note
この例では、`ContentNavigation`コンポーネントを使用して、`app.vue`に注入されたナビゲーションを表示します。
::

### ページ内

`right`スロットがあるページでPageコンポーネントを使用して、目次を表示します。

```vue [pages/\[...slug\\].vue]{29-31}
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
この例では、`ContentToc`コンポーネントを使用して目次を表示しています。
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
