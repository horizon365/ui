---
description: ページをナビゲートするためのボタンまたはリンクのリスト。
category: navigation
keywords:
  - pager
  - page navigation
links:
  - label: ペジネーション
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pagination
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Pagination.vue
---

## 使用法

現在のページを制御するには、`default-page`プロパティまたは`v-model:page`ディレクティブを使用します。

::component-code
---
external:
  - page
model:
  - page
ignore:
  - page
  - total
props:
  page: 5
  total: 100
---
::

::note
ページネーションコンポーネントはページを表示するために[`Button`](/docs/components/button)を使用し、スタイルを設定するために[`color`](#color)、[`variant`](#variant)、[`size`](#size)小道具を使用します。
::

### Total

`total`プロパティを使用して、リスト内のアイテムの合計数を設定します。

::component-code
---
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
---
::

### ページごとのアイテム

`items-per-page`プロパティを使用して、1ページあたりのアイテム数を設定します。デフォルトは`10`です。

::component-code
---
ignore:
  - page
external:
  - page
model:
  - page
props:
  page: 5
  itemsPerPage: 20
  total: 100
---
::

### 兄弟数

`sibling-count`プロパティを使用して、表示する兄弟の数を設定します。デフォルトは`2`です。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  siblingCount: 1
  total: 100
---
::

### エッジを表示

`show-edges`プロパティを使用して、省略記号、最初と最後のページを常に表示します。デフォルトは`false`です。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showEdges: true
  siblingCount: 1
  total: 100
---
::

### コントロールを表示

`show-controls`プロパティを使用して、最初、前、次、最後のボタンを表示します。デフォルトは`true`です。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showControls: false
  showEdges: true
  total: 100
---
::

### Color

`color`プロパティを使用して、非アクティブなコントロールの色を設定します。デフォルトは`neutral`です。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  color: primary
  total: 100
---
::

### バリアント

`variant`プロパティを使用して、非アクティブなコントロールのバリアントを設定します。デフォルトは`outline`です。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  color: neutral
  variant: subtle
  total: 100
---
::

### Active Color

`active-color`プロパティを使用して、アクティブなコントロールの色を設定します。デフォルトは`primary`です。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  activeColor: neutral
  total: 100
---
::

### Activeバリアント

`active-variant`プロパティを使用して、アクティブコントロールのバリアントを設定します。デフォルトは`solid`です。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  activeColor: primary
  activeVariant: subtle
  total: 100
---
::

### サイズ

`size`プロパティを使用してコントロールのサイズを設定します。デフォルトは`md`です。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  page: 5
  size: xl
  total: 100
---
::

### 無効

`disabled`プロパティを使用して、ページネーションコントロールを無効にします。

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
  disabled: true
---
::

## 例

### リンク付き

ボタンをリンクに変換するには、`to`プロパティを使用します。ページ番号を受け取り、ルート先を返す関数を渡します。

::component-example
---
name: 'pagination-links-example'
---
::

::note
この例では、ページの先頭に移動しないように`#with-links`ハッシュを追加しています。
::

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
