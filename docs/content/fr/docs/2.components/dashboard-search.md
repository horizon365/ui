---
title: DashboardRecherche
description: 'Une CommandPalette prête à l'emploi à ajouter à votre tableau de bord.'
category: dashboard
links:
  - label: Commandée
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearch.vue
---

## Utilisation

Le composant DashboardSearch étend le composant [CommandPalette](/docs/components/command-palette), de sorte que vous pouvez passer n'importe quelle propriété telle que `icon`, `placeholder`, etc.

Utilisez-le à l'intérieur de l'emplacement par défaut du composant [DashboardGroup](/docs/components/dashboard-group):

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <UDashboardSearchButton />
    </UDashboardSidebar>

    <UDashboardSearch />

    <slot />
  </UDashboardGroup>
</template>
```

::tip
Vous pouvez ouvrir la CommandPalette en appuyant sur: kbd{value="meta"}: kbd{value="K" class="ms-px"}, en utilisant le composant [DashboardSearchButton](xph027) ou en utilisant une directive `v-model:open`{lang="ts"}.
::

### Raccourci

Utilisez la prop `shortcut` pour modifier le raccourci utilisé dans [defineShortcuts](/docs/composables/define-shortcuts) pour ouvrir le composant ContentSearch. Defaults à `meta_k` (: kbd{value="meta"}: kbd{value="K"}).

```vue [app.vue]{4}
<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    shortcut="meta_k"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
</template>
```

### Couleur Mode

Par défaut, un groupe de commandes sera ajouté à la palette de commandes afin que vous puissiez basculer entre le mode clair et sombre. Cela ne prendra effet que si le `colorMode` n'est pas forcé dans une page spécifique, ce qui peut être réalisé via `definePageMeta`:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

Vous pouvez désactiver ce comportement en définissant la prop `color-mode` sur `false`:

```vue [app.vue]{4}
<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    :color-mode="false"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
</template>
```

## api

### Projets

:component-props

### Slots électroniques

:component-slots

### Emis

:component-emits

### Exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `commandPaletteRef`x{lang="ts-type"}| `Ref<InstanceType<typeof UCommandPalette> \| null>`x{lang="ts-type"}|

## Thème

:component-theme

## Changelog

:component-changelog
