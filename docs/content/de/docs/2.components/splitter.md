---
description: Eine Reihe von größenveränderbaren Panels, die durch ziehbare Griffe getrennt sind.
category: layout
links:
  - label: Splitter
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/splitter
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Splitter.vue
navigation.badge: New
---

@@@ph000@Verwendung

Verwenden Sie die Splitter-Komponente, um eine Liste von Panels anzuzeigen, die durch ziehbare Griffe getrennt sind.

::component-example
---
Einsturz: wahr
Name: "Splitter-Beispiel"
---
::

::note
Der Splitter füllt die Höhe seines Containers aus, also stellen Sie sicher, dass ein Elternelement einen definiert.
::

@@ph001@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

`defaultSize?: number`PH0004@@@@@@@@@@@PH0005 @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0007@@@@@@@@@@@PH0008@@@@@PH0008@@@@@@PH00008 @
`maxSize?: number``maxSize?: number`PH0111 @@
`collapsible?: boolean``collapsible?: boolean``collapsible?: boolean`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}`collapsible?: boolean`{lang="ts-type"}
`collapsedSize?: number``collapsedSize?: number``collapsedSize?: number`{lang="ts-type"}{lang="ts-type"}`collapsedSize?: number``collapsedSize?: number``collapsedSize?: number`
`sizeUnit?: '%' | 'px'``sizeUnit?: '%' | 'px'`PH02020
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`id?: string``id?: string`{lang="ts-type"}
`slot?: string``slot?: string``slot?: string`{lang="ts-type"}
`class?: any``class?: any``class?: any`{lang="ts-type"}
`ui?: { panel?: ClassNameValue }``ui?: { panel?: ClassNameValue }``ui?: { panel?: ClassNameValue }`{lang="ts-type"}

Verwenden Sie den `slot`-Schlüssel, um den Inhalt eines Panels zu füllen, und den `class`-Schlüssel, um ihn zu stylen. Elemente ohne einen `slot`-Schlüssel fallen auf einen `panel-{index}`-Slot zurück.

::caution
Beim Rendern auf dem Server setzen Sie die `id` prop und geben Sie `defaultSize` an alle Elemente oder an none. IDs werden automatisch generiert, ansonsten können Server und Client widersprechen, was das Layout bei Hydratation unterbricht. Ein Element ohne `defaultSize` fällt auf einen gleichen Anteil auf dem Server zurück, so Mischen der beiden macht Panels springen einmal hydratisiert. Pixelgrößen werden auf dem Client gemessen und verschieben sich immer ein wenig.
::

::component-code
---
Einsturz: wahr
Klasse: H-96
Schöner: wahr
Ignoriert:
  @@ph044@gmail.de
  @@ph045@@gmail.de
Außen:
  @@ph046@gmail.de
Externe Typen:
  @@ph047@spalteritem [Bearbeiten | Quelltext bearbeiten]
Props:
  id: 'Splitter-Elemente'
  Items:
    - slot:'Seitenleiste'
      Minus: 15
      Größe: 40
      Fehlerquote: 25
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'(bg-elevated/50 border-default rounded-xl items-center justify-center text-muted font-medium)'(englisch)
    - slot:'main'(auf Englisch)
      Anzahl der Fehler: 75
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'(bg-elevated/50 border-default rounded-xl items-center justify-center text-muted font-medium)'(englisch)
Die Slots:
  Seitentitel: Sidebar
  von: Main
---

#Seitenleiste
Sidebar

#Hauptsache
Main ist
::

@@ph050@@Orientierung

Verwenden Sie die `orientation` prop, um die Richtung des Splitters zu ändern.

::component-code
---
Einsturz: wahr
Klasse: H-96
Schöner: wahr
Ignoriert:
  @@ph053@gmail.de
  @@ph054@@gmail.de
Außen:
  @@@ph055@gmail.de
Externe Personen:
  @@ph056@spalteritem [Bearbeiten | Quelltext bearbeiten]
Props:
  id: 'Splitter-Orientierung'
  Ausrichtung: "vertikal"
  Items:
    - slot:'zuerst'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'(bg-elevated/50 border-default rounded-xl items-center justify-center text-muted font-medium)'(englisch)
    - slot:'Zweiter'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'(bg-elevated/50 border-default rounded-xl items-center justify-center text-muted font-medium)'(englisch)
Die Slots:
  Erstens: zuerst
  Zweitens: Second
---

#erste
zuerst

#Zweiter
zweite
::

@@ph059@@Beispiele

### Mit zusammenklappbaren Panel

Setzen Sie `collapsible: true` auf ein Element, damit es an seinem `minSize` vorbei kollabiert, und verwenden Sie `collapsedSize`, um einen Teil des Panels sichtbar zu halten, wenn es kollabiert ist.`expand` und `resize` Ereignisse Feuer mit dem Panel-Index.

::component-example
---
Einsturz: wahr
Name: 'Splitter-zusammenklappbares-Beispiel'
---
::

### Mit verschachtelten Splittern

Verschachteln Sie ein `Splitter` in einem Panel, um zweidimensionale Layouts im IDE-Stil zu erstellen.

::component-example
---
Einsturz: wahr
Name: 'Splitter-Nested-Example'(Beispiel)
---
::

### Mit benutzerdefiniertem Handle

Verwenden Sie den `ui` prop, um ihn neu zu gestalten, z. B. als sichtbaren Trenner für bündige Layouts, und den `resize-handle`-Steckplatz, um den Inhalt darin wie einen Griff darzustellen.

::component-example
---
Einsturz: wahr
Name: 'Splitter-Custom-Handle-Beispiel'
---
::

### Mit Ausdauer

Geben Sie ein `auto-save-id` ein, um das Layout auf `localStorage` zu belassen und beim Nachladen wiederherzustellen.

```vue
<template>
  <USplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </USplitter>
</template>
```

@@@@@@85@@bpb

@@@@@@@@@@@@ph086@@props

Komponenten-Props

@@ph087@gmail.de

Die Komponenten-Slots

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Emits

Komponenten emittieren

@@@@@@@@@@@@@ph089@@theme

Das Komponenten-Theme

@@ph090@@changelog @ changelog

Das Component-Changelog
