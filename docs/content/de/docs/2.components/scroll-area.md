---
title: Scrollarea
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

## Bearbeiten

Die ScrollArea-Komponente erstellt scrollbare Container mit optionaler Virtualisierung für große Listen.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-example'
class: '!p-0'
---
::

### Einträge

Verwenden Sie die `items`-Prop als Array und rendern Sie jedes Element mit dem Standard-Slot:

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-items-example'
class: '!p-0'
---
::

::tip{to="#with-default-slot"}
Sie können den Standard-Slot auch ohne die `items`-Prop verwenden, um benutzerdefinierte scrollbare Inhalte direkt zu rendern.
::

### Ausrichtung

Verwenden Sie die `orientation`-prop, um die Scrollrichtung zu ändern. Standardmäßig ist `vertical`.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-orientation-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: horizontal
    items:
      - vertical
      - horizontal
---
::

### Virtualize Bearbeiten

Verwenden Sie die `virtualize`-Prop, um nur die aktuell angezeigten Elemente zu rendern, wodurch die Leistung bei der Arbeit mit großen Datensätzen erheblich gesteigert wird.

::note
Wenn die Virtualisierung **enabled** ist, passen Sie den Abstand über die `virtualize`-Prop-Optionen wie `gap`, `paddingStart` und `paddingEnd` an.
::

::tip
Wenn alle Ihre Elemente die **same height** haben, setzen Sie `skipMeasurement` auf `true` in der `virtualize`-Prop, um die DOM-Messung pro Element zu überspringen und sich stattdessen auf `estimateSize` zu verlassen.
::

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-virtualize-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
---
::

### Shadow: badge{label="4.9+" class="align-text-top"} (englisch).

Verwenden Sie die `shadow` prop, um Fade-Schatten an den scrollbaren Kanten anzuzeigen, was darauf hinweist, dass mehr Inhalt in der Scroll-Richtung verfügbar ist. Die Fade folgt automatisch der `orientation` und erscheint nur, wenn der Inhalt überläuft.

::component-example
---
collapse: true
name: 'scroll-area-shadow-example'
---
::

::tip
Übergeben Sie ein Objekt an die `shadow`-Prop, um die Fade-Größe zu konfigurieren, z. B. `:shadow="{ size: 48 }"`.
::

## Examples [Bearbeiten]

### As Maurer-Layout

Verwenden Sie die `virtualize`-Stütze mit den Optionen `lanes`, `gap` und `estimateSize`, um Pinterest-Stil-Mauerwerkslayouts mit Elementen mit variabler Höhe zu erstellen.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-masonry-layout-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
  - name: lanes
    type: number
    label: lanes
    default: 3
  - name: gap
    type: number
    label: gap
    default: 16
---
::

::tip
Für eine optimale Leistung stellen Sie `estimateSize` nahe an Ihre durchschnittliche Artikelhöhe. `overscan` zu erhöhen verbessert die Laufruhe beim Scrollen, rendert aber mehr Elemente außerhalb des Bildschirms.
::

### With responsive lanes (Antwortspuren)

Sie können die [`useWindowSize`](https://vueuse.org/core/useWindowSize/) (für Viewport-basierte) oder [`useElementSize`](https://vueuse.org/core/useElementSize/xph12x (für Container-basierte) Composites verwenden, um die `lanes` reaktiv zu machen.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-responsive-lanes-example'
class: '!p-0'
---
::

### Mit externem Scroll-Element: badge{label="4.10+" class="align-text-top"}

Übergeben Sie eine `getScrollElement`-Funktion in der `virtualize`-Prop, um gegen einen Vorgänger-Scroll-Container anstelle des eigenen Viewports der Komponente zu virtualisieren. Setzen Sie `scrollMargin` auf den Offset der Liste vom Start des Scroll-Elements (z. B. die Höhe des Inhalts darüber).

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'scroll-area-external-scroll-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
---
::

::note
Da der Container die Schriftrolle besitzt, scrollen die Schaltflächen "Suchen" und "Top" der Symbolleiste direkt mit `container.scrollTo`.
::

::caution
Die `shadow`-Prop hat in diesem Modus keine Wirkung, da der Root nicht mehr den Scroll besitzt.
::

### Mit Programmatic Scroll

Sie können die exponierte `virtualizer` verwenden, um die Bildlaufposition programmgesteuert zu steuern.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-scroll-to-example'
class: '!p-0'
---
::

### Mit unendlichem Scrollen

Sie können das Composable [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) verwenden, um mehr Daten zu laden, während der Benutzer scrollt.

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'scroll-area-infinite-scroll-example'
class: '!p-0'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `server: false` verwendet, um Daten auf dem Client abzurufen, ohne das anfängliche Rendern zu blockieren. Der Ladezustand überprüft sowohl den `pending`-als auch den `idle`-Status, um eine Ladeanzeige vor und während des Abrufs anzuzeigen. Zusätzliche Seiten werden geladen, wenn der Benutzer scrollt.
::

### Mit Default Slot

Sie können den Standard-Slot ohne die `items`-Prop verwenden, um benutzerdefinierte scrollbare Inhalte direkt zu rendern.

::component-example
---
name: 'scroll-area-default-slot-example'
class: '!p-0'
---
::

## API (englisch)

### Props Bearbeiten

:component-props

### Slots (englisch)

:component-slots

### Emits (englisch)

:component-emits

### Expose (englisch)

Sie können auf die typisierte Komponenteninstanz mit [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) zugreifen.

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
| `$el`{lang="ts-type"} (nicht)| `HTMLElement`{lang="ts-type"} (nicht)| Die Wurzel der Komponente.|
| `virtualizer`{lang="ts-type"} nicht| `Ref<Virtualizer> \| undefined`{lang="ts-type"} (nicht)| Die Virtualizer-Instanz [TanStack Virtual](https://tanstack.com/virtual/latest/docs/api/virtualizer) (`undefined`, wenn die Virtualisierung deaktiviert ist).|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
