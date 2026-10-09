---
title: ColoridadAvatar
description: 'Un Avatar con una fuente diferente para el modo de luz y oscuridad.'
category: color-mode
links:
  - label: El Avatar
    to: /docs/components/avatar
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeAvatar.vue
---

xph0000xUso

El componente ColorModeAvatar extiende el componente [Avatar](/docs/components/avatar), por lo que puede pasar cualquier propiedad como `size`, `icon`, etc.

Utilice los accesorios `light` y `dark` para definir la fuente para el modo claro y oscuro.

::component-code{prefix="color-mode"}
---
props:
  light: 'https://github.com/vuejs.png'
  dark: 'https://github.com/nuxt.png'
---
::

::note
Cambiar entre el modo claro y oscuro para ver las diferentes imágenes:: u-color-mode-select{size="sm"}
::

## API (Edición española)

### Propciones

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<img>`.
::

## Changelog (Edición española)

:component-changelog{prefix="color-mode"}
