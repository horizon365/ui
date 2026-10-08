---
description: 'Componente que muestra una secuencia de eventos con fechas, títulos, iconos o avatares.'
category: data
keywords:
  - activity feed
  - history
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Timeline.vue
---

@@pH000@@Uso del producto

Utilice el componente Línea de tiempo para mostrar una lista de elementos en una línea de tiempo.

::component-code
---
Colapso: Verdad
Escondido:
  @001@clase
  @@@@@@defaltValue (en inglés)
Ignora:
  @@pH000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@clase004
  @@pH005@@defaultValue
Externo:
  @0006@artículos
Externalidades:
  @@00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Valoración: 2
  Items:
    - fecha:'15 de marzo de 2025'
      Título: Proyecto Kick Off
      Description: 'Inició el proyecto con la alineación del equipo.Configure los hitos del proyecto y los recursos asignados.'
      Archivo de la etiqueta: i-lucide-rocket
    - fecha:'22 de marzo de 2025'
      Título:"Diseño"
      Descripción:'Talleres de investigación y diseño de usuarios. Wireframes creados y prototipos para pruebas de usuarios.'
      icono: 'i-lucide-palette'
    - fecha:'29 de marzo de 2025'
      Título: Sprint de desarrollo
      Descripción:'Desarrollo de frontend y backend. Implementado características básicas e integrado con API.'
      icon: 'i-lucide-code'
    - date:'5 de abril de 2025'
      Título:"Pruebas y Despliegue"
      Descripción:'Pruebas de control de calidad y optimización del rendimiento. Implementado la aplicación en producción.'
      icono: 'i-lucide-check-circle'
  Categoría: W-96
---
::

@@12000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@
@@
@@
@@
@@

::component-code
---
Ignora:
  @@45000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @46@clase
  @@pH047@defaultValue (en inglés)
Externo:
  @@48000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@499@@4999 [en línea]
Props:
  Valoración: 2
  items:
    - fecha:'15 de marzo de 2025'
      Título: Proyecto Kick Off
      Description: 'Inició el proyecto con la alineación del equipo.Configure los hitos del proyecto y los recursos asignados.'
      Archivo de la etiqueta: i-lucide-rocket
    - fecha:'22 de marzo de 2025'
      Título:"Diseño"
      Descripción:'Talleres de investigación y diseño de usuarios. Wireframes creados y prototipos para pruebas de usuarios.'
      icono: 'i-lucide-palette'
    - fecha:'29 de marzo de 2025'
      Título: Sprint de desarrollo
      Descripción:'Desarrollo de frontend y backend. Implementado características básicas e integrado con API.'
      icon: 'i-lucide-code'
    - date:'5 de abril de 2025'
      Título:"Pruebas y Despliegue"
      Descripción:'Pruebas de control de calidad y optimización del rendimiento. Implementado la aplicación en producción.'
      icono: 'i-lucide-check-circle'
  Categoría: W-96
---
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `color` para cambiar el color de los elementos activos en una línea de tiempo.

::component-code
---
Ignora:
  @@506@artículos
  @@50000@clase
  @@pH058@@defaultValue
Externo:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@F060@F060 [en línea]
Props:
  Color: Neutro
  Valoración: 2
  items:
    - fecha:'15 de marzo de 2025'
      Título: Proyecto Kick Off
      Description: 'Inició el proyecto con la alineación del equipo.Configure los hitos del proyecto y los recursos asignados.'
      Archivo de la etiqueta: i-lucide-rocket
    - fecha:'22 de marzo de 2025'
      Título:"Diseño"
      Descripción:'Talleres de investigación y diseño de usuarios. Wireframes creados y prototipos para pruebas de usuarios.'
      icono: 'i-lucide-palette'
    - fecha:'29 de marzo de 2025'
      Título: Sprint de desarrollo
      Descripción:'Desarrollo de frontend y backend. Implementado características básicas e integrado con API.'
      icon: 'i-lucide-code'
    - date:'5 de abril de 2025'
      Título:"Pruebas y pruebas"
      Descripción:'Pruebas de control de calidad y optimización del rendimiento. Implementado la aplicación en producción.'
      icono: 'i-lucide-check-circle'
  Categoría: W-96
---
::

@065 @@ Tamaño

Utilice el prop `size` para cambiar el tamaño de la línea de tiempo.

::component-code
---
Ignora:
  @067 @ Artículos
  @068@clase
  @@pH069@defaultValue (en inglés)
Externo:
  @070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@701@@TimelineItem (en inglés)
Props:
  Tamaño: XS
  Valoración: 2
  Items:
    - fecha:'15 de marzo de 2025'
      Título: Proyecto Kick Off
      Description: 'Inició el proyecto con la alineación del equipo.Configure los hitos del proyecto y los recursos asignados.'
      Archivo de la etiqueta: i-lucide-rocket
    - fecha:'22 de marzo de 2025'
      Título:"Diseño"
      Descripción:'Talleres de investigación y diseño de usuarios. Wireframes creados y prototipos para pruebas de usuarios.'
      icono: 'i-lucide-palette'
    - fecha:'29 de marzo de 2025'
      Título: Sprint de desarrollo
      Descripción:'Desarrollo de frontend y backend. Implementado características básicas e integrado con API.'
      icon: 'i-lucide-code'
    - date:'5 de abril de 2025'
      Título:"Pruebas y pruebas"
      Descripción:'Pruebas de control de calidad y optimización del rendimiento. Implementado la aplicación en producción.'
      icono: 'i-lucide-check-circle'
  Categoría: W-96
---
::

@@76@@Dirección

Utilice el prop `orientation` para cambiar la orientación de la línea de tiempo. Predeterminados a `vertical`.

::component-code
---
Ignora:
  @799@artículos
  @080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH081@@defaultValue (en inglés)
Externo:
  @082@artículos
Externalidades:
  @@883@@300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Categoría:"Horizontal"
  Valoración: 2
  Items:
    - fecha:'15 de marzo de 2025'
      Título: Proyecto Kickoff
      Descripción:'Inició el proyecto con alineación de equipo.'
      Archivo de la etiqueta: i-lucide-rocket
    - fecha:'22 de marzo de 2025'
      Título:"Diseño"
      Descripción:'Talleres de investigación y diseño de usuarios.'
      icono: 'i-lucide-palette'
    - fecha:'29 de marzo de 2025'
      Título: Sprint de desarrollo
      Descripción: Desarrollo Frontend y Backend.
      icon: 'i-lucide-code'
    - date:'5 de abril de 2025'
      Título:"Pruebas y pruebas"
      Descripción:'Pruebas de QA y optimización del rendimiento.'
      icono: 'i-lucide-check-circle'
  Categoría: w-full
Categoría: overflow-x-auto
---
::

@888@reversa

Utilice el prop inverso para invertir la dirección de la línea de tiempo.

::component-code
---
Ignora:
  @089 @ artículos
  @090@clase
  @@pH091@@defaultValue
Externo:
  @@2009@artículos
Externalidades:
  @@P093@@TimelineItem [en línea]
Props:
  Reverso: Verdad
  Modelos: 2
  Categoría:"Vertical"
  Items:
    - fecha:'15 de marzo de 2025'
      Título: Proyecto Kickoff
      Descripción:'Inició el proyecto con alineación de equipo.'
      Archivo de la etiqueta: i-lucide-rocket
    - fecha:'22 de marzo de 2025'
      Título:"Diseño"
      Descripción:'Talleres de investigación y diseño de usuarios.'
      icono: 'i-lucide-palette'
    - fecha:'29 de marzo de 2025'
      Título: Sprint de desarrollo
      Descripción: Desarrollo Frontend y Backend.
      icon: 'i-lucide-code'
    - date:'5 de abril de 2025'
      Título:"Pruebas y pruebas"
      Descripción:'Pruebas de QA y optimización del rendimiento.'
      icono: 'i-lucide-check-circle'
  Categoría: w-full
Categoría: overflow-x-auto
---
::

@098@ejemplos

### Control elemento activo

Puede controlar el elemento activo mediante el prop `default-value` o la directiva `v-model` con el `value` del elemento.

Ejemplo de componente {name="timeline-model-value-example" prettier}

::tip
Utilice el prop `value-key` para cambiar la clave utilizada para hacer coincidir los elementos cuando se proporciona un `v-model` o `default-value`.
::

### Con evento seleccionado

Puede agregar un `@select` oyente para hacer clic en los elementos.

::note
La función handler recibe los `Event` y `TimelineItem` como el primer y segundo argumento respectivamente.
::

::component-example
---
Categoría: true
Nombre: 'timeline-select-example'
---
::

### Con diseño alternativo

Utilice el prop `ui` para crear una línea de tiempo con un diseño alternativo.

Ejemplo de componente {name="timeline-alternating-layout-example" prettier}

### Con ranura personalizada

Utilice la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a los siguientes slots:

@@@ph117@@@ph118@@@ph119 @
@120@@121@1222
@123@@124@125
@126@@127@128

Ejemplo de componente {name="timeline-custom-slot-example" prettier}

### Con ranuras

Utilice las ranuras disponibles para crear una línea de tiempo más compleja.

Ejemplo de componente {name="timeline-slots-example" prettier}

@P232

@@303@@Propuestas

Componentes Props

@@134@134@134

Componentes de slots

@135 @@ Emisiones

Componentes Emisiones

@136 @@ Proyecto

Componente Tema

@137@Changelog (Edición española)

Categoría: component-changelog
