---
description: Ein Indikator, der den Fortschritt einer Aufgabe anzeigt.
category: element
keywords:
  - progress bar
  - loading bar
  - meter
links:
  - label: Progress
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/progress
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Progress.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert des Progress-Elements zu steuern.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

::note
Verwenden Sie die Komponente [`ProgressGroup`](/docs/components/progress-group), um einen einzelnen Balken in mehrere Segmente aufzuteilen, die sich zu einer Summe addieren.
::

### Max ist

Verwenden Sie die Prop `max`, um den maximalen Wert des Progress festzulegen.

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
  max: 4
---
::

Verwenden Sie die `max` prop mit einem Array von Strings, um den aktiven Schritt unter der Leiste anzuzeigen, der maximale Wert des Fortschritts ist die Länge des Arrays.

::component-code
---
prettier: true
ignore:
  - max
external:
  - modelValue
props:
  modelValue: 3
  max:
    - 'Waiting...'
    - 'Cloning...'
    - 'Migrating...'
    - 'Deploying...'
    - 'Done!'
---
::

### Status Bearbeiten

Verwenden Sie die `status` prop, um den aktuellen Fortschrittswert über dem Balken anzuzeigen.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
  status: true
---
::

::tip
Der Status verfolgt das Ende der Leiste, verwenden Sie stattdessen `:ui="{ status: 'w-full' }"`, um die gesamte Breite zu überspannen.
::

### Indeterminate (unbestimmt)

Wenn kein `v-model` gesetzt ist oder der Wert `null` ist, wird der Progress_indeterminate_. Der Fortschrittsbalken wird als `carousel` animiert, aber Sie können ihn mit dem [`animation`](#animation) prop.

::component-code
---
external:
  - modelValue
props:
  modelValue: null
---
::

### Animation (Englisch)

Verwenden Sie die `animation`-Prop, um die Animation des Progress in ein inverses Karussell, eine schwingende Leiste oder eine elastische Leiste zu ändern.

::component-code
---
props:
  animation: swing
---
::

::tip
Die Animation wird automatisch deaktiviert, wenn der Benutzer eine reduzierte Bewegung bevorzugt, der unbestimmte Balken wird stattdessen als Puls in voller Breite angezeigt.
::

### Orientierung.

Verwenden Sie die `orientation`-Prop, um die Ausrichtung des Progress. Defaults auf `horizontal` zu ändern.

::component-code
---
ignore:
  - class
props:
  orientation: vertical
  class: 'h-48'
---
::

### color kaufen

Verwenden Sie die `color`-Prop, um die Farbe des Progress zu ändern.

::component-code
---
props:
  color: neutral
---
::

::tip
Diese Prop akzeptiert auch jeden CSS-Farbwert für Paletten außerhalb des Themas.
::

### Größe

Verwenden Sie die `size`-Prop, um die Größe des Progress zu ändern.

::component-code
---
props:
  size: xl
---
::

### invertiert

Verwenden Sie die `inverted` prop, um den Fortschritt visuell umzukehren.

::component-code
---
props:
  inverted: true
  modelValue: 25
---
::

## API (englisch)

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
