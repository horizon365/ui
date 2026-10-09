---
title: ColorModélisation
description: 'Un élément d'image avec une source différente pour le mode clair et sombre.'
category: color-mode
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeImage.vue
---

## Utilisation

Le composant ColorModeImage utilise le composant `<NuxtImg>` lorsque [`@nuxt/image`](https://github.com/nuxt/image) est installé, revenant à `img` sinon.

::component-code{prefix="color-mode"}
---
prettier: true
ignore:
  - width
  - height
props:
  light: 'https://picsum.photos/id/29/400'
  dark: 'https://picsum.photos/id/46/400'
  width: 200
  height: 200
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

## Changelog écrit

:component-changelog{prefix="color-mode"}
