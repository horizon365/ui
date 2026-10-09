---
title: Dashboard-Seitenleiste
description: 'Eine skalierbare und zusammenklappbare Seitenleiste, die in einem Dashboard angezeigt wird.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebar.vue
---

## Bearbeiten

Die DashboardSidebar-Komponente wird verwendet, um eine Seitenleiste in einem Dashboard-Layout anzuzeigen. Es unterstützt Drag-to-Size, State-Persistenz und integriert sich mit [DashboardGroup](/docs/components/dashboard-group), [DashboardPanel](/docs/components/dashboard-panel) und [DashboardNavbar](xph0111x/docs/components/dashboard-navbar).

::tip{to="/docs/components/sidebar"}
**DashboardSidebar vs Sidebar**: Diese Komponente wurde für Dashboard-Layouts mit Drag-to-Size, State-Persistenz und `DashboardGroup`-Integration entwickelt. Für eine einfache, eigenständige Seitenleiste (Chat-Panel, Einstellungen, Navigation) verwenden Sie stattdessen [Sidebar](/docs/components/sidebar).
::

Sein Status (Größe, zusammengeklappt usw.) wird basierend auf den `storage`-und `storage-key`-Props gespeichert, die Sie der [DashboardGroup](/docs/components/dashboard-group#props)-Komponente zur Verfügung stellen.

Verwenden Sie es innerhalb des Standardsteckplatzes der Komponente [DashboardGroup](/docs/components/dashboard-group):

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

::warning
Diese Komponente hat kein einziges Root-Element, wenn Sie die `resizable`-Prop verwenden, also wickeln Sie es in einen Container (z. B. `<div class="flex flex-1">`), wenn Sie Seitenübergänge verwenden oder eine einzelne Root für das Layout benötigen.
::

Verwenden Sie die Slots `header`, `default` und `footer`, um die Seitenleiste und die Slots `body` oder `content` anzupassen, um das Menü der Seitenleiste anzupassen.

::component-example
---
collapse: true
name: 'dashboard-sidebar-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
Ziehen Sie die Seitenleiste in die Nähe des linken Randes des Bildschirms, um sie zu reduzieren.
::

### Resizable (nicht verfügbar)

Verwenden Sie die `resizable`-Prop, um die Seitenleiste in der Größe anzupassen.

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
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

### Collapsible (nicht verfügbar)

Verwenden Sie die `collapsible`-Stütze, um die Seitenleiste zusammenklappbar zu machen, wenn Sie sie in die Nähe des Bildschirmrandes ziehen.

::warning
Die Komponente [`DashboardSidebarCollapse`](/docs/components/dashboard-sidebar-collapse) hat keine Auswirkungen, wenn die Seitenleiste nicht **collapsible** ist.
::

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="#slots"}
Sie können auf den `collapsed`-Status in den Slot-Requisiten zugreifen, um den Inhalt der Seitenleiste anzupassen, wenn sie zusammengeklappt wird.
::

### Größe

Verwenden Sie die `min-size`, `max-size`, `default-size` und `collapsed-size` Requisiten, um die Größe der Seitenleiste anzupassen.

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  collapsedSize: 0
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Größen werden standardmäßig als Prozentsätze berechnet. Sie können dies mit der `unit`-Prop auf der `DashboardGroup`-Komponente ändern.
::

::note
Die `collapsed-size` prop ist standardmäßig auf `0` eingestellt, aber die Seitenleiste hat eine `min-w-16`, um sicherzustellen, dass sie sichtbar ist.
::

### Side Seite

Verwenden Sie die `side`-Prop, um die Seite der Seitenleiste zu ändern. Standardmäßig `left`.

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  side: 'right'
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-end'
---

:placeholder{class="h-96"}
::

### Mode Bearbeiten

Verwenden Sie die `mode`-Prop, um den Modus des Sidebar-Menüs zu ändern. Standardmäßig `slideover`.

Verwenden Sie den `body`-Steckplatz, um den Menükörper (unter der Kopfzeile) oder den `content`-Steckplatz zu füllen, um das gesamte Menü zu füllen.

::tip{to="#props"}
Sie können die `menu` prop verwenden, um das Menü der Seitenleiste anzupassen, es wird je nach dem von Ihnen gewählten Modus angepasst.
::

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'drawer'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::note
Diese Beispiele enthalten die Komponenten [`DashboardGroup`](/docs/components/dashboard-group), [`DashboardPanel`](/docs/components/dashboard-panel) und [`DashboardNavbar`](](/docs/components/dashboard-navbar), da sie zur Demonstration der Seitenleiste auf Mobilgeräten erforderlich sind.
::

### Toggle

Verwenden Sie die `toggle`-Prop, um die [DashboardSidebarToggle](/docs/components/dashboard-sidebar-toggle)-Komponente anzupassen, die auf dem Handy angezeigt wird.

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-example'
props:
  class: 'w-full'
---
::

### Toggle Side Seite

Verwenden Sie die `toggle-side`-Stütze, um die Seite der Toggle-Taste zu wechseln. Standardmäßig ist `left`.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-side-example'
props:
  class: 'w-full'
---
::

## Examples [Bearbeiten]

### Control im offenen Zustand

Sie können den offenen Zustand mit der `open`-prop-oder der `v-model:open`-Direktive steuern.

::component-example
---
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-open-example'
class: '!p-0 !justify-start'
---
::

::note
In diesem Beispiel können Sie unter Nutzung von [`defineShortcuts`](/docs/composables/define-shortcuts) den offenen Status der DashboardSidebar umschalten, indem Sie: kbd{value="O"} drücken.
::

### Control kollabiert

Sie können den kollabierten Zustand mit der `collapsed`-prop-oder der `v-model:collapsed`-Direktive steuern.

::component-example
---
name: 'dashboard-sidebar-collapsed-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
In diesem Beispiel können Sie unter Nutzung von [`defineShortcuts`](/docs/composables/define-shortcuts) den zusammengebrochenen Zustand der DashboardSidebar durch Drücken von kbd{value="C"} umschalten.
::

## API ist

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
