---
title: DashboardResizeHandle
description: 'Een handvat om het formaat van een zijbalk of paneel te wijzigen.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardResizeHandle.vue
---

## Gebruik

De DashboardResizeHandle component wordt gebruikt door de [DashboardSidebar](/docs/components/dashboard-sidebar) en [DashboardPanel](/docs/components/dashboard-panel) componenten.

Het wordt automatisch weergegeven wanneer de `resizable` prop is ingesteld, **je hoeft het niet handmatig toe te voegen**.

## Voorbeelden

### Binnen `resize-handle` slot

Hoewel dit onderdeel automatisch wordt weergegeven wanneer de `resizable` prop is ingesteld, kunt u de `resize-handle`-sleuf van de [DashboardSidebar](/docs/components/dashboard-sidebar) en [DashboardPanel](/docs/components/dashboard-panel) componenten gebruiken om het handvat aan te passen.

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
In dit voorbeeld voegen we een `after` pseudo-element toe om een verticale lijn bij zweven weer te geven.
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
