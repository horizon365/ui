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

@@@ph000@Verwendung

Die Komponente DashboardSidebarToggle wird von den Komponenten [DashboardNavbar](/docs/components/dashboard-navbar) und [DashboardSidebar](/docs/components/dashboard-sidebar) verwendet.)

Es wird automatisch auf dem Handy angezeigt, um die Seitenleiste umzuschalten,**Sie müssen es nicht manuell hinzufügen **.

::component-code
---
Hide:
  @@11@Klasse
Props:
  Klasse: lg: flex
---
::

Es erweitert die Komponente [Button](/docs/components/button), so dass Sie jede Eigenschaft wie `color`,`variant`,`size` usw. übergeben können.

::component-code
---
Hide:
  @@ph019@class
Ignoriert:
  @@ph020@@variantenreich
Props:
  Variante: "Unterwürfig"
  Klasse: 'lg: flex'
---
::

::note
Die Schaltfläche ist standardmäßig auf `color="neutral"` und `variant="ghost"`.
::

@@ph023@@Beispiele

@@ph024@@@@ph025 @@@ innerhalb @@ ph025 @ slot

Auch wenn diese Komponente automatisch auf dem Handy angezeigt wird, können Sie den `toggle`-Slot der Komponenten [DashboardNavbar](/docs/components/dashboard-navbar) und [DashboardSidebar](/docs/components/dashboard-sidebar) verwenden, um den Button anzupassen.

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
Bei Verwendung der `toggle-side` prop der Komponenten `DashboardSidebar` und `DashboardNavbar` wird die Schaltfläche auf der angegebenen Seite angezeigt.
::

## api

@@@@@@@@@@@ph071@@props

Komponenten-Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

@@@@@@@@@ph073@theme

Das Komponenten-Theme

@@ph074@@changelog @@changelog

Das Component-Changelog
