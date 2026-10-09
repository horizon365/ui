---
title: Seitenkörper
description: 'Der Hauptinhalt Ihrer Seite.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageBody.vue
---

## Bearbeiten

Die PageBody-Komponente umschließt Ihren Hauptinhalt und fügt etwas Padding für konsistente Abstände hinzu.

Verwenden Sie es innerhalb des Standardsteckplatzes der Komponente [Page](/docs/components/page), nach der Komponente [PageHeader](/docs/components/page-header):

```vue {5}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

## Examples (Beispiele)

::note
Während diese Beispiele [Nuxt Content](https://content.nuxt.com) verwenden, können die Komponenten in jedes Content Management System integriert werden.
::

### innerhalb einer Seite

Verwenden Sie die PageBody-Komponente auf einer Seite, um den Inhalt der Seite anzuzeigen:

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
In diesem Beispiel verwenden wir die Komponente [`ContentRenderer`](https://content.nuxt.com/docs/components/content-renderer) von `@nuxt/content`, um den Inhalt der Seite darzustellen.
::

## API (Englisch)

### Props (englisch)

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
