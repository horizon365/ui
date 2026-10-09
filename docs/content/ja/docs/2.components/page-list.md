---
title: ページリスト
description: 'コンテンツをスタック形式で表示するための垂直リストレイアウト。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageList.vue
---

## 使用法

PageListコンポーネントは、垂直のリストレイアウトでコンテンツを表示する柔軟な方法を提供します。[PageCard](/docs/components/page-card)コンポーネントやその他の要素の積み重ねリストを作成し、項目間のオプションの仕切りを使用するのに最適です。

::component-example
---
collapse: true
name: 'page-list-example'
props:
  class: 'w-full'
---
::

### Divide

`divide`プロパティを使用して、各子要素の間に仕切りを追加します。

::component-example
---
collapse: true
name: 'page-list-divide-example'
props:
  class: 'w-full'
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
