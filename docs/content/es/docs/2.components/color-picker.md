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

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor del ColorPicker.

::component-code
---
Ignora:
  - modelValoración
Externo:
  - modelValue (Edición española)
Props:
  Valoración:'#00C16A'
---
::

Utilice la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Ignora:
  @@pH005@@defaultValue
Props:
  Valoración:'#00BCD4'
---
::

### RGB Formato de edición

Utilice el prop `format` para establecer el valor `rgb` del ColorPicker.

::component-code
---
Ignora:
  @@pH009@modelValue (Edición española)
  @@pH010@formato
Externo:
  @@P011@@modelValue (Edición española)
Props:
  Formato: RGB
  Valor del modelo: 'rgb (0, 193, 106)'
---
::

### HSL Formato de edición

Utilice el prop `format` para establecer el valor `hsl` del ColorPicker.

::component-code
---
Ignora:
  @@P015@modelValue (Edición española)
  @160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @@P2017@modelValoración
Props:
  Formato: HSL
  modelValue: 'hsl (153, 100%, 37.8%)'
---
::

### CMYK Formato de edición

Utilice el prop `format` para establecer el valor `cmyk` del ColorPicker.

::component-code
---
Ignora:
  - modelValue (Edición española)
  @@2222@formateado
Externo:
  - modelValue (Edición española)
Props:
  Vía: CMYK
  modelValue: 'cmyk (100%, 0%, 45.08%, 24.31%)'
---
::

### CIELab Formato de edición

Utilice el prop `format` para establecer el valor `lab` del ColorPicker.

::component-code
---
Ignora:
  @@P200@modelValoría27
  @@28@format (en inglés)
Externo:
  @@20029@modelValoración
Props:
  Categoría: Lab
  modelValue: 'laboratorio (68,88%-60,41% 32. 55%)'
---
::

@@pH030@throttle (Edición española)

Utilice el prop `throttle` para ajustar el valor del acelerador del ColorPicker.

::component-code
---
Ignora:
  - modelValue (Edición española)
Externo:
  - modelValue (Edición española)
Props:
  Agujeros: 100
  Valoración:'#00C16A'
---
::

@@pH034@@Tamaño

Utilice el prop `size` para establecer el tamaño del ColorPicker.

::component-code
---
Props:
  Tamaño: xl
---
::

@@pH036@@desactivado

Utilice el prop `disabled` para desactivar el ColorPicker.

::component-code
---
Props:
  Discapacidad: Verdadero
---
::

@@pH038@Ejemplos

### Como seleccionador de colores

Utilice un [Button](/docs/components/button) y un [Popover](/docs/components/popover) para crear un selector de color.

::component-example
---
Nombre del archivo: 'color-picker-choser-example'
---
::

@480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Emisiones

@@501@@Proyecto

Componente Tema

@@2015@Changelog

Categoría: component-changelog
