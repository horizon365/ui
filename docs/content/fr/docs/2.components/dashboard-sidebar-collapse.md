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

@@ph000@utilisation

Le composant DashboardSidebarCollapse est utilisé pour réduire/développer le [DashboardSidebar](/docs/components/dashboard-sidebar) composant **lorsque son `collapsible` prop est réglé **.

Composants de code

Il étend le [Button](/docs/components/button) composant, de sorte que vous pouvez passer n'importe quelle propriété telle que `color`,`variant`,`size`, etc.

::component-code
---
ignorer:
  @@P015@@variant
Props:
  Étiquette:"subtil"
---
::

::note
Le bouton par défaut est `color="neutral"` et `variant="ghost"`.
::

@@ph018@exemples

### Dans `header`

Vous pouvez mettre ce composant dans l'emplacement `header` du composant [DashboardSidebar](/docs/components/dashboard-sidebar) et utiliser le prop `collapsed` pour masquer la partie gauche de l'en-tête par exemple:

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

### Dans `leading`

Vous pouvez mettre ce composant dans l'emplacement `leading` du composant [DashboardNavbar](/docs/components/dashboard-navbar) pour l'afficher avant le titre par exemple:

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

@@ph068@api

@@ph069@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

@@ph071@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
