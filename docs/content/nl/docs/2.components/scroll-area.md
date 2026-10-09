---
title: ScrollArea
description: Een flexibele scroll container met virtualisatie ondersteuning.
category: data
keywords:
  - scrollbar
  - overflow
  - scrolling
links:
  - label: TanStack Virtueel
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/virtual/latest
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ScrollArea.vue
---

## Gebruik

De ScrollArea-component maakt schuifbare containers met optionele virtualisatie voor grote lijsten.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-example'
class: '!p-0'
---
::

### Items

Gebruik de `items`-prop als een array en rendeer elk item met behulp van de standaardsleuf:

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-items-example'
class: '!p-0'
---
::

::tip{to="#with-default-slot"}
U kunt ook de standaardsleuf gebruiken zonder de `items`-prop om aangepaste schuifbare inhoud rechtstreeks weer te geven.
::

### Oriëntatie

Gebruik de `orientation` prop om de schuifrichting te wijzigen. Standaard is `vertical`.

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

### Virtualiseren

Gebruik de `virtualize`-prop om alleen de items weer te geven die momenteel in beeld zijn, wat de prestaties aanzienlijk verbetert bij het werken met grote datasets.

::note
Wanneer virtualisatie **enabled** is, past u de spatiëring aan via de `virtualize` prop-opties zoals `gap`, `paddingStart` en `paddingEnd`.
Gebruik anders de `ui` prop om klassen zoals `gap p-4` toe te passen op de `viewport`-sleuf.
::

::tip
Als al uw items de **same height** hebben, stel dan `skipMeasurement` in op `true` in de `virtualize` prop om de DOM-meting per item over te slaan en vertrouw in plaats daarvan op `estimateSize`.
Dit verbetert de prestaties voor grote uniforme lijsten aanzienlijk.
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

### Schaduw: badge{label="4.9+" class="align-text-top"}

Gebruik de `shadow`-prop om vervagende schaduwen op de schuifbare randen weer te geven, wat aangeeft dat er meer inhoud beschikbaar is in de schuifrichting.
De fade volgt automatisch de `orientation` en verschijnt alleen wanneer de inhoud overloopt.

::component-example
---
collapse: true
name: 'scroll-area-shadow-example'
---
::

::tip
Geef een object door aan de `shadow` prop om de fade size te configureren, bijv. `:shadow="{ size: 48 }"`.
::

## Voorbeelden

### As metselwerk indeling

Gebruik de `virtualize`-prop met de opties `lanes`, `gap` en `estimateSize` om metselwerklay-outs in Pinterest-stijl te maken met items met variabele hoogte.

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
Voor optimale prestaties, zet `estimateSize` dicht bij uw gemiddelde itemhoogte. Het verhogen van `overscan` verbetert de soepelheid van het scrollen, maar geeft meer items buiten het scherm weer.
::

### Met responsieve rijstroken

U kunt de [`useWindowSize`](https://vueuse.org/core/useWindowSize/) (voor viewport-gebaseerde) of [`useElementSize`](https://vueuse.org/core/useElementSize/) (voor container-gebaseerde) composables gebruiken om de `lanes` reactief te maken.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-responsive-lanes-example'
class: '!p-0'
---
::

### Met extern scroll element: badge{label="4.10+" class="align-text-top"}

Geef een `getScrollElement`-functie door in de `virtualize`-prop om te virtualiseren tegen een voorouderscrollcontainer in plaats van de eigen viewport van de component.
Stel `scrollMargin` in op de offset van de lijst vanaf het begin van het scroll-element (bijv. de hoogte van de inhoud erboven).

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
Omdat de container eigenaar is van de scroll, scrollen de zoek- en "Top" -knoppen van de werkbalk deze rechtstreeks met `container.scrollTo`.
::

::caution
De `shadow` prop heeft geen effect in deze modus, omdat de root niet langer de scroll bezit. Pas in plaats daarvan je eigen fade toe op de scroll-container.
::

### Met programmatic scroll

U kunt de blootgestelde `virtualizer` gebruiken om de scrollpositie programmatisch te regelen.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-scroll-to-example'
class: '!p-0'
---
::

### Met oneindig scrollen

U kunt de [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) composable gebruiken om meer gegevens te laden terwijl de gebruiker scrolt.

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
Dit voorbeeld gebruikt `useLazyFetch` met `server: false` om gegevens over de client op te halen zonder de initiële weergave te blokkeren.
De laadstatus controleert op zowel de `pending`- als de `idle`-status om een laadindicator voor en tijdens het ophalen weer te geven. Extra pagina 's worden geladen terwijl de gebruiker scrolt.
::

### Met standaard slot

U kunt de standaardsleuf zonder de `items`-prop gebruiken om aangepaste schuifbare inhoud rechtstreeks weer te geven.

::component-example
---
name: 'scroll-area-default-slot-example'
class: '!p-0'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

U hebt toegang tot de getypte componentinstantie met [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

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

Dit geeft u toegang tot het volgende:

| Naam | Type | Omschrijving |
| ---- | ---- | ----------- |
| `$el`{lang="ts-type"} | `HTMLElement`{lang="ts-type"} | Het wortelelement van de component. |
| `virtualizer`{lang="ts-type"} | `Ref<Virtualizer> \| undefined`{lang="ts-type"} | De [TanStack Virtual](https://tanstack.com/virtual/latest/docs/api/virtualizer) virtualizer-instantie (`undefined` als virtualisatie is uitgeschakeld). |

## Thema

:component-theme

## Changelog

:component-changelog
