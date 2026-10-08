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
崩壊真
overflowHidden true
名前'carousel—example'
クラス'！p—0'
---
::

::note
マウスを使用して、デスクトップ上でカルーセルを水平にドラッグします。
::

### アイテム

`items`プロパティを配列として使用し、デフォルトスロットを使用して各アイテムをレンダリングします。

::component-example
---
名前'carousel—items—example'
クラス'p—8'
---
::

次のプロパティを持つオブジェクトの配列を渡すこともできます：

- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue }`{lang="ts-type"}

表示される項目の数を制御するには、[`basis`](https://tailwindcss.com/docs/flex-basis)/[`width`](https://tailwindcss.com/docs/width)`item`のユーティリティクラスを使用します。

::component-example
---
名前'carousel—items—multiple—example'
クラス'p—8 px—16'
---
::

### オリエンテーション

プログレスの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`horizontal`です。

::note
マウスを使用して、デスクトップ上でカルーセルを垂直にドラッグします。
::

::component-example
---
名前'carousel—oriation—example'
クラス'p—8'
---
::

::caution
コンテナには`height`を縦向きに指定する必要があります。
::

###  Arrows

`arrows` propを使用してprevとnextボタンを表示します。

::component-example
---
名前'carousel—arrows—example'
クラス'p—8'
---
::

### 前/次へ

`prev`および`next` propsを使用して、[ Button ](/docs/components/button) propsで前ボタンと次ボタンをカスタマイズします。

::component-example
---
名前'carousel—prev—next example'
クラス'p—8'
---
::

### 前/次アイコン

`prev-icon`および`next-icon` propsを使用して、[ Icon ](/docs/components/icon)ボタンをカスタマイズします。デフォルトは`i-lucide-arrow-left`/`i-lucide-arrow-right`です。

::component-example
---
名前'carousel—prev—next—icon—example'
クラス'p—8'
オプション
  -  name 'prevIcon'
    ラベル'prevIcon'
    デフォルト'i—lucide—chevron—left'
  -  name 'nextIcon'
    ラベル'nextIcon'
    デフォルト'i—lucide—chevron—right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
これらのアイコンは、`ui.icons.arrowLeft`/`ui.icons.arrowRight`キーの`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
これらのアイコンは、`ui.icons.arrowLeft`/`ui.icons.arrowRight`キーの`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### ドット

`dots`プロパティを使用して、特定のスライドにスクロールするドットのリストを表示します。

::component-example
---
名前'carousel—dots—example'
クラス'p—8 pb—12'
---
::

ドットの数は、ビューに表示されるスライドの数に基づいています。

::component-example
---
名前'carousel—dots—multiple—example'
クラス'P—8 PX—16 PB—12'
---
::

## プラグイン

Carouselコンポーネントは、公式の[ Embla Carouselプラグイン](https://www.embla-carousel.com/docs/v8/plugins)を実装しています。

### オートプレイ

このプラグインはEmbla Carouselを** autoplay **機能で拡張するために使用します。

`autoplay` propをブール値またはオブジェクトとして使用して、[ Autoplayプラグイン](https://www.embla-carousel.com/docs/v8/plugins/autoplay)を設定します。

::component-example
---
名前'carousel—autoplay—example'
クラス'P—8 PX—16 PB—12'
---
::

::note
この例では、無限カルーセルのために`loop`プロパティを使用しています。
::

### 自動スクロール

このプラグインはEmbla Carouselを** auto scroll **機能で拡張するために使用します。

`auto-scroll` propをブール値またはオブジェクトとして使用して、[ Auto Scrollプラグイン](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll)を設定します。

::component-example
---
名前'carousel—auto—scroll—example'
クラス'P—8 PX—16 PB—12'
---
::

::note
この例では、無限カルーセルのために`loop`プロパティを使用しています。
::

### 自動高さ

このプラグインは、Embla Carouselを** auto height **機能で拡張するために使用されます。このプラグインは、ビュー内の最も高いスライドの高さに合わせてカルーセルコンテナの高さを変更します。

`auto-height` propをブール値またはオブジェクトとして使用して、[ Auto Heightプラグイン](https://www.embla-carousel.com/docs/v8/plugins/auto-height)を設定します。

::component-example
---
名前'carousel—auto—height—example'
クラス'p—8 pt—16'
---
::

::note
この例では、コンテナに`transition-[height]`クラスを追加して、高さの変更をアニメーション化しています。
::

### クラス名

クラス名は** class name toggle ** Emblaカルーセル用ユーティリティプラグインで、カルーセル上のクラス名の切り替えを自動化できます。

`class-names` propをブール値またはオブジェクトとして使用して、[クラス名プラグイン](https://www.embla-carousel.com/docs/v8/plugins/class-names)を設定します。

::component-example
---
名前'carousel—class—name'
クラス'p—8'
---
::

::note
この例では、`item`に`transition-opacity [&:not(.is-snapped)]:opacity-10`クラスを追加して、不透明度の変更をアニメーション化しています。
::

###  Fade

このプラグインは、Emblaのカルーセルスクロール機能を** fade transitions **に置き換えるために使用されます。

`fade` propをブール値またはオブジェクトとして使用して、[ Fadeプラグイン](https://www.embla-carousel.com/docs/v8/plugins/fade)を設定します。

::component-example
---
名前'carousel—fade'
クラス'p—8 pb—12'
---
::

### ホイールジェスチャー

このプラグインはEmblaカルーセルを拡張し、**マウス/トラックパッドホイール**を使用してカルーセルをナビゲートできるようにします。

`wheel-gestures` propをブール値またはオブジェクトとして使用して、[ Wheel Gesturesプラグイン](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures)を設定します。

::note
マウスホイールを使用してカルーセルをスクロールします。
::

::component-example
---
名前'carousel—wheel—gestures—example'
クラス'p—8 px—16'
---
::

## 例

### サムネイル付き

[`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto)[`emblaApi`](#expose)で[[を使用して、特定のスライドに移動するカルーセルの下にサムネイルを表示できます。

::component-example
---
名前'carousel—thumnes—example'
クラス'p—8 px—16'
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

###  Emits

component—emits

###  Expose

型付きコンポーネントインスタンスには、[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)を使用してアクセスできます。

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
| `emblaRef`{lang="ts-type"}|`Ref<HTMLElement \| null>`{lang="ts-type"}|
| `emblaApi`{lang="ts-type"}| [`Ref<EmblaCarouselType \| null>`{lang="ts-type"}](https://www.embla-carousel.com/docs/v8/api/methods#typescript)|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
