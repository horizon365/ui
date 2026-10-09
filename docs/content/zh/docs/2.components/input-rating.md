---
title: 输入评级
description: 显示和收集用户评级的组件。
category: form
keywords:
  - star rating
  - stars
links:
  - label: 评级
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/rating
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputRating.vue
---

## 用法

使用`v-model`指令控制InputRating组件的评级值。

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
---
::

当不需要控制其状态时，使用`default-value`属性设置初始值。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 3
---
::

### Step

使用`step`道具控制每个星星的粒度。将其设置为`0.5`以允许半颗星星评级。

::component-code
---
ignore:
  - defaultValue
props:
  step: 0.5
  defaultValue: 3.5
---
::

### Length

使用`length`道具将stars.xml2的数量设置为`5`。

::component-code
---
ignore:
  - defaultValue
props:
  length: 10
  step: 0.5
  defaultValue: 7.5
---
::

### 可清除

使用`clearable`道具允许用户通过点击当前选择的值来清除评级。

::component-code
---
ignore:
  - defaultValue
props:
  clearable: true
  defaultValue: 3
---
::

### 可悬停

使用`hoverable`道具来控制当鼠标悬停在星星上时评级是否预览该值。

::component-code
---
ignore:
  - defaultValue
props:
  hoverable: true
  defaultValue: 3
---
::

### Icon

使用`icon`道具自定义用于星星的图标。

::component-code
---
ignore:
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: 4
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以自定义默认的星星图标全球在您的`app.config.ts`下`ui.icons.star`的关键。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以自定义默认的星星图标全球在您的`vite.config.ts`下`ui.icons.star`键。
:::
::

### 空图标

使用`empty-icon`道具自定义空星星的图标。如果没有提供，则使用与`icon`相同的图标。

::component-code
---
ignore:
  - defaultValue
props:
  emptyIcon: 'i-lucide-circle'
  icon: 'i-lucide-circle-check'
  defaultValue: 3
---
::

### Color

使用`color`道具更改填充星星的颜色。

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 4
---
::

### Size

使用`size`道具来改变星星的大小。

::component-code
---
ignore:
  - defaultValue
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  size: xl
  defaultValue: 4
---
::

### 定向

使用`orientation`属性将rating. xm的方向更改为`horizontal`。

::component-code
---
ignore:
  - defaultValue
props:
  orientation: vertical
  defaultValue: 4
---
::

### 禁用

使用`disabled`属性禁用InputRating组件。禁用时，该组件的不透明度降低（75%），并显示`not-allowed`光标以指示它不是交互式的。

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 3
---
::

### 只读

使用`readonly`属性显示评级，而不允许用户交互。与`disabled`不同，它保持正常外观（完全不透明，默认光标）。当您希望显示无法更改但应正常显示的评级时使用。

::component-code
---
ignore:
  - defaultValue
props:
  readonly: true
  defaultValue: 4.5
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
