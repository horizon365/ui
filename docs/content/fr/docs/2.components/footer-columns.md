---
title: Footercolonnes
description: 'Une liste de liens sous forme de colonnes à afficher dans votre pied de page.'
category: navigation
keywords:
  - footer links
  - sitemap
  - columns
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FooterColumns.vue
---

## Utilisation

Le composant FooterColumns affiche une liste de colonnes à afficher dans votre Pied de page.

Utilisez-le dans l'emplacement `top` du composant [Footer](/docs/components/footer):

```vue {3-7}
<template>
  <UFooter>
    <template #top>
      <UContainer>
        <UFooterColumns />
      </UContainer>
    </template>
  </UFooter>
</template>
```

### colonnes

Utilisez le prop `columns` comme un tableau d'objets avec les propriétés suivantes:

- x`label: string`xx{lang="ts-type"}
- x`children?: FooterColumnLink[]`xx{lang="ts-type"}

Chaque colonne contient un tableau d'objets `children` qui définissent les liens. Chaque lien peut avoir les propriétés suivantes:

- x`label?: string`x{lang="ts-type"}
- x`icon?: string`x{lang="ts-type"}
- xx`class?: any`xx{lang="ts-type"}
- x`ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`xx{lang="ts-type"}

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) telle que `to`, `target`, etc.

::component-example
---
prettier: true
name: 'footer-columns-example'
class: 'p-8'
props:
  class: 'w-full'
---
::

## api

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
