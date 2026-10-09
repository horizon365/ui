---
description: Un elemento de tabla sensible para mostrar datos en filas y columnas.
category: data
keywords:
  - data table
  - datagrid
  - data grid
links:
  - label: Tablero de Tanstack
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/table/v8
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Table.vue
---

xph0000xUso

El componente Table está construido sobre la tabla [TanStack Table v8](https://tanstack.com/table/v8) y está alimentado por el componente componible [useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable) para proporcionar una API flexible y totalmente segura para tipos.

Representa sus datos como filas y columnas y admite la clasificación, el filtrado, la paginación, la selección de filas, la expansión, la agrupación, la fijación y la virtualización, por lo que puede crear todo, desde una simple tabla de datos hasta una cuadrícula de datos con todas las funciones.

::component-example
---
source: false
name: 'table-example'
class: '!p-0'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="Ver código fuente"}
Este ejemplo muestra el caso de uso más común del componente `Table`. Echa un vistazo al código fuente en GitHub.
::

### Información

Utilice el prop `data` como una matriz de objetos, las columnas se generarán en función de las claves de los objetos.

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1'
---
::

### columnas

Utilice el prop `columns` como una matriz de objetos [ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def) con propiedades como:

- `accessorKey`:[La clave del objeto fila que se utilizará al extraer el valor de la columna.] {class="text-muted"}
- x`header`:[El encabezado a mostrar para la columna. Si se pasa una cadena, se puede usar como valor predeterminado para el ID de columna. Si se pasa una función, se pasará un objeto props para el encabezado y debe devolver el valor de encabezado renderizado (el tipo exacto depende del adaptador que se esté utilizando).] {class="text-muted"}
- [x`footer`](#with-column-footer):[El pie de página que se mostrará para la columna. Funciona exactamente como el encabezado, pero se muestra debajo de la tabla.] {class="text-muted"}
- x`cell`: Si se pasa una función, se pasará un objeto props para la celda y debería devolver el valor de celda renderizado (el tipo exacto depende del adaptador que se use).] {class="text-muted"}
- `meta`:[Propiedades adicionales para la columna.] {class="text-muted"}
  - `class`:
    - `td`:[Las clases a aplicar al elemento `td`.] {class="text-muted"}
    - `th`:[Las clases a aplicar al elemento `th`.] {class="text-muted"}
  - x`style`:
    - `td`:[El estilo a aplicar al elemento `td`.] {class="text-muted"}
    - `th`:[El estilo a aplicar al elemento `th`.] {class="text-muted"}
  - x[`colspan`x](#with-column-spanx)
    - `td`:[El atributo colspan que se aplicará al elemento `td`.] {class="text-muted"}
  - [x`rowspan`x](x#with-column-spanx):
    - `td`:[El atributo rowspan que se aplicará al elemento `td`.] {class="text-muted"}

Para renderizar componentes u otros elementos HTML, debe usar la función Vue [`h`](https://vuejs.org/api/render-function.html#h) dentro de los accesorios `header` y `cell`.

::tip{to="#with-slots" aria-label="Columnas con slots"}
También puede usar ranuras para personalizar el encabezado y las celdas de datos de la tabla.
::

::component-example
---
prettier: true
collapse: true
class: '!p-0'
name: 'table-columns-example'
highlights:
  - 53
  - 108
---
::

::note
Al renderizar componentes con `h`, puede utilizar la función `resolveComponent` o importar desde `#components`.
::

### Meta

Utilice el prop `meta` como un objeto ([TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta)) para pasar propiedades como:

- x`class`:
  - `tr`:[Las clases a aplicar al elemento `tr`.] {class="text-muted"}
- x`style`:
  - `tr`:[El estilo a aplicar al elemento `tr`.] {class="text-muted"}

::component-example
---
prettier: true
collapse: true
name: 'table-meta-example'
class: '!p-0'
highlights:
  - 128
  - 140
---
::

### Cargando

Utilice el prop `loading` para mostrar un estado de carga, el prop `loading-color` para cambiar su color y el prop `loading-animation` para cambiar su animación.

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  loading: true
  loadingColor: primary
  loadingAnimation: carousel
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1'
---
::

::tip
La animación de carga se desactiva automáticamente cuando el usuario prefiere un movimiento reducido, la barra se muestra como un pulso de ancho completo en su lugar.
::

### Sticky

Utilice el accesorio `sticky` para hacer que el encabezado o pie de página se pegue.

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
items:
  sticky:
    - true
    - false
props:
  sticky: true
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
    - id: '4595'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
    - id: '4594'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1 max-h-[312px]'
---
::

## Ejemplos

### Con acciones de fila

Puede agregar una nueva columna que renderice un componente [DropdownMenu](/docs/components/dropdown-menu) dentro del `cell` para renderizar acciones de fila.

::component-example
---
prettier: true
collapse: true
name: 'table-row-actions-example'
highlights:
  - 115
  - 141
class: '!p-0'
---
::

### Con filas ampliables

Puede agregar una nueva columna que renderice un componente [Button](/docs/components/button) dentro del `cell` para alternar el estado expandible de una fila utilizando la tabla TanStack [Expanding APIs](xph292).

::caution
Es necesario definir la ranura `#expanded` para renderizar el contenido expandido que recibirá la fila como parámetro.
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-expandable-example'
highlights:
  - 55
  - 72
class: '!p-0'
---
::

::tip
Puede usar el prop `expanded` para controlar el estado expandible de las filas (se puede vincular con `v-model`).
::

::note
También puede agregar esta acción al componente [`DropdownMenu`](/docs/components/dropdown-menu) dentro de la columna `actions`.
::

### Con filas agrupadas

Puede agrupar filas en función de un valor de columna dado y mostrar/ocultar subfilas a través de algún botón agregado a la celda utilizando la tabla de TanStack [Grouping APIs](https://tanstack.com/table/v8/docs/api/features/grouping).

####  Partes importantes

* Añadir prop `grouping` con una matriz de identificadores de columna que desea agrupar por.
Debe incluir `getGroupedRowModel`, puede importarlo desde `@tanstack/vue-table` o implementar el suyo propio.
* Expandir filas a través del método `row.toggleExpanded()` en cualquier celda de la fila. Tenga en cuenta que también alterna la ranura `#expanded`.
* Use `aggregateFn` en definición de columna para definir cómo agregar las filas.
El renderizador * `agregatedCell` en la definición de columna solo funciona si no hay un renderizador `cell`.

::component-example
---
prettier: true
collapse: true
name: 'table-grouped-rows-example'
highlights:
  - 157
  - 160
class: '!p-0'
---
::

### Con fijación de filas: badge{label="4.6+" class="align-text-top"}

Puede agregar una columna que renderice un componente [Button](/docs/components/button) dentro del `cell` para alternar el estado de fijación de una fila utilizando la tabla TanStack [Row Pinning APIs](xph350).

::component-example
---
prettier: true
collapse: true
name: 'table-row-pinning-example'
overflowHidden: true
highlights:
  - 91
  - 107
  - 160
  - 165
  - 168
class: '!p-0'
---
::

::tip
Puede utilizar el prop `row-pinning` para controlar el estado de fijación de las filas (se puede vincular con `v-model`).
::

### Con selección de filas

Puede agregar una nueva columna que renderice un componente [Checkbox](/docs/components/checkbox) dentro de los `header` y `cell` para seleccionar filas utilizando la tabla TanStack [Row Selection APIs](xph376).

::component-example
---
prettier: true
collapse: true
name: 'table-row-selection-example'
highlights:
  - 55
  - 72
class: '!p-0'
---
::

::tip
Puede usar el prop `row-selection` para controlar el estado de selección de las filas (puede vincularse con `v-model`).
::

### With selección de fila

Puede agregar un oyente `@select` para hacer clic en las filas con o sin una columna de casilla de verificación.

::note
La función handler recibe la instancia `Event` y `TableRow` como el primer y segundo argumento, respectivamente.
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-select-event-example'
highlights:
  - 124
  - 131
class: '!p-0'
---
::

::tip
Puede utilizar esto para navegar a una página, abrir un modal o incluso para seleccionar la fila manualmente.
::

### With row del menú contextual

Puede agregar un oyente `@contextmenu` para hacer clic derecho en las filas y envolver la tabla en un componente [ContextMenu](/docs/components/context-menu) para mostrar acciones de fila, por ejemplo.

::note
La función handler recibe la instancia `Event` y `TableRow` como el primer y segundo argumento, respectivamente.
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-context-menu-event-example'
highlights:
  - 133
  - 173
class: '!p-0'
---
::

### With row hover evento

Puede agregar un oyente `@hover` para hacer que las filas se puedan mover y usar un componente [Popover](/docs/components/popover) o un componente [Tooltip](/docs/components/tooltip) para mostrar los detalles de la fila, por ejemplo.

::note
La función handler recibe la instancia `Event` y `TableRow` como el primer y segundo argumento, respectivamente.
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-hover-event-example'
highlights:
  - 129
  - 152
class: '!p-0'
---
::

::note
Este ejemplo es similar al Popover [ con el siguiente cursor example](/docs/components/popover#with-following-cursor) y utiliza un [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) para evitar que el Popover se abra y cierre demasiado rápido al mover el cursor de una fila a otra.
::

### Con pie de columna.

Puede agregar una propiedad `footer` a la definición de columna para representar un pie de página para la columna.

::component-example
---
prettier: true
collapse: true
name: 'table-column-footer-example'
highlights:
  - 100
  - 112
class: '!p-0'
---
::

### With column span (en español)

Puede usar las propiedades `colspan` y `rowspan` de la columna `meta` para combinar celdas. Estas propiedades aceptan un valor estático o una función que recibe la celda y devuelve el valor de intervalo.

::note
Cuando se usa `rowspan`, las celdas que son "absorbidas" por el espacio de una fila anterior deben ocultarse visualmente. Use el meta `class` con una función que devuelva `'hidden'` para esas celdas.
::

::component-example
---
prettier: true
collapse: true
name: 'table-column-span-example'
class: '!p-0'
---
::

### Con ordenación de columnas

Puede actualizar una columna `header` para representar un componente [Button](/docs/components/button) dentro del `header` para alternar el estado de clasificación utilizando la tabla de TanStack [Sorting APIs](xph482).

Esto coloca `aria-sort` en el `<th>` para que los lectores de pantalla puedan leer el estado de clasificación actual de la columna: `none`, `ascending` o `descending`.

::component-example
---
prettier: true
collapse: true
name: 'table-column-sorting-example'
highlights:
  - 90
  - 106
class: '!p-0'
---
::

::tip
Puede utilizar el soporte `sorting` para controlar el estado de clasificación de las columnas (se puede vincular con `v-model`).
::

También puede crear un componente reutilizable para hacer que cualquier encabezado de columna sea clasificable.

::component-example
---
prettier: true
collapse: true
name: 'table-column-sorting-reusable-example'
highlights:
  - 115
  - 166
class: '!p-0'
---
::

::note
En este ejemplo, utilizamos una función para definir el encabezado de columna, pero también puede crear un componente real.
::

### Con fijación de columna

Puede actualizar una columna `header` para representar un componente [Button](/docs/components/button) dentro del `header` para alternar el estado de fijación utilizando la tabla TanStack [Column Pinning APIs](xph520).

::note
Cuando se utiliza la fijación de columnas, debe definir valores `size` explícitos para sus columnas para garantizar un manejo adecuado del ancho de columna, especialmente con varias columnas ancladas.
::

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-column-pinning-example'
highlights:
  - 108
  - 126
class: '!p-0 overflow-clip'
---
::

::tip
Puede utilizar el soporte `column-pinning` para controlar el estado de fijación de las columnas (se puede vincular con `v-model`).
::

### Con visibilidad de columna

Puede utilizar un componente [DropdownMenu](/docs/components/dropdown-menu) para alternar la visibilidad de las columnas utilizando la tabla TanStack [Column Visibility APIs](xph542).

::component-example
---
prettier: true
collapse: true
name: 'table-column-visibility-example'
highlights:
  - 121
  - 146
class: '!p-0'
---
::

::tip
Puede utilizar el soporte `column-visibility` para controlar el estado de visibilidad de las columnas (se puede vincular con `v-model`).
::

### Con filtros de columna

Puede usar un componente [Input](/docs/components/input) para filtrar las filas por columna utilizando el Filtrado de columnas de la tabla TanStack [Column APIs](xph562).

::component-example
---
prettier: true
collapse: true
name: 'table-column-filters-example'
highlights:
  - 123
  - 128
class: '!p-0'
---
::

::tip
Puede usar el prop `column-filters` para controlar el estado de los filtros de las columnas (se puede vincular con `v-model`).
::

### Con filtro global

Puede utilizar un componente [Input](/docs/components/input) para filtrar las filas utilizando la tabla TanStack [Global Filtering APIs](https://tanstack.com/table/v8/docs/api/features/global-filtering).

::component-example
---
prettier: true
collapse: true
name: 'table-global-filter-example'
class: '!p-0'
highlights:
  - 116
---
::

::tip
Puede usar el accesorio `global-filter` para controlar el estado del filtro global (puede vincularse con `v-model`).
::

### Con paginación

Puede utilizar un componente [Pagination](/docs/components/pagination) para controlar el estado de paginación mediante el APIs](https://tanstack.com/table/v8/docs/api/features/pagination) de [Pagination.

Hay diferentes enfoques de paginación como se explica en la Guía de paginación ](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide). En este ejemplo, utilizamos la paginación del lado del cliente, por lo que necesitamos pasar manualmente la función `getPaginationRowModel()`{lang="ts-type"}.

::component-example
---
prettier: true
collapse: true
name: 'table-pagination-example'
class: '!p-0'
highlights:
  - 204
  - 209
---
::

::tip
Puede usar el prop `pagination` para controlar el estado de paginación (puede vincularse con `v-model`).
::

### Con datos recuperados

Puede obtener datos de una API y usarlos en la tabla.

::component-example
---
prettier: true
collapse: true
name: 'table-fetch-example'
highlights:
  - 15
  - 26
class: '!p-0'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `server: false` para obtener datos en el cliente sin bloquear el renderizado inicial. El estado de carga comprueba el estado de `pending` y `idle` para mostrar un indicador de carga antes y durante la extracción.
::

### Con desplazamiento infinito.

Si utiliza la paginación del lado del servidor, puede utilizar el composable [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll) para cargar más datos a medida que el usuario se desplaza.

::component-example
---
prettier: true
collapse: true
highlights:
  - 72
  - 83
overflowHidden: true
name: 'table-infinite-scroll-example'
class: '!p-0'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `server: false` para obtener datos en el cliente sin bloquear el renderizado inicial. El estado de carga comprueba el estado de `pending` y `idle` para mostrar un indicador de carga antes y durante la extracción.
::

### Con arrastrar y soltar

Puede utilizar el composable [`useSortable`](https://vueuse.org/integrations/useSortable/) de [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) para habilitar la funcionalidad de arrastrar y soltar en la tabla. Esta integración envuelve [Sortable.js](xph6667x) para proporcionar una experiencia de arrastrar y soltar sin problemas.

::note
Dado que la referencia de tabla no expone el elemento tbody, agregue una clase única a través del prop `:ui` para dirigirlo con `useSortable` (por ejemplo, `:ui="{ tbody: 'my-table-tbody' }"`).
::

::component-example
---
prettier: true
collapse: true
highlights:
  - 81
  - 83
name: 'table-drag-and-drop-example'
class: '!p-0'
---
::

### Con virtualización: badge{label="4.1+" class="align-text-top"}

Utilice el prop `virtualize` para habilitar la virtualización de grandes conjuntos de datos como un booleano o un objeto con opciones como `{ estimateSize: 65, overscan: 12 }`. También puede pasar otras opciones [TanStack Virtual ](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options) para personalizar el comportamiento de virtualización. El prop `sticky` funciona en combinación con `virtualize` para mantener el encabezado o pie de página visible mientras se desplaza por grandes conjuntos de datos.

::warning
Fijación de filas no es compatible cuando la virtualización está habilitada.
::

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-virtualize-example'
class: '!p-0'
---
::

::note
Se requiere una restricción de altura en la tabla para que la virtualización funcione correctamente (por ejemplo, `class="h-[400px]"`).
::

### Con elemento de desplazamiento externo: badge{label="4.10+" class="align-text-top"}

Pase una función `getScrollElement` en el prop `virtualize` para virtualizar contra un contenedor de desplazamiento antepasado en lugar de la propia raíz de la tabla. Establezca `scrollMargin` al desplazamiento de la tabla desde el inicio del elemento de desplazamiento (por ejemplo, la altura del contenido sobre él), por lo que un encabezado y el cuerpo de la tabla comparten una sola barra de desplazamiento.

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-external-scroll-example'
class: '!p-0'
---
::

::note
En este modo, el `overflow` de la raíz de la tabla es `visible` y el contenedor externo posee desplazamiento en ambos ejes, así que dale `overflow-auto` (no solo `overflow-y-auto`) para mantener tablas anchas desplazables horizontalmente.
::

### Con árbol de datos

Puede usar el prop `get-sub-rows` para mostrar datos jerárquicos (árbol) en la tabla.
Por ejemplo, si los objetos de datos tienen una matriz `children`, configure `:get-sub-rows="row => row.children"` para habilitar filas expandibles.

::component-example
---
prettier: true
collapse: true
highlights:
  - 175
name: 'table-tree-data-example'
class: '!p-0'
---
::

### con ranuras

Puede usar ranuras para personalizar el encabezado y las celdas de datos de la tabla.

Utilice la ranura `#<column>-header` para personalizar el encabezado de una columna. Tendrá acceso a las propiedades `column`, `header` y `table` en el ámbito de la ranura.

Utilice la ranura `#<column>-cell` para personalizar la celda de una columna. Tendrá acceso a las propiedades `cell`, `column`, `getValue`, `renderValue`, `row` y `table` en el ámbito de ranura.

::component-example
---
prettier: true
collapse: true
name: 'table-slots-example'
class: '!p-0'
---
::

## API (Edición española)

### Props (accesorios)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<table>`.
::

### Slots

:component-slots

### Expose

Puede acceder a la instancia de componente escrito utilizando [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const table = useTemplateRef('table')
</script>

<template>
  <UTable ref="table" />
</template>
```

Esto le dará acceso a lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `tableRef`x{lang="ts-type"}| `Ref<HTMLTableElement \| null>`x{lang="ts-type"} (Edición española)|
| `tableApi`x{lang="ts-type"} (Edición española)| xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
