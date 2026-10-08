---
description: コンテンツを水平または垂直に分離する。
category: element
keywords:
  - divider
  - hr
  - horizontal rule
links:
  - label: セパレータ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Separator.vue
---

## 使用法

コンテンツを分離するには、Separatorコンポーネントをそのまま使用します。

::component-code
---
クラス'p—8'
---
::

### オリエンテーション

`orientation`プロパティを使用して、セパレータの向きを変更します。デフォルトは`horizontal`です。

::component-code
---
無視
  - クラス
クラス'p—8'
小道具
  オリエンテーション垂直
  クラス'h—48'
---
::

### ラベル

`label`プロパティを使用して、セパレータの中央にラベルを表示します。

::component-code
---
クラス'p—8'
小道具
  label 'Hello World'
---
::

### ポジションbadge {label="4.8+" class="align-text-top"}

`position`プロパティを使用して、セパレータのコンテンツの位置を変更します。デフォルトは`center`です。

::component-code
---
無視
  - クラス
クラス'p—8'
小道具
  位置開始
  label 'Hello World'
---
::

### アイコン

`icon`プロパティを使用して、セパレータの中央にアイコンを表示します。

::component-code
---
クラス'p—8'
小道具
  アイコン'i—simple—icons nuxtdotjs'
---
::

### アバター

`avatar`プロパティを使用して、Separatorの中央にアバターを表示します。

::component-code
---
きれい真
クラス'p—8'
無視
  -  avatar.loading
小道具
  アバター
    https//github.com/nuxt.png
    読み込み怠惰
---
::

### カラー

`color`プロパティを使用して、セパレータの色を変更します。デフォルトは`neutral`です。

::component-code
---
クラス'p—8'
小道具
  色プライマリ
  タイプ固体
---
::

### タイプ

`type`プロパティを使用して、セパレータのタイプを変更します。デフォルトは`solid`です。

::component-code
---
クラス'p—8'
小道具
  タイプ破線
---
::

### サイズ

セパレータのサイズを変更するには、`size`プロパティを使用します。デフォルトは`xs`です。

::component-code
---
クラス'p—8'
小道具
  サイズLG
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
