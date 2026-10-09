---
description: Un elemento kbd para mostrar una tecla de teclado.
category: element
keywords:
  - keyboard shortcut
  - hotkey
  - keybinding
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Kbd.vue
---

xph0000xUso

Utilice la ranura predeterminada para establecer el valor del Kbd.

::component-code
---
slots:
  default: K
---
::

### Valor

Utilice el prop `value` para establecer el valor de Kbd.

::component-code
---
props:
  value: K
---
::

Puede pasar teclas especiales a la hélice `value` que pasa por el componente [`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts). Por ejemplo, la tecla `meta` se muestra como `⌘` en macOS y `Ctrl` en otras plataformas.

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

### color (Edición española)

Utilice el prop `color` para cambiar el color del Kbd.

::component-code
---
props:
  color: neutral
slots:
  default: K
---
::

### Variante

Utilice el prop `variant` para cambiar la variante de la Kbd.

::component-code
---
props:
  color: neutral
  variant: solid
slots:
  default: K
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño de la Kbd.

::component-code
---
props:
  size: lg
slots:
  default: K
---
::

## Ejemplos

### x`class`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Utilice el accesorio `class` para anular los estilos base de la insignia.

::component-code
---
props:
  class: 'font-bold rounded-full'
  variant: subtle
slots:
  default: K
---
::

## API (Edición española)

### Accesorios

:component-props

### Slots (Edición española)

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
