---
title: 颜色模式头像
description: '一个阿凡达与不同的来源为光明和黑暗模式。'
category: color-mode
links:
  - label: 化身
    to: /docs/components/avatar
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeAvatar.vue
---

## 用法

ColorModeAvatar组件扩展了[Avatar](/docs/components/avatar)组件，因此您可以传递任何属性，如`size`、`icon`等。

使用`light`和`dark`道具定义亮暗模式的光源。

::component-code{prefix="color-mode"}
---
props:
  light: 'https://github.com/vuejs.png'
  dark: 'https://github.com/nuxt.png'
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
