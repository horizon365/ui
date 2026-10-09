---
title: Dashboardsearchbutton
description: 'Un bouton prédéfini pour ouvrir le modal DashboardSearch.'
category: dashboard
links:
  - label: bouton
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearchButton.vue
---

## Utilisation

Le composant DashboardSearchButton est utilisé pour ouvrir le modal [DashboardSearch](/docs/components/dashboard-search).

:component-code

Il étend le composant [Button](/docs/components/button), de sorte que vous pouvez passer n'importe quelle propriété telle que `color`, `variant`, `size`, etc.

::component-code
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note{to="#collapsed"}
Le bouton par défaut est `color="neutral"` et `variant="outline"` lorsqu 'il n'est pas réduit, `variant="ghost"` lorsqu' il est réduit.
::

### Défaillant

Utilisez la prop `collapsed` pour masquer l'étiquette du bouton et [kbds](#kbds).

::component-code
---
prettier: true
props:
  collapsed: true
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
Lorsque vous utilisez le bouton dans le composant **DashboardSidebar**, utilisez directement le prop de fente `collapsed`.
::

### xKbds

Utilisez la prop `kbds` pour afficher les touches du clavier dans le bouton. Par défaut, `['meta', 'K']`{lang="ts-type"} correspond au raccourci par défaut du composant [DashboardSearch](/docs/components/dashboard-search#shortcut).

::component-code
---
prettier: true
ignore:
  - kbds
props:
  collapsed: false
  kbds:
    - 'alt'
    - 'O'
---
::

## api

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
