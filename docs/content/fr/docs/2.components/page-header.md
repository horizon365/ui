---
title: pageheader
description: 'Un header responsive pour vos pages.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHeader.vue
---

## Utilisation

Le composant PageHeader affiche un header pour votre page.

Utilisez-le dans l'emplacement par défaut du composant [Page](/docs/components/page), avant le composant [PageBody](xph007):

```vue {3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

### Titre

Use the `title` prop to display a title in the header.

::component-code
---
hide:
  - class
props:
  title: 'PageHeader'
  class: 'w-full'
---
::

### Description

Utilisez la prop `description` pour afficher une description dans l'en-tête.

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

### Référencement

Utilisez le prop `headline` pour afficher un titre dans l'en-tête.

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

### Liens

Utilisez la prop `links` pour afficher une liste de [Button](/docs/components/button) dans l'en-tête.

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

## Exemples

::note
Bien que ces exemples utilisent [Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu.
::

### Au sein d'une page

Utilisez le composant PageHeader dans une page pour afficher l'en-tête de la page:

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

### Props équipements

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog écrit

:component-changelog
