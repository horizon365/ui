---
title: DashboardToolbar
description: 'Une barre d'outils à afficher sous la barre de navigation dans un tableau de bord.'
category: dashboard
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardToolbar.vue
---

@@ph000@utilisation

Le composant DashboardToolbar est utilisé pour afficher une barre d'outils sous le composant [DashboardNavbar](/docs/components/dashboard-navbar).

Utilisez-le à l'intérieur de l'emplacement `header` du composant [DashboardPanel](/docs/components/dashboard-panel):

```vue [pages/index.vue]{9-13}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />

      <UDashboardToolbar />
    </template>
  </UDashboardPanel>
</template>
```

Utilisez les emplacements `left`,`default` et `right` pour personnaliser la barre d'outils.

::component-example
---
Étiquette: true
nom: dashboard-toolbar-exemple
classe: '! px-0! pt-0'
Props:
  Catégorie: w-full
---
::

::note
Dans cet exemple, nous utilisons le composant [NavigationMenu](/docs/components/navigation-menu) pour rendre certains liens.
::

@@ph034@@api

@@@ph035@@props

Composants-props

@@ph036@@réglages

Composants slots

@@ph037@thème

Composant-thème

@changelog 38

Composant-changelog
