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

[ Page ](/docs/components/page)コンポーネントのデフォルトスロット内で、[ PageBody ](/docs/components/page-body)コンポーネントの前に使用します。

```vue {3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

### タイトル

`title`プロパティを使用して、ヘッダーにタイトルを表示します。

::component-code
---
隠す
  - クラス
小道具
  title 'PageHeader'
  クラス'w—full'
---
::

### 説明

`description`プロパティを使用して、ヘッダーに説明を表示します。

::component-code
---
きれい真
無視
  -  title
隠す
  - クラス
小道具
  title 'PageHeader'
  description：'タイトル、説明、アクションを含むレスポンシブなページヘッダー。
  クラス'w—full'
---
::

### ヘッドライン

`headline`プロパティを使用して、ヘッダーに見出しを表示します。

::component-code
---
きれい真
無視
  -  title
  - 説明
隠す
  - クラス
小道具
  title 'PageHeader'
  description：'タイトル、説明、アクションを含むレスポンシブなページヘッダー。
  headline 'コンポーネント'
  クラス'w—full'
---
::

### リンク

`links` propを使用して、[ Button ](/docs/components/button)のリストをヘッダーに表示します。

::component-code
---
きれい真
外部
  - リンク
externalTypes
  -  ButtonProps []
無視
  -  title
  - 説明
  - 見出し
  - リンク
隠す
  - クラス
小道具
  title 'PageHeader'
  description：'タイトル、説明、アクションを含むレスポンシブなページヘッダー。
  headline 'コンポーネント'
  リンク
    -  label 'GitHub'
      アイコンi—simple—icons—github
      「https//github.com/nuxt/ui/tree/v4/src/runtime/components/PageHeader.vue」
      ターゲット'_blank'
  クラス'w—full'
---
::

## 例

::note
これらの例では[ Nuxt Content ](https://content.nuxt.com)を使用していますが、コンポーネントは任意のコンテンツ管理システムと統合することができます。
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

##  API

###  Props

component—props

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
