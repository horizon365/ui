---
title: DashboardsidebarToggle
description: 'Un bouton pour basculer la barre latérale sur mobile.'
category: dashboard
links:
  - label: bouton
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarToggle.vue
---

## Utilisation

Le composant DashboardSidebarToggle est utilisé par les composants [DashboardNavbar](/docs/components/dashboard-navbar) et [DashboardSidebar](/docs/components/dashboard-sidebar).

Il est automatiquement affiché sur mobile pour basculer la barre latérale, **vous n'avez pas à l'ajouter manuellement **.

::component-code
---
hide:
  - class
props:
  class: 'lg:flex'
---
::

Il étend le composant [Button](/docs/components/button), de sorte que vous pouvez passer n'importe quelle propriété telle que `color`, `variant`, `size`, etc.

::component-code
---
hide:
  - class
ignore:
  - variant
props:
  variant: 'subtle'
  class: 'lg:flex'
---
::

::note
Le bouton par défaut est `color="neutral"` et `variant="ghost"`.
::

## Exemples

### Dans le slot `toggle`

Même si ce composant s'affiche automatiquement sur mobile, vous pouvez utiliser l'emplacement `toggle` des composants [DashboardNavbar](/docs/components/dashboard-navbar) et [DashboardSidebarxph0444/docs/components/dashboard-sidebar) pour personnaliser le bouton.

::code-group

```vue [layouts/dashboard.vue]{4-6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <template #toggle>
        <UDashboardSidebarToggle variant="subtle" />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

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
        <template #toggle>
          <UDashboardSidebarToggle variant="subtle" />
        </template>
      </UDashboardNavbar>
    </template>
  </UDashboardPanel>
</template>
```

::

::tip
Lors de l'utilisation de l'accessoire `toggle-side` des composants `DashboardSidebar` et `DashboardNavbar`, le bouton s'affiche sur le côté spécifié.
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

## Thème

:component-theme

## Changelog

:component-changelog
