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
slots:
  default: K
---
::

### Value

`value`プロパティを使用してKbdの値を設定します。

::component-code
---
props:
  value: K
---
::

`value`プロパティには、[`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts)コンポーザブルを通る特殊なキーを渡すことができます。例えば、`meta`キーはmacOSでは`⌘`、他のプラットフォームでは`Ctrl`と表示されます。

::component-code
---
props:
  value: meta
items:
  value:
    - meta
    - win
    - command
    - shift
    - ctrl
    - option
    - alt
    - enter
    - delete
    - backspace
    - escape
    - tab
    - capslock
    - arrowup
    - arrowright
    - arrowdown
    - arrowleft
    - pageup
    - pagedown
    - home
    - end
---
::

### Color

`color`プロパティを使用してKbdの色を変更します。

::component-code
---
props:
  color: neutral
slots:
  default: K
---
::

### Variant

`variant`プロパティを使用して、Kbdのバリアントを変更します。

::component-code
---
props:
  color: neutral
  variant: solid
slots:
  default: K
---
::

### サイズ

`size`プロパティを使用してKbdのサイズを変更します。

::component-code
---
props:
  size: lg
slots:
  default: K
---
::

## 例

### `class`プロップ

`class`プロパティを使用して、バッジの基本スタイルを上書きします。

::component-code
---
props:
  class: 'font-bold rounded-full'
  variant: subtle
slots:
  default: K
---
::

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
