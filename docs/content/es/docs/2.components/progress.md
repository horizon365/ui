---
description: Un indicador que muestra el progreso de una tarea.
category: element
keywords:
  - progress bar
  - loading bar
  - meter
links:
  - label: El progreso
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/progress
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Progress.vue
---

xph0000xUso

Utilice la directiva `v-model` para controlar el valor del progreso.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

::note
Utilice el componente [`ProgressGroup`](/docs/components/progress-group) para dividir una sola barra en varios segmentos que se suman a un total.
::

### Max (Edición española)

Utilice el prop `max` para establecer el valor máximo del Progreso.

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
  max: 4
---
::

Utilice el prop `max` con una matriz de cadenas para mostrar el paso activo debajo de la barra, el valor máximo del progreso es la longitud de la matriz.

::component-code
---
prettier: true
ignore:
  - max
external:
  - modelValue
props:
  modelValue: 3
  max:
    - 'Waiting...'
    - 'Cloning...'
    - 'Migrating...'
    - 'Deploying...'
    - 'Done!'
---
::

### Estado

Utilice el prop `status` para mostrar el valor de progreso actual por encima de la barra.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
  status: true
---
::

::tip
El estado rastrea el final de la barra, use `:ui="{ status: 'w-full' }"` para que abarque todo el ancho.
::

### indéterminé

Cuando no se establece `v-model` o el valor es `null`, el progreso se convierte en_indeterminate_. La barra de progreso se anima como `carousel`, pero puede cambiarlo usando el prop. [`animation`](#animation).

::component-code
---
external:
  - modelValue
props:
  modelValue: null
---
::

### Animación

Utilice el prop `animation` para cambiar la animación del Progreso a un carrusel inverso, una barra oscilante o una barra elástica.

::component-code
---
props:
  animation: swing
---
::

::tip
La animación se deshabilita automáticamente cuando el usuario prefiere un movimiento reducido, la barra indeterminada se muestra como un pulso de ancho completo en su lugar.
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación de los valores predeterminados de Progress a `horizontal`.

::component-code
---
ignore:
  - class
props:
  orientation: vertical
  class: 'h-48'
---
::

### Color (Edición)

Utilice el accesorio `color` para cambiar el color del Progress.

::component-code
---
props:
  color: neutral
---
::

::tip
Este accesorio también acepta cualquier valor de color CSS para paletas fuera del tema.
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño de la Progress.

::component-code
---
props:
  size: xl
---
::

### Invertido

Utilice el soporte `inverted` para invertir visualmente el progreso.

::component-code
---
props:
  inverted: true
  modelValue: 25
---
::

## API (Edición española)

### Props (Edición española)

:component-props

### Slots (Edición española)

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
