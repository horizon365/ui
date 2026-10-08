---
description: 'Ein Raster-Layout für Ihre Seiten mit linken und rechten Spalten.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Page.vue
---

@@@ph000@@Verwendung

Die Komponente Seite hilft Ihnen beim Erstellen von Layouts mit optionalen linken und rechten Spalten. Sie eignet sich perfekt zum Erstellen von Dokumentationswebsites und anderen inhaltsorientierten Seiten.

```vue {2,6}
<template>
  <UPage>
    <template #left />

    <template #right />
  </UPage>
</template>
```

::tip
Die Seite wird als zentriertes, einspaltiges Layout angezeigt, wenn keine Slots angegeben sind.
::

@@ph010@@Beispiele

::note
Während in diesen Beispielen [Nuxt Content](https://content.nuxt.com) verwendet wird, können die Komponenten in jedes Content-Management-System integriert werden.
::

### Innerhalb eines Layouts

Verwenden Sie die Komponente Seite in einem Layout mit dem `left`-Slot, um eine Navigation anzuzeigen:

```vue [layouts/docs.vue] {9-13}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

::note
In diesem Beispiel verwenden wir die Komponente `ContentNavigation`, um die in `app.vue` eingefügte Navigation anzuzeigen.
::

### Innerhalb einer Seite

Verwenden Sie die Komponente Seite in einer Seite mit dem `right`-Slot, um ein Inhaltsverzeichnis anzuzeigen:

```vue [pages/\[...slug\\].vue]{29-31}
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
In diesem Beispiel verwenden wir die Komponente `ContentToc`, um das Inhaltsverzeichnis anzuzeigen.
::

## api

@@@@@@@@@@@ph077@@props

Komponenten-Props

### Slots

Die Komponenten-Slots

@@@@@@@@@ph079@@theme

Das Komponenten-Theme

@@ph080@@changelog @@@ changelog

Das Component-Changelog
