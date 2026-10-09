---
description: Un texto corto para representar un estado o una categoría.
category: element
keywords:
  - tag
  - pill
  - label
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Badge.vue
---

xph0000xUso

Utilice la ranura predeterminada para establecer la etiqueta de la insignia.

::component-code
---
slots:
  default: Badge
---
::

### Label

Utilice el accesorio `label` para establecer la etiqueta de la insignia.

::component-code
---
props:
  label: Badge
---
::

### color (Edición española)

Utilice el accesorio `color` para cambiar el color de la insignia.

::component-code
---
props:
  color: neutral
slots:
  default: Badge
---
::

### Variante

Utilice los accesorios `variant` para cambiar la variante de la insignia.

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Badge
---
::

### Tamaño

Utilice el accesorio `size` para cambiar el tamaño de la insignia.

::component-code
---
props:
  size: xl
slots:
  default: Badge
---
::

### Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro de la insignia.

::component-code
---
props:
  icon: i-lucide-rocket
  size: md
  color: primary
  variant: solid
slots:
  default: Badge
---
::

Utilice los accesorios `leading` y `trailing` para establecer la posición del icono o los accesorios `leading-icon` y `trailing-icon` para establecer un icono diferente para cada posición.

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Badge
---
::

### Avatar en Español

Utilice el prop `avatar` para mostrar un [Avatar](xph066) dentro de la insignia.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
slots:
  default: |

    Badge
---
::

## Ejemplos

### x`class`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Utilice el accesorio `class` para anular los estilos base de la insignia.

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Badge
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
