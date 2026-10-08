---
title: Pagées
description: 'Un côté collant pour afficher votre navigation de page.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAside.vue
---

@@ph000@utilisation

Le composant PageAside est un élément adhésif `<aside>` qui s'affiche uniquement à partir du [`lg` breakpoint](https://tailwindcss.com/docs/breakpoints).

::tip{to="/docs/getting-started/theme/css-variables#header"}
Le composant PageAside utilise la variable CSS `--ui-header-height` pour se positionner correctement sous le `Header`.
::

Utilisez-le à l'intérieur de l'emplacement `left` ou `right` du composant [Page](/docs/components/page):

```vue {4}
<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>
  </UPage>
</template>
```

@@ph024@@Exemples

::note
Bien que ces exemples utilisent [Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu.
::

### Dans une mise en page

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

@@P501 @@ référence

@@502@@propriété

Composants-props

@@53@@séries

Composants slots

@@ph054@thème

Composant-thème

@@changement55

Composant-changelog
