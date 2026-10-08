---
title: SeleccionesMenú
description: Un elemento de selección de búsqueda avanzada.
category: form
keywords:
  - combobox
  - multi select
  - filterable select
links:
  - label: El combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/SelectMenu.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor del SelectMenu o la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Categoría: true
Escondido:
  @003@clase
Ignora:
  - modelValue (Edición española)
  @@0005@artículos
  @06@clase
Externo:
  @0007@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Items:
    @000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@P011@En proceso
    @12012 @@ Trabajo
  Categoría: W-48
---
::

::tip
Utilice esto sobre un [`Select`](/docs/components/select) para aprovechar el [`Combobox`](https://reka-ui.com/docs/components/combobox) de Reka UI que ofrece capacidades de búsqueda y selección múltiple.
::

::note
Este componente es similar al [`InputMenu`](/docs/components/input-menu) pero está usando una selección en lugar de una entrada con la búsqueda dentro del menú.
::

@@28@Artículos

Utilice la prop `items` como una matriz de cadenas, números o booleanos:

::component-code
---
Categoría: true
Ignora:
  - modelValue (Edición española)
  @@301@artículos
  @@2003@clase
Externo:
  @@3333@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  items:
    @@35000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@pH036@@todo
    - En proceso
    @388@@388
  Categoría: W-48
---
::

También puede pasar una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@ph070@@@ph071@@@ph072
@@
@@ph076 @@@@ph077
@@ph080@@@ph081

::component-code
---
Ignora:
  - modelValue.label
  @083@artículos
  @084@clase
Externo:
  @085 @ artículos
  @@P086@modelValue (Edición española)
Externalidades:
  @@877@@SelectMenuItem (en inglés)
Props:
  Modelación:
    Etiqueta: "Todo"
  Items:
    - label:'Lista de pedidos'
    - label:"Todo"
    - label:"En proceso"
    - label:"Hecho"
  Categoría: W-48
---
::

::caution
A diferencia del componente [`Select`](/docs/components/select), el SelectMenu espera que todo el objeto se pase a la directiva `v-model` o a la prop `default-value` por defecto.
::

También puede pasar un array de arrays al prop `items` para mostrar grupos separados de elementos.

::component-code
---
Categoría: true
Ignora:
  @@pH100@modelValue (Edición española)
  @101@artículos
  @2010@clase
Externo:
  @303@artículos
  @@pH104@modelValue (Edición española)
Props:
  Categoría:"Apple"
  Items:
    - (Edición española)
      @106 @ Banana
      @@pH107@Blueberry (en inglés)
      @108@108@108@108
      @Pineapple 109@Pineapple
    - -Aubergine
      @111@111@111@111@111
      @112@Carotón
      @@113@113@113
      @114@114@114
  Categoría: W-48
---
::

### Clave de valor

Puede optar por vincular una sola propiedad del objeto en lugar de todo el objeto utilizando la prop.`value-key`.

::component-code
---
Colapso: Verdad
Ignora:
  - modelValue (Edición española)
  @119@ValueKey
  @120@artículos
  @121@clase
Externo:
  @222@artículos
  - modelValue (Edición española)
Externalidades:
  @@124@@SelectMenuItem (en inglés)
Props:
  Valoración:'todo'
  ValueKey: 'id'
  Items:
    - label:'Lista de pedidos'
      Nombre: Backlog
    - label:"Todo"
      Nombre: "Todo"
    - label:"En proceso"
      id: 'en_progreso'
    - label:"Hecho"
      Nombre: "Hecho"
  Categoría: W-48
---
::

::tip
Utilice el prop `by` para comparar objetos por un campo en lugar de referencia cuando el `model-value` es un objeto.
::

@131@131

Utilice el prop `multiple` para permitir selecciones múltiples, los elementos seleccionados estarán separados por una coma en el disparador.

::component-code
---
Categoría: true
Ignora:
  @@pH133@modelValue (Edición española)
  @@134@artículos
  @135 @@ Multiplicación
  @136 @ clase
Externo:
  @137 @ artículos
  - modelValue (Edición española)
Props:
  Modelación:
    @139@139@139
    @140 @ todo
  Multiplicación: True
  Items:
    @141@141@141
    @142 @ todo
    - En proceso
    @144 @@ Proyecto
  Categoría: W-48
---
::

::caution
Asegúrese de pasar un array a la directiva `default-value` o a la directiva `v-model`.
::

### Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
Categoría: true
Ignora:
  @149 @ artículos
  @@F150@clase
Externo:
  @151 @ artículos
Props:
  marcador de posición:'Select status'
  items:
    @@252@Backlog en Español
    @153 @ todo
    - En proceso
    @155
  Categoría: W-48
---
::

### Búsqueda

Utilice el prop `search-input` para personalizar u ocultar la entrada de búsqueda (con el valor `false`).

Puede pasar cualquier propiedad del componente [Input](/docs/components/input) para personalizarlo.

::component-code
---
Categoría: true
Ignora:
  - modelValue.label
  - modelValue.icon
  @165 @ puntos
  @166 @ clase
Externo:
  @167@artículos
  - modelValue (Edición española)
Externalidades:
  @@169@@SelectMenuItem (en inglés)
Props:
  Modelación:
    Categoría: Backlog
    icono: 'i-lucide-circle-help'
  Searchinput:
    Archivo de la etiqueta: Filter…
    icon: 'i-lucide-search'
  items:
    - label: Lista de pedidos
      icono: 'i-lucide-circle-help'
    - label: Todo
      icono: 'i-lucide-circle-plus'
    - label: En proceso
      icono: 'i-lucide-circle-arrow-up'
    - label: hecho
      Icono: 'i-lucide-circle-check'
  Categoría: W-48
---
::

::tip
Puede configurar el prop `search-input` a `false` para ocultar la entrada de búsqueda.
::

::note
Utilice `:search-input="{ autofocus: false }"` para evitar que la entrada de búsqueda se enfoque cuando se abre el menú, por ejemplo, para evitar abrir el teclado virtual en dispositivos táctiles.
::

@177 @ Contenido

Utilice el prop `content` para controlar cómo se representa el contenido de SelectMenu, como su `align` o `side`, por ejemplo.

::component-code
---
Categoría: true
Ignora:
  @181@artículos
  - modelValue (Edición española)
  @183@clase
Externo:
  @184@artículos
  - modelValue (Edición española)
Items:
  content.align:
    @186 @ Inicio
    @187 @ Centro
    @ph188
  content.side:
    @pH189
    @1900@izquierda
    @191@Top
    @2002@bottom
Props:
  Archivo de la etiqueta: 'Backlog'
  Contenido:
    Alineación: Centro
    Categoría: Bottom
    Desplazamiento: 8
  Items:
    @@P193@P193
    @194@todo
    - En proceso
    @@196@1966
  Categoría: W-48
---
::

@F197@Flecha

Utilice el prop `arrow` para mostrar una flecha en el SelectMenu.

::component-code
---
Categoría: true
Ignora:
  @1999@artículos
  @@pH200@modelValue (Edición española)
  @201@@clase
  @@202@Arreaza
Externo:
  @@203@artículos
  @@P204@modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Arrow: Verdad
  items:
    @@205@@Recuento
    @206@todo
    @207@En proceso
    @208
  Categoría: W-48
---
::

@2009@color

Utilice el prop `color` para cambiar el color del anillo cuando el SelectMenu está enfocado.

::component-code
---
Categoría: true
Ignora:
  @211@artículos
  @212@modelValue (Edición española)
  @213@clase
Externo:
  @@214@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Color: Neutro
  Destacado: Verdadero
  Items:
    @216@216@216
    @217 @ Todo
    @@218@En proceso
    @219
  Categoría: W-48
---
::

::note
El `highlight` prop se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

@221@@Variante

Utilice el prop `variant` para cambiar la variante del SelectMenu.

::component-code
---
Categoría: true
Ignora:
  @223@artículos
  @@224@modelValue (Edición española)
  @225@clase
Externo:
  @226@artículos
  @@227@modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Color: Neutro
  Variación: Sutil
  Destacado: Falso
  items:
    @228@228@228@2012
    @229@todo
    @@P230@@En desarrollo
    @231
  Categoría: W-48
---
::

@232 @ Tamaño

Utilice el prop `size` para cambiar el tamaño del SelectMenu.

::component-code
---
Categoría: true
Ignora:
  @234@artículos
  - modelValue (Edición española)
  @236@clase
Externo:
  @237@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Tamaño: xl
  Items:
    @239@239@239
    @@240@todo
    @@241@En proceso
    @242
  Categoría: W-48
---
::

@243@Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro del SelectMenu.

::component-code
---
Categoría: true
Ignora:
  @249@artículos
  - modelValue (Edición española)
  @251@clase
Externo:
  @252@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  icon: 'i-lucide-search'
  Tamaño: MD
  items:
    @@254@2545
    @@255@todo
    @@256@En proceso
    @257
  Categoría: W-48
---
::

### Trailing Icon (Edición española)

Utilice el prop `trailing-icon` para personalizar el [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Ignora:
  @265@artículos
  @266 @ modelo
  @267 @ clase
Externo:
  @268@artículos
  @269@modelValoración
Props:
  Archivo de la etiqueta: 'Backlog'
  TrailingIcono: 'i-lucide-arrow-down'
  Tamaño: MD
  items:
    @270000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @271@@todo
    @@272@En proceso
    @@273@273@273
  Categoría: W-48
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
  @281@artículos
  - modelValue (Edición española)
  @283@clase
Externo:
  @284@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Icono: 'i-lucide-flame'
  Tamaño: MD
  Items:
    @286@286@286
    @287 @ todo
    @@288@En proceso
    @289
  Categoría: W-48
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
  @297@artículos
  @298@modelValoración
  @299@clase
Externo:
  @300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  - modelValue
items:
  Claro:
    @2002@verdad
    @303@false
Props:
  Archivo de la etiqueta: 'Backlog'
  claro: verdadero
  Items:
    @@304@304@304
    @305 @ todo
    @306 @ En proceso
    @307
  Categoría: W-48
---
::

### Clear Icono: badge{label="4.4+" class="align-text-top"}

Utilice el prop `clear-icon` para personalizar el botón transparente [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Ignora:
  @316@artículos
  - modelValue (Edición española)
  @318@clase
Externo:
  @319@artículos
  - modelValue (Edición española)
Items:
  claro:
    @21@@verdad
    @222@false
Props:
  Archivo de la etiqueta: 'Backlog'
  claro: verdadero
  Archivo de la etiqueta: i-lucide-trash
  items:
    @323@323@323@323@323
    @@224@todo
    @@25000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @326
  Categoría: W-48
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

@331@Avatar en Español

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro del SelectMenu.

::component-code
---
Categoría: true
Ignora:
  @337@artículos
  - modelValue (Edición española)
  @339@clase
  - avatar.carga
Externo:
  @341@artículos
  - modelValue (Edición española)
Props:
  Categoría:'Nuxt'
  El avatar:
    src: 'https://github.com/nuxt.png'
    Categoría: Lazy
  items:
    @343 @@ Nuxt
    - NuxtHub (en inglés)
    - NuxtLabs (en inglés)
    - Nuxt is a
    - Comunidad Nuxt
  Categoría: W-48
---
::

@348@Cargando

Utilice el prop `loading` para mostrar un icono de carga en el SelectMenu.

::component-code
---
Categoría: true
Ignora:
  @350@artículos
  - modelValue
  @352@clase
Externo:
  @@353@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Carga: Verdad
  Trayectoria: Falso
  items:
    @355@@Palibrio
    @356@todo
    - En proceso
    @358
  Categoría: W-48
---
::

### Icono de carga

Utilice el prop `loading-icon` para personalizar el icono de carga. Por defecto a `i-lucide-loader-circle`.

::component-code
---
Categoría: true
Ignora:
  @362@artículos
  @363 @ Modelo
  @364@clase
Externo:
  @365@artículos
  @@pH366@modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Carga: Verdad
  LoadingIcon: 'i-lucide-loader'(en inglés)
  Items:
    @367@367@367@367
    @368@todo
    @369 @ En proceso
    @370
  Categoría: W-48
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

### Desactivado

Utilice el prop `disabled` para desactivar el SelectMenu.

::component-code
---
Categoría: true
Ignora:
  @377@artículos
  @@ph378@@spin-off
  @379@clase
Externo:
  @380@artículos
Props:
  Discapacitados: Verdadero
  marcador de posición:'Select status'
  items:
    @381@381@381
    @382@todo
    @@383@En proceso
    @384
  Categoría: W-48
---
::

@385 Ejemplos

### Con el tipo de artículos

Puede utilizar la propiedad `type` con `separator` para mostrar un separador entre elementos o `label` para mostrar una etiqueta.

::component-code
---
Colapso: Verdad
Ignora:
  - modelValue (Edición española)
  @391@artículos
  @292@clase
Externo:
  @@393@artículos
  @@pH394@modelValue (Edición española)
Externalidades:
  @@P395@@SelectMenuItem []
Props:
  Categoría:"Apple"
  Items:
    - -tipo: 'etiqueta'
        Categoría:"Frutas"
      @P397@Apple en Español
      @398 @ Banana
      @pH399@blueberry
      @400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      @Pineapple 401@Pineapple
    - -tipo: 'etiqueta'
        Categoría:"Vegetales"
      @403@@Albacete
      @404@broccoli
      @405@Carotón
      @406@@Fuego24
      @407@leek en español
  Categoría: W-48
---
::

::note
Cuando se utilizan elementos `label` como encabezados de grupo, pase una matriz de matrices para que una etiqueta se filtre junto con su grupo al realizar la búsqueda.
::

### Con icono en los artículos

Puede utilizar la propiedad `icon` para mostrar un [Icon](/docs/components/icon) dentro de los elementos.

::component-example
---
Colapso: Verdad
Nombre: 'select-menu-items-icon-example'
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
Nombre: 'select-menu-items-avatar-example'
---
::

::tip
También puede utilizar la ranura `#leading` para mostrar el avatar seleccionado.
::

### Con chip en los artículos

Puede utilizar la propiedad `chip` para mostrar un [Chip](/docs/components/chip) dentro de los elementos.

::component-example
---
Colapso: Verdad
Nombre: 'select-menu-items-chip-example'
---
::

::note
En este ejemplo, la ranura `#leading` se utiliza para mostrar el chip seleccionado.
::

### Estado abierto de control

Puede controlar el estado abierto utilizando la directiva `default-open` o la directiva `v-model:open`.

::component-example
---
Nombre: 'select-menu-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el SelectMenu presionando: kbd{value="O"}.
::

### Término de búsqueda de control

Utilice la directiva `v-model:search-term` para controlar el término de búsqueda.

::component-example
---
Nombre: 'select-menu-search-term-example'
---
::

### Con icono rotativo

Aquí hay un ejemplo con un icono giratorio que indica el estado abierto del SelectMenu.

::component-example
---
Nombre: 'select-menu-icon-example'
---
::

### Con crear artículo

Utilice la prop `create-item` para permitir a los usuarios agregar valores personalizados que no están en las opciones predefinidas.

::component-example
---
Colapso: Verdad
Nombre: 'select-menu-creat-item-example'
---
::

::note
La opción create muestra cuando no se encuentra ninguna coincidencia por defecto. Establezca en `always` para mostrarla incluso cuando existen valores similares.
::

::tip{to="#emits"}
Utilice el evento `@create` para gestionar la creación del elemento. Recibirá el evento y el elemento como argumentos.
::

### Con artículos recuperados

Puede obtener elementos de una API y usarlos en el SelectMenu.

::component-example
---
Colapso: Verdad
Nombre: 'select-menu-fetch-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el menú, evitando llamadas innecesarias a la API al cargar la página.
::

### Con el filtro ignorar

Configure el prop `ignore-filter` en `true` para desactivar la búsqueda interna y utilizar su propia lógica de búsqueda.

::component-example
---
Colapso: Verdad
Nombre: 'select-menu-ignore-filter-example'
---
::

::note
Este ejemplo utiliza [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) para desacreditar las llamadas de API. La búsqueda se difiere con `immediate: false` por lo que no se realiza ninguna solicitud hasta que se abra el menú.
::

### Con campos de filtro

Utilice el prop `filter-fields` con una matriz de campos para filtrar. Predeterminados a `[labelKey]`.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'select-menu-filter-fields-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el menú, evitando llamadas innecesarias a la API al cargar la página.
::

### Con virtualización: badge{label="4.1+" class="align-text-top"}

Utilice la prop `virtualize` para habilitar la virtualización de listas grandes como un booleano o un objeto con opciones como `{ estimateSize: 32, overscan: 12 }`.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Cuando está habilitado, todos los grupos se aplanan en una sola lista debido a una limitación de Reka UI.
::

::component-example
---
Categoría: true
Nombre: 'select-menu-virtualize-ejemplo'
---
::

### Con desplazamiento infinito: badge{label="4.4+" class="align-text-top"}

Puede usar el [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable para cargar más datos a medida que el usuario se desplaza.

::component-example
---
Categoría: true
Colapso: Verdad
Destacados:
  @474 @ 41
  @475 @ 51
Desconocido: true
Nombre: 'select-menu-infinite-scroll-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false`, por lo que los datos solo se cargan a medida que el usuario se desplaza.
::

### Con el ancho de contenido completo

Puede ampliar el contenido a todo el ancho de sus elementos añadiendo la clase `min-w-fit` en la ranura `ui.content`.

::component-example
---
Nombre: 'select-menu-content-width-example'
Colapso: Verdad
---
::

::tip
También puede cambiar el ancho de contenido globalmente en su `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    selectMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### Como seleccionador de países

Puede utilizar el SelectMenu como selector de país con carga lenta. Los países solo se recuperan cuando se abre el menú por primera vez.

::component-example
---
Colapso: Verdad
Nombre: 'select-menu-countries-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para cargar solo los países cuando se abre el menú por primera vez.
::

@@pH496

@497@@Apuestas

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<button>`.
::

@499@@espanol

Componentes de slots

@500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Emisiones

@501@@Exposicion

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @@|@@|
| @@|@@|

@510 @@ Temas

Componente Tema

@511@Changelog

Categoría: component-changelog
