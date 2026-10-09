---
title: Die DashboardToolbar
description: 'Eine Toolbar, die unter der Navbar in einem Dashboard angezeigt wird.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardToolbar.vue
---

## Bearbeiten

Die DashboardToolbar-Komponente wird verwendet, um eine Symbolleiste unter der Komponente [DashboardNavbar](/docs/components/dashboard-navbar) anzuzeigen.

Verwenden Sie es innerhalb des `header`-Steckplatzes der [DashboardPanel](/docs/components/dashboard-panel)-Komponente:

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

Verwenden Sie die `left`, `default` und `right` Steckplätze, um die Symbolleiste anzupassen.

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
In diesem Beispiel verwenden wir die Komponente [NavigationMenu](/docs/components/navigation-menu), um einige Links darzustellen.
::

## API (englisch)

### Props (englisch)

:component-props

### Slots Bearbeiten

:component-slots

## Theme (englisch)

:component-theme

## Changelog (englisch)

:component-changelog
