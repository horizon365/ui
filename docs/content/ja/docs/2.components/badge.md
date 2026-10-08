---
description: ステータスまたはカテゴリを表す短いテキスト。
category: element
keywords:
  - tag
  - pill
  - label
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Badge.vue
---

## 使用法

デフォルトスロットを使用してバッジのラベルを設定します。

::component-code
---
スロット
  デフォルトバッジ
---
::

### ラベル

`label` propを使用してバッジのラベルを設定します。

::component-code
---
小道具
  ラベルバッジ
---
::

### カラー

`color`プロパティを使用してバッジの色を変更します。

::component-code
---
小道具
  色ニュートラル
スロット
  デフォルトバッジ
---
::

### バリアント

`variant` propsを使用してバッジのバリアントを変更します。

::component-code
---
小道具
  色ニュートラル
  variantアウトライン
スロット
  デフォルトバッジ
---
::

### サイズ

`size`プロパティを使用してバッジのサイズを変更します。

::component-code
---
小道具
  サイズXL
スロット
  デフォルトバッジ
---
::

### アイコン

`icon` propを使用して、[ Icon ](/docs/components/icon)をバッジ内に表示します。

::component-code
---
小道具
  アイコンi—lucideロケット
  サイズMD
  色プライマリ
  バリアント固体
スロット
  デフォルトバッジ
---
::

アイコンの位置を設定するには`leading`と`trailing` propsを使用し、位置ごとに異なるアイコンを設定するには`leading-icon`と`trailing-icon` propsを使用します。

::component-code
---
小道具
  trailingIcon i—lucide—arrow—right
  サイズMD
スロット
  デフォルトバッジ
---
::

### アバター

`avatar` propを使用して、バッジ内に[ Avatar ](/docs/components/avatar)を表示します。

::component-code
---
きれい真
無視
  -  avatar.loading
小道具
  アバター
    https//github.com/nuxt.png
    読み込み怠惰
  サイズMD
  色ニュートラル
  variantアウトライン
スロット
  デフォルト|

    バッジバッジ
---
::

## 例

### `class` prop

`class`プロパティを使用して、バッジの基本スタイルを上書きします。

::component-code
---
小道具
  クラス'font—bold rounded—full'
スロット
  デフォルトバッジ
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
