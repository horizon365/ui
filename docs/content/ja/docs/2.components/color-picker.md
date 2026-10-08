---
title: カラーピッカー
description: 色を選択するためのコンポーネント。
category: form
keywords:
  - colour picker
  - swatch
  - hex
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ColorPicker.vue
---

## 使用法

`v-model`ディレクティブを使用して、ColorPickerの値を制御します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  modelValue '#00C16A'
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
無視
  -  defaultValue
小道具
  defaultValue '#00BCD4'
---
::

###  RGBフォーマット

`format`プロパティを使用して、ColorPickerの`rgb`値を設定します。

::component-code
---
無視
  -  modelValue
  - フォーマット
外部
  -  modelValue
小道具
  フォーマットRGB
  modelValue 'rgb 0193106'
---
::

###  HSLフォーマット

`format`プロパティを使用して、ColorPickerの`hsl`値を設定します。

::component-code
---
無視
  -  modelValue
  - フォーマット
外部
  -  modelValue
小道具
  フォーマットhsl
  modelValue 'hsl 153 100% 37.8%'
---
::

###  CMYKフォーマット

`format`プロパティを使用して、ColorPickerの`cmyk`値を設定します。

::component-code
---
無視
  -  modelValue
  - フォーマット
外部
  -  modelValue
小道具
  フォーマットcmyk
  modelValue 'cmyk 100% 0% 45.08% 24.31%'
---
::

###  CIELabフォーマット

`format`プロパティを使用して、ColorPickerの`lab`値を設定します。

::component-code
---
無視
  -  modelValue
  - フォーマット
外部
  -  modelValue
小道具
  フォーマットラボ
  modelValue 'lab 68.88%—60.41 % 32.55%'
---
::

### スロットル

`throttle`プロパティを使用して、ColorPickerのスロットル値を設定します。

::component-code
---
無視
  -  modelValue
外部
  -  modelValue
小道具
  スロットル100
  modelValue '#00C16A'
---
::

### サイズ

`size`プロパティを使用して、ColorPickerのサイズを設定します。

::component-code
---
小道具
  サイズXL
---
::

### 無効

`disabled`プロパティを使用して、ColorPickerを無効にします。

::component-code
---
小道具
  無効true
---
::

## 例

### カラーセレクターとして

[ Button ](/docs/components/button)と[ Popover ](/docs/components/popover)コンポーネントを使用して、カラーセレクターを作成します。

::component-example
---
名前'カラーピッカー—選択例'
---
::

##  API

###  Props

component—props

###  Emits

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
