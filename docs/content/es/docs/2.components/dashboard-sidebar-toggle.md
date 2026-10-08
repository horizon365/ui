---
title: DashboardsidebarToggle
description: 'Un botón para alternar la barra lateral en el móvil.'
category: dashboard
links:
  - label: botón
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarToggle.vue
---

@@pH000@@Uso del producto

El componente DashboardSidebarToggle es utilizado por los componentes [DashboardNavbar](/docs/components/dashboard-navbar) y [DashboardSidebar](/docs/components/dashboard-sidebar).

Se muestra automáticamente en el móvil para alternar la barra lateral,**no tienes que agregarlo manualmente **.

::component-code
---
Escondido:
  @@11@clase
Props:
  Categoría:"lg: flex"
---
::

Se extiende el [Button](/docs/components/button) componente, por lo que puede pasar cualquier propiedad como `color`,`variant`,`size`, etc.

::component-code
---
Escondido:
  @1919@clase
Ignora:
  @@20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Variación:"Sutil"
  Categoría:"lg: flex"
---
::

::note
El botón por defecto es `color="neutral"` y `variant="ghost"`.
::

@@23@Ejemplos

### Dentro de `toggle`

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
Cuando se utiliza el prop `toggle-side` de los componentes `DashboardSidebar` y `DashboardNavbar`, el botón se mostrará en el lado especificado.
::

@@pH070@@pH070

@@701@@Propuestas

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<button>`.
::

@073@@Proyecto

Componente Tema

@@74@Changelog

Categoría: component-changelog
