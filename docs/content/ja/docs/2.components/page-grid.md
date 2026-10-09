---
title: PageGrid
description: '柔軟なレイアウトでコンテンツを表示するためのレスポンシブグリッドシステム。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageGrid.vue
---

## 使用法

PageGridコンポーネントは、[PageCard](/docs/components/page-card)コンポーネントまたはその他の要素を表示するためのレスポンシブなグリッドレイアウトを提供し、画面サイズに基づいて1～3列に自動的に調整します。

::component-example
---
name: 'page-grid-example'
class: 'p-8'
---
::

`col-span-*`と`row-span-*`ユーティリティクラスを使用して、弁当スタイルのレイアウトでカードのリストを表示することもできます。

::component-example
---
collapse: true
name: 'page-grid-bento-example'
class: 'p-8'
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
