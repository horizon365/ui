---
title: DashboardSeitenbarToggle
description: 'Ein Button zum Umschalten der Seitenleiste auf dem Handy.'
category: dashboard
links:
  - label: Der Button
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarToggle.vue
---

## Bearbeiten

Die Komponente DashboardSidebarToggle wird von den Komponenten [DashboardNavbar](/docs/components/dashboard-navbar) und [DashboardSidebar](/docs/components/dashboard-sidebar) verwendet.

Es wird automatisch auf dem Handy angezeigt, um die Sidebar umzuschalten, **Sie müssen es nicht manuell hinzufügen **.

::component-code
---
hide:
  - class
props:
  class: 'lg:flex'
---
::

Es erweitert die [Button](/docs/components/button)-Komponente, sodass Sie jede Eigenschaft wie `color`, `variant`, `size` usw. übergeben können.

::component-code
---
hide:
  - class
ignore:
  - variant
props:
  variant: 'subtle'
  class: 'lg:flex'
---
::

::note
Die Standardeinstellungen sind `color="neutral"` und `variant="ghost"`.
::

## Examples [Bearbeiten]

### Innerhalb des `toggle` Steckplatzes

Auch wenn diese Komponente automatisch auf dem Handy angezeigt wird, können Sie den `toggle`-Steckplatz der Komponenten [DashboardNavbar](/docs/components/dashboard-navbar) und [DashboardSidebar](/docs/components/dashboard-sidebar) verwenden, um die Schaltfläche anzupassen.

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
Bei Verwendung der `toggle-side`-Prop der Komponenten `DashboardSidebar` und `DashboardNavbar` wird die Schaltfläche auf der angegebenen Seite angezeigt.
::

## API (englisch)

### Props Bearbeiten

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
