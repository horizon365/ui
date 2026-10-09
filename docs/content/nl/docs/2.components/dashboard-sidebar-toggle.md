---
title: DashboardSidebarToggle
description: 'Een knop om de zijbalk op mobiel te wisselen.'
category: dashboard
links:
  - label: Knop
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarToggle.vue
---

## Gebruik

De DashboardSidebarToggle component wordt gebruikt door de [DashboardNavbar](/docs/components/dashboard-navbar) en [DashboardSidebar](/docs/components/dashboard-sidebar) componenten.

Het wordt automatisch weergegeven op mobiel om de zijbalk te wisselen, **je hoeft het niet handmatig toe te voegen**.

::component-code
---
hide:
  - class
props:
  class: 'lg:flex'
---
::

Het breidt de [Button](/docs/components/button) component uit, zodat u elke eigenschap zoals `color`, `variant`, `size`, enz. Kunt doorgeven.

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
De knop is standaard ingesteld op `color="neutral"` en `variant="ghost"`.
::

## Voorbeelden

### Binnen `toggle` slot

Hoewel dit onderdeel automatisch op mobiel wordt weergegeven, kunt u de `toggle`-sleuf van de [DashboardNavbar](/docs/components/dashboard-navbar) en [DashboardSidebar](/docs/components/dashboard-sidebar) componenten gebruiken om de knop aan te passen.

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
Bij gebruik van de `toggle-side` prop van de `DashboardSidebar` en `DashboardNavbar` componenten wordt de knop aan de opgegeven zijde weergegeven.
::

## API

### Rekwisieten

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<button>` HTML-kenmerken.
::

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
