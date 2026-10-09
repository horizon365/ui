---
title: ColorModeImage
description: '具有不同光源的图像元素用于亮模式和暗模式。'
category: color-mode
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeImage.vue
---

## 用法

ColorModeImage组件在安装[`@nuxt/image`](https://github.com/nuxt/image)时使用`<NuxtImg>`组件，否则回退到`img`。

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
在亮模式和暗模式之间切换以查看不同的图像：：u-color-mode-select{size="sm"}
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
此组件还支持所有原生`<img>` HTML属性。
::

## Changelog

:component-changelog{prefix="color-mode"}
