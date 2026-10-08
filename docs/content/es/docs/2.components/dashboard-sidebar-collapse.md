---
title: DashboardsidebarColapso
description: 'Un botón para colapsar la barra lateral en el escritorio.'
category: dashboard
links:
  - label: Botón
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarCollapse.vue
---

@@pH000@@Uso del producto

El componente DashboardSidebarCollapse se utiliza para contraer/expandir el [DashboardSidebar](/docs/components/dashboard-sidebar) componente **cuando su `collapsible` prop está configurado **.

Componentes de código

Se extiende el [Button](/docs/components/button) componente, por lo que puede pasar cualquier propiedad, como `color`,`variant`,`size`, etc

::component-code
---
Ignora:
  @@P015@Variación
Props:
  Variación:"Sutil"
---
::

::note
El botón por defecto es `color="neutral"` y `variant="ghost"`.
::

@18@Ejemplos

### Dentro de `header`

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

### Dentro de `leading`

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

@@pH068

@@pH069@@Propuestas

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<button>`.
::

@71@@tema

Componente Tema

@2017@Changelog

Categoría: component-changelog
