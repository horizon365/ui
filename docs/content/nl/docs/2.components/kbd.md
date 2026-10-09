---
description: Een kbd-element om een toetsenbordtoets weer te geven.
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

## Gebruik

Gebruik de standaardsleuf om de waarde van de Kbd in te stellen.

::component-code
---
slots:
  default: K
---
::

### Waarde

Gebruik de `value` prop om de waarde van de Kbd in te stellen.

::component-code
---
props:
  value: K
---
::

U kunt speciale toetsen doorgeven aan de `value`-prop die door de [`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts) composiable gaat. De `meta`-toets wordt bijvoorbeeld weergegeven als `⌘` op macOS en `Ctrl` op andere platforms.

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

### Kleur

Gebruik de `color` prop om de kleur van de Kbd te veranderen.

::component-code
---
props:
  color: neutral
slots:
  default: K
---
::

### Variant

Gebruik de `variant` prop om de variant van de Kbd te wijzigen.

::component-code
---
props:
  color: neutral
  variant: solid
slots:
  default: K
---
::

### Grootte

Gebruik de `size` prop om de grootte van de Kbd te wijzigen.

::component-code
---
props:
  size: lg
slots:
  default: K
---
::

## Voorbeelden

### `class` voorschot

Gebruik de `class` prop om de basisstijlen van de Badge te overschrijven.

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

### Rekwisieten

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
