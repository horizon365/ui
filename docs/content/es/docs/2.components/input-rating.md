---
title: inputación
description: Un componente para mostrar y recopilar calificaciones de los usuarios.
category: form
keywords:
  - star rating
  - stars
links:
  - label: Rated
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/rating
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputRating.vue
---

xph0000xUso

Utilice la directiva `v-model` para controlar el valor de calificación del componente InputRating.

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
---
::

Utilice el prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 3
---
::

### Step (Acción)

Utilice el prop `step` para controlar la granularidad de cada estrella. Configurarlo en `0.5` para permitir calificaciones de media estrella.

::component-code
---
ignore:
  - defaultValue
props:
  step: 0.5
  defaultValue: 3.5
---
::

### Longitud

Utilice el prop `length` para establecer el número de estrellas. Predeterminados a `5`.

::component-code
---
ignore:
  - defaultValue
props:
  length: 10
  step: 0.5
  defaultValue: 7.5
---
::

### Claridad

Utilice el prop `clearable` para permitir a los usuarios borrar la calificación haciendo clic en el valor seleccionado actualmente.

::component-code
---
ignore:
  - defaultValue
props:
  clearable: true
  defaultValue: 3
---
::

### Hoverable (Edición española)

Utilice el prop `hoverable` para controlar si la calificación previsualiza el valor al pasar el cursor sobre las estrellas.

::component-code
---
ignore:
  - defaultValue
props:
  hoverable: true
  defaultValue: 3
---
::

### Icon

Utilice el prop `icon` para personalizar el icono utilizado para las estrellas.

::component-code
---
ignore:
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: 4
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar el icono de estrella predeterminado globalmente en su `app.config.ts` bajo la tecla `ui.icons.star`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar el icono de estrella predeterminado a nivel mundial en su `vite.config.ts` bajo la tecla `ui.icons.star`.
:::
::

### Empty Icon (en inglés)

Utilice el prop `empty-icon` para personalizar el icono utilizado para las estrellas vacías. Si no se proporciona, utiliza el mismo icono que `icon`.

::component-code
---
ignore:
  - defaultValue
props:
  emptyIcon: 'i-lucide-circle'
  icon: 'i-lucide-circle-check'
  defaultValue: 3
---
::

### color (Edición española)

Utilice el accesorio `color` para cambiar el color de las estrellas llenas.

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 4
---
::

Xph090xTamaño

Utilice el prop `size` para cambiar el tamaño de las estrellas.

::component-code
---
ignore:
  - defaultValue
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  size: xl
  defaultValue: 4
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación de la clasificación. Predeterminados a `horizontal`.

::component-code
---
ignore:
  - defaultValue
props:
  orientation: vertical
  defaultValue: 4
---
::

### Disabled

Cuando se desactiva, el componente ha reducido la opacidad (75%) y muestra un cursor `not-allowed` para indicar que no es interactivo.

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 3
---
::

### Readonly

Utilice el prop `readonly` para mostrar una calificación sin permitir la interacción del usuario. A diferencia de `disabled`, mantiene la apariencia normal (opacidad completa, cursor predeterminado). Úselo cuando desee mostrar una calificación que no se puede cambiar pero que debe verse normal.

::component-code
---
ignore:
  - defaultValue
props:
  readonly: true
  defaultValue: 4.5
---
::

## API (Edición española)

### Props (Edición española)

:component-props

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
