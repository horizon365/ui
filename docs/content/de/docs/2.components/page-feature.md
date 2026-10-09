---
title: PageFeature
description: 'Eine Komponente, um die wichtigsten Funktionen Ihrer Anwendung zu präsentieren.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageFeature.vue
---

## Bearbeiten

Die Komponente PageFeature wird von der Komponente [PageSection](/docs/components/page-section) verwendet, um [features](/docs/components/page-section#features) anzuzeigen.

### title

Verwenden Sie die `title`-Prop, um den Titel des Features festzulegen.

::component-code
---
hide:
  - class
props:
  title: 'Theme'
  class: 'w-96'
---
::

### Beschreibung

Verwenden Sie die `description`-Prop, um die Beschreibung des Features festzulegen.

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

### Icon Bearbeiten

Verwenden Sie die `icon`-Prop, um das Symbol der Funktion festzulegen.

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

### Link auf

Sie können jede Eigenschaft der Komponente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) übergeben, z. B. `to`, `target`, `rel` usw.

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

### Ausrichtung

Verwenden Sie die `orientation`-prop, um die Ausrichtung des Features zu ändern. Standardmäßig ist `horizontal`.

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

## API (englisch)

### Props (englisch)

:component-props

### Slots Bearbeiten

:component-slots

## Theme (englisch)

:component-theme

## Changelog (englisch)

:component-changelog
