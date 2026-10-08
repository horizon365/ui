---
title: PageHero
description: 'あなたのページのレスポンシブヒーロー。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHero.vue
---

## 使用法

PageHeroコンポーネントは、コンテンツを[ Container ](/docs/components/container)でラップします。背景色、画像、パターンを簡単に追加できるように全幅の柔軟性を維持します。デフォルトスロットにイラストを使用してコンテンツを表示する柔軟な方法を提供します。

::code-preview

:::u-page-hero
---
title「究極のVue UIライブラリ」
説明「Nuxt/Vue統合UIライブラリで、モダンなWebアプリケーションを構築するための完全なスタイルでアクセス可能で高度にカスタマイズ可能なコンポーネントの豊富なセットを提供します。
---

::::u-page-card{variant="subtle" class="rounded-lg"}

![アプリのスクリーンショット](/blocks/image4.png){width="960" height="540" class="rounded-sm shadow-2xl ring ring-default"}

::::

:::

::

### タイトル

`title`プロパティを使用して、ヒーローのタイトルを設定します。

::component-code
---
小道具
  title「究極のVue UIライブラリ」
---
::

### 説明

`description`プロパティを使用して、ヒーローの説明を設定します。

::component-code
---
きれい真
無視
  -  title
小道具
  title「究極のVue UIライブラリ」
  説明「Nuxt/Vue統合UIライブラリで、モダンなWebアプリケーションを構築するための完全なスタイルでアクセス可能で高度にカスタマイズ可能なコンポーネントの豊富なセットを提供します。
---
::

### ヘッドライン

`headline` propを使用して、ヒーローの見出しを設定します。

::component-code
---
きれい真
無視
  -  title
  - 説明
小道具
  title「究極のVue UIライブラリ」
  説明「Nuxt/Vue統合UIライブラリで、モダンなWebアプリケーションを構築するための完全なスタイルでアクセス可能で高度にカスタマイズ可能なコンポーネントの豊富なセットを提供します。
  タイトル：New release
---
::

### リンク

`links` propを使用して、説明の下に[ Button ](/docs/components/button)のリストを表示します。

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
  - リンク
小道具
  title「究極のVue UIライブラリ」
  説明「Nuxt/Vue統合UIライブラリで、モダンなWebアプリケーションを構築するための完全なスタイルでアクセス可能で高度にカスタマイズ可能なコンポーネントの豊富なセットを提供します。
  リンク
    -  label '始める'
      /docs/getting—started
      アイコン'i—lucide—square—play'
    -  label '詳細を見る'
      to '/docs/getting—started/theme/design—system'
      色'中立'
      バリアント：'微妙'
      trailingIcon 'i—lucide—arrow—right'
---
::

### オリエンテーション

`orientation`プロパティを使用して、デフォルトスロットの向きを変更します。デフォルトは`vertical`です。

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
  - ヘッドライン
  - リンク
小道具
  title「究極のVue UIライブラリ」
  説明「Nuxt/Vue統合UIライブラリで、モダンなWebアプリケーションを構築するための完全なスタイルでアクセス可能で高度にカスタマイズ可能なコンポーネントの豊富なセットを提供します。
  タイトル：New release
  オリエンテーション水平
  リンク
    -  label '始める'
      /docs/getting—started
      アイコン'i—lucide—square—play'
    -  label '詳細を見る'
      to '/docs/getting—started/theme/design—system'
      色'ニュートラル'
      バリアント：'微妙'
      trailingIcon 'i—lucide—arrow—right'
スロット
  デフォルト|

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
---

![アプリのスクリーンショット](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

### リバース

`reverse`プロパティを使用して、デフォルトスロットの向きを反転させます。

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
小道具
  title「究極のVue UIライブラリ」
  説明「Nuxt/Vue統合UIライブラリで、モダンなWebアプリケーションを構築するための完全なスタイルでアクセス可能で高度にカスタマイズ可能なコンポーネントの豊富なセットを提供します。
  タイトル：New release
  オリエンテーション水平
  逆真
  リンク
    -  label '始める'
      /docs/getting—started
      アイコン'i—lucide—square—play'
    -  label '詳細を見る'
      to '/docs/getting—started/theme/design—system'
      色'中立'
      バリアント：'微妙'
      trailingIcon 'i—lucide—arrow—right'
スロット
  デフォルト|

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
---

![アプリのスクリーンショット](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
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
