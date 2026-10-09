---
description: 키보드 키를 표시할 kbd 요소입니다.
category: element
keywords:
  - keyboard shortcut
  - hotkey
  - keybinding
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Kbd.vue
---

## Usage

기본 슬롯을 사용하여 Kbd 값을 설정합니다.

::component-code
---
slots:
  default: K
---
::

### Value 값

`value` prop 을 사용하여 Kbd 값을 설정합니다.

::component-code
---
props:
  value: K
---
::

[`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts) 컴포지션을 통과하는 특수 키를 `value` Prop에 전달할 수 있습니다. 예를 들어 `meta` 키는 macOS에서는 `⌘`로, 다른 플랫폼에서는 `Ctrl`로 표시됩니다.

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

### Color 색상

`color` Prop을 사용하여 Kbd의 색상을 변경합니다.

::component-code
---
props:
  color: neutral
slots:
  default: K
---
::

### Variant

`variant` prop 을 사용하여 Kbd 의 변형을 변경합니다.

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

`size` prop을 사용하여 Kbd의 크기를 변경합니다.

::component-code
---
props:
  size: lg
slots:
  default: K
---
::

## 예제

### `class` 소품

`class` prop 을 사용하여 배지의 기본 스타일을 재정의합니다.

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

### Props (### Props)

:component-props

### Slots

:component-slots

## 테마

:component-theme

## 변경 로그

:component-changelog
