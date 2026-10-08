---
title: Dashboard-Seite
description: 'Eine skalierbare und zusammenklappbare Seitenleiste, die in einem Dashboard angezeigt wird.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebar.vue
---

@@@ph000@Verwendung

Die DashboardSidebar-Komponente wird verwendet, um eine Seitenleiste in einem Dashboard-Layout anzuzeigen. Es unterstützt Drag-to-Size, State-Persistenz und integriert sich mit [DashboardGroup](/docs/components/dashboard-group),[DashboardPanel](/docs/components/dashboard-panel) und [DashboardNavbar](/docs/components/dashboard-navbar).

::tip{to="/docs/components/sidebar"}
**DashboardSidebar vs Sidebar**: Diese Komponente wurde für Dashboard-Layouts mit Drag-to-Size, State-Persistenz und `DashboardGroup` integration entwickelt. Für eine einfache, eigenständige Sidebar (Chat-Panel, Einstellungen, Navigation) verwenden Sie stattdessen [Sidebar](/docs/components/sidebar).
::

Sein Zustand (Größe, kollabiert usw.) wird auf der Grundlage der `storage` und `storage-key` Props gespeichert, die Sie der [DashboardGroup](/docs/components/dashboard-group#props) Komponente zur Verfügung stellen.

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
Diese Komponente hat kein einziges Root-Element, wenn Sie `resizable` prop verwenden, also wickeln Sie es in einen Container (z. B.`<div class="flex flex-1">`), wenn Sie Seitenübergänge verwenden oder ein einzelnes Root für das Layout benötigen.
::

Verwenden Sie die Slots `header`,`default` und `footer`, um die Seitenleiste anzupassen, und die Slots `body` oder `content`, um das Menü der Seitenleiste anzupassen.

::component-example
---
Einsturz: wahr
Name: 'Dashboard-Sidebar-Beispiel'
Klasse: '! p-0! justify-start'
Props:
  Anzahl: 22
  Fehlerquote: 35
  Größe: 40
  Klasse: '! min-h-96 h-136'(Englisch)
---
::

::note
Ziehen Sie die Seitenleiste in die Nähe des linken Randes des Bildschirms, um sie zu reduzieren.
::

### Resisable

Verwenden Sie `resizable` prop, um die Seitenleiste in der Größe zu ändern.

::component-code
---
Schöner: wahr
Hide:
  - minSize
  @@ph049@defaultSize (nicht)
  @@ph050@@maxSize
  @@@@@@51@000@051@051@051@051@000@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Größe: true
  Anzahl: 22
  Fehlerquote: 35
  Größe: 40
  Klasse: '! min-h-96'
Slots auf:
  Default:|

    @@@@52
Klasse: '! p-0! justify-start'
---

: Platzhalter{class="h-96"}
::

@@ph054@gmail.de

Verwenden Sie `collapsible` prop, um die Seitenleiste zusammenklappbar zu machen, wenn Sie sie in die Nähe des Bildschirmrandes ziehen.

::warning
Die Komponente [`DashboardSidebarCollapse`]() hat keine Wirkung, wenn die Seitenleiste nicht **collapsible** ist.
::

::component-code
---
Schöner: wahr
Ignoriert:
  - resizable
Hide:
  - minSize
  - defaultSize
  - maxSize
  @@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@c
Props:
  Größe: true
  zusammenklappbar: true
  Anzahl: 22
  Fehlerquote: 35
  Größe: 40
  Klasse: '! min-h-96'
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@068
Klasse: '! p-0! justify-start'
---

: placeholder{class="h-96"}
::

::tip{to="#slots"}
Sie können auf den `collapsed`-Status in den Slot-Requisiten zugreifen, um den Inhalt der Seitenleiste anzupassen, wenn sie zusammengeklappt ist.
::

### Größe

Verwenden Sie die Props `min-size`,`max-size`,`default-size` und `collapsed-size`, um die Größe der Seitenleiste anzupassen.

::component-code
---
Schöner: wahr
Ignoriert:
  - resizable
  - zusammenklappbar
Hide:
  @@@@@@@@@@@@@class
Props:
  Größe: true
  zusammenklappbar: true
  Anzahl: 22
  Fehlerquote: 35
  Größe max: 40
  Abgebrochen: 0
  Klasse: '! min-h-96'
Slots auf:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@079
Klasse: '! p-0! justify-start'
---

: Platzhalter{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Größen werden standardmäßig als Prozentwerte berechnet. Sie können dies mit dem `unit` prop auf der `DashboardGroup` Komponente ändern.
::

::note
Die `collapsed-size` prop ist standardmäßig auf `0` gesetzt, aber die Seitenleiste hat eine `min-w-16`, um sicherzustellen, dass sie sichtbar ist.
::

@@@@@@86@@Seite

Verwenden Sie `side` prop, um die Seite der Seitenleiste zu ändern. Standardmäßig `left`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@@@@@@ph089@@sisable
  @@ph090@einklappbar
Hide:
  @@ph091@@minSize
  @@ph092@defaultSize
  @@ph093@@maxSize
  @@@@@@@@@@@class
Props:
  Seite: "Richtig"
  Größe: true
  zusammenklappbar: true
  Anzahl: 22
  Fehlerquote: 35
  Größe max: 40
  Klasse: '! min-h-96'
Slots auf:
  Default:|

    @@@@95 @
Klasse: "! p-0! justify-end"("! p-0! justify-end")
---

: Platzhalter{class="h-96"}
::

### Mode

Verwenden Sie `mode` prop, um den Modus des Seitenleistenmenüs zu ändern. Standardmäßig ist `slideover`.

Verwenden Sie den `body`-Steckplatz, um den Menükörper (unter der Kopfzeile) oder den `content`-Steckplatz zu füllen, um das gesamte Menü auszufüllen.

::tip{to="#props"}
Sie können die `menu` prop verwenden, um das Menü der Seitenleiste anzupassen, es wird sich je nach dem von Ihnen gewählten Modus anpassen.
::

::component-example
---
Einsturz: wahr
iFrame:
  Größe: 500px
iframeMobile: wahr
Übertreibungen: wahr
Name: 'dashboard-sidebar-mode-example'(Beispiel)
optionen:
  - name:'Modus'
    Markiert: "Mode"
    Default: „ Schublade "
    Items:
      @@104@modal
      @@ph105@slideover
      @@106@gmail.de
Props:
  Klasse: "W-voll"
---
::

::note
Diese Beispiele enthalten die [](/docs/components/dashboard-group),[`DashboardPanel`](/docs/components/dashboard-navbar) und [`DashboardNavbar`](/docs/components/dashboard-navbar), wie sie zur Demonstration der mobilen Seitenleiste erforderlich sind.
::

@@@ph122@@toggle

Verwenden Sie `toggle` prop, um die auf Mobilgeräten angezeigte Komponente [DashboardSidebarToggle](/docs/components/dashboard-sidebar-toggle) anzupassen.

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-example
---
Einsturz: wahr
iFrame:
  Größe: 500px
iframeMobile: wahr
Übertreibungen: wahr
name: 'dashboard-sidebar-toggle-example'(Beispiel für eine Dashboard-Seitenleiste)
Props:
  Klasse: "W-voll"
---
::

### Toggle Side (auf Englisch)

Verwenden Sie `toggle-side` prop, um die Seite der Toggle-Taste zu ändern. Standardmäßig `left`.

::component-example
---
Einsturz: wahr
IFrame:
  Größe: 500px
iframeMobile: Richtig
Übertreibungen: wahr
Name: 'dashboard-sidebar-toggle-side-example'(Dashboard-Sidebar-Toggle-Side-Beispiel)
Props:
  Klasse: "W-voll"
---
::

## Beispiele

### Control Offener Zustand

Sie können den offenen Zustand mithilfe der Direktive `open` prop oder der Direktive `v-model:open` steuern.

::component-example
---
IFrame:
  Größe: 500px
iframeMobile: Richtig
Übertreibungen: wahr
Name: 'dashboard-sidebar-open-example'(Beispiel für eine Dashboard-Seitenleiste)
Klasse: '! p-0! justify-start'
---
::

::note
In diesem Beispiel können Sie unter Nutzung von [`defineShortcuts`]() den offenen Status der DashboardSidebar durch Drücken von kbd{value="O"} umschalten.
::

### Control kollabierten Zustand

Sie können den kollabierten Zustand mit der `collapsed` prop oder der `v-model:collapsed`-Direktive steuern.

::component-example
---
name: 'dashboard-sidebar-collapsed-example'(Dashboard-Seitenleiste-Beispiel)
Klasse: '! p-0! justify-start'
Props:
  Anzahl: 22
  Fehlerquote: 35
  Größe max: 40
  Klasse: '! min-h-96 h-136'(Englisch)
---
::

::note
In diesem Beispiel können Sie unter Nutzung von [`defineShortcuts`](/docs/composables/define-shortcuts) den reduzierten Zustand der DashboardSidebar umschalten, indem Sie auf kbd{value="C"} drücken.
::

@@@@@@154@@api

@@155@@bmg-gmbh

Komponenten-Props

### Spielautomaten

Die Komponenten-Slots

@@@@@@@157@157@157@157@157@157@157@157@157@157@157@157@15@157@@157@@157@@157@@157@15@@157@157@15@15@@157@157@15@@157@@@157@@@157@@@@@157@@@@@157@@@@@@@@@@1557@@@@@@@@@@@@@@@@@@@@@@@@@@@15557@@@@@@@@@@@@@@@@@@@@@@@@@Thema

Das Komponenten-Theme

@@ph158@@changelog (auf Englisch)

Das Component-Changelog
