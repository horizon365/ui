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

`links`プロパティを、ページフェッチ時に取得する`page?.body?.toc?.links`{lang="ts-type"}とともに使用します。

::component-example
---
name 'content—toc—example'
小道具
  クラス'w—full'
---
::

### タイトル

`title`プロパティを使用して、目次のタイトルを変更します。

::component-code{prefix="content"}
---
きれい真
崩壊真
隠す
  - クラス
無視
  - リンク
外部
  - リンク
externalTypes
  -  ContentTocLink []
小道具
  タイトル：「このページで」
  クラス'w—full'
  リンク
  -  id使用法
    深さ2
    text使用法
    子供：
    -  idタイトル
      深さ3
      textタイトル
    -  idカラー
      深さ3
      text色
    -  idハイライト
      深さ3
      textハイライト
    -  id 'highlight—color'
      深さ3
      textハイライト色
    -  id 'highlight—variant'
      深さ3
      textハイライトバリアント
---
::

### カラー

`color`プロパティを使用して、リンクの色を変更します。

::component-code{prefix="content"}
---
きれい真
崩壊真
隠す
  - クラス
無視
  - リンク
外部
  - リンク
externalTypes
  -  ContentTocLink []
小道具
  色'中立'
  クラス'w—full'
  リンク
    -  id使用法
      深さ2
      text使用法
      子供：
        -  idタイトル
          深さ3
          textタイトル
        -  id色
          深さ3
          text色
        -  idハイライト
          深さ3
          textハイライト
        -  id 'highlight—color'
          深さ3
          textハイライト色
        -  id 'highlight—variant'
          深さ3
          textハイライトバリアント
---
::

### ハイライト

`highlight`プロパティを使用して、アクティブな項目のハイライトされた境界線を表示します。

::component-code{prefix="content"}
---
きれい真
崩壊真
隠す
  - クラス
無視
  - リンク
外部
  - リンク
externalTypes
  -  ContentTocLink []
小道具
  ハイライト真
  クラス'w—full'
  リンク
    -  id使用法
      深さ2
      text使用法
      子供：
        -  idタイトル
          深さ3
          textタイトル
        -  idカラー
          深さ3
          text色
        -  idハイライト
          深さ3
          textハイライト
        -  id 'highlight—color'
          深さ3
          textハイライト色
        -  id 'highlight—variant'
          深さ3
          textハイライトバリアント
---
::

### ハイライト色

ハイライトの色を変更するには`highlight-color` propを使用します。デフォルトは`color` propです。

::component-code{prefix="content"}
---
きれい真
崩壊真
隠す
  - クラス
無視
  - リンク
  - ハイライト
外部
  - リンク
externalTypes
  -  ContentTocLink []
小道具
  ハイライト真
  highlightColor '中立'
  クラス'w—full'
  リンク
    -  id使用法
      深さ2
      text使用法
      子供：
        -  idタイトル
          深さ3
          textタイトル
        -  id色
          深さ3
          text色
        -  idハイライト
          深さ3
          textハイライト
        -  id 'highlight—color'
          深さ3
          textハイライト色
        -  id 'highlight—variant'
          深さ3
          textハイライトバリアント
---
::

### ハイライトバリアント：badge {label="4.6+" class="align-text-top"}

`highlight-variant`プロパティを使用して、ハイライトのスタイルを変更します。デフォルトは`straight`です。

::component-code{prefix="content"}
---
きれい真
崩壊真
隠す
  - クラス
無視
  - リンク
  -  highlight
外部
  - リンク
externalTypes
  -  ContentTocLink []
小道具
  ハイライト真
  highlightColor 'primary'
  highlightVariant 'circuit'
  クラス'w—full'
  リンク
    -  id使用法
      深さ2
      text使用法
      子供：
        -  idタイトル
          深さ3
          textタイトル
        -  id色
          深さ3
          text色
        -  idハイライト
          深さ3
          textハイライト
        -  id 'highlight—color'
          深さ3
          textハイライト色
        -  id 'highlight—variant'
          深さ3
          textハイライトバリアント
    -  id例
      深さ2
      text例
      子供：
        -  idページ内
          深さ3
          text：ページ内
    -  id api
      深さ2
      text API
      子供：
        -  id props
          深さ3
          text小道具
        -  idスロット
          深さ3
          textスロット
        -  id放出
          深さ3
          textエミッツ
    -  idテーマ
      深さ2
      textテーマ
---
::

## 例

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

##  API

###  Props

component—props

### スロット

コンポーネントスロット

###  Emits

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog {prefix="content"}
