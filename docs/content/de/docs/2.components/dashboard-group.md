---
title: Die Dashboard-Gruppe
description: 'Eine feste Layoutkomponente, die Kontext für Dashboard-Komponenten mit Sidebar-Statusverwaltung und Persistenz bereitstellt.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardGroup.vue
---

@@@ph000@@Verwendung

Die DashboardGroup-Komponente ist das Hauptlayout, das die Komponenten [DashboardSidebar](/docs/components/dashboard-sidebar) und [DashboardPanel](/docs/components/dashboard-panel) umschließt, um eine reaktionsschnelle Dashboard-Oberfläche zu erstellen.

Verwenden Sie es in einem Layout oder in Ihrem `app.vue`:

```vue [layouts/dashboard.vue]{2,6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

@@1919 @ BTW

@@ph020@@@props

Komponenten Props

### Slots

Die Komponenten-Slots

@@ph022@@gmail.de

Das Komponenten-Theme

@@ph023@@changelog @ changelog

Das Component-Changelog
