---
title: Pageheader Siguiente
description: 'Un header responsive para tus páginas.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHeader.vue
---

@@pH000@@Uso del producto

El componente PageHeader muestra un encabezado para su página.

Úselo dentro de la ranura predeterminada del componente [Page](/docs/components/page), antes del componente [PageBody](/docs/components/page-body):

```vue {3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

@180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `title` para mostrar un título en el encabezado.

::component-code
---
Escondido:
  @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Categoría: PageHeader
  Categoría: w-full
---
::

@@21@Descripción

Utilice el prop `description` para mostrar una descripción en el encabezado.

::component-code
---
Categoría: true
Ignora:
  @@23@título
Escondido:
  @@24@clase
Props:
  Categoría: PageHeader
  Descripción:'Un encabezado de página responsive con título, descripción y acciones.'
  Categoría: w-full
---
::

@@25@@Encabezamiento

Utilice el prop `headline` para mostrar un titular en el encabezado.

::component-code
---
Categoría: true
Ignora:
  @27@title
  @@ph028@descripción
Escondido:
  @@29@clase
Props:
  Categoría: PageHeader
  Descripción:'Un encabezado de página responsive con título, descripción y acciones.'
  Categoría:"Componentes"
  Categoría: w-full
---
::

@@pH030@@enlaces

Utilice el prop `links` para mostrar una lista de [Button](/docs/components/button) en el encabezado.

::component-code
---
Categoría: true
Externo:
  @36@enlaces
Externalidades:
  @@@P37@@P37@@P37@@P37@@@P37@@P37@@P37@@P37@P37@@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37@P37)
Ignora:
  @38@title
  @@ph039@descripción
  @400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@401@enlaces
Escondido:
  @@42@clase
Props:
  Categoría: PageHeader
  Descripción:'Un encabezado de página responsive con título, descripción y acciones.'
  Categoría:"Componentes"
  izquierda:
    - label:'GitHub'(en inglés)
      icon: i-simple-icons-github
      a: 'https://github.com/nuxt/ui/tree/v4/src/runtime/components/PageHeader.vue'
      Nombre: '_blanco'
  Categoría: w-full
---
::

@@44@Ejemplos

::note
Si bien estos ejemplos utilizan [Nuxt Content](https://content.nuxt.com), los componentes se pueden integrar con cualquier sistema de gestión de contenido.
::

### Dentro de una página

Utilice el componente PageHeader en una página para mostrar el encabezado de la página:

```vue [pages/\[...slug\\].vue]{19-24}
<script setup lang="ts">
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
</script>

<template>
  <UPage>
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :headline="page.headline"
      :links="page.links"
    />

    <UPageBody>
      <ContentRenderer :value="page" />

      <USeparator />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
```

@@pH090@@pH0000

@091@091@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@P2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@093@@Proyecto

Componente Tema

@@changelog

Categoría: component-changelog
