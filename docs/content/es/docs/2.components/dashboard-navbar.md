---
title: DashboardNavegación
description: 'Una barra de navegación responsive para mostrar en un panel de control.'
category: dashboard
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardNavbar.vue
---

xph0000xUso

El componente DashboardNavbar es una barra de navegación receptiva que se integra con el componente [DashboardSidebar](/docs/components/dashboard-sidebar). Incluye un botón de alternancia móvil para habilitar la navegación receptiva en los diseños del tablero.

Úselo dentro de la ranura `header` del componente [DashboardPanel](/docs/components/dashboard-panel):

```vue [pages/index.vue]{9-11}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />
    </template>
  </UDashboardPanel>
</template>
```

Utilice las ranuras `left`, `default` y `right` para personalizar la barra de navegación.

::component-example
---
prettier: true
name: 'dashboard-navbar-example'
class: '!px-0 !pt-0'
props:
  class: 'w-full'
---
::

::note
En este ejemplo, usamos el componente [Tabs](/docs/components/tabs) en la ranura de la derecha para mostrar algunas pestañas.
::

### Nombre

Utilice el prop `title` para establecer el título de la barra de navegación.

::component-code
---
hide:
  - class
props:
  title: 'Dashboard'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

### Icon

Utilice el prop `icon` para configurar el icono de la barra de navegación.

::component-code
---
hide:
  - class
ignore:
  - title
props:
  title: 'Dashboard'
  icon: 'i-lucide-house'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

### Télam

Utilice el prop `toggle` para personalizar el botón de alternancia que se muestra en el móvil que abre el componente [DashboardSidebar](xph066).

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-example
---
iframe: true
iframeMobile: true
overflowHidden: true
name: 'dashboard-navbar-toggle-example'
props:
  class: 'w-full'
---
::

### Toggle lado

Utilice el prop `toggle-side` para cambiar el lado del botón de alternancia.

::component-example
---
iframe: true
iframeMobile: true
overflowHidden: true
name: 'dashboard-navbar-toggle-side-example'
props:
  class: 'w-full'
---
::

## API (Edición española)

### Accesorios

:component-props

### Slots (Español)

:component-slots

## Temas

:component-theme

xph05xChangelog (Edición española)

:component-changelog
