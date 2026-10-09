---
title: Dashboardsearchbutton
description: 'Un botón prediseñado para abrir el modal DashboardSearch.'
category: dashboard
links:
  - label: botón
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearchButton.vue
---

xph0000xUso

El componente DashboardSearchButton se utiliza para abrir el modal [DashboardSearch](/docs/components/dashboard-search).

:component-code

Extiende el componente [Button](/docs/components/button), por lo que puede pasar cualquier propiedad como `color`, `variant`, `size`, etc.

::component-code
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note{to="#collapsed"}
El botón por defecto es `color="neutral"` y `variant="outline"` cuando no está colapsado, `variant="ghost"` cuando está colapsado.
::

### Colapsado

Utilice el prop `collapsed` para ocultar la etiqueta del botón y [kbds](#kbds).

::component-code
---
prettier: true
props:
  collapsed: true
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
Cuando utilice el botón en el componente **DashboardSidebar**, utilice directamente el soporte de la ranura `collapsed`.
::

### kbds (en inglés)

Utilice el prop `kbds` para mostrar las teclas del teclado en el botón. Predeterminados a `['meta', 'K']`{lang="ts-type"} para que coincida con el acceso directo predeterminado del componente [DashboardSearch](/docs/components/dashboard-search#shortcut).

::component-code
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
Este componente también admite todos los atributos HTML nativos de `<button>`.
::

### Slots (Español)

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
