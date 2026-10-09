---
title: useScrollShadow
description: 'スクロール可能な要素にスクロールシャドウ効果を適用するコンポーザー。'
---

## 使用法

自動インポートされた`useScrollShadow`コンポーザーを使用して、スクロール可能な要素のエッジにフェードシャドウを適用し、スクロール方向により多くのコンテンツが利用可能であることを示します。

::component-example
---
name: 'use-scroll-shadow-example'
---
::

-  CSS `mask-image`を使用して、要素をオーバーレイするのではなくエッジでコンテンツをフェードします。
- 要素のオーバーフローを自動的に検出し、必要なときにのみシャドウを適用する。
- 垂直方向と水平方向の両方に対応。

## API

`useScrollShadow(element, options?)`{lang="ts-type"}

### パラメータ

::field-group

  ::field{name="element" type="MaybeRef<HTMLElement | null | undefined>" required}
  テンプレートrefまたはスクロール可能な要素へのリアクティブ参照。
  ::

  ::field{name="options" type="UseScrollShadowOptions"}
  スクロールシャドウの設定オプション。

    ::collapsible

      ::field-group
        ::field{name="size" type="MaybeRefOrGetter<number>" default="24"}
        影のサイズ（ピクセル）。
        ::

        ::field{name="orientation" type="MaybeRefOrGetter<'vertical' | 'horizontal'>" default="'vertical'"}
        シャドウを適用するスクロール方向。
        ::
      ::
    ::
  ::
::

### 戻る

::field-group

  ::field{name="style" type="ComputedRef<CSSProperties | undefined>"}
  スクロール可能な要素を`:style`でバインドするためのリアクティブなスタイルオブジェクトです。shadowsがアクティブな場合は`maskImage`、それ以外の場合は`undefined`を含みます。
  ::

  ::field{name="isOverflowing" type="ComputedRef<boolean>"}
  要素のコンテンツが表示領域をオーバーフローするかどうか。
  ::

  ::field{name="arrivedState" type="{ top: boolean, bottom: boolean, left: boolean, right: boolean }"}
  [`useScroll`](https://vueuse.org/core/useScroll/)からのリアクティブスクロール到着状態。
  ::
::

## 例

### 水平

水平方向にスクロール可能なコンテナには`orientation`オプションを使用します。

```vue
<script setup lang="ts">
const el = useTemplateRef('el')

const { style } = useScrollShadow(el, { orientation: 'horizontal' })
</script>

<template>
  <div ref="el" class="overflow-x-auto whitespace-nowrap" :style="style">
    <!-- Horizontally scrollable content -->
  </div>
</template>
```

### カスタムサイズ

`size`オプションを使用して、シャドウサイズをピクセル単位で変更します。

```vue
<script setup lang="ts">
const el = useTemplateRef('el')

const { style } = useScrollShadow(el, { size: 48 })
</script>

<template>
  <div ref="el" class="max-h-[300px] overflow-y-auto" :style="style">
    <!-- Scrollable content -->
  </div>
</template>
```
