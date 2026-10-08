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

@@ph001@@utilisation

Utilisez la prop `surround` avec la valeur `surround`{lang="ts-type"} que vous obtenez lors de la récupération d'un surround de page.

::component-example
---
nom: 'content-surround-exemple'
Props:
  Catégorie: w-full
---
::

@@@P2005@@Prev/Suivant

Utilisez les accessoires `prev-icon` et `next-icon` pour personnaliser les boutons [Icon](/docs/components/icon).

::component-code{prefix="content"}
---
Étiquette: true
Collapse: vrai
Ignorer:
  @@ph012@surround
Extérieure:
  @@ph013@surround
Extérieurs:
  - ContentSurroundLink []
Props:
  préviseur:'i-lucide-chevron-left'
  nextIcône:'i-lucide-chevron-right'
  Surround:
  - titre: ContentSearchButton
    chemin: /docs/composants/content-search-button
    stem: docs/2.components/content-search-button
    Description: Un bouton pré-stylisé pour ouvrir le modal ContentSearch.
  - titre: ContentToc
    chemin: /docs/composants/content-toc
    stem: docs/2.components/content-toc
    Description: Une table des matières collante avec des slots personnalisables.
---
::

@@ph017@exemples

### Dans une page

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

@@ph047@@api

@@ph048@@props

Composants-props

@@ph049@@Slots

Composants slots

@@ph050@thème

Composant-thème

@changement@changement@changement.com

: composant-changelog {prefix="content"}
