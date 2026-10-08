---
title: ページロゴ
description: 'ページに表示するロゴや画像のリスト。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

## 使用法

PageLogosコンポーネントは、ページ内にロゴや画像のリストを表示する柔軟な方法を提供します。

::component-code
---
崩壊真
きれい真
隠す
  - クラス
無視
  - アイテム
小道具
  アイテム
    -  i—simple—icons—github
    -  i—simple—icons—discord
    -  i—simple—icons—x
    -  i—simple—icons—instagram
    -  i—simple—icons—Linkedin
    -  i—simple—icons—facebook
  クラス'MB—10'
---
::

### タイトル

`title`プロパティを使用して、ロゴの上にタイトルを設定します。

::component-code
---
きれい真
無視
  - アイテム
隠す
  - クラス
小道具
  タイトル：「最高のフロントエンドチームに信頼される」
  アイテム
    -  i—simple—icons—github
    -  i—simple—icons—discord
    -  i—simple—icons—x
    -  i—simple—icons—instagram
    -  i—simple—icons—リンク
    -  i—simple—icons—facebook
  クラス'my—10'
---
::

### アイテム

ロゴは2つの方法で表示できます。

1. `items` propを使用してロゴのリストを提供します。各項目は以下のいずれかになります。
  - アイコン名（例：`i-simple-icons-github`）
  - 画像のプロパティ`src`と`alt`を含むオブジェクトで、`UAvatar`コンポーネントで利用されます。
2. デフォルトスロットを使用してコンテンツを完全に制御

::tabs{class="gap-0"}

::component-example{label="アイテム付き"}
---
名前'ページロゴ付きアイテム'
クラス'[&> div] my—10'
---
::

::component-example{label="スロット付き"}
---
名前'スロット付きページロゴ'
クラス'[&> div] my—10'
---
::

::

###  Marquee

`marquee`プロパティを使用して、ロゴのマーキー効果を有効にします。

::component-code
---
きれい真
無視
  - アイテム
  -  marquee
隠す
  - クラス
小道具
  タイトル：「最高のフロントエンドチームに信頼される」
  マーキー true
  アイテム
    -  i—simple—icons—github
    -  i—simple—icons—discord
    -  i—simple—icons—x
    -  i—simple—icons—instagram
    -  i—simple—icons—リンク
    -  i—simple—icons—facebook
  クラス'my—10'
---
::

::note{to="/docs/components/marquee"}
`marquee`モードを使用する場合、propsを渡すことで動作をカスタマイズできます。詳細については、`Marquee`コンポーネントを参照してください。
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
