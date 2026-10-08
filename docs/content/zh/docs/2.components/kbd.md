---
description: 一个显示键盘按键的kbd元素。
category: element
keywords:
  - keyboard shortcut
  - hotkey
  - keybinding
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Kbd.vue
---

## 使用情况

使用默认插槽设置Kbd的值。

::component-code
---
插槽：
  默认值：K
---
::

### Value

使用`value`prop设置Kbd的值。

::component-code
---
道具：
  值：K
---
::

您可以将特殊密钥传递给经过[`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts)可组合的`value`道具。例如，`meta`密钥在macOS上显示为`⌘`，在其他平台上显示为`Ctrl`。

::component-code
---
道具：
  值：Meta
项目名称：
  价值观：
    - meta
    - win
    - command
    - shift
    - cnc
    - option
    - alt
    - enter
    - delete
    - backspace
    - escape
    - tab
    - capslock
    - arrowup
    - arrowright
    - arrowdown
    - arrowleft
    - pageup
    - pagedown
    - home
    - end
---
::

### Color

使用`color`道具更改Kbd的颜色。

::component-code
---
道具：
  颜色：中性
插槽：
  默认值：K
---
::

### Variant

使用`variant`prop更改Kbd的变体。

::component-code
---
道具：
  颜色：中性
  变体：实体
插槽：
  默认值：K
---
::

### Size

使用`size`道具更改Kbd的大小。

::component-code
---
道具：
  Size：lg
插槽：
  默认值：K
---
::

## Examples

### `class`道具

使用`class`道具覆盖徽章的基本样式。

::component-code
---
道具：
  class：'font-bold rounded-full'
  变体：细微
插槽：
  默认值：K
---
::

## API

### Props

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
