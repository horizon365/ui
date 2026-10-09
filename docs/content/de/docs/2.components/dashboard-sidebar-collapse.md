---
title: DashboardSidebarCollapse (Übersicht)
description: 'Ein Button, um die Sidebar auf dem Desktop zu reduzieren.'
category: dashboard
links:
  - label: Der Button
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarCollapse.vue
---

## Bearbeiten

Die Komponente DashboardSidebarCollapse wird verwendet, um die [DashboardSidebar](/docs/components/dashboard-sidebar)-Komponente ** zu reduzieren/zu erweitern, wenn die `collapsible`-Prop auf ** gesetzt ist.

:component-code

Es erweitert die Komponente [Button](/docs/components/button), so dass Sie jede Eigenschaft wie `color`, `variant`, `size` usw. übergeben können.

::component-code
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note
Die Standardeinstellungen für die Schaltfläche sind `color="neutral"` und `variant="ghost"`.
::

## Examples (Beispiele)

### Innerhalb des `header` Steckplatzes

Sie können diese Komponente in den `header`-Steckplatz der [DashboardSidebar](/docs/components/dashboard-sidebar)-Komponente einfügen und die `collapsed`-Prop verwenden, um den linken Teil des Headers auszublenden, zum Beispiel:

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

### Innerhalb des `leading` Steckplatzes

Sie können diese Komponente in den `leading`-Slot der Komponente [DashboardNavbar](/docs/components/dashboard-navbar) einfügen, um sie beispielsweise vor dem Titel anzuzeigen:

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

## API (Englisch)

### Props (englisch)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
