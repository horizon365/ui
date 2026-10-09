---
title: ページ機能
description: 'アプリケーションの主要機能を表示するコンポーネント。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageFeature.vue
---

## 使用法

PageFeatureコンポーネントは[ PageSection](/docs/components/page-section)コンポーネントで使用され、[features](/docs/components/page-section#features)を表示します。

### Title

`title`プロパティを使用してフィーチャーのタイトルを設定します。

::component-code
---
hide:
  - class
props:
  title: 'Theme'
  class: 'w-96'
---
::

### Description

`description`プロパティを使用して、フィーチャーの説明を設定します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
props:
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  class: 'w-96'
---
::

### Icon

`icon`プロパティを使用してフィーチャーのアイコンを設定します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  icon: 'i-lucide-swatch-book'
  class: 'w-96'
---
::

### Link

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネントから、`to`、`target`、`rel`などのプロパティを渡すことができます。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - target
props:
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  icon: 'i-lucide-swatch-book'
  to: '/docs/getting-started/theme/design-system'
  target: _blank
  class: 'w-96'
---
::

### Orientation

フィーチャーの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`horizontal`です。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
props:
  orientation: 'vertical'
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  icon: 'i-lucide-swatch-book'
  class: 'w-96'
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
