---
title: ContentNavegación
description: 'Componente de navegación de estilo acordeón para organizar enlaces de páginas.'
category: content
framework: nuxt
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentNavigation.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Este componente sólo está disponible cuando el módulo `@nuxt/content` está instalado.
::

@@pH001@@El uso

Utilice el prop `navigation` con el valor `navigation`{lang="ts-type"} que obtiene al buscar la navegación de su aplicación.

::component-example
---
Nombre: 'content-navigation-example'
Categoría: h-96 overflow-y-auto
Desconocido: true
Props:
  Categoría: w-full
---
::

@@pH005@@Nombre

Establezca el prop `type` a `single` para permitir que solo se abra un elemento a la vez.

::component-code{prefix="content"}
---
Categoría: true
Colapso: Verdad
Externo:
  @@pH009@navegación
Externalidades:
  - ContentNavigationLink []
Items:
  Tipo:
  @@pH011 @@'único '
  - 'múltiples '
Escondido:
  @@13@clase
  - navegación
Props:
  Categoría: w-full
  Categoría:"Single"
  Navegación:
    - title:'Guía'(en inglés)
      icono: 'i-lucide-libro-abierto'
      Vía:'#Getting-Started'
      niños:
        - title:'Introducción'
          camino: '#introducción'
          Activo: Verdadero
        - title:'Instalación'
          path: '#instalación'
    - title:'Composables'(Edición española)
      icon: 'i-lucide-database'
      Vía:#composables
      niños:
        - title:'DefineShortcuts'
          Vía:#definieshortcuts
        - title:'UseModal'(Edición española)
          Vía:#usemodal
---
::

@@21@color

Utilice el prop `color` para cambiar el color de los enlaces de navegación.

::component-code{prefix="content"}
---
Categoría: true
Colapso: Verdad
Externo:
  @@23@navegación
Externalidades:
  - ContentNavigationLink []
Escondido:
  @@25@clase
  @@26@navegación
Props:
  Categoría: w-full
  Categoría:"Neutral"
  Navegación:
    - title:'Guía'(en inglés)
      icono: 'i-lucide-libro-abierto'
      Vía:'#Getting-Started'
      niños:
      - title:'Introducción'
        camino: '#introducción'
        Activo: Verdadero
      - title:'Instalación'
        path: '#instalación'
    - title:'Composables'(Edición española)
      icon: 'i-lucide-database'
      Vía:#composables
      niños:
      - title:'DefineShortcuts'(Edición española)
        Vía:#definieshortcuts
      - title:'UseModal'(Edición española)
        Vía:#usemodal
---
::

@@33@Variación

Utilice el prop `variant` para cambiar la variante de los enlaces de navegación.

::component-code{prefix="content"}
---
Categoría: true
Colapso: Verdad
Externo:
  - navegación
Externalidades:
  - ContentNavigationLink []
Escondido:
  @37@clase
  - navegación
Items:
  Variante:
  @@pH039 @@'enlace'
  @@pH040 @@'pildora'(en inglés)
Props:
  Categoría: w-full
  Categoría:"Link"
  Navegación:
    - title:'Guía'(en inglés)
      icono: 'i-lucide-libro-abierto'
      Vía:'#Getting-Started'
      niños:
      - title:'Introducción'
        ruta: '#introducción'
        Activo: Verdadero
      - title:'Instalación'
        path: '#instalación'
    - title:'Composables'(Edición española)
      icon: 'i-lucide-database'
      Vía:#composables
      niños:
      - title:'DefineShortcuts'(Edición española)
        Vía:#definieshortcuts
      - title:'UseModal'(Edición española)
        Vía:#usemodal
---
::

@477@highlight

Utilice el prop `highlight` para mostrar un borde resaltado para el enlace activo.

Utilice el `highlight-color` prop para cambiar el color del borde. Por defecto a la `color` prop.

::component-code{prefix="content"}
---
Categoría: true
Colapso: Verdad
Externo:
  - navegación
Externalidades:
  - ContentNavigationLink []
Escondido:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  - navegación
Props:
  Categoría: w-full
  Destacado: Verdadero
  highlightColor: 'primario'
  Categoría:"Primary"
  Categoría:"Píldora"
  Navegación:
    - title:'Guía'(en inglés)
      icono: 'i-lucide-libro-abierto'
      Vía:'#Getting-Started'
      niños:
      - title:'Introducción'
        camino: '#introducción'
        Activo: Verdadero
      - title:'Instalación'
        path: '#instalación'
    - title:'Composables'(Edición española)
      icon: 'i-lucide-database'
      Vía:#composables
      niños:
      - title:'DefineShortcuts'(Edición española)
        Vía:#definieshortcuts
      - title:"El tiempo"
        Vía:#usemodal
---
::

### Trailing Icon (Edición española)

Utilice el prop `trailing-icon` para personalizar el [Icon](/docs/components/icon) de los elementos que tienen hijos.

::component-code{prefix="content"}
---
Categoría: true
Colapso: Verdad
Externo:
  - navegación
Externalidades:
  - ContentNavigationLink []
Escondido:
  @070@clase
  - navegación
Props:
  Categoría: w-full
  TrailingIcono: 'i-lucide-arrow-up'
  Navegación:
    - title:'Guía'(en inglés)
      icono: 'i-lucide-libro-abierto'
      Vía:'#Getting-Started'
      niños:
      - title:'Introducción'
        camino: '#introducción'
        Activo: Verdadero
      - title:'Instalación'
        path: '#instalación'
    - title:'Composables'(Edición española)
      icon: 'i-lucide-database'
      Vía:#composables
      niños:
      - title:'DefineShortcuts'(Edición española)
        Vía:#definieshortcuts
      - title:'UseModal'(Edición española)
        Vía:#usemodal
---
::

::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.chevronDown`.
::

@@ph080@Ejemplos

### Dentro de un diseño

Utilice el componente ContentNavigation dentro de un componente [PageAside](/docs/components/page-aside) dentro de un diseño para mostrar la navegación de la página:

```vue [layouts/docs.vue]{11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" highlight />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

### Dentro de un encabezado

Utilice el componente ContentNavigation dentro de la ranura `content` de un componente [](/docs/components/header) para mostrar la navegación de la página en el móvil:

```vue [components/Header.vue]{9-11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UHeader>
    <template #body>
      <UContentNavigation :navigation="navigation" highlight />
    </template>
  </UHeader>
</template>
```

@@pH126 @@ Español

@127@127@127

Componentes Props

@128@128@128@128

Componentes de slots

@129@@129@129

Componentes Emisiones

@130 @@ Proyecto

Componente Tema

@131@Changelog

por: component-changelog {prefix="content"}
