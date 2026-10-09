---
title: DashboardsaisonnièreCollapse
description: 'Un bouton pour effondrer la barre latérale sur le desktop.'
category: dashboard
links:
  - label: bouton
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarCollapse.vue
---

## Utilisation

Le composant DashboardSidebarCollapse est utilisé pour réduire/développer le composant [DashboardSidebar](/docs/components/dashboard-sidebar) ** lorsque sa prop `collapsible` est set**.

:component-code

Il étend le composant [Button](/docs/components/button), de sorte que vous pouvez passer n'importe quelle propriété telle que `color`, `variant`, `size`, etc.

::component-code
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note
Le bouton par défaut est `color="neutral"` et `variant="ghost"`.
::

## exemples

### Dans le slot `header`

Vous pouvez mettre ce composant dans l'emplacement `header` du composant [DashboardSidebar](/docs/components/dashboard-sidebar) et utiliser la prop `collapsed` pour masquer la partie gauche de l'en-tête par exemple:

```vue [layouts/dashboard.vue]{4-8}
<template>
  <UDashboardGroup>
    <UDashboardSidebar collapsible>
      <template #header="{ collapsed }">
        <Logo v-if="!collapsed" />

        <UDashboardSidebarCollapse variant="subtle" />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

### Dans le slot `leading`

Vous pouvez placer ce composant dans l'emplacement `leading` du composant [DashboardNavbar](/docs/components/dashboard-navbar) pour l'afficher avant le titre par exemple:

```vue [pages/index.vue]{11-13}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Home">
        <template #leading>
          <UDashboardSidebarCollapse variant="subtle" />
        </template>
      </UDashboardNavbar>
    </template>
  </UDashboardPanel>
</template>
```

## api

### Projets

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

## Thème

:component-theme

## Changelog

:component-changelog
