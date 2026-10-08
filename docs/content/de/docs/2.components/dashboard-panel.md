---
title: Das DashboardPanel
description: 'Ein anpassbares Panel, das in einem Dashboard angezeigt wird.'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardPanel.vue
---

@@@ph000@Verwendung

Der Status (Größe, Einklappen usw.) wird basierend auf den `storage` und `storage-key` Props gespeichert, die Sie der [DashboardGroup](/docs/components/dashboard-group#props) Komponente zur Verfügung stellen.

Verwenden Sie es innerhalb des Standardsteckplatzes der Komponente [DashboardGroup](/docs/components/dashboard-group), können Sie mehrere Panels nebeneinander stellen:

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
Es wird empfohlen, ein `id` zu setzen, wenn Sie mehrere Panels auf verschiedenen Seiten verwenden, um Konflikte zu vermeiden.
::

::warning
Diese Komponente hat kein einziges Root-Element, wenn Sie `resizable` prop verwenden, also wickeln Sie es in einen Container (z. B.`<div class="flex flex-1">`), wenn Sie Seitenübergänge verwenden oder eine einzelne Root für das Layout benötigen.
::

Verwenden Sie die `header`,`body` und `footer` Steckplätze, um das Panel oder den Standardsteckplatz anzupassen, wenn Sie keinen scrollbaren Körper mit Polsterung wünschen.

::component-example
---
Einsturz: wahr
Name: 'Dashboard-Panel-Beispiel'
Klasse: '! p-0! justify-start'
Props:
  Anzahl: 22
  Fehlerquote: 35
  Größe max: 40
  Klasse: '! min-h-96 h-136'(Englisch)
---
::

::note
Die meiste Zeit werden Sie die Komponente [`DashboardNavbar`PH0333) im `header`-Slot verwenden.
::

### Resisable36

Verwenden Sie `resizable` prop, um die Größe des Panels zu ändern.

::component-code
---
Schöner: wahr
Hide:
  @@ph038@@minSize
  @@ph039@defaultSize
  @@ph040@@maxSize
  @@@@@@@class041@class041@class041@class041@class@class@class@class@class041@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@classclassclass@class@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@c@classclassclassc@classclassclassclassclassclass
Props:
  Größe: true
  Anzahl: 22
  Fehlerquote: 35
  Größe: 40
  Klasse: '! min-h-96'
Slots auf:
  Der Körper:|

    @@042
Klasse: '! p-0! justify-start'
---

#Körper
: placeholder{class="h-96"}
::

@@ph044 @ Größe

Verwenden Sie die Props `min-size`,`max-size` und `default-size`, um die Größe des Panels anzupassen.

::component-code
---
Schöner: wahr
Ignoriert:
  - resizable
Hide:
  @@@@@@49@class
Props:
  Größe: true
  Anzahl: 22
  Fehlerquote: 35
  Größe max: 40
  Klasse: '! min-h-96'
Die Slots:
  Der Körper:|

    @@500
Klasse: '! p-0! justify-start'
---

#Der Körper
: placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
Größen werden standardmäßig als Prozentwerte berechnet. Sie können dies mit dem `unit` prop auf der `DashboardGroup` Komponente ändern.
::

@@@@@554@@bmg-gmbh

@@@@555@@gmail.de

Komponenten-Props

@@ph056@gmail.de

Die Komponenten-Slots

@@ph057@gmail.de

Das Komponenten-Theme

@@ph058@@changelog @@@ changelog

Das Component-Changelog
