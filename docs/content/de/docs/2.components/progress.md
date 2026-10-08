---
description: Ein Indikator, der den Fortschritt einer Aufgabe anzeigt.
category: element
keywords:
  - progress bar
  - loading bar
  - meter
links:
  - label: Fortschritt
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/progress
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Progress.vue
---

@@@ph000@@Verwendung

Verwenden Sie die `v-model`-Direktive, um den Wert des Progress-Elements zu steuern.

::component-code
---
Außen:
  - modellWert
Props:
  Modellwert: 50
---
::

::note
Verwenden Sie die Komponente [`ProgressGroup`](/docs/components/progress-group), um einen einzelnen Balken in mehrere Segmente aufzuteilen, die sich zu einer Summe addieren.
::

@@@008@@Max

Verwenden Sie `max` prop, um den maximalen Wert für den Fortschritt festzulegen.

::component-code
---
Außen:
  - modellWert
Props:
  Modellgröße: 3
  max: vier
---
::

Verwenden Sie `max` prop mit einem Array von Strings, um den aktiven Schritt unter dem Balken anzuzeigen, der maximale Wert des Fortschritts ist die Länge des Arrays.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@12@12@12@12@12@12@12
Außen:
  - modellWert
Props:
  Modellgröße: 3
  Max:
    @@ph014 @@"Warten auf..."
    @@ph015 @@@'Klonen...'
    - 'Migration...'
    - 'Bereitstellen...'
    @@ph018 @@"Fertig!"
---
::

@@ph019@@zum-Zustand

Verwenden Sie `status` prop, um den aktuellen Fortschrittswert über der Leiste anzuzeigen.

::component-code
---
Außen:
  - modellWert
Props:
  Modellwert: 50
  Status: wahr
---
::

::tip
Der Status verfolgt das Ende der Leiste, verwenden Sie `:ui="{ status: 'w-full' }"`, um sie stattdessen über die gesamte Breite zu erstrecken.
::

@@ph023@unbestimmt

Wenn kein `v-model` gesetzt ist oder der Wert `null` ist, wird der Fortschritt_unbestimmt_. Der Fortschrittsbalken wird als `carousel` animiert, aber Sie können ihn mit dem [`animation`](#animation) prop.

::component-code
---
Außen:
  - modellWert
Props:
  Modellwert: Null
---
::

### Animation Bearbeiten

Verwenden Sie die `animation` prop, um die Animation des Progress in ein inverses Karussell, eine schwingende Leiste oder eine elastische Leiste zu ändern.

::component-code
---
Props:
  Animation: Schaukel
---
::

::tip
Die Animation wird automatisch deaktiviert, wenn der Benutzer eine reduzierte Bewegung bevorzugt, der unbestimmte Balken wird stattdessen als Impuls in voller Breite angezeigt.
::

@@ph036@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung des Progress. Defaults auf `horizontal` zu ändern.

::component-code
---
Ignoriert:
  @@@@@@399@@class
Props:
  Ausrichtung: Vertikal
  Klasse: H-48
---
::

@@ph040@@gmail.de

Verwenden Sie `color` prop, um die Farbe des Progress-Elements zu ändern.

::component-code
---
Props:
  Farbe: neutral
---
::

::tip
Diese Requisite akzeptiert auch jeden CSS-Farbwert für Paletten außerhalb des Themas.
::

@@ph042@@Größe

Verwenden Sie `size` prop, um die Größe des Progress-Elements zu ändern.

::component-code
---
Props:
  Größe: XL
---
::

### invertiert

Verwenden Sie `inverted` prop, um den Fortschritt visuell umzukehren.

::component-code
---
Props:
  invertiert: wahr
  Modellwert: 25
---
::

## api

@@@@@@@@@@ph047@@props

Komponenten-Props

@@ph048@gmail.de

Die Komponenten-Slots

@@ph049@@emits

Komponenten emittieren

@@ph050@gmail.de

Das Komponenten-Theme

@@ph051@@changelog @@@ changelog @@@ changelog

Das Component-Changelog
