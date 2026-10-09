---
description: Een carrousel met beweging en veeg gebouwd met Embla.
category: data
keywords:
  - swiper
  - gallery
  - image slider
  - slideshow
links:
  - label: Embla
    to: https://www.embla-carousel.com/docs/v8/api
    icon: i-custom-embla-carousel
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Carousel.vue
---

## Gebruik

Gebruik de carrouselcomponent om een lijst met items in een carrousel weer te geven.

::component-example
---
collapse: true
overflowHidden: true
name: 'carousel-example'
class: '!p-0'
---
::

::note
Gebruik uw muis om de carrousel horizontaal op het bureaublad te slepen.
::

### Items

Gebruik de `items`-prop als een array en rendeer elk item met behulp van de standaardsleuf:

::component-example
---
name: 'carousel-items-example'
class: 'p-8'
---
::

U kunt ook een reeks objecten doorgeven met de volgende eigenschappen:

- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue }`{lang="ts-type"}

U kunt bepalen hoeveel items zichtbaar zijn met behulp van de [`basis`](https://tailwindcss.com/docs/flex-basis) / [`width`](https://tailwindcss.com/docs/width) utility-klassen op de `item`:

::component-example
---
name: 'carousel-items-multiple-example'
class: 'p-8 px-16'
---
::

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van de Progress te wijzigen. Standaard is `horizontal`.

::note
Gebruik uw muis om de carrousel verticaal op het bureaublad te slepen.
::

::component-example
---
name: 'carousel-orientation-example'
class: 'p-8'
---
::

::caution
U moet een `height` specificeren op de container in verticale richting.
::

### Pijlen

Gebruik de `arrows` prop om vorige en volgende knoppen weer te geven.

::component-example
---
name: 'carousel-arrows-example'
class: 'p-8'
---
::

### Vorige / Volgende

Gebruik de `prev` en `next` rekwisieten om de vorige en volgende knoppen aan te passen met [Button](/docs/components/button) rekwisieten.

::component-example
---
name: 'carousel-prev-next-example'
class: 'p-8'
---
::

### Vorige / Volgende pictogrammen

Gebruik de `prev-icon` en `next-icon` rekwisieten om de knoppen aan te passen [Icon](/docs/components/icon). Standaard `i-lucide-arrow-left` / `i-lucide-arrow-right`.

::component-example
---
name: 'carousel-prev-next-icon-example'
class: 'p-8'
options:
  - name: 'prevIcon'
    label: 'prevIcon'
    default: 'i-lucide-chevron-left'
  - name: 'nextIcon'
    label: 'nextIcon'
    default: 'i-lucide-chevron-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt deze pictogrammen globaal aanpassen in uw `app.config.ts` onder de sleutel `ui.icons.arrowLeft` / `ui.icons.arrowRight`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt deze pictogrammen globaal aanpassen in uw `vite.config.ts` onder de sleutel `ui.icons.arrowLeft` / `ui.icons.arrowRight`.
:::
::

### Dots

Gebruik de `dots` prop om een lijst met punten weer te geven om naar een specifieke dia te scrollen.

::component-example
---
name: 'carousel-dots-example'
class: 'p-8 pb-12'
---
::

Het aantal punten is gebaseerd op het aantal dia 's dat in de weergave wordt weergegeven:

::component-example
---
name: 'carousel-dots-multiple-example'
class: 'p-8 px-16 pb-12'
---
::

## Insteekfilters

De carrouselcomponent implementeert de officiële [Embla-carrousel plugins](https://www.embla-carousel.com/docs/v8/plugins).

### Autoplay

Deze plug-in wordt gebruikt om Embla Carousel uit te breiden met **autoplay** functionaliteit.

Gebruik de `autoplay` prop als een boolean of een object om de [Autoplay plugin](https://www.embla-carousel.com/docs/v8/plugins/autoplay) te configureren.

::component-example
---
name: 'carousel-autoplay-example'
class: 'p-8 px-16 pb-12'
---
::

::note
In dit voorbeeld gebruiken we de `loop` prop voor een oneindige carrousel.
::

### Automatisch scrollen

Deze plugin wordt gebruikt om Embla Carousel uit te breiden met **auto scroll** functionaliteit.

Gebruik de `auto-scroll` prop als een boolean of een object om de [Auto Scroll plugin](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll) te configureren.

::component-example
---
name: 'carousel-auto-scroll-example'
class: 'p-8 px-16 pb-12'
---
::

::note
In dit voorbeeld gebruiken we de `loop` prop voor een oneindige carrousel.
::

### Auto Hoogte

Deze plug-in wordt gebruikt om Embla Carousel uit te breiden met **auto height**-functionaliteit. Het verandert de hoogte van de carrouselcontainer om de hoogte van de hoogste dia in zicht te passen.

Gebruik de `auto-height` prop als boolean of als object om de [Auto Height plugin](https://www.embla-carousel.com/docs/v8/plugins/auto-height) te configureren.

::component-example
---
name: 'carousel-auto-height-example'
class: 'p-8 pt-16'
---
::

::note
In dit voorbeeld voegen we de klasse `transition-[height]` toe aan de container om de hoogteverandering te animeren.
::

### Class namen

Class Names is een **class naam toggle** utility plugin voor Embla Carousel waarmee u het wisselen van klassenamen in uw carrousel kunt automatiseren.

Gebruik de `class-names` prop als een boolean of een object om de [Class-namen plugin](https://www.embla-carousel.com/docs/v8/plugins/class-names) te configureren.

::component-example
---
name: 'carousel-class-names-example'
class: 'p-8'
---
::

::note
In dit voorbeeld voegen we de `transition-opacity [&:not(.is-snapped)]:opacity-10`-klassen toe aan de `item` om de ondoorzichtigheidsverandering te animeren.
::

### Vervagen

Deze plug-in wordt gebruikt om de Embla Carousel-scrollfunctionaliteit te vervangen door **fade transitions**.

Gebruik de `fade` prop als een boolean of een object om de [Fade plugin](https://www.embla-carousel.com/docs/v8/plugins/fade) te configureren.

::component-example
---
name: 'carousel-fade-example'
class: 'p-8 pb-12'
---
::

### Wheel Gebaren

Deze plugin wordt gebruikt om Embla Carousel uit te breiden met de mogelijkheid om **gebruik de muis / trackpad wheel** om de carrousel te navigeren.

Gebruik de `wheel-gestures` prop als boolean of als object om de [Wheel Gestures plugin](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures) te configureren.

::note
Gebruik je muiswiel om door de carrousel te bladeren.
::

::component-example
---
name: 'carousel-wheel-gestures-example'
class: 'p-8 px-16'
---
::

## Voorbeelden

### Met miniaturen

U kunt de [`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto) methode op [`emblaApi`](#expose) gebruiken om miniaturen onder de carrousel weer te geven die naar een specifieke dia navigeren.

::component-example
---
name: 'carousel-thumbnails-example'
class: 'p-8 px-16'
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
const carousel = useTemplateRef('carousel')
</script>

<template>
  <UCarousel ref="carousel" />
</template>
```

Dit geeft u toegang tot het volgende:

| Naam | Type |
| ---- | ---- |
| `emblaRef`{lang="ts-type"} | `Ref<HTMLElement \| null>`{lang="ts-type"} |
| `emblaApi`{lang="ts-type"} | [`Ref<EmblaCarouselType \| null>`{lang="ts-type"}](https://www.embla-carousel.com/docs/v8/api/methods#typescript) |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
