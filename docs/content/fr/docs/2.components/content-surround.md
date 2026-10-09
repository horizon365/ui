---
title: ContentSurround
description: 'Une paire de liens précédent et suivant pour naviguer entre les pages.'
category: content
framework: nuxt
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSurround.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Ce composant est uniquement disponible lorsque le module `@nuxt/content` est installé.
::

## Utilisation

Utilisez la prop `surround` avec la valeur `surround`{lang="ts-type"} que vous obtenez lors de la récupération d'un surround de page.

::component-example
---
name: 'content-surround-example'
props:
  class: 'w-full'
---
::

### Prev/Suivant

Utilisez les props `prev-icon` et `next-icon` pour personnaliser les boutons [Icon](/docs/components/icon).

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

## Exemples

### Au sein d'une page

Utilisez le composant ContentSurround dans une page pour afficher les liens précédent et suivant:

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

### Slots électronique

:component-slots

## Thème

:component-theme

## Changelog écrit

:component-changelog{prefix="content"}
