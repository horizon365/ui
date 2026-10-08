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

## 使用情况

使用`v-model`指令控制InputNumber的值。

::component-code
---
忽略：
  - 模型值
外部的：
  - modelValue
道具：
  modelValue：5
---
::

当您不需要控制其状态时，请使用`default-value`属性来设定初始值。

::component-code
---
忽略：
  - 默认值
道具：
  默认值：5
---
::

::note
此组件依赖于[`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html)包，该包提供跨区域设置和编号系统格式化和解析数字的实用程序。
::

### Min / Max

使用`min`和`max`属性设置InputNumber的最小值和最大值。

::component-code
---
忽略：
  - modelValue
外部：
  - modelValue
道具：
  modelValue：5
  最小值：0
  最大值：10
---
::

### Step

使用`step`prop设置InputNumber的步长值。

::component-code
---
忽略：
  - modelValue
外部的：
  - modelValue
道具：
  modelValue：5
  步骤：2
---
::

定位

使用`orientation`道具更改InputNumber的方向。

::component-code
---
忽略：
  - modelValue
外部的：
  - modelValue
道具：
  型号值：5
  方向：垂直
---
::

### 预留位置

使用`placeholder`道具来设定预留位置文字。

::component-code
---
道具：
  占位符：'输入一个数字'
---
::

颜色

使用`color`道具可在InputNumber成为焦点时更改圆环颜色。

::component-code
---
忽略：
- 模型值
外部：
  模型值
道具：
  型号值：5
  颜色：中性
  高亮显示：真
---
::

### 变体

使用`variant`属性更改InputNumber的变量。

::component-code
---
忽略：
  - 模型值
外部：
  - 模型值
道具：
  型号值：5
  变体：细微
  颜色：中性
  突出显示：假
---
::

尺寸

使用`size`属性更改InputNumber的大小。

::component-code
---
忽略：
- 模型值
外部：
- 模型值
道具：
  型号值：5
  尺寸：xl
---
::

### 已停用

使用`disabled`道具禁用输入编号。

::component-code
---
忽略：
- 模型值
外部：
- 模型值
道具：
  型号值：5
  已禁用：true
---
::

递增/递减

使用`increment`和`decrement`属性，以任何[按钮](/docs/components/button)属性自订递增和递减按钮。预设值为`{ variant: 'link' }`{lang="ts-type"}。

::component-code
---
更漂亮：真的
忽略：
- 模型值
- 增量大小
- 增量.颜色
- 增量变量
  减小尺寸
  递减.颜色
- 递减变量
外部：
  模型值
道具：
  型号值：5
  增量：
    颜色：中性
    变体：实体
    尺寸：xs
  递减量：
    颜色：中性
    变体：实体
    尺寸：xs
---
::

### 递增/递减图标

使用`increment-icon`和`decrement-icon`道具来自定义按钮[图标](。默认为`i-lucide-plus` / `i-lucide-minus`。

::component-code
---
更漂亮：真的
忽略：
  模型值
外部：
  模型值
道具：
  型号值：5
  增量图标：'i-lucide-箭头-右'
  decrementIcon：'向左箭头'
---
::

示例

### 十进制格式

使用`format-options`prop自定义值的格式。

::component-example
---
name：'input-number-decimal-example'
---
::

### With percentage format

将`format-options`prop与`style: 'percent'`一起使用，以自定义值的格式。

::component-example
---
name：'输入-数字-存储-示例'
---
::

### 带货币格式

将`format-options`prop与`style: 'currency'`一起使用，以自定义值的格式。

::component-example
---
name：'输入数字货币示例'
---
::

### No buttons

您可以使用`increment`和`decrement`道具来控制按钮的可见性。

::component-example
---
name：'input-number-without-buttons-example'
---
::

### FormField内

您可以在[FormField](/docs/components/form-field)组件中使用InputNumber来显示标签、帮助文本、所需指示符等。

::component-example
---
name：'input-number-form-field-example'
---
::

### 带插槽

使用`#increment`和`#decrement`插槽自定义按钮。

::component-example
---
name：'input-number-slots-example'
---
::

## API

### Props

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
此组件还支持所有本机`<input>`HTML属性。
::

### Slots

：组件插槽

### Emits

：组件发射

### Expose

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `inputRef`{lang="ts-type"}|`Ref<HTMLInputElement \| null>`{lang="ts-type"}|

## Theme

：组件主题

## Changelog

：组件更改日志
