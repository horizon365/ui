---
title: El DashboardGroup
description: 'Un componente de diseño fijo que proporciona contexto para los componentes del tablero con administración y persistencia del estado de la barra lateral.'
category: dashboard
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardGroup.vue
---

@@pH000@@Uso del producto

El componente DashboardGroup es el diseño principal que envuelve los componentes [DashboardSidebar](/docs/components/dashboard-sidebar) y [DashboardPanel](/docs/components/dashboard-panel) para crear una interfaz de tablero sensible.

Úselo en un diseño o en su `app.vue`:

```vue [layouts/dashboard.vue]{2,6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

@@pH019

@200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@21@2000 puntos

Componentes de slots

@@2222222222222222012

Componente Tema

@@2002@Changelog

Categoría: component-changelog
