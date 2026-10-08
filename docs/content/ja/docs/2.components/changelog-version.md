---
title: ChangelogVersion
description: '変更履歴に表示するカスタマイズ可能な記事。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersion.vue
---

## 使用 法

ChangelogVersion コンポーネント は 、 タイトル 、 説明 、 画像 など の カスタマイズ 可能 な コンテンツ を 含む`<article>`要素 を 柔軟 に 表示 する 方法 を 提供 し ます 。

::code-preview

::u-changelog-version
---
title “ Nuxt UI v3 の 紹介 ”
説明^ “ Nuxt UI v 3 が 出 た ! 1500 以上 の コミット を 経 て 、 この 大 規模 な 再 設計 は アクセシビリティ の 向上 、 Tailwind CSS サポート 、 完全 な Vue 互換 性 を もたらし ます 。
画像 ' https//nuxt.com/assets/blog/nuxt-ui-v3.png '
日 付 2025 - 03 - 12
著者 ：
  - name ベンジャミン · カナック
    説明 '@benjamincanac '
    アバター
      srchttps://github.com/benjamincanac.png
      読み込み 怠惰
    次 へhttps://x.com/benjamincanac
    ターゲット _blank
  - name セバスチャン · ショパン
    説明 ： '@atinux '
    アバター
      srchttps://github.com/atinux.png
      読み込み 怠惰
    次 へhttps://x.com/atinux
    ターゲット _blank
  - name ヒューゴ · リチャード
    説明 '@hugorcd '
    アバター
      srchttps://github.com/hugorcd.png
      読み込み 怠惰
    次 へhttps://x.com/hugorcd
    ターゲット _blank
“ https//nuxt.com/blog/nuxt-ui-v3 ”
ターゲット ' _blank '
クラス ' w-full '
ui . コンテナ ' max-w-lg '
---
::

::

::tip{to="/docs/components/changelog-versions"}
`ChangelogVersions`コンポーネント を 使用 し て 、 左側 に インジケーター バー を 表示 し て タイムライン に 複数 の 変更 履歴 バージョン を 表示 し ます 。
::

### タイトル

`title`プロ パティ を 使用 し て 、 ChangelogVersion の タイトル を 表示 し ます 。

::component-code
---
隠す
  - クラス
  - ui
  - ui.container
小道具
  title「Nuxt UI v3の紹介」
  クラス'w—full'
  ui.コンテナ'max—w—lg'
---
::

### 説明

`description`プロパティを使用して、ChangelogVersionの説明を表示します。

::component-code
---
きれい真
隠す
  - クラス
  -  ui
  -  ui.container
無視
  -  title
小道具
  title「Nuxt UI v3の紹介」
  説明^“Nuxt UI v 3が出た！1500以上のコミットを経て、この大規模な再設計はアクセシビリティの向上、Tailwind CSSサポート、完全なVue互換性をもたらします。
  クラス'w—full'
  ui.コンテナ'max—w—lg'
---
::

###  Date

ChangelogVersionの日付を表示するには、`date`プロパティを使用します。

::tip
日付は自動的に[現在のロケール](/docs/getting-started/integrations/i18n/nuxt#locale)にフォーマットされます。`Date`オブジェクトまたは文字列を渡すことができます。
::

::component-code
---
きれい真
隠す
  - クラス
  -  ui
  メールアドレス：info @ ui.container
無視
  -  title
  - 説明
小道具
  title「Nuxt UI v3の紹介」
  説明^“Nuxt UI v 3が出た！1500以上のコミットを経て、この大規模な再設計はアクセシビリティの向上、Tailwind CSSサポート、完全なVue互換性をもたらします。
  日付2025—03—12
  クラス'w—full'
  ui.コンテナ'max—w—lg'
---
::

### バッジ

`badge` propを使用して、ChangelogVersionで[ Badge ](/docs/components/badge)を表示します。

::component-code
---
きれい真
隠す
  - クラス
  -  ui
  メールアドレス：info @ ui.container
無視
  -  title
  - 説明
  -  date
小道具
  title「Nuxt UI v3の紹介」
  説明^“Nuxt UI v 3が出た！1500以上のコミットを経て、この大規模な再設計はアクセシビリティの向上、Tailwind CSSサポート、完全なVue互換性をもたらします。
  日付2025—03—12
  badge：'Release'
  クラス'w—full'
  ui.コンテナ'max—w—lg'
---
::

[ Badge ](/docs/components/badge#props)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
きれい真
隠す
  - クラス
  -  ui
  -  ui.container
無視
  -  title
  - 説明
  -  date
  -  badge.label
  -  badge.color
  -  badge.variant
小道具
  title「Nuxt UI v3の紹介」
  説明^“Nuxt UI v 3が出た！1500以上のコミットを経て、この大規模な再設計はアクセシビリティの向上、Tailwind CSSサポート、完全なVue互換性をもたらします。
  日付2025—03—12
  バッジ
    label：'Release'
    色プライマリ
    variantアウトライン
  クラス'w—full'
  ui.コンテナ'max—w—lg'
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
  -  ui
  メールアドレス：info @ ui.container
無視
  -  title
  - 説明
  -  date
小道具
  title「Nuxt UI v3の紹介」
  説明^“Nuxt UI v 3が出た！1500以上のコミットを経て、この大規模な再設計はアクセシビリティの向上、Tailwind CSSサポート、完全なVue互換性をもたらします。
  日付2025—03—12
  画像'https//nuxt.com/assets/blog/nuxt—ui—v3.png'
  クラス'w—full'
  ui.コンテナ'max—w—lg'
---
::

### 著者

`authors`プロパティを使用して、ChangelogVersion内の[ User ](/docs/components/user)のリストを次のプロパティを持つオブジェクトの配列として表示します。

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
  -  ui
  -  ui.container
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
  title「Nuxt UI v3の紹介」
  説明^ “ Nuxt UI v 3 が 出 た ! 1500 以上 の コミット を 経 て 、 この 大 規模 な 再 設計 は アクセシビリティ の 向上 、 Tailwind CSS サポート 、 完全 な Vue 互換 性 を もたらし ます 。
  日 付 2025 - 03 - 12
  画像 ' https//nuxt.com/assets/blog/nuxt-ui-v3.png '
  著者 ：
    - name ベンジャミン · カナック
      説明 '@benjamincanac '
      アバター
        srchttps://github.com/benjamincanac.png
        読み込み 怠惰
      次 へhttps://x.com/benjamincanac
      ターゲット _blank
    - name セバスチャン · ショパン
      説明 '@atinux '
      アバター
        srchttps://github.com/atinux.png
        読み込み 怠惰
      次 へhttps://x.com/atinux
      ターゲット _blank
    - name ヒューゴ · リチャード
      説明 '@hugorcd '
      アバター
        srchttps://github.com/hugorcd.png
        読み込み 怠惰
      次 へhttps://x.com/hugorcd
      ターゲット _blank
  クラス ' w-full '
  ui . コンテナ ' max-w-lg '
---
::

### リンク

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネント から 、`to`、`target`、`rel`など の プロ パティ を 渡す こと が でき ます 。

::component-code
---
きれい 真
隠す
  - クラス
  - ui
  - ui.container
無視
  - title
  - 説明
  - date
  - image
  - ターゲット
小道具
  title「Nuxt UI v3の紹介」
  説明^“Nuxt UI v 3が出た！1500以上のコミットを経て、この大規模な再設計はアクセシビリティの向上、Tailwind CSSサポート、完全なVue互換性をもたらします。
  日付2025—03—12
  画像'https//nuxt.com/assets/blog/nuxt—ui—v3.png'
  「https//nuxt.com/blog/nuxt—ui—v3」
  ターゲット_blank
  クラス'w—full'
  ui.コンテナ'max—w—lg'
---
::

### インジケータ

`indicator`プロパティを使用して、左側のインディケータドットを非表示にします。デフォルトは`true`です。

::component-code
---
きれい真
隠す
  - クラス
  -  ui
  -  ui.container
無視
  -  title
  - 説明
  -  date
  -  image
小道具
  title「Nuxt UI v3の紹介」
  説明^“Nuxt UI v 3が出た！1500以上のコミットを経て、この大規模な再設計はアクセシビリティの向上、Tailwind CSSサポート、完全なVue互換性をもたらします。
  日付2025—03—12
  画像'https//nuxt.com/assets/blog/nuxt—ui—v3.png'
  インジケータ偽
  クラス'w—full'
  ui.コンテナ'max—w—lg'
---
::

::note
`indicator` propが`false`の場合、タイトルの上に日付が表示されます。
::

## 例

### ボディスロット付き

`body`スロットを使用して、画像と作者の間にカスタムコンテンツを表示できます。

- [ Markdown ](https://comark.dev/rendering/vue)コンポーネントを`@comark/vue`から表示します。
- [ ContentRenderer ](https://content.nuxt.com/docs/components/content-renderer)コンポーネントを使用して、ページまたはリストのコンテンツをレンダリングします。
- または、`body`スロット内のmarkdownを使用して、コンテンツ内で直接`:u-changelog-version`コンポーネントを使用してください。Nuxt UIはあらかじめスタイル化された散文コンポーネントを提供します。

::component-example
---
きれい真
名前'changelog—version—markdown'
崩壊真
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
