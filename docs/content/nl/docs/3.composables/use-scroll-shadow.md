---
title: gebruikScrollShadow
description: 'Een compositie om scrollschaduweffecten toe te passen op elk schuifbaar element.'
---

## Gebruik

Gebruik de automatisch geïmporteerde `useScrollShadow`-composable om vervagende schaduwen toe te passen op de randen van een schuifbaar element, wat aangeeft dat er meer inhoud beschikbaar is in de schuifrichting.

::component-example
---
name: 'use-scroll-shadow-example'
---
::

- Gebruikt CSS `mask-image` om inhoud aan de randen te vervagen in plaats van overlay-elementen, zodat het op elke achtergrond werkt.
- Automatically detecteert of het element overloopt en past alleen schaduwen toe wanneer dat nodig is.
- Ondersteunt zowel verticale als horizontale oriëntaties.

## API

`useScrollShadow(element, options?)`{lang="ts-type"}

### Parameters

::field-group

  ::field{name="element" type="MaybeRef<HTMLElement | null | undefined>" required}
Een sjabloonref of reactieve verwijzing naar het schuifbare element.
  ::

  ::field{name="options" type="UseScrollShadowOptions"}
Configuratie opties voor de scroll schaduw.

    ::collapsible

      ::field-group
        ::field{name="size" type="MaybeRefOrGetter<number>" default="24"}
De schaduwgrootte in pixels.
        ::

        ::field{name="orientation" type="MaybeRefOrGetter<'vertical' | 'horizontal'>" default="'vertical'"}
De schuifrichting om schaduwen toe te passen.
        ::
      ::
    ::
  ::
::

### Retourneren

::field-group

  ::field{name="style" type="ComputedRef<CSSProperties | undefined>"}
Een reactief stijlobject om op het schuifbare element te binden met `:style`. Bevat `maskImage` wanneer schaduwen actief zijn, anders `undefined`.
  ::

  ::field{name="isOverflowing" type="ComputedRef<boolean>"}
Of de inhoud van het element het zichtbare gebied overstroomt.
  ::

  ::field{name="arrivedState" type="{ top: boolean, bottom: boolean, left: boolean, right: boolean }"}
Reactieve scroll-aankomststatus van [`useScroll`](https://vueuse.org/core/useScroll/).
  ::
::

## Voorbeelden

### Horizontaal

Gebruik de optie `orientation` voor horizontaal schuifbare containers:

```vue
<script setup lang="ts">
const el = useTemplateRef('el')

const { style } = useScrollShadow(el, { orientation: 'horizontal' })
</script>

<template>
  <div ref="el" class="overflow-x-auto whitespace-nowrap" :style="style">
    <!-- Horizontally scrollable content -->
  </div>
</template>
```

### Aangepaste grootte

Gebruik de optie `size` om de schaduwgrootte in pixels te wijzigen:

```vue
<script setup lang="ts">
const el = useTemplateRef('el')

const { style } = useScrollShadow(el, { size: 48 })
</script>

<template>
  <div ref="el" class="max-h-[300px] overflow-y-auto" :style="style">
    <!-- Scrollable content -->
  </div>
</template>
```
