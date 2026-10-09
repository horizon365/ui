---
title: Pagées
description: 'Un côté collant pour afficher votre navigation de page.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAside.vue
---

## Utilisation

Le composant PageAside est un élément `<aside>` collant qui s'affiche uniquement à partir du point d'arrêt [`lg` ](https://tailwindcss.com/docs/breakpoints).

::tip{to="/docs/getting-started/theme/css-variables#header"}
Le composant PageAside utilise la variable CSS `--ui-header-height` pour se positionner correctement en dessous de la variable `Header`.
::

Utilisez-le dans l'emplacement `left` ou `right` du composant [Page](/docs/components/page):

```vue {4}
<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>
  </UPage>
</template>
```

## exemples

::note
Bien que ces exemples utilisent [Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu.
::

### Dans une disposition

Utilisez le composant PageAside dans une disposition pour afficher la navigation:

```vue [layouts/docs.vue]{9-13}
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

## api

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
