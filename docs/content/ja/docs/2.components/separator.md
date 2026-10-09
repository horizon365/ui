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
class: 'p-8'
---
::

### Orientation

separatorの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`horizontal`です。

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  orientation: vertical
  class: 'h-48'
---
::

### Label

`label`プロパティを使用して、セパレータの中央にラベルを表示します。

::component-code
---
class: 'p-8'
props:
  label: 'Hello World'
---
::

### ポジションbadge{label="4.8+" class="align-text-top"}

separatorのコンテンツの位置を変更するには、`position`プロパティを使用します。デフォルトは`center`です。

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  position: start
  label: 'Hello World'
---
::

### Icon

`icon`プロパティを使用して、セパレータの中央にアイコンを表示します。

::component-code
---
class: 'p-8'
props:
  icon: 'i-simple-icons-nuxtdotjs'
---
::

### アバター

`avatar`プロパティを使用して、Separatorの中央にアバターを表示します。

::component-code
---
prettier: true
class: 'p-8'
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
---
::

### Color

separatorの色を変更するには、`color`プロパティを使用します。デフォルトは`neutral`です。

::component-code
---
class: 'p-8'
props:
  color: primary
  type: solid
---
::

### Type

separatorのタイプを変更するには、`type`プロパティを使用します。デフォルトは`solid`です。

::component-code
---
class: 'p-8'
props:
  type: dashed
---
::

### サイズ

separatorのサイズを変更するには、`size`プロパティを使用します。デフォルトは`xs`です。

::component-code
---
class: 'p-8'
props:
  size: lg
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
