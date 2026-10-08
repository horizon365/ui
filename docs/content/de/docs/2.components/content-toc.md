---
title: Zufrieden
description: 'Ein klebriges Inhaltsverzeichnis mit automatischer Hervorhebung aktiver Ankerlinks.'
category: content
framework: nuxt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentToc.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Diese Komponente ist nur verfügbar, wenn das `@nuxt/content`-Modul installiert ist.
::

@@ph001@@Nutzung

Verwenden Sie die `links` prop mit der `page?.body?.toc?.links`{lang="ts-type"}, die Sie beim Abrufen einer Seite erhalten.

::component-example
---
Name: 'content-toc-example'(Beispiel)
Props:
  Klasse: "W-voll"
---
::

@@ph005@title

Verwenden Sie die `title` prop, um den Titel des Inhaltsverzeichnisses zu ändern.

::component-code{prefix="content"}
---
Schöner: wahr
Einsturz: wahr
Hide:
  @@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@c
Ignoriert:
  @@@008@08@08@08@08@08@08@08@08@08@08@08@08@@08@@008@@008@008@@00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Außen:
  @@@009@link.de
Externe Typen:
  - ContentTocLink []
Props:
  Titel: "Auf dieser Seite"
  Klasse: "W-voll"
  Linke:
  - id: Verwendung
    Tiefe: zwei
    Text: Benutzung
    Kinder:
    @@ph012@@id: Titel
      Tiefe: 3
      Text: Überschrift
    @@ph013@id: Farbe
      Tiefe: 3
      Text: Farben
    - id: Hervorhebung
      Tiefe: 3
      Vorschau: Highlight
    - id:'highlight-color'(Hervorhebung durch die Farbe)
      Tiefe: 3
      Text: Farbe hervorheben
    - id:'Highlight-Variante'
      Tiefe: 3
      Text: Hervorhebung Variant
---
::

@@@@@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17@17

Verwenden Sie die `color` prop, um die Farbe der Links zu ändern.

::component-code{prefix="content"}
---
Schöner: wahr
Einsturz: wahr
Hide:
  @@ph019@class
Ignoriert:
  @@@@@2019 @ links
Außen:
  @@@@@@@21@@links
Externe Typen:
  - ContentTocLink [Bearbeiten | Quelltext bearbeiten]
Props:
  Farbe: "neutral"
  Klasse: "W-voll"
  Linke:
    - id: Verwendung
      Tiefe: zwei
      Text: Benutzung
      Kinder:
        @@ph024@id: Überschrift
          Tiefe: 3
          Text: Überschrift
        @@ph025@id: Farbe
          Tiefe: 3
          Text: Farben
        - id: Hervorhebung
          Tiefe: 3
          Text: Highlight
        - id:'highlight-color'(Hervorhebung durch die Farbe)
          Tiefe: 3
          Text: Farbe hervorheben
        - id:'Highlight-Variante'
          Tiefe: 3
          Text: Hervorhebung Variant
---
::

@@ph029@@highlight@@@@ph029@@@@highlight@@@@@ph029@@@highlight@@@highlight

Verwenden Sie `highlight` prop, um einen hervorgehobenen Rahmen für das aktive Element anzuzeigen.

::component-code{prefix="content"}
---
Schöner: wahr
Einsturz: wahr
Hide:
  @@31@Klasse
Ignoriert:
  @@@@@@@32@@links
Außen:
  @@@@@@@333 @ Links
Externe Typen:
  @@ph034@contenttoclink [Bearbeiten | Quelltext bearbeiten]
Props:
  Highlight: Wahr
  Klasse: "W-voll"
  Linke:
    - id: Verwendung
      Tiefe: 2
      Text: Benutzung
      Kinder:
        @@ph036@@id: Titel
          Tiefe: 3
          Text: Titel
        @@ph037@id: Farbe
          Tiefe: 3
          Text: Farbe
        - id: Hervorhebung
          Tiefe: 3
          Text: Highlight
        - id:'highlight-color'(Hervorhebung durch die Farbe)
          Tiefe: 3
          Text: Farbe hervorheben
        - id:'Highlight-Variante'
          Tiefe: 3
          Beschreibung: Highlight Variant
---
::

### Highlight Farbe

Verwenden Sie `highlight-color` prop, um die Farbe des Hervorhebens zu ändern.

::component-code{prefix="content"}
---
Schöner: wahr
Einsturz: wahr
Hide:
  @@@@@444@Klasse
Ignoriert:
  @@@@@45@links
  @@ph046@@highlight@@@ph046@@@highlight@@@@ph046@@@highlight@@@highlight.de
Außen:
  @@@@@@47@@links
Externe Typen:
  - ContentTocLink []
Props:
  Highlight: Wahr
  highlightFarbe: 'neutral'
  Klasse: "W-voll"
  Links auf:
    - id: Verwendung
      Tiefe: zwei
      Text: Benutzung
      Kinder:
        @@ph050@id: Titel
          Tiefe: 3
          Text: Titel
        @@ph051@id: Farbe
          Tiefe: 3
          Text: Farbe
        - id: Hervorhebung
          Tiefe: 3
          Text: Highlight
        - id:'highlight-color'(Hervorhebung durch die Farbe)
          Tiefe: 3
          Text: Farbe hervorheben
        - id:'Highlight-Variante'
          Tiefe: 3
          Text: Hervorhebung Variant
---
::

### Highlight Variante: badge{label="4.6+" class="align-text-top"}

Verwenden Sie `highlight-variant` prop, um den Stil der Hervorhebung zu ändern. Standardmäßig zu `straight`.

::component-code{prefix="content"}
---
Schöner: wahr
Einsturz: wahr
Hide:
  @@599@Klasse
Ignoriert:
  @@@@@@60@@links
  - highlight@@@ph061@@@highlight@@@ph061@@@@highlight@@@highlight.de
Außen:
  @@@@@@@@@62@@links
Externe Personen:
  - ContentTocLink [Bearbeiten | Quelltext bearbeiten]
Props:
  Highlight: Wahr
  highlightFarbe: 'primär'
  highlightVariante: 'Schaltung'
  Klasse: "W-voll"
  Linke:
    - id: Verwendung
      Tiefe: 2
      Text: Benutzung
      Kinder:
        @@ph065@@id: Titel
          Tiefe: 3
          Text: Titel
        - id: Farbe
          Tiefe: 3
          Text: Farben
        - id: Hervorhebung
          Tiefe: 3
          Text: Highlight
        - id:'highlight-color'(Hervorhebung durch die Farbe)
          Tiefe: 3
          Text: Farbe hervorheben
        - id:'Highlight-Variante'
          Tiefe: 3
          Text: Hervorhebung Variant
    - id: Beispiele
      Tiefe: 2
      Text: Beispiele
      Kinder:
        - id: auf einer Seite
          Tiefe: 3
          Text: innerhalb einer Seite
    @@ph072@@id: api
      Tiefe: 2
      Bezeichnung: API
      Kinder:
        @@ph073@@id: props (auf Englisch)
          Tiefe: 3
          Bezeichnung: Props
        - id: Plätze
          Tiefe: 3
          Übersicht: Slots
        - id: gibt aus
          Tiefe: 3
          Markiert: Emits
    - id: Thema
      Tiefe: 2
      Text: Thema
---
::

## Beispiele

### Innerhalb einer Seite

Verwenden Sie die ContentToc-Komponente in einer Seite, um das Inhaltsverzeichnis anzuzeigen:

```vue [pages/\[...slug\\].vue]{22-24}
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('docs').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UPage v-if="page">
    <UPageHeader :title="page.title" />

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" />

      <USeparator v-if="surround?.filter(Boolean).length" />

      <UContentSurround :surround="(surround as any)" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :links="page.body.toc.links" />
    </template>
  </UPage>
</template>
```

@@107@bpb

@@@@@@@@@@@@@@@ph108@@props

Komponenten-Props

### Spielautomaten

Die Komponenten-Slots

### Emits

Komponenten emittieren

@@111@1111@11111@111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111@@@@@@@@@

Das Komponenten-Theme

## Changelog @@ Changelog @@ Changelog

: component-changelog {prefix="content"}
