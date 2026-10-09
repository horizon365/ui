---
description: Una entrada para seleccionar un valor numérico dentro de un rango.
category: form
keywords:
  - range slider
links:
  - label: El slider
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/slider
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slider.vue
---

xph0000xUso

Utilice la directiva `v-model` para controlar el valor del deslizador.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

Utilice el prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 50
---
::

::tip
Utilice `aria-label` o `aria-labelledby` para nombrar un solo deslizador de pulgar, que se reenvían al pulgar que es el elemento con el rol `slider`.

Los pulgares de un deslizador de múltiples pulgares se nombran por su posición para que puedan ser separados, `Minimum`/`Maximum` para dos pulgares y `Value n of m` para tres o más. Esos nombres se mantienen, y un `aria-label` nombra al deslizador en su conjunto a través de un rol `group` en la raíz en lugar de repetirse en cada pulgar.
::

### Min/Max (Edición española)

Utilice los props `min` y `max` para establecer los valores mínimos y máximos del deslizador. Predeterminados a `0` y `100`.

::component-code
---
ignore:
  - defaultValue
props:
  min: 0
  max: 50
  defaultValue: 50
---
::

### Step (Edición española)

Utilice el prop `step` para establecer el valor de incremento del Slider. Defaults a `1`.

::component-code
---
ignore:
  - defaultValue
props:
  step: 10
  defaultValue: 50
---
::

### Multiplicación.

Utilice la directiva `v-model` o el prop `default-value` con una matriz de valores para crear un deslizador de rango.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [25, 75]
---
::

Utilice el soporte `min-steps-between-thumbs` para limitar la distancia mínima entre los pulgares.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [25, 50, 75]
  minStepsBetweenThumbs: 10
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación del deslizador. Predeterminados a `horizontal`.

::component-code
---
ignore:
  - defaultValue
  - class
props:
  orientation: vertical
  defaultValue: 50
  class: 'h-48'
---
::

### Color (Edición española)

Utilice el accesorio `color` para cambiar el color del deslizador.

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 50
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del deslizador.

::component-code
---
ignore:
  - defaultValue
props:
  size: xl
  defaultValue: 50
---
::

### Tooltip (Edición española)

Utilice el prop `tooltip` para mostrar un [Tooltip](/docs/components/tooltip) alrededor de los pulgares del deslizador con el valor actual. Puede configurarlo en `true` para el comportamiento predeterminado o pasar un objeto para personalizarlo con cualquier propiedad del componente [Tooltip](/docs/components/tooltip#props).

::component-code
---
ignore:
  - defaultValue
  - tooltip
props:
  defaultValue: 50
  tooltip: true
---
::

### Disabled

Utilice el prop `disabled` para desactivar el deslizador.

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 50
---
::

### Invertido

Utilice el soporte `inverted` para invertir visualmente el deslizador.

::component-code
---
ignore:
  - defaultValue
props:
  inverted: true
  defaultValue: 25
---
::

## API (Edición española)

### Props (accesorios)

:component-props

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
