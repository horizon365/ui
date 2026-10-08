---
title: DashboardDécouvrez
description: 'Une barre de navigation responsive à afficher dans un tableau de bord.'
category: dashboard
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardNavbar.vue
---

@@ph000@@utilisation

Le composant DashboardNavbar est une barre de navigation réactive qui s'intègre au composant [DashboardSidebar](/docs/components/dashboard-sidebar). Il comprend un bouton de bascule mobile pour activer la navigation réactive dans les mises en page du tableau de bord.

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

Utilisez les emplacements `left`,`default` et `right` pour personnaliser la barre de navigation.

::component-example
---
Étiquette: true
nom: dashboard-navbar-exemple
classe: '! px-0! pt-0'
Props:
  Catégorie: w-full
---
::

::note
Dans cet exemple, nous utilisons le composant [Tabs](/docs/components/tabs) dans l'emplacement de droite pour afficher des onglets.
::

@@ph032@@titre

Utilisez la prop `title` pour définir le titre de la barre de navigation.

::component-code
---
Caché:
  @@classe 34
Props:
  Titre: Dashboard
  Catégorie: w-full
classe: '! px-0! pt-0'
---
::

### Icon

Utilisez la prop `icon` pour définir l'icône de la barre de navigation.

::component-code
---
Caché:
  @@ph037@classe
Ignorer:
  @@ph038@titre
Props:
  Titre: Dashboard
  Icône:'i-lucide-house'
  Catégorie: w-full
classe: '! px-0! pt-0'
---
::

@@ph039@Toggle

Utilisez le prop `toggle` pour personnaliser le bouton bascule affiché sur le mobile qui ouvre le composant [DashboardSidebar](/docs/components/dashboard-sidebar).

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-example
---
iframe: vrai
iframeMobile: vrai
dépassement: true
nom: 'dashboard-navbar-toggle-exemple'
Props:
  Catégorie: w-full
---
::

### Toggle Côté

Utilisez le prop `toggle-side` pour changer le côté du bouton bascule. Par défaut à `right`.

::component-example
---
iframe: vrai
iframeMobile: vrai
dépassement: true
nom: 'dashboard-navbar-toggle-side-example'
Props:
  Catégorie: w-full
---
::

@@P252@@référencement

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Composants-props

@@54@@séries

Composants slots

@@505@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
