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

## 用法

使用`v-model`指令控制选定的日期。

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [2022, 2, 3]
---
::

当不需要控制其状态时，使用`default-value`属性设置初始值。

::component-code
---
cast:
  defaultValue: DateValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [2022, 2, 6]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
此组件使用`@internationalized/date`包进行区域感知格式化。日期格式由App组件的`locale`属性确定。
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
此组件使用`@internationalized/date`包进行区域感知格式化。日期格式由App组件的`locale`属性确定。
:::
::

### 类型：badge{label="4.9+" class="align-text-top"}

使用`type`属性将日历选择的内容更改为`date`。

使用`date`时，单击标题可从日视图切换到月视图，然后再切换到年视图，以进行快速导航，然后向下钻取日期。

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: month
  modelValue: [2022, 2, 1]
---
::

使用`type="year"`呈现独立的年份选择器。

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: year
  modelValue: [2022, 1, 1]
---
::

### 多个

使用`multiple` prop允许多个选择。

::component-code
---
prettier: true
cast:
  modelValue: DateValue[]
ignore:
  - multiple
  - modelValue
external:
  - modelValue
props:
  multiple: true
  modelValue: [[2022, 2, 4], [2022, 2, 6], [2022, 2, 8]]
---
::

### 范围

使用`range`属性选择日期范围。

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

`range`道具也适用于`type="month"`和`type="year"`，让您选择一个月或年的范围。

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - type
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  type: month
  range: true
  modelValue:
    start: [2022, 2, 1]
    end: [2022, 6, 1]
---
::

### 月数

使用`numberOfMonths`属性更改日历中的月数。

::component-code
---
props:
  numberOfMonths: 3
---
::

### Month控件

使用`month-controls`属性来显示月份控件。

::component-code
---
props:
  monthControls: false
---
::

使用`prev-month`和`next-month`属性覆盖月份按钮。

::component-code
---
prettier: true
ignore:
  - prevMonth.color
  - prevMonth.variant
  - nextMonth.color
  - nextMonth.variant
props:
  prevMonth:
    color: primary
    variant: soft
  nextMonth:
    color: primary
    variant: soft
---
::

### Year控件

使用`year-controls`道具来显示年份控件。

::component-code
---
props:
  yearControls: false
---
::

使用`prev-year`和`next-year`道具覆盖年份按钮。

::component-code
---
prettier: true
ignore:
  - prevYear.color
  - prevYear.variant
  - nextYear.color
  - nextYear.variant
props:
  prevYear:
    color: primary
    variant: soft
  nextYear:
    color: primary
    variant: soft
---
::

### 视图控件：badge{label="4.9+" class="align-text-top"}

使用`view-control`属性使标题成为一个按钮，可以在日、月和年视图之间切换。

::component-code
---
items:
  viewControl:
    - true
    - false
props:
  viewControl: false
---
::

将`view-control`属性设置为对象以覆盖标题按钮。

::component-code
---
prettier: true
ignore:
  - viewControl.color
  - viewControl.variant
props:
  viewControl:
    color: primary
    variant: soft
---
::

### 固定周数

使用`fixed-weeks`属性显示固定周的日历。

::component-code
---
props:
  fixedWeeks: false
---
::

### 周数：badge{label="4.4+" class="align-text-top"}

使用`week-numbers`属性在日历中显示周数。

::component-code
---
props:
  weekNumbers: true
  fixedWeeks: true
---
::

### Color

使用`color`属性更改日历的颜色。

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  color: neutral
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Variant

使用`variant` prop更改日历的变体。

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  variant: subtle
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Size

使用`size`属性更改日历的大小。

::component-code
---
props:
  size: xl
---
::

### 禁用

使用`disabled`属性禁用日历。

::component-code
---
props:
  disabled: true
---
::

## 示例

### 带芯片事件

使用[Chip](/docs/components/chip)组件将事件添加到特定日期。

::component-example
---
name: 'calendar-events-example'
---
::

### 带禁用日期

将`is-date-disabled`属性与一个函数一起使用，以将特定日期标记为禁用。当使用`type="month"`或`type="year"`时，请使用`is-month-disabled`或`is-year-disabled`属性。

::component-example
---
name: 'calendar-disabled-dates-example'
---
::

### 日期不详

将`is-date-unavailable`属性与一个函数一起使用，以将特定日期标记为不可用。当使用`type="month"`或`type="year"`时，请使用`is-month-unavailable`或`is-year-unavailable`属性。

::component-example
---
name: 'calendar-unavailable-dates-example'
---
::

### 带最小/最大日期

使用`min-value`和`max-value`属性来限制日期。

::component-example
---
name: 'calendar-min-max-dates-example'
---
::

### 与其他日历系统

您可以使用`@internationalized/date`中的其他日历来实现不同的日历系统。

::component-example
---
name: 'calendar-other-system-example'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
你可以在`@internationalized/date`文档中查看所有可用的日历。
::

### 带外部控件

您可以通过操纵`v-model`中传递的日期来使用外部控件控制日历。

::component-example
---
name: 'calendar-external-controls-example'
---
::

### 与今天的日期

使用`@internationalized/date`和`getLocalTimeZone`中的`today`函数将值设置为当前日期。

::component-example
---
name: 'calendar-today-example'
---
::

### 作为日期选择器

使用[Button](/docs/components/button)和[Pover](/docs/components/popover)组件创建日期选择器。

::component-example
---
name: 'calendar-date-picker-example'
---
::

### 作为日期范围选择器

使用[Button](/docs/components/button)和[Pover](/docs/components/popover)组件创建具有预设范围的日期范围选择器。

::component-example
---
name: 'calendar-date-range-picker-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
