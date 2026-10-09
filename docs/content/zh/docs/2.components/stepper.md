---
description: 一组步骤，用于指示多步骤流程的进度。
category: navigation
keywords:
  - wizard
links:
  - label: 步进
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/stepper
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Stepper.vue
---

## 用法

使用Stepper组件可显示Stepper中的项目列表。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### 项目

使用`items` prop作为具有以下属性的对象数组：

- `title?: string`{lang="ts-type"}
- `description?: AvatarProps`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

::note
单击项目以导航完成步骤。
::

### Color

使用`color`道具更改Stepper的颜色。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  color: neutral
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Size

使用`size`属性更改Stepper的大小。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  size: xl
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### 方向

使用`orientation`道具将Stepper. xmp的方向更改为`horizontal`。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  orientation: vertical
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### 禁用

使用`disabled` prop来禁用步骤导航。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  disabled: true
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
---
::

::note{to="#with-controls"}
当您想要使用控件强制导航时，这可能很有用。
::

## 示例

### 带控件

您可以使用按钮为步进器添加附加控制。

:component-example{name="stepper-with-controls-example"}

### Control活动项目

您可以通过使用`default-value` prop或`v-model`指令与项目的`value`来控制活动项目。如果没有提供`value`，则默认为索引。

:component-example{name="stepper-model-value-example"}

::tip
当提供`v-model`或`default-value`时，使用`value-key`属性更改用于匹配项的键。
::

### 带内容插槽

使用`#content`插槽自定义每个项目的内容。

:component-example{name="stepper-content-slot-example"}

### 带自定义插槽

使用`slot`属性可自定义特定项。

您将可以访问以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}

:component-example{name="stepper-custom-slot-example"}

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### Expose

您可以使用[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)访问类型化的组件实例。

```vue
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <UStepper ref="stepper" />
</template>
```

这将使您能够访问以下内容：

| 名称|类型|
| ---- | ---- |
| `next`{lang="ts-type"}| `() => void`{lang="ts-type"}|
| `prev`{lang="ts-type"}| `() => void`{lang="ts-type"}|
| `hasNext`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|
| `hasPrev`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
