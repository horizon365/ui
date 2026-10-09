---
title: UseScrollShadow Bearbeiten
description: 'Ein Composable, um Scroll-Schatteneffekte auf jedes scrollbare Element anzuwenden.'
---

## Bearbeiten

Verwenden Sie das automatisch importierte `useScrollShadow`-Composable, um Fade-Schatten an den Rändern eines scrollbaren Elements anzuwenden, um anzuzeigen, dass mehr Inhalt in der Scrollrichtung verfügbar ist.

::component-example
---
name: 'use-scroll-shadow-example'
---
::

- Verwendet CSS `mask-image`, um Inhalte an den Rändern anstelle von Overlay-Elementen zu verblassen, sodass es auf jedem Hintergrund funktioniert.
- Erkennt automatisch, ob das Element überläuft und wendet Schatten nur bei Bedarf an.
- Unterstützt sowohl vertikale als auch horizontale Ausrichtungen.

## API (Englisch)

`useScrollShadow(element, options?)`{lang="ts-type"} (nicht)

### Parameters (englisch)

::field-group

  ::field{name="element" type="MaybeRef<HTMLElement | null | undefined>" required}
  Eine Template-Referenz oder ein reaktiver Verweis auf das scrollbare Element.
  ::

  ::field{name="options" type="UseScrollShadowOptions"}
  Konfigurationsoptionen für den Scrollschatten.

    ::collapsible

      ::field-group
        ::field{name="size" type="MaybeRefOrGetter<number>" default="24"}
        Die Größe des Schattens in Pixel.
        ::

        ::field{name="orientation" type="MaybeRefOrGetter<'vertical' | 'horizontal'>" default="'vertical'"}
        Die Scroll-Richtung, um Schatten anzuwenden.
        ::
      ::
    ::
  ::
::

### Return zurück

::field-group

  ::field{name="style" type="ComputedRef<CSSProperties | undefined>"}
  Ein reaktives Style-Objekt, das mit `:style` an das scrollbare Element gebunden werden soll. Enthält `maskImage`, wenn Schatten aktiv sind, ansonsten `undefined`.
  ::

  ::field{name="isOverflowing" type="ComputedRef<boolean>"}
  Ob der Inhalt des Elements den sichtbaren Bereich überläuft.
  ::

  ::field{name="arrivedState" type="{ top: boolean, bottom: boolean, left: boolean, right: boolean }"}
  Reaktiver Scroll-Ankunftsstatus von [`useScroll`](https://vueuse.org/core/useScroll/).
  ::
::

## Examples (Beispiele)

### Horizontal

Verwenden Sie die `orientation`-Option für horizontal scrollbare Container:

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

### Custom Größe

Verwenden Sie die Option `size`, um die Schattengröße in Pixeln zu ändern:

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
