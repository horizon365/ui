---
description: Separa el contenido horizontal o verticalmente.
category: element
keywords:
  - divider
  - hr
  - horizontal rule
links:
  - label: Separador
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Separator.vue
---

xph0000xUso

Utilice el componente Separador para separar el contenido.

::component-code
---
class: 'p-8'
---
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación del Separator. Defaults a `horizontal`.

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  orientation: vertical
  class: 'h-48'
---
::

### Label

Utilice el accesorio `label` para mostrar una etiqueta en el centro del separador.

::component-code
---
class: 'p-8'
props:
  label: 'Hello World'
---
::

Ubicación: badge{label="4.8+" class="align-text-top"}

Utilice la prop `position` para cambiar la posición del contenido del Separator. Defaults a `center`.

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  position: start
  label: 'Hello World'
---
::

### Icono

Utilice el accesorio `icon` para mostrar un icono en el centro del separador.

::component-code
---
class: 'p-8'
props:
  icon: 'i-simple-icons-nuxtdotjs'
---
::

### Avatar

Utilice el soporte `avatar` para mostrar un avatar en el centro del Separador.

::component-code
---
prettier: true
class: 'p-8'
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
---
::

### Color (Edición española)

Utilice el prop `color` para cambiar el color del Separator. Defaults a `neutral`.

::component-code
---
class: 'p-8'
props:
  color: primary
  type: solid
---
::

### Tipo

Utilice el prop `type` para cambiar el tipo de Separator. Defaults a `solid`.

::component-code
---
class: 'p-8'
props:
  type: dashed
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del Separator. Prevalus a `xs`.

::component-code
---
class: 'p-8'
props:
  size: lg
---
::

## API (Edición española)

### Accesorios

:component-props

### Slots (en inglés)

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
