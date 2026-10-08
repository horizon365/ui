---
title: ColorModeAvatar
description: '一个在浅色和深色模式下使用不同源的 Avatar。'
category: color-mode
links:
  - label: Avatar
    to: /docs/components/avatar
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeAvatar.vue
---
## 用法

ColorModeAvatar 组件扩展了 [Avatar](/docs/components/avatar) 组件，因此你可以传递 `size`、`icon` 等任意属性。

使用 `light` 和 `dark` 属性来定义浅色和深色模式的来源。

::component-code{prefix="color-mode"}
---
props:
  light: 'https://github.com/vuejs.png'
  dark: 'https://github.com/nuxt.png'
---
::

::note
在浅色和深色模式之间切换以查看不同图片： :u-color-mode-select{size="sm"}
::

## API

### 属性

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
该组件还支持所有原生 `<img>` HTML 属性。
::

## 更新日志

:component-changelog{prefix="color-mode"}