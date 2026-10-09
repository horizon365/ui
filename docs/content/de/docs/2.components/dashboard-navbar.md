---
title: Dashboard-Anzeige
description: 'Eine responsive Navbar, die in einem Dashboard angezeigt wird.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardNavbar.vue
---

## Bearbeiten

Die DashboardNavbar-Komponente ist eine responsive Navigationsleiste, die in die [DashboardSidebar](/docs/components/dashboard-sidebar)-Komponente integriert ist.

Verwenden Sie es im `header`-Steckplatz der [DashboardPanel](/docs/components/dashboard-panel)-Komponente:

```vue [pages/index.vue]{9-11}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />
    </template>
  </UDashboardPanel>
</template>
```

Verwenden Sie die `left`, `default` und `right` Steckplätze, um die Navigationsleiste anzupassen.

::component-example
---
prettier: true
name: 'dashboard-navbar-example'
class: '!px-0 !pt-0'
props:
  class: 'w-full'
---
::

::note
In diesem Beispiel verwenden wir die Komponente [Tabs](/docs/components/tabs) im rechten Steckplatz, um einige Registerkarten anzuzeigen.
::

### title Übersetzung

Verwenden Sie die `title`-prop, um den Titel der Navigationsleiste festzulegen.

::component-code
---
hide:
  - class
props:
  title: 'Dashboard'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

### Icon (englisch)

Verwenden Sie die `icon` prop, um das Symbol der Navigationsleiste festzulegen.

::component-code
---
hide:
  - class
ignore:
  - title
props:
  title: 'Dashboard'
  icon: 'i-lucide-house'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

### Toggle (nicht)

Verwenden Sie die `toggle`-Prop, um die Umschalttaste anzupassen, die auf dem Handy angezeigt wird und die die Komponente [DashboardSidebar](/docs/components/dashboard-sidebar) öffnet.

Sie können jede Eigenschaft der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-example
---
iframe: true
iframeMobile: true
overflowHidden: true
name: 'dashboard-navbar-toggle-example'
props:
  class: 'w-full'
---
::

### Toggle Side Seite

Verwenden Sie die `toggle-side`-Stütze, um die Seite der Toggle-Taste zu wechseln. Standardmäßig ist `right`.

::component-example
---
iframe: true
iframeMobile: true
overflowHidden: true
name: 'dashboard-navbar-toggle-side-example'
props:
  class: 'w-full'
---
::

## API (englisch)

### Props (englisch)

:component-props

### Slots Bearbeiten

:component-slots

## Theme (englisch)

:component-theme

## Changelog (englisch)

:component-changelog
