---
title: ColorPicker
description: 用于选择颜色的组件。
category: form
keywords:
  - colour picker
  - swatch
  - hex
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ColorPicker.vue
---

## 用法

使用`v-model`指令控制ColorPicker的值。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: '#00C16A'
---
::

当不需要控制其状态时，使用`default-value`属性设置初始值。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: '#00BCD4'
---
::

### RGB格式

使用`format`属性设置ColorPicker的`rgb`值。

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: rgb
  modelValue: 'rgb(0, 193, 106)'
---
::

### HSL格式

使用`format`属性设置ColorPicker的`hsl`值。

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: hsl
  modelValue: 'hsl(153, 100%, 37.8%)'
---
::

### CMYK格式

使用`format`属性设置ColorPicker的`cmyk`值。

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: cmyk
  modelValue: 'cmyk(100%, 0%, 45.08%, 24.31%)'
---
::

### CIELab格式

使用`format`属性设置ColorPicker的`lab`值。

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: lab
  modelValue: 'lab(68.88% -60.41% 32.55%)'
---
::

### 节流阀

使用`throttle` prop设置ColorPicker的节流值。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  throttle: 100
  modelValue: '#00C16A'
---
::

### Size

使用`size` prop设置ColorPicker的大小。

::component-code
---
props:
  size: xl
---
::

### 禁用

使用`disabled` prop禁用ColorPicker。

::component-code
---
props:
  disabled: true
---
::

## 示例

### 作为一种彩色滤光片

使用[Button](/docs/components/button)和[Pover](/docs/components/popover)组件来创建彩色显示器。

::component-example
---
name: 'color-picker-chooser-example'
---
::

## API

### Props

:component-props

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
