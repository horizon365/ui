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

### Color

使用`color`属性更改InputDate的颜色。

::component-code
---
props:
  color: neutral
  highlight: true
---
::

### Variant

使用`variant` prop更改InputDate的变量。

::component-code
---
props:
  variant: subtle
---
::

### Size

使用`size`属性更改InputDate的大小。

::component-code
---
props:
  size: xl
---
::

### Icon

使用`icon` prop在InputDate中显示[Icon](/docs/components/icon)。

::component-code
---
props:
  icon: 'i-lucide-calendar'
---
::

::note
使用`leading`和`trailing`道具设置图标位置，或使用`leading-icon`和`trailing-icon`道具为每个位置设置不同的图标。
::

### Separator图标

使用`separator-icon` prop将范围分隔符. png的[Icon](/docs/components/icon)更改为`i-lucide-minus`。

::component-code
---
ignore:
  - range
props:
  range: true
  separatorIcon: 'i-lucide-arrow-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`app.config.ts`中的`ui.icons.minus`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`中的`ui.icons.minus`键下全局自定义这个图标。
:::
::

### Avatar

使用`avatar` prop在InputDate中显示[Avatar](/docs/components/avatar)。

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/vuejs.png'
    loading: lazy
  size: md
  variant: outline
---
::

### 已禁用

使用`disabled`属性禁用InputDate。

::component-code
---
props:
  disabled: true
---
::

## 示例

### 日期不详

使用`is-date-unavailable` prop和一个函数将特定日期标记为不可用。

::component-example
---
name: 'input-date-unavailable-dates-example'
---
::

### 带最小/最大日期

使用`min-value`和`max-value`属性来限制日期。

::component-example
---
name: 'input-date-min-max-dates-example'
---
::

### 作为日期选择器

使用[Calendar](/docs/components/calendar)和[Pover](/docs/components/popover)组件创建日期选择器。

::component-example
---
name: 'input-date-date-picker-example'
---
::

### 作为日期范围选择器

使用[Calendar](/docs/components/calendar)和[Pover](/docs/components/popover)组件创建日期范围选择器。

::component-example
---
name: 'input-date-date-range-picker-example'
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
