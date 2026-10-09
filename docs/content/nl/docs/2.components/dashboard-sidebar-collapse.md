---
title: DashboardSidebarCollapse
description: 'Een knop om de zijbalk op het bureaublad samen te vouwen.'
category: dashboard
links:
  - label: Knop
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarCollapse.vue
---

## Gebruik

De DashboardSidebarCollapse component wordt gebruikt om de [DashboardSidebar](/docs/components/dashboard-sidebar) component ** samen te vouwen / uit te breiden wanneer de `collapsible` prop is set**.

:component-code

Het breidt de [Button](/docs/components/button) component uit, zodat u elke eigenschap zoals `color`, `variant`, `size`, enz. Kunt doorgeven.

::component-code
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note
De knop is standaard ingesteld op `color="neutral"` en `variant="ghost"`.
::

## Voorbeelden

### Binnen `header` slot

U kunt dit onderdeel in de `header`-sleuf van de [DashboardSidebar](/docs/components/dashboard-sidebar) component plaatsen en de `collapsed`-prop gebruiken om het linkerdeel van de header te verbergen, bijvoorbeeld:

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

### Binnen `leading` slot

U kunt deze component in de `leading`-sleuf van de [DashboardNavbar](/docs/components/dashboard-navbar) component plaatsen om deze vóór de titel weer te geven, bijvoorbeeld:

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

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<button>` HTML-kenmerken.
::

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
