---
title: Dashboardsavoir
description: 'Une barre latérale redimensionnable et pliable à afficher dans un tableau de bord.'
category: dashboard
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebar.vue
---

## Utilisation

Il prend en charge le glisser-redimensionner, la persistance de l'état et s'intègre avec [DashboardGroup](/docs/components/dashboard-group), [DashboardPanelxph006/docs/components/dashboard-panel) et [DashboardNavbar](ph0111).

::tip{to="/docs/components/sidebar"}
**DashboardSidebar vs Sidebar**: Ce composant est conçu pour les mises en page de tableau de bord avec glisser-redimensionner, persistance d'état et intégration `DashboardGroup`.Pour une barre latérale simple et autonome (panneau de discussion, paramètres, navigation), utilisez plutôt [Sidebar](xph016).
::

Son état (taille, effondré, etc.) sera enregistré en fonction des props `storage` et `storage-key` que vous fournissez au composant [xDashboardGroup](/docs/components/dashboard-group#props).

Utilisez-le dans l'emplacement par défaut du composant [DashboardGroup](/docs/components/dashboard-group):

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

Utilisez les slots `header`, `default` et `footer` pour personnaliser la barre latérale et les slots `body` ou `content` pour personnaliser le menu de la barre latérale.

::component-example
---
collapse: true
name: 'dashboard-sidebar-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
Faites glisser la barre latérale près du bord gauche de l'écran pour l'effondrer.
::

### Redimensionnable

Utilisez la prop `resizable` pour redimensionner la barre latérale.

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
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

### Collapsible

Utilisez le prop `collapsible` pour rendre la barre latérale pliable lorsque vous la faites glisser près du bord de l'écran.

::warning
Le composant [`DashboardSidebarCollapse`](/docs/components/dashboard-sidebar-collapse) n'aura aucun effet si la barre latérale n'est pas **collapsible**.
::

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="#slots"}
Vous pouvez accéder à l'état `collapsed` dans les accessoires de l'emplacement pour personnaliser le contenu de la barre latérale lorsqu 'elle est réduite.
::

### Size électrique

Utilisez les props `min-size`, `max-size`, `default-size` et `collapsed-size` pour personnaliser la taille de la barre latérale.

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  collapsedSize: 0
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Les tailles sont calculées en pourcentage par défaut. Vous pouvez modifier cela en utilisant la prop `unit` sur le composant `DashboardGroup`.
::

::note
La prop `collapsed-size` est définie sur `0` par défaut, mais la barre latérale a un `min-w-16` pour s'assurer qu 'elle est visible.
::

### Side

Utilisez la prop `side` pour changer le côté de la barre latérale. Par défaut, `left`.

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  side: 'right'
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-end'
---

:placeholder{class="h-96"}
::

### mode

Utilisez la prop `mode` pour changer le mode du menu de la barre latérale. Par défaut, `slideover`.

Utilisez l'emplacement `body` pour remplir le corps du menu (sous l'en-tête) ou l'emplacement `content` pour remplir le menu entier.

::tip{to="#props"}
Vous pouvez utiliser le prop `menu` pour personnaliser le menu de la barre latérale, il s'adaptera en fonction du mode que vous choisissez.
::

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'drawer'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::note
Ces exemples contiennent les composants [`DashboardGroup`](/docs/components/dashboard-group), [`DashboardPanel`](/docs/components/dashboard-panel) et [`DashboardNavbar`](/docs/components/dashboard-navbar), car ils sont nécessaires pour montrer la barre latérale sur mobile.
::

### Toggle

Utilisez la prop `toggle` pour personnaliser le composant [DashboardSidebarToggle](/docs/components/dashboard-sidebar-toggle) affiché sur mobile.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour la personnaliser.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-example'
props:
  class: 'w-full'
---
::

### Toggle côté

Utilisez la prop `toggle-side` pour changer le côté du bouton bascule. Par défaut, `left`.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-side-example'
props:
  class: 'w-full'
---
::

## Exemples

### Control état ouvert

Vous pouvez contrôler l'état ouvert à l'aide de la prop `open` ou de la directive `v-model:open`.

::component-example
---
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-open-example'
class: '!p-0 !justify-start'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer l'état ouvert de la barre latérale du tableau de bord en appuyant sur: kbd{value="O"}.
::

### Control État effondré

Vous pouvez contrôler l'état effondré en utilisant la prop `collapsed` ou la directive `v-model:collapsed`.

::component-example
---
name: 'dashboard-sidebar-collapsed-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer l'état réduit de la barre latérale du tableau de bord en appuyant sur: kbd{value="C"}.
::

## API

### Props is

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
