---
title: Seitenheader
description: 'Responsive Header für Ihre Seiten'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHeader.vue
---

## Bearbeiten

Die PageHeader-Komponente zeigt einen Header für Ihre Seite.

Verwenden Sie es innerhalb des Standardsteckplatzes der Komponente [Page](/docs/components/page), bevor die Komponente [PageBody](/docs/components/page-body):

```vue {3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

### Titel

Verwenden Sie die `title`-Prop, um einen Titel im Header anzuzeigen.

::component-code
---
hide:
  - class
props:
  title: 'PageHeader'
  class: 'w-full'
---
::

### Beschreibung

Verwenden Sie die `description`-Prop, um eine Beschreibung im Header anzuzeigen.

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

### Überschrift

Verwenden Sie die `headline`-Prop, um eine Überschrift in der Kopfzeile anzuzeigen.

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

### Links (Englisch)

Verwenden Sie die `links`-Prop, um eine Liste von [Button](/docs/components/button) im Header anzuzeigen.

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

## Beispiele

::note
Während diese Beispiele [Nuxt Content](https://content.nuxt.com) verwenden, können die Komponenten in jedes Content Management System integriert werden.
::

### innerhalb einer Seite

Verwenden Sie die PageHeader-Komponente in einer Seite, um die Kopfzeile der Seite anzuzeigen:

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

## API (englisch)

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
