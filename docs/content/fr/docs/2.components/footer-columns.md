---
title: FooterColonnes
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

@@ph000@@utilisation

Le composant FooterColumns affiche une liste de colonnes à afficher dans votre pied de page.

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

@@ph017@colonnes

Utilisez le `columns` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@

Chaque colonne contient un tableau `children` d'objets qui définissent les liens. Chaque lien peut avoir les propriétés suivantes:

@@
@@
@@
@@

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) comme `to`,`target`, etc.

::component-example
---
Étiquette: true
nom: 'foot-columns-example'
Catégorie: P-8
Props:
  Catégorie: w-full
---
::

@@ph044@@api

@@@ph045@@props

Composants-props

@@ph046@@réglages

Composants slots

@@ph047@thème

Composant-thème

@changelog 48

Composant-changelog
