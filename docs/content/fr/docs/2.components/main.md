---
description: 'Un élément principal qui remplit la hauteur de la fenêtre d'affichage disponible.'
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Main.vue
---

@@ph000@utilisation

Le composant principal rend un élément `<main>` qui fonctionne avec le composant [Header](/docs/components/header) pour créer une disposition pleine hauteur qui s'étend à la hauteur disponible de la fenêtre d'affichage.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Le composant principal utilise la variable CSS `--ui-header-height` pour se positionner correctement en dessous du `Header`.
::

@@ph008@exemples

### Dans `app.vue`

Utilisez le composant Main dans votre `app.vue` ou dans une mise en page:

```vue [app.vue]{5-9}
<template>
  <UApp>
    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

@@270@écrivain

@@28@@projets

Composants-props

@@229@@séries

Composants slots

@@ph030@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
