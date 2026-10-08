---
title: Pagañones
description: 'Una lista de anclas que se mostrarán en la página.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAnchors.vue
---

@@pH000@@Uso del producto

Utilice el componente PageAnchors para mostrar una lista de enlaces .

::component-code
---
Colapso : Verdad
Categoría : true
Ignora :
  @@pH001@enlaces
Externo :
  @@2002@enlaces
Externalidades :
  @@@P2003@@P2003 [ en inglés ]
Props :
  izquierda :
    - label : ' Documentación '
      icon : i-lucide - book-open
      Inicio/docs/Getting-started
    - label : ' Componentes '
      Icono : i-lucide - box
      Archivo :/docs/components
    - label : ' Figma Kit ' (Edición española)
      icon : i-simple - icons-figma
      Dos :https://go.nuxt.com/figma-ui
      Nombre : _ blank
    - label : ' Lanzamiento '
      icon : i-simple - icons-github
      Dos :https://github.com/nuxt/ui/releases
      Nombre: _blank
---
::

@0008@izquierda

Utilice el prop `links` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props), como `to`,`target`, etc.

::component-code
---
Categoría: true
Ignora:
  @@28@enlaces
Externo:
  @@29@enlaces
Externalidades:
  @@@P200@@P2000 [en línea]
Props:
  izquierda:
    - label:'Documentación'
      Icono: i-lucide-book-open
      Inicio/docs/Getting-started
    - label:'Componentes'
      Icono: i-lucide-box
      Archivo: /docs/components
    - label:'Figma Kit'(Edición española)
      icon: i-simple-icons-figma
      Dos :https://go.nuxt.com/figma-ui
      Nombre : _ blank
    - label : ' Lanzamiento '
      icon : i-simple - icons-github
      Dos :https://github.com/nuxt/ui/releases
      Nombre : _ blank
---
::

@@P035@Ejemplos

::note
Si bien estos ejemplos utilizan[Nuxt Content](https://content.nuxt.com), los componentes se pueden integrar con cualquier sistema de gestión de contenido .
::

### Dentro de un diseño .

Utilice el componente PageAnchors dentro del componente[PageAside](/docs/components/page-aside)para mostrar una lista de enlaces por encima de la navegación .

```vue [layouts/docs.vue]{35}
<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui'
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<ContentNavigationItem[]>('navigation')

const links: PageAnchor[] = [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Figma Kit',
  icon: 'i-simple-icons-figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UPageAnchors :links="links" />

        <USeparator type="dashed" />

        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

@@pH089

@090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@091@091@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@092@@Proyecto

Componente Tema

@@changelog

Categoría : component-changelog
