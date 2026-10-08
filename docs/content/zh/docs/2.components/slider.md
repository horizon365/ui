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

## 使用情况

使用`v-model`指令控制滑块的值。

::component-code
---
外部：
  - 模型值
道具：
  型号值：50
---
::

当不需要控制其状态时，使用`default-value`prop设置初始值。

::component-code
---
忽略：
  - 默认值
道具：
  默认值：50
---
::

::tip
使用`aria-label`或`aria-labelledby`命名单个thumb Slider，它们将被转发到具有`slider`角色的thumb元素。

多个拇指滑块的拇指按其位置命名，因此可以区分它们，`Minimum` / `Maximum`表示两个拇指，`Value n of m`表示三个或更多拇指。这些名称将保留，并且`aria-label`通过根上的`group`角色将滑块作为一个整体命名，而不是在每个拇指上重复。
::

### Min / Max

使用`min`和`max`道具将Slider. slide的最小值和最大值设置为`0`和`100`。

::component-code
---
忽略：
  - defaultValue
道具：
  最小值：0
  最大值：50
  默认值：50
---
::

### Step

使用`step`道具将Slider. slider的增量值设置为`1`。

::component-code
---
忽略：
  - defaultValue
道具：
  步骤：10
  默认值：50
---
::

多个

使用`v-model`指令或带有值数组的`default-value`prop创建范围滑块。

::component-code
---
忽略：
- 模型值
外部：
- 模型值
道具：
  modelValue：[25，75]
---
::

使用`min-steps-between-thumbs`道具限制拇指之间的最小距离。

::component-code
---
忽略：
  模型值
外部：
  - 型号值
道具：
  型号值：[25、50、75]
  拇指之间的最小步长：10
---
::

方向

使用`orientation`道具更改滑块的方向。默认为`horizontal`。

::component-code
---
忽略：
  - 默认值
  班级
道具：
  方向：垂直
  默认值：50
  类别：'h-48'
---
::

颜色

使用`color`道具更改Slider的颜色。

::component-code
---
忽略：
  - 默认值
道具：
  颜色：中性
  默认值：50
---
::

尺寸

使用`size`道具更改Slider的大小。

::component-code
---
忽略：
  - 默认值
道具：
  尺寸：xl
  默认值：50
---
::

工具提示

使用`tooltip`属性在Slider缩图周围显示具有目前值的[Tooltip](/docs/components/tooltip)。您可以将它设定为`true`以取得预设行为，或传递物件以使用[Tooltip](/docs/components/tooltip#props)元件中的任何属性自订它。

::component-code
---
忽略：
  - 默认值
  工具提示
道具：
  默认值：50
  工具提示：true
---
::

### 已停用

使用`disabled`道具禁用滑块。

::component-code
---
忽略：
  - 默认值
道具类：
  已禁用：true
  默认值：50
---
::

倒置的

使用`inverted`道具以视觉方式反转Slider。

::component-code
---
忽略：
  - 默认值
道具：
  反转：true
  默认值：25
---
::

活性成分

道具

：组件-支柱

发射器

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
