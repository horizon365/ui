---
title: dashboardpanneau
description: 'Un panneau redimensionnable à afficher dans un dashboard.'
category: dashboard
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardPanel.vue
---

@@ph000@utilisation

Son état (taille, effondrement, etc.) sera enregistré en fonction des accessoires `storage` et `storage-key` que vous fournissez au composant [DashboardGroup](/docs/components/dashboard-group#props).

Utilisez-le à l'intérieur de l'emplacement par défaut du composant [DashboardGroup](/docs/components/dashboard-group), vous pouvez placer plusieurs panneaux les uns à côté des autres:

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

Utilisez les emplacements `header`,`body` et `footer` pour personnaliser le panneau ou l'emplacement par défaut si vous ne voulez pas un corps défilable avec rembourrage.

::component-example
---
Collapse: vrai
nom: 'dashboard-panel-exemple'
classe: '! p-0! justify-start'
Props:
  minuscule: 22
  Défaut: 35
  Maxime: 40
  classe: '! min-h-96 h-136'
---
::

::note
La plupart du temps, vous utiliserez le composant [`DashboardNavbar`](/docs/components/dashboard-navbar) dans le slot `header`.
::

### Réalisable

Utilisez le prop `resizable` pour redimensionner le panneau.

::component-code
---
Étiquette: true
Caché:
  @@ph038@minSize
  @@ph039@@defaultSize
  @@ph040@maxSize
  @@ph041@classe
Props:
  Réalisable: true
  minuscule: 22
  Défaut: 35
  Maxime: 40
  classe: '! min-h-96'
Slots:
  Corps:|

    @@@ 42 @
classe: '! p-0! justify-start'
---

#corps
@ph043
::

@@ph044@@Size

Utilisez les accessoires `min-size`,`max-size` et `default-size` pour personnaliser la taille du panneau.

::component-code
---
Étiquette: true
ignorer:
  - redimensionnable
Caché:
  @@ph049@classe
Props:
  Réalisable: true
  minuscule: 22
  Défaut: 35
  Maxime: 40
  classe: '! min-h-96'
Slots:
  Corps:|

    @@@ 500 @
classe: '! p-0! justify-start'
---

#corps
par: placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Les tailles sont calculées en pourcentage par défaut. Vous pouvez modifier cela en utilisant la prop `unit` sur le composant `DashboardGroup`.
::

@@P054@@été

@@500@@propriétés

Composants-props

@@556@@série

Composants slots

@@ph057@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
