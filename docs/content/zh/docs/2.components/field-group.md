---
title: 现场组
description: 将多个类似按钮的元素组合在一起。
category: element
keywords:
  - segmented control
  - toggle group
  - button group
  - input group
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FieldGroup.vue
---

## 使用情况

将多个[Button](/docs/components/button)包装在字段组中，以便将它们组合在一起。

::component-code
---
更漂亮：真的
插槽：
  默认值：|

<UButton color="neutral" variant="subtle" label="Button" />的
<UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />的
---
：U型按钮{color="neutral" variant="subtle" label="Button"}
：U型按钮{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

尺寸

使用`size`道具更改所有按钮的大小。

::component-code
---
更漂亮：真的
道具：
  尺寸：xl
插槽：
  默认值：|

<UButton color="neutral" variant="subtle" label="Button" />的
<UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />的
---
：U型按钮{color="neutral" variant="subtle" label="Button"}
：U型按钮{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

方向

使用`orientation`道具来变更按钮的方向。预设为`horizontal`。

::component-code
---
更漂亮：真的
道具：
  方向：垂直
插槽：
  默认值：|

<UButton color="neutral" variant="subtle" label="Submit" />的
<UButton color="neutral" variant="outline" label="Cancel" />的电话
---
：U形按钮{color="neutral" variant="subtle" label="Submit"}
：U形按钮{color="neutral" variant="outline" label="Cancel"}
::

示例

### 使用输入

您可以在字段群组中使用下列元件：[Input](/docs/components/input)、[InputMenu](/docs/components/input-menu)、[Select](/docs/components/select)[SelectMenu](/docs/components/select-menu)等。

::component-code
---
更漂亮：真的
插槽：
  默认值：|

<UInput color="neutral" variant="outline" placeholder="Enter token" />的

    041号
---
：u输入{color="neutral" variant="outline" placeholder="Enter token"}
：u-button{color="neutral" variant="subtle" icon="i-lucide-clipboard"}
::

### With tooltip

您可以在字段组中使用[Tooltip](/docs/components/tooltip)。

：组件示例{name="field-group-tooltip-example"}

### With panel menu

您可以在字段组中使用[DropdownMenu](/docs/components/dropdown-menu)。

：组件示例{name="field-group-dropdown-example"}

### With badge

您可以在字段组中使用[Badge](/docs/components/badge)。

：组件示例{name="field-group-badge-example"}

## API

道具

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
