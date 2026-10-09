---
title: Couleur Avatar
description: 'Un avatar avec une source différente pour le mode lumineux et sombre.'
category: color-mode
links:
  - label: avatar
    to: /docs/components/avatar
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeAvatar.vue
---

## Utilisation

Le composant ColorModeAvatar étend le composant [Avatar](/docs/components/avatar), de sorte que vous pouvez passer n'importe quelle propriété telle que `size`, `icon`, etc.

Utilisez les accessoires `light` et `dark` pour définir la source des modes clair et sombre.

::component-code{prefix="color-mode"}
---
props:
  light: 'https://github.com/vuejs.png'
  dark: 'https://github.com/nuxt.png'
---
::

::note
Basculer entre le mode clair et sombre pour voir les différentes images: : u-color-mode-select{size="sm"}
::

## api

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<img>`.
::

## Changelog

:component-changelog{prefix="color-mode"}
