---
title: DashboardNavegación
description: 'Una barra de navegación responsive para mostrar en un panel de control.'
category: dashboard
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardNavbar.vue
---

@@pH000@@Uso del producto

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

Utilice las ranuras `left`,`default` y `right` para personalizar la barra de navegación.

::component-example
---
Categoría: true
Nombre del archivo: 'dashboard-navbar-ejemplo'
clase: '! px-0! pt-0'
Props:
  Categoría: w-full
---
::

::note
En este ejemplo, usamos el componente [Tabs](/docs/components/tabs) en la ranura de la derecha para mostrar algunas pestañas.
::

@@2003@Título

Utilice el prop `title` para establecer el título de la barra de navegación.

::component-code
---
Escondido:
  @34@@clase
Props:
  Título: Dashboard
  Categoría: w-full
clase: '! px-0! pt-0'
---
::

@@pH035@Icon

Utilice el prop `icon` para configurar el icono de la barra de navegación.

::component-code
---
Escondido:
  @37@clase
Ignora:
  @38@title
Props:
  Título: Dashboard
  Archivo de la etiqueta: i-lucide-house
  Categoría: w-full
clase: '! px-0! pt-0'
---
::

@39@@toggle

Utilice el prop `toggle` para personalizar el botón de alternancia que se muestra en el móvil que abre el componente [DashboardSidebar](/docs/components/dashboard-sidebar).

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-example
---
iframe: verdad
iframeMobile: Verdad
Desconocido: true
Nombre del archivo: 'dashboard-navbar-toggle-example'
Props:
  Categoría: w-full
---
::

### Toggle Lado de la foto

Utilice el prop `toggle-side` para cambiar el lado del botón de alternancia. Prevalue a `right`.

::component-example
---
iframe: verdad
iframeMobile: Verdad
Desconocido: true
Nombre del archivo: 'dashboard-navbar-toggle-side-example'
Props:
  Categoría: w-full
---
::

@525@Apid

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog
