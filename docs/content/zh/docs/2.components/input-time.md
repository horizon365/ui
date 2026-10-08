---
title: 输入时间
description: '用于选择时间的输入。'
category: form
keywords:
  - time picker
  - clock
  - hour
links:
  - label: TimeField
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-field
  - label: TimeRangeField
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-range-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTime.vue
---

## 使用情况

使用`v-model`指令控制选定的时间。

::component-code
---
演员阵容：
  模型值：时间值
忽略：
  - 模型值
外部：
  - 模型值
道具：
  型号值：[12，30，0]
---
::

当您不需要控制其状态时，请使用`default-value`属性来设定初始值。

::component-code
---
演员阵容：
  默认值：时间值
忽略：
  - 默认值
外部：
  - 默认值
道具：
  默认值：[9，45，0]
---
::

::framework-only
#nuxt（无文本）
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
此组件使用`@internationalized/date`包进行区域设置感知格式设置。时间格式由App组件的`locale`属性确定。
:::

版本号
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
此组件使用`@internationalized/date`包进行区域设置感知格式设置。时间格式由App组件的`locale`属性确定。
:::
::

范围

使用`range`道具启用时间范围选择，包括开始时间和结束时间。

::component-code
---
更漂亮：真的
演员阵容：
  模型值：时间范围值
忽略：
  范围
  - 模型值. start
- 模型值. end
外部：
  - 模型值
道具：
  范围：true
  型号值：
    开始：[9，0，0]
    结束：[17，30，0]
---
::

### 小时循环

使用`hour-cycle`属性来变更InputTime的小时周期。预设值为`12`。

::component-code
---
演员阵容：
  默认值：时间值
忽略：
  20小时循环
  - 默认值
外部：
  - 默认值
道具：
  小时周期：24
  默认值：[16，30，0]
---
::

颜色

使用`color`道具更改InputTime的颜色。

::component-code
---
道具：
  颜色：中性
  高亮显示：真
---
::

::note
`highlight`属性在这里用来显示焦点状态。当发生验证错误时，它会在内部使用。
::

### 变体

使用`variant`属性更改InputTime的变量。

::component-code
---
道具类：
  变体：细微
---
::

尺寸

使用`size`属性更改InputTime的大小。

::component-code
---
道具：
  尺寸：xl
---
::

图标

使用`icon`道具在输入时间内显示[](/docs/components/icon)图标。

::component-code
---
道具：
  图标：“i-lucide时钟”
---
::

::note
使用`leading`和`trailing`道具来设定图标位置，或使用`leading-icon`和`trailing-icon`道具来为每个位置设定不同的图标。
::

### 分隔符号图标

使用`separator-icon`属性来变更范围分隔符号的[图标](/docs/components/icon)。预设值为`i-lucide-minus`。

::component-code
---
忽略：
  范围
道具：
  范围：true
  分隔符图标：'i-lucide-箭头-右'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.minus`键下的`app.config.ts`中全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.minus`键下的`vite.config.ts`中全局自定义此图标。
:::
::

阿凡达

使用`avatar`道具在输入时间内显示[Avatar](/docs/components/avatar)。

::component-code
---
更漂亮：真的
忽略：
- 头像.加载中
道具类：
  头像：
    来源：“https：//github.com/vuejs.png”
    加载：惰性
  尺寸：md
  变体：轮廓
---
::

### 已停用

使用`disabled`道具禁用输入时间。

::component-code
---
道具：
  已禁用：true
---
::

示例

### 在表单字段中

您可以在[FormField](/docs/components/form-field)组件中使用InputTime来显示标签、说明文字、必要的指示器等。

::component-example
---
名称：'输入时间表单字段示例'
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
