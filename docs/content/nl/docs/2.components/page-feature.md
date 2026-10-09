---
title: PaginaFeature
description: 'Een onderdeel om de belangrijkste kenmerken van uw applicatie te laten zien.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageFeature.vue
---

## Gebruik

De PageFeature-component wordt door de [PageSection](/docs/components/page-section) gebruikt om [features](/docs/components/page-section#features) weer te geven.

### Titel

Gebruik de `title` prop om de titel van de functie in te stellen.

::component-code
---
hide:
  - class
props:
  title: 'Theme'
  class: 'w-96'
---
::

### Beschrijving

Gebruik de `description` prop om de beschrijving van de functie in te stellen.

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

### Icoon

Gebruik de `icon` prop om het pictogram van de functie in te stellen.

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

### Link

U kunt elke eigenschap van de [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component doorgeven, zoals `to`, `target`, `rel`, enz.

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

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van de functie te wijzigen. Standaard is `horizontal`.

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

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
