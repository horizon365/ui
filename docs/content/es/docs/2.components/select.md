---
description: Un elemento para seleccionar de una lista de opciones.
category: form
keywords:
  - dropdown
  - picker
links:
  - label: Seleccionado
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/select
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Select.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor de Select o la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

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

@13@130 puntos

Utilice la prop `items` como una matriz de cadenas, números o booleanos:

::component-code
---
Categoría: true
Ignora:
  @@P015@modelValue (Edición española)
  @@16000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @17@clase
Externo:
  @180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@P2019@modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  items:
    @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@21@@todo
    @@222@En proceso
    @@23@230 años
  Categoría: W-48
---
::

También puede pasar una matriz de objetos con las siguientes propiedades:

@@
[`value?: string`{lang="ts-type"}#value-key)
[`type?: "label" | "separator" | "item"`](#with-items-type)
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@
@@
@@@ph068@@@ph069@@@ph070

::component-code
---
Ignora:
  - modelValue (Edición española)
  @@2007@artículos
  @073@clase
Externo:
  @@70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@P075@modelValue (Edición española)
Externalidades:
  @@776@@SelectItem [en inglés]
Props:
  Archivo de la etiqueta: 'backlog'
  items:
    - label:'Lista de pedidos'
      Nombre: Backlog
    - label:"Todo"
      Nombre: "Todo"
    - label:"En proceso"
      valor: 'en_progreso'
    - label:"Hecho"
      Valoración:"DONE"
  Categoría: W-48
---
::

::caution
Cuando se utilizan objetos, es necesario hacer referencia a la propiedad `value` del objeto en la directiva `v-model` o en la prop.
::

También puede pasar un array de arrays al prop `items` para mostrar grupos separados de elementos.

::component-code
---
Categoría: true
Ignora:
  - modelValue (Edición española)
  @086 @ Artículos
  @087 @ clase
Externo:
  @@888@artículos
  @@pH089@modelValue (Edición española)
Props:
  Categoría:"Apple"
  Items:
    - (Edición española)
      @@pH091@@banana
      @@pH092@@blueberry
      @@pH093@@Aveyores.es
      @@Pineapple (en inglés)
    - -La berenjena
      @096@broccoli
      @@pH097@@Carotón
      @098@@espanol
      @099@@leek
  Categoría: W-48
---
::

### Value Key

Puede cambiar la propiedad que se utiliza para establecer el valor utilizando la prop.`value-key`.

::component-code
---
Ignora:
  @@pH103@modelValue (Edición española)
  @104@ValueKey
  @500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@clase106
Externo:
  @107@puntos
  - modelValue (Edición española)
Externalidades:
  @109@109@109@109@109@109@109@109)
Props:
  Archivo de la etiqueta: 'backlog'
  ValueKey: 'id'
  items:
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

@@114@114

Utilice el prop `multiple` para permitir selecciones múltiples, los elementos seleccionados estarán separados por una coma en el disparador.

::component-code
---
Categoría: true
Ignora:
  @116@116@116
  @117@artículos
  @118@multiples
  @119 @ clase
Externo:
  @120@artículos
  @121@121@121
Props:
  Modelación:
    @@222@Backlog (Edición española)
    @123 @ todo
  Multiplicación: True
  Items:
    @124@124@124
    @125 @ todo
    - En proceso
    @127
  Categoría: W-48
---
::

::caution
Asegúrese de pasar un array a la directiva `default-value` o a la directiva `v-model`.
::

@@P130@Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
Categoría: true
Ignora:
  @@132@artículos
  @333@clase
Externo:
  @@134@artículos
Props:
  marcador de posición:'Select status'
  items:
    @135@@Palibrio
    @136@all of
    - En proceso
    @138@138
  Categoría: W-48
---
::

@139 @ Contenido

Utilice el prop `content` para controlar cómo se representa el contenido Select, como su `align` o `side`, por ejemplo.

::component-code
---
Categoría: true
Ignora:
  @@143@artículos
  - modelValor
  @145 @ clase
Externo:
  @146 @ puntos
  - modelValue (Edición española)
Items:
  content.align:
    @148 @ Inicio
    @@149 @ Centro Español
    @F150 @@ Inicio
  content.side:
    @151 @@ derecho
    @252@izquierda
    @153 @@ Inicio
    @F154 @ abajo
Props:
  Archivo de la etiqueta: 'Backlog'
  Contenido:
    Alineación: Centro
    Categoría: Bottom
    Desplazamiento: 8
  items:
    @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @156 @ todo
    - En proceso
    @158
  Categoría: W-48
---
::

::note
Estas opciones solo se aplican cuando `content.position` es `popper`(predeterminado).
::

### Posición: badge{label="4.7+" class="align-text-top"}

Utilice el prop `content.position` para controlar cómo se posiciona el contenido Select en relación con el disparador. Predeterminado a `popper`, que posiciona el contenido como otros popovers. Configurarlo en `item-aligned` para alinear el contenido con el elemento seleccionado (similar a un menú nativo de macOS).

::component-code
---
Categoría: true
Ignora:
  @166 @ artículos
  - modelValue (Edición española)
  @168@clase
Externo:
  @169 @ artículos
  - modelValue (Edición española)
items:
  content.position:
    -  artículo alineado
    @2017@popper
Props:
  Categoría:"Todo"
  Contenido:
    Categoría: item-aligned
  Items:
    @@173@@Retraso
    @174 @ todo
    - En proceso
    @176
  Categoría: W-48
---
::

@F177@Flecha

Utilice el prop `arrow` para mostrar una flecha en el Select.

::component-code
---
Categoría: true
Ignora:
  @179@artículos
  - modèleValeur
  @181@clase
  @2018@Arreaza
Externo:
  @@183@1833
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Arrow: Verdad
  Items:
    @185@1850 años
    @186 @ todo
    - En proceso
    @188
  Categoría: W-48
---
::

@P189@color

Utilice el prop `color` para cambiar el color del anillo cuando el selector está enfocado.

::component-code
---
Categoría: true
Ignora:
  @@191@artículos
  - modelValue (Edición española)
  @@clase193
Externo:
  @194@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Color: Neutral
  Destacado: Verdadero
  Items:
    @1966@@Retraso
    @197@todo
    - En proceso
    @199 @
  Categoría: W-48
---
::

::note
El `highlight` prop se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

@201@Variación

Utilice el prop `variant` para cambiar la variante del Select.

::component-code
---
Categoría: true
Ignora:
  @@203@artículos
  @@P204@modelValue (Edición española)
  @205@clase
Externo:
  @206@artículos
  @2017@modelValoración
Props:
  Archivo de la etiqueta: 'Backlog'
  Color: Neutral
  Variación: Sutil
  Destacado: Falso
  Items:
    @@208@2008
    @2009@todo
    @@210@En proceso
    @211 @
  Categoría: W-48
---
::

@212 @ Tamaño

Utilice el prop `size` para cambiar el tamaño del Select.

::component-code
---
Categoría: true
Ignora:
  @@214@artículos
  - modelValue (Edición española)
  @216@clase
Externo:
  @217@artículos
  - modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Tamaño: XL
  items:
    @@219@219@219@219
    @220@todo
    @@221@En proceso
    @222@2222@222@222
  Categoría: W-48
---
::

@223@Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro del Select.

::component-code
---
Categoría: true
Ignora:
  @229@artículos
  - modelValue (Edición española)
  @231@clase
Externo:
  @232@artículos
  @@P233@modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  icon: 'i-lucide-search'
  Tamaño: MD
  Items:
    @@234@234@234@234
    @235@@todo
    @236@En proceso
    @237
  Categoría: W-48
---
::

### Trailing Icon (en inglés)

Utilice el prop `trailing-icon` para personalizar el [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Ignora:
  @245@artículos
  - modelValue (Edición española)
  @247 @ clase
Externo:
  @248@artículos
  @249@modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  TrailingIcono: 'i-lucide-arrow-down'
  Tamaño: MD
  Items:
    @250000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @251@todo
    @@252@En desarrollo
    @@253@2535
  Categoría: W-48
---
::

::framework-only
#Nuxidad
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
  @261@artículos
  @262@262@262@262@262@262@262@262@262@262@262@262@262@262@262@262@262@26262@262@26262@26262@2662@262666@266666666@266662@266662@26666666666666666@226666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
  @263@clase
Externo:
  @264@artículos
  @265 @ Modelo
Props:
  Archivo de la etiqueta: 'Backlog'
  Icono: 'i-lucide-flame'
  Tamaño: MD
  Items:
    @266@266@266@266@2666@2666@2666
    @267@todo
    @@268@En proceso
    @269
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

@274@AvatarEditar

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de la selección.

::component-code
---
Categoría: true
Ignora:
  @280000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  - modelValue
  @282@clase
  - avatar.carga
Externo:
  @284@artículos
  - modelValue (Edición española)
Props:
  Categoría:'Nuxt'
  El avatar:
    src: 'https://github.com/nuxt.png'
    Categoría: Lazy
  Items:
    @286 @@ Nuxt
    - NuxtHub (en inglés)
    - NuxtLabs (en inglés)
    - Módulos Nuxt
    - Comunidad Nuxt
  Categoría: W-48
---
::

@@291@Cargando

Utilice el prop `loading` para mostrar un icono de carga en el Select.

::component-code
---
Categoría: true
Ignora:
  @@293@artículos
  @@P294@modelValue (Edición española)
  @295@clase
Externo:
  @296@artículos
  @@P297@modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Carga: Verdad
  Trayectoria: Falso
  items:
    @298@298@298
    @299@@todo
    - En proceso
    @301
  Categoría: W-48
---
::

### Loading icon

Utilice el prop `loading-icon` para personalizar el icono de carga. Por defecto a `i-lucide-loader-circle`.

::component-code
---
Categoría: true
Ignora:
  @305 @ artículos
  - modelValue (Edición española)
  @307@clase
Externo:
  @308@artículos
  @@pH309@modelValue (Edición española)
Props:
  Archivo de la etiqueta: 'Backlog'
  Carga: Verdad
  LoadingIcon: 'i-lucide-loader'(en inglés)
  items:
    @310@Backlog en Español
    @311 @ Todo
    - En proceso
    @313
  Categoría: W-48
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.loading`.
:::
::

### Desactivado

Utilice el prop `disabled` para desactivar el Select.

::component-code
---
Categoría: true
Ignora:
  @320@artículos
  @@ph321@@marcador de posición
  @222@clase
Externo:
  @323@artículos
Props:
  Discapacitados: Verdadero
  marcador de posición:'Select status'
  Items:
    @@2424@2424@2424
    @2500@todo
    @@P326@En proceso
    @@27@277
  Categoría: W-48
---
::

@328 Ejemplos

### Con el tipo de elementos

Puede utilizar la propiedad `type` con `separator` para mostrar un separador entre elementos o `label` para mostrar una etiqueta.

::component-code
---
Colapso: Verdad
Ignora:
  @@P333@modelValue (Edición española)
  @@334@artículos
  @335 @ clase
Externo:
  @336@artículos
  - modelValue (Edición española)
Externalidades:
  @@338@@SelectItem [en inglés]
Props:
  Categoría:"Apple"
  Items:
    - tipo:'etiqueta'
      Categoría:"Frutas"
    @P340@Apple en Español
    @@pH341@@Banana
    @342@blueberry
    @@343@343@343
    @Pineapple 344@@Pineapple
    - tipo:'separador'
    - tipo:'etiqueta'
      Categoría:"Vegetales"
    @347@@Albacete
    @348@broccoli
    @349@Carroza
    @350@@courgette
    @351@leek
  Categoría: W-48
---
::

### Con icono en los elementos

Puede utilizar la propiedad `icon` para mostrar un [Icon](/docs/components/icon) dentro de los elementos.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'select-items-icon-example'
---
::

::note
En este ejemplo, el icono se calcula a partir de la propiedad `value` del elemento seleccionado.
::

::tip
También puede utilizar la ranura `#leading` para mostrar el icono seleccionado.
::

### Con avatar en los elementos

Puede utilizar la propiedad `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de los elementos.

::component-example
---
Colapso: Verdad
Nombre: 'select-items-avatar-ejemplo'
---
::

::note
En este ejemplo, el avatar se calcula a partir de la propiedad `value` del elemento seleccionado.
::

::tip
También puede utilizar la ranura `#leading` para mostrar el avatar seleccionado.
::

### Con chip en artículos

Puede utilizar la propiedad `chip` para mostrar un [Chip](/docs/components/chip) dentro de los elementos.

::component-example
---
Colapso: Verdad
Nombre: 'select-items-chip-example'
---
::

::note
En este ejemplo, la ranura `#leading` se utiliza para mostrar el chip seleccionado.
::

### Estado abierto de control

Puede controlar el estado abierto utilizando la prop `default-open` o la directiva `v-model:open`.

::component-example
---
Nombre: 'select-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el Select pulsando: kbd{value="O"}.
::

### Con icono rotativo

Aquí hay un ejemplo con un icono giratorio que indica el estado abierto del Select.

::component-example
---
Nombre: 'select-icon-example'
---
::

### Con artículos recuperados

Puede obtener elementos de una API y usarlos en el Select.

::component-example
---
Nombre del archivo: 'select-fetch-example'
Colapso: Verdad
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el menú, evitando llamadas innecesarias a la API al cargar la página.
::

### Con desplazamiento infinito: badge{label="4.4+" class="align-text-top"}

Puede usar el [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable para cargar más datos a medida que el usuario se desplaza.

::component-example
---
Categoría: true
Colapso: Verdad
Destacados:
  @395 @ 41 años
  @396 @ 51
Desconocido: true
Nombre: 'select-infinite-scroll-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false`, por lo que los datos solo se cargan a medida que el usuario se desplaza.
::

### Con el ancho de contenido completo

Puede ampliar el contenido a todo el ancho de sus elementos añadiendo la clase `min-w-fit` en la ranura `ui.content`.

::component-example
---
Nombre del archivo: 'select-content-width-example'
Colapso: Verdad
---
::

::tip
También puede cambiar el ancho del contenido de forma global en su `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    select: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

@414

@415@Propuestas

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<button>`.
::

@417@417@417

Componentes de slots

@418@@Emisiones

Componentes Emisiones

@419@@Exposicion

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000| @@|
| @@|@@|

@@2828 @ El tema

Componente Tema

@229@Changelog

Categoría: component-changelog
