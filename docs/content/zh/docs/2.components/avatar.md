---
description: 一个img元素，支持fallback和Nuxt Image。
category: element
keywords:
  - profile picture
  - user image
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Avatar.vue
---

## 用法

如果安装了[`@nuxt/image`](https://github.com/nuxt/image)，则Avatar将使用`<NuxtImg>`组件，否则将回退到`img`。

::component-code
---
ignore:
  - src
props:
  src: 'https://github.com/benjamincanac.png'
---
::

::note
您可以从HTML `<img>`元素传递任何属性，例如`alt`、`loading`等。
::

::tip
要退出`@nuxt/image`，请使用`as`道具：`:as="{ img: 'img' }"`。
::

### 来源

使用`src`属性设置图像URL。

::component-code
---
ignore:
  - loading
props:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
---
::

大小

使用`size`道具设置头像的尺寸。

::component-code
---
ignore:
  - src
  - loading
props:
  src: 'https://github.com/benjamincanac.png'
  size: xl
  loading: lazy
---
::

::note
`<img>`元素的`width`和`height`是根据`size`属性自动设置的。
::

### 图标

使用`icon`属性显示回退[Icon](/docs/components/icon).

::component-code
---
props:
  icon: 'i-lucide-image'
  size: md
---
::

文本格式

使用`text`属性显示备用文本。

::component-code
---
props:
  text: '+1'
  size: md
---
::

### Alt选项卡

如果未提供图标或文本，则使用`alt`属性的**initials**作为备用。

::component-code
---
props:
  alt: 'Benjamin Canac'
  size: md
---
::

::note
`alt`属性作为`alt`属性传递给`img`元素。
::

颜色：徽章

使用`color`道具更改头像的颜色。

::component-code
---
props:
  color: primary
  alt: 'Benjamin Canac'
---
::

芯片

使用`chip`道具在阿凡达周围显示一个筹码。

::component-code
---
prettier: true
ignore:
  - src
  - loading
  - chip.inset
props:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
  chip:
    inset: true
---
::

示例

### 带工具提示

您可以使用[Tooltip](/docs/components/tooltip)组件，在将鼠标器游标置于虚拟人偶上时显示工具提示。

:component-example{name="avatar-tooltip-example"}

### 带掩码

您可以使用CSS遮色片，以自订形体（而非简单的圆形）来显示“虚拟人偶”。

:component-example{name="avatar-mask-example"}

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
此组件还支持所有原生`<img>` HTML属性。
::

## Theme

:component-theme

## Changelog

:component-changelog
