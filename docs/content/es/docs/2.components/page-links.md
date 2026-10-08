---
title: Páginas Links
description: 'Una lista de enlaces que se mostrarán en la página.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLinks.vue
---

@@pH000@@Uso del producto

Utilice el componente PageLinks para mostrar una lista de enlaces .

::component-code
---
Colapso : Verdad
Categoría : true
Ignora :
  @@pH001@enlaces
Externo :
  @@2002@enlaces
Externalidades :
  @@@P2003 [ en línea ]
Props :
  izquierda :
    - label : ' Editar esta página '
      Archivo : i-lucide - file-pen
      Dos :https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label : ' Estrella en GitHub '
      Icono : i-lucide - star
      Dos :https://github.com/nuxt/ui
    - label : ' Lanzamiento '
      Archivo de la etiqueta : i-lucide - rocket
      Dos :https://github.com/nuxt/ui/releases
---
::

@@pH007@enlaces

Utilice el prop`links`como una matriz de objetos con las siguientes propiedades :

@@
@@
@@
@@

Puede pasar cualquier propiedad del componente[Link](/docs/components/link#props)como`to`,`target`, etc.

::component-code
---
Categoría : true
Ignora :
  @@27@enlaces
Externo :
  @@28@enlaces
Externalidades :
  @@20029@2002 [ en línea ]
Props :
  izquierda :
    - label : ' Editar esta página '
      Archivo : i-lucide - file-pen
      Dos :https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label : ' Estrella en GitHub '
      Icono : i-lucide - star
      Dos :https://github.com/nuxt/ui
    - label : ' Lanzamiento '
      Archivo de la etiqueta : i-lucide - rocket
      Dos :https://github.com/nuxt/ui/releases
---
::

@@33@Título

Utilice el prop`title`para mostrar un título encima de los enlaces .

::component-code
---
Categoría : true
Ignora :
  @@35@enlaces
Externo :
  @36@enlaces
Externalidades :
  @@P300@@P3000 [ en línea ]
Props :
  Título : " Comunidad "
  izquierda :
    - label : ' Editar esta página '
      Archivo : i-lucide - file-pen
      Dos :https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label : ' Estrella en GitHub '
      Icono : i-lucide - star
      Dos :https://github.com/nuxt/ui
    - label : ' Lanzamiento '
      Archivo de la etiqueta : i-lucide - rocket
      Dos :https://github.com/nuxt/ui/releases
---
::

## Ejemplos

::note
Si bien estos ejemplos utilizan[Nuxt Content](https://content.nuxt.com), los componentes se pueden integrar con cualquier sistema de gestión de contenido .
::

### Dentro de una página

Utilice el componente PageLinks en la ranura`bottom`del componente ContentToc para mostrar una lista de enlaces debajo de la tabla de contenido .

```vue [pages/\[...slug\\].vue]{48-52}
<script setup lang="ts">
import type { PageLink } from '@nuxt/ui'

const route = useRoute()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('content', route.path)
})

const links = computed<PageLink[]>(() => [{
  icon: 'i-lucide-file-pen',
  label: 'Edit this page',
  to: `https://github.com/nuxt/ui/edit/v4/docs/content/${page?.value?.stem}.md`,
  target: '_blank'
}, {
  icon: 'i-lucide-star',
  label: 'Star on GitHub',
  to: 'https://github.com/nuxt/ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases'
}])
</script>

<template>
  <UPage>
    <UPageHeader :title="page.title" :description="page.description" />

    <UPageBody>
      <ContentRenderer :value="page" />

      <USeparator />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template #right>
      <UContentToc :links="page.body.toc.links">
        <template #bottom>
          <USeparator type="dashed" />

          <UPageLinks title="Community" :links="links" />
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
```

@@pH107@@Español

@108@108@108@108

Componentes Props

@109@109@109

Componentes de slots

@110@@Proyecto

Componente Tema

@@111@Changelog

Categoría: component-changelog
