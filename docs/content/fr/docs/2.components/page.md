---
description: 'Une mise en page de grille pour vos pages avec des colonnes de gauche et de droite.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Page.vue
---

## Utilisation

Le composant Page vous aide à créer des mises en page avec des colonnes optionnelles de gauche et de droite. Il est parfait pour créer des sites de documentation et d'autres pages axées sur le contenu.

```vue {2,6}
<template>
  <UPage>
    <template #left />

    <template #right />
  </UPage>
</template>
```

::tip
La page s'affiche sous la forme d'une mise en page à colonne centrée si aucun emplacement n'est spécifié.
::

## Exemples

::note
Bien que ces exemples utilisent [Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu.
::

### Dans un layout

Utilisez le composant Page dans une mise en page avec l'emplacement `left` pour afficher une navigation:

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
Dans cet exemple, nous utilisons le composant `ContentNavigation` pour afficher la navigation injectée dans `app.vue`.
::

### Dans une page

Use the Page component in a page with the `right` slot to display a table of contents:

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
In this example, we use the `ContentToc` component to display the table of contents.
::

## api

### Props équipement

:component-props

### Slots

:component-slots

## thème

:component-theme

## Changelog

:component-changelog
