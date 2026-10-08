---
description: Ein Karussell mit Bewegung und Swipe, das mit Embla erstellt wurde.
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

@@@ph000@@Verwendung

Verwenden Sie die Karussell-Komponente, um eine Liste von Elementen in einem Karussell anzuzeigen.

::component-example
---
Einsturz: wahr
Übertreibungen: true
Name: "Karussell-Beispiel"
Klasse: '! p-0'
---
::

::note
Verwenden Sie Ihre Maus, um das Karussell horizontal auf den Desktop zu ziehen.
::

@@ph001@gmail.de

Verwenden Sie `items` prop als Array und rendern Sie jedes Element mit dem Standard-Slot:

::component-example
---
Name: 'Karussell-Artikel-Beispiel'
Klasse: 'P-8'
---
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

`class?: any`PH0004@@@@@@@@@@@PH0005 @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0007@@@@@@@@@@@PH0008@@@@@PH0008@@@@@@PH00008 @

Sie können steuern, wie viele Elemente sichtbar sind, indem Sie die [`basis`](https://tailwindcss.com/docs/flex-basis)/[`width`](https://tailwindcss.com/docs/width) Utility-Klassen auf der `item`:

::component-example
---
Name: 'Karussell-Artikel-Mehrfach-Beispiel'
Klasse: 'p-8 px-16'(Englisch)
---
::

@@ph020@@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung des Progress. Defaults auf `horizontal` zu ändern.

::note
Verwenden Sie Ihre Maus, um das Karussell vertikal auf den Desktop zu ziehen.
::

::component-example
---
Name: 'Karussell-Orientierungs-Beispiel'
Klasse: 'P-8'
---
::

::caution
Sie müssen ein `height` auf dem Container in vertikaler Ausrichtung angeben.
::

@@ph024@Pfeiltasten

Verwenden Sie `arrows` prop, um die Schaltflächen prev und next anzuzeigen.

::component-example
---
Name: 'Karussell-Pfeile-Beispiel'
Klasse: 'P-8'
---
::

### Prev/Nächste

Verwenden Sie die Props `prev` und `next`, um die Prev-und Next-Buttons mit beliebigen Props [Button](/docs/components/button) anzupassen.

::component-example
---
Name: 'carousel-prev-next-example'(carousel-prev-next-beispiel)
Klasse: 'P-8'
---
::

### Prev/Nächste Icons

Verwenden Sie die Props `prev-icon` und `next-icon`, um die Schaltflächen [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-arrow-left`/`i-lucide-arrow-right`.

::component-example
---
Name: 'carousel-prev-next-icon-example'(carousel-prev-next-icon-Beispiel)
Klasse: 'P-8'
optionen:
  - name:'prevIcon'(Vorschau-Icon)
    Bezeichnung: "prevIcon"
    Standardeinstellung: 'i-lucide-chevron-left'
  - name:'nextIcon'(auf Englisch)
    Bezeichnung: nextIcon
    Voreinstellung: 'i-lucide-chevron-right'
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können diese Symbole global in Ihrem `app.config.ts` unter `ui.icons.arrowLeft`/`ui.icons.arrowRight` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können diese Symbole global in Ihrem `vite.config.ts` unter `ui.icons.arrowLeft`/`ui.icons.arrowRight` key anpassen.
:::
::

@@5000@5000@5000@500@500@500@@500@500@@5000@@5000@@5000@@5000@@50000@@5000@50000@50000@5000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Verwenden Sie `dots` prop, um eine Liste von Punkten anzuzeigen, um zu einer bestimmten Folie zu scrollen.

::component-example
---
Name: 'Karussell-Punkte-Beispiel'
Klasse: 'p-8 pb-12'(englisch)
---
::

Die Anzahl der Punkte basiert auf der Anzahl der Folien, die in der Ansicht angezeigt werden:

::component-example
---
Name: 'Karussell-Punkte-Mehrfach-Beispiel'
Klasse: 'p-8 px-16 pb-12'(englisch)
---
::

@@ph052@@plugins (nicht vorhanden)

Die Karussell-Komponente implementiert die offiziellen [Embla Carousel Plugins](https://www.embla-carousel.com/docs/v8/plugins).

### Autoplay (nicht vorhanden)

Dieses Plugin wird verwendet, um Embla Carousel mit **autoplay** Funktionalität zu erweitern.

Verwenden Sie `autoplay` prop als Boolean oder als Objekt, um das [Autoplay-Plugin](https://www.embla-carousel.com/docs/v8/plugins/autoplay) zu konfigurieren.

::component-example
---
Bezeichnung: 'carousel-autoplay-example'
Klasse: 'p-8 px-16 pb-12'(englisch)
---
::

::note
In diesem Beispiel verwenden wir die `loop` prop für ein unendliches Karussell.
::

### Auto-Scroll

Dieses Plugin wird verwendet, um Embla Carousel mit **auto-scroll** Funktionalität zu erweitern.

Verwenden Sie `auto-scroll` prop als Boolean oder als Objekt, um das [Auto Scroll-Plugin ](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll) zu konfigurieren.

::component-example
---
Name: 'carousel-auto-scroll-example'(carousel-auto-scroll-Beispiel)
Klasse: 'p-8 px-16 pb-12'(englisch)
---
::

::note
In diesem Beispiel verwenden wir die `loop` prop für ein unendliches Karussell.
::

### Auto-Höhe

Dieses Plugin wird verwendet, um Embla Carousel mit **auto height** functionality. It ändert die Höhe des Karussellcontainers an die Höhe der höchsten Folie in der Ansicht anzupassen.

Verwenden Sie `auto-height` prop als Boolean oder als Objekt, um das [Auto Height-Plugin](https://www.embla-carousel.com/docs/v8/plugins/auto-height) zu konfigurieren.

::component-example
---
Name: 'carousel-auto-height-example'(Karussell-Auto-Höhen-Beispiel)
Klasse: 'p-8 pt-16'(Englisch)
---
::

::note
In diesem Beispiel fügen wir dem Container die `transition-[height]`-Klasse hinzu, um die Höhenänderung zu animieren.
::

@@@ph084@@@classnames

Class Names ist ein **classname toggle** Utility-Plugin für Embla Carousel, mit dem Sie das Umschalten von Klassennamen auf Ihrem Karussell automatisieren können.

Verwenden Sie `class-names` prop als Boolean oder als Objekt, um das Plugin[Klassennamens-Plugin ](https://www.embla-carousel.com/docs/v8/plugins/class-names) zu konfigurieren.

::component-example
---
name: 'carousel-class-name-example'(Beispiel für eine Klasse)
Klasse: 'P-8'
---
::

::note
In diesem Beispiel fügen wir die `transition-opacity [&:not(.is-snapped)]:opacity-10`-Klassen auf der `item`-Klasse hinzu, um die Deckkraftänderung zu animieren.
::

### Fade

Dieses Plugin wird verwendet, um die Embla Carousel Scroll-Funktionalität durch **fade transitions** zu ersetzen.

Verwenden Sie `fade` prop als Boolean oder als Objekt, um das [Fade-Plugin](https://www.embla-carousel.com/docs/v8/plugins/fade) zu konfigurieren.

::component-example
---
Name: "Karussell-Fade-Beispiel"
Klasse: 'p-8 pb-12'(Englisch)
---
::

### Radbewegungen

Dieses Plugin wird verwendet, um Embla Carousel mit der Möglichkeit zu erweitern,**use the mouse/trackpad wheel ** um das Karussell zu navigieren.

Verwenden Sie `wheel-gestures` prop als Boolean oder als Objekt, um das [Wheel Gestures plugin](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures) zu konfigurieren.

::note
Verwenden Sie Ihre Maus Rad, um das Karussell zu scrollen.
::

::component-example
---
Name: 'Karussell-Rad-Gesten-Beispiel'
Klasse: 'p-8 px-16'(Englisch)
---
::

## Beispiele

@@@PH11@@Mit Thumbnails

Sie können die Methode [`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto) verwenden, um Miniaturansichten unter dem Karussell anzuzeigen, die zu einer bestimmten Folie navigieren.

::component-example
---
Name: 'Karussell-Thumbnails-Beispiel'
Klasse: 'p-8 px-16'(englisch)
---
::

@@122@bm2

@@@@@@@@ph123@props

Komponenten-Props

### Spielautomaten

Die Komponenten-Slots

@@ph125@@emits

Komponenten emittieren

### Aufdecken

Sie können auf die typisierte Komponenteninstanz zugreifen, indem Sie [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

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
| {lang="ts-type"}|{lang="ts-type"}|
| {lang="ts-type"}| {lang="ts-type"}](https://www.embla-carousel.com/docs/v8/api/methods#typescript)|

@@ph153@gmail.de | weiter

Das Komponenten-Theme

@@ph154@@changelog @@ changelog

Das Component-Changelog
