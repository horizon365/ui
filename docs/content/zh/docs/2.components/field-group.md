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

## 用法

将多个[Button](/docs/components/button)包装在一个FieldGroup中，以将它们分组在一起。

::component-code
---
prettier: true
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="按钮"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Size

使用`size`属性更改所有按钮的大小。

::component-code
---
prettier: true
props:
  size: xl
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="按钮"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### 方向

使用`orientation`属性将按钮的方向更改为`horizontal`。

::component-code
---
prettier: true
props:
  orientation: vertical
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Submit" />
    <UButton color="neutral" variant="outline" label="Cancel" />
---
:u-button{color="neutral" variant="subtle" label="提交"}
:u-button{color="neutral" variant="outline" label="取消"}
::

## 示例

### 带输入

您可以在字段组中使用[Input](/docs/components/input)、[InputMenu](/docs/components/input-menu)、[Select](/docs/components/select) xSelectMenu](/docs/components/select-menu)等组件。

::component-code
---
prettier: true
slots:
  default: |

    <UInput color="neutral" variant="outline" placeholder="Enter token" />

    <UButton color="neutral" variant="subtle" icon="i-lucide-clipboard" />
---
:u-input{color="neutral" variant="outline" placeholder="Enter token"}
:u-button{color="neutral" variant="subtle" icon="i-lucide-clipboard"}
::

### 带工具提示

您可以在字段组中使用[Tooltip](/docs/components/tooltip)。

:component-example{name="field-group-tooltip-example"}

### 带菜单

您可以在字段组中使用[DropdownMenu](/docs/components/dropdown-menu)。

:component-example{name="field-group-dropdown-example"}

### 带徽章

您可以在字段组中使用[Badge](/docs/components/badge)。

:component-example{name="field-group-badge-example"}

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
