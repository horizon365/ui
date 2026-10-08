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
Este componente sólo está disponible cuando el módulo `@nuxt/content` está instalado.
::

@@pH001@@El uso

Utilice el prop `surround` con el valor `surround`{lang="ts-type"} que se obtiene al buscar un surround de página.

::component-example
---
Nombre: 'content-surround-example'
Props:
  Categoría: w-full
---
::

@@P2005 @@Prev/Siguiente

Utilice los accesorios `prev-icon` y `next-icon` para personalizar los botones [Icon](/docs/components/icon).

::component-code{prefix="content"}
---
Categoría: true
Colapso: Verdad
Ignora:
  @12@surround (en inglés)
Externo:
  @@13@surround (en inglés)
Externalidades:
  - ContentSurroundLink (en inglés)
Props:
  previcon: 'i-lucide-chevron-left'
  Icono: 'i-lucide-chevron-right'
  Surround:
  - title: ContentSearchButton (Edición española)
    path: /docs/componentes/botón de búsqueda de contenido
    stem: docs/2.components/botón de búsqueda de contenido
    Descripción: Un botón prediseñado para abrir el modal ContentSearch.
  - title: Contenido
    Dirección:/docs/components/content-toc
    stem: docs/2.components/content-toc
    Descripción: Una tabla de contenidos pegajosa con ranuras personalizables.
---
::

@17@Ejemplos

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

@477@Apid

@480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@49000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

por: component-changelog {prefix="content"}
