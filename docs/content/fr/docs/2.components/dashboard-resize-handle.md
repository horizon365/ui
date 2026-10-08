---
title: DashboardDéveloppement
description: 'Une poignée pour redimensionner une barre latérale ou un panel.'
category: dashboard
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardResizeHandle.vue
---

@@ph000@@utilisation

Le composant DashboardResizeHandle est utilisé par les composants [DashboardSidebar](/docs/components/dashboard-sidebar) et [DashboardPanel](/docs/components/dashboard-panel).

Il est automatiquement affiché lorsque le `resizable` prop est réglé,**vous n'avez pas à l'ajouter manuellement **.

@@ph012@exemples

### Dans `resize-handle`

Même si ce composant s'affiche automatiquement lorsque l'accessoire `resizable` est réglé, vous pouvez utiliser l'emplacement `resize-handle` des composants [DashboardSidebar](/docs/components/dashboard-sidebar) et [DashboardPanel](/docs/components/dashboard-panel) pour personnaliser la poignée.

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

@@ph064@@api

@@@ph065@@props

Composants-props

@@ph066@@réseaux sociaux

Composants slots

@@ph067@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
