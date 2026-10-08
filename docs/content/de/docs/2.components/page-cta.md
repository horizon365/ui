---
title: Seite CTA
description: 'Ein Call-to-Action-Abschnitt, der auf Ihren Seiten angezeigt werden soll.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCTA.vue
---

@@@ph000@Verwendung

Die PageCTA-Komponente bietet eine flexible Möglichkeit, einen Aufruf zum Handeln in Ihren Seiten mit einer Illustration im Standard-Slot anzuzeigen.

::code-preview

::u-page-c-t-a
---
Titel: "Vertraut und unterstützt von unserer erstaunlichen Community"
description: 'Vorschau des neuesten Tailwind CSS und erste Schritte mit Nuxt UI.'
Ausrichtung: horizontal
Links auf:
  - label:'Mach den Anfang'
    Farbe: "neutral"
  - label:'Mehr erfahren'
    Farbe: "neutral"
    Variante: „ subtil "
    trailingIcon: 'i-lucide-arrow-right'(englisch)
---

: img@@ph003
::

::

Verwenden Sie es in einer [PageSection](/docs/components/page-section) Komponente oder direkt auf Ihrer Seite:

```vue {4,8-10}
<template>
  <UPageHero />

  <UPageCTA class="rounded-none" />

  <UPageSection />

  <UPageSection :ui="{ container: 'px-0' }">
    <UPageCTA class="rounded-none sm:rounded-xl" />
  </UPageSection>

  <UPageSection />
</template>
```

::tip
Verwenden Sie `px-0` und `rounded-none` classes, damit der CTA den Rand der Seite auf dem Handy ausfüllt.
::

@@ph025@title

Verwenden Sie `title` prop, um den Titel des CTA zu setzen.

::component-code{slug="page-CTA"}
---
Props:
  Titel: "Vertraut und unterstützt von unserer erstaunlichen Community"
---
::

@@ph027@@Beschreibung

Verwenden Sie die `description` prop, um die Beschreibung des CTA festzulegen.

::component-code{slug="page-CTA"}
---
Schöner: wahr
Ignoriert:
  @@ph029@title
Props:
  Titel: "Vertraut und unterstützt von unserer erstaunlichen Community"
  Beschreibung: "Wir haben eine starke, dauerhafte Partnerschaft aufgebaut. Ihr Vertrauen ist unsere treibende Kraft und treibt uns zum gemeinsamen Erfolg an."
---
::

@@@300@link30

Verwenden Sie `links` prop, um eine Liste von [Button](/docs/components/button) unter der Beschreibung anzuzeigen.

::component-code{slug="page-CTA"}
---
Schöner: wahr
Außen:
  @@@@@36@@links
Externe Personen:
  @@ph037@buttonprops [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@@@@@38@title
  @@ph039 @ Beschreibung
  @@@@@40@@links
Props:
  Titel: "Vertraut und unterstützt von unserer erstaunlichen Community"
  Beschreibung: "Wir haben eine starke, dauerhafte Partnerschaft aufgebaut. Ihr Vertrauen ist unsere treibende Kraft und treibt uns zum gemeinsamen Erfolg an."
  Linke:
    - label:'Fangen Sie an'
      Farbe: „ neutral "
    - label:'Mehr erfahren'
      Farbe: "neutral"
      Variante: "Unterwürfig"
      trailingIcon: 'i-lucide-arrow-right'(englisch)
---
::

@@ph043@@Variantentyp

Verwenden Sie die `variant` prop, um den Stil des CTA zu ändern.

::component-code{slug="page-CTA"}
---
Schöner: wahr
Außen:
  @@@@@45@links
Externe Personen:
  @@ph046@buttonprops [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@ph047@title
  @@ph048@beschreibung
  @@@@@49@@links
Props:
  Titel: "Vertraut und unterstützt von unserer erstaunlichen Community"
  Beschreibung: "Wir haben eine starke, dauerhafte Partnerschaft aufgebaut. Ihr Vertrauen ist unsere treibende Kraft und treibt uns zum gemeinsamen Erfolg an."
  Variante: weich
  Links auf:
    - label:'Fangen Sie an'
      Farbe: "neutral"
    - label:'Mehr erfahren'
      Farbe: "neutral"
      Variante: "Unterwürfig"
      trailingIcon: 'i-lucide-arrow-right'(englisch)
---
::

::tip
Sie können die Klasse `light` oder `dark` auf den Slot `links` anwenden, wenn Sie die Variante `solid` verwenden, um die Farben umzukehren.
::

@@ph056@Orientierung

Verwenden Sie die `orientation` prop, um die Ausrichtung mit dem Standardslot zu ändern.

::component-code{slug="page-CTA"}
---
Schöner: wahr
Außen:
  @@@@59@@@links
Externe Typen:
  @@ph060@@buttonprops [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@ph061@@title
  @@ph062@beschreibung
  @@@@@@@63@@links
Props:
  Titel: "Vertraut und unterstützt von unserer erstaunlichen Community"
  Beschreibung: "Wir haben eine starke, dauerhafte Partnerschaft aufgebaut. Ihr Vertrauen ist unsere treibende Kraft und treibt uns zum gemeinsamen Erfolg an."
  Ausrichtung: horizontal
  Links auf:
    - label:'Mach den Anfang'
      Farbe: „ neutral "
    - label:'Mehr erfahren'
      Farbe: "neutral"
      Variante: "Unterwürfig"
      trailingIcon: 'i-lucide-arrow-right'(englisch)
Die Slots:
  Default:|

    @@@@@@@66 @
---

: img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

@@ph068@umgekehrt.de

Verwenden Sie `reverse` prop, um die Ausrichtung des Standard-Steckplatzes umzukehren.

::component-code{slug="page-CTA"}
---
Schöner: wahr
Außen:
  @@@@@@@70@@links
Externe Typen:
  @@@buttonprops [Bearbeiten | Quelltext bearbeiten]
Ignoriert:
  @@ph072@@title
  @@ph073@beschreibung
  @@@@@@@@@@@@@@@@Links
Props:
  Titel: "Vertraut und unterstützt von unserer erstaunlichen Community"
  Beschreibung: "Wir haben eine starke, dauerhafte Partnerschaft aufgebaut. Ihr Vertrauen ist unsere treibende Kraft und treibt uns zum gemeinsamen Erfolg an."
  Ausrichtung: horizontal
  umgekehrt: wahr
  Linke:
    - label:'Fangen Sie an'
      Farbe: „ neutral "
    - label:'Mehr erfahren'
      Farbe: "neutral"
      Variante: "Unterwürfig"
      trailingIcon: 'i-lucide-arrow-right'(englisch)
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
---

: img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@api

@@@@@@@@@@@ph080@@@props

{slug="page-CTA"}

@@ph082@@slots

: component-slots {slug="page-CTA"}

@@@@@@@@@@@ph084@@theme

: component-theme {slug="page-CTA"}

@@ph086@@changelog @@changelog

Das Component-Changelog
