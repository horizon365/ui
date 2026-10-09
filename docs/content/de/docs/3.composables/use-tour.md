---
title: Benutzt
description: 'Ein Kompositionsgerät zum Erstellen von geführten Touren, indem ein einzelner Popover über Stufen hinweg neu verankert wird.'
---

## Bearbeiten

Verwenden Sie das automatisch importierte `useTour` composable, um eine geführte Tour mit einem einzelnen [Popover](/docs/components/popover) durchzuführen, dessen Anker sich zwischen den Schritten bewegt. Das composable besitzt den Schrittstatus und löst den `target` jedes Schritts in einen `reference` auf, den Sie an `<UPopover>` binden, während Sie die volle Kontrolle über den Inhalt und die Navigation behalten.

::component-example
---
collapse: true
name: 'use-tour-example'
---
::

Jeder Schritt erfordert ein `target`, an das der Popover ankettet. Es akzeptiert einen CSS-Selektor, ein Element, ein virtuelles Element (alles mit `getBoundingClientRect`) oder einen Verweis/Getter, der eines dieser Elemente zurückgibt. Übergeben Sie `null`, um den Schritt in der Mitte des Viewports zu verankern. Jedes andere Feld in einem Schritt (`title`, `body`, `side`,...) wird unberührt und über `current` verfügbar übergeben.

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

- Built auf der reaktiven `reference`-Prop des Popovers, so dass der Popover reibungslos neu positioniert wird, wenn sich der aktive Schritt ändert.
- Das aktive Ziel wird automatisch in die Ansicht gescrollt, wenn ein Schritt aktiv wird.
- Da Sie den Inhalt selbst rendern, müssen Sie kein zusätzliches Thema oder Gebietsschema verwalten.

## API (englisch)

`useTour(steps, options?)`{lang="ts-type"} nicht

### Parameters Bearbeiten

::field-group

  ::field{name="steps" type="MaybeRefOrGetter<TourStep[]>" required}
  Die Liste der Tour-Schritte. Kann ein statisches Array, ein `ref` oder ein Getter für reaktive Schritte sein

    ::collapsible

      ::field-group
        ::field{name="target" type="MaybeRefOrGetter<string | ReferenceElement | null | undefined>"}
        Akzeptiert einen CSS-Selektor (`'#id'`, `'.class'` oder eine nackte ID, die als `#id` aufgelöst wurde), ein Element, ein virtuelles Element oder einen Verweis/Getter, der eins zurückgibt. Verwenden Sie `null`, um den Schritt im Viewport zu zentrieren
        ::

        ::field{name="[key: string]" type="any"}
        Alle zusätzlichen Felder (`title`, `body`, `side`,...) werden durchgereicht und sind über `current` verfügbar.
        ::
      ::
    ::
  ::

  ::field{name="options" type="UseTourOptions"}
  Konfigurationsmöglichkeiten für die Tour.

    ::collapsible

      ::field-group
        ::field{name="initialStep" type="number" default="0"}
        Der Stufenindex, mit dem die Tour beginnt.
        ::

        ::field{name="loop" type="boolean" default="false"}
        Zurück zum ersten Schritt nach dem letzten.
        ::

        ::field{name="scrollIntoView" type="boolean | ScrollIntoViewOptions" default="true"}
        Scrollen Sie das Ziel in die Ansicht, wenn ein Schritt aktiv wird.
        ::
      ::
    ::
  ::
::

### return

::field-group

  ::field{name="open" type="Ref<boolean>"}
  Die Tour ist derzeit geöffnet.
  ::

  ::field{name="index" type="Ref<number>"}
  Der aktuelle Stufenindex, geklemmt an den Schrittbereich.
  ::

  ::field{name="current" type="ComputedRef<TourStep | undefined>"}
  Das aktuelle step-Objekt oder `undefined`, wenn keine steps vorhanden sind.
  ::

  ::field{name="reference" type="ComputedRef<ReferenceElement | undefined>"}
  Der aufgelöste Anker für den aktuellen Schritt wird an `<UPopover :reference>` übergeben.
  ::

  ::field{name="total" type="ComputedRef<number>"}
  Die Gesamtzahl der Schritte.
  ::

  ::field{name="hasNext" type="ComputedRef<boolean>"}
  Ob es einen nächsten Schritt gibt.
  ::

  ::field{name="hasPrev" type="ComputedRef<boolean>"}
  Ob ein vorheriger Schritt existiert.
  ::

  ::field{name="start" type="(index?: number) => void"}
  Öffnen Sie die Tour, optional bei einem bestimmten Index.
  ::

  ::field{name="next" type="() => void"}
  Gehen Sie zum nächsten Schritt. Schleift oder endet am Ende, abhängig von der `loop`-Option.
  ::

  ::field{name="prev" type="() => void"}
  Gehen Sie zum vorherigen Schritt.
  ::

  ::field{name="goTo" type="(index: number) => void"}
  Springen Sie zu einem bestimmten Schritt und öffnen Sie die Tour.
  ::

  ::field{name="finish" type="() => void"}
  Schließen Sie die Tour.
  ::
::
