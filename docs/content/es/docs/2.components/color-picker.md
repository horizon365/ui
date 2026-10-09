---
title: Colorpimiento
description: Un componente para seleccionar un color.
category: form
keywords:
  - colour picker
  - swatch
  - hex
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ColorPicker.vue
---

xph0000xUso

Utilice la directiva `v-model` para controlar el valor del ColorPicker.

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

Utilice el prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: '#00BCD4'
---
::

XPH017xRGB en formato

Utilice el prop `format` para establecer el valor `rgb` del ColorPicker.

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

Formato ### HSL

Utilice el prop `format` para establecer el valor `hsl` del ColorPicker.

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

Formato ### CMYK

Utilice el prop `format` para establecer el valor `cmyk` del ColorPicker.

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

### CIELab en formato

Utilice el prop `format` para establecer el valor `lab` del ColorPicker.

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

### Throttle (Edición española)

Utilice el prop `throttle` para ajustar el valor del acelerador del ColorPicker.

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

### Tamaño

Utilice el prop `size` para establecer el tamaño del ColorPicker.

::component-code
---
props:
  size: xl
---
::

### Desactivado

Utilice el prop `disabled` para desactivar el ColorPicker.

::component-code
---
props:
  disabled: true
---
::

## Ejemplos

### As un selector de color

Utilice un componente [Button](/docs/components/button) y un componente [Popover](/docs/components/popover) para crear un selector de color.

::component-example
---
name: 'color-picker-chooser-example'
---
::

## API (Edición española)

### Props (Edición española)

:component-props

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
