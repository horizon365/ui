---
title: DashboardRequerimientos
description: 'Una manija para redimensionar una barra lateral o un panel.'
category: dashboard
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardResizeHandle.vue
---

xph0000xUso

El componente DashboardResizeHandle se utiliza en los componentes [DashboardSidebar](/docs/components/dashboard-sidebar) y [DashboardPanel](/docs/components/dashboard-panel).

Se muestra automáticamente cuando se establece el prop `resizable`, ** no tiene que agregarlo manualmente **

## Ejemplos

XPH013x Dentro de la ranura XPH014x

A pesar de que este componente se muestra automáticamente cuando se establece el soporte `resizable`, puede utilizar la ranura `resize-handle` de los componentes [DashboardSidebar](/docs/components/dashboard-sidebar) y [DashboardPanelxph0222xxph023) para personalizar el mango.

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
En este ejemplo, agregamos un pseudoelemento `after` para mostrar una línea vertical al flotar.
::

## API (Edición española)

### Accesorios

:component-props

### Slots (Edición española)

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
