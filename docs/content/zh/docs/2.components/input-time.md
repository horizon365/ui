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

## 用法

使用`v-model`指令控制所选时间。

::component-code
---
cast:
  modelValue: TimeValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [12, 30, 0]
---
::

当不需要控制其状态时，使用`default-value`属性设置初始值。

::component-code
---
cast:
  defaultValue: TimeValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [9, 45, 0]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
此组件使用`@internationalized/date`包进行区域感知格式化。时间格式由App组件的`locale`属性确定。
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
此组件使用`@internationalized/date`包进行区域感知格式化。时间格式由App组件的`locale`属性确定。
:::
::

### 范围

使用`range` prop启用开始和结束时间的时间范围选择。

::component-code
---
prettier: true
cast:
  modelValue: TimeRangeValue
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [9, 0, 0]
    end: [17, 30, 0]
---
::

### 小时循环

使用`hour-cycle`属性将InputTime.tool的小时周期更改为`12`。

::component-code
---
cast:
  defaultValue: TimeValue
ignore:
  - hourCycle
  - defaultValue
external:
  - defaultValue
props:
  hourCycle: 24
  defaultValue: [16, 30, 0]
---
::

### Color

使用`color`属性更改InputTime的颜色。

::component-code
---
props:
  color: neutral
  highlight: true
---
::

::note
这里使用`highlight`属性来显示焦点状态。当发生验证错误时，在内部使用它。
::

### Variant

使用`variant` prop更改InputTime的变量。

::component-code
---
props:
  variant: subtle
---
::

### Size

使用`size`属性更改InputTime的大小。

::component-code
---
props:
  size: xl
---
::

### Icon

使用`icon` prop在InputTime中显示[Icon](/docs/components/icon)。

::component-code
---
props:
  icon: 'i-lucide-clock'
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
你可以在你的`ui.icons.minus`键下的`vite.config.ts`中全局自定义这个图标。
:::
::

### Avatar

使用`avatar` prop在InputTime中显示[Avatar](/docs/components/avatar)。

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

### 禁用

使用`disabled` prop禁用InputTime。

::component-code
---
props:
  disabled: true
---
::

## 示例

### 在表单域中

您可以在[FormField](/docs/components/form-field)组件中使用InputTime来显示标签、帮助文本、必需的指示符等。

::component-example
---
name: 'input-time-form-field-example'
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
