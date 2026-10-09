---
title: DashboardNavbar
description: 'Een responsieve navbar om weer te geven in een dashboard.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardNavbar.vue
---

## Gebruik

De DashboardNavbar-component is een responsieve navigatiebalk die kan worden geïntegreerd met de [DashboardSidebar](/docs/components/dashboard-sidebar) -component. Het bevat een mobiele schakelknop om responsieve navigatie in dashboardlay-outs mogelijk te maken.

Gebruik het in de `header`-sleuf van de [DashboardPanel](/docs/components/dashboard-panel) :

```vue [pages/index.vue]{9-11}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />
    </template>
  </UDashboardPanel>
</template>
```

Gebruik de `left`-, `default`- en `right`-slots om de navbar aan te passen.

::component-example
---
prettier: true
name: 'dashboard-navbar-example'
class: '!px-0 !pt-0'
props:
  class: 'w-full'
---
::

::note
In dit voorbeeld gebruiken we de [Tabs](/docs/components/tabs) component in de rechtersleuf om enkele tabbladen weer te geven.
::

### Titel

Gebruik de `title` prop om de titel van de navbar in te stellen.

::component-code
---
hide:
  - class
props:
  title: 'Dashboard'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

### Icoon

Gebruik de `icon` prop om het pictogram van de navbar in te stellen.

::component-code
---
hide:
  - class
ignore:
  - title
props:
  title: 'Dashboard'
  icon: 'i-lucide-house'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

### Toggle

Gebruik de `toggle`-prop om de schakelknop aan te passen die op mobiel wordt weergegeven en die de [DashboardSidebar](/docs/components/dashboard-sidebar) opent.

U kunt elke eigenschap van de [Button](/docs/components/button) component doorgeven om deze aan te passen.

::component-example
---
iframe: true
iframeMobile: true
overflowHidden: true
name: 'dashboard-navbar-toggle-example'
props:
  class: 'w-full'
---
::

### Zijde uitschakelen

Gebruik de `toggle-side` prop om de zijkant van de schakelknop te wijzigen. Standaard `right`.

::component-example
---
iframe: true
iframeMobile: true
overflowHidden: true
name: 'dashboard-navbar-toggle-side-example'
props:
  class: 'w-full'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
