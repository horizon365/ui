---
title: ColorModeAfbeelding
description: 'Een beeldelement met een andere bron voor lichte en donkere modus.'
category: color-mode
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeImage.vue
---

## Gebruik

De ColorModeImage-component gebruikt de `<NuxtImg>`-component wanneer [`@nuxt/image`](https://github.com/nuxt/image) is geïnstalleerd en valt anders terug naar `img`.

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
