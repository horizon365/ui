---
title: スクロールエリア
description: 仮想化をサポートする柔軟なスクロールコンテナ。
category: data
keywords:
  - scrollbar
  - overflow
  - scrolling
links:
  - label: TanStack Virtual
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/virtual/latest
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ScrollArea.vue
---

## 使用法

ScrollAreaコンポーネントは、大きなリスト用のオプション仮想化付きスクロール可能なコンテナを作成します。

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-example'
class: '!p-0'
---
::

### アイテム

`items`プロパティを配列として使用し、デフォルトスロットを使用して各アイテムをレンダリングします。

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-items-example'
class: '!p-0'
---
::

::tip{to="#with-default-slot"}
`items`プロパティなしのデフォルトスロットを使用して、カスタムスクロール可能なコンテンツを直接レンダリングすることもできます。
::

### Orientation

`orientation`プロパティを使用してスクロール方向を変更します。デフォルトは`vertical`です。

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-orientation-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: horizontal
    items:
      - vertical
      - horizontal
---
::

### 仮想化

`virtualize`プロパティを使用して、現在表示されているアイテムのみをレンダリングします。

::note
仮想化が**enabled**の場合、`gap`、`paddingStart`、`paddingEnd`などの`virtualize`プロパティオプションを使用して間隔をカスタマイズします。それ以外の場合は、`ui`プロパティを使用して`viewport`スロットに`gap p-4`のようなクラスを適用します。
::

::tip
すべてのアイテムが**same height**を持っている場合、`virtualize`プロパティで`skipMeasurement`を`true`に設定して、アイテムごとのDOM測定をスキップし、代わりに`estimateSize`に依存します。これにより、大きなユニフォームリストのパフォーマンスが大幅に向上します。
::

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-virtualize-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
---
::

### Shadow badge{label="4.9+" class="align-text-top"}

`shadow`プロパティを使用して、スクロール可能なエッジにフェードシャドウを表示し、スクロール方向により多くのコンテンツが利用可能であることを示します。フェードは自動的に`orientation`に従い、コンテンツがオーバーフローした場合にのみ表示されます。

::component-example
---
collapse: true
name: 'scroll-area-shadow-example'
---
::

::tip
`shadow`プロパティにオブジェクトを渡して、フェードサイズを設定します。例：`:shadow="{ size: 48 }"`。
::

## 例

### As石積みレイアウト

`virtualize`プロパティと`lanes`、`gap`、`estimateSize`オプションを使用して、高さを可変するアイテムを持つPinterestスタイルの石積みレイアウトを作成します。

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-masonry-layout-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
  - name: lanes
    type: number
    label: lanes
    default: 3
  - name: gap
    type: number
    label: gap
    default: 16
---
::

::tip
最適なパフォーマンスを得るには、`estimateSize`を平均アイテム高さに近づけるように設定します。`overscan`を上げるとスクロールのスムーズさが向上しますが、画面外のアイテムが増えます。
::

### レスポンシブレーン付き

`lanes`をリアクティブにするには、[`useWindowSize`](https://vueuse.org/core/useWindowSize/)（ビューポートベースの場合）または[`useElementSize`](https://vueuse.org/core/useElementSize/xph12 x（コンテナベースの場合）コンポジブルを使用できます。

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-responsive-lanes-example'
class: '!p-0'
---
::

### 外部スクロール要素付きbadge{label="4.10+" class="align-text-top"}

`virtualize`プロパティに`getScrollElement`関数を渡して、コンポーネント自身のビューポートではなく、祖先のスクロールコンテナに対して仮想化します。`scrollMargin`をscroll要素の開始点からのリストのオフセット例えば、その上のコンテンツの高さに設定します。

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'scroll-area-external-scroll-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
---
::

::note
コンテナがスクロールを所有しているため、ツールバーのfindボタンと“Top”ボタンは`container.scrollTo`で直接スクロールします。
::

::caution
`shadow`プロパティはこのモードでは効果がありません。rootはスクロールを所有しなくなったためです。代わりにスクロールコンテナに独自のフェードを適用します。
::

### プログラムスクロール付き

公開された`virtualizer`を使用してスクロール位置をプログラムで制御できます。

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-scroll-to-example'
class: '!p-0'
---
::

### 無限スクロール付き

[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/)コンポーザブルを使用して、ユーザーがスクロールするにつれてより多くのデータをロードできます。

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'scroll-area-infinite-scroll-example'
class: '!p-0'
---
::

::note
この例では、`useLazyFetch`と`server: false`を使用して、最初のレンダリングをブロックすることなくクライアント上のデータをフェッチします。読み込み状態は`pending`と`idle`の両方のステータスをチェックし、フェッチの前後に読み込みインジケータを表示します。ユーザーがスクロールすると、追加のページが読み込まれます。
::

### デフォルトスロット付き

`items`プロパティなしのデフォルトスロットを使用して、カスタムスクロール可能なコンテンツを直接レンダリングできます。

::component-example
---
name: 'scroll-area-default-slot-example'
class: '!p-0'
---
::

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

### Expose

型付きコンポーネントインスタンスには[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)を使用してアクセスできます。

```vue
<script setup lang="ts">
const scrollArea = useTemplateRef('scrollArea')

// Scroll to a specific item
function scrollToItem(index: number) {
  scrollArea.value?.virtualizer?.scrollToIndex(index, { align: 'center' })
}
</script>

<template>
  <UScrollArea ref="scrollArea" :items="items" virtualize />
</template>
```

これにより、以下にアクセスできます：

| 名前|タイプ|説明|
| ---- | ---- | ----------- |
| `$el`{lang="ts-type"}| `HTMLElement`{lang="ts-type"}|コンポーネントのルート要素。|
| `virtualizer`{lang="ts-type"}| `Ref<Virtualizer> \| undefined`{lang="ts-type"}| [TanStack Virtual](https://tanstack.com/virtual/latest/docs/api/virtualizer)仮想化インスタンス（仮想化が無効な場合は`undefined`）。|

## Theme

:component-theme

## Changelog

:component-changelog
