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

## 使用情况

当安装了[`@nuxt/image`](https://github.com/nuxt/image)时，头像使用`<NuxtImg>`组件，否则返回到`img`。

::component-code
---
忽略：
  - src
道具：
  src：'https：//github.com/benjamincanac.png'
---
::

::note
您可以从HTML`<img>`元素传递任何属性，如`alt`、`loading`等。
::

::tip
要选择退出`@nuxt/image`，请使用`as`属性：`:as="{ img: 'img' }"`。
::

### Src

使用`src`prop设置图像URL。

::component-code
---
忽略：
  - loading
道具：
  来源：'https：//github.com/benjamincanac.png'
  加载：惰性
---
::

### Size

使用`size`道具设置头像的大小。

::component-code
---
忽略：
  - src
  - loading
道具：
  来源：'https：//github.com/benjamincanac.png'
  尺寸：xl
  加载：惰性
---
::

::note
根据`size`属性自动设置`<img>`元素的`width`和`height`。
::

### Icon

使用`icon`道具显示回退[Icon](/docs/components/icon)。

::component-code
---
道具：
  图标：'i-lucide-image'
  尺寸：md
---
::

### Text

使用`text`道具显示回退文本。

::component-code
---
道具：
  文本：'+1'
  尺寸：md
---
::

### Alt

当未提供图标或文本时，`alt`属性的**initials**将用作回退。

::component-code
---
道具：
  替代：'本杰明·卡纳'
  尺寸：md
---
::

::note
`alt`属性将作为`alt`属性传递给`img`元素。
::

颜色：徽章

使用`color`道具更改头像的颜色。

::component-code
---
道具类：
  颜色：原色
  替代：'本杰明·卡纳'
---
::

芯片

使用`chip`道具在阿凡达周围显示一个筹码。

::component-code
---
更漂亮：真的
忽略：
  来源：
  正在载入
- 芯片.插图
道具：
  来源：'https：//github.com/benjamincanac.png'
  加载：惰性
  芯片：
    插图：true
---
::

示例

### 带工具提示

您可以使用[Tooltip](/docs/components/tooltip)组件，在鼠标器游标停留在虚拟人偶上时显示工具提示。

：组件示例{name="avatar-tooltip-example"}

带掩码

您可以使用CSS遮色片，以自订形体（而非简单的圆形）来显示“虚拟人偶”。

：组件示例{name="avatar-mask-example"}

美国石油学会

道具

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
此组件还支持所有本机`<img>`HTML属性。
::

主题

：组件主题

## 变更日志

：组件更改日志
