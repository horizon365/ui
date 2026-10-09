---
description: Ein Karussell mit Bewegung und Swipe, das mit Embla gebaut wurde.
category: data
keywords:
  - swiper
  - gallery
  - image slider
  - slideshow
links:
  - label: Die Embla
    to: https://www.embla-carousel.com/docs/v8/api
    icon: i-custom-embla-carousel
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Carousel.vue
---

## Bearbeiten

Verwenden Sie die Karussell-Komponente, um eine Liste von Elementen in einem Karussell anzuzeigen.

::component-example
---
collapse: true
overflowHidden: true
name: 'carousel-example'
class: '!p-0'
---
::

::note
Verwenden Sie Ihre Maus, um das Karussell horizontal auf dem Desktop zu ziehen.
::

### Einträge

Verwenden Sie die `items` prop als Array und rendern Sie jedes Element mit dem Standard-Slot:

::component-example
---
name: 'carousel-items-example'
class: 'p-8'
---
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

- `class?: any`{lang="ts-type"} (englisch)
- `ui?: { item?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

Sie können steuern, wie viele Elemente sichtbar sind, indem Sie die Hilfsklassen [`basis`](https://tailwindcss.com/docs/flex-basis)/[`width`](https://tailwindcss.com/docs/width) auf den `item` verwenden:

::component-example
---
name: 'carousel-items-multiple-example'
class: 'p-8 px-16'
---
::

### Ausrichtung

Verwenden Sie die `orientation`-Prop, um die Ausrichtung des Progress. Defaults auf `horizontal` zu ändern.

::note
Verwenden Sie Ihre Maus, um das Karussell vertikal auf den Desktop zu ziehen.
::

::component-example
---
name: 'carousel-orientation-example'
class: 'p-8'
---
::

::caution
Sie müssen einen `height` auf dem Container in vertikaler Ausrichtung angeben.
::

### Arrows Bearbeiten

Verwenden Sie die `arrows`-Prop, um die Tasten prev und next anzuzeigen.

::component-example
---
name: 'carousel-arrows-example'
class: 'p-8'
---
::

### Prev/Next (Deutsche Übersetzung)

Verwenden Sie die `prev` und `next` props, um die prev und next Tasten mit beliebigen [Button](/docs/components/button) props anzupassen.

::component-example
---
name: 'carousel-prev-next-example'
class: 'p-8'
---
::

### Prev/Next Icons (Deutsche Ausgabe)

Verwenden Sie die Props `prev-icon` und `next-icon`, um die Schaltflächen [Icon](/docs/components/icon) anzupassen.

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
Sie können diese Symbole global in Ihrem `app.config.ts` unter der Taste `ui.icons.arrowLeft`/`ui.icons.arrowRight` anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können diese Symbole global in Ihrem `vite.config.ts` unter `ui.icons.arrowLeft`/`ui.icons.arrowRight` Schlüssel anpassen.
:::
::

### Dots Bearbeiten

Verwenden Sie die `dots`-Prop, um eine Liste von Punkten anzuzeigen, um zu einer bestimmten Folie zu scrollen.

::component-example
---
name: 'carousel-dots-example'
class: 'p-8 pb-12'
---
::

Die Anzahl der Punkte basiert auf der Anzahl der Folien, die in der Ansicht angezeigt werden:

::component-example
---
name: 'carousel-dots-multiple-example'
class: 'p-8 px-16 pb-12'
---
::

## Plug-Ins für

Die Carousel Komponente implementiert die offiziellen [Embla Carousel Plugins](https://www.embla-carousel.com/docs/v8/plugins).

### Autoplay (nicht)

Dieses Plugin wird verwendet, um Embla Carousel mit der **autoplay**-Funktionalität zu erweitern.

Verwenden Sie die `autoplay`-Prop als Boolean oder Objekt, um das [Autoplay-Plugin](https://www.embla-carousel.com/docs/v8/plugins/autoplay) zu konfigurieren.

::component-example
---
name: 'carousel-autoplay-example'
class: 'p-8 px-16 pb-12'
---
::

::note
In diesem Beispiel verwenden wir die `loop` prop für ein unendliches Karussell.
::

### Auto Scroll (englisch)

Dieses Plugin wird verwendet, um Embla Carousel mit **auto scroll** Funktionalität zu erweitern.

Verwenden Sie die `auto-scroll`-Prop als Boolean oder Objekt, um das [Auto Scroll-Plugin](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll) zu konfigurieren.

::component-example
---
name: 'carousel-auto-scroll-example'
class: 'p-8 px-16 pb-12'
---
::

::note
In diesem Beispiel verwenden wir die `loop` prop für ein unendliches Karussell.
::

### Auto Height (englisch)

Dieses Plugin wird verwendet, um Embla Carousel mit **auto height** Funktionalität zu erweitern. Es ändert die Höhe des Karussellcontainers, um die Höhe der höchsten Folie in der Ansicht zu passen.

Verwenden Sie die `auto-height`-Prop als Boolean oder Objekt, um das [Auto Height-Plugin](https://www.embla-carousel.com/docs/v8/plugins/auto-height) zu konfigurieren.

::component-example
---
name: 'carousel-auto-height-example'
class: 'p-8 pt-16'
---
::

::note
In diesem Beispiel fügen wir dem Container die Klasse `transition-[height]` hinzu, um die Höhenänderung zu animieren.
::

### Class-Namen

Class Names ist ein **class name toggle** utility plugin für Embla Carousel, mit dem Sie das Umschalten von Klassennamen auf Ihrem Karussell automatisieren können.

Verwenden Sie die `class-names`-Prop als Boolean oder als Objekt, um das [Class-Names-Plugin](https://www.embla-carousel.com/docs/v8/plugins/class-names) zu konfigurieren.

::component-example
---
name: 'carousel-class-names-example'
class: 'p-8'
---
::

::note
In diesem Beispiel fügen wir die `transition-opacity [&:not(.is-snapped)]:opacity-10`-Klassen auf der `item` hinzu, um die Deckkraftänderung zu animieren.
::

### Fade (englisch)

Dieses Plugin wird verwendet, um die Embla Carousel Scroll-Funktion durch **fade transitions** zu ersetzen.

Verwenden Sie die `fade`-Prop als Boolean oder Objekt, um das [Fade-Plugin](https://www.embla-carousel.com/docs/v8/plugins/fade) zu konfigurieren.

::component-example
---
name: 'carousel-fade-example'
class: 'p-8 pb-12'
---
::

### Wheel Gestures Bearbeiten

Dieses Plugin wird verwendet, um Embla Carousel mit der Fähigkeit zu erweitern, **use die Maus/Trackpad wheel**, um das Karussell zu navigieren.

Verwenden Sie die `wheel-gestures`-Prop als Boolean oder Objekt, um das [Wheel Gestures plugin](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures) zu konfigurieren.

::note
Verwenden Sie Ihre Maus Rad, um das Karussell zu scrollen.
::

::component-example
---
name: 'carousel-wheel-gestures-example'
class: 'p-8 px-16'
---
::

## Beispiele

### With Thumbnails (Deutsche Ausgabe)

Sie können die [`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto)-Methode auf [`emblaApi`](#expose) verwenden, um Karussell unter den Miniaturansichten anzuzeigen, die zu einer bestimmten Folie navigieren.

::component-example
---
name: 'carousel-thumbnails-example'
class: 'p-8 px-16'
---
::

## API

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

### Expose (englisch)

Sie können auf die typisierte Komponenteninstanz mit [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) zugreifen.

```vue
<script setup lang="ts">
const carousel = useTemplateRef('carousel')
</script>

<template>
  <UCarousel ref="carousel" />
</template>
```

Dies gibt Ihnen Zugang zu den folgenden:

| Vorname| Typ|
| ---- | ---- |
| `emblaRef`{lang="ts-type"} (nicht)| `Ref<HTMLElement \| null>`{lang="ts-type"} Bearbeiten|
| `emblaApi`{lang="ts-type"} (englisch)| 218x`Ref<EmblaCarouselType \| null>`{lang="ts-type"}](https://www.embla-carousel.com/docs/v8/api/methods#typescript)|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
