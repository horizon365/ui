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

## 使用情况

使用`v-model`指令控制Progress的值。

::component-code
---
外部：
  - 模型值
道具：
  型号值：50
---
::

::note
使用[`ProgressGroup`](/docs/components/progress-group)组件可将单个条形图拆分为多个段，这些段的总和为一个总和。
::

### 最大

使用`max`道具设置进度的最大值。

::component-code
---
外部的：
  - modelValue（型号值）
道具：
  型号值：3
  最大值：4
---
::

使用带有字符串数组的`max`道具可在条形下显示活动步骤，Progress的最大值为数组的长度。

::component-code
---
更漂亮：真的
忽略：
- 最大值
外部：
- 模型值
道具：
  型号值：3
  最大值：
    - '正在等待...'
    - '复制中...'
    - '正在迁移...'
    - '正在部署...'
    "好了!"
---
::

状态

使用`status`道具在进度条上方显示当前进度值。

::component-code
---
外部：
- 模型值
道具：
  型号值：50
  状态：真
---
::

::tip
状态会追踪长条图的结尾，请使用`:ui="{ status: 'w-full' }"`让它横跨整个长度。
::

不确定

如果未设置`v-model`或值为`null`，则"进度"将变为_indeterminate_。进度条将以`carousel`的形式显示，但您可以使用[`animation`](#animation)属性对其进行更改。

::component-code
---
外部：
  - 模型值
道具：
  模型值：空
---
::

动画

使用`animation`道具可将进度的动画更改为反向旋转、摆动条或弹性条。默认为`carousel`。

::component-code
---
道具：
  动画：摆动
---
::

::tip
当用户喜欢减少运动时，动画自动禁用，不确定条显示为全宽脉冲。
::

定位

使用`orientation`道具来变更进度的方向。预设为`horizontal`。

::component-code
---
忽略：
  班级
道具：
  方向：垂直
  类别：'h-48'
---
::

彩色的

使用`color`道具更改进度的颜色。

::component-code
---
道具：
  颜色：中性
---
::

::tip
此属性还接受主题外调色板的任何CSS颜色值。
::

尺寸

使用`size`道具更改进度的大小。

::component-code
---
道具：
  尺寸：xl
---
::

倒置的

使用`inverted`道具以可视化方式反转进度。

::component-code
---
道具：
  反转：true
  型号值：25
---
::

美国石油学会

道具

：组件-支柱

插槽

：组件插槽

发射器

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
