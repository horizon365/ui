---
title: Dashboardsavoir
description: 'Une barre latérale redimensionnable et pliable à afficher dans un tableau de bord.'
category: dashboard
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebar.vue
---

@@ph000@@utilisation

Le composant DashboardSidebar est utilisé pour afficher une barre latérale dans une mise en page de tableau de bord. Il prend en charge le glisser-redimensionner, la persistance de l'état et s'intègre avec [DashboardGroup/docs/components/dashboard-group),[DashboardPanel](/docs/components/dashboard-panel) et [DashboardNavbar](/docs/components/dashboard-navbar).

::tip{to="/docs/components/sidebar"}
**DashboardSidebar vs Sidebar **: Ce composant est conçu pour les mises en page de tableau de bord avec glisser-redimensionner, persistance d'état et intégration `DashboardGroup`. Pour une barre latérale simple et autonome (panneau de discussion, paramètres, navigation), utilisez [](/docs/components/sidebar) à la place.
::

Son état (taille, effondrement, etc.) sera enregistré en fonction des accessoires `storage` et `storage-key` que vous fournissez au composant [DashboardGroup/docs/components/dashboard-group#props).

Utilisez-le à l'intérieur de l'emplacement par défaut du composant [DashboardGroup](/docs/components/dashboard-group):

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

::warning
Ce composant n'a pas un seul élément racine lorsque vous utilisez la prop `resizable`, donc enveloppez-le dans un conteneur (par exemple `<div class="flex flex-1">`) si vous utilisez des transitions de page ou si vous avez besoin d'une seule racine pour la mise en page.
::

Utilisez les emplacements `header`,`default` et `footer` pour personnaliser la barre latérale et les emplacements `body` ou `content` pour personnaliser le menu de la barre latérale.

::component-example
---
Collapse: vrai
nom: 'dashboard-sidebar-exemple'
classe: '! p-0! justify-start'
Props:
  minuscule: 22
  Défaut: 35
  Maxime: 40
  classe: '! min-h-96 h-136'
---
::

::note
Faites glisser la barre latérale près du bord gauche de l'écran pour l'effondrer.
::

### Résiliable

Utilisez la prop `resizable` pour redimensionner la barre latérale.

::component-code
---
Étiquette: true
Caché:
  @@ph048@minSize
  @@ph049@@defaultSize
  @@ph050@maxSize
  @@ph051@classe
Props:
  Réalisable: true
  minuscule: 22
  Défaut: 35
  Maxime: 40
  classe: '! min-h-96'
Slots:
  Default:|

    @@@ 52 @
classe: '! p-0! justify-start'
---

@ph053
::

### Résolu

Utilisez le prop `collapsible` pour plier la barre latérale lorsque vous la faites glisser près du bord de l'écran.

::warning
Le composant [`DashboardSidebarCollapse`](/docs/components/dashboard-sidebar-collapse) n'aura aucun effet si la barre latérale n'est pas **collapsible**.
::

::component-code
---
Étiquette: true
Ignorer:
  - redimensionnable
Caché:
  @@ph064@minSize
  @@ph065@@defaultsize
  @@ph066@maxSize
  @@ph067@classe
Props:
  Réalisable: true
  Pliable: vrai
  minuscule: 22
  Défaut: 35
  Maxime: 40
  classe: '! min-h-96'
Slots:
  Défaut:|

    @@@ 068 @
classe: '! p-0! justify-start'
---

par: placeholder{class="h-96"}
::

::tip{to="#slots"}
Vous pouvez accéder à l'état `collapsed` dans les accessoires de l'emplacement pour personnaliser le contenu de la barre latérale lorsqu 'elle est réduite.
::

@@ph071@@Size

Utilisez les props `min-size`,`max-size`,`default-size` et `collapsed-size` pour personnaliser la taille de la barre latérale.

::component-code
---
Étiquette: true
ignorer:
  - redimensionnable
  @@777@@faible
Caché:
  @@ph078@classe
Props:
  Réalisable: true
  Pliable: vrai
  minuscule: 22
  Défaut: 35
  Maxime: 40
  Collisionné: 0
  classe: '! min-h-96'
Slots:
  Défaut:|

    @@@ 079 @
classe: '! p-0! justify-start'
---

par placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Les tailles sont calculées en pourcentage par défaut. Vous pouvez modifier cela en utilisant la prop `unit` sur le composant `DashboardGroup`.
::

::note
Le prop `collapsed-size` est défini sur `0` par défaut, mais la barre latérale a un `min-w-16` pour s'assurer qu 'il est visible.
::

@@ph086@@côté

Utilisez la prop `side` pour changer le côté de la barre latérale. Defaults à `left`.

::component-code
---
Étiquette: true
Ignorer:
  - redimensionnable
  - foldable
Caché:
  @@ph091@@minSize
  @@ph092@@defaultSize
  @@ph093@maxSize
  @@ph094@classe
Props:
  Étiquette:"Right"
  Réalisable: true
  Pliable: vrai
  minuscule: 22
  Défaut: 35
  Maxime: 40
  classe: '! min-h-96'
Slots:
  Défaut:|

    @@@ 095 @
classe: '! p-0! justify-end'
---

par: placeholder{class="h-96"}
::

@@pH097@mode

Utilisez la prop `mode` pour modifier le mode du menu de la barre latérale. Par défaut à `slideover`.

Utilisez l'emplacement `body` pour remplir le corps du menu (sous l'en-tête) ou l'emplacement `content` pour remplir le menu entier.

::tip{to="#props"}
Vous pouvez utiliser le prop `menu` pour personnaliser le menu de la barre latérale, il s'adaptera en fonction du mode que vous choisissez.
::

::component-example
---
Collapse: vrai
Iframe:
  Hauteur: 500px
iframeMobile: vrai
dépassement: true
nom: 'dashboard-sidebar-mode-exemple'
options:
  - name:'mode'
    Étiquette: mode
    Défaut:"Drawer"
    items:
      @@ph104@modalité
      @@P105@@slide
      @@ph106@tireur
Props:
  Catégorie: w-full
---
::

::note
Ces exemples contiennent les composants [](/docs/components/dashboard-group),[`DashboardPanel`](/docs/components/dashboard-panel) et [](/docs/components/dashboard-navbar), car ils sont nécessaires pour démontrer la barre latérale sur mobile.
::

@@ph122@toutou

Utilisez le prop `toggle` pour personnaliser le composant [DashboardSidebarToggle](/docs/components/dashboard-sidebar-toggle) affiché sur mobile.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-example
---
Collapse: vrai
Iframe:
  Hauteur: 500px
iframeMobile: vrai
dépassement: true
nom: 'dashboard-sidebar-toggle-example'
Props:
  Catégorie: w-full
---
::

### Toggle côté

Utilisez la prop `toggle-side` pour changer le côté du bouton bascule. Par défaut,`left`.

::component-example
---
Collapse: vrai
iframe:
  Hauteur: 500px
iframeMobile: vrai
dépassement: true
nom: 'dashboard-sidebar-toggle-side-example'
Props:
  Catégorie: w-full
---
::

@@ph135@exemples

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `open` ou la directive `v-model:open`.

::component-example
---
iframe:
  Hauteur: 500px
iframeMobile: vrai
dépassement: true
nom: 'dashboard-sidebar-open-exemple'
classe: '! p-0! justify-start'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer l'état ouvert de la barre latérale du tableau de bord en appuyant sur: kbd{value="O"}.
::

### Control état effondré

Vous pouvez contrôler l'état réduit en utilisant la prop `collapsed` ou la directive `v-model:collapsed`.

::component-example
---
nom: 'dashboard-sidebar-collapsed-example'
classe: '! p-0! justify-start'
Props:
  minuscule: 22
  Défaut: 35
  Maxime: 40
  classe: '! min-h-96 h-136'
---
::

::note
Dans cet exemple, en utilisant `defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer l'état réduit de la barre latérale du tableau de bord en appuyant sur: kbd{value="C"}.
::

@@ph154@api

@@ph155@@props

Composants-props

@@ph156@@réglages

Composants slots

@@ph157@thème

Composant-thème

@change158 @ changement

Composant-changelog
