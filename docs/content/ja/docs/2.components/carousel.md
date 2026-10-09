---
description: Emblaを使用して構築されたモーションとスワイプのカルーセル。
category: data
keywords:
  - swiper
  - gallery
  - image slider
  - slideshow
links:
  - label: エンブラ
    to: https://www.embla-carousel.com/docs/v8/api
    icon: i-custom-embla-carousel
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Carousel.vue
---

## 使用法

カルーセルコンポーネントを使用して、カルーセル内のアイテムのリストを表示します。

::component-example
---
collapse: true
overflowHidden: true
name: 'carousel-example'
class: '!p-0'
---
::

::note
マウスを使用して、デスクトップ上でカルーセルを水平にドラッグします。
::

### アイテム

`items`プロパティを配列として使用し、デフォルトスロットを使用して各アイテムをレンダリングします。

::component-example
---
name: 'carousel-items-example'
class: 'p-8'
---
::

次のプロパティを持つオブジェクトの配列を渡すこともできます：

- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue }`{lang="ts-type"}

表示する項目の数を制御するには、[`basis`](https://tailwindcss.com/docs/flex-basis)/[`width`](https://tailwindcss.com/docs/width)ユーティリティクラスを使用します。

::component-example
---
name: 'carousel-items-multiple-example'
class: 'p-8 px-16'
---
::

### Orientation

`orientation`プロパティを使用してプログレスの向きを変更します。デフォルトは`horizontal`です。

::note
マウスを使用して、デスクトップ上でカルーセルを垂直にドラッグします。
::

::component-example
---
name: 'carousel-orientation-example'
class: 'p-8'
---
::

::caution
コンテナ上に縦方向に`height`を指定する必要があります。
::

### 矢印

`arrows`プロパティを使用してprevとnextボタンを表示します。

::component-example
---
name: 'carousel-arrows-example'
class: 'p-8'
---
::

### 前/次へ

`prev`と`next`のプロップを使用して、[Button](/docs/components/button)のプロップで前ボタンと次ボタンをカスタマイズします。

::component-example
---
name: 'carousel-prev-next-example'
class: 'p-8'
---
::

### Prev/Nextアイコン

`prev-icon`と`next-icon`プロップを使用して、ボタン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-arrow-left`/`i-lucide-arrow-right`です。

::component-example
---
name: 'carousel-prev-next-icon-example'
class: 'p-8'
options:
  - name: 'prevIcon'
    label: 'prevIcon'
    default: 'i-lucide-chevron-left'
  - name: 'nextIcon'
    label: 'nextIcon'
    default: 'i-lucide-chevron-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
これらのアイコンは`app.config.ts`の`ui.icons.arrowLeft`/`ui.icons.arrowRight`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
これらのアイコンは`vite.config.ts`の`ui.icons.arrowLeft`/`ui.icons.arrowRight`キーでグローバルにカスタマイズできます。
:::
::

### Dots

`dots`プロパティを使用して、特定のスライドまでスクロールするドットのリストを表示します。

::component-example
---
name: 'carousel-dots-example'
class: 'p-8 pb-12'
---
::

ドットの数は、ビューに表示されるスライドの数に基づいています。

::component-example
---
name: 'carousel-dots-multiple-example'
class: 'p-8 px-16 pb-12'
---
::

## プラグイン

カルーセルコンポーネントは公式の[Emblaカルーセルプラグイン](https://www.embla-carousel.com/docs/v8/plugins)を実装しています。

### 自動再生

このプラグインは、エンブラカルーセルを**autoplay**機能で拡張するために使用します。

`autoplay`プロパティをブール値またはオブジェクトとして使用して、[Autoplayプラグイン](https://www.embla-carousel.com/docs/v8/plugins/autoplay)を設定します。

::component-example
---
name: 'carousel-autoplay-example'
class: 'p-8 px-16 pb-12'
---
::

::note
この例では、無限カルーセルに`loop`プロパティを使用しています。
::

### Autoスクロール

このプラグインはEmbla Carouselを**auto scroll**機能で拡張するために使用します。

`auto-scroll`プロパティをブール値またはオブジェクトとして使用して、[Auto Scrollプラグイン](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll)を設定します。

::component-example
---
name: 'carousel-auto-scroll-example'
class: 'p-8 px-16 pb-12'
---
::

::note
この例では、無限カルーセルに`loop`プロパティを使用しています。
::

### Auto高さ

このプラグインは、エンブラカルーセルを**auto height**機能で拡張するために使用します。ビュー内の最も高いスライドの高さに合わせてカルーセルコンテナの高さを変更します。

`auto-height`プロパティをブール値またはオブジェクトとして使用して、[Auto Heightプラグイン](https://www.embla-carousel.com/docs/v8/plugins/auto-height)を設定します。

::component-example
---
name: 'carousel-auto-height-example'
class: 'p-8 pt-16'
---
::

::note
この例では、コンテナに`transition-[height]`クラスを追加して高さの変更をアニメーション化しています。
::

### クラス名

Class Namesは、Embla Carousel用の** class name toggle**ユーティリティプラグインで、カルーセル上のクラス名の切り替えを自動化できます。

`class-names`プロパティをブール値またはオブジェクトとして使用して、[クラス名plugin](https://www.embla-carousel.com/docs/v8/plugins/class-names)を設定します。

::component-example
---
name: 'carousel-class-names-example'
class: 'p-8'
---
::

::note
この例では、不透明度の変更をアニメーション化するために`item`に`transition-opacity [&:not(.is-snapped)]:opacity-10`クラスを追加しています。
::

### フェード

このプラグインは、Emblaのカルーセルスクロール機能を**fade transitions**に置き換えるために使用されます。

`fade`プロパティをブール値またはオブジェクトとして使用して、[Fadeプラグイン](https://www.embla-carousel.com/docs/v8/plugins/fade)を設定します。

::component-example
---
name: 'carousel-fade-example'
class: 'p-8 pb-12'
---
::

### Wheelジェスチャー

このプラグインはEmblaカルーセルを拡張し、マウス/トラックパッドホイール**を使用してカルーセルをナビゲートする機能を追加します。

`wheel-gestures`プロパティをブール値またはオブジェクトとして使用して、[Wheel Gesturesプラグイン](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures)を設定します。

::note
マウスホイールを使用してカルーセルをスクロールします。
::

::component-example
---
name: 'carousel-wheel-gestures-example'
class: 'p-8 px-16'
---
::

## 例

### サムネイル付き

[`emblaApi`](#expose)の[`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto)メソッドを使用して、特定のスライドに移動するカルーセルの下にサムネイルを表示できます。

::component-example
---
name: 'carousel-thumbnails-example'
class: 'p-8 px-16'
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

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)を使用して型付きコンポーネントインスタンスにアクセスできます。

```vue
<script setup lang="ts">
const carousel = useTemplateRef('carousel')
</script>

<template>
  <UCarousel ref="carousel" />
</template>
```

これにより、以下にアクセスできます：

| 名前|タイプ|
| ---- | ---- |
| `emblaRef`{lang="ts-type"}| `Ref<HTMLElement \| null>`{lang="ts-type"}|
| `emblaApi`{lang="ts-type"}| [`Ref<EmblaCarouselType \| null>`{lang="ts-type"}](https://www.embla-carousel.com/docs/v8/api/methods#typescript)|

## Theme

:component-theme

## Changelog

:component-changelog
