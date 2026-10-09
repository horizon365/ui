---
title: PaginaLichaam
description: 'De belangrijkste inhoud van uw pagina.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageBody.vue
---

## Gebruik

De PageBody-component omhult uw hoofdinhoud en voegt wat opvulling toe voor een consistente afstand.

Gebruik het in de standaardsleuf van de [Page](/docs/components/page) component, na de [PageHeader](/docs/components/page-header) component:

```vue {5}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

## Voorbeelden

::note
Hoewel deze voorbeelden [Nuxt Content](https://content.nuxt.com) gebruiken, kunnen de componenten worden geïntegreerd met elk contentbeheersysteem.
::

### Binnen een pagina

Gebruik de PageBody-component in een pagina om de inhoud van de pagina weer te geven:

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
In dit voorbeeld gebruiken we de [`ContentRenderer`](https://content.nuxt.com/docs/components/content-renderer) component van `@nuxt/content` om de inhoud van de pagina weer te geven.
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
