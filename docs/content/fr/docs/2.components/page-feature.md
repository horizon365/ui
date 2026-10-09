---
title: Pagefeature
description: 'Un composant pour présenter les caractéristiques clés de votre application.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageFeature.vue
---

## Utilisation

Le composant PageFeature est utilisé par le composant [PageSection](/docs/components/page-section) pour afficher [features](/docs/components/page-section#features).

### titre

Utilisez le prop `title` pour définir le titre de la fonctionnalité.

::component-code
---
hide:
  - class
props:
  title: 'Theme'
  class: 'w-96'
---
::

### Description

Utilisez le prop `description` pour définir la description de la fonctionnalité.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
props:
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  class: 'w-96'
---
::

### icône

Utilisez le prop `icon` pour définir l'icône de la fonctionnalité.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  icon: 'i-lucide-swatch-book'
  class: 'w-96'
---
::

### Lien

Vous pouvez passer n'importe quelle propriété du composant [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) telle que `to`, `target`, `rel`, etc.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - target
props:
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  icon: 'i-lucide-swatch-book'
  to: '/docs/getting-started/theme/design-system'
  target: _blank
  class: 'w-96'
---
::

### Orientation

Utilisez la prop `orientation` pour modifier l'orientation de la fonctionnalité. Par défaut à `horizontal`.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
props:
  orientation: 'vertical'
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  icon: 'i-lucide-swatch-book'
  class: 'w-96'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
