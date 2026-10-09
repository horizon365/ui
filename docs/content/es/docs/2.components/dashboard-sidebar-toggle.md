---
title: DashboardsidebarToggle
description: 'Un botón para alternar la barra lateral en el móvil.'
category: dashboard
links:
  - label: Botón
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarToggle.vue
---

xph0000xUso

El componente DashboardSidebarToggle lo utilizan los componentes [DashboardNavbar](/docs/components/dashboard-navbar) y [DashboardSidebar](/docs/components/dashboard-sidebar).

Se muestra automáticamente en el móvil para alternar la barra lateral, **no tienes que agregarlo manualmente **.

::component-code
---
hide:
  - class
props:
  class: 'lg:flex'
---
::

Extiende el componente [Button](/docs/components/button), por lo que puede pasar cualquier propiedad como `color`, `variant`, `size`, etc.

::component-code
---
hide:
  - class
ignore:
  - variant
props:
  variant: 'subtle'
  class: 'lg:flex'
---
::

::note
El botón por defecto es `color="neutral"` y `variant="ghost"`.
::

## Ejemplos

### Dentro de la ranura `toggle`

A pesar de que este componente se muestra automáticamente en el móvil, puede utilizar la ranura `toggle` de los componentes [DashboardNavbar](/docs/components/dashboard-navbar) y [DashboardSidebar](/docs/components/dashboard-sidebar) para personalizar el botón.

::code-group

```vue [layouts/dashboard.vue]{4-6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <template #toggle>
        <UDashboardSidebarToggle variant="subtle" />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

```vue [pages/index.vue]{11-13}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Home">
        <template #toggle>
          <UDashboardSidebarToggle variant="subtle" />
        </template>
      </UDashboardNavbar>
    </template>
  </UDashboardPanel>
</template>
```

::

::tip
Cuando se utiliza el soporte `toggle-side` de los componentes `DashboardSidebar` y `DashboardNavbar`, el botón se mostrará en el lado especificado.
::

## API

### Accesorios

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML `<button>` nativos.
::

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
