---
title: InhoudOmgeving
description: 'Een paar eerdere en volgende links om tussen pagina 's te navigeren.'
category: content
framework: nuxt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSurround.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Dit onderdeel is alleen beschikbaar wanneer de `@nuxt/content` module is geïnstalleerd.
::

## Gebruik

Gebruik de `surround` prop met de `surround`{lang="ts-type"} waarde die je krijgt bij het ophalen van een page surround.

::component-example
---
name: 'content-surround-example'
props:
  class: 'w-full'
---
::

### Vorige / Volgende

Gebruik de `prev-icon` en `next-icon` rekwisieten om de knoppen aan te passen [Icon](/docs/components/icon).

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

## Voorbeelden

### Binnen een pagina

Gebruik de ContentSurround-component op een pagina om de vorige en volgende links weer te geven:

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

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog{prefix="content"}
