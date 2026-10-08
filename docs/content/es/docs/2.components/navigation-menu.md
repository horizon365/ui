---
title: Navegación Menú
description: Una lista de enlaces que se pueden mostrar horizontal o verticalmente.
category: navigation
keywords:
  - navbar
  - menubar
  - sidebar navigation
links:
  - label: Navegación Menú
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/navigation-menu
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/NavigationMenu.vue
---

@@pH000@@Uso del producto

Utilice el componente NavigationMenu para mostrar una lista de enlaces horizontal o verticalmente.

::component-code
---
Colapso: Verdad
Escondido:
  @001@clase
Ignora:
  @@2002@artículos
Externo:
  @@pH000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@@P2004@@NavegaciónMenuItem []
Props:
  Items:
    - label: Guía
      icon: i-lucide-book-open
      Inicio/docs/Getting-started
      niños:
        - label: Introducción
          Descripción: Componentes totalmente diseñados y personalizables para Nuxt.
          Vía: i-lucide-house
        - label: Instalación
          Descripción: Aprenda a instalar y configurar la interfaz de usuario de Nuxt en su aplicación.
          icon: i-lucide-cloud-download
        - label:'Iconos'(Edición española)
          icono: 'i-lucide-smile'
          No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.
        - label:"Los colores"
          icon: 'i-lucide-swatch-book'
          Descripción:'Elige un color primario y un color neutro de tu tema CSS Tailwind.'
        - label:'El tema'
          icono: 'i-lucide-cog'
          Descripción:'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts'.
    - label: Composables
      Icono: i-lucide-database
      Archivo: /docs/composables
      niños:
        - label: defineAtajos
          icon: i-lucide-file-text
          Descripción: Define atajos para tu aplicación.
          Archivo: /docs/composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          Descripción: Muestra un modal/slideover dentro de tu aplicación.
          Archivo: /docs/composables/use-overlay
        - label: useToast (Edición española)
          icon: i-lucide-file-text
          Descripción: Mostrar un brindis dentro de su aplicación.
          en: /docs/composables/use-toast
    - label: Componentes
      Icono: i-lucide-box
      Archivo: /docs/components
      Activo: Verdadero
      niños:
        - label: Enlace
          icon: i-lucide-file-text
          Descripción: Utiliza NuxtLink con superpoderes.
          En: /docs/componentes/enlace
        - label: Modal
          icon: i-lucide-file-text
          Descripción: Muestra un modal dentro de tu aplicación.
          Inicio/docs/componentes/modal
        - label: NavegaciónMenú
          icon: i-lucide-file-text
          Descripción: Muestra una lista de enlaces.
          /docs/componentes/menú de navegación
        - label: Paginación
          icon: i-lucide-file-text
          Descripción: Muestra una lista de páginas.
          /docs/componentes/paginación
        - label: Popover
          icon: i-lucide-file-text
          Description: Muestra un diálogo no modal que flota alrededor de un elemento de activación.
          /docs/componentes/popover
        - label: el progreso
          icon: i-lucide-file-text
          Descripción : Muestra una barra horizontal para indicar la progresión de la tarea .
          /docs/componentes/progreso
    - label : GitHub (Edición española)
      icon : i-simple - icons-github
      Categoría : 6K
      Dos :https://github.com/nuxt/ui
      Nombre : _ blank
    - label : ayuda
      icon : i-lucide - circle-help
      Discapacitados : Verdadero
  clase : ' w-full justify-center '
---
::

@@26000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop`items`como una matriz de objetos con las siguientes propiedades :

@@
@@
@@
@@
[`chip?: boolean | ChipProps`{lang="ts-type"}](PH0444)
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@
@@
@@
@@
@@ph070@@@ph071@@@ph072
@@
@@ph076 @@@@ph077
[`slot?: string`{lang="ts-type"}](#with-custom-slot)
@@ph086@@@ph087@@@ph088 @
@@@ph089@@@@ph090@@@ph091
@@
@@

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`,`target`, etc.

::component-code
---
Colapso: Verdad
Ignora:
  @104@puntos
  @5000@clase
Externo:
  @106@puntos
Externalidades:
  - NavigationMenuItem []
Props:
  items:
    - label: Guía
      Icono: i-lucide-book-open
      Inicio/docs/Getting-started
      niños:
        - label: Introducción
          Descripción: Componentes totalmente diseñados y personalizables para Nuxt.
          Vía: i-lucide-house
        - label: Instalación
          Descripción: Aprenda a instalar y configurar la interfaz de usuario de Nuxt en su aplicación.
          icon: i-lucide-cloud-download
        - label:'Iconos'(Edición española)
          icono: 'i-lucide-smile'
          No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.
        - label:'Los colores'
          icon: 'i-lucide-swatch-book'
          Descripción:'Elige un color primario y un color neutro de tu tema CSS Tailwind.'
        - label:'El tema'
          icono: 'i-lucide-cog'
          Descripción:'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts'.
    - label: Componentes
      Icono: i-lucide-database
      Archivo: /docs/composables
      niños:
        - label: defineAtajos
          icon: i-lucide-file-text
          Descripción: Define atajos para tu aplicación.
          Archivo: /docs/composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          Descripción: Muestra un modal/slideover dentro de tu aplicación.
          Archivo: /docs/composables/use-overlay
        - label: useToast (Edición española)
          icon: i-lucide-file-text
          Descripción: Mostrar un brindis dentro de su aplicación.
          en: /docs/composables/use-toast
    - label: Componentes
      Icono: i-lucide-box
      Archivo: /docs/components
      Activo: Verdadero
      niños:
        - label: Enlace
          icon: i-lucide-file-text
          Descripción: Utiliza NuxtLink con superpoderes.
          En: /docs/componentes/enlace
        - label: Diseño
          icon: i-lucide-file-text
          Descripción: Muestra un modal dentro de tu aplicación.
          Inicio/docs/componentes/modal
        - label: NavegaciónMenú
          icon: i-lucide-file-text
          Descripción: Muestra una lista de enlaces.
          /docs/componentes/menú de navegación
        - label: Paginación
          icon: i-lucide-file-text
          Descripción: Muestra una lista de páginas.
          /docs/componentes/paginación
        - label: Popover (Edición española)
          icon: i-lucide-file-text
          Description : Muestra un diálogo no modal que flota alrededor de un elemento de activación .
          /docs/componentes/popover
        - label : el progreso
          icon : i-lucide - file-text
          Descripción : Muestra una barra horizontal para indicar la progresión de la tarea .
          /docs/componentes/progreso
    - etiqueta : GitHub
      icon : i-simple - icons-github
      Categoría : 6K
      Dos :https://github.com/nuxt/ui
      Nombre : _ blank
    - label : ayuda
      icon : i-lucide - circle-help
      Discapacitados : Verdadero
  clase : ' w-full justify-center '
---
::

::note
También puede pasar un array de arrays a la prop`items`para mostrar grupos de elementos .
::

::tip
Cada elemento puede tomar un array`children`de objetos con las siguientes propiedades para crear submenús :

@131@@@132@
@133@@@134@
@135@@@136@
@137@@138@
@@pH139@

::

@@141@Orientación

Utilice el prop`orientation`para cambiar la orientación del menú de navegación .

::note
Si la orientación es`vertical`, un[Accordion](/docs/components/accordion)componente se utiliza para mostrar cada grupo . Se puede controlar el estado abierto de cada elemento utilizando el`open`y`defaultOpen`propiedades y cambiar el comportamiento utilizando el[`collapsible`](/docs/components/accordion#collapsible)y[`type`](/docs/components/accordion#multiple).
::

::note
Cuando la orientación es `vertical` y el menú no es `collapsed`, los niños se representan recursivamente como elementos, por lo que `ui.link` los estiliza.`ui.childLink` solo se aplica al `content` mostrado en la orientación `horizontal` y al [](#with-popover-in-items) cuando `collapsed`.
::

::component-code
---
Colapso: Verdad
Ignora:
  @171@artículos
  @@2002@clase
Externo:
  @@173@artículos
Externalidades:
  @@174@@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174@174 []
Props:
  Categoría:"Vertical"
  items:
    - -etiqueta: Enlaces
        Categoría:'Label'
      - label: Guía
        Icono: i-lucide-book-open
        niños:
          - label: Introducción
            Descripción: Componentes totalmente diseñados y personalizables para Nuxt.
            Vía: i-lucide-house
          - label: Instalación
            Descripción: Aprenda a instalar y configurar la interfaz de usuario de Nuxt en su aplicación.
            icon: i-lucide-cloud-download
          - label:'Iconos'(Edición española)
            icono: 'i-lucide-smile'
            No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.
          - label:'Los colores'
            icon: 'i-lucide-swatch-book'
            Descripción:'Elige un color primario y un color neutro de tu tema CSS Tailwind.'
          - label:'El tema'
            icono: 'i-lucide-cog'
            Descripción:'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts'.
      - label: Componentes
        Icono: i-lucide-database
        niños:
          - label: defineAtajos
            icon: i-lucide-file-text
            Descripción: Define atajos para tu aplicación.
            Archivo: /docs/composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            Descripción: Muestra un modal/slideover dentro de tu aplicación.
            Archivo: /docs/composables/use-overlay
          - label: useToast (Edición española)
            icon: i-lucide-file-text
            Descripción: Mostrar un brindis dentro de su aplicación.
            en: /docs/composables/use-toast
      - label: Componentes
        Icono: i-lucide-box
        Archivo: /docs/components
        Categoría: Trigger
        Activo: Verdadero
        por defecto: true
        niños:
          - label: Enlace
            icon: i-lucide-file-text
            Descripción: Utiliza NuxtLink con superpoderes.
            En: /docs/componentes/enlace
          - label: Modal (Edición española)
            icon: i-lucide-file-text
            Descripción: Muestra un modal dentro de tu aplicación.
            Inicio/docs/componentes/modal
          - label: NavegaciónMenú
            icon: i-lucide-file-text
            Descripción: Muestra una lista de enlaces.
            /docs/componentes/menú de navegación
          - label: Paginación
            icon: i-lucide-file-text
            Descripción: muestra una lista de páginas.
            /docs/componentes/paginación
          - label: Popover (Edición española)
            icon: i-lucide-file-text
            Description: Muestra un diálogo no modal que flota alrededor de un elemento de activación.
            /docs/componentes/popover
          - label: el progreso
            icon : i-lucide - file-text
            Descripción : Muestra una barra horizontal para indicar la progresión de la tarea .
            /docs/componentes/progreso
    - - etiqueta : GitHub
        icon : i-simple - icons-github
        Categoría : 6K
        Dos :https://github.com/nuxt/ui
        Nombre : _ blank
      - label : ayuda
        icon : i-lucide - circle-help
        Discapacitados : Verdadero
  clase : ' datos - [ orientación = vertical ] : w - 48 '
---
::

::note
Los grupos estarán espaciados cuando la orientación sea`horizontal`y separados cuando la orientación sea`vertical`.
::

### Colapsado

En la orientación`vertical`, utilice el prop`collapsed`para contraer el menú de navegación , esto puede ser útil en una barra lateral , por ejemplo .

::note
Puede utilizar los accesorios[`tooltip`](#with-tooltip-in-items)y[`popover`](#with-popover-in-items)para mostrar más información sobre los elementos colapsados .
::

::component-code
---
Colapso : Verdad
Ignora :
  @212@artículos
  @@213@orientación
  @214@clase
Externo :
  @215@artículos
Externalidades :
  @@2016@@2016@2016@2016@2016@2016@2016@2016@@2016@2016@@2016@2016@@2016@2016@@2016@@2016@2016@2016@@2016@2016@@2016@2016@2001116
items:
  ToolTip:
    @217@@verdad
    @218@false
  Popover:
    @219@@verdad
    @220@false
Props:
  Colapsado: Cierto
  Tooltip: Falso
  Popover: Falso
  Categoría:"Vertical"
  Items:
    - -etiqueta: Enlaces
        Categoría:'Label'
      - label: Dirección
        Icono: i-lucide-book-open
        niños:
          - label Introducción
            Descripción: Componentes totalmente diseñados y personalizables para Nuxt.
            Vía: i-lucide-house
          - label: Instalación
            Descripción: Aprenda a instalar y configurar la interfaz de usuario de Nuxt en su aplicación.
            icon: i-lucide-cloud-download
          - label:'Iconos'(Edición española)
            icono: 'i-lucide-smile'
            No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.
          - label:'Los colores'
            icon: 'i-lucide-swatch-book'
            Descripción:'Elige un color primario y un color neutro de tu tema CSS Tailwind.'
          - label:'El tema'
            icono: 'i-lucide-cog'
            Descripción:'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts'.
      - label: Componentes
        Icono: i-lucide-database
        niños:
          - label: defineAtajos
            icon: i-lucide-file-text
            Descripción: Define atajos para tu aplicación.
            Archivo: /docs/composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            Descripción: Muestra un modal/slideover dentro de tu aplicación.
            Archivo: /docs/composables/use-overlay
          - label: useToast (Edición española)
            icon: i-lucide-file-text
            Descripción: Muestra un brindis dentro de tu aplicación.
            en: /docs/composables/use-toast
      - label: Componentes
        Icono: i-lucide-box
        Archivo: /docs/components
        Activo: Verdadero
        niños:
          - label: Enlace
            icon: i-lucide-file-text
            Descripción: Utiliza NuxtLink con superpoderes.
            En: /docs/componentes/enlace
          - label: Modal (Edición española)
            icon: i-lucide-file-text
            Descripción: Muestra un modal dentro de tu aplicación.
            Inicio/docs/componentes/modal
          - label: NavegaciónMenú
            icon: i-lucide-file-text
            Descripción: Muestra una lista de enlaces.
            /docs/componentes/menú de navegación
          - label: Paginación
            icon: i-lucide-file-text
            Descripción: Muestra una lista de páginas.
            /docs/componentes/paginación
          - label: Popover
            icon: i-lucide-file-text
            Description: Muestra un diálogo no modal que flota alrededor de un elemento de activación.
            /docs/componentes/popover
          - label: el progreso
            icon: i-lucide-file-text
            Descripción : Muestra una barra horizontal para indicar la progresión de la tarea .
            /docs/componentes/progreso
    - - etiqueta : GitHub
        icon : i-simple - icons-github
        Categoría : 6K
        Dos :https://github.com/nuxt/ui
        Nombre : _ blank
      - label : ayuda
        icon : i-lucide - circle-help
        Discapacidad : Verdadero
---
::

@@243@highlight (Edición española)

Utilice el prop`highlight`para mostrar un borde resaltado para el elemento activo .

Utilice el`highlight-color`prop para cambiar el color del borde . Por defecto a la`color`prop .

::component-code
---
Colapso : Verdad
Categoría : true
Ignora :
  @247@artículos
  @248@clase
Externo :
  @249@artículos
Externalidades :
  @@2500@@25000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props :
  Destacado : Verdadero
  highlightColor : ' primario '
  Categoría:"Horizontal"
  items:
    - -etiqueta: Guía
        icon: i-lucide-book-open
        niños:
          - label: Introducción
            Descripción: Componentes totalmente diseñados y personalizables para Nuxt.
            Vía: i-lucide-house
          - label: Instalación
            Descripción: Aprenda a instalar y configurar la interfaz de usuario de Nuxt en su aplicación.
            icon: i-lucide-cloud-download
          - label:'Iconos'(Edición española)
            icono: 'i-lucide-smile'
            No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.
          - label:'Los colores'
            icon: 'i-lucide-swatch-book'
            Descripción:'Elige un color primario y un color neutro de tu tema CSS Tailwind.'
          - label:'El tema'
            icono: 'i-lucide-cog'
            Descripción:'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts'.
      - label: Composables
        Icono: i-lucide-database
        niños:
          - label: defineAtajos
            icon: i-lucide-file-text
            Descripción: Define atajos para tu aplicación.
            Archivo: /docs/composables/define-shortcuts
          - label: Superpuesto
            icon: i-lucide-file-text
            Descripción: Muestra un modal/slideover dentro de tu aplicación.
            Archivo: /docs/composables/use-overlay
          - label: useToast (Edición española)
            icon: i-lucide-file-text
            Descripción: Muestra un brindis dentro de tu aplicación.
            en: /docs/composables/use-toast
      - label: Componentes
        Icono: i-lucide-box
        Archivo: /docs/components
        Activo: Verdadero
        por defecto: true
        niños:
          - label: Enlace
            icon: i-lucide-file-text
            Descripción: Utiliza NuxtLink con superpoderes.
            En: /docs/componentes/enlace
          - label: Diseño
            icon: i-lucide-file-text
            Descripción: Muestra un modal dentro de tu aplicación.
            Inicio/docs/componentes/modal
          - label: NavegaciónMenú
            icon : i-lucide - file-text
            Descripción : Muestra una lista de enlaces .
            /docs/componentes/menú de navegación
          - label : Paginación
            icon : i-lucide - file-text
            Descripción : muestra una lista de páginas .
            /docs/componentes/paginación
          - label : Popover
            icon : i-lucide - file-text
            Description : Muestra un diálogo no modal que flota alrededor de un elemento de activación .
            /docs/componentes/popover
          - label : el progreso
            icon : i-lucide - file-text
            Descripción : Muestra una barra horizontal para indicar la progresión de la tarea .
            /docs/componentes/progreso
    - - etiqueta : GitHub
        icon : i-simple - icons-github
        Categoría : 6K
        Dos :https://github.com/nuxt/ui
        Nombre : _ blank
      - label : ayuda
        icon : i-lucide - circle-help
        Discapacidad : Verdadero
  class : ' datos - [ orientation = horizontal ] : border-b border-default datos - [ orientation = horizontal ] : w-full datos - [ orientation = vertical ] : w - 48 '
---
::

::note
En este ejemplo , la clase`border-b`se aplica para mostrar un borde en la orientación`horizontal`, esto no se hace de forma predeterminada para que pueda tener una pizarra limpia para trabajar .
::

::caution
En la orientación de `vertical`, el prop de `highlight` solo resalta el borde de los niños activos.
::

@276@color en español

Utilice el prop `color` para cambiar el color del menú de navegación.

::component-code
---
Colapso: Verdad
Ignora:
  @278@artículos
  @279@clase
Externo:
  @280000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@281@@281@281@281@281@281@281@281@281@281@281@281@281@281@281@281@281@281@2011 []
Props:
  Color: Neutral
  items:
    - -etiqueta: Guía
        Icono: i-lucide-book-open
        Inicio/docs/Getting-started
      - label: Composables
        Icono: i-lucide-database
        Archivo: /docs/composables
      - label: Componentes
        Icono: i-lucide-box
        Archivo: /docs/components
        Activo: Verdadero
    - -etiqueta: GitHub
        icon : i-simple - icons-github
        Categoría : 6K
        Dos :https://github.com/nuxt/ui
        Nombre : _ blank
  Categoría : w-full
---
::

@@286@Variación

Utilice el prop`variant`para cambiar la variante del menú de navegación .

::component-code
---
Colapso : Verdad
Ignora :
  @288@artículos
  @289@clase
Externo :
  @290@artículos
Externalidades :
  @@291@@291@291@291@291@291@@291@291@291@@291@@291@291@291@291@291@291@291@291@291@291@291@291@291@291@291@291@291@2910000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props :
  Color : Neutro
  Variación : Link
  Destacado : Falso
  Items :
    - - etiqueta : Guía
        Icono : i-lucide - book-open
        Inicio/docs/Getting-started
      - label : Composables
        Icono : i-lucide - database
        Archivo :/docs/composables
      - label : Componentes
        Icono : i-lucide - box
        Archivo :/docs/components
        Activo : Verdadero
    - - etiqueta : GitHub
        icon : i-simple - icons-github
        Categoría : 6K
        Dos :https://github.com/nuxt/ui
        Nombre : _ blank
  Categoría : w-full
---
::

::note
El`highlight`prop cambia el`pill`variante de estilo de elemento activo . Pruébelo para ver la diferencia .
::

### Trailing Icon (Edición española)

Utilice el prop`trailing-icon`para personalizar el[Icon](/docs/components/icon)de cada elemento .

::tip
También puede establecer un icono para un elemento específico mediante la propiedad`trailingIcon`en el objeto elemento .
::

::component-code
---
Colapso : Verdad
Ignora :
  @306@artículos
  @307@clase
Externo :
  @308@artículos
Externalidades :
  - NavigationMenuItem [ ]
Props :
  TrailingIcono : ' i-lucide - arrow-down '
  items:
    - label: Guía
      Icono: i-lucide-book-open
      Inicio/docs/Getting-started
      niños:
        - label: Introducción
          Descripción: Componentes totalmente diseñados y personalizables para Nuxt.
          Vía: i-lucide-house
        - label: Instalación
          Descripción: Aprenda a instalar y configurar la interfaz de usuario de Nuxt en su aplicación.
          icon: i-lucide-cloud-download
        - label:'Iconos'(Edición española)
          icono: 'i-lucide-smile'
          No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.
        - label:'Los colores'
          icon: 'i-lucide-swatch-book'
          Descripción:'Elige un color primario y un color neutro de tu tema CSS Tailwind.'
        - label:'Temas'
          icono: 'i-lucide-cog'
          Descripción:'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts'.
    - label: Componentes
      Icono: i-lucide-database
      Archivo: /docs/composables
      niños:
        - label: defineAtajos
          icon: i-lucide-file-text
          Descripción: Define atajos para tu aplicación.
          Archivo: /docs/composables/define-shortcuts
        - label: Superpuesto
          icon: i-lucide-file-text
          Descripción: Muestra un modal/slideover dentro de tu aplicación.
          Archivo: /docs/composables/use-overlay
        - label: useToast (Edición española)
          icon: i-lucide-file-text
          Descripción: Muestra un brindis dentro de tu aplicación.
          en: /docs/composables/use-toast
    - label: Componentes
      Icono: i-lucide-box
      Archivo: /docs/components
      Activo: Verdadero
      niños:
        - label: Enlace
          icon: i-lucide-file-text
          Descripción: Utiliza NuxtLink con superpoderes.
          En: /docs/componentes/enlace
        - label: Modal (Edición española)
          icon: i-lucide-file-text
          Descripción: Muestra un modal dentro de tu aplicación.
          Inicio/docs/componentes/modal
        - label: NavegaciónMenú
          icon: i-lucide-file-text
          Descripción: Muestra una lista de enlaces.
          /docs/componentes/menú de navegación
        - label: Paginación
          icon: i-lucide-file-text
          Descripción: Muestra una lista de páginas.
          /docs/componentes/paginación
        - label: Popover
          icon: i-lucide-file-text
          Description: Muestra un diálogo no modal que flota alrededor de un elemento de activación.
          /docs/componentes/popover
        - label: el progreso
          icon: i-lucide-file-text
          Descripción: Muestra una barra horizontal para indicar la progresión de la tarea.
          /docs/componentes/progreso
  clase: 'w-full justify-center'
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

@333@Arreaza

Utilice la prop `arrow` para mostrar una flecha en el contenido del menú de navegación cuando los elementos tienen hijos.

::component-code
---
Colapso: Verdad
Ignora:
  @335@artículos
  @336 @@ Arreaza
  @337 @ clase
Externo:
  @338@artículos
Externalidades:
  - NavigationMenuItem []
Props:
  Arrow: Verdad
  Items:
    - label: Edición española
      Icono: i-lucide-book-open
      Inicio/docs/Getting-started
      niños:
        - label: Introducción
          Descripción: Componentes totalmente diseñados y personalizables para Nuxt.
          Vía: i-lucide-house
        - label: Instalación
          Descripción: Aprenda a instalar y configurar la interfaz de usuario de Nuxt en su aplicación.
          icon: i-lucide-cloud-download
        - label:'Iconos'(Edición española)
          icono: 'i-lucide-smile'
          No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.
        - label:'Los colores'
          icon: 'i-lucide-swatch-book'
          Descripción:'Elige un color primario y un color neutro de tu tema CSS Tailwind.'
        - label:'El tema'
          icono: 'i-lucide-cog'
          Descripción:'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts'.
    - label: Composables
      Icono: i-lucide-database
      Archivo: /docs/composables
      niños:
        - label: defineAtajos
          icon: i-lucide-file-text
          Descripción: Define atajos para tu aplicación.
          Archivo: /docs/composables/define-shortcuts
        - label: Superpuesto
          icon: i-lucide-file-text
          Descripción: Muestra un modal/slideover dentro de tu aplicación.
          Archivo: /docs/composables/use-overlay
        - label: useToast
          icon: i-lucide-file-text
          Descripción: Muestra un brindis dentro de tu aplicación.
          en: /docs/composables/use-toast
    - label: Componentes
      Icono: i-lucide-box
      Archivo: /docs/components
      Activo: Verdadero
      niños:
        - label: Enlace
          icon: i-lucide-file-text
          Descripción: Utiliza NuxtLink con superpoderes.
          En: /docs/componentes/enlace
        - label: Diseño
          icon: i-lucide-file-text
          Descripción: Muestra un modal dentro de tu aplicación.
          Inicio/docs/componentes/modal
        - label: NavegaciónMenú
          icon: i-lucide-file-text
          Descripción: Muestra una lista de enlaces.
          /docs/componentes/menú de navegación
        - label: Paginación
          icon: i-lucide-file-text
          Descripción: muestra una lista de páginas.
          /docs/componentes/paginación
        - label: Popover
          icon: i-lucide-file-text
          Description: Muestra un diálogo no modal que flota alrededor de un elemento de activación.
          /docs/componentes/popover
        - label: el progreso
          icon: i-lucide-file-text
          Descripción: Muestra una barra horizontal para indicar la progresión de la tarea.
          /docs/componentes/progreso
  clase: 'w-full justify-center'
---
::

::note
La flecha está animada para seguir el elemento activo.
::

### Orientación del contenido

Utilice el prop `content-orientation` para cambiar la orientación del contenido.

::warning
Esto sólo funciona cuando `orientation` es `horizontal`.
::

::component-code
---
Colapso: Verdad
Ignora:
  @363@artículos
  @364 @@ Dirección
  @365@clase
Externo:
  @366@artículos
Externalidades:
  - NavigationMenuItem []
Props:
  Arrow: Verdad
  Categoría:"Vertical"
  items:
    - label: Dirección
      icon: i-lucide-book-open
      Inicio/docs/Getting-started
      niños:
        - label: Introducción
          Descripción: Componentes totalmente diseñados y personalizables para Nuxt.
          Vía: i-lucide-house
        - label: Instalación
          Descripción: Aprenda a instalar y configurar la interfaz de usuario de Nuxt en su aplicación.
          icon: i-lucide-cloud-download
        - label:'Iconos'(Edición española)
          icono: 'i-lucide-smile'
          No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.
    - label: Componentes
      Icono: i-lucide-database
      Archivo: /docs/composables
      niños:
        - label: defineAtajos
          icon: i-lucide-file-text
          Descripción: Define atajos para tu aplicación.
          Archivo: /docs/composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          Descripción: Muestra un modal/slideover dentro de tu aplicación.
          Archivo: /docs/composables/use-overlay
        - label: useToast (Edición española)
          icon: i-lucide-file-text
          Descripción: Muestra un brindis dentro de tu aplicación.
          en: /docs/composables/use-toast
    - label: Componentes
      Icono: i-lucide-box
      Archivo: /docs/components
      Activo: Verdadero
      niños:
        - label: Enlace
          icon: i-lucide-file-text
          Descripción: Utiliza NuxtLink con superpoderes.
          En: /docs/componentes/enlace
        - label: Modal
          icon: i-lucide-file-text
          Descripción: Muestra un modal dentro de tu aplicación.
          Inicio/docs/componentes/modal
        - label: NavegaciónMenú
          icon: i-lucide-file-text
          Descripción: Muestra una lista de enlaces.
          /docs/componentes/menú de navegación
        - label: Paginación
          icon: i-lucide-file-text
          Descripción: Muestra una lista de páginas.
          /docs/componentes/paginación
  clase: 'w-full justify-center'
---
::

@381@unmount

Utilice el prop `unmount-on-hide` para controlar el comportamiento de desmontaje del contenido.

::component-code
---
Colapso: Verdad
Ignora:
  @384@artículos
  @385 @@ Arreaza
  @386 @ clase
Externo:
  @387@artículos
Externalidades:
  - NavigationMenuItem []
Props:
  Desconocido: Falso
  items:
    - label: Guía
      icon: i-lucide-book-open
      Inicio/docs/Getting-started
      niños:
        - label: Introducción
          Descripción: Componentes totalmente diseñados y personalizables para Nuxt.
          Vía: i-lucide-house
        - label: Instalación
          Descripción: Aprenda a instalar y configurar la interfaz de usuario de Nuxt en su aplicación.
          icon: i-lucide-cloud-download
        - label:'Iconos'(Edición española)
          icono: 'i-lucide-smile'
          No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.
        - label:'Los colores'
          icon: 'i-lucide-swatch-book'
          Descripción:'Elige un color primario y un color neutro de tu tema CSS Tailwind.'
        - label:'Proyecto'
          icono: 'i-lucide-cog'
          Descripción:'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts'.
    - label: Componentes
      Icono: i-lucide-database
      Archivo: /docs/composables
      niños:
        - label: defineAtajos
          icon: i-lucide-file-text
          Descripción: Define atajos para tu aplicación.
          Archivo: /docs/composables/define-shortcuts
        - label: Superpuesto
          icon: i-lucide-file-text
          Descripción: Muestra un modal/slideover dentro de tu aplicación.
          Archivo: /docs/composables/use-overlay
        - label: useToast (Edición española)
          icon: i-lucide-file-text
          Descripción: Muestra un brindis dentro de tu aplicación.
          en: /docs/composables/use-toast
    - label: Componentes
      Icono: i-lucide-box
      Archivo: /docs/components
      Activo: Verdadero
      niños:
        - label: Enlace
          icon: i-lucide-file-text
          Descripción: Utiliza NuxtLink con superpoderes.
          En: /docs/componentes/enlace
        - label: Modal (Edición española)
          icon: i-lucide-file-text
          Descripción: Muestra un modal dentro de tu aplicación.
          Inicio/docs/componentes/modal
        - label: NavegaciónMenú
          icon: i-lucide-file-text
          Descripción: Muestra una lista de enlaces.
          /docs/componentes/menú de navegación
        - label: Paginación
          icon: i-lucide-file-text
          Descripción: muestra una lista de páginas.
          /docs/componentes/paginación
        - label: Popover (Edición española)
          icon: i-lucide-file-text
          Description: Muestra un diálogo no modal que flota alrededor de un elemento de activación.
          /docs/componentes/popover
        - label: el progreso
          icon: i-lucide-file-text
          Descripción: Muestra una barra horizontal para indicar la progresión de la tarea.
          /docs/componentes/progreso
  clase: 'w-full justify-center'
---
::

::note
Puede inspeccionar el DOM para ver el contenido de cada elemento que se representa.
::

@408 Ejemplos

### Control elemento activo

Puede controlar los elementos activos utilizando la prop `default-value` o la directiva `v-model` con la directiva `value` del elemento. Si no se proporciona `value`, el valor predeterminado es `item-${index}` para los elementos de nivel superior o `item-${level}-${index}` para los elementos anidados.

::component-example
---
Colapso: Verdad
Nombre: 'navigación-menu-model-valor-ejemplo'
---
::

::tip
Utilice el prop `value-key` para cambiar la clave utilizada para hacer coincidir los elementos cuando se proporciona un `v-model` o `default-value`.
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede cambiar el elemento activo presionando: kbd{value="1"},: kbd{value="2"}, o: kbd{value="3"}.
::

### Con información sobre herramientas en elementos

Cuando la orientación es `vertical` y el menú es `collapsed`, puede establecer la propiedad `tooltip` en `true` para mostrar una [Tooltip](/docs/components/tooltip) alrededor de los elementos con su etiqueta, pero también puede usar la propiedad `tooltip` en cada elemento para anular la información de herramientas predeterminada. En la orientación, puede utilizar la propiedad `tooltip` en cada elemento para mostrar un [Tooltip](/docs/components/tooltip) alrededor de los elementos.

::note
La propiedad `tooltip` de un elemento siempre mostrará una información sobre herramientas, independientemente de la propiedad global `tooltip`.
::

Puede pasar cualquier propiedad del componente [Tooltip](/docs/components/tooltip) globalmente o en cada elemento.

::component-code
---
Colapso: Verdad
Ignora:
  @449@artículos
  @@F450@clase
Externo:
  @451@artículos
Externalidades:
  - NavigationMenuItem [][]
Items:
  ToolTip:
    @@pH453@verdad
    @454 @ Falso
Props:
  tooltip: Verdad
  Colapsado: Cierto
  Categoría:"Vertical"
  Items:
    - -etiqueta: Enlaces
        Categoría:'Label'
      - label: Dirección
        Icono: i-lucide-book-open
        niños:
          - label: Introducción
            Descripción: Componentes totalmente diseñados y personalizables para Nuxt.
            Vía: i-lucide-house
          - label: Instalación
            Descripción: Aprenda a instalar y configurar la interfaz de usuario de Nuxt en su aplicación.
            icon: i-lucide-cloud-download
          - label:'Iconos'(Edición española)
            icono: 'i-lucide-smile'
            No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.
          - label:'Los colores'
            icon: 'i-lucide-swatch-book'
            Descripción:'Elige un color primario y un color neutro de tu tema CSS Tailwind.'
          - label:'El tema'
            icono: 'i-lucide-cog'
            Descripción:'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts'.
      - label: Componentes
        Icono: i-lucide-database
        niños:
          - label: defineAtajos
            icon: i-lucide-file-text
            Descripción: Define atajos para tu aplicación.
            Archivo: /docs/composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            Descripción: Muestra un modal/slideover dentro de tu aplicación.
            Archivo: /docs/composables/use-overlay
          - label: useToast (Edición española)
            icon: i-lucide-file-text
            Descripción: Muestra un brindis dentro de tu aplicación.
            en: /docs/composables/use-toast
      - label: Componentes
        Icono: i-lucide-box
        Archivo: /docs/components
        Activo: Verdadero
        niños:
          - label: Enlace
            icon: i-lucide-file-text
            Descripción: Utiliza NuxtLink con superpoderes.
            En: /docs/componentes/enlace
          - label: Modal (Edición española)
            icon: i-lucide-file-text
            Descripción: Muestra un modal dentro de tu aplicación.
            Inicio/docs/componentes/modal
          - label: NavegaciónMenú
            icon: i-lucide-file-text
            Descripción : Muestra una lista de enlaces .
            /docs/componentes/menú de navegación
          - label : Paginación
            icon : i-lucide - file-text
            Descripción : Muestra una lista de páginas .
            /docs/componentes/paginación
          - label : Popover (Edición española)
            icon : i-lucide - file-text
            Description : Muestra un diálogo no modal que flota alrededor de un elemento de activación .
            /docs/componentes/popover
          - label : el progreso
            icon : i-lucide - file-text
            Descripción : Muestra una barra horizontal para indicar la progresión de la tarea .
            /docs/componentes/progreso
    - - etiqueta : GitHub
        icon : i-simple - icons-github
        Categoría : 6K
        Dos :https://github.com/nuxt/ui
        Nombre : _ blank
        ToolTip :
          texto : ' Abierto en GitHub '
          kbd :
            @476@60000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      - label : ayuda
        icon : i-lucide - circle-help
        Discapacitados: Verdadero
---
::

### Con popover en los elementos

Cuando la orientación es `vertical` y el menú es `collapsed`, puede configurar el `popover` prop a `true` para mostrar un [Popover](/docs/components/popover) alrededor de los elementos con sus hijos, pero también puede usar la propiedad `popover` en cada elemento para anular el popover predeterminado.

::note
La propiedad `popover` de un elemento siempre mostrará un popover independientemente de la propiedad global `popover`.
::

Puede pasar cualquier propiedad del componente [Popover](/docs/components/popover) globalmente o en cada elemento.

::component-code
---
Colapso: Verdad
Ignora:
  @494@artículos
  - orientación
  @496@clase
Externo:
  @497@artículos
Externalidades:
  - NavigationMenuItem [][]
items:
  Popover:
    @499@@verdad
    @500@false
Props:
  Popover: Verdad
  Colapsado: Cierto
  Categoría:"Vertical"
  Items:
    - -etiqueta: Enlaces
        Categoría:'Label'
      - label: Edición española
        Icono: i-lucide-book-open
        niños:
          - label: Introducción
            Descripción: Componentes totalmente diseñados y personalizables para Nuxt.
            Vía: i-lucide-house
          - label: Instalación
            Descripción: Aprenda a instalar y configurar la interfaz de usuario de Nuxt en su aplicación.
            icon: i-lucide-cloud-download
          - label:'Iconos'(Edición española)
            icono: 'i-lucide-smile'
            No tienes nada que hacer,@ nuxt/icon se encargará de ello automáticamente.
          - label:'Los colores'
            icon: 'i-lucide-swatch-book'
            Descripción:'Elige un color primario y un color neutro de tu tema CSS Tailwind.'
          - label:"El tema"
            icono: 'i-lucide-cog'
            Descripción:'Puede personalizar los componentes utilizando los accesorios `class`/`ui` o en su app.config.ts'.
      - label: Componentes
        Icono: i-lucide-database
        Popover:
          Vía:"Click"
        niños:
          - label: defineAtajos
            icon: i-lucide-file-text
            Descripción: Define atajos para tu aplicación.
            Archivo: /docs/composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            Descripción: Muestra un modal/slideover dentro de tu aplicación.
            Archivo: /docs/composables/use-overlay
          - label: useToast (Edición española)
            icon: i-lucide-file-text
            Descripción: Muestra un brindis dentro de tu aplicación.
            en: /docs/composables/use-toast
      - label: Componentes
        Icono: i-lucide-box
        Archivo: /docs/components
        Activo: Verdadero
        niños:
          - label: Enlace
            icon: i-lucide-file-text
            Descripción: Utiliza NuxtLink con superpoderes.
            En: /docs/componentes/enlace
          - label: Modal (Edición española)
            icon: i-lucide-file-text
            Descripción: Muestra un modal dentro de tu aplicación.
            Inicio/docs/componentes/modal
          - label: NavegaciónMenú
            icon: i-lucide-file-text
            Descripción : Muestra una lista de enlaces .
            /docs/componentes/menú de navegación
          - label : Paginación
            icon : i-lucide - file-text
            Descripción : muestra una lista de páginas .
            /docs/componentes/paginación
          - label : Popover (Edición española)
            icon : i-lucide - file-text
            Description : Muestra un diálogo no modal que flota alrededor de un elemento de activación .
            /docs/componentes/popover
          - label : el progreso
            icon : i-lucide - file-text
            Descripción : Muestra una barra horizontal para indicar la progresión de la tarea .
            /docs/componentes/progreso
    - - etiqueta : GitHub
        icon : i-simple - icons-github
        Categoría : 6K
        Dos :https://github.com/nuxt/ui
        Nombre : _ blank
        ToolTip :
          texto : ' Abierto en GitHub '
          kbd :
            @225@6k
      - label : ayuda
        icon : i-lucide - circle-help
        Discapacidad: Verdadero
---
::

::tip{to="#with-content-slot"}
Puede utilizar la ranura `#content` para personalizar el contenido del popover en la orientación `vertical`.
::

### Con chip en artículos: badge{label="4.5+" class="align-text-top"}

Utilice la propiedad `chip` para mostrar un [Chip](/docs/components/chip) alrededor del icono de los elementos, puede pasar cualquiera de sus accesorios.

::component-code
---
Colapso: Verdad
Ignora:
  @@353@artículos
  @534@clase
Externo:
  @535@artículos
Externalidades:
  - NavigationMenuItem [][]
Props:
  Colapsado: Verdadero
  Categoría:"Vertical"
  Items:
    - -etiqueta: Guía
        icon: i-lucide-book-open
        El chip:
          Color: El error
      - label: Componentes
        Icono: i-lucide-database
        El chip:
          Categoría: Info
          El texto: 3
      - label : Componentes
        Icono : i-lucide - box
        Archivo :/docs/components
        Activo : Verdadero
        Chips : Verdad
    - - etiqueta : GitHub
        icon : i-simple - icons-github
        Dos :https://github.com/nuxt/ui
        Nombre : _ blank
      - label : ayuda
        icon : i-lucide - circle-help
        Discapacitados : Verdadero
---
::

### Con barra de pestañas inferior

Utilice el prop`ui`para transformar el menú de navegación en una barra de pestañas inferior de estilo móvil con iconos y etiquetas pequeñas , similar a YouTube o Instagram .

::component-example
---
Colapso : Verdad
Nombre : ' navigación-menu - bottom-tab - bar-ejemplo '
---
::

### Con etiquetas colapsadas

Utilice el prop`ui`para mostrar una etiqueta debajo de cada icono cuando se colapsa .

::component-example
---
Colapso : Verdad
Nombre : ' navigación-menu - collapsed-label - example '
---
::

::tip
También puede hacer esto globalmente a través del`app.config.ts`usando[`compoundVariants`](/docs/getting-started/theme/components#compound-variants):

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    navigationMenu: {
      compoundVariants: [{
        orientation: 'vertical',
        collapsed: true,
        class: {
          link: 'flex-col',
          linkLabel: 'block text-[10px]/3 text-center'
        }
      }]
    }
  }
})
```

::

### Con ranura personalizada

Utilice la propiedad`slot`para personalizar un elemento específico .

Tendrás acceso a los siguientes slots :

@@570@@571@@572
@@573@@574@@575
@@576@@577@@578
{lang="ts-type"}{lang="ts-type"}
@582@@583@584

::component-example
---
Colapso: Verdad
Nombre del archivo: 'navigation-menu-custom-slot-example'
---
::

::tip{to="#slots"}
También puede utilizar las ranuras `#item`,`#item-leading`,`#item-label`,`#item-trailing` y `#item-content` para personalizar todos los artículos.
::

### Con ranura trasera

Utilice la ranura `#item-trailing` o la propiedad `slot`(`#{{ item.slot }}-trailing`) para agregar un [DropdownMenu](/docs/components/dropdown-menu) que aparece en el hover, similar a Notion o Linear.

::component-example
---
Colapso: Verdad
Nombre: 'navigación-menu-trailing-slot-example'
---
::

### Con ranura de contenido

Utilice la ranura `#item-content` o la propiedad `slot`(`#{{ item.slot }}-content`) para personalizar el contenido de un elemento específico.

::component-example
---
Colapso: Verdad
Nombre: 'navigation-menu-content-slot-example'
---
::

::note
En este ejemplo, añadimos la clase `sm:w-(--reka-navigation-menu-viewport-width)` en la `viewport` para tener un ancho dinámico.
::

@@pH604

@500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@606@espanol

Componentes de slots

### Emisiones

Componentes Emisiones

@800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog
