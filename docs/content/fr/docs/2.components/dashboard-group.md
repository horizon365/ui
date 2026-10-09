---
title: DashboardGroupe
description: 'Un composant de mise en page fixe qui fournit un contexte pour les composants du tableau de bord avec la gestion et la persistance de l'état de la barre latérale.'
category: dashboard
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardGroup.vue
---

## Utilisation

Le composant DashboardGroup est la mise en page principale qui enveloppe les composants [DashboardSidebar](/docs/components/dashboard-sidebar) et [DashboardPanelxph006/docs/components/dashboard-panel) pour créer une interface de tableau de bord réactive.

Utilisez-le dans une mise en page ou dans votre `app.vue`:

```vue [layouts/dashboard.vue]{2,6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

## api

### Props équipement

:component-props

### Slots

:component-slots

## Thème

:component-theme

## changelog

:component-changelog
