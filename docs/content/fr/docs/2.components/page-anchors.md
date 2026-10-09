---
title: Pageancheurs
description: 'Une liste d'ancres à afficher dans la page.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAnchors.vue
---

## Utilisation

Utilisez le composant PageAnchors pour afficher une liste de liens.

::component-code
---
collapse: true
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageAnchor[]
props:
  links:
    - label: 'Documentation'
      icon: i-lucide-book-open
      to: /docs/getting-started
    - label: 'Components'
      icon: i-lucide-box
      to: /docs/components
    - label: 'Figma Kit'
      icon: i-simple-icons-figma
      to: https://go.nuxt.com/figma-ui
      target: _blank
    - label: 'Releases'
      icon: i-simple-icons-github
      to: https://github.com/nuxt/ui/releases
      target: _blank
---
::

### Liens

Utilisez le prop `links` comme un tableau d'objets avec les propriétés suivantes:

- x`label: string`x{lang="ts-type"}
- x`icon?: string`xx{lang="ts-type"}
- x`class?: any`xx{lang="ts-type"}
- x`ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeading?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`x{lang="ts-type"}

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) telle que `to`, `target`, etc.

::component-code
---
prettier: true
ignore:
  - links
external:
  - links
externalTypes:
  - PageAnchor[]
props:
  links:
    - label: 'Documentation'
      icon: i-lucide-book-open
      to: /docs/getting-started
    - label: 'Components'
      icon: i-lucide-box
      to: /docs/components
    - label: 'Figma Kit'
      icon: i-simple-icons-figma
      to: https://go.nuxt.com/figma-ui
      target: _blank
    - label: 'Releases'
      icon: i-simple-icons-github
      to: https://github.com/nuxt/ui/releases
      target: _blank
---
::

## Exemples

::note
While these examples use [Nuxt Content](https://content.nuxt.com), the components can be integrated with any content management system.
::

### Dans un layout

Utilisez le composant PageAnchors à l'intérieur du composant [PageAside](/docs/components/page-aside) pour afficher une liste de liens au-dessus de la navigation.

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

## API

### Props équipement

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog écrit

:component-changelog
