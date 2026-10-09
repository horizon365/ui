---
title: Pagelinaires
description: 'Une liste de liens à afficher dans la page.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLinks.vue
---

## Utilisation

Utilisez le composant PageLinks pour afficher une liste de liens.

::component-code
---
collapse: true
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageLink[]
props:
  links:
    - label: 'Edit this page'
      icon: i-lucide-file-pen
      to: https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label: 'Star on GitHub'
      icon: i-lucide-star
      to: https://github.com/nuxt/ui
    - label: 'Releases'
      icon: i-lucide-rocket
      to: https://github.com/nuxt/ui/releases
---
::

### Liens

Utilisez le prop `links` comme un tableau d'objets avec les propriétés suivantes:

- x`label: string`x{lang="ts-type"}
- x`icon?: string`x{lang="ts-type"}
- x`class?: any`x{lang="ts-type"}
- x`ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`xx{lang="ts-type"}

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) telle que `to`, `target`, etc.

::component-code
---
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageLink[]
props:
  links:
    - label: 'Edit this page'
      icon: i-lucide-file-pen
      to: https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label: 'Star on GitHub'
      icon: i-lucide-star
      to: https://github.com/nuxt/ui
    - label: 'Releases'
      icon: i-lucide-rocket
      to: https://github.com/nuxt/ui/releases
---
::

### Titre

Utilisez le prop `title` pour afficher un titre au-dessus des liens.

::component-code
---
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageLink[]
props:
  title: 'Community'
  links:
    - label: 'Edit this page'
      icon: i-lucide-file-pen
      to: https://github.com/nuxt/ui/blob/v4/docs/content/docs/2.components/page-links.md
    - label: 'Star on GitHub'
      icon: i-lucide-star
      to: https://github.com/nuxt/ui
    - label: 'Releases'
      icon: i-lucide-rocket
      to: https://github.com/nuxt/ui/releases
---
::

## Exemples

::note
Bien que ces exemples utilisent [Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu.
::

### Au sein d'une page

Utilisez le composant PageLinks dans l'emplacement `bottom` du composant ContentToc pour afficher une liste de liens sous la table des matières.

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

## API

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog écrit

:component-changelog
