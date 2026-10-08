---
title: Pagebody
description: 'Le contenu principal de votre page.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageBody.vue
---

@@ph000@utilisation

Le composant PageBody enveloppe votre contenu principal et ajoute un rembourrage pour un espacement cohérent.

Utilisez-le à l'intérieur de l'emplacement par défaut du composant [Page](/docs/components/page), après le composant [PageHeader](/docs/components/page-header):

```vue {5}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

@@ph018@exemples

::note
Bien que ces exemples utilisent [Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu.
::

### Dans une page

Utilisez le composant PageBody dans une page pour afficher le contenu de la page:

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
Dans cet exemple, nous utilisons le composant [`ContentRenderer`](https://content.nuxt.com/docs/components/content-renderer) de `@nuxt/content` pour rendre le contenu de la page.
::

@@ph065@@api

@@ph066@@props

Composants-props

@@ph067@@réseaux sociaux

Composants slots

@@ph068@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
