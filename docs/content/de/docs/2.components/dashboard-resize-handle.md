---
title: Dashboard-Steuerung
description: 'Ein Handle, um eine Sidebar oder ein Panel zu skalieren.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardResizeHandle.vue
---

@@@ph000@@Verwendung

Die DashboardResizeHandle-Komponente wird von den Komponenten [DashboardSidebar](/docs/components/dashboard-sidebar) und [DashboardPanel](/docs/components/dashboard-panel) verwendet.

Es wird automatisch angezeigt, wenn `resizable` prop gesetzt ist,**Sie müssen es nicht manuell hinzufügen **.

@@ph012 @ Beispiele

### Within `resize-handle` slot

Obwohl diese Komponente automatisch angezeigt wird, wenn die `resizable` prop gesetzt ist, können Sie den `resize-handle`-Steckplatz der [DashboardSidebar](/docs/components/dashboard-sidebar) und [DashboardPanel](/docs/components/dashboard-panel) Komponenten verwenden, um den Griff anzupassen.

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
In diesem Beispiel fügen wir ein `after` Pseudo-Element hinzu, um eine vertikale Linie beim Hover anzuzeigen.
::

## api

@@@@@@ph065@@Props

Komponenten Props

### Schlitze

Die Komponenten-Slots

## Thema

Das Komponenten-Theme

@@ph068@@changelog @@changelog

Das Component-Changelog
