---
title: 输入日期
description: '用于日期选择的输入组件。'
category: form
keywords:
  - date picker
  - datepicker
  - calendar input
links:
  - label: DateField
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/date-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputDate.vue
---

## 使用情况

使用`v-model`指令控制选定的日期。

::component-code
---
演员阵容：
  模型值：日期值
忽略：
  - 模型值
外部：
  - 模型值
道具：
  型号值：[2022年2月3日]
---
::

当您不需要控制其状态时，请使用`default-value`属性来设定初始值。

::component-code
---
演员阵容：
  默认值：日期值
忽略：
  - 默认值
外部：
  - 默认值
道具：
  默认值：[2022，2，6]
---
::

::framework-only
#nuxt（无文本）
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
此组件使用`@internationalized/date`包进行可识别区域设置的格式设置。日期格式由App组件的`locale`属性确定。
:::

版本号
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
此组件使用`@internationalized/date`包进行区域设置感知格式设置。日期格式由App组件的`locale`属性确定。
:::
::

范围

使用`range`道具选择日期范围。

::component-code
---
更漂亮：真的
演员阵容：
  模型值：日期范围
忽略：
  范围
  - 模型值. start
- 模型值. end
外部：
  - 模型值
道具：
  范围：真
  型号值：
    开始日期：[2022年2月3日]
    结束日期：[2022年2月20日]
---
::

颜色

使用`color`道具更改InputDate的颜色。

::component-code
---
道具：
  颜色：中性
  高亮显示：真
---
::

### 变体

使用`variant`属性更改InputDate的变量。

::component-code
---
道具：
  变体：细微
---
::

尺寸

使用`size`属性更改InputDate的大小。

::component-code
---
道具：
  尺寸：xl
---
::

### 图标

使用`icon`道具在输入日期内显示[](/docs/components/icon)图标。

::component-code
---
道具：
  图标：“i-lucide日历”
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
道具类：
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

使用`avatar`道具在输入日期内显示[Avatar](/docs/components/avatar)。

::component-code
---
更漂亮：真的
忽略：
- 头像.加载中
道具：
  头像：
    来源：“https：//github.com/vuejs.png”
    加载：惰性
  尺寸：md
  变体：轮廓
---
::

### 已停用

使用`disabled`属性禁用输入日期。

::component-code
---
道具：
  已禁用：true
---
::

示例

### 日期不可用

将`is-date-unavailable`属性与函数配合使用，可将特定日期标记为不可用。

::component-example
---
名称：'输入日期-不可用日期-示例'
---
::

### 具有最小/最大日期

使用`min-value`和`max-value`道具来限制日期。

::component-example
---
名称：'输入日期最小值最大值日期示例'
---
::

### 作为日期选择器

使用日历组件和Popover](/docs/components/popover)组件创建日期选取器。

::component-example
---
名称：'输入日期日期选择器示例'
---
::

### 作为日期范围选取器

请使用[Calendar](/docs/components/calendar)和[Popover](/docs/components/popover)组件来创建日期范围选取器。

::component-example
---
名称：'输入日期日期范围选取器示例'
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
