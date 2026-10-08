---
title: Fortschrittsgruppe
description: Ein Fortschrittsbalken, der in mehrere Segmente unterteilt ist, die sich zu einer Gesamtsumme addieren.
category: element
navigation.badge: New
keywords:
  - meter
  - meter group
  - segmented progress
  - stacked bar
  - breakdown
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ProgressGroup.vue
---

@@@ph000@@Verwendung

Verwenden Sie die ProgressGroup-Komponente, um mehrere Werte als Segmente eines einzelnen Fortschrittsbalkens anzuzeigen.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@ph001@@gmail.de
  @@@@002@max
  @@003@Klasse
Außen:
  @@ph004@gmail.de
Externe Typen:
  - ProgressGroupItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Gesamt: 128
  Items:
    - label:'System'
      Wert: 24
      Farbe: "neutral"
      Icon: 'i-lucide-cog'(englisch)
    - label:'Apps'(auf Englisch)
      Wert: 8
      Farbe: „ Fehler "
      Icon: 'i-lucide-app-window'(i-lucide-app-Fenster)
    - label:'Dokumente'
      Wert: 12
      Farbe: "Warnung"
      Icon: 'i-lucide-Datei'
    - label:'Multimedia'(auf Englisch)
      Wert: 42
      Farbe: „ Erfolg "
      Bildnachweis: i-Lucide-Film
  Klasse: W-96
---
::

@@ph010@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

`label?: string``label?: string``label?: string`{lang="ts-type"}
`icon?: string``icon?: string``icon?: string`{lang="ts-type"}{lang="ts-type"}`icon?: string``icon?: string``icon?: string`
`value?: number``value?: number`PH02020
- PH0222{lang="ts-type"}](#with-custom-colors)
`slot?: string`PH03030
`class?: any`PH03333 @
`ui?: { segment?: ClassNameValue, indicator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingDot?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue }``ui?: { segment?: ClassNameValue, indicator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingDot?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue }``ui?: { segment?: ClassNameValue, indicator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingDot?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue }`{lang="ts-type"}{lang="ts-type"}

::component-code
---
Einsturz: wahr
Ignoriert:
  @@ph037@gmail.de
  @@@@@@38@38@38@38@38@38@38@38@38@38@38@38@38@38@38@38@@38@38@@38@38@@38@@38@@38@@38@@38@@38@@38@@38@@38@@38@@38@@38@@38@38@@38@@38@@@38@@@38@@@38@@@38@@@@@38@@@@@38@@@@@@@@@@@@@@@@@@38338@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@383338
Außen:
  @@ph039@gmail.de
Externe Typen:
  - ProgressGroupItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - label:'Berechnen'
      Wert: 42
      Farbe: "Primär"
    - label:'Lagerung'
      Wert: 18
      Farbe: "Info"
    - label:'Bandbreite'
      Wert: 9
      Farbe: "Warnung"
  Klasse: W-96
---
::

::note
Elemente ohne `icon` erhalten stattdessen einen farbigen Punkt in der Liste.
::

@@045@@Max

Verwenden Sie `max` prop, um den Wert aller Elemente auf. Defaults auf `100` zu setzen.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@ph048@gmail.de
  @@@@@@49@class
Außen:
  @@@ph050@gmail.de
Externe Typen:
  - ProgressGroupItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Gesamt: 512
  Items:
    - label:'Gebraucht'
      Wert: 128
      Farbe: "Primär"
    - label:'Reserviert'
      Wert: 64
      Farbe: "neutral"
  Klasse: W-96
---
::

::note
Die Werte werden zwischen `0` und `max` eingeklemmt, und Segmente, die sich zu mehr als `max` addieren, teilen sich die Spur proportional.
::

### Status

Verwenden Sie `status` prop, um den Summenwert über dem Balken anzuzeigen.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@ph059@gmail.de
  @@@@@@class060@@class060@class@class060@class@class060@class@class@class@class060@class@class@class@class@class@class060@class@class@class@class@class@class@class060@class@class@class@class@class@class@class@class@classclass@class@class@class@class@classclass@classclass@classclass@classclassclassclassclass@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@c@classclassclassclassc@classclassclassclassclassc@classclassclassclassc@classclassclassclass
Außen:
  - Artikel
Externe Typen:
  - ProgressGroupItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Status: wahr
  Gesamt: 128
  Items:
    - label:'System'
      Wert: 24
      Farbe: "neutral"
    - label:'Apps'(auf Englisch)
      Wert: 8
      Farbe: „ Fehler "
    - label:'Multimedia'(auf Englisch)
      Wert: 42
      Farbe: "Erfolg"
  Klasse: W-96
---
::

::tip
Verwenden Sie `:ui="{ status: 'w-full' }"`, um stattdessen die gesamte Breite zu überspannen.
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#######################################################################################################################################################################################

Verwenden Sie `color` prop, um die Farbe jedes Segments zu ändern, das keine eigene Farbe hat.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@ph069@gmail.de
  @@@@@@@class070@class@class070@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@classclassclass@classclassclass@class@class@class@classclassclassclassclassclass@classclass
Außen:
  - Artikel
Externe Typen:
  - ProgressGroupItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Farbe: neutral
  Items:
    - label:'Lesen'
      Wert: 42
    - label:'Schreiben'
      Wert: 18
  Klasse: W-96
---
::

::tip
Sowohl diese Requisite als auch die `color` jedes Elements akzeptieren jeden CSS-Farbwert, was für Paletten außerhalb des Themas praktisch ist.
::

@@@@@@@@@@076@@Größe

Verwenden Sie die `size` prop, um die Größe der ProgressGroup zu ändern.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@@ph078@@gmail.de
  @@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@class@class@class@classclass@class@class@class@classclassclassclassclass@class@classc
Außen:
  @@ph080@@gmail.de
Externe Typen:
  - ProgressGroupItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Größe: XL
  Items:
    - label:'Lesen'
      Wert: 42
      Farbe: "Primär"
    - label:'Schreiben'
      Wert: 18
      Farbe: "Info"
  Klasse: W-96
---
::

@@@@@@@@@@@@@@@ph084@@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung der ProgressGroup. Defaults auf `horizontal` zu ändern.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@@ph087@gmail.de
  @@@@888@@@class
Außen:
  @@ph089@@gmail.de
Externe Personen:
  - ProgressGroupItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Ausrichtung: Vertikal
  Items:
    - label:'Lesen'
      Wert: 42
      Farbe: "Primär"
    - label:'Schreiben'
      Wert: 18
      Farbe: "Info"
  Klasse: H-48
---
::

@@ph093@@Beispiele

### Mit Status-Slot

Verwenden Sie den `#status`-Slot, um den summierten Prozentsatz durch Ihren eigenen Inhalt zu ersetzen.

::component-example
---
Einsturz: wahr
Name: Progress-Gruppe-Status-Beispiel
---
::

### Mit Artikel-Slots

Verwenden Sie die `#item-label` und `#item-trailing` Slots zu ändern, was jeder Eintrag displays. Both erhalten die `item`, seine `index` und seine `percent`.

::component-example
---
Einsturz: wahr
Name: Progress-Gruppe-Item-Beispiel
---
::

### Mit benutzerdefinierten Farben

Geben Sie jedem Element eine CSS-Farbe, um eine Aufschlüsselung außerhalb der Themenpalette zu erstellen.

::component-example
---
Einsturz: wahr
Bezeichnung: progress-group-custom-color-example
---
::

@@103@bpb

@@@@@@@@104@@props

Komponenten Props

### Spielautomaten

Die Komponenten-Slots

@@106@@Einsteiger

Das Komponenten-Theme

@@ph107@@changelog (auf Englisch)

Das Component-Changelog
