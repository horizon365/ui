---
title: DashboardDécouvrez
description: 'Une barre de navigation responsive à afficher dans un tableau de bord.'
category: dashboard
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardNavbar.vue
---

## Utilisation

Le composant DashboardNavbar est une barre de navigation réactive qui s'intègre au composant [DashboardSidebar](xph003). Il comprend un bouton de bascule mobile pour activer la navigation réactive dans les mises en page de tableau de bord.

Utilisez-le à l'intérieur de l'emplacement `header` du composant [DashboardPanel](/docs/components/dashboard-panel):

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

Utilisez les slots `left`, `default` et `right` pour personnaliser la barre de navigation.

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
Dans cet exemple, nous utilisons le composant [Tabs](/docs/components/tabs) dans l'emplacement de droite pour afficher certains onglets.
::

### Titre

Utilisez le prop `title` pour définir le titre de la barre de navigation.

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

### icône

Utilisez le prop `icon` pour définir l'icône de la barre de navigation.

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

### Télécharger

Use the `toggle` prop to customize the toggle button displayed on mobile that opens the [DashboardSidebar](xph066) component.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

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

### Toggle Côté

Utilisez la prop `toggle-side` pour changer le côté du bouton bascule. Par défaut, `right`.

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

## api

### Props

:component-props

### Slots

:component-slots

## thème

:component-theme

## Changelog

:component-changelog
