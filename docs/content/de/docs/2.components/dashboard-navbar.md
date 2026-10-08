---
title: DashboardBearbeiten
description: 'Eine responsive Navbar, die in einem Dashboard angezeigt wird.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardNavbar.vue
---

@@@ph000@Verwendung

Die DashboardNavbar-Komponente ist eine responsive Navigationsleiste, die in die Komponente [DashboardSidebar](/docs/components/dashboard-sidebar) integriert ist.

Verwenden Sie es innerhalb des `header`-Schlitzes der [DashboardPanel](/docs/components/dashboard-panel) Komponente:

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

Verwenden Sie die `left`,`default` und `right` Slots, um die Navigationsleiste anzupassen.

::component-example
---
Schöner: wahr
Name: 'Dashboard-Navbar-Beispiel'
Klasse: '! px-0! pt-0'
Props:
  Klasse: "W-voll"
---
::

::note
In diesem Beispiel verwenden wir die Komponente [Tabs](/docs/components/tabs) im rechten Steckplatz, um einige Registerkarten anzuzeigen.
::

@@ph032@title @ Übersetzung

Verwenden Sie `title` prop, um den Titel der Navbar festzulegen.

::component-code
---
Hide:
  @@34@Klasse
Props:
  Titel: „ Dashboard "
  Klasse: "W-voll"
Klasse: '! px-0! pt-0'
---
::

@@ph035@@gmail.de

Verwenden Sie `icon` prop, um das Symbol der Navigationsleiste zu setzen.

::component-code
---
Hide:
  @@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@class@class@classclass@class@class@class@classclassclass@classclass@class@class
Ignoriert:
  @@@@@@38@title
Props:
  Titel: „ Dashboard "
  Das I-Lucide-Haus
  Klasse: "W-voll"
Klasse: '! px-0! pt-0'
---
::

@@ph039@@@toggle

Verwenden Sie `toggle` prop, um die auf dem Handy angezeigte Umschalttaste anzupassen, die die Komponente [DashboardSidebar](/docs/components/dashboard-sidebar) öffnet.

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-example
---
iframe: wahr
iframeMobile: Richtig
Übertreibungen: wahr
name: 'dashboard-navbar-toggle-example'(Beispiel für die Dashboard-Navbar-Toggle-Example)
Props:
  Klasse: "W-voll"
---
::

@@ph049@@toggle Seite

Verwenden Sie `toggle-side` prop, um die Seite der Toggle-Taste zu ändern. Standardmäßig `right`.

::component-example
---
iframe: wahr
iframeMobile: Richtig
Übertreibungen: wahr
Name: 'Dashboard-Navbar-Toggle-Side-Beispiel'
Props:
  Klasse: "W-voll"
---
::

@@@@@@522@@@bpb

@@ph053@@gmail.de

Komponenten Props

@@ph054@gmail.de

Die Komponenten-Slots

@@@@@@@555@@@@@@555@55@@@555@@@@55@@@@555@@@@55@@@@@@55@@@@@@@@@@@@@Themes

Das Komponenten-Theme

@@ph056@@changelog @@changelog

Das Component-Changelog
