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

## 使用情况

使用Stepper组件可显示Stepper中的项目列表。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
- 个项目
  班级
外部：
  项目数
外部类型：
  - Stepper项目[]的步骤
道具：
  项目名称：
    - title：“地址”
      description：'在此处添加您的地址'
      图标：“i-lucide-house”
    - title：“发货”
      description：'设置您的首选发运方式'
      图标：“i-lucide卡车”
    - title：“签出”
      description：'确认您的订单'
  类别：'w-完整'
---
::

项目

使用`items`属性作为具有下列属性的对象数组：

我的天啊！
我的天啊！
我的天啊！
020、021、022、023、024、025、026、027、028、029、029、029、029、020、021、022、029、029、020、021、022、029、020、020、021、022、020、021、022、021、022、021、022、021、022、022、022、023、024、025、026、027、028、029、029、029、29、29、20
我的天啊！
我的天啊！
我的天啊，我的天啊！
我的天啊！
我的天啊！

::component-code
---
忽略：
  项目数
  班级
外部：
  项目
外部类型：
  - StepperItem[]
道具：
  项目名称：
    - title：'地址'
      描述：'在此添加您的地址'
      图标：“i-lucide-house”
    - title：'发货'
      description：'设置您的首选发运方式'
      图标：'i-lucide-truck'
    - title：'结帐'
      描述：'确认您的订单'
  类别：'w-完整'
---
::

::note
单击项目以导航完成步骤。
::

### Color

使用`color`道具更改步进器的颜色。

::component-code
---
忽略：
  - content
  - items
  班级
外部：
  - items
外部类型：
  - StepperItem[]
道具：
  颜色：中性
  项目名称：
    - title：'地址'
      描述：'在此添加您的地址'
      图标：“i-lucide-house”
    - title：'发货'
      description：'设置您的首选发运方式'
      图标：'i-lucide-truck'
    - title：'结帐'
      描述：'确认您的订单'
  类别：'w-完整'
---
::

### Size

使用`size`道具更改步进器的大小。

::component-code
---
忽略：
  - content
  - items
  - class
外部：
  - items
外部类型：
  - StepperItem[]
道具：
  尺寸：xl
  项目名称：
    - title：'地址'
      description：'在此处添加您的地址'
      图标：“i-lucide-house”
    - title：'发货'
      description：'设置您的首选发运方式'
      图标：'i-lucide-truck'
    - title：'结帐'
      描述：'确认您的订单'
  类别：'w-完整'
---
::

### Orientation

使用`orientation`道具将步进器.光标的方向更改为`horizontal`。

::component-code
---
忽略：
  - content
  - items
  - class
外部：
  项目数
外部类型：
  - StepperItem[]
道具：
  方向：垂直
  项目名称：
    - title：'地址'
      description：'在此处添加您的地址'
      图标：“i-lucide-house”
    - title：'发货'
      description：'设置您的首选发运方式'
      图标：'i-lucide-truck'
    - title：'结帐'
      描述：'确认您的订单'
  类别：'w-完整'
---
::

### Disabled

使用`disabled`道具禁用步骤导航。

::component-code
---
忽略：
  内容
  项目数
  班级
外部：
  项目数
外部类型：
  - Stepper项目[]的步骤
道具：
  已禁用：true
  项目名称：
    标题：“地址”
      description：'在此处添加您的地址'
      图标：“i-lucide-house”
    - title：“发货”
      description：'设置您的首选发运方式'
      图标：“i-lucide卡车”
    - title：“签出”
      description：'确认您的订单'
---
::

::note{to="#with-controls"}
当您想要胁迫控件巡览时，这会很有用。
::

示例

### 使用控件

您可以使用按钮为步进器添加附加控制。

：组件示例{name="stepper-with-controls-example"}

### 控制活动项目

您可以使用`default-value`属性或`v-model`指示词搭配项目的`value`来控制使用中的项目。如果未提供`value`，则会预设为索引。

：组件示例{name="stepper-model-value-example"}

::tip
当提供`v-model`或`default-value`时，使用`value-key`属性更改用于匹配项目的密钥。
::

### 使用内容插槽

使用`#content`插槽来自定每个项目的内容。

：组件示例{name="stepper-content-slot-example"}

### 使用自定义插槽

使用`slot`属性可自定义特定项目。

您可以访问以下插槽：

第107章【第108章】第109章

：组件示例{name="stepper-custom-slot-example"}

## 活性成分

### 道具

：组件-支柱

### Slots

：组件插槽

### Emits

：组件发射

### Expose

您可以使用[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)访问键入的组件实例。

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
| `next`{lang="ts-type"}|`() => void`{lang="ts-type"}|
| `prev`{lang="ts-type"}|`() => void`{lang="ts-type"}|
| `hasNext`{lang="ts-type"}| 141号公路|
| `hasPrev`{lang="ts-type"}|`Ref<boolean>`{lang="ts-type"}|

## Theme

：组件主题

## Changelog

：组件更改日志
