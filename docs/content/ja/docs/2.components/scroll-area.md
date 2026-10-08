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
崩壊真
overflowHidden true
名前'scroll—area—example'
クラス'！p—0'
---
::

### アイテム

`items`プロパティを配列として使用し、デフォルトスロットを使用して各アイテムをレンダリングします。

::component-example
---
崩壊真
overflowHidden true
名前'scroll—area—items—example'
クラス'！p—0'
---
::

::tip{to="#with-default-slot"}
`items`プロパティなしでデフォルトスロットを使用して、カスタムスクロール可能なコンテンツを直接レンダリングすることもできます。
::

### オリエンテーション

スクロール方向を変更するには`orientation`プロパティを使用します。デフォルトは`vertical`です。

::component-example
---
崩壊真
overflowHidden true
名前'scroll—area—orientation—example'
クラス'！p—0'
オプション
  -  nameオリエンテーション
    ラベルオリエンテーション
    デフォルト水平
    アイテム
      - 垂直
      - 水平
---
::

### 仮想化

`virtualize`プロパティを使用して、現在表示されているアイテムのみをレンダリングし、大規模なデータセットを扱う場合のパフォーマンスを大幅に向上させます。

::note
仮想化が** enableed **の場合、`gap`、`paddingStart`、および`paddingEnd`のような`virtualize` propオプションを使用して間隔をカスタマイズします。それ以外の場合は、`ui` propを使用して`gap p-4`のようなクラスを`viewport`スロットに適用します。
::

::tip
すべてのアイテムが**同じ高さ**を持っている場合、`virtualize`プロパティの`skipMeasurement`を`true`に設定して、アイテムごとのDOM測定をスキップし、代わりに`estimateSize`に依存します。これにより、大きなユニフォームリストのパフォーマンスが大幅に向上します。
::

::component-example
---
崩壊真
overflowHidden true
名前'scroll—area—virtualize—example'
クラス'！p—0'
オプション
  -  nameオリエンテーション
    ラベルオリエンテーション
    デフォルト垂直
    アイテム
      - 垂直
      - 水平
---
::

### シャドウbadge {label="4.9+" class="align-text-top"}

`shadow`プロパティを使用して、スクロール可能なエッジにフェードシャドウを表示し、スクロール方向により多くのコンテンツが利用可能であることを示します。フェードは自動的に`orientation`に続き、コンテンツがオーバーフローした場合にのみ表示されます。

::component-example
---
崩壊真
名前'scroll—area—shadow—example'
---
::

::tip
`shadow` propにオブジェクトを渡してフェードサイズを設定します。例：`:shadow="{ size: 48 }"`。
::

## 例

### 石積みレイアウトとして

`virtualize` propを`lanes`、`gap`、および`estimateSize`のオプションとともに使用して、高さを可変するPinterestスタイルの石積みレイアウトを作成します。

::component-example
---
崩壊真
overflowHidden true
名前'scroll—area—masonry—layout—example'
クラス'！p—0'
オプション
  -  nameオリエンテーション
    ラベルオリエンテーション
    デフォルト垂直
    アイテム
      - 垂直
      - 水平
  -  name lanes
    タイプ数値
    ラベルレーン
    デフォルト3
  -  name gap
    タイプ数値
    ラベルギャップ
    デフォルト16
---
::

::tip
最適なパフォーマンスを得るには、`estimateSize`を平均アイテム高さの近くに設定します。`overscan`を増やすとスクロールのスムーズさが向上しますが、画面外のアイテムが多く表示されます。
::

### レスポンシブレーン付き

[`useWindowSize`](https://vueuse.org/core/useWindowSize/)ビューポートベースの場合または[`useElementSize`](https://vueuse.org/core/useElementSize/)コンテナベースの場合コンポジブルを使用して、`lanes`をリアクティブにすることができます。

::component-example
---
崩壊真
overflowHidden true
名前'scroll—area—responsive—lanes—example'
クラス'！p—0'
---
::

### 外部スクロール要素付き：badge {label="4.10+" class="align-text-top"}

`virtualize` propに`getScrollElement`関数を渡して、コンポーネント自身のビューポートではなく、祖先のスクロールコンテナに対して仮想化します。`scrollMargin`をスクロール要素の開始からのリストのオフセット（例：その上のコンテンツの高さ）に設定します。

::component-example
---
きれい真
崩壊真
overflowHidden true
名前'scroll—area—external—scroll—example'
クラス'！p—0'
オプション
  -  nameオリエンテーション
    ラベルオリエンテーション
    デフォルト垂直
    アイテム
      - 垂直
      - 水平
---
::

::note
コンテナがスクロールを所有しているため、ツールバーのfindと"Top"ボタンは`container.scrollTo`で直接スクロールします。
::

::caution
`shadow` propはこのモードでは効果がありません。ルートはスクロールを所有しなくなったためです。代わりにスクロールコンテナに独自のフェードを適用します。
::

### プログラムスクロール付き

公開された`virtualizer`を使用して、スクロール位置をプログラムで制御できます。

::component-example
---
崩壊真
overflowHidden true
名前'scroll—area—scroll—to—example'
クラス'！p—0'
---
::

### 無限スクロール

[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/)を使用して、ユーザーがスクロールするたびにさらにデータを読み込むことができます。

::component-example
---
きれい真
崩壊真
overflowHidden true
名前'scroll—area—infinite—scroll—example'
クラス'！p—0'
---
::

::note
この例では、`useLazyFetch`と`server: false`を使用して、最初のレンダリングをブロックすることなくクライアント上のデータをフェッチします。読み込み状態は`pending`と`idle`の両方のステータスをチェックし、フェッチの前後に読み込みインジケータを表示します。ユーザーがスクロールすると、追加のページが読み込まれます。
::

### デフォルトスロット付き

`items`プロパティなしでデフォルトスロットを使用して、カスタムスクロール可能なコンテンツを直接レンダリングできます。

::component-example
---
名前'scroll—area—default—slot—example'
クラス'！p—0'
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

### エクスポーズ

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)を使用して、型付きコンポーネントインスタンスにアクセスできます。

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
| `virtualizer`{lang="ts-type"}| `Ref<Virtualizer> \| undefined`{lang="ts-type"}| [ TanStack Virtual](https://tanstack.com/virtual/latest/docs/api/virtualizer) virtualizerインスタンス仮想化が無効の場合は`undefined`。|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
