---
title: Die DashboardToolbar
description: 'Eine Toolbar, die unter der Navbar in einem Dashboard angezeigt wird.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardToolbar.vue
---

@@@ph000@@Verwendung

Die DashboardToolbar-Komponente wird verwendet, um eine Symbolleiste unter der Komponente [DashboardNavbar](/docs/components/dashboard-navbar) anzuzeigen.

Verwenden Sie es innerhalb des `header`-Schlitzes der [DashboardPanel](/docs/components/dashboard-panel) Komponente:

```vue [pages/index.vue]{9-13}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />

      <UDashboardToolbar />
    </template>
  </UDashboardPanel>
</template>
```

Verwenden Sie die `left`,`default` und `right` Slots, um die Symbolleiste anzupassen.

::component-example
---
Schöner: wahr
Name: 'Dashboard-Toolbar-Beispiel'
Klasse: '! px-0! pt-0'
Props:
  Klasse: "W-voll"
---
::

::note
In diesem Beispiel verwenden wir die Komponente [NavigationMenu](/docs/components/navigation-menu), um einige Links zu rendern.
::

@@@@@@b34@b34.de

@@ph035@@gmail.de

Komponenten-Props

@@ph036@gmail.de

Die Komponenten-Slots

@@ph037@@gmail.de

Das Komponenten-Theme

@@ph038@@changelog @@@ changelog @@@ changelog

Das Component-Changelog
