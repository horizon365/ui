---
description: 水平或垂直分隔内容。
category: element
keywords:
  - divider
  - hr
  - horizontal rule
links:
  - label: 分离器
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Separator.vue
---

## 用法

按原样使用Separator组件分隔内容。

::component-code
---
class: 'p-8'
---
::

### 定向

使用`orientation`道具将Separator. px的方向更改为`horizontal`。

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  orientation: vertical
  class: 'h-48'
---
::

### Label

使用`label`属性在分隔符中间显示标签。

::component-code
---
class: 'p-8'
props:
  label: 'Hello World'
---
::

### 位置：badge{label="4.8+" class="align-text-top"}

使用`position`属性将Separator.xml内容的位置更改为`center`。

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  position: start
  label: 'Hello World'
---
::

### Icon

使用`icon`道具在分隔符中间显示一个图标。

::component-code
---
class: 'p-8'
props:
  icon: 'i-simple-icons-nuxtdotjs'
---
::

### Avatar

使用`avatar`道具在分隔符中间显示头像。

::component-code
---
prettier: true
class: 'p-8'
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
---
::

### Color

使用`color`属性将Separator.xml的颜色更改为`neutral`。

::component-code
---
class: 'p-8'
props:
  color: primary
  type: solid
---
::

### Type

使用`type`属性将Separator.xml的类型更改为`solid`。

::component-code
---
class: 'p-8'
props:
  type: dashed
---
::

### Size

使用`size`属性将Separator.xml的大小更改为`xs`。

::component-code
---
class: 'p-8'
props:
  size: lg
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
