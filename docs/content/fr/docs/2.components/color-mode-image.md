---
title: ColorModélisation
description: 'Un élément d'image avec une source différente pour le mode clair et sombre.'
category: color-mode
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeImage.vue
---

@@ph000@@utilisation

Le composant ColorModeImage utilise le composant `<NuxtImg>` lorsque [`@nuxt/image`](https://github.com/nuxt/image) est installé, retombant à `img` dans le cas contraire.

::component-code{prefix="color-mode"}
---
Étiquette: true
Ignorer:
  @@008@@échantillon
  @@ph009@hauteur
Props:
  périphérique: https://picsum.photos/id/29/400
  dark: 'https://picsum.photos/id/46/400'
  Largeur: 200
  hauteur: 200
---
::

::note
Basculer entre le mode clair et sombre pour voir les différentes images: : u-color-mode-select {size="sm"}
::

@@P011@@Paix

@@ph012@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<img>`.
::

@changelog @changelog

: composant-changelog {prefix="color-mode"}
