---
title: フィールドグループ
description: 複数のボタンのような要素をグループ化します。
category: element
keywords:
  - segmented control
  - toggle group
  - button group
  - input group
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FieldGroup.vue
---

## 使用法

FieldGroup内で複数の[ Button ](/docs/components/button)をラップしてグループ化します。

::component-code
---
きれい真
スロット
  デフォルト|

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
uボタン{color="neutral" variant="subtle" label="Button"}
u—button {color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### サイズ

`size`プロパティを使用して、すべてのボタンのサイズを変更します。

::component-code
---
きれい真
小道具
  サイズXL
スロット
  デフォルト|

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
uボタン{color="neutral" variant="subtle" label="Button"}
uボタン{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### オリエンテーション

`orientation`プロパティを使用して、ボタンの向きを変更します。デフォルトは`horizontal`です。

::component-code
---
きれい真
小道具
  オリエンテーション垂直
スロット
  デフォルト|

    <UButton color="neutral" variant="subtle" label="Submit" />
    <UButton color="neutral" variant="outline" label="Cancel" />
---
u—button {color="neutral" variant="subtle" label="Submit"}
u—button {color="neutral" variant="outline" label="Cancel"}
::

## 例

### 入力あり

[ Input ](/docs/components/input)[ InputMenu ](/docs/components/input-menu)[ Select ](/docs/components/select)[ SelectMenu ](/docs/components/select-menu)などのコンポーネントをフィールドグループ内で使用できます。

::component-code
---
きれい真
スロット
  デフォルト|

    <UInput color="neutral" variant="outline" placeholder="Enter token" />

    <UButton color="neutral" variant="subtle" icon="i-lucide-clipboard" />
---
u—input {color="neutral" variant="outline" placeholder="Enter token"}
u—button {color="neutral" variant="subtle" icon="i-lucide-clipboard"}
::

### ツールチップ付き

フィールドグループ内で[ Tooltip ](/docs/components/tooltip)を使用できます。

component—example {name="field-group-tooltip-example"}

### ドロップダウンメニュー付き

フィールドグループ内で[ DropdownMenu ](/docs/components/dropdown-menu)を使用できます。

component—example {name="field-group-dropdown-example"}

### バッジ付き

フィールドグループ内で[ Badge ](/docs/components/badge)を使用できます。

component—example {name="field-group-badge-example"}

##  API

###  Props

component—props

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
