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

## 用法

用芯片包裹任何元件以显示指示器。

::component-code
---
prettier: true
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Color

使用`color`道具来改变芯片的颜色。

::component-code
---
prettier: true
props:
  color: neutral
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Size

使用`size`道具来改变芯片的大小。

::component-code
---
prettier: true
props:
  size: 3xl
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Text

使用`text`道具设置芯片的文本。

::component-code
---
prettier: true
props:
  text: 5
  size: 3xl
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### 位置

使用`position`道具来改变芯片的位置。

::component-code
---
prettier: true
props:
  position: 'bottom-left'
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### 插入

使用`inset`道具显示元件内部的芯片。这在处理圆形元件时很有用。

::component-code
---
prettier: true
props:
  inset: true
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" loading="lazy" />
---
:u-avatar{src="https://github.com/benjamincanac.png" loading="lazy"}
::

### 独立

使用`standalone`道具旁边的`inset`道具显示芯片内联。

::component-code
---
props:
  standalone: true
  inset: true
---
::

::note
例如，它在[`CommandPalette`](/docs/components/command-palette)、[`InputMenu`](/docs/components/input-menu)、[`Select`](/docs/components/select)或[`SelectMenu`](/docs/components/select-menu)组件中以这种方式使用。
::

## 示例

### 控件可见性

您可以使用`show`道具控制芯片的可见性。

:component-example{name="chip-show-example"}

::note
在本例中，Chip具有每个状态的颜色，并且当状态不是`offline`时显示。
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

## 更改日志

:component-changelog
