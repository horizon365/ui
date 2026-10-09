---
title: Scrollón
description: Un contenedor de desplazamiento flexible con soporte de virtualización.
category: data
keywords:
  - scrollbar
  - overflow
  - scrolling
links:
  - label: El Tank virtual
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/virtual/latest
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ScrollArea.vue
---

xph0000xUso

El componente ScrollArea crea contenedores desplazables con virtualización opcional para listas grandes.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-example'
class: '!p-0'
---
::

### Artículos

Utilice el prop `items` como una matriz y renderice cada elemento utilizando la ranura predeterminada:

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-items-example'
class: '!p-0'
---
::

::tip{to="#with-default-slot"}
También puede usar la ranura predeterminada sin el soporte `items` para renderizar contenido desplazable personalizado directamente.
::

### Orientación

Utilice el prop `orientation` para cambiar la dirección de desplazamiento. Por defecto `vertical`.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-orientation-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: horizontal
    items:
      - vertical
      - horizontal
---
::

### Virtualización

Utilice el prop `virtualize` para renderizar solo los elementos actualmente a la vista, lo que aumenta significativamente el rendimiento cuando se trabaja con grandes conjuntos de datos.

::note
Cuando la virtualización es **enabled**, personalice el espaciado a través de las opciones de prop `virtualize` como `gap`, `paddingStart` y `paddingEnd`.
::

::tip
Si todos sus elementos tienen la misma altura ****, establezca `skipMeasurement` a `true` en el soporte `virtualize` para omitir la medición DOM por elemento y confiar en `estimateSize` en su lugar.
::

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-virtualize-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
---
::

### Sombra: badge{label="4.9+" class="align-text-top"}

Utilice el soporte `shadow` para mostrar sombras de desvanecimiento en los bordes desplazables, lo que indica que hay más contenido disponible en la dirección de desplazamiento. El desvanecimiento sigue automáticamente al `orientation` y solo aparece cuando el contenido se desborda.

::component-example
---
collapse: true
name: 'scroll-area-shadow-example'
---
::

::tip
Pase un objeto a la hélice `shadow` para configurar el tamaño de desvanecimiento, por ejemplo, `:shadow="{ size: 48 }"`.
::

## Ejemplos

### As diseño de mampostería

Utilice el soporte `virtualize` con las opciones `lanes`, `gap` y `estimateSize` para crear diseños de mampostería al estilo de Pinterest con elementos de altura variable.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-masonry-layout-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
  - name: lanes
    type: number
    label: lanes
    default: 3
  - name: gap
    type: number
    label: gap
    default: 16
---
::

::tip
Para un rendimiento óptimo, ajuste `estimateSize` cerca de la altura promedio del elemento. Aumentar `overscan` mejora la suavidad del desplazamiento pero hace que los elementos estén más fuera de la pantalla.
::

### Con carriles responsivos

Puede usar los composables [`useWindowSize`](https://vueuse.org/core/useWindowSize/) (para visualización basada) o [`useElementSize`xph110) (para contenedores) para hacer que el `lanes` sea reactivo.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-responsive-lanes-example'
class: '!p-0'
---
::

### Con elemento de desplazamiento externo: badge{label="4.10+" class="align-text-top"}

Pase una función `getScrollElement` en el prop `virtualize` para virtualizar contra un contenedor de desplazamiento antepasado en lugar de la propia ventana gráfica del componente. Establezca `scrollMargin` en el desplazamiento de la lista desde el inicio del elemento de desplazamiento (por ejemplo, la altura del contenido por encima de él).

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'scroll-area-external-scroll-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
---
::

::note
Debido a que el contenedor posee el desplazamiento, los botones de búsqueda y "Top" de la barra de herramientas lo desplazan directamente con `container.scrollTo`.
::

::caution
El prop `shadow` no tiene ningún efecto en este modo, ya que la raíz ya no es propietaria del desplazamiento.
::

### Con desplazamiento programático

Puede usar el `virtualizer` expuesto para controlar programáticamente la posición del desplazamiento.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-scroll-to-example'
class: '!p-0'
---
::

### Con desplazamiento infinito

Puede utilizar el composable [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) para cargar más datos a medida que el usuario se desplaza.

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'scroll-area-infinite-scroll-example'
class: '!p-0'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `server: false` para obtener datos del cliente sin bloquear el renderizado inicial. El estado de carga comprueba el estado de `pending` y `idle` para mostrar un indicador de carga antes y durante la extracción.
::

### Con ranura por defecto

Puede usar la ranura predeterminada sin el soporte `items` para renderizar contenido desplazable personalizado directamente.

::component-example
---
name: 'scroll-area-default-slot-example'
class: '!p-0'
---
::

## API

### Props (accesorios)

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

### Exposición

Puede acceder a la instancia de componente escrito utilizando [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const scrollArea = useTemplateRef('scrollArea')

// Scroll to a specific item
function scrollToItem(index: number) {
  scrollArea.value?.virtualizer?.scrollToIndex(index, { align: 'center' })
}
</script>

<template>
  <UScrollArea ref="scrollArea" :items="items" virtualize />
</template>
```

Esto le dará acceso a lo siguiente:

| Nombre| Tipo| Descripción|
| ---- | ---- | ----------- |
| `$el`x{lang="ts-type"} (Edición española)| `HTMLElement`x{lang="ts-type"} (Edición española)| elemento raíz del componente.|
| `virtualizer`x{lang="ts-type"}| `Ref<Virtualizer> \| undefined`x{lang="ts-type"}| La instancia del virtualizador [TanStack ](https://tanstack.com/virtual/latest/docs/api/virtualizer) (`undefined` si la virtualización está deshabilitada).|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
