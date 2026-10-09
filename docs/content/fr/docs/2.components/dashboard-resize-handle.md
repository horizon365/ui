---
title: DashboardDéveloppement
description: 'Une poignée pour redimensionner une barre latérale ou un panel.'
category: dashboard
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardResizeHandle.vue
---

## Utilisation

Le composant DashboardResizeHandle est utilisé par les composants [DashboardSidebar](/docs/components/dashboard-sidebar) et [DashboardPanel](/docs/components/dashboard-panel).

Il s'affiche automatiquement lorsque le prop `resizable` est défini, **vous n'avez pas à l'ajouter manuellement **.

## exemples

### Dans le slot `resize-handle`

Même si ce composant s'affiche automatiquement lorsque l'accessoire `resizable` est défini, vous pouvez utiliser l'emplacement `resize-handle` des composants [DashboardSidebar](/docs/components/dashboard-sidebar) et [DashboardPanelxph0222xxph023) pour personnaliser la poignée.

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
Dans cet exemple, nous ajoutons un pseudo-élément `after` pour afficher une ligne verticale en survol.
::

## api

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
