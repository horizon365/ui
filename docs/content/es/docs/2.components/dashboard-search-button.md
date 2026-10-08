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

@@pH000@@Uso del producto

El componente DashboardSearchButton se utiliza para abrir el [DashboardSearch](/docs/components/dashboard-search) modal.

Componentes de código

Se extiende el [Button](/docs/components/button) componente, por lo que puede pasar cualquier propiedad como `color`,`variant`,`size`, etc.

::component-code
---
Ignora:
  @@P2012@Variación
Props:
  Variación:"Sutil"
---
::

::note{to="#collapsed"}
El botón por defecto a `color="neutral"` y `variant="outline"` cuando no colapsado,`variant="ghost"` cuando colapsado.
::

@16000 @ Desaparecido

Utilice el prop `collapsed` para ocultar la etiqueta del botón y [kbds](#kbds).

::component-code
---
Categoría: true
Props:
  Colapsado: Cierto
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
Cuando utilice el botón en el componente **DashboardSidebar**, utilice el accesorio de ranura `collapsed` directamente.
::

@@26000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el `kbds` prop para mostrar las teclas del teclado en el botón. Predeterminados a `['meta', 'K']`{lang="ts-type"} para que coincida con el acceso directo predeterminado del componente [DashboardSearch](/docs/components/dashboard-search#shortcut).

::component-code
---
Categoría: true
Ignora:
  @34@34@34@34
Props:
  Colapsado: Falso
  kbd:
    @@pH035 @@'nuevo'
    @@pH036 @@'y'
---
::

@@pH037@@pH037

@380@38000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<button>`.
::

@400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@2004@Changelog

Categoría: component-changelog
