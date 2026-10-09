---
description: 显示任务进度的指示器。
category: element
keywords:
  - progress bar
  - loading bar
  - meter
links:
  - label: 进展
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/progress
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Progress.vue
---

## 用法

使用`v-model`指令控制Progress的值。

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

::note
使用[`ProgressGroup`](/docs/components/progress-group)组件可以将单个条形分割为多个段，这些段的总和为一个总数。
::

### Max

使用`max` prop设置Progress的最大值。

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
  max: 4
---
::

使用`max`道具和字符串数组来显示条形图下的活动步骤，进度的最大值是数组的长度。

::component-code
---
prettier: true
ignore:
  - max
external:
  - modelValue
props:
  modelValue: 3
  max:
    - 'Waiting...'
    - 'Cloning...'
    - 'Migrating...'
    - 'Deploying...'
    - 'Done!'
---
::

### 状态

使用`status`道具在进度条上方显示当前进度值。

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
  status: true
---
::

::tip
状态跟踪条的末端，使用`:ui="{ status: 'w-full' }"`使其跨越整个宽度。
::

### 不确定

如果未设置`v-model`或该值为`null`，则进度变为_indeterminate_。进度条的动画显示为`carousel`，但您可以使用[`animation`](#animation)属性对其进行更改。

::component-code
---
external:
  - modelValue
props:
  modelValue: null
---
::

### 动画

使用`animation`道具将进度的动画更改为反向旋转木马、摆动条或弹性条。将进度更改为`carousel`。

::component-code
---
props:
  animation: swing
---
::

::tip
当用户喜欢减少运动时，动画自动禁用，不确定条显示为全宽脉冲。
::

### 定向

使用`orientation`道具将Progress.dll的方向更改为`horizontal`。

::component-code
---
ignore:
  - class
props:
  orientation: vertical
  class: 'h-48'
---
::

### Color

使用`color`道具更改进度的颜色。

::component-code
---
props:
  color: neutral
---
::

::tip
这个道具也接受任何CSS颜色值的调色板以外的主题。
::

### Size

使用`size`属性更改进度的大小。

::component-code
---
props:
  size: xl
---
::

### 倒置

使用`inverted`道具来直观地反转进度。

::component-code
---
props:
  inverted: true
  modelValue: 25
---
::

## API

### Props

:component-props

### 老虎机

:component-slots

### 发射

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
