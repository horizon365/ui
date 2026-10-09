---
title: dashboardpanneau
description: 'Un panneau redimensionnable à afficher dans un dashboard.'
category: dashboard
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardPanel.vue
---

## Utilisation

Son état (taille, effondrement, etc.) sera enregistré en fonction des accessoires `storage` et `storage-key` que vous fournissez au composant [DashboardGroup](/docs/components/dashboard-group#props).

Utilisez-le dans l'emplacement par défaut du composant [DashboardGroup](/docs/components/dashboard-group), vous pouvez placer plusieurs panneaux les uns à côté des autres:

```vue [pages/index.vue]{8,10}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel id="inbox-1" resizable />

  <UDashboardPanel id="inbox-2" class="hidden lg:flex" />
</template>
```

::caution
Il est recommandé de définir un `id` lorsque vous utilisez plusieurs panneaux dans différentes pages pour éviter les conflits.
::

::warning
Ce composant n'a pas un seul élément racine lorsque vous utilisez la prop `resizable`, donc enveloppez-le dans un conteneur (par exemple `<div class="flex flex-1">`) si vous utilisez des transitions de page ou si vous avez besoin d'une seule racine pour la mise en page.
::

Utilisez les emplacements `header`, `body` et `footer` pour personnaliser le panneau ou l'emplacement par défaut si vous ne voulez pas un corps défilable avec rembourrage.

::component-example
---
collapse: true
name: 'dashboard-panel-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
La plupart du temps, vous utiliserez le composant [`DashboardNavbar`](/docs/components/dashboard-navbar) dans l'emplacement `header`.
::

### Redimensionnable

Utilisez le prop `resizable` pour redimensionner le panneau.

::component-code
---
prettier: true
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

### taille

Utilisez les accessoires `min-size`, `max-size` et `default-size` pour personnaliser la taille du panneau.

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Les tailles sont calculées en pourcentage par défaut. Vous pouvez modifier cela en utilisant la prop `unit` sur le composant `DashboardGroup`.
::

## api

### Props

:component-props

### Slots électroniques

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
