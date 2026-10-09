---
title: Colorées
description: Un composant pour sélectionner une couleur.
category: form
keywords:
  - colour picker
  - swatch
  - hex
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ColorPicker.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur du ColorPicker.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: '#00C16A'
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: '#00BCD4'
---
::

Format ### RGB

Utilisez la prop `format` pour définir la valeur `rgb` du ColorPicker.

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: rgb
  modelValue: 'rgb(0, 193, 106)'
---
::

Format ### HSL

Utilisez la prop `format` pour définir la valeur `hsl` du ColorPicker.

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: hsl
  modelValue: 'hsl(153, 100%, 37.8%)'
---
::

Format ### CMYK

Utilisez la prop `format` pour définir la valeur `cmyk` du ColorPicker.

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: cmyk
  modelValue: 'cmyk(100%, 0%, 45.08%, 24.31%)'
---
::

Format ### CIELab

Utilisez la prop `format` pour définir la valeur `lab` du ColorPicker.

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: lab
  modelValue: 'lab(68.88% -60.41% 32.55%)'
---
::

### Throttle électrique

Utilisez le prop `throttle` pour définir la valeur de l'accélérateur du ColorPicker.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  throttle: 100
  modelValue: '#00C16A'
---
::

### taille

Utilisez le prop `size` pour définir la taille du ColorPicker.

::component-code
---
props:
  size: xl
---
::

### Désactivé

Utilisez le prop `disabled` pour désactiver le ColorPicker.

::component-code
---
props:
  disabled: true
---
::

## exemples

### As un sélecteur de couleur

Utilisez un composant [Button](/docs/components/button) et un composant [Popover](/docs/components/popover) pour créer un sélecteur de couleur.

::component-example
---
name: 'color-picker-chooser-example'
---
::

## API

### Props équipements

:component-props

### Emis

:component-emits

## Thème

:component-theme

## Changelog

:component-changelog
