---
title: DashboardGroupe
description: 'Un composant de mise en page fixe qui fournit un contexte pour les composants du tableau de bord avec la gestion et la persistance de l'état de la barre latérale.'
category: dashboard
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardGroup.vue
---

@@ph000@@utilisation

Le composant DashboardGroup est la disposition principale qui enveloppe les composants [DashboardSidebar](/docs/components/dashboard-sidebar) et [DashboardPanel](/docs/components/dashboard-panel) pour créer une interface de tableau de bord réactive.

Utilisez-le dans une mise en page ou dans votre `app.vue`:

```vue [layouts/dashboard.vue]{2,6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

@@ph019 @ réponse

@200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Composants-props

@@2011@@Slots

Composants slots

@222@thème

Composant-thème

@changelog @changelog

Composant-changelog
