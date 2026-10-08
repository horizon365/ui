---
description: 数值或状态的指示器。
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Chip.vue
---

## 使用情况

用芯片包裹任何组件，以显示指示器。

::component-code
---
更漂亮：真的
插槽：
  默认值：|

<UButton icon="i-lucide-mail" color="neutral" variant="subtle" />号
---
：U形按钮{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### 颜色

使用`color`道具来变更筹码的颜色。

::component-code
---
更漂亮：真的
道具：
  颜色：中性
插槽：
  默认值：|

<UButton icon="i-lucide-mail" color="neutral" variant="subtle" />的
---
：U型按钮{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

尺寸

使用`size`道具来变更筹码的大小。

::component-code
---
更漂亮：真的
道具：
  尺寸：3xl
插槽：
  默认值：|

<UButton icon="i-lucide-mail" color="neutral" variant="subtle" />的
---
：U形按钮{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

文字

使用`text`道具来设定筹码的文字。

::component-code
---
更漂亮：真的
道具：
  正文：5
  尺寸：3xl
插槽：
  默认值：|

<UButton icon="i-lucide-mail" color="neutral" variant="subtle" />的
---
：U型按钮{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### 位置

使用`position`道具来变更筹码的位置。

::component-code
---
更漂亮：真的
道具：
  位置：'左下'
插槽：
  默认值：|

<UButton icon="i-lucide-mail" color="neutral" variant="subtle" />的
---
：U型按钮{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

插入式

使用`inset`道具来显示元件内部的芯片。这在处理圆形元件时很有用。

::component-code
---
更漂亮：真的
道具：
  插图：true
插槽：
  默认值为：|

<UAvatar src="https://github.com/benjamincanac.png" loading="lazy" />，你好
---
：u-头像{src="https://github.com/benjamincanac.png" loading="lazy"}
::

### 独立

在`inset`道具旁边使用`standalone`道具，以内嵌方式显示筹码。

::component-code
---
道具：
  单机版：true
  插图：true
---
::

::note
它在[、/docs/components/command-palette、)、[、](、/docs/components/input-menu、)、例如，[`Select`](/docs/components/select)或[`SelectMenu`](/docs/components/select-menu)的组件。
::

示例

### 控制可见性

您可以使用`show`道具来控制芯片的可见性。

：组件示例{name="chip-show-example"}

::note
在此示例中，芯片具有每个状态的颜色，并且在状态不是`offline`时显示。
::

API，活性成分

道具

：组件-支柱

插槽

：组件插槽

发射器

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
