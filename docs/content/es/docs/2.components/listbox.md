---
description: Una lista seleccionable de elementos con búsqueda, virtualización y renderización de elementos enriquecidos.
category: form
keywords:
  - option list
  - picker
  - selection
links:
  - label: Listado de box
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Listbox.vue
---

@@pH000@@Uso del producto

Utilice la directiva `v-model` para controlar el valor del Listbox o la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
Colapso: Verdad
Escondido:
  @003@clase
Ignora:
  - modelValue.label
  - modelValue.icon
  @@pH006@@modelValue.value
  @0007@artículos
Externo:
  @008@artículos
  @@pH009@modelValue (Edición española)
Externalidades:
  @@10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Modelación:
    Etiqueta: "Francia"
    icono: 'i-lucide-map-pin'
    Categoría:'FR'
  items:
    - label:'España'
      icono: 'i-lucide-map-pin'
      Categoría:"FR"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Valor: "De"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Nombre: "IT"
    - label: España
      icono: 'i-lucide-map-pin'
      Valor: "es"
    - label:'Países Bajos'
      icono: 'i-lucide-map-pin'
      Nombre: "NL"
    - label: España
      icono: 'i-lucide-map-pin'
      Nombre: "PL"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Nombre: "BE"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Nombre: "PT"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Nombre: "AT"
    - label: España
      icono: 'i-lucide-map-pin'
      Valoración:"se"
  Categoría: w-full
---
::

@@21@Artículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@
@@
@@
@@
@@ph070@@@ph071@@@ph072

::component-code
---
Colapso: Verdad
Escondido:
  @073@clase
Ignora:
  @@70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @@75 @ puntos
Externalidades:
  @@776@@ListboxItem (en inglés)
Props:
  Items:
    - label:'España'
      Título:"El hexágono"
      icono: 'i-lucide-map-pin'
      Categoría:"FR"
    - label:'España'
      Descripción:"República Federal"
      icono: 'i-lucide-map-pin'
      Valor: "De"
    - label:'España'
      Descripción:"El barco"
      icono: 'i-lucide-map-pin'
      Nombre: "IT"
    - label: España
      Título:"La piel del toro"
      icono: 'i-lucide-map-pin'
      Valor: "Es"
  Categoría: w-full
---
::

También puede pasar un array de arrays a la prop `items` para mostrar grupos separados de elementos.

::component-code
---
Colapso: Verdad
Escondido:
  @082@clase
Ignora:
  @083@artículos
Externo:
  @084@artículos
Externalidades:
  @@85000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Items:
    - -etiqueta: 'Francia'
        icono: 'i-lucide-map-pin'
        Categoría:"FR"
      - label:'España'
        icono: 'i-lucide-map-pin'
        Valor: "De"
      - label:'España'
        icono: 'i-lucide-map-pin'
        Nombre: "IT"
    - -etiqueta: 'España'
        icono: 'i-lucide-map-pin'
        Nombre: "BR"
      - label:'Argentina'(Edición española)
        icono: 'i-lucide-map-pin'
        Nombre: "AR"
  Categoría: w-full
---
::

@091@@Multiplicación

Utilice el prop `multiple` para permitir la selección de varios items. Cuando esté habilitado, el `v-model` será un array.

::component-code
---
Colapso: Verdad
Escondido:
  @094@clase
Ignora:
  @095 @@ Artículos
  @@pH096@multiples
Externo:
  @097@artículos
Externalidades:
  @@P098@@ListboxItem [en inglés]
Props:
  Multiplicación: True
  items:
    - label:'España'
      icono: 'i-lucide-map-pin'
      Categoría:"FR"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Valor: "De"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Nombre: "IT"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Valor: "Es"
  Categoría: w-full
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
  @clase109
Externo:
  @110@artículos
  @111@11111@11111@1111
Externalidades:
  @112@112@112@112@112@112@112@112@112@112@1112@112@1112@1112@112@1112@1112@11112@11112@111112@1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
Props:
  Categoría:"FR"
  ValueKey: 'valor'
  items:
    - label:'España'
      icono: 'i-lucide-map-pin'
      Categoría:"FR"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Valor: "De"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Nombre: "IT"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Valor: "Es"
  Categoría: w-full
---
::

@117 @ Filtro

Utilice el prop `filter` para mostrar una entrada de filtro o pasar un objeto para personalizar el componente [Input](/docs/components/input).

::component-code
---
Colapso: Verdad
Escondido:
  @124 @ clase
Ignora:
  @125 @ puntos
Externo:
  @126 @ artículos
Externalidades:
  @@127@@ListboxItem (en inglés)
Props:
  Filtro:
    Archivo de la etiqueta: Filter…
    icon: 'i-lucide-search'
  Items:
    - label:'España'
      icono: 'i-lucide-map-pin'
      Categoría:"FR"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Valor: "De"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Nombre: "IT"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Valor: "Es"
    - label:'Países Bajos'
      icono: 'i-lucide-map-pin'
      Nombre: "NL"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Nombre: "PL"
  Categoría: w-full
---
::

### Icono seleccionado

Utilice el prop `selected-icon` para personalizar el icono cuando se selecciona un elemento.

::component-code
---
Colapso: Verdad
Ignora:
  @137 @ artículos
  - modelValue (Edición española)
  @139@ValueKey
  @@class 140 años
Externo:
  @141 @ artículos
  - modelValue (Edición española)
Externalidades:
  @143@143@143@143@143@143@143@143@143@1443@1443@1443@1443@1443@14333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
Props:
  Categoría:'FR'
  Icono: 'i-lucide-flame'
  ValueKey: 'valor'
  items:
    - label:'España'
      icono: 'i-lucide-map-pin'
      Categoría:"FR"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Valor: "De"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Nombre: "IT"
    - label: España
      icono: 'i-lucide-map-pin'
      Valor: "Es"
  Categoría: w-full
---
::

@P148 @ Tamaño

Utilice el prop `size` para cambiar el tamaño del Listbox.

::component-code
---
Colapso: Verdad
Escondido:
  @@F150@clase
Ignora:
  @151 @ artículos
Externo:
  @252@artículos
Externalidades:
  @153@153@153@153@153@153@153@153@153@153@153)
Props:
  Tamaño: xl
  items:
    - label:'España'
      icono: 'i-lucide-map-pin'
      Categoría:"FR"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Valor: "De"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Nombre: "IT"
    - label: España
      icono: 'i-lucide-map-pin'
      Valor: "Es"
  Categoría: w-full
---
::

### Cargando

Utilice el prop `loading` para mostrar un indicador de carga. Use el prop `loading-icon` para personalizar el icono.

::component-code
---
Colapso: Verdad
Escondido:
  @161@clase
Ignora:
  @@162@artículos
Externo:
  @@163@artículos
Externalidades:
  @164@164@164@164@164@164)
Props:
  Carga: Verdad
  items:
    - label:'España'
      icono: 'i-lucide-map-pin'
      Categoría:"FR"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Valor: "De"
  Categoría: w-full
---
::

### Desactivado

Utilice el prop `disabled` para evitar cualquier interacción del usuario con el Listbox.

::component-code
---
Colapso: Verdad
Escondido:
  @169 @ clase
Ignora:
  @170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @171@artículos
Externalidades:
  @@2017@@ListboxItem (en inglés)
Props:
  Discapacitados: Verdadero
  Items:
    - label:'España'
      icono: 'i-lucide-map-pin'
      Categoría:"FR"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Valor: "De"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Nombre: "IT"
    - label:'España'
      icono: 'i-lucide-map-pin'
      Valor: "Es"
  Categoría: w-full
---
::

@@ph177@Ejemplos

### Con el tipo de artículo

Puede utilizar la propiedad `type` con `separator` para mostrar un separador entre elementos o `label` para mostrar una etiqueta.

::component-code
---
Colapso: Verdad
Escondido:
  @2018@clase
Ignora:
  @@183@artículos
Externo:
  @184@artículos
Externalidades:
  @185@185@185 []
Props:
  Items:
    - -tipo: 'etiqueta'
        Categoría:"Frutas"
      - label:'Apple'(Edición española)
      - label:'Banana'(Edición española)
      - label:'Blueberry'(Edición española)
      - label:'Grapas'(Edición española)
      - label:"La piña"
    - -tipo: 'etiqueta'
        Categoría:"Vegetales"
      - label:'Aubergine'(Edición española)
      - label:'El brócoli'
      - label:"La zanahoria"
      - label:'El Calabaza'
      - label:"El Leek"
  Categoría: w-full
---
::

::note
Cuando se utilizan elementos `label` como encabezados de grupo, pase una matriz de matrices para que una etiqueta se filtre junto con su grupo al realizar la búsqueda.
::

### Con icono en los elementos

Puede utilizar la propiedad `icon` para mostrar un [Icon](/docs/components/icon) dentro de los elementos.

::component-code
---
Colapso: Verdad
Escondido:
  @205@clase
Ignora:
  @206@artículos
Externo:
  @207@artículos
Externalidades:
  @@208@2008 [en línea]
Props:
  Items:
    - label:'Lista de pedidos'
      icono: 'i-lucide-circle-help'
      Nombre: Backlog
    - label:"Todo"
      icono: 'i-lucide-circle-plus'
      Nombre: "Todo"
    - label:"En proceso"
      icono: 'i-lucide-circle-arrow-up'
      valor: 'en_progreso'
    - label:"Hecho"
      Icono: 'i-lucide-circle-check'
      Valoración:"DONE"
  Categoría: w-full
---
::

### Con avatar en artículos

Puede utilizar la propiedad `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de los elementos.

::component-code
---
Colapso: Verdad
Escondido:
  @219@clase
Ignora:
  @220@artículos
Externo:
  @221@artículos
Externalidades:
  @222@222@222@222@2222@2222@2222@22222@2222@2222@2222@2222@2222@22222@222222@22222@22222@22222222@2222222@22222222@2222222222@2222222@2222222222@22222222@222222222@222222222222@2222222222@2222222222222222@22222222222222222222@2222222222222222222222222
Props:
  items:
    - label:'benjamincanac'(Edición española)
      El avatar:
        src: 'https://github.com/benjamincanac.png'
    - label:'HugoRCD'(Edición española)
      El avatar:
        src: 'https://github.com/HugoRCD.png'
    - label:'Atinux'(Edición española)
      El avatar:
        src: 'https://github.com/atinux.png'
    - label:'romhml'(en inglés)
      El avatar:
        src: 'https://github.com/romhml.png'
  Categoría: w-full
---
::

### Con chip en artículos

Puede utilizar la propiedad `chip` para mostrar un [Chip](/docs/components/chip) dentro de los elementos.

::component-code
---
Colapso: Verdad
Escondido:
  @233@clase
Ignora:
  @234@artículos
Externo:
  @235@artículos
Externalidades:
  @@236@@ListboxItem [en inglés]
Props:
  items:
    - label:'bug'(en inglés)
      El chip:
        Categoría:"Error"
    - label:'característica'
      The chip:
        Categoría:"Éxito"
    - label:'mejora'
      El chip:
        Categoría:"info"
  Categoría: w-full
---
::

### Con descripción en artículos

Puede utilizar la propiedad `description` para mostrar texto adicional debajo de la etiqueta.

::component-code
---
Colapso: Verdad
Escondido:
  @242 @ clase
Ignora:
  @243@artículos
Externo:
  @244@artículos
Externalidades:
  @@245@@ListboxItem [en inglés]
Props:
  Items:
    - label:'España'
      Título:"El hexágono"
      icono: 'i-lucide-map-pin'
      Categoría:"FR"
    - label:'España'
      Descripción:"República Federal"
      icono: 'i-lucide-map-pin'
      Valor: "De"
    - label:'España'
      Descripción:"El barco"
      icono: 'i-lucide-map-pin'
      Nombre: "IT"
    - label:'España'
      Título:"La piel del toro"
      icono: 'i-lucide-map-pin'
      Valor: "Es"
  Categoría: w-full
---
::

### Control artículo (s) seleccionado (s)

Puede controlar el elemento seleccionado mediante la prop `default-value` o la directiva `v-model`.

::component-example
---
Nombre: 'listbox-modelo-valor-ejemplo'
Colapso: Verdad
---
::

### Término de búsqueda de control

Utilice la directiva `v-model:search-term` para controlar el término de búsqueda.

::component-example
---
Nombre: 'listbox-search-term-example'
---
::

### Con el filtro ignorar

Configure la prop `ignore-filter` en `true` para desactivar la búsqueda interna y utilizar su propia lógica de búsqueda.

::component-example
---
Colapso: Verdad
Nombre: 'listbox-ignore-filter-example'
---
::

::note
Este ejemplo utiliza [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) para desacreditar las llamadas a la API.
::

### Con campos de filtro

Utilice el prop `filter-fields` con una matriz de campos para filtrar. Predeterminados a `[labelKey]`.

::component-example
---
Colapso: Verdad
Nombre: 'listbox-filter-fields-example'
---
::

### Con virtualización

Utilice la prop `virtualize` para habilitar la virtualización de listas grandes como un booleano o un objeto con opciones como `{ estimateSize: 32, overscan: 12 }`.

::component-example
---
Nombre del archivo: 'listbox-virtualize-example'
Colapso: Verdad
---
::

### Como una lista de transferencia

Puede componer dos componentes de Listbox con [Button](/docs/components/button) controles para construir un patrón de lista de transferencia.

::component-example
---
Nombre: 'listbox-transfer-list-example'
Colapso: Verdad
---
::

@274

@275@275@275

Componentes Props

@276@276@276

Componentes de slots

@@277@277@277

Componentes Emisiones

@278@@Proyecto

Componente Tema

@279@Changelog

Categoría: component-changelog
