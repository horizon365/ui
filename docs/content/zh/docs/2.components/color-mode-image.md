---
title: ColorModeImage
description: '在亮色和暗色模式下使用不同来源的图片元素。'
category: color-mode
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeImage.vue
---
## 用法

ColorModeImage 组件在安装了 [`@nuxt/image`](https://github.com/nuxt/image) 时使用 `<NuxtImg>` 组件，否则回退到 `img`。

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
在浅色和深色模式之间切换以查看不同的图片： :u-color-mode-select{size="sm"}
::

## API

### 属性

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
此组件还支持所有原生 `<img>` HTML 属性。
::

## 更新日志

:component-changelog{prefix="color-mode"}