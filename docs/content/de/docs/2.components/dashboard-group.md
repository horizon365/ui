---
title: Die Dashboard-Gruppe
description: 'Eine feste Layoutkomponente, die Kontext für Dashboard-Komponenten mit Sidebar-Statusverwaltung und Persistenz bereitstellt.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardGroup.vue
---

## Bearbeiten

Die DashboardGroup-Komponente ist das Hauptlayout, das die Komponenten [DashboardSidebar](/docs/components/dashboard-sidebar) und [DashboardPanel](/docs/components/dashboard-panel) umschließt, um eine ansprechende Dashboard-Oberfläche zu erstellen.

Verwenden Sie es in einem Layout oder in Ihrer `app.vue`:

```vue [layouts/dashboard.vue]{2,6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

## API (Englisch)

### Props (nicht)

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
