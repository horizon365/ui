---
description: 'Un élément principal qui remplit la hauteur de la fenêtre d'affichage disponible.'
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Main.vue
---

## Utilisation

Le composant Main rend un élément `<main>` qui fonctionne avec le composant [Header](/docs/components/header) pour créer une disposition pleine hauteur qui s'étend à la hauteur disponible de la fenêtre d'affichage.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Le composant Main utilise la variable CSS `--ui-header-height` pour se positionner correctement en dessous de la variable `Header`.
::

## Exemples

### Dans `app.vue`

Utilice el componente principal en su `app.vue` o en un diseño:

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

## api

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
