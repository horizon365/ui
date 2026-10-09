---
title: カラーピッカー
description: 色を選択するコンポーネント。
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

ColorPickerの値を制御するには、`v-model`ディレクティブを使用します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: '#00C16A'
---
::

状態を制御する必要がない場合は、`default-value`プロパティを使用して初期値を設定します。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: '#00BCD4'
---
::

### RGBフォーマット

`format`プロパティを使用して、ColorPickerの`rgb`値を設定します。

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: rgb
  modelValue: 'rgb(0, 193, 106)'
---
::

### HSLフォーマット

`format`プロパティを使用して、ColorPickerの`hsl`値を設定します。

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: hsl
  modelValue: 'hsl(153, 100%, 37.8%)'
---
::

### CMYKフォーマット

`format`プロパティを使用して、ColorPickerの`cmyk`値を設定します。

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: cmyk
  modelValue: 'cmyk(100%, 0%, 45.08%, 24.31%)'
---
::

### CIELabフォーマット

`format`プロパティを使用して、ColorPickerの`lab`値を設定します。

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: lab
  modelValue: 'lab(68.88% -60.41% 32.55%)'
---
::

### スロットル

`throttle`プロパティを使用して、ColorPickerのスロットル値を設定します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  throttle: 100
  modelValue: '#00C16A'
---
::

### サイズ

`size`プロパティを使用してColorPickerのサイズを設定します。

::component-code
---
props:
  size: xl
---
::

### 無効

`disabled`プロパティを使用してColorPickerを無効にします。

::component-code
---
props:
  disabled: true
---
::

## 例

### カラーセレクターとして

カラーセレクターを作成するには、[Button](/docs/components/button)と[Popover](/docs/components/popover)コンポーネントを使用します。

::component-example
---
name: 'color-picker-chooser-example'
---
::

## API

### Props

:component-props

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
