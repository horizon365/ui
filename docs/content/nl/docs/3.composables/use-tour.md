---
title: gebruikTour
description: 'Een compositie om rondleidingen te bouwen door een enkele Popover over trappen opnieuw te verankeren.'
---

## Gebruik

Gebruik de automatisch geïmporteerde `useTour`-composable om een rondleiding te rijden met een enkele [Popover](/docs/components/popover) waarvan het anker tussen stappen beweegt.
De composable bezit de stappenstatus en zet de `target` van elke stap om in een `reference` die je aan `<UPopover>` bindt, terwijl je volledige controle houdt over de inhoud en navigatie.

::component-example
---
collapse: true
name: 'use-tour-example'
---
::

Elke stap vereist een `target` waaraan de popover verankert.
Het accepteert een CSS-selector, een element, een virtueel element (alles met `getBoundingClientRect`) of een ref / getter die een van die retourneert.
Passeer `null` om de trede naar het midden van de viewport te verankeren.
Elk ander veld op een trede (`title`, `body`, `side`,...) wordt onaangeroerd doorgelaten en is beschikbaar via `current`.

```vue
<script setup lang="ts">
const card = useTemplateRef('card')

const tour = useTour([
  { target: '#cta', title: 'Get started' },
  { target: () => card.value, title: 'Profile', side: 'right' },
  { target: null, title: 'All set' }
])
</script>

<template>
  <UButton @click="tour.start()">Start tour</UButton>

  <UPopover :open="tour.open.value" :reference="tour.reference.value" :dismissible="false">
    <template #content>
      <!-- your content + buttons -->
      <UButton :disabled="!tour.hasPrev.value" @click="tour.prev()">Back</UButton>
      <UButton @click="tour.next()">{{ tour.hasNext.value ? 'Next' : 'Finish' }}</UButton>
    </template>
  </UPopover>
</template>
```

- Gebouwd op de reactieve `reference`-prop van de Popover, zodat de popover soepel wordt verplaatst wanneer de actieve stap verandert.
- Het actieve doel wordt automatisch in beeld gescrold wanneer een stap actief wordt.
- Aangezien u de inhoud zelf rendert, is er geen extra thema of landinstelling om te onderhouden.

## API

`useTour(steps, options?)`{lang="ts-type"}

### Parameters

::field-group

  ::field{name="steps" type="MaybeRefOrGetter<TourStep[]>" required}
De lijst met tourstappen. Kan een statische array zijn, een `ref` of een getter voor reactieve stappen.

    ::collapsible

      ::field-group
        ::field{name="target" type="MaybeRefOrGetter<string | ReferenceElement | null | undefined>"}
Het element waaraan de stap verankert.
Accepteert een CSS-selector (`'#id'`, `'.class'` of een kale id opgelost als `#id`), een element, een virtueel element of een ref / getter die er een retourneert.
Gebruik `null` om de stap in de viewport te centreren.
        ::

        ::field{name="[key: string]" type="any"}
Eventuele aanvullende velden (`title`, `body`, `side`,...) worden doorgelaten en zijn beschikbaar via `current`.
        ::
      ::
    ::
  ::

  ::field{name="options" type="UseTourOptions"}
Configuratie opties voor de tour.

    ::collapsible

      ::field-group
        ::field{name="initialStep" type="number" default="0"}
De stappenindex waarop de tour begint.
        ::

        ::field{name="loop" type="boolean" default="false"}
Loop terug naar de eerste stap na de laatste.
        ::

        ::field{name="scrollIntoView" type="boolean | ScrollIntoViewOptions" default="true"}
Blader het doel in beeld wanneer een stap actief wordt.
        ::
      ::
    ::
  ::
::

### Retourneren

::field-group

  ::field{name="open" type="Ref<boolean>"}
Of de tour momenteel open is.
  ::

  ::field{name="index" type="Ref<number>"}
De huidige stapindex, vastgeklemd aan het stappenbereik.
  ::

  ::field{name="current" type="ComputedRef<TourStep | undefined>"}
Het huidige stappenobject, of `undefined` wanneer er geen stappen zijn.
  ::

  ::field{name="reference" type="ComputedRef<ReferenceElement | undefined>"}
Het opgeloste anker voor de huidige stap, door te geven aan `<UPopover :reference>`.
  ::

  ::field{name="total" type="ComputedRef<number>"}
Het totaal aantal stappen.
  ::

  ::field{name="hasNext" type="ComputedRef<boolean>"}
Of er een volgende stap bestaat.
  ::

  ::field{name="hasPrev" type="ComputedRef<boolean>"}
Of een vorige stap bestaat.
  ::

  ::field{name="start" type="(index?: number) => void"}
Open de tour, optioneel bij een bepaalde index.
  ::

  ::field{name="next" type="() => void"}
Ga naar de volgende stap. Loops of afwerkingen aan het einde afhankelijk van de `loop` optie.
  ::

  ::field{name="prev" type="() => void"}
Ga naar de vorige stap.
  ::

  ::field{name="goTo" type="(index: number) => void"}
Spring naar een specifieke stap en open de tour.
  ::

  ::field{name="finish" type="() => void"}
Sluit de rondleiding.
  ::
::
