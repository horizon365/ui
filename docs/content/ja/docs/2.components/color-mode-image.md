---
title: ColorModeImage
description: 'ライトモードとダークモードの異なるソースを持つイメージ要素。'
category: color-mode
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeImage.vue
---

## 使用法

ColorModeImageコンポーネントは[`@nuxt/image`](https://github.com/nuxt/image)がインストールされている場合、`<NuxtImg>`コンポーネントを使用します。

::component-code{prefix="color-mode"}
---
きれい真
無視
  - 幅
  - 高さ
小道具
  ライト：'https//picsum.photos/id/29/400'
  ダーク'https//picsum.photos/id/46/400'
  幅200
  身長200
---
::

::note
ライトモードとダークモードを切り替えて、異なる画像を表示します：：u—color—mode—select {size="sm"}
::

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<img>` HTML属性もサポートします。
::

##  Changelog

component—changelog {prefix="color-mode"}
