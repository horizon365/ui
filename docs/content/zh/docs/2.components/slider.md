---
description: 用于选择范围内的数值的输入。
category: form
keywords:
  - range slider
links:
  - label: 滑块
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/slider
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slider.vue
---

## 用法

使用`v-model`指令控制滑块的值。

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

当不需要控制其状态时，使用`default-value`属性设置初始值。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 50
---
::

::tip
使用`aria-label`或`aria-labelledby`命名单个thumb Slider，它们将被转发到具有`slider`角色的thumb元素。

多个拇指滑块的拇指按其位置命名，因此可以区分它们，`Minimum`/`Maximum`用于两个拇指，`Value n of m`用于三个或更多拇指。这些名称将保留，`aria-label`通过根上的`group`角色命名整个滑块，而不是在每个拇指上重复。
::

### 最小/最大

使用`min`和`max`属性将Slider. slide的最小值和最大值设置为`0`和`100`。

::component-code
---
ignore:
  - defaultValue
props:
  min: 0
  max: 50
  defaultValue: 50
---
::

### Step

使用`step`属性将Slider.xml的增量值设置为`1`。

::component-code
---
ignore:
  - defaultValue
props:
  step: 10
  defaultValue: 50
---
::

### 多个

使用`v-model`指令或`default-value` prop和一个值数组来创建范围滑块。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [25, 75]
---
::

使用`min-steps-between-thumbs`道具限制拇指之间的最小距离。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [25, 50, 75]
  minStepsBetweenThumbs: 10
---
::

### 定向

使用`orientation`道具将Slider.xml.的方向更改为`horizontal`。

::component-code
---
ignore:
  - defaultValue
  - class
props:
  orientation: vertical
  defaultValue: 50
  class: 'h-48'
---
::

### Color

使用`color`道具更改滑块的颜色。

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 50
---
::

### Size

使用`size`道具更改滑块的大小。

::component-code
---
ignore:
  - defaultValue
props:
  size: xl
  defaultValue: 50
---
::

### 工具提示

使用`tooltip` prop以当前值在Slider拇指周围显示[Tooltip](/docs/components/tooltip)。您可以将其设置为`true`以获得默认行为，或传递一个对象以使用[Tooltip](/docs/components/tooltip#props)组件中的任何属性对其进行自定义。

::component-code
---
ignore:
  - defaultValue
  - tooltip
props:
  defaultValue: 50
  tooltip: true
---
::

### 禁用

使用`disabled`道具禁用滑块。

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 50
---
::

### 倒置

使用`inverted` prop在视觉上反转滑块。

::component-code
---
ignore:
  - defaultValue
props:
  inverted: true
  defaultValue: 25
---
::

## API

### Props

:component-props

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
