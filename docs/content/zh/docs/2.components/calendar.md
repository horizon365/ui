---
description: 日历组件，用于选择单个日期、多个日期或日期范围。
category: element
keywords:
  - date picker
  - datepicker
  - schedule
links:
  - label: 日历
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/calendar
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Calendar.vue
---

## 使用情况

使用`v-model`指令控制所选日期。

::component-code
---
演员阵容：
  modelValue：DateValue
忽略：
  - modelValue
外部：
  - modelValue
道具：
  modelValue：[2022，2，3]
---
::

当不需要控制其状态时，使用`default-value`prop设置初始值。

::component-code
---
演员阵容：
  默认值：日期值
忽略：
  - defaultValue
外部：
  - defaultValue
道具：
  默认值：[2022，2，6]
---
::

::framework-only
#nuxt（无文本）
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
此组件使用`@internationalized/date`包进行区域感知格式设置。日期格式由App组件的`locale`prop确定。
:::

版本号
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
此组件使用`@internationalized/date`包进行区域感知格式设置。日期格式由App组件的`locale`prop确定。
:::
::

### Type：badge{label="4.9+" class="align-text-top"}

使用`type`属性将日历选择的内容更改为`date`。

使用`date`时，单击标题可从日视图切换到月视图，然后再切换到年视图以进行快速导航，然后向下钻取以选择日期。

::component-code
---
演员阵容：
  modelValue：DateValue
忽略：
  - type
  - modelValue
外部：
  - modelValue
道具：
  类型：月份
  modelValue：[2022，2，1]
---
::

使用`type="year"`渲染独立的年份选择器。

::component-code
---
演员阵容：
  modelValue：DateValue
忽略：
  类型：
- 模型值
外部：
  - 模型值
道具：
  类型：年份
  型号值：[2022年1月1日]
---
::

多个

使用`multiple`道具可允许多重选择。

::component-code
---
更漂亮：真的
演员阵容：
  模型值：日期值[]
忽略：
  多个
- 模型值
外部的：
- 模型值
道具：
  多个：真
  型号值：[[2022年2月4日]、[2022年2月6日]、[2022年2月8日]]
---
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
  范围：true
  型号值：
    开始日期：[2022年2月3日]
    结束日期：[2022年2月20日]
---
::

`range`属性也可以与`type="month"`和`type="year"`搭配使用，让您选取月份或年份的范围。

::component-code
---
更漂亮：真的
演员阵容：
  模型值：日期范围
忽略：
  类型：
  范围
  - 模型值. start
  模型值. end
外部：
- 模型值
道具：
  类型：月份
  范围：true
  型号值：
    开始日期：[2022年2月1日]
    结束日期：[2022年6月1日]
---
::

### 月数

使用`numberOfMonths`道具更改日历中的月份数。

::component-code
---
道具类：
  月数：3
---
::

### 月份控件

使用`month-controls`道具来显示月份控件。预设为`true`。

::component-code
---
道具：
  monthControls：假
---
::

使用`prev-month`和`next-month`属性来覆盖月份按钮。

::component-code
---
更漂亮：真的
忽略：
  上一个月的颜色
  - 上一个月.变体
- 下个月. color
  - 下月.变量
道具：
  前一个月：
    颜色：原色
    变体：软
  下个月：
    颜色：原色
    变体：软
---
::

### Year控件

使用`year-controls`道具来显示年份控件。预设值为`true`。

::component-code
---
道具：
  年份控件：假
---
::

使用`prev-year`和`next-year`道具来覆盖年份按钮。

::component-code
---
更漂亮：真的
忽略：
  上一年. color
- 上一年.变量
  下一年。color
- 下一年. variant
道具：
  上一年：
    颜色：原色
    变体：软
  下一年：
    颜色：主要
    变体：软
---
::

### 视图控件：徽标{label="4.9+" class="align-text-top"}

使用`view-control`道具将标题设置为在日、月和年视图之间切换的按钮。默认设置为`true`。

::component-code
---
项目名称：
  视图控件：
    真的
    不对
道具类：
  viewControl：错误
---
::

将`view-control`属性设定为物件，以覆写标题按钮。

::component-code
---
更漂亮：真的
忽略：
  查看控件.颜色
- 视图控件.变量
道具：
  视图控件：
    颜色：原色
    变体：软
---
::

### 固定周数

使用`fixed-weeks`道具来显示具有固定周数的日历。

::component-code
---
道具：
  fixedWeeks：错误的
---
::

星期编号：徽章

使用`week-numbers`道具在日历中显示周数。

::component-code
---
道具：
  周数：真
  fixedWeeks：固定周数：真
---
::

颜色

使用`color`道具更改日历的颜色。

::component-code
---
演员阵容：
  默认值：日期范围
隐藏：
  范围
  - 默认值
  启动默认值
  - defaultValue默认值.结束
道具：
  颜色：中性
  范围：true
  默认值：
    开始日期：[2022年2月3日]
    结束日期：[2022年2月20日]
---
::

### 变体

使用`variant`道具更改日历的变体。

::component-code
---
演员阵容：
  默认值：日期范围
隐藏：
  范围
  - 默认值
  默认值. start
  默认值. end
道具：
  变体：细微
  范围：true
  默认值：
    开始日期：[2022年2月3日]
    结束日期：[2022年2月20日]
---
::

尺寸

使用`size`道具更改日历的大小。

::component-code
---
道具：
  尺寸：xl
---
::

### 已停用

使用`disabled`道具禁用日历。

::component-code
---
道具：
  已禁用：true
---
::

示例

使用芯片事件

使用[Chip](/docs/components/chip)组件可将事件添加到特定日期。

::component-example
---
name：'事件-示例'
---
::

### With disabled dates

将`is-date-disabled`属性与一个函数一起使用，以将特定日期标记为禁用。当使用`type="month"`或`type="year"`时，请改用`is-month-disabled`或`is-year-disabled`属性。

::component-example
---
名称：'禁用日期示例'
---
::

### With unavailable dates

将`is-date-unavailable`属性与函数一起使用，以将特定日期标记为不可用。当使用`type="month"`或`type="year"`时，请改用`is-month-unavailable`或`is-year-unavailable`属性。

::component-example
---
名称：'不可用日期示例'
---
::

### 带最小/最大日期

使用`min-value`和`max-value`道具限制日期。

::component-example
---
name：'最小最大日期示例'
---
::

### With other calendar systems

您可以使用`@internationalized/date`中的其他日历来实现不同的日历系统。

::component-example
---
name：'其他系统示例'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
您可以在`@internationalized/date`docs上查看所有可用的日历。
::

### 带外部控制

您可以通过操纵传递到`v-model`中的日期，使用外部控件控制日历。

::component-example
---
name：'外部控件示例'
---
::

### With today's date

使用`@internationalized/date`和`getLocalTimeZone`中的`today`函数将值设置为当前日期。

::component-example
---
name：'mart-today-example'
---
::

### 作为一个日期选择器

使用[Button](/docs/components/button)和[Popover](/docs/components/popover)组件创建日期选择器。

::component-example
---
name：'日期选择器示例'
---
::

### 作为日期范围选择器

使用[Button](/docs/components/button)和[Popover](/docs/components/popover)组件创建具有预设范围的日期范围选取器。

::component-example
---
name：'日期范围选取器示例'
---
::

## API

### Props

：组件-支柱

### Slots

：组件插槽

### Emits

：组件发射

## Theme

：组件主题

## Changelog

：组件更改日志
