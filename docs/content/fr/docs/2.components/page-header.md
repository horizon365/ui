---
title: pageheader
description: 'Un header responsive pour vos pages.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHeader.vue
---

@@ph000@utilisation

Le composant PageHeader affiche un header pour votre page.

Utilisez-le à l'intérieur de l'emplacement par défaut du composant [Page](/docs/components/page), avant le composant [PageBody](/docs/components/page-body):

```vue {3}
<template>
  <UPage>
    <UPageHeader />

    <UPageBody />
  </UPage>
</template>
```

@@ph018@titre

Utilisez la prop `title` pour afficher un titre dans l'en-tête.

::component-code
---
Caché:
  @@ph020@classe
Props:
  Titre: PageHeader
  Catégorie: w-full
---
::

@@ph021@description

Utilisez la prop `description` pour afficher une description dans l'en-tête.

::component-code
---
Étiquette: true
ignorer:
  @@ph023@titre
Caché:
  @@ph024@classe
Props:
  Titre: PageHeader
  Description: "Un en-tête de page responsive avec titre, description et actions."
  Catégorie: w-full
---
::

@@25@@titre

Utilisez la prop `headline` pour afficher un titre dans l'en-tête.

::component-code
---
Étiquette: true
Ignorer:
  @@27@titre
  @@ph028@description
Caché:
  @@ph029@classe
Props:
  Titre: PageHeader
  Description: "Un en-tête de page responsive avec titre, description et actions."
  Titre: "Composants"
  Catégorie: w-full
---
::

@@ph030@liens

Utilisez le prop `links` pour afficher une liste de [Button](/docs/components/button) dans l'en-tête.

::component-code
---
Étiquette: true
Extérieur:
  @@ph036@liens
Extérieurs:
  - ButtonProps [réf. nécessaire]
ignorer:
  @@ph038@titre
  @@ph039@description
  @@ph040@headline
  @@ph041@liens
Caché:
  @@classe 42
Props:
  Titre: PageHeader
  Description: "Un en-tête de page responsive avec titre, description et actions."
  Titre: "Composants"
  à gauche:
    - label:'GitHub'
      icon: i-simple-icons-github
      https://github.com/nuxt/ui/tree/v4/src/runtime/components/PageHeader.vue
      cible: _blanc
  Catégorie: w-full
---
::

@@ph044@exemples

::note
Bien que ces exemples utilisent [Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu.
::

### Dans une page

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

@@P090@@écrivain

@@ph091@@props

Composants-props

@@ph092@@Slots

Composants slots

@@ph093@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
