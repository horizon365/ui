---
title: DashboardGroep
description: 'Een vaste lay-outcomponent die context biedt voor dashboardcomponenten met zijbalkstatusbeheer en persistentie.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardGroup.vue
---

## Gebruik

De DashboardGroup-component is de hoofdlay-out die de [DashboardSidebar](/docs/components/dashboard-sidebar) en [DashboardPanel](/docs/components/dashboard-panel) componenten omhult om een responsieve dashboardinterface te creëren.

Gebruik het in een layout of in je `app.vue`:

```vue [layouts/dashboard.vue]{2,6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Changelog

:component-changelog
