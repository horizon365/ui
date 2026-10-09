---
title: DashboardToolbar
description: 'Een werkbalk om onder de navbar in een dashboard weer te geven.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardToolbar.vue
---

## Gebruik

De DashboardToolbar-component wordt gebruikt om een werkbalk weer te geven onder de [DashboardNavbar](/docs/components/dashboard-navbar) -component.

Gebruik het in de `header`-sleuf van de [DashboardPanel](/docs/components/dashboard-panel) :

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

Gebruik de `left`-, `default`- en `right`-slots om de werkbalk aan te passen.

::component-example
---
prettier: true
name: 'dashboard-toolbar-example'
class: '!px-0 !pt-0'
props:
  class: 'w-full'
---
::

::note
In dit voorbeeld gebruiken we de [NavigationMenu](/docs/components/navigation-menu) om enkele links weer te geven.
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
