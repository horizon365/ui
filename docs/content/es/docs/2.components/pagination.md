---
description: Una lista de botones o enlaces para navegar por las páginas.
category: navigation
keywords:
  - pager
  - page navigation
links:
  - label: Paginación
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pagination
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Pagination.vue
---

xph0000xUso

Utilice la directiva `default-page` o la directiva `v-model:page` para controlar la página actual.

::component-code
---
external:
  - page
model:
  - page
ignore:
  - page
  - total
props:
  page: 5
  total: 100
---
::

::note
El componente Pagination usa algunos accesorios [`Button`](/docs/components/button) para mostrar las páginas, usa los accesorios [`color`](#color), [`variant`xph028#variant) y [`size`](xph0333xph0x para darles estilo.
::

### Total (Edición española)

Utilice el prop `total` para establecer el número total de elementos en la lista.

::component-code
---
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
---
::

### Artículos por página

Utilice el prop `items-per-page` para establecer el número de elementos por página.

::component-code
---
ignore:
  - page
external:
  - page
model:
  - page
props:
  page: 5
  itemsPerPage: 20
  total: 100
---
::

### Conteo de hermanos

Utilice el prop `sibling-count` para establecer el número de hermanos a mostrar. Predeterminados a `2`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  siblingCount: 1
  total: 100
---
::

### Show Edges (Edición española)

Utilice el prop `show-edges` para mostrar siempre los puntos suspensivos, la primera y la última página.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showEdges: true
  siblingCount: 1
  total: 100
---
::

### Show Controles

Utilice el prop `show-controls` para mostrar los botones primero, anterior, siguiente y último.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showControls: false
  showEdges: true
  total: 100
---
::

Xph111xColor (Edición española)

Utilice el prop `color` para establecer el color de los controles inactivos.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  color: primary
  total: 100
---
::

### Variante

Utilice el prop `variant` para establecer la variante de los controles inactivos. Predeterminados a `outline`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  color: neutral
  variant: subtle
  total: 100
---
::

XPH169xColor activo

Utilice el prop `active-color` para establecer el color del control activo.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  activeColor: neutral
  total: 100
---
::

### Active Versión

Utilice el prop `active-variant` para establecer la variante del control activo. Predeterminados a `solid`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  activeColor: primary
  activeVariant: subtle
  total: 100
---
::

### Tamaño

Utilice el prop `size` para establecer el tamaño de los controles. Predeterminados a `md`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  page: 5
  size: xl
  total: 100
---
::

### Disabled

Utilice el prop `disabled` para desactivar los controles de paginación.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
  disabled: true
---
::

## Ejemplos

### Con enlaces

Utilice el prop `to` para transformar los botones en enlaces. Pase una función que recibe el número de página y devuelve un destino de ruta.

::component-example
---
name: 'pagination-links-example'
---
::

::note
En este ejemplo, estamos agregando el hash `#with-links` para evitar ir a la parte superior de la página.
::

## API

### Props (accesorios)

:component-props

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
