---
title: PageHeader
description: 'Een responsieve header voor uw pagina 's.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHeader.vue
---

## Gebruik

Het onderdeel PageHeader geeft een koptekst voor uw pagina weer.

Gebruik het in de standaardsleuf van de [Page](/docs/components/page) component, vóór de [PageBody](/docs/components/page-body) component:

```vue {3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

### Titel

Gebruik de `title` prop om een titel in de header weer te geven.

::component-code
---
hide:
  - class
props:
  title: 'PageHeader'
  class: 'w-full'
---
::

### Beschrijving

Gebruik de `description` prop om een beschrijving in de header weer te geven.

::component-code
---
prettier: true
ignore:
  - title
hide:
  - class
props:
  title: 'PageHeader'
  description: 'A responsive page header with title, description and actions.'
  class: 'w-full'
---
::

### Kop

Gebruik de `headline` prop om een kop in de header weer te geven.

::component-code
---
prettier: true
ignore:
  - title
  - description
hide:
  - class
props:
  title: 'PageHeader'
  description: 'A responsive page header with title, description and actions.'
  headline: 'Components'
  class: 'w-full'
---
::

### Links

Gebruik de `links` prop om een lijst met [Button](/docs/components/button) in de header weer te geven.

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - headline
  - links
hide:
  - class
props:
  title: 'PageHeader'
  description: 'A responsive page header with title, description and actions.'
  headline: 'Components'
  links:
    - label: 'GitHub'
      icon: i-simple-icons-github
      to: 'https://github.com/nuxt/ui/tree/v4/src/runtime/components/PageHeader.vue'
      target: '_blank'
  class: 'w-full'
---
::

## Voorbeelden

::note
Hoewel deze voorbeelden [Nuxt Content](https://content.nuxt.com) gebruiken, kunnen de componenten worden geïntegreerd met elk contentbeheersysteem.
::

### Binnen een pagina

Gebruik de PageHeader-component in een pagina om de koptekst van de pagina weer te geven:

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

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Changelog

:component-changelog
