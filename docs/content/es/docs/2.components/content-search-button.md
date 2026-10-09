---
title: Contenido SearchButton
description: 'Un botón prediseñado para abrir el modal ContentSearch.'
category: content
framework: nuxt
links:
  - label: botón
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearchButton.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Este componente solo está disponible cuando se instala el módulo `@nuxt/content`.
::

## Servicio

El componente ContentSearchButton se utiliza para abrir el modal [ContentSearch](/docs/components/content-search).

:component-code{prefix="content"}

Extiende el componente [Button](/docs/components/button), por lo que puede pasar cualquier propiedad como `color`, `variant`, `size`, etc.

::component-code{prefix="content"}
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note{to="#collapsed"}
El botón por defecto es `color="neutral"` y `variant="outline"` cuando no se colapsa, `variant="ghost"` cuando se colapsa.
::

### Colapsado

Utilice el prop `collapsed` para mostrar la etiqueta del botón y [kbds](#kbds).

::component-code{prefix="content"}
---
prettier: true
props:
  collapsed: false
---
::

### kbds (en inglés)

Utilice el prop `kbds` para mostrar las teclas del teclado en el botón. Predeterminados a `['meta', 'K']`{lang="ts-type"} para que coincida con el acceso directo predeterminado del componente [ContentSearch](/docs/components/content-search#shortcut).

::component-code{prefix="content"}
---
prettier: true
ignore:
  - kbds
props:
  collapsed: false
  kbds:
    - 'alt'
    - 'O'
---
::

## API (Edición española)

### Accesorios

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos `<button>`.
::

### Slots (Edición española)

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog{prefix="content"}
