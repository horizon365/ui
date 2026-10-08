---
title: DashboardRequerimientos
description: 'Una manija para redimensionar una barra lateral o un panel.'
category: dashboard
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardResizeHandle.vue
---

@@pH000@@Uso del producto

El componente DashboardResizeHandle es utilizado por los componentes [DashboardSidebar](/docs/components/dashboard-sidebar) y [DashboardPanel](/docs/components/dashboard-panel).

Se muestra automáticamente cuando el `resizable` prop está configurado,**no tiene que agregarlo manualmente **.

@@pH012@Ejemplos

### Dentro de `resize-handle`

A pesar de que este componente se muestra automáticamente cuando se establece el prop `resizable`, puede utilizar la ranura `resize-handle` de los componentes [DashboardSidebar](/docs/components/dashboard-sidebar) y [DashboardPanel](/docs/components/dashboard-panel) para personalizar el mango.

::code-group

```vue [layouts/dashboard.vue]{4-10}
<template>
  <UDashboardGroup>
    <UDashboardSidebar resizable>
      <template #resize-handle="{ onMouseDown, onTouchStart, onDoubleClick }">
        <UDashboardResizeHandle
          class="after:absolute after:inset-y-0 after:right-0 after:w-px hover:after:bg-(--ui-border-accented) after:transition"
          @mousedown="onMouseDown"
          @touchstart="onTouchStart"
          @dblclick="onDoubleClick"
        />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

```vue [pages/index.vue]{9-15}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel resizable>
    <template #resize-handle="{ onMouseDown, onTouchStart, onDoubleClick }">
      <UDashboardResizeHandle
        class="after:absolute after:inset-y-0 after:right-0 after:w-px hover:after:bg-(--ui-border-accented) after:transition"
        @mousedown="onMouseDown"
        @touchstart="onTouchStart"
        @dblclick="onDoubleClick"
      />
    </template>
  </UDashboardPanel>
</template>
```

::

::note
En este ejemplo, agregamos un pseudo-elemento `after` para mostrar una línea vertical en el hover.
::

@@pH064

@@pH065@@Propuestas

Componentes Props

@@666@@espanol

Componentes de slots

@067@@Proyecto

Componente Tema

@@changelog

Categoría: component-changelog
