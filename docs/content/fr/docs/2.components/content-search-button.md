---
title: RéférencesSearchButton
description: 'Un bouton prédéfini pour ouvrir le modal ContentSearch.'
category: content
framework: nuxt
links:
  - label: bouton
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearchButton.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Ce composant est uniquement disponible lorsque le module `@nuxt/content` est installé.
::

## Utilisation

Le composant ContentSearchButton est utilisé pour ouvrir le modal [ContentSearch](/docs/components/content-search).

:component-code{prefix="content"}

Il étend le composant [Button](/docs/components/button), de sorte que vous pouvez passer n'importe quelle propriété telle que `color`, `variant`, `size`, etc.

::component-code{prefix="content"}
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

### Défaillance

Utilisez la prop `collapsed` pour afficher l'étiquette du bouton et [kbds](#kbds).

::component-code{prefix="content"}
---
prettier: true
props:
  collapsed: false
---
::

### xKbds

Utilisez la prop `kbds` pour afficher les touches du clavier dans le bouton. Par défaut, `['meta', 'K']`{lang="ts-type"} correspond au raccourci par défaut du composant [ContentSearch](/docs/components/content-search#shortcut).

::component-code{prefix="content"}
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

### Props équipement

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog{prefix="content"}
