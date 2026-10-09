---
title: Contenido Surround
description: 'Un par de enlaces prev y next para navegar entre páginas.'
category: content
framework: nuxt
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSurround.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Este componente solo está disponible cuando se instala el módulo `@nuxt/content`.
::

## Servicio

Utilice el prop `surround` con el valor `surround`{lang="ts-type"} que se obtiene al buscar un entorno de página.

::component-example
---
name: 'content-surround-example'
props:
  class: 'w-full'
---
::

### Prev/Siguiente

Utilice los accesorios `prev-icon` y `next-icon` para personalizar los botones [Icon](/docs/components/icon).

::component-code{prefix="content"}
---
prettier: true
collapse: true
ignore:
  - surround
external:
  - surround
externalTypes:
  - ContentSurroundLink[]
props:
  prevIcon: 'i-lucide-chevron-left'
  nextIcon: 'i-lucide-chevron-right'
  surround:
  - title: ContentSearchButton
    path: /docs/components/content-search-button
    stem: docs/2.components/content-search-button
    description: A pre-styled Button to open the ContentSearch modal.
  - title: ContentToc
    path: /docs/components/content-toc
    stem: docs/2.components/content-toc
    description: A sticky Table of Contents with customizable slots.
---
::

## Ejemplos

### Dentro de una página

Utilice el componente ContentSurround en una página para mostrar los enlaces anterior y siguiente:

```vue [pages/\[...slug\\].vue]{19}
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('docs').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" />

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <USeparator v-if="surround?.filter(Boolean).length" />

      <UContentSurround :surround="(surround as any)" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
```

## API (Edición española)

### Props (Edición española)

:component-props

### Slots (Español)

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog{prefix="content"}
