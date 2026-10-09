---
description: Un élément kbd pour afficher une touche de clavier.
category: element
keywords:
  - keyboard shortcut
  - hotkey
  - keybinding
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Kbd.vue
---

## Utilisation

Utilisez le slot par défaut pour définir la valeur du Kbd.

::component-code
---
slots:
  default: K
---
::

### Valeur

Utilisez la prop `value` pour définir la valeur du Kbd.

::component-code
---
props:
  value: K
---
::

Vous pouvez passer des touches spéciales à la prop `value` qui passe par le composable [`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts). Par exemple, la touche `meta` s'affiche sous la forme `⌘` sur macOS et `Ctrl` sur d'autres plates-formes.

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

### Couleur

Utilisez le prop `color` pour changer la couleur du Kbd.

::component-code
---
props:
  color: neutral
slots:
  default: K
---
::

### Variant équivalent

Utilisez le prop `variant` pour changer la variante du Kbd.

::component-code
---
props:
  color: neutral
  variant: solid
slots:
  default: K
---
::

### taille

Utilisez le prop `size` pour modifier la taille du Kbd.

::component-code
---
props:
  size: lg
slots:
  default: K
---
::

## Exemples

### x`class` prop

Utilisez le prop `class` pour remplacer les styles de base du badge.

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

## Thème

:component-theme

## Changelog

:component-changelog
