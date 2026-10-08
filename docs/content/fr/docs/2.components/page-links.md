---
title: Pagelinaires
description: 'Une liste de liens à afficher dans la page.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLinks.vue
---

@@ph000@@utilisation

Utilisez le composant PageLinks pour afficher une liste de liens .

::component-code
---
Collapse : vrai
Étiquette : true
Ignorer :
  @@ph001@liens
Extérieur :
  @@ph002@liens
Extérieurs :
  @@@P300@@@P3000 [ ]
Props :
  à gauche :
    - label : ' Modifier cette page '
      Icône : i-lucide - file-pen
      Deux :https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label : ' Star sur GitHub '
      Étiquette : i-lucide - star
      Deux :https://github.com/nuxt/ui
    - label : " Découverte "
      Étiquette : i-lucide - rocket
      Deux :https://github.com/nuxt/ui/releases
---
::

@@ph007@lien

Utilisez le`links`prop comme un tableau d'objets avec les propriétés suivantes :

@@
@@
@@
@@

Vous pouvez passer n'importe quelle propriété du composant[Link](/docs/components/link#props)comme`to`,`target`, etc.

::component-code
---
Étiquette : true
Ignorer :
  @@227@liens
Extérieur :
  @28@@liens
Extérieurs :
  @@229@@liaison [ ]
Props :
  à gauche :
    - label : ' Modifier cette page '
      Icône : i-lucide - file-pen
      Deux :https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label : ' Star sur GitHub '
      Étiquette : i-lucide - star
      Deux :https://github.com/nuxt/ui
    - label : " Découverte "
      Étiquette : i-lucide - rocket
      Deux :https://github.com/nuxt/ui/releases
---
::

@@ph033@titre

Utilisez la prop`title`pour afficher un titre au-dessus des liens .

::component-code
---
Étiquette : true
ignorer :
  @@ph035@liens
Extérieure :
  @@ph036@liens
Extérieurs :
  @@P337@@P337 [ réf . nécessaire ]
Props :
  Titre : " Communauté "
  à gauche :
    - label : ' Modifier cette page '
      Icône : i-lucide - file-pen
      Deux :https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label : ' Star sur GitHub '
      Étiquette : i-lucide - star
      Deux :https://github.com/nuxt/ui
    - label : " Découverte "
      Étiquette : i-lucide - rocket
      Deux :https://github.com/nuxt/ui/releases
---
::

@@ph041@@Exemples

::note
Bien que ces exemples utilisent[Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu .
::

### Dans une page

Utilisez le composant PageLinks dans l'emplacement`bottom`du composant ContentToc pour afficher une liste de liens sous la table des matières .

```vue [pages/\[...slug\\].vue]{48-52}
<script setup lang="ts">
import type { PageLink } from '@nuxt/ui'

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

const links = computed<PageLink[]>(() => [{
  icon: 'i-lucide-file-pen',
  label: 'Edit this page',
  to: `https://github.com/nuxt/ui/edit/v4/docs/content/${page?.value?.stem}.md`,
  target: '_blank'
}, {
  icon: 'i-lucide-star',
  label: 'Star on GitHub',
  to: 'https://github.com/nuxt/ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases'
}])
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
      <UContentToc :links="page.body.toc.links">
        <template #bottom>
          <USeparator type="dashed" />

          <UPageLinks title="Community" :links="links" />
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
```

@@ph107@api

@@ph108@props

Composants-props

@@ph109@@Slots

Composants slots

@@ph110@thème

Composant-thème

@111@changements

Composant-changelog
