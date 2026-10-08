---
title: Inputación
description: Autocompletar con sugerencias en tiempo real.
category: form
keywords:
  - combobox
  - typeahead
  - autosuggest
links:
  - label: El combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: Autocompletado
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/autocomplete
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputMenu.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor del InputMenu o la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Categoría: true
Ignora:
  - modelValue (Edición española)
  @@pH004@artículos
Externo:
  @@0005@artículos
  - modelValoríaModelación
Props:
  Archivo de la etiqueta: 'Backlog'
  items:
    @070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @008@todo
    @000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
---
::

::tip
Utilice esto sobre un `Input`](/docs/components/input) para aprovechar el [`Combobox`](https://reka-ui.com/docs/components/combobox) de Reka UI que ofrece capacidades de autocompletado.
::

::note
Este componente es similar al [`SelectMenu`](/docs/components/select-menu) pero está usando una entrada en lugar de una selección.
::

@@26000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice la prop `items` como una matriz de cadenas, números o booleanos:

::component-code
---
Categoría: true
Ignora:
  @@2008@modelValoración
  @@29@artículos
Externo:
  @@pH030@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Items:
    @32@32@32@32@32@32@32@32@32@32@332@32@32@32@332@332@32@332@32@332@332@32@32@332@32@332@332@332@3332@333333333333333332@333332@3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    @@33@todo
    - En proceso
    @@350@@Apuesta
---
::

También puede pasar una matriz de objetos con las siguientes propiedades:

@@
@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
@@
@@ph070@@@ph071@@@ph072
@@
@@ph076 @@@@ph077

::component-code
---
Ignora:
  - modelValue.label
  @080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @081 @ artículos
  @@P082@modelValue (Edición española)
Externalidades:
  @@883@@InputMenuItem (en inglés)
Props:
  Modelación:
    Etiqueta: "Todo"
  Items:
    - label:'Lista de pedidos'
    - label:"Todo"
    - label:"En proceso"
    - label:"Hecho"
---
::

También puede pasar un array de arrays al prop `items` para mostrar grupos separados de elementos.

::component-code
---
Categoría: true
Ignora:
  @@pH089@modelValue (Edición española)
  @090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @091@artículos
  @@P092@modelValue (Edición española)
Props:
  Categoría:"Apple"
  items:
    - -Nueva York
      @@pH094@@banana
      @@pH095@@blueberry
      @@pH096@@espanol
      @@pH097@piñones
    - -La berenjena
      @099@@broccoli
      @@P100@Carotón
      @101@@F101
      @2010@leek
---
::

### Clave de valor

Puede optar por vincular una sola propiedad del objeto en lugar de todo el objeto utilizando la prop.`value-key`.

::component-code
---
Colapso: Verdad
Ignora:
  @@pH106@modelValue (Edición española)
  @107@ValueKey
  @108@artículos
Externo:
  @109 @ artículos
  - modelValue (Edición española)
Externalidades:
  @111@1111@11111@1111111@11111111@11111111@1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
Props:
  Valoración:'todo'
  ValueKey: 'id'
  Items:
    - label:'Lista de pedidos'
      Nombre: Backlog
    - label:'Todo'(en español)
      Nombre: "Todo"
    - label:"En proceso"
      id: 'en_progreso'
    - label:"Hecho"
      Nombre: "Hecho"
---
::

::tip
Utilice la prop `by` para comparar objetos por un campo en lugar de referencia cuando el `model-value` es un objeto.
::

@118@118

Utilice el prop `multiple` para permitir múltiples selecciones, los elementos seleccionados se mostrarán como etiquetas.

::component-code
---
Categoría: true
Ignora:
  - modelValue (Edición española)
  @121@artículos
  @@222@multiples
Externo:
  @123@artículos
  - modelValue (Edición española)
Props:
  Modelación:
    @125@@Pingback
    @126 @ todo
  Multiplicación: True
  items:
    @127@2012
    @128 @ todo
    @129 @ En proceso
    @130
---
::

::caution
Asegúrese de pasar un array a la directiva `default-value` o a la directiva `v-model`.
::

### Delete Icon (Edición española)

Con `multiple`, utilice el prop `delete-icon` para personalizar la eliminación [Icon](/docs/components/icon) en las etiquetas.

::component-code
---
Categoría: true
Ignora:
  @141@141@141
  @242@puntos
  @143@@multiples
Externo:
  @444@puntos
  - modelValue (Edición española)
Props:
  Modelación:
    @@146@146@146
    @147 @ todo
  Multiplicación: True
  Archivo de la etiqueta: i-lucide-trash
  items:
    @148@148@148
    @149 @ todo
    - En proceso
    @151
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

### Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
Categoría: true
Ignora:
  @158@artículos
Externo:
  @159 @ artículos
Props:
  marcador de posición:'Select status'
  items:
    @160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @161 @ todo
    - En proceso
    @163 @
---
::

### Modo: badge{label="4.8+" class="align-text-top"}

Establezca el prop `mode` en `autocomplete` para convertir el InputMenu en una entrada de texto de forma libre con sugerencias. El `modelValue` se convierte en el texto de entrada (`string`) en lugar de un elemento seleccionado.

::component-example
---
Nombre: 'input-menu-mode-ejemplo'
---
::

::caution
Cuando `mode` es `autocomplete`,`multiple`,`by`,`resetSearchTermOnSelect` y `resetModelValueOnClear` no son aplicables.
::

::tip
Utilice el prop `content.hideWhenEmpty` para ocultar el menú cuando no haya sugerencias coincidentes.
::

@177 @ Contenido

Utilice el prop `content` para controlar cómo se representa el contenido de InputMenu, como su `align` o `side`, por ejemplo.

::component-code
---
Categoría: true
Ignora:
  @181@artículos
  - modelValue (Edición española)
Externo:
  @@183@artículos
  - modelValue (Edición española)
items:
  content.align:
    @185@Inicio
    @186 @ Centro
    @ph187
  content.side:
    @@ph188@@derecha
    @189 @ izquierda
    @190000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@ph191 @ abajo
Props:
  Archivo de la etiqueta: 'Backlog'
  Contenido:
    Alineación: Centro
    Categoría: Bottom
    Desplazamiento: 8
  items:
    @2019@Backlog
    @@P193@@Todo
    - En proceso
    @195 @
---
::

@F196@Flecha

Utilice el prop `arrow` para mostrar una flecha en el InputMenu.

::component-code
---
Categoría: true
Ignora:
  @1980@artículos
  @@pH199@modelValue (Edición española)
  @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @@201@artículos
  @2012@modelValoración
Props:
  Archivo de la etiqueta: 'Backlog'
  Arrow: Verdad
  items:
    @2013@Backlog
    @204@todo
    @@205@En desarrollo
    @@206@2010
---
::

@2007@color

Utilice el prop `color` para cambiar el color del anillo cuando el InputMenu está enfocado.

::component-code
---
Categoría: true
Ignora:
  @209@artículos
  - modelValue (Edición española)
Externo:
  @211@artículos
  @212@modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Color: Neutro
  Destacado: Verdadero
  Items:
    @@213@@Pingback
    @@214@@Todo el mundo
    @@215@En proceso
    @216
---
::

::note
El `highlight` prop se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

@218@Variante

Utilice la prop `variant` para cambiar la variante del InputMenu.

::component-code
---
Categoría: true
Ignora:
  @220@artículos
  @@221@modelValue (Edición española)
Externo:
  @222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222220000000000
  @@223@modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Color: Neutral
  Variación: Sutil
  Destacado: Falso
  items:
    @224@224@224
    @225 @@ Todo el mundo
    @@226@En proceso
    @227
---
::

@228@228@228

Utilice el prop `size` para cambiar el tamaño del InputMenu.

::component-code
---
Categoría: true
Ignora:
  @230@artículos
  - modelValue
Externo:
  @232@artículos
  @@P233@modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Tamaño: XL
  Items:
    @@234@234@234@234
    @235@@todo
    @@236@En proceso
    @237
---
::

@238@Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro del InputMenu.

::component-code
---
Categoría: true
Ignora:
  @244@artículos
  - modelValue (Edición española)
Externo:
  @246@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  icon: 'i-lucide-search'
  Tamaño: MD
  items:
    @248@248@248
    @249 @ Todo
    - En desarrollo
    @251 @
---
::

### Trailing Icon (Edición española)

Utilice el prop `trailing-icon` para personalizar el [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Ignora:
  @259 @ artículos
  @@P260@modelValue (Edición española)
Externo:
  @261@artículos
  @262@262@262@262@262@262@262@262@262@262@262@262@262@262@262@262@262@26262@262@26262@26262@2662@262666@266666666@266662@266662@26666666666666666@226666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
Props:
  Archivo de la etiqueta: 'Backlog'
  TrailingIcono: 'i-lucide-arrow-down'
  Tamaño: MD
  Items:
    @@263@@Paliño
    @264 @ todo
    @265 @ En proceso
    @266
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::
::

### Icono seleccionado

Utilice el prop `selected-icon` para personalizar el icono cuando se selecciona un elemento.

::component-code
---
Categoría: true
Ignora:
  @@274@artículos
  - modelValue (Edición española)
Externo:
  @276@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Icono: 'i-lucide-flame'
  Tamaño: MD
  items:
    @278@278@278
    @279 @ Todo
    - En proceso
    @281
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.check`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.check`.
:::
::

### Clear: badge{label="4.4+" class="align-text-top"}

Utilice el prop `clear` para mostrar un botón claro cuando se selecciona un valor.

::component-code
---
Categoría: true
Ignora:
  @289@artículos
  - modelValue (Edición española)
Externo:
  @291@artículos
  @@P292@modelValue (Edición española)
Items:
  Claro:
    @293@@verdad
    @294 @ Falso
Props:
  Archivo de la etiqueta: 'Backlog'
  claro: verdadero
  items:
    @295@295@295@295
    @296@todo
    @297 @ En proceso
    @298
---
::

### Clear Icon: badge{label="4.4+" class="align-text-top"}

Utilice el prop `clear-icon` para personalizar el botón transparente [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Ignora:
  @307@artículos
  - modelValue (Edición española)
Externo:
  @309@artículos
  - modelValue (Edición española)
Items:
  Claro:
    @311@@verdad
    @@F312 @ Falso
Props:
  Archivo de la etiqueta: 'Backlog'
  claro: verdadero
  Archivo de la etiqueta: i-lucide-trash
  Items:
    @313@313@313@313
    @314@todo
    @@P315@En proceso
    @316
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

@221@AvatarEditar

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro del menú de entrada.

::component-code
---
Categoría: true
Ignora:
  @@272@artículos
  - modelValue (Edición española)
  - avatar.loading (en inglés)
Externo:
  @330@artículos
  - modelValue
Props:
  Categoría:'Nuxt'
  El avatar:
    src: 'https://github.com/nuxt.png'
    Categoría: Lazy
  items:
    @332 @ Nuxt
    - NuxtHub (en inglés)
    - NuxtLabs (en inglés)
    - Módulos Nuxt
    - Comunidad Nuxt
---
::

@337 @ Carga

Utilice el prop `loading` para mostrar un icono de carga en el InputMenu.

::component-code
---
Categoría: true
Ignora:
  @339@artículos
  - modelValue (Edición española)
Externo:
  @341@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Carga: Verdad
  Trayectoria: Falso
  Items:
    @@343@343@343@343@343@343@343@3443@34333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    @444@todo
    - En proceso
    @346
---
::

### Loading Icon (en inglés)

Utilice el prop `loading-icon` para personalizar el icono de carga. Por defecto a `i-lucide-loader-circle`.

::component-code
---
Categoría: true
Ignora:
  @350@artículos
  - modelValue
Externo:
  @352@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Carga: Verdad
  LoadingIcon: 'i-lucide-loader'(en inglés)
  Items:
    @@354@354@354
    @355 @ Todo el mundo
    - En proceso
    @357
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.loading`.
:::
::

@@ph362@desactivado

Utilice el prop `disabled` para desactivar el InputMenu.

::component-code
---
Categoría: true
Ignora:
  @364@artículos
  @365@@retoño
Externo:
  @366@artículos
Props:
  Discapacitados: Verdadero
  marcador de posición:'Select status'
  items:
    @367@367@367@367
    @368@todo
    @369 @ En proceso
    @370
---
::

@@ph371@@Ejemplos

### Con el tipo de elementos

Puede utilizar la propiedad `type` con `separator` para mostrar un separador entre elementos o `label` para mostrar una etiqueta.

::component-code
---
Colapso: Verdad
Ignora:
  - modelValue (Edición española)
  @377@artículos
Externo:
  @378@artículos
  - modelValue (Edición española)
Externalidades:
  @380@@380@380@380@380@380@380@380@380@380)
Props:
  Categoría:"Apple"
  items:
    - -tipo: 'etiqueta'
        Categoría:"Frutas"
      @P382@Apple en Español
      @@383@383@383
      @384@blueberry
      @385@385@385
      @Pineapple 386@Pineapple
    - -tipo: 'etiqueta'
        Categoría:"Vegetales"
      @388@@Albacete
      @389@broccoli
      @390@Carroza
      @391@@Txxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      @392@leek
---
::

::note
Cuando se utilizan elementos `label` como encabezados de grupo, pase una matriz de matrices para que una etiqueta se filtre junto con su grupo al realizar la búsqueda.
::

### Con icono en los elementos

Puede utilizar la propiedad `icon` para mostrar un [Icon](/docs/components/icon) dentro de los elementos.

::component-example
---
Colapso: Verdad
Nombre: 'input-menu-items-icon-example'
---
::

::tip
También puede utilizar la ranura `#leading` para mostrar el icono seleccionado.
::

### Con avatar en artículos

Puede utilizar la propiedad `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de los elementos.

::component-example
---
Colapso: Verdad
Nombre: 'input-menu-items-avatar-example'
---
::

::tip
También puede utilizar la ranura `#leading` para mostrar el avatar seleccionado.
::

### Con chip en artículos

Puede utilizar la propiedad `chip` para mostrar un [Chip](/docs/components/chip) dentro de los elementos.

::component-example
---
Colapso: Verdad
Nombre: 'input-menu-items-chip-example'
---
::

::note
En este ejemplo, la ranura `#leading` se utiliza para mostrar el chip seleccionado.
::

### Estado abierto de control

Puede controlar el estado abierto utilizando la directiva `default-open` o la directiva `v-model:open`.

::component-example
---
Nombre: 'input-menu-open-exemple'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el InputMenu presionando: kbd{value="O"}.
::

### Control de estado abierto en el foco

Puede utilizar los accesorios `open-on-focus` o `open-on-click` para abrir el menú cuando se enfoca o se hace clic en la entrada.

::component-example
---
Nombre: 'input-menu-open-focus-example'
---
::

### Control término de búsqueda

Utilice la directiva `v-model:search-term` para controlar el término de búsqueda.

::component-example
---
Nombre: 'input-menu-search-term-example'
---
::

### Con icono giratorio

Aquí hay un ejemplo con un icono giratorio que indica el estado abierto del InputMenu.

::component-example
---
Nombre del archivo: 'input-menu-icon-example'
---
::

### Con crear artículo

Utilice la prop `create-item` para permitir a los usuarios agregar valores personalizados que no están en las opciones predefinidas.

::component-example
---
Colapso: Verdad
Nombre: 'input-menu-create-item-example'
---
::

::note
La opción create muestra cuando no se encuentra ninguna coincidencia por defecto. Establezca en `always` para mostrarla incluso cuando existen valores similares.
::

::tip{to="#emits"}
Utilice el evento `@create` para gestionar la creación del elemento. Recibirá el evento y el elemento como argumentos.
::

### Con artículos recuperados

Puede obtener elementos de una API y usarlos en el InputMenu.

::component-example
---
Colapso: Verdad
Nombre: 'input-menu-fetch-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el menú, evitando llamadas innecesarias a la API al cargar la página.
::

### Con el filtro ignorar

Configure la prop `ignore-filter` en `true` para desactivar la búsqueda interna y utilizar su propia lógica de búsqueda.

::component-example
---
Colapso: Verdad
Nombre: 'input-menu-ignore-filter-example'
---
::

::note
Este ejemplo utiliza [`refDebounced`](PH4444) para desacreditar las llamadas a la API. El fetch se difiere con `immediate: false` por lo que no se realiza ninguna solicitud hasta que se abra el menú.
::

### Con campos de filtro

Utilice el prop `filter-fields` con una matriz de campos para filtrar. Predeterminados a `[labelKey]`.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'input-menu-filter-fields-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el menú, evitando llamadas innecesarias a la API al cargar la página.
::

### Con la virtualización: badge{label="4.1+" class="align-text-top"}

Utilice la prop `virtualize` para habilitar la virtualización de listas grandes como un booleano o un objeto con opciones como `{ estimateSize: 32, overscan: 12 }`.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Cuando está habilitado, todos los grupos se aplanan en una sola lista debido a una limitación de Reka UI.
::

::component-example
---
Categoría: true
Nombre: 'input-menu-virtualize-example'
---
::

### Con desplazamiento infinito: badge{label="4.4+" class="align-text-top"}

Puede utilizar el [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable para cargar más datos a medida que el usuario se desplaza.

::component-example
---
Categoría: true
Colapso: Verdad
Destacados:
  @462 @ 41 años
  @463@51
Desconocido: true
Nombre: 'input-menu-infinite-scroll-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false`, por lo que los datos solo se cargan a medida que el usuario se desplaza.
::

### Con el ancho de contenido completo

Puede ampliar el contenido a todo el ancho de sus elementos añadiendo la clase `min-w-fit` en la ranura `ui.content`.

::component-example
---
Nombre: 'input-menu-content-width-example'
Colapso: Verdad
---
::

::tip
También puede cambiar el ancho de contenido globalmente en su `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    inputMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### Como selector de país

Puede utilizar el InputMenu como selector de países con carga lenta. Los países solo se obtienen cuando se abre el menú por primera vez.

::component-example
---
Colapso: Verdad
Nombre: 'input-menu-countries-ejemplo'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para cargar solo los países cuando se abre el menú por primera vez.
::

@484

@485@500 puntos

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<input>`.
::

@487@espanol

Componentes de slots

@488@@Emisiones

Componentes Emisiones

@@ph489@@Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @@pH490@@pH492 @|@@pH491 @|
| @494 @@@ 496 @|@@pH495 @|

@498

Componente Tema

@499@Changelog

Categoría: component-changelog
