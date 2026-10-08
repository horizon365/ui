---
title: Pagebody
description: 'El contenido principal de tu página.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageBody.vue
---

@@pH000@@Uso del producto

El componente PageBody envuelve su contenido principal y agrega un poco de relleno para un espaciado consistente.

Úselo dentro de la ranura predeterminada del componente [Page](/docs/components/page), después del componente [PageHeader](/docs/components/page-header):

```vue {5}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

@18@Ejemplos

::note
Si bien estos ejemplos utilizan [Nuxt Content](https://content.nuxt.com), los componentes se pueden integrar con cualquier sistema de gestión de contenido.
::

### Dentro de una página

Utilice el componente PageBody de una página para mostrar el contenido de la página:

```vue [pages/\[...slug\\].vue]{21-27}
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
    <UPageHeader :title="page.title" :description="page.description" />

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

::note
En este ejemplo, usamos el componente [`ContentRenderer`](https://content.nuxt.com/docs/components/content-renderer) de `@nuxt/content` para representar el contenido de la página.
::

@@pH065

@666@6666

Componentes Props

@@P067@@Esfuerzos

Componentes de slots

@068 @@ Proyecto

Componente Tema

@@changelog

Categoría: component-changelog
