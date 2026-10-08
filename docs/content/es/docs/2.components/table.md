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

@@pH000@@Uso del producto

El componente Table está construido sobre[TanStack Table v8](https://tanstack.com/table/v8)y está alimentado por el[useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable)componible para proporcionar una API flexible y totalmente segura para tipos .

Representa sus datos como filas y columnas y admite la clasificación , el filtrado , la paginación , la selección de filas , la expansión , la agrupación , la fijación y la virtualización , por lo que puede crear todo , desde una simple tabla de datos hasta una cuadrícula de datos con todas las funciones .

::component-example
---
fuente : FALSO
Nombre : ' table-ejemplo '
Categoría : ! p - 0
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="Ver código fuente"}
Este ejemplo muestra el caso de uso más común del componente`Table`. Echa un vistazo al código fuente en GitHub .
::

@111@datos

Utilice el prop`data`como una matriz de objetos , las columnas se generarán en función de las claves de los objetos .

::component-code
---
Categoría : true
Colapso : Verdad
Categoría : ! p - 0
Ignora :
  @@pH013@datos
  @@F014@clase
Externo :
  @@pH015@datos
Props :
  Datos :
    - id : ' 4600 ' (Edición española)
      Fecha : ' 2024 - 03 - 11T15 : 30 : 00 '
      Categoría : " Pagado "
      por correo electrónico : James Anderson@example.com'
      Cantidad : 594
    - id : ' 4599 ' (en español)
      Fecha : ' 2024 - 03 - 11T10 : 10 : 00 '
      Categoría : " Failed "
      Correo electrónico : ' mia . white@example.com'
      Cantidad : 276
    - id : ' 4598 ' (en español)
      Fecha : ' 2024 - 03 - 11T08 : 50 : 00 '
      Estado : " Reembolsado "
      por correo electrónico : ' william . brown@example.com'
      Cantidad : 315
    - id : ' 4597 ' (en español)
      Fecha : ' 2024 - 03 - 10T19 : 45 : 00 '
      Categoría : " Pagado "
      por correo electrónico : emma . davis@example.com'
      Cantidad : 529
    - id : ' 4596 ' (en español)
      Fecha : ' 2024 - 03 - 10T15 : 55 : 00 '
      Categoría : " Pagado "
      por correo electrónico : ' ethan . harris@example.com'
      Cantidad : 639
  Categoría : Flex - 1
---
::

@@21@columnas

Utilice el prop`columns`como una matriz de objetos[ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def)con propiedades como :

- `accessorKey`: [ La clave del objeto fila que se utilizará al extraer el valor de la columna . ]{class="text-muted"}
- `header`: [ El encabezado a mostrar para la columna . Si se pasa una cadena , se puede usar como valor predeterminado para el ID de columna . Si se pasa una función , se pasará un objeto props para el encabezado y debe devolver el valor de encabezado renderizado (el tipo exacto depende del adaptador que se esté utilizando) . ]{class="text-muted"}
- [`footer`](#with-column-footer): [ El pie de página que se mostrará para la columna .
- `cell`:[La celda para mostrar cada fila de la columna. Si se pasa una función, se pasará un objeto props para la celda y debe devolver el valor de celda renderizado (el tipo exacto depende del adaptador que se use).]{class="text-muted"}
- `meta`:[Propiedades adicionales para la columna.]{class="text-muted"}
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    - `td`:[Las clases que se aplican al elemento `td`.]{class="text-muted"}
    - `th`:[Las clases a aplicar al elemento `th`.]{class="text-muted"}
  @@
    - `td`:[El estilo a aplicar al elemento `td`.]{class="text-muted"}
    - `th`:[El estilo a aplicar al elemento `th`.]{class="text-muted"}
  - [`colspan`](#with-column-span)
    - `td`:[El atributo colspan se aplicará al elemento `td`.]{class="text-muted"}
  - [`rowspan`](#with-column-span)
    - `td`:[El atributo rowspan que se aplicará al elemento `td`.]{class="text-muted"}

Para renderizar componentes u otros elementos HTML, debe usar la función Vue [`h` dentro de los accesorios `header` y `cell`. Esto es diferente de otros componentes que usan ranuras, pero permite más flexibilidad.

::tip{to="#with-slots" aria-label="Columnas con slots"}
También puede usar ranuras para personalizar el encabezado y las celdas de datos de la tabla.
::

::component-example
---
Categoría: true
Colapso: Verdad
Categoría:! p-0
Nombre: 'table-columns-example'
Destacados:
  @@509@53
  @095 @ 108
---
::

::note
Al renderizar componentes con `h`, puede utilizar la función `resolveComponent` o importar desde `#components`.
::

@999 @@ Proyecto

Utilice el prop `meta` como un objeto ([TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta)) para pasar propiedades como:

@@@pH105
  - `tr`:[Las clases que se aplican al elemento `tr`.]{class="text-muted"}
@111@112 @
  - `tr`:[El estilo a aplicar al elemento `tr`.]{class="text-muted"}

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'table-meta-ejemplo'
Categoría:! p-0
Destacados:
  @117@127
  @118 @ 140
---
::

@@119@Cargando

Utilice el prop `loading` para mostrar un estado de carga, el prop `loading-color` para cambiar su color y el prop `loading-animation` para cambiar su animación.

::component-code
---
Categoría: true
Colapso: Verdad
Categoría:! p-0
Ignora:
  @123 @ datos
  @124 @ clase
Externo:
  @@pH125 @ información
Props:
  Carga: Verdad
  LoadingColor: primario
  Animación: Carusel
  Datos:
    - id : ' 4600 ' (Edición española)
      Fecha : ' 2024 - 03 - 11T15 : 30 : 00 '
      Categoría : " Pagado "
      por correo electrónico : James Anderson@example.com'
      Cantidad : 594
    - id : ' 4599 ' (en español)
      Fecha : ' 2024 - 03 - 11T10 : 10 : 00 '
      Categoría : " Failed "
      Correo electrónico : ' mia . white@example.com'
      Cantidad : 276
    - id : ' 4598 ' (en español)
      Fecha : ' 2024 - 03 - 11T08 : 50 : 00 '
      Estado : " Reembolsado "
      por correo electrónico : ' william . brown@example.com'
      Cantidad : 315
    - id : ' 4597 ' (en español)
      Fecha : ' 2024 - 03 - 10T19 : 45 : 00 '
      Categoría : " Pagado "
      por correo electrónico : emma . davis@example.com'
      Cantidad : 529
    - id : ' 4596 ' (en español)
      Fecha : ' 2024 - 03 - 10T15 : 55 : 00 '
      Categoría : " Pagados "
      por correo electrónico : ' ethan . harris@example.com'
      Cantidad : 639
  Categoría : flex - 1
---
::

::tip
La animación de carga se desactiva automáticamente cuando el usuario prefiere un movimiento reducido , la barra se muestra como un pulso de ancho completo en su lugar .
::

@131@@sticky

Utilice el prop`sticky`para hacer que el encabezado o pie de página sea pegajoso .

::component-code
---
Categoría : true
Colapso : Verdad
Categoría : ! p - 0
Ignora :
  @@pH133@información
  @134@clase
Externo :
  @@pH135@datos
items :
  Sticky :
    @@pH136@verdad
    @@F137@Falso
Props :
  Sticky : Verdad
  Datos :
    - id : ' 4600 ' (Edición española)
      Fecha : ' 2024 - 03 - 11T15 : 30 : 00 '
      Categoría : " Pagados "
      por correo electrónico : James Anderson@example.com'
      Cantidad : 594
    - id : ' 4599 ' (en español)
      Fecha : ' 2024 - 03 - 11T10 : 10 : 00 '
      Categoría : " Failed "
      Correo electrónico : ' mia . white@example.com'
      Cantidad : 276
    - id : ' 4598 ' (en español)
      Fecha : ' 2024 - 03 - 11T08 : 50 : 00 '
      Estado : " Reembolsado "
      por correo electrónico : ' william . brown@example.com'
      Cantidad : 315
    - id : ' 4597 ' (en español)
      Fecha : ' 2024 - 03 - 10T19 : 45 : 00 '
      Categoría : " Pagados "
      por correo electrónico : emma . davis@example.com'
      Cantidad : 529
    - id : ' 4596 ' (en español)
      Fecha : ' 2024 - 03 - 10T15 : 55 : 00 '
      Categoría : " Pagados "
      por correo electrónico : ' ethan . harris@example.com'
      Cantidad : 639
    - id : ' 4595 ' (en español)
      Fecha : ' 2024 - 03 - 10T15 : 55 : 00 '
      Categoría : " Pagados "
      por correo electrónico : ' ethan . harris@example.com'
      Cantidad : 639
    - id : ' 4594 ' (en español)
      Fecha : ' 2024 - 03 - 10T15 : 55 : 00 '
      Categoría : " Pagado "
      por correo electrónico : ' ethan . harris@example.com'
      Cantidad : 639
  clase : ' flex - 1 max-h - [ 312px ] '
---
::

## Ejemplos

### Con acciones en fila

Puede agregar una nueva columna que renderice un componente[DropdownMenu](/docs/components/dropdown-menu)dentro del`cell`para renderizar acciones de fila .

::component-example
---
Categoría : true
Colapso : Verdad
Nombre : ' table-row - actions-example '
Destacados :
  @152@115 años
  @153@141
Categoría : ! p - 0
---
::

### Con filas ampliables

Puede agregar una nueva columna que renderice un[Button](/docs/components/button)componente dentro del`cell`para alternar el estado expandible de una fila utilizando la Tabla TanStack[Expanding APIshttps://tanstack.com/table/v8/docs/api/features/expanding).

::caution
Es necesario definir la ranura`#expanded`para renderizar el contenido expandido que recibirá la fila como parámetro .
::

::component-example
---
Categoría : true
Colapso : Verdad
Nombre : ' table-row - expansionable-ejemplo '
Destacado :
  @165@165 años
  @166@166
Categoría : ! p - 0
---
::

::tip
Puede utilizar el prop `expanded` para controlar el estado expandible de las filas (puede enlazarse con `v-model`).
::

::note
También puede agregar esta acción al componente [`DropdownMenu`](/docs/components/dropdown-menu) dentro de la columna `actions`.
::

### Con filas agrupadas

Puede agrupar filas en función de un valor de columna dado y mostrar/ocultar subfilas a través de algún botón agregado a la celda utilizando la tabla TanStack [Agrupación APIs](https://tanstack.com/table/v8/docs/api/features/grouping).

#### Puntos importantes

* Añadir `grouping` prop con una matriz de identificadores de columna que desea agrupar por.
* Añadir `grouping-options` prop. Debe incluir `getGroupedRowModel`, puede importarlo desde `@tanstack/vue-table` o implementar el suyo.
* Expandir filas a través del método `row.toggleExpanded()` en cualquier celda de la fila. Tenga en cuenta que también conmuta la ranura `#expanded`.
* Use `aggregateFn` en la definición de columna para definir cómo agregar las filas.
El renderizador de * `agregatedCell` en la definición de columna solo funciona si no hay un renderizador de `cell`.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'table-grouped-rows-example'
Destacados:
  @195 @ 157
  @196@160
Categoría:! p-0
---
::

### Con fijación de fila: badge{label="4.6+" class="align-text-top"}

Puede agregar una columna que renderice un [Button](/docs/components/button) componente dentro del `cell` para alternar el estado de fijación de una fila usando la tabla TanStack [Row Pinning APIs](https://tanstack.com/table/v8/docs/api/features/row-pinning). Las filas ancladas permanecerán en la parte superior o inferior de la tabla independientemente de la clasificación o el filtrado.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre del archivo: 'table-row-pinning-example'
Desconocido: true
Destacado:
  @208@2019
  @209@109
  @210@160
  @111@165
  @212 @ 168
Categoría:! p-0
---
::

::tip
Puede utilizar el prop `row-pinning` para controlar el estado de fijación de las filas (se puede vincular con `v-model`).
::

### Con selección de fila

Puede agregar una nueva columna que represente un [Checkbox](/docs/components/checkbox) dentro del componente `header` y `cell` para seleccionar filas utilizando la Tabla TanStack [Row Selection APIs](https://tanstack.com/table/v8/docs/api/features/row-selection).

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'table-row-selection-example'
Destacados:
  @226@250
  @227 @ 227
Categoría:! p-0
---
::

::tip
Puede utilizar la prop `row-selection` para controlar el estado de selección de las filas (puede enlazarse con `v-model`).
::

### Con evento de selección de fila

Puede agregar un `@select` listener para hacer clic en las filas con o sin una columna de casilla de verificación.

::note
La función handler recibe la instancia `Event` y `TableRow` como el primer y segundo argumento, respectivamente.
::

::component-example
---
Categoría: true
Colapso: Verdad
Nombre del archivo: 'table-row-select-event-example'
Destacado:
  @234@125
  @235 @ 131
Categoría:! p-0
---
::

::tip
Puede utilizar esto para navegar a una página, abrir un modal o incluso para seleccionar la fila manualmente.
::

### Con evento del menú contextual fila

Puede agregar un `@contextmenu` listener para hacer clic derecho en las filas y envolver la tabla en un [ContextMenu](/docs/components/context-menu) componente para mostrar acciones de fila, por ejemplo.

::note
La función handler recibe la instancia `Event` y `TableRow` como el primer y segundo argumento, respectivamente.
::

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'table-row-context-menu-event-example'
Destacados:
  @244@134
  @245@175
Categoría:! p-0
---
::

### With evento de desplazamiento de fila

Puede agregar un `@hover` para hacer que las filas sean flotantes y usar un [Popover](/docs/components/popover) o un [Tooltip](/docs/components/tooltip) para mostrar los detalles de la fila, por ejemplo.

::note
La función handler recibe las instancias `Event` y `TableRow` como el primer y segundo argumento respectivamente.
::

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'table-row-hover-event-example'
Destacados:
  @258@129
  @259@152
Categoría:! p-0
---
::

::note
Este ejemplo es similar al Popover [con el siguiente ejemplo de cursor ](/docs/components/popover#with-following-cursor) y utiliza un [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) para evitar que el Popover se abra y cierre demasiado rápido al mover el cursor de una fila a otra.
::

### Con pie de columna

Puede agregar una propiedad `footer` a la definición de columna para representar un pie de página para la columna.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre del archivo: 'table-column-foote-example'
Destacado:
  @271@100
  @272@112
Categoría:! p-0
---
::

### Con amplitud de columna

Puede usar las propiedades `colspan` y `rowspan` de la columna `meta` para combinar celdas. Estas propiedades aceptan un valor estático o una función que recibe la celda y devuelve el valor de intervalo.

::note
Cuando se usa `rowspan`, las celdas que son "absorbidas" por el espacio de una fila anterior deben ocultarse visualmente. Use el meta `class` con una función que devuelva `'hidden'` para esas celdas.
::

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'table-column-span-example'
Categoría:! p-0
---
::

### Con clasificación de columnas

Puede actualizar una columna `header` para representar un [Button](/docs/components/button) componente dentro del `header` para alternar el estado de clasificación utilizando la tabla TanStack [Sorting APIs](https://tanstack.com/table/v8/docs/api/features/sorting).

Esto pone `aria-sort` en el `<th>` para que los lectores de pantalla puedan leer el estado de ordenación actual de la columna: `none`,`ascending` o `descending`. El `Button` mantiene el control que lo cambia.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'table-column-example'.
Destacado:
  @298@298
  @299 @ 106
Categoría:! p-0
---
::

::tip
Puede utilizar el prop `sorting` para controlar el estado de clasificación de las columnas (se puede enlazar con `v-model`).
::

También puede crear un componente reutilizable para hacer que cualquier encabezado de columna sea clasificable.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'table-column-sorting-reusable-example'
Destacados:
  @2011@115
  @303@166
Categoría:! p-0
---
::

::note
En este ejemplo, utilizamos una función para definir el encabezado de columna, pero también puede crear un componente real.
::

### Con fijación de columna

Puede actualizar una columna `header` para representar un [Button](/docs/components/button) componente dentro del `header` para alternar el estado de fijación utilizando la tabla TanStack [Column Pinning APIs](https://tanstack.com/table/v8/docs/api/features/column-pinning).

::note
Una columna anclada se convertirá en pegajosa en el lado izquierdo o derecho de la tabla. Cuando se utiliza la fijación de columnas, debe definir valores explícitos para las columnas para garantizar el manejo adecuado del ancho de columna, especialmente con múltiples columnas ancladas.
::

::component-example
---
Categoría: true
Colapso: Verdad
Desconocido: true
Nombre: 'table-column-pinning-example'
Destacados:
  @108 @ 108
  @126 @ 127
Categoría:! p-0 overflow-clip
---
::

::tip
Puede utilizar el prop `column-pinning` para controlar el estado de fijación de las columnas (se puede vincular con `v-model`).
::

### Con visibilidad de columna

Puede usar un componente [DropdownMenu](/docs/components/dropdown-menu) para alternar la visibilidad de las columnas utilizando la Tabla TanStack [Column Visibility APIs](https://tanstack.com/table/v8/docs/api/features/column-visibility).

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'table-column-visibilidad-ejemplo'
Destacado:
  @29@121
  @300@146
Categoría:! p-0
---
::

::tip
Puede utilizar el prop `column-visibility` para controlar el estado de visibilidad de las columnas (se puede enlazar con `v-model`).
::

### Con filtros de columna

Puede utilizar un componente [Input](/docs/components/input) para filtrar por columna las filas utilizando la Tabla TanStack [Column Filtring APIs](https://tanstack.com/table/v8/docs/api/features/column-filtering).

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'table-column-filters-example'
Destacados:
  @342 @ 123
  @343@124
Categoría:! p-0
---
::

::tip
Puede usar la prop `column-filters` para controlar el estado de los filtros de las columnas (se puede vincular con `v-model`).
::

### Con filtros globales

Puede utilizar un componente [Input](/docs/components/input) para filtrar las filas utilizando la tabla TanStack [Global Filtering APIs](https://tanstack.com/table/v8/docs/api/features/global-filtering).

::component-example
---
Categoría: true
Colapso: Verdad
Nombre del archivo: 'table-global-filter-example'
Categoría:! p-0
Destacados:
  @116 @ 115
---
::

::tip
Puede utilizar el prop `global-filter` para controlar el estado del filtro global (puede enlazarse con `v-model`).
::

### Con paginación

Puede utilizar un componente [Pagination](/docs/components/pagination) para controlar el estado de paginación utilizando el [Pagination APIs](https://tanstack.com/table/v8/docs/api/features/pagination).

Hay diferentes enfoques de paginación como se explica en [Pagination Guide](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide). En este ejemplo, utilizamos la paginación del lado del cliente, por lo que necesitamos pasar manualmente la función `getPaginationRowModel()`{lang="ts-type"}.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'table-paginación-ejemplo'
Categoría:! p-0
Destacado:
  @373@203
  @@2017 @ 2017
---
::

::tip
Puede utilizar el prop `pagination` para controlar el estado de paginación (puede enlazarse con `v-model`).
::

### Con datos recuperados

Puede obtener datos de una API y usarlos en la tabla.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre del archivo: 'table-fetch-example'
Destacado:
  @378 @ 15 años
  @@279@26
Categoría:! p-0
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `server: false` para obtener datos del cliente sin bloquear el renderizado inicial. El estado de carga comprueba el estado de `pending` y `idle` para mostrar un indicador de carga antes y durante la búsqueda.
::

### Con desplazamiento infinito

Si utiliza la paginación del lado del servidor, puede utilizar el [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll) componible para cargar más datos a medida que el usuario se desplaza.

::component-example
---
Categoría: true
Colapso: Verdad
Destacado:
  @390@70
  @391 @ 83
Desconocido: true
Nombre: 'table-infinite-scroll-example'
Categoría:! p-0
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `server: false` para obtener datos del cliente sin bloquear el renderizado inicial. El estado de carga comprueba el estado de `pending` y `idle` para mostrar un indicador de carga antes y durante la búsqueda. Las páginas adicionales se cargan a medida que el usuario se desplaza.
::

### Con arrastrar y soltar

Puede utilizar el [`useSortable`](https://vueuse.org/integrations/useSortable/) componible de [](https://vueuse.org/integrations/README.html) para habilitar la funcionalidad de arrastrar y soltar en la tabla. para proporcionar una experiencia de arrastrar y soltar sin problemas.

::note
Dado que la referencia de tabla no expone el elemento tbody, agregue una clase única a través de la prop `:ui` para dirigirlo con `useSortable`(por ejemplo,`:ui="{ tbody: 'my-table-tbody' }"`).
::

::component-example
---
Categoría: true
Colapso: Verdad
Destacados:
  @414 @ 81
  @415@84
Nombre: 'table-drag-and-drop-example'
Categoría:! p-0
---
::

### Con virtualización: badge{label="4.1+" class="align-text-top"}

Utilice el prop `virtualize` para habilitar la virtualización de grandes conjuntos de datos como un booleano o un objeto con opciones como `{ estimateSize: 65, overscan: 12 }`. También puede pasar otras opciones virtuales [](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options) para personalizar el comportamiento de virtualización. para mantener visible el encabezado o el pie de página mientras se desplaza por grandes conjuntos de datos.

::warning
Fijación de filas no es compatible cuando la virtualización está habilitada.
::

::component-example
---
Categoría: true
Colapso: Verdad
Desconocido: true
Nombre del archivo: 'table-virtualize-example'
Categoría:! p-0
---
::

::note
Se requiere una restricción de altura en la tabla para que la virtualización funcione correctamente (por ejemplo,`class="h-[400px]"`).
::

### Con el elemento de desplazamiento externo: badge{label="4.10+" class="align-text-top"}

Pase una función `getScrollElement` en el prop `virtualize` para virtualizar contra un contenedor de desplazamiento antepasado en lugar de la propia raíz de la tabla. Establezca `scrollMargin` al desplazamiento de la tabla desde el inicio del elemento de desplazamiento (por ejemplo, la altura del contenido por encima de él), por lo que un encabezado y el cuerpo de la tabla comparten una sola barra de desplazamiento.

::component-example
---
Categoría: true
Colapso: Verdad
Desconocido: true
Nombre: 'table-external-scroll-example'
Categoría:! p-0
---
::

::note
En este modo, la raíz de la tabla `overflow` es `visible` y el contenedor externo posee desplazamiento en ambos ejes, así que dale `overflow-auto`(no solo `overflow-y-auto`) para mantener tablas anchas horizontalmente desplazables.
::

### Con datos de árbol

Puede utilizar la prop `get-sub-rows` para mostrar datos jerárquicos (árbol) en la tabla.
Por ejemplo, si los objetos de datos tienen una matriz `children`, establezca `:get-sub-rows="row => row.children"` para habilitar filas expandibles.

::component-example
---
Categoría: true
Colapso: Verdad
Destacados:
  @441 @ 175
Nombre del archivo: 'table-tree-data-example'
Categoría:! p-0
---
::

### Con ranuras

Puede usar ranuras para personalizar el encabezado y las celdas de datos de la tabla.

Utilice la ranura `#<column>-header` para personalizar el encabezado de una columna. Tendrá acceso a las propiedades `column`,`header` y `table` en el ámbito de la ranura.

Utilice la ranura `#<column>-cell` para personalizar la celda de una columna. Tendrá acceso a las propiedades `cell`,`column`,`getValue`,`renderValue`,`row` y `table` en el ámbito de la ranura.

::component-example
---
Categoría: true
Colapso: Verdad
Nombre: 'table-slots-example'
Categoría:! p-0
---
::

@454

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<table>`.
::

@457@espanol

Componentes de slots

@458@@Exposicion

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
| @@pH473 @|@474 @@ 476 @|
| @@pH477 @@@ pH483 @|@@@@@@@@@PH488{lang="ts-type"}https://tanstack.com/table/v8/docs/api/core/table#table-api)|

@485@@Proyecto

Componente Tema

@486@Changelog en Español

Categoría: component-changelog
