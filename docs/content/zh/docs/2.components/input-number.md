---
title: 输入编号
description: 输入具有可自定义范围的数值。
category: form
keywords:
  - number field
  - spinbutton
  - counter
links:
  - label: NumberField
    icon: i-custom-reka-ui
    to: https://www.reka-ui.com/docs/components/number-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputNumber.vue
---

## 用法

使用`v-model`指令控制InputNumber的值。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
---
::

当不需要控制其状态时，使用`default-value`属性设置初始值。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 5
---
::

::note
此组件依赖于[`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html)包，该包提供跨区域设置和编号系统格式化和解析数字的实用程序。
::

### 最小/最大

使用`min`和`max`属性设置InputNumber的最小值和最大值。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  min: 0
  max: 10
---
::

### Step

使用`step`属性设置InputNumber的步长值。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  step: 2
---
::

### 定向

使用`orientation`属性更改InputNumber的方向。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  orientation: vertical
---
::

### 占位符

使用`placeholder` prop设置占位符文本。

::component-code
---
props:
  placeholder: 'Enter a number'
---
::

### Color

使用`color`属性在InputNumber聚焦时更改环颜色。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  color: neutral
  highlight: true
---
::

### Variant

使用`variant` prop更改InputNumber的变量。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  variant: subtle
  color: neutral
  highlight: false
---
::

### Size

使用`size`属性更改InputNumber的大小。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  size: xl
---
::

### 已禁用

使用`disabled`属性禁用InputNumber。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  disabled: true
---
::

### 增量/减量

使用`increment`和`decrement` props自定义递增和递减按钮，并使用[Button](/docs/components/button) props. `{ variant: 'link' }`{lang="ts-type"}。

::component-code
---
prettier: true
ignore:
  - modelValue
  - increment.size
  - increment.color
  - increment.variant
  - decrement.size
  - decrement.color
  - decrement.variant
external:
  - modelValue
props:
  modelValue: 5
  increment:
    color: neutral
    variant: solid
    size: xs
  decrement:
    color: neutral
    variant: solid
    size: xs
---
::

### 增量/减量图标

使用`increment-icon`和`decrement-icon`道具自定义按钮[Icon](/docs/components/icon).exe到`i-lucide-plus`/`i-lucide-minus`。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  incrementIcon: 'i-lucide-arrow-right'
  decrementIcon: 'i-lucide-arrow-left'
---
::

## 示例

### 采用十进制格式

使用`format-options` prop自定义值的格式。

::component-example
---
name: 'input-number-decimal-example'
---
::

### 采用百分比格式

使用`format-options` prop和`style: 'percent'`来自定义值的格式。

::component-example
---
name: 'input-number-percentage-example'
---
::

### 带货币格式

使用`format-options` prop和`style: 'currency'`来自定义值的格式。

::component-example
---
name: 'input-number-currency-example'
---
::

### 无按钮

您可以使用`increment`和`decrement`道具来控制按钮的可见性。

::component-example
---
name: 'input-number-without-buttons-example'
---
::

### 在表单域中

您可以在[FormField](/docs/components/form-field)组件中使用InputNumber来显示标签、帮助文本、必需的指示符等。

::component-example
---
name: 'input-number-form-field-example'
---
::

### 带插槽

使用`#increment`和`#decrement`插槽自定义按钮。

::component-example
---
name: 'input-number-slots-example'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
此组件还支持所有原生`<input>` HTML属性。
::

### Slots

:component-slots

### Emits

:component-emits

### 曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
