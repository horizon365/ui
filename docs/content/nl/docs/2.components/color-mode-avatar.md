---
title: KleurModeAvatar
description: 'Een Avatar met een andere bron voor lichte en donkere modus.'
category: color-mode
links:
  - label: Avatar
    to: /docs/components/avatar
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeAvatar.vue
---

## Gebruik

De ColorModeAvatar-component breidt de [Avatar](/docs/components/avatar) -component uit, zodat u elke eigenschap zoals `size`, `icon`, enz. Kunt doorgeven.

Gebruik de `light`- en `dark`-rekwisieten om de bron voor de lichte en donkere modus te definiëren.

::component-code{prefix="color-mode"}
---
props:
  light: 'https://github.com/vuejs.png'
  dark: 'https://github.com/nuxt.png'
---
::

::note
Schakel tussen de lichte en donkere modus om de verschillende afbeeldingen te zien::u-color-mode-select{size="sm"}
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<img>` HTML-kenmerken.
::

## Changelog

:component-changelog{prefix="color-mode"}
