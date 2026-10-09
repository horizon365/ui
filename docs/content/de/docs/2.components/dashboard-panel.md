---
title: Das DashboardPanel
description: 'Ein anpassbares Panel, das in einem Dashboard angezeigt werden kann.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardPanel.vue
---

## Bearbeiten

Der Status (Größe, zusammengeklappt usw.) wird basierend auf den `storage`-und `storage-key`-Requisiten gespeichert, die Sie der [DashboardGroup](/docs/components/dashboard-group#props)-Komponente zur Verfügung stellen.

Verwenden Sie es innerhalb des Standardsteckplatzes der [DashboardGroup](/docs/components/dashboard-group)-Komponente, können Sie mehrere Panels nebeneinander platzieren:

```vue [pages/index.vue]{8,10}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel id="inbox-1" resizable />

  <UDashboardPanel id="inbox-2" class="hidden lg:flex" />
</template>
```

::caution
Es wird empfohlen, ein `id` zu setzen, wenn mehrere Bedienfelder auf verschiedenen Seiten verwendet werden, um Konflikte zu vermeiden.
::

::warning
Diese Komponente hat kein einziges Wurzelelement, wenn Sie die `resizable`-prop verwenden, also wickeln Sie es in einen Container (z. B. `<div class="flex flex-1">`), wenn Sie Seitenübergänge verwenden oder eine einzelne Wurzel für das Layout benötigen.
::

Verwenden Sie die Steckplätze `header`, `body` und `footer`, um das Bedienfeld oder den Standardsteckplatz anzupassen, wenn Sie keinen scrollbaren Körper mit Polsterung wünschen.

::component-example
---
collapse: true
name: 'dashboard-panel-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
Meistens verwenden Sie die Komponente [`DashboardNavbar`](/docs/components/dashboard-navbar/docs/components/dashboard-navbar) im `header`-Slot.
::

### Resizable (nicht übersetzbar)

Verwenden Sie die `resizable`-Prop, um das Panel in der Größe zu vergrößern.

::component-code
---
prettier: true
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

### Größe

Verwenden Sie die `min-size`, `max-size` und `default-size` Requisiten, um die Größe des Panels anzupassen.

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Größen werden standardmäßig als Prozentsätze berechnet. Sie können dies mit der `unit`-Prop auf der `DashboardGroup`-Komponente ändern.
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
