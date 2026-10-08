---
title: Pageancheurs
description: 'Une liste d'ancres à afficher dans la page.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAnchors.vue
---

@@ph000@@utilisation

Utilisez le composant PageAnchors pour afficher une liste de liens .

::component-code
---
Collapse : vrai
Étiquette : true
ignorer :
  @@ph001@liens
Extérieure :
  @@ph002@liens
Extérieurs :
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Props :
  à gauche :
    - label : ' Documentation '
      Icône : i-lucide - book-open
      à :/docs/commencer
    - label : ' Composants '
      Icône : i-lucide - box
      à/docs/composants
    - label : ' Figma Kit '
      Icône : i-simple - icons-figma
      Deux :https://go.nuxt.com/figma-ui
      Référence : _ blank
    - label : " Découverte "
      icon : i-simple - icons-github
      Deux :https://github.com/nuxt/ui/releases
      Référence:_blank
---
::

@@ph008@référencement

Utilisez le `links` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) comme `to`,`target`, etc.

::component-code
---
Étiquette: true
ignorer:
  @28@@liens
Extérieure:
  @@229@liens
Extérieurs:
  @@@P300@@P3000 [réf. nécessaire]
Props:
  à gauche:
    - label:'Documentation'
      Icône: i-lucide-book-open
      à:/docs/commencer
    - label:'Composants'
      Icône: i-lucide-box
      à/docs/composants
    - label:'Figma Kit'
      Icône: i-simple-icons-figma
      Deux :https://go.nuxt.com/figma-ui
      Référence : _ blank
    - label : " Découverte "
      icon : i-simple - icons-github
      Deux :https://github.com/nuxt/ui/releases
      Référence : _ blank
---
::

## Exemples

::note
Bien que ces exemples utilisent[Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu .
::

### Dans une mise en page

Utilisez le composant PageAnchors à l'intérieur du composant[PageAside](/docs/components/page-aside)pour afficher une liste de liens au-dessus de la navigation .

```vue [layouts/docs.vue]{35}
<script setup lang="ts">
import type { PageAnchor } from '@nuxt/ui'
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<ContentNavigationItem[]>('navigation')

const links: PageAnchor[] = [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: '/docs/getting-started'
}, {
  label: 'Components',
  icon: 'i-lucide-box',
  to: '/docs/components'
}, {
  label: 'Figma Kit',
  icon: 'i-simple-icons-figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UPageAnchors :links="links" />

        <USeparator type="dashed" />

        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

@@ph089@api

@@ph090@@props

Composants-props

@@ph091@@slot

Composants slots

@@ph092@thématique

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
