---
title: ContentSurround
description: 'ページ間を移動するためのprevとnextのペア。'
category: content
framework: nuxt
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSurround.vue
---

::warning{to="/docs/getting-started/integrations/content"}
このコンポーネントは`@nuxt/content`モジュールがインストールされている場合にのみ使用できます。
::

## 使用法

`surround`プロパティを、ページサラウンドフェッチ時に取得する`surround`{lang="ts-type"}を指定して使用します。

::component-example
---
name 'content—surround—example'
小道具
  クラス'w—full'
---
::

### 前/次

`prev-icon`と`next-icon` propsを使用して、[ Icon ](/docs/components/icon)ボタンをカスタマイズします。

::component-code{prefix="content"}
---
きれい真
崩壊真
無視
  - サラウンド
外部
  - サラウンド
externalTypes
  -  ContentSurroundLink []
小道具
  prevIcon 'i—lucide—chevron—left'
  次アイコン'i—lucide—chevron—right'
  サラウンド
  -  title ContentSearchButton
    パス/docs/components/content—search—button
    stem docs/2.components/content—search—button
    description ContentSearchモーダルを開くためのスタイル設定済みボタン。
  -  title ContentToc
    パス/docs/components/content—toc
    stem：docs/2.components/content—toc
    説明：カスタマイズ可能なスロットを備えた粘着性のある目次。
---
::

## 例

### ページ内

ページ内でContentSurroundコンポーネントを使用して、前と次のリンクを表示します。

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

##  API

###  Props

component—props

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog {prefix="content"}
