---
title: DashboardSidebarCollapse Bearbeiten
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

@@@ph000@@Verwendung

Die Komponente DashboardSidebarCollapse wird verwendet, um die Komponente [DashboardSidebar](/docs/components/dashboard-sidebar) Komponente **wenn die `collapsible` prop gesetzt ist ** zu reduzieren/erweitern.

Der Komponentencode

Es erweitert die Komponente [Button](/docs/components/button), so dass Sie jede Eigenschaft wie `color`,`variant`,`size` usw. übergeben können.

::component-code
---
Ignoriert:
  @@ph015@@variant.de
Props:
  Variante: "Unterwürfig"
---
::

::note
Die Schaltfläche ist standardmäßig auf `color="neutral"` und `variant="ghost"`.
::

@@ph018 @ Beispiele

@@ph019@@@ph020

Sie können diese Komponente in den `header`-Slot der [DashboardSidebar](/docs/components/dashboard-sidebar)-Komponente einfügen und die `collapsed`-Prop verwenden, um den linken Teil des Headers auszublenden, zum Beispiel:

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

@@ph042@@@ph043

Sie können diese Komponente in den `leading`-Schlitz der Komponente [DashboardNavbar](/docs/components/dashboard-navbar) einfügen, um sie beispielsweise vor dem Titel anzuzeigen:

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

## api

@@@@@@@@@@@@ph069@@props

Komponenten Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

@@@@@@@@@ph071@theme

Das Komponenten-Theme

@@ph072@@changelog @@changelog

Das Component-Changelog
