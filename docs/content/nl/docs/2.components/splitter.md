---
description: Een set aanpasbare panelen gescheiden door versleepbare handvatten.
category: layout
links:
  - label: Splitter
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/splitter
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Splitter.vue
navigation.badge: New
---

## Gebruik

Gebruik de Splitter-component om een lijst met aanpasbare panelen weer te geven, gescheiden door versleepbare handvatten.

::component-example
---
collapse: true
name: 'splitter-example'
---
::

::note
De splitter vult de hoogte van zijn container, dus zorg ervoor dat een bovenliggend element er een definieert.
::

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- `defaultSize?: number`{lang="ts-type"}
- `minSize?: number`{lang="ts-type"}
- `maxSize?: number`{lang="ts-type"}
- `collapsible?: boolean`{lang="ts-type"}
- `collapsedSize?: number`{lang="ts-type"}
- `sizeUnit?: '%' | 'px'`{lang="ts-type"}
- `order?: number`{lang="ts-type"}
- `id?: string`{lang="ts-type"}
- `slot?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { panel?: ClassNameValue }`{lang="ts-type"}

Gebruik de `slot` toets om de inhoud van een paneel te vullen en de `class` toets om het te stylen. Items zonder `slot` toets vallen terug naar een `panel-{index}` slot.
Maten zijn standaard percentages, zet `sizeUnit: 'px'` op een item voor pixelwaarden.

::caution
Stel bij rendering op de server de `id` prop in en geef `defaultSize` aan alle items of aan none.
Ids worden anders automatisch gegenereerd en de server en de client kunnen het oneens zijn, wat de lay-out bij hydratatie verbreekt.
Een item zonder een `defaultSize` valt terug naar een gelijk aandeel op de server, dus door de twee te mengen, springen panelen zodra ze gehydrateerd zijn.
Pixelgroottes worden gemeten op de client en verschuiven altijd een beetje.
::

::component-code
---
collapse: true
class: 'h-96'
prettier: true
ignore:
  - items
  - id
external:
  - items
externalTypes:
  - SplitterItem[]
props:
  id: 'splitter-items'
  items:
    - slot: 'sidebar'
      minSize: 15
      maxSize: 40
      defaultSize: 25
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot: 'main'
      defaultSize: 75
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
slots:
  sidebar: Sidebar
  main: Main
---

#sidebar
Zijbalk

#main
Belangrijkste
::

### Oriëntatie

Gebruik de `orientation` prop om de richting van de splitter te veranderen. Standaard `horizontal`.

::component-code
---
collapse: true
class: 'h-96'
prettier: true
ignore:
  - items
  - id
external:
  - items
externalTypes:
  - SplitterItem[]
props:
  id: 'splitter-orientation'
  orientation: 'vertical'
  items:
    - slot: 'first'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot: 'second'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
slots:
  first: First
  second: Second
---

#first
Eerste

#second
Tweede
::

## Voorbeelden

### Met inklapbaar paneel

Stel `collapsible: true` in op een item om het voorbij zijn `minSize` te laten inklappen en gebruik `collapsedSize` om een deel van het paneel zichtbaar te houden wanneer het is ingeklapt.
De paneelsleuf belicht `collapsed`, `collapse` en `expand` zodat u deze programmatisch kunt bedienen, en de gebeurtenissen `collapse`, `expand` en `resize` worden geactiveerd met de paneelindex.

::component-example
---
collapse: true
name: 'splitter-collapsible-example'
---
::

### Met geneste splitters

Nest een `Splitter` in een paneel om tweedimensionale lay-outs in IDE-stijl te bouwen.

::component-example
---
collapse: true
name: 'splitter-nested-example'
---
::

### Met aangepaste handvat

Het handvat is standaard onzichtbaar.
Gebruik de `ui` prop om het te restylen, bijvoorbeeld als een zichtbare verdeler voor verzonken lay-outs, en de `resize-handle`-sleuf om inhoud erin weer te geven als een grip.

::component-example
---
collapse: true
name: 'splitter-custom-handle-example'
---
::

### Met volharding

Geef een `auto-save-id` om de lay-out te behouden tot `localStorage` en deze te herstellen bij herladen.

```vue
<template>
  <USplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </USplitter>
</template>
```

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
