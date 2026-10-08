---
title: DashboardToolbar
description: 'Una barra de herramientas para mostrar debajo de la barra de navegación en un tablero.'
category: dashboard
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardToolbar.vue
---

@@pH000@@Uso del producto

El componente DashboardToolbar se utiliza para mostrar una barra de herramientas bajo el componente [DashboardNavbar](/docs/components/dashboard-navbar).

Úselo dentro de la ranura `header` del componente [DashboardPanel](/docs/components/dashboard-panel):

```vue [pages/index.vue]{9-13}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />

      <UDashboardToolbar />
    </template>
  </UDashboardPanel>
</template>
```

Utilice las ranuras `left`,`default` y `right` para personalizar la barra de herramientas.

::component-example
---
Categoría: true
Nombre: 'dashboard-toolbar-ejemplo'
clase: '! px-0! pt-0'
Props:
  Categoría: w-full
---
::

::note
En este ejemplo, usamos el componente [NavigationMenu](/docs/components/navigation-menu) para representar algunos enlaces.
::

@@pH034

@@35000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@36000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@37@@tema

Componente Tema

@@changelog

Categoría: component-changelog
