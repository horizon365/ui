---
description: キーボードキーを表示するkbd要素。
category: element
keywords:
  - keyboard shortcut
  - hotkey
  - keybinding
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Kbd.vue
---

## 使用法

デフォルトスロットを使用してKbdの値を設定します。

::component-code
---
スロット
  デフォルトK
---
::

### 値

`value`プロパティを使用して、Kbdの値を設定します。

::component-code
---
小道具
  値K
---
::

[`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts)を経由する`value` propに特別なキーを渡すことができます。たとえば、`meta`はmacOSでは`⌘`、他のプラットフォームでは`Ctrl`として表示されます。

::component-code
---
小道具
  値メタ
アイテム
  値
    - メタ
    -  win
    - コマンド
    - シフト
    -  ctrl
    - オプション
    -  alt
    - エントリー
    - 削除
    -  backspace
    - エスケープ
    - タブ
    -  capslock
    -  arrowup
    -  arrowright
    -  arrowdown
    -  arrowleft
    -  pageup
    -  pagedown
    -  home
    -  end
---
::

### カラー

`color`プロパティを使用してKbdの色を変更します。

::component-code
---
小道具
  色ニュートラル
スロット
  デフォルトK
---
::

### バリアント

`variant`プロパティを使用して、Kbdのバリアントを変更します。

::component-code
---
小道具
  色ニュートラル
  バリアント固体
スロット
  デフォルトK
---
::

### サイズ

`size`プロパティを使用して、Kbdのサイズを変更します。

::component-code
---
小道具
  サイズLG
スロット
  デフォルトK
---
::

## 例

### `class` prop

`class`プロパティを使用して、バッジの基本スタイルを上書きします。

::component-code
---
小道具
  クラス'font—bold rounded—full'
  バリアント：微妙
スロット
  デフォルトK
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
