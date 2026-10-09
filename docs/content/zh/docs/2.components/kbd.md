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

## 用法

使用默认插槽设置Kbd的值。

::component-code
---
slots:
  default: K
---
::

### 值

使用`value` prop设置Kbd的值。

::component-code
---
props:
  value: K
---
::

您可以将特殊密钥传递给`value` prop，该prop通过[`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts)组合。例如，`meta`密钥在macOS上显示为`⌘`，在其他平台上显示为`Ctrl`。

::component-code
---
props:
  value: meta
items:
  value:
    - meta
    - win
    - command
    - shift
    - ctrl
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
props:
  color: neutral
slots:
  default: K
---
::

### Variant

使用`variant` prop更改Kbd的变体。

::component-code
---
props:
  color: neutral
  variant: solid
slots:
  default: K
---
::

### Size

使用`size`属性更改Kbd的大小。

::component-code
---
props:
  size: lg
slots:
  default: K
---
::

## 示例

### `class`道具

使用`class`道具覆盖徽章的基本样式。

::component-code
---
props:
  class: 'font-bold rounded-full'
  variant: subtle
slots:
  default: K
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
