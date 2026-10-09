---
title: Content-Umgebung
description: 'Ein paar prev und next links, um zwischen den seiten zu navigieren.'
category: content
framework: nuxt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSurround.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Diese Komponente ist nur verfügbar, wenn das Modul `@nuxt/content` installiert ist.
::

## Usage (Verwendung)

Verwenden Sie die `surround`-Prop mit dem `surround`{lang="ts-type"}-Wert, den Sie beim Abrufen eines Seitenumhangs erhalten.

::component-example
---
name: 'content-surround-example'
props:
  class: 'w-full'
---
::

### Prev/Next Bearbeiten

Verwenden Sie die Props `prev-icon` und `next-icon`, um die Schaltflächen [Icon](/docs/components/icon) anzupassen.

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

## Beispiele

### innerhalb einer Seite

Verwenden Sie die ContentSurround-Komponente in einer Seite, um die Links prev und next anzuzeigen:

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

## API (Englisch)

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog Übersetzung

:component-changelog{prefix="content"}
