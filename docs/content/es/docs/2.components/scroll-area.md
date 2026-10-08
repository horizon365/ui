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

@@pH000@@Uso del producto

El componente ScrollArea crea contenedores desplazables con virtualización opcional para listas grandes.

::component-example
---
Colapso: Verdad
Desconocido: true
Nombre: 'scroll-area-example'
Categoría:! p-0
---
::

@0001@Artículos

Utilice el prop `items` como una matriz y renderice cada elemento utilizando la ranura predeterminada:

::component-example
---
Colapso: Verdad
Desconocido: true
Nombre: 'scroll-area-items-example'
Categoría:! p-0
---
::

::tip{to="#with-default-slot"}
También puede usar la ranura predeterminada sin el prop `items` para renderizar contenido desplazable personalizado directamente.
::

### Orientación

Utilice el prop `orientation` para cambiar la dirección de desplazamiento. Por defecto a `vertical`.

::component-example
---
Colapso: Verdad
Desconocido: true
Nombre: 'scroll-area-orientation-example'
Categoría:! p-0
Opciones:
  - nombre: orientación
    Etiqueta: orientación
    por defecto: Horizontal
    Items:
      @@pH008@@vertical
      @@pH009@horizonal
---
::

@@pH010@virtualizacion

Utilice el prop `virtualize` para representar solo los elementos actualmente a la vista, lo que aumenta significativamente el rendimiento cuando se trabaja con grandes conjuntos de datos.

::note
Cuando la virtualización es **enabled**, personalice el espaciado a través de las opciones de prop `virtualize` como `gap`,`paddingStart` y `paddingEnd`. De lo contrario, use la prop `ui` para aplicar clases como `gap p-4` en la ranura `viewport`.
::

::tip
Si todos los elementos tienen la misma altura ****, configure `skipMeasurement` a `true` en el prop `virtualize` para omitir la medición DOM por elemento y confiar en `estimateSize` en su lugar.
::

::component-example
---
Colapso: Verdad
Desconocido: true
Nombre: 'scroll-area-virtualize-example'
Categoría:! p-0
Opciones:
  - nombre: orientación
    Etiqueta: orientación
    por defecto: Vertical
    Items:
      @@28@Vertical
      @@29@hexagonal.
---
::

### Shadow: badge{label="4.9+" class="align-text-top"}

Utilice el prop `shadow` para mostrar sombras de desvanecimiento en los bordes desplazables, lo que indica que hay más contenido disponible en la dirección de desplazamiento. El desvanecimiento sigue automáticamente al `orientation` y solo aparece cuando el contenido se desborda.

::component-example
---
Colapso: Verdad
Nombre: 'scroll-area-shadow-example'
---
::

::tip
Pase un objeto a la prop `shadow` para configurar el tamaño de desvanecimiento, por ejemplo,`:shadow="{ size: 48 }"`.
::

@@pH036@@Ejemplos

### As diseño de mampostería

Utilice el prop `virtualize` con las opciones `lanes`,`gap` y `estimateSize` para crear diseños de mampostería de estilo Pinterest con elementos de altura variable.

::component-example
---
Colapso: Verdad
Desconocido: true
Nombre: 'scroll-area-masonry-layout-example'
Categoría:! p-0
Opciones:
  - nombre: orientación
    Etiqueta: orientación
    por defecto: Vertical
    Items:
      @@pH043@@vertical
      @@444@hexagonal
  - nombre: líneas
    Tipo: Número
    Categoría: LANES
    por defecto: 3
  - nombre: brecha
    Tipo: Número
    Categoría: Gap
    por defecto: 16
---
::

::tip
Para un rendimiento óptimo, ajuste `estimateSize` cerca de la altura promedio del elemento. Aumentar `overscan` mejora la suavidad del desplazamiento, pero hace que los elementos estén más fuera de pantalla.
::

### Con carriles de respuesta

Puede usar los composables [`useWindowSize`](https://vueuse.org/core/useWindowSize/)(para visualización basada) o [`useElementSize`](https://vueuse.org/core/useElementSize/)(para contenedores) para hacer que el `lanes` sea reactivo.

::component-example
---
Colapso: Verdad
Desconocido: true
Nombre: 'scroll-area-responsive-lanes-example'
Categoría:! p-0
---
::

### Con elemento de desplazamiento externo: badge{label="4.10+" class="align-text-top"}

Pase una función `getScrollElement` en el prop `virtualize` para virtualizar contra un contenedor de desplazamiento antepasado en lugar de la propia ventana gráfica del componente. Establezca `scrollMargin` en el desplazamiento de la lista desde el inicio del elemento de desplazamiento (por ejemplo, la altura del contenido por encima de él).

::component-example
---
Categoría: true
Colapso: Verdad
Desconocido: true
Nombre: 'scroll-area-external-scroll-example'
Categoría:! p-0
Opciones:
  - nombre: orientación
    Etiqueta: orientación
    por defecto: Vertical
    items:
      @@pH067@vertical
      @@pH068@horizontal
---
::

::note
Debido a que el contenedor posee el desplazamiento, los botones de búsqueda y "Top" de la barra de herramientas lo desplazan directamente con `container.scrollTo`.
::

::caution
El `shadow` prop no tiene ningún efecto en este modo, ya que la raíz ya no posee el desplazamiento.
::

### Con desplazamiento programático.

Puede utilizar el `virtualizer` expuesto para controlar programáticamente la posición del desplazamiento.

::component-example
---
Colapso: Verdad
Desconocido: true
Nombre: 'scroll-area-scroll-to-example'
Categoría:! p-0
---
::

### Con desplazamiento infinito.

Puede utilizar el [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable para cargar más datos a medida que el usuario se desplaza.

::component-example
---
Categoría: true
Colapso: Verdad
Desconocido: true
Nombre del archivo: 'scroll-area-infinite-scroll-example'
Categoría:! p-0
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `server: false` para obtener datos en el cliente sin bloquear el renderizado inicial. El estado de carga comprueba el estado de `pending` y `idle` para mostrar un indicador de carga antes y durante la búsqueda. Las páginas adicionales se cargan a medida que el usuario se desplaza.
::

### Con ranura por defecto

Puede utilizar la ranura predeterminada sin la prop `items` para renderizar directamente el contenido desplazable personalizado.

::component-example
---
Nombre: 'scroll-area-default-slot-example'
Categoría:! p-0
---
::

@085

@866@8666

Componentes Props

@877@espanol

Componentes de slots

@@888@088@088@088

Componentes Emisiones

@089@@Exposicion

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
| @109 @@@ 109| @110 @@ 112 @| El elemento raíz del componente.|
| @@pH120 @|@114 @@@ 121 @| La instancia del virtualizador [TanStack Virtual](https://tanstack.com/virtual/latest/docs/api/virtualizer)(`undefined` si la virtualización está deshabilitada).|

@@2222@Proyecto

Componente Tema

@123@Changelog (Edición española)

Categoría: component-changelog
