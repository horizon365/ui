---
title: Benutzt
description: 'Ein Kompositionsgerät zum Erstellen von geführten Touren, indem ein einzelner Popover über Stufen hinweg neu verankert wird.'
---

@@@ph000@Verwendung

Verwenden Sie das automatisch importierte `useTour` composable, um eine geführte Tour mit einem einzigen [Popover](/docs/components/popover) zu fahren, dessen Anker sich zwischen den Schritten bewegt. Dabei behalten Sie die volle Kontrolle über den Inhalt und die Navigation.

::component-example
---
Einsturz: wahr
Name: 'use-tour-example'(Beispiel für eine Tour)
---
::

Jeder Schritt erfordert ein `target`, an das das Popover ankettet. Es akzeptiert einen CSS-Selektor, ein Element, ein virtuelles Element (alles mit `getBoundingClientRect`) oder einem ref/getter, der eines dieser Felder zurückgibt. Pass `null`, um den Schritt in der Mitte des Ansichtsfensters zu verankern.(`title`,`body`,`side`,...) wird unangetastet durchgereicht und ist über `current` verfügbar.

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

- Built auf dem reaktiven `reference` prop des Popovers, so dass sich das Popover reibungslos neu positioniert, wenn sich der aktive Schritt ändert.
- Das aktive Ziel wird automatisch in die Ansicht gescrollt, wenn ein Schritt aktiv wird.
- Da Sie den Inhalt selbst rendern, müssen Sie kein zusätzliches Thema oder Gebietsschema pflegen.

## api

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

### Parameter Bearbeiten

::field-group

  ::field{name="steps" type="MaybeRefOrGetter<TourStep[]>" required}
  Kann ein statisches Array, ein `ref`, oder ein Getter für reaktive Schritte sein.

    ::collapsible

      ::field-group
        ::field{name="target" type="MaybeRefOrGetter<string | ReferenceElement | null | undefined>"}
        Akzeptiert einen CSS-Selektor (`'#id'`,`'.class'` oder eine nackte ID, die als `#id` aufgelöst wurde), ein Element, ein virtuelles Element oder einen Verweis/Getter, der einen zurückgibt. Verwenden Sie `null`, um den Schritt im Ansichtsfenster zu zentrieren.
        ::

        ::field{name="[key: string]" type="any"}
        Alle zusätzlichen Felder (`title`,`body`,`side`,...) werden durchgereicht und sind über `current` verfügbar.
        ::
      ::
    ::
  ::

  ::field{name="options" type="UseTourOptions"}
  Konfigurationsmöglichkeiten für die Tour.

    ::collapsible

      ::field-group
        ::field{name="initialStep" type="number" default="0"}
        Der Stufenindex, auf dem die Tour beginnt.
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

@@@@@56@zurück

::field-group

  ::field{name="open" type="Ref<boolean>"}
  Die Tour ist derzeit geöffnet.
  ::

  ::field{name="index" type="Ref<number>"}
  Der aktuelle Stufenindex, geklemmt an den Schrittbereich.
  ::

  ::field{name="current" type="ComputedRef<TourStep | undefined>"}
  Das aktuelle Step-Objekt oder `undefined`, wenn keine Steps vorhanden sind.
  ::

  ::field{name="reference" type="ComputedRef<ReferenceElement | undefined>"}
  Der aufgelöste Anker für den aktuellen Schritt wird an `<UPopover :reference>` übergeben.
  ::

  ::field{name="total" type="ComputedRef<number>"}
  Gesamtzahl der Schritte.
  ::

  ::field{name="hasNext" type="ComputedRef<boolean>"}
  Ob es einen nächsten Schritt gibt.
  ::

  ::field{name="hasPrev" type="ComputedRef<boolean>"}
  Ob ein vorheriger Schritt existiert.
  ::

  ::field{name="start" type="(index?: number) => void"}
  Öffnen Sie die Tour, optional mit einem bestimmten Index.
  ::

  ::field{name="next" type="() => void"}
  Gehen Sie zum nächsten Schritt. Schleifen oder endet am Ende, abhängig von der `loop`-Option.
  ::

  ::field{name="prev" type="() => void"}
  Gehen Sie zum vorherigen Schritt.
  ::

  ::field{name="goTo" type="(index: number) => void"}
  Springe zu einem bestimmten Schritt und öffne die Tour.
  ::

  ::field{name="finish" type="() => void"}
  Schließen Sie die Tour.
  ::
::
