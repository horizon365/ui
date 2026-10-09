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

ColorModeImageコンポーネントは、[`@nuxt/image`](https://github.com/nuxt/image)がインストールされている場合は`<NuxtImg>`コンポーネントを使用します。

::component-code{prefix="color-mode"}
---
prettier: true
ignore:
  - width
  - height
props:
  light: 'https://picsum.photos/id/29/400'
  dark: 'https://picsum.photos/id/46/400'
  width: 200
  height: 200
---
::

::note
ライトモードとダークモードを切り替えて、異なる画像を表示します：：u—color—mode—select{size="sm"}
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<img>` HTML属性もサポートします。
::

## Changelog

:component-changelog{prefix="color-mode"}
