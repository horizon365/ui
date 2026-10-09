---
title: RadioGroup
description: 从列表中选择单个选项的一组单选按钮。
category: form
keywords:
  - radio buttons
  - single choice
links:
  - label: RadioGroup
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/radio-group
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/RadioGroup.vue
---

## 用法

使用`v-model`指令来控制RadioGroup的值，或使用`default-value` prop在不需要控制其状态时设置初始值。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
props:
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 项目

使用`items` prop作为字符串或数字的数组：

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
props:
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

您也可以传递具有下列属性的物件数组：

- `label?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- [`value?: string`{lang="ts-type"}](#value-key)
- `disabled?: boolean`{lang="ts-type"}
- [`icon?: string`{lang="ts-type"}](#indicator)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, icon?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - RadioGroupItem[]
props:
  modelValue: 'system'
  items:
    - label: 'System'
      description: 'Matches your device settings.'
      value: 'system'
    - label: 'Light'
      description: 'Always uses the light theme.'
      value: 'light'
    - label: 'Dark'
      description: 'Always uses the dark theme.'
      value: 'dark'
---
::

::caution
使用对象时，需要在`v-model`指令或`default-value` prop中引用对象的`value`属性。
::

### 值密钥

您可以通过使用`value-key` prop.configuration将用于设置值的属性更改为`value`。

::component-code
---
ignore:
  - modelValue
  - items
  - valueKey
external:
  - items
  - modelValue
externalTypes:
  - RadioGroupItem[]
props:
  modelValue: 'light'
  valueKey: 'id'
  items:
    - label: 'System'
      description: 'Matches your device settings.'
      id: 'system'
    - label: 'Light'
      description: 'Always uses the light theme.'
      id: 'light'
    - label: 'Dark'
      description: 'Always uses the dark theme.'
      id: 'dark'
---
::

### 图例

使用`legend`属性设置RadioGroup的图例。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  legend: 'Theme'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Color

使用`color`属性更改RadioGroup的颜色。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  color: neutral
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Variant

使用`variant` prop更改RadioGroup的变体。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  color: 'primary'
  variant: 'card'
  defaultValue: 'system'
  items:
    - label: 'System'
      value: 'system'
      description: 'Matches your device settings.'
    - label: 'Light'
      value: 'light'
      description: 'Always uses the light theme.'
    - label: 'Dark'
      value: 'dark'
      description: 'Always uses the dark theme.'
---
::

### Size

使用`size`属性更改RadioGroup的大小。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  size: 'xl'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 方向

使用`orientation`属性将RadioGroup.xml的方向更改为`vertical`。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  orientation: 'horizontal'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 指示灯

使用`indicator`道具更改位置或隐藏指示器. `start`。

::note
项目的`icon`仅在`indicator`为`hidden`时才会显示在标签上方，因为收音机的指示器内没有图标。
::

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
items:
  indicator:
    - start
    - end
    - hidden
  variant:
    - list
    - card
    - table
props:
  indicator: 'hidden'
  orientation: 'horizontal'
  variant: 'table'
  defaultValue: 'System'
  items:
    - label: 'System'
      icon: 'i-lucide-monitor'
      value: 'System'
      class: 'w-20'
    - label: 'Light'
      icon: 'i-lucide-sun'
      value: 'Light'
      class: 'w-20'
    - label: 'Dark'
      icon: 'i-lucide-moon'
      value: 'Dark'
      class: 'w-20'
---
::

### 禁用

使用`disabled` prop禁用RadioGroup。

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  disabled: true
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
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
