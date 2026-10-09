---
title: colorimetría
description: 'Un elemento de imagen con una fuente diferente para el modo claro y oscuro.'
category: color-mode
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeImage.vue
---

xph0000xUso

El componente ColorModeImage utiliza el componente `<NuxtImg>` cuando está instalado [`@nuxt/image`](https://github.com/nuxt/image), y de lo contrario vuelve a `img`.

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
Cambiar entre el modo claro y oscuro para ver las diferentes imágenes:: u-color-mode-select{size="sm"}
::

## API

### Accesorios

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<img>`.
::

## Changelog (Edición española)

:component-changelog{prefix="color-mode"}
