---
title: ColormodeBild
description: 'Ein Bildelement mit einer anderen Quelle für Hell-und Dunkelmodus.'
category: color-mode
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeImage.vue
---

## Bearbeiten

Die ColorModeImage-Komponente verwendet die `<NuxtImg>`-Komponente, wenn [`@nuxt/image`](https://github.com/nuxt/image) installiert ist, ansonsten fällt sie auf `img` zurück.

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
Wechseln Sie zwischen Hell-und Dunkelmodus, um die verschiedenen Bilder anzuzeigen: : u-color-mode-select{size="sm"}
::

## API Bearbeiten

### Props Bearbeiten

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<img>`-HTML-Attribute.
::

## Changelog (englisch)

:component-changelog{prefix="color-mode"}
