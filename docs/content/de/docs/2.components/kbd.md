---
description: Ein kbd-Element, um eine Tastaturtaste anzuzeigen.
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

## Bearbeiten

Verwenden Sie den Standard-Slot, um den Wert des Kbd festzulegen.

::component-code
---
slots:
  default: K
---
::

### value ist

Verwenden Sie die `value`-prop, um den Wert des Kbd festzulegen.

::component-code
---
props:
  value: K
---
::

Sie können spezielle Tasten an die `value`-Prop übergeben, die durch die [`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts) composable. For example, the `meta` key displays as `⌘` on macOS and `Ctrl` on other platforms. For example, the `meta` key displays as `⌘` on macOS and `Ctrl` on other platforms.

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

### Farbe

Verwenden Sie die `color` prop, um die Farbe des Kbd zu ändern.

::component-code
---
props:
  color: neutral
slots:
  default: K
---
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um die Variante des Kbd zu ändern.

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

Verwenden Sie die `size` prop, um die Größe des Kbd zu ändern.

::component-code
---
props:
  size: lg
slots:
  default: K
---
::

## Examples [Bearbeiten]

### `class` prop (englisch)

Verwenden Sie die `class`-Prop, um die Basisstile des Badges zu überschreiben.

::component-code
---
props:
  class: 'font-bold rounded-full'
  variant: subtle
slots:
  default: K
---
::

## API (englisch)

### Props (englisch)

:component-props

### Slots Bearbeiten

:component-slots

## Theme (englisch)

:component-theme

## Changelog (englisch)

:component-changelog
