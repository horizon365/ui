---
title: UseScrollShadow Bearbeiten
description: 'Ein Composable, um Scroll-Schatteneffekte auf jedes scrollbare Element anzuwenden.'
---

@@@ph000@Verwendung

Verwenden Sie das automatisch importierte `useScrollShadow` composable, um Fade-Schatten an den Rändern eines scrollbaren Elements anzuwenden, um anzuzeigen, dass mehr Inhalt in der Scrollrichtung verfügbar ist.

::component-example
---
Name: 'use-scroll-shadow-example'(use-scroll-shadow-Beispiel)
---
::

- Verwendet CSS `mask-image`, um Inhalte an den Rändern zu verblassen, anstatt Elemente zu überlagern, so dass es auf jedem Hintergrund funktioniert.
- erkennt automatisch, ob das Element überläuft, und wendet nur Schatten an, wenn es nötig ist.
- Unterstützt sowohl vertikale als auch horizontale Orientierungen.

@@006@btw

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0008

@@ph009@@Parameter Bearbeiten

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
        Die Scrollrichtung, um Schatten anzuwenden.
        ::
      ::
    ::
  ::
::

@@1010 @ zurück

::field-group

  ::field{name="style" type="ComputedRef<CSSProperties | undefined>"}
  Ein reaktives Style-Objekt zum Binden an das scrollbare Element mit `:style`. Enthält `maskImage`, wenn Schatten aktiv sind,`undefined` ansonsten.
  ::

  ::field{name="isOverflowing" type="ComputedRef<boolean>"}
  Ob der Inhalt des Elements seinen sichtbaren Bereich überläuft.
  ::

  ::field{name="arrivedState" type="{ top: boolean, bottom: boolean, left: boolean, right: boolean }"}
  [`useScroll`](https://vueuse.org/core/useScroll/).
  ::
::

@@ph019@@Beispiele

@@ph020@@Horizontal

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
