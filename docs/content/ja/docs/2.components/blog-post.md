---
title: ブログ投稿
description: 'ブログページに表示するカスタマイズ可能な記事。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPost.vue
---

## 使用 法

BlogPost コンポーネント は 、 タイトル 、 説明 、 画像 など の カスタマイズ 可能 な コンテンツ を 含む`<article>`要素 を 柔軟 に 表示 する 方法 を 提供 し ます 。

::code-preview

::u-blog-post
---
title “ Nuxt Icon v1 の 紹介 ”
説明 ： ' Discover Nuxt Icon v1 - Nuxt プロジェクト の ため の モダン で 汎用 性 の 高い カスタマイズ 可能 な アイコンソリューション です 。
画像 ： ' https//nuxt.com/assets/blog/nuxt-icon/cover.png '
日 付 2024 - 11 - 25
著者 ：
  - name アンソニー · フー
    説明 antfu7
    アバター
      srchttps://github.com/antfu.png
      読み込み 怠惰
    次 へhttps://github.com/antfu
    ターゲット _blank
“ https//nuxt.com/blog/nuxt-icon-v1 - 0 ”
ターゲット ' _blank '
クラス ' w-96 '
---
::

::

::tip{to="/docs/components/blog-posts"}
`BlogPosts`コンポーネント を 使用 し て 、 複数 の ブログ 投稿 を レスポンシブ グリッド レイアウト で 表示 し ます 。
::

### タイトル

`title`プロップ を 使用 し て 、 BlogPost の タイトル を 表示 し ます 。

::component-code
---
きれい 真
隠す
  - クラス
小道具
  title “ Nuxt Icon v1 の 紹介 ”
  クラス ' w-96 '
---
::

### 説明

`description`プロ パティ を 使用 し て 、 BlogPost の 説明 を 表示 し ます 。

::component-code
---
きれい 真
隠す
  - クラス
無視
  - title
小道具
  title “ Nuxt Icon v1 の 紹介 ”
  説明 ： ' Discover Nuxt Icon v1 - Nuxt プロジェクト の ため の モダン で 汎用 性 の 高い カスタマイズ 可能 な アイコンソリューション です 。
  クラス ' w-96 '
---
::

### Date

`date`プロ パティ を 使用 し て 、 BlogPost の 日付 を 表示 し ます 。

::tip
日付 は 自動的 に[現在 の ロケール](/docs/getting-started/integrations/i18n/nuxt#locale)に フォーマット さ れ ます 。`Date`オブジェクト また は 文字 列 を 渡す こと が でき ます 。
::

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
小道具
  title「Nuxt Icon v1の紹介」
  説明：'Discover Nuxt Icon v1—Nuxtプロジェクトのためのモダンで汎用性の高いカスタマイズ可能なアイコンソリューションです。
  日付2024—11—25
  クラス'w—96'
---
::

### バッジ

`badge` propを使用して、BlogPostに[ Badge ](/docs/components/badge)を表示します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
小道具
  title「Nuxt Icon v1の紹介」
  説明：'Discover Nuxt Icon v1—Nuxtプロジェクトのためのモダンで汎用性の高いカスタマイズ可能なアイコンソリューションです。
  badge：'Release'
  クラス'w—96'
---
::

[ Badge ](/docs/components/badge#props)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  -  badge.label
  メール：info @ badge.color
  -  badge.variant
小道具
  title「Nuxt Icon v1の紹介」
  説明：'Discover Nuxt Icon v1—Nuxtプロジェクトのためのモダンで汎用性の高いカスタマイズ可能なアイコンソリューションです。
  バッジ
    label：'Release'
    色プライマリ
    バリアント固体
  クラス'w—96'
---
::

###  Image

`image`プロパティを使用して、BlogPostに画像を表示します。

::note
[`@nuxt/image`](https://image.nuxt.com/get-started/installation)がインストールされている場合、ネイティブの`img`タグの代わりに`<NuxtImg>`コンポーネントが使用されます。
::

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  -  date
小道具
  title「Nuxt Icon v1の紹介」
  説明：'Discover Nuxt Icon v1—Nuxtプロジェクトのためのモダンで汎用性の高いカスタマイズ可能なアイコンソリューションです。
  画像'https//nuxt.com/assets/blog/nuxt—icon/cover.png'
  日付2024—11—25
  クラス'w—96'
---
::

### 著者

`authors` propを使用して、BlogPostに[ User ](/docs/components/user)のリストを次のプロパティを持つオブジェクトの配列として表示します。

- `name?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `avatar?: Omit<AvatarProps, 'size'>`{lang="ts-type"}
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{lang="ts-type"}
- `size?: UserProps['size']`{lang="ts-type"}
- `orientation?: UserProps['orientation']`{lang="ts-type"}

[ Link ](/docs/components/link#props)コンポーネントから、`to`、`target`などのプロパティを渡すことができます。

::component-code
---
きれい真
隠す
  - クラス
外部
  - 著者
externalTypes
  -  UserProps []
無視
  -  title
  - 説明
  -  date
  -  image
  - 著者
小道具
  title “ Nuxt Icon v1 の 紹介 ”
  説明 ： ' Discover Nuxt Icon v1 - Nuxt プロジェクト の ため の モダン で 汎用 性 の 高い カスタマイズ 可能 な アイコンソリューション です 。
  画像 ' https//nuxt.com/assets/blog/nuxt-icon/cover.png '
  日 付 2024 - 11 - 25
  著者 ：
    - name アンソニー · フー
      説明 antfu7
      アバター
        srchttps://github.com/antfu.png
        読み込み 怠惰
      次 へhttps://github.com/antfu
      ターゲット _blank
  クラス ' w-96 '
---
::

`authors`prop が 複数 の アイテム を 持つ 場合 、[AvatarGroup](/docs/components/avatar-group)コンポーネント が 使用 さ れ ます 。

::component-code
---
きれい 真
隠す
  - クラス
外部
  - 著者
externalTypes
  - UserProps [ ]
無視
  - title
  - 説明
  - date
  - image
  - 著者
小道具
  title “ Nuxt Icon v1 の 紹介 ”
  説明 ： ' Discover Nuxt Icon v1 - Nuxt プロジェクト の ため の モダン で 汎用 性 の 高い カスタマイズ 可能 な アイコンソリューション です 。
  画像 ' https//nuxt.com/assets/blog/nuxt-icon/cover.png '
  日 付 2024 - 11 - 25
  著者 ：
    - name アンソニー · フー
      説明 antfu7
      アバター
        srchttps://github.com/antfu.png
        読み込み 怠惰
      次 へhttps://github.com/antfu
      ターゲット _blank
    - name ベンジャミン · カナック
      説明 benjamincanac
      アバター
        srchttps://github.com/benjamincanac.png
        読み込み 怠惰
      次 へhttps://github.com/benjamincanac
      ターゲット _blank
  クラス ' w-96 '
---
::

### リンク

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネント から 、`to`、`target`、`rel`など の プロ パティ を 渡す こと が でき ます 。

::component-code
---
きれい 真
隠す
  - クラス
無視
  - title
  - 説明
  - date
  - image
  - ターゲット
小道具
  title “ Nuxt Icon v1 の 紹介 ”
  説明 ： ' Discover Nuxt Icon v1 - Nuxt プロジェクト の ため の モダン で 汎用 性 の 高い カスタマイズ 可能 な アイコンソリューション です 。
  画像 ' https//nuxt.com/assets/blog/nuxt-icon/cover.png '
  日 付 2024 - 11 - 25
  “ https//nuxt.com/blog/nuxt-icon-v1 - 0 ”
  ターゲット _blank
  クラス ' w-96 '
---
::

### バリアント

`variant`プロ パティ を 使用 し て BlogPost の スタイル を 変更 し ます 。

::component-code
---
きれい 真
隠す
  - クラス
無視
  - title
  - 説明
  - date
  - image
  - へ
  - ターゲット
小道具
  title「Nuxt Icon v1の紹介」
  説明：'Discover Nuxt Icon v1—Nuxtプロジェクトのためのモダンで汎用性の高いカスタマイズ可能なアイコンソリューションです。
  画像'https//nuxt.com/assets/blog/nuxt—icon/cover.png'
  日付2024—11—25
  「https//nuxt.com/blog/nuxt—icon—v1—0」
  ターゲット_blank
  バリアント：裸
  クラス'w—96'
---
::

::note
スタイルは、`to` propまたは`image`を提供するかによって異なります。
::

### オリエンテーション

BlogPostの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`vertical`です。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  -  date
  -  image
  - へ
  - ターゲット
小道具
  title「Nuxt Icon v1の紹介」
  説明：'Discover Nuxt Icon v1—Nuxtプロジェクトのためのモダンで汎用性の高いカスタマイズ可能なアイコンソリューションです。
  画像'https//nuxt.com/assets/blog/nuxt—icon/cover.png'
  日付2024—11—25
  「https//nuxt.com/blog/nuxt—icon—v1—0」
  ターゲット_blank
  オリエンテーション水平
  variantアウトライン
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
