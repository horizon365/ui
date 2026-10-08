---
title: ページ機能
description: 'アプリケーションの主要機能を表示するコンポーネント。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageFeature.vue
---

## 使用法

PageFeatureコンポーネントは、[ PageSection ](/docs/components/page-section)[ features ](/docs/components/page-section#features)を表示するために使用されます。

### タイトル

`title`プロパティを使用して、フィーチャーのタイトルを設定します。

::component-code
---
隠す
  - クラス
小道具
  タイトル：「テーマ」
  クラス'w—96'
---
::

### 説明

`description`プロパティを使用して、フィーチャーの説明を設定します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
小道具
  タイトル：「テーマ」
  説明'独自の色、フォントなどでNuxt UIをカスタマイズします。'
  クラス'w—96'
---
::

### アイコン

`icon`プロパティを使用して、フィーチャーのアイコンを設定します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
小道具
  タイトル：「テーマ」
  説明'独自の色、フォントなどでNuxt UIをカスタマイズします。'
  アイコン'i—lucide—swatch—book'
  クラス'w—96'
---
::

### リンク

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネントから、`to`、`target`、`rel`などのプロパティを渡すことができます。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - アイコン
  - ターゲット
小道具
  タイトル：「テーマ」
  説明'独自の色、フォントなどでNuxt UIをカスタマイズします。'
  アイコン'i—lucide—swatch—book'
  to '/docs/getting—started/theme/design—system'
  ターゲット_blank
  クラス'w—96'
---
::

### オリエンテーション

`orientation`プロパティを使用して、フィーチャーの向きを変更します。デフォルトは`horizontal`です。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - アイコン
小道具
  オリエンテーション'垂直'
  タイトル：「テーマ」
  説明'独自の色、フォントなどでNuxt UIをカスタマイズします。'
  アイコン'i—lucide—swatch—book'
  クラス'w—96'
---
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
