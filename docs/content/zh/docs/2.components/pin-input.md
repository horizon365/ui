---
title: PinInput
description: 输入pin的输入元素。
category: form
keywords:
  - otp
  - one-time password
  - verification code
links:
  - label: PinInput
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pin-input
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PinInput.vue
---

## 用法

使用`v-model`指令控制PinInput的值。

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: []
---
::

当不需要控制其状态时，使用`default-value`属性设置初始值。

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['1','2','3']
---
::

### Type

使用`type` prop将输入类型. png更改为`text`。

::component-code
---
items:
  type:
    - text
    - number
props:
  type: 'number'
---
::

::note
当`type`设置为`number`时，它将只接受数字字符。
::

### Mask

使用`mask` prop将输入视为密码。

::component-code
---
prettier: true
ignore:
  - placeholder
  - defaultValue
props:
  mask: true
  defaultValue: ['1','2','3','4','5']
---
::

### OTP

使用`otp`属性启用一次性密码功能。启用后，移动的设备可以自动检测并填充SMS消息或剪贴板内容中的OTP代码，并支持自动完成。

::component-code
---
props:
  otp: true
---
::

### 占位符

使用`placeholder`属性设置占位符文本。

::component-code
---
props:
  placeholder: '○'
---
::

### Length

使用`length` prop更改输入的数量。

::component-code
---
ignore:
  - placeholder
props:
  length: 6
  placeholder: '○'
---
::

### 分隔符：badge{label="4.9+" class="align-text-top"}

使用`separator` prop在输入组之间插入分隔符。传递一个数字以在每第N个输入后插入一个。

::component-code
---
ignore:
  - placeholder
props:
  length: 6
  separator: 3
  placeholder: '○'
---
::

您还可以传递一个位置数组，以便在特定输入后插入分隔符。

::component-code
---
prettier: true
ignore:
  - placeholder
  - length
  - separator
props:
  length: 7
  separator: [3, 4]
  placeholder: '○'
---
::

### Color

使用`color`道具更改PinInput聚焦时的环颜色。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: '○'
---
::

::note
这里使用`highlight`属性来显示焦点状态。当发生验证错误时，在内部使用它。
::

### Variant

使用`variant` prop更改PinInput的变体。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: '○'
---
::

### Size

使用`size`属性更改PinInput的大小。

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: '○'
---
::

### 禁用

使用`disabled` prop禁用PinInput。

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: '○'
---
::

## 示例

### 带分隔槽：badge{label="4.9+" class="align-text-top"}

使用`separator`插槽自定义分隔符外观。

::component-example
---
name: 'pin-input-separator-slot-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### 曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `inputsRef`{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
