---
title: Scrollbereich
description: Ein flexibler Scroll-Container mit Virtualisierungsunterstützung.
category: data
keywords:
  - scrollbar
  - overflow
  - scrolling
links:
  - label: Virtuelles Tanken
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/virtual/latest
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ScrollArea.vue
---

@@@ph000@Verwendung

Die ScrollArea-Komponente erstellt scrollbare Container mit optionaler Virtualisierung für große Listen.

::component-example
---
Einsturz: wahr
Übertreibungen: wahr
name: 'scroll-area-example'(scroll-Bereich-Beispiel)
Klasse: '! p-0'
---
::

@@ph001@gmail.de

Verwenden Sie `items` prop als Array und rendern Sie jedes Element mit dem Standard-Slot:

::component-example
---
Einsturz: wahr
Übertreibungen: wahr
name: 'scroll-area-items-example'(scroll-area-items-beispiel)
Klasse: '! p-0'
---
::

::tip{to="#with-default-slot"}
Sie können den Standardslot auch ohne `items` prop verwenden, um benutzerdefinierte scrollbare Inhalte direkt darzustellen.
::

@@ph004@Orientierung

Verwenden Sie `orientation` prop, um die Bildlaufrichtung zu ändern. Standardmäßig ist `vertical`.

::component-example
---
Einsturz: wahr
Übertreibungen: wahr
Name: 'scroll-area-orientierung-example'
Klasse: '! p-0'
Optionen:
  - name: Orientierung
    Label: Orientierung
    Default: Horizontal
    Items:
      @@ph008@vertikal
      @@ph009@heine-heine-heine.de
---
::

@@ph010@virtualisieren

Verwenden Sie `virtualize` prop, um nur die aktuell angezeigten Elemente zu rendern, wodurch die Leistung bei der Arbeit mit großen Datensätzen erheblich gesteigert wird.

::note
Wenn die Virtualisierung **enabled** ist, passen Sie den Abstand über die `virtualize` prop-Optionen wie `gap`,`paddingStart` und `paddingEnd` an.
::

::tip
Wenn alle Ihre Artikel die **gleiche Höhe ** haben, setzen Sie `skipMeasurement` auf `true` in der `virtualize` prop, um die DOM-Messung pro Artikel zu überspringen und sich stattdessen auf `estimateSize` zu verlassen.
::

::component-example
---
Einsturz: wahr
Übertreibungen: wahr
'scroll-area-virtualize-example'(scroll-area-virtualize-beispiel)
Klasse: '! p-0'
Optionen:
  - name: Orientierung
    Label: Orientierung
    Default: Vertikal
    Items:
      @@ph028@vertikal
      @@ph029@@gmail.com
---
::

@@ph030@@shadow@ph031@@shadow@ph031 @@

Verwenden Sie `shadow` prop, um Fade-Schatten an den scrollbaren Rändern anzuzeigen, um anzuzeigen, dass mehr Inhalt in Scroll-Richtung verfügbar ist.

::component-example
---
Einsturz: wahr
'scroll-area-shadow-example'(scroll-Bereich-Schatten-Beispiel)
---
::

::tip
Übergeben Sie ein Objekt an `shadow` prop, um die Überblendungsgröße zu konfigurieren, z. B.`:shadow="{ size: 48 }"`.
::

@@ph036@@Beispiele

### Als Mauerwerk Layout

Verwenden Sie die Optionen `virtualize` prop mit `lanes`,`gap` und `estimateSize`, um Pinterest-Stil-Mauerwerkslayouts mit Elementen mit variabler Höhe zu erstellen.

::component-example
---
Einsturz: wahr
Übertreibungen: wahr
name: 'scroll-area-masonry-layout-example'(scroll-area-masonry-layout-beispiel)
Klasse: '! p-0'
Optionen:
  - name: Orientierung
    Labels: Orientierung
    Default: Vertikal
    Items:
      @@ph043@vertikal
      @@ph044@@gmail.de
  - name: lanes
    Typ: Nummer
    Markiert: LANES
    Default-Zustand: 3
  - name: Lücke
    Typ: Anzahl
    Markiert: Gap
    Fehlbetrag: 16
---
::

::tip
Für eine optimale Leistung setzen Sie `estimateSize` in der Nähe Ihrer durchschnittlichen Artikelhöhe. Die Erhöhung von `overscan` verbessert die Laufruhe beim Scrollen, rendert jedoch mehr Elemente außerhalb des Bildschirms.
::

### Mit responsiven Lanes

Sie können die Kompositionsmaterialien [`useWindowSize`](https://vueuse.org/core/useWindowSize/)(für containerbasierte) verwenden, um die `lanes`](https://vueuse.org/core/useElementSize/)(für containerbasierte) zu machen.

::component-example
---
Einsturz: wahr
Übertreibungen: wahr
Beschreibung: scroll-area-responsive-lanes-example
Klasse: '! p-0'
---
::

### Mit externem Scroll-Element: badge{label="4.10+" class="align-text-top"}

Übergeben Sie eine `getScrollElement`-Funktion in der `virtualize` prop, um gegen einen Vorgänger-Scroll-Container anstelle des eigenen Viewports der Komponente zu virtualisieren. Setzen Sie `scrollMargin` auf den Offset der Liste vom Start des Scroll-Elements (z. B. die Höhe des Inhalts darüber).

::component-example
---
Schöner: wahr
Einsturz: wahr
Übertreibungen: wahr
Name: 'scroll-area-external-scroll-example'(scroll-Bereich-external-scroll-Beispiel)
Klasse: '! p-0'
Optionen:
  - name: Orientierung
    Labels: Orientierung
    Default: Vertikal
    Items:
      - vertikal
      @@ph068@@gmail.de
---
::

::note
Da der Container die Schriftrolle besitzt, scrollen die Schaltflächen "Suchen" und "Oben" der Symbolleiste direkt mit `container.scrollTo`.
::

::caution
Das `shadow` prop hat in diesem Modus keine Wirkung, da der Stamm nicht mehr die Rolle besitzt.
::

### Mit programmatischer Scroll

Sie können das exponierte `virtualizer` verwenden, um die Scrollposition programmgesteuert zu steuern.

::component-example
---
Einsturz: wahr
Übertreibungen: wahr
Name: 'scroll-area-scroll-to-example'(scroll-Bereich-scroll-zum-Beispiel)
Klasse: '! p-0'
---
::

### Mit unendlicher Bildlauf

Sie können das [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable verwenden, um mehr Daten zu laden, während der Benutzer scrollt.

::component-example
---
Schöner: wahr
Einsturz: wahr
Übertreibungen: wahr
Name: 'scroll-area-infinite-scroll-example'(scroll-Bereich-infinite-scroll-Beispiel)
Klasse: '! p-0'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `server: false` verwendet, um Daten auf dem Client abzurufen, ohne das anfängliche Rendern zu blockieren. Der Ladezustand überprüft sowohl `pending` als auch `idle` status, um eine Ladeanzeige vor und während des Abrufs anzuzeigen.
::

### Mit Default-Slot

Sie können den Standard-Slot ohne `items` prop verwenden, um benutzerdefinierte scrollbare Inhalte direkt zu rendern.

::component-example
---
Name: 'scroll-area-default-slot-example'(scroll-Bereich-Standard-Steckplatz-Beispiel)
Klasse: '! p-0'
---
::

@@@@@@85@@bpb

@@@@@@@@@@@@ph086@@props

Komponenten-Props

@@ph087@gmail.de

Die Komponenten-Slots

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Emits

Komponenten emittieren

@@ph089@@untenstehenbleiben

Sie können auf die typisierte Komponenteninstanz zugreifen, indem Sie [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const scrollArea = useTemplateRef('scrollArea')

// Scroll to a specific item
function scrollToItem(index: number) {
  scrollArea.value?.virtualizer?.scrollToIndex(index, { align: 'center' })
}
</script>

<template>
  <UScrollArea ref="scrollArea" :items="items" virtualize />
</template>
```

Dies gibt Ihnen Zugang zu den folgenden:

| Vorname| Typ| Description|
| ---- | ---- | ----------- |
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##################################################################################################################|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@################################################################################################################################|Die Wurzel der Komponente.|
| {lang="ts-type"}|{lang="ts-type"}| Die [TanStack Virtual](https://tanstack.com/virtual/latest/docs/api/virtualizer) virtualizer-Instanz (`undefined` wenn die Virtualisierung deaktiviert ist).|

@@ph122@@gmail.de

Das Komponenten-Theme

@@ph123@@changelog @ changelog

Das Component-Changelog
