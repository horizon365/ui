---
title: DashboardsidebarColapso
description: 'Un botón para colapsar la barra lateral en el escritorio.'
category: dashboard
links:
  - label: botón
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarCollapse.vue
---

xph0000xUso

El componente DashboardSidebarCollapse se utiliza para contraer/expandir el componente [DashboardSidebar](/docs/components/dashboard-sidebar) ** cuando su prop `collapsible` es set**.

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

::note
El botón por defecto es `color="neutral"` y `variant="ghost"`.
::

## Ejemplos

### Dentro de la ranura `header`

Puede colocar este componente en la ranura `header` del componente [DashboardSidebar](/docs/components/dashboard-sidebar) y usar el prop `collapsed` para ocultar la parte izquierda de la cabecera, por ejemplo:

```vue [layouts/dashboard.vue]{4-8}
<template>
  <UDashboardGroup>
    <UDashboardSidebar collapsible>
      <template #header="{ collapsed }">
        <Logo v-if="!collapsed" />

        <UDashboardSidebarCollapse variant="subtle" />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

### Dentro de la ranura `leading`

Puede colocar este componente en la ranura `leading` del componente [DashboardNavbar](/docs/components/dashboard-navbar) para mostrarlo antes del título, por ejemplo:

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
        <template #leading>
          <UDashboardSidebarCollapse variant="subtle" />
        </template>
      </UDashboardNavbar>
    </template>
  </UDashboardPanel>
</template>
```

## API (Edición española)

### Accesorios

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<button>`.
::

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
