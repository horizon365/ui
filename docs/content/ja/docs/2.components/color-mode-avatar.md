---
title: カラーモードアバター
description: 'ライトモードとダークモードの異なるソースを持つアバター。'
category: color-mode
links:
  - label: アバター
    to: /docs/components/avatar
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeAvatar.vue
---

## 使用法

ColorModeAvatarコンポーネントは[Avatar](/docs/components/avatar)コンポーネントを拡張しているため、`size`、`icon`などの任意のプロパティを渡すことができます。

`light`と`dark`プロパティを使用して、ライトモードとダークモードのソースを定義します。

::component-code{prefix="color-mode"}
---
props:
  light: 'https://github.com/vuejs.png'
  dark: 'https://github.com/nuxt.png'
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
