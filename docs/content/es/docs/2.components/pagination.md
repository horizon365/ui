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

@@pH000@@Uso del producto

Utilice la directiva `default-page` o la directiva `v-model:page` para controlar la página actual.

::component-code
---
Externo:
  @@pH003@página
El modelo:
  @@pH004@página
Ignora:
  @005@página
  @0006@total
Props:
  Páginas: 5
  Total: 100 millones
---
::

::note
El componente de paginación utiliza algunos [`Button`](/docs/components/button) para mostrar las páginas, utilice [`color`](#color),[`variant`](#variant) y [`size`](#size) para el estilo de ellos.
::

@27@@Total

Utilice el prop `total` para establecer el número total de elementos en la lista.

::component-code
---
Externo:
  @29@página
El modelo:
  @@pH030@página
Props:
  Páginas: 5
  Total: 100 millones
---
::

### Artículos por página

Utilice el prop `items-per-page` para establecer el número de elementos por página. Predeterminados a `10`.

::component-code
---
Ignora:
  @@pH034@página
Externo:
  @35@página
modelo:
  @36@página
Props:
  Páginas: 5
  Artículos: 20
  Total: 100 millones
---
::

### Conteo de hermanos

Utilice el prop `sibling-count` para establecer el número de hermanos a mostrar. Predeterminados a `2`.

::component-code
---
Ignora:
  @@pH040@página
  @41@@total
Externo:
  @@2004@página
modelo:
  @@pH043@página
Props:
  Páginas: 5
  SiblesConteo: 1
  Total: 100 millones
---
::

### Show Edges (Edición española)

Utilice el prop `show-edges` para mostrar siempre los puntos suspensivos, la primera y la última página.

::component-code
---
Ignora:
  @47@página
  @48@@total
Externo:
  @49@página
modelo:
  @@pH050@página
Props:
  Páginas: 5
  Espectáculos: True
  SiblesConteo: 1
  Total: 100 millones
---
::

### Mostrar controles

Utilice el prop `show-controls` para mostrar los botones primero, anterior, siguiente y último.

::component-code
---
Ignora:
  @@pH054@página
  @@500@@total
Externo:
  @@pH056@página
modelo:
  @@pH057@página
Props:
  Páginas: 5
  Espectáculos: Falso
  Espectáculos: True
  Total: 100 millones
---
::

@588@color

Utilice la prop `color` para establecer el color de los controles inactivos. Predeterminados a `neutral`.

::component-code
---
Ignora:
  @@pH061@página
  @62@@total
Externo:
  @@pH063@página
modelo:
  @@pH064@página
items:
  Color:
    - primary
    @@pH066@secondary
    @@pH067@éxito
    @@pH068@información
    @@pH069@advertencia
    @@F070@error
    @@71@neutralización
Props:
  Páginas: 5
  Color: Primario
  Total: 100 millones
---
::

@@2007@Variación

Utilice la prop `variant` para establecer la variante de los controles inactivos. Predeterminados a `outline`.

::component-code
---
Ignora:
  @75@página
  @76@@total
Externo:
  @777@página
El modelo:
  @78@página
items:
  Color:
    @79@primary
    @080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @081@El éxito
    @@2008@info
    @083@Advertencia
    @@84@@error
    @@85000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  Variante:
    @@pH086@@sólido
    @@877@espanol
    @8888@espanol
    @899@subtil
    @ghost0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @091 @ enlace
Props:
  Páginas: 5
  Color: Neutral
  Variación: Sutil
  Total: 100 millones
---
::

### Color activo

Utilice el prop `active-color` para establecer el color del control activo. Predeterminados a `primary`.

::component-code
---
Ignora:
  @095 @ página
  @@pH096@@total
Externo:
  @@pH097@página
modelo:
  @098@página
Items:
  Activo:
    @099@primary
    @@pH100@secondary
    @@101@éxito
    @2010@info
    @@pH103@advertencia
    @@F104@error
    @500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Páginas: 5
  Activity: Neutral
  Total: 100 millones
---
::

### Variante Activa

Utilice el prop `active-variant` para establecer la variante del control activo. Predeterminados a `solid`.

::component-code
---
Ignora:
  @@P109 @ página
  @100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @111 @ página
modelo:
  @112 @ página
items:
  Activo:
    @113@primary
    @@114@114 años
    @115@éxito
    @@116@información
    @117@Advertencia
    @@118@error
    @119 @ Neutral
  Activación:
    @@ph120@solido
    @121@espanol
    @20122@deputy
    @123@@subtil
    @ghost 124 @
    @125 @ enlace
Props:
  Páginas: 5
  Activo: Primario
  Actividad: Subtil
  Total: 100 millones
---
::

@126 @@ Tamaño

Utilice la prop `size` para establecer el tamaño de los controles. Predeterminados a `md`.

::component-code
---
Ignora:
  @129 @ página
  @130@@Total en Español
Externo:
  @131 @ página
modelo:
  @232@página
items:
  Tamaño:
    @@333@xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    @134
    @@135 @
    @136
    @137@xl
Props:
  Páginas: 5
  Tamaño: xl
  Total: 100 millones
---
::

### Desactivado

Utilice el prop `disabled` para desactivar los controles de paginación.

::component-code
---
Ignora:
  @@pH140@página
  @141 @ total
Externo:
  @242 @ página
modelo:
  @@pH143@página
Props:
  Páginas: 5
  Total: 100 millones
  Discapacitados: Verdadero
---
::

@@ph144@Ejemplos

### Con los enlaces

Utilice el prop `to` para transformar botones en enlaces. Pase una función que recibe el número de página y devuelve un destino de ruta.

::component-example
---
Nombre: 'paginación-enlaces-ejemplo'
---
::

::note
En este ejemplo, estamos agregando el hash `#with-links` para evitar ir a la parte superior de la página.
::

@P148 @

@149@149

Componentes Props

@150000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@151@@Emisiones

Componentes Emisiones

@152 @@ Proyecto

Componente Tema

@1500@Changelog

Categoría: component-changelog
