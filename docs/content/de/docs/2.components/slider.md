---
description: Eine Eingabe zum Auswählen eines numerischen Werts innerhalb eines Bereichs.
category: form
keywords:
  - range slider
links:
  - label: Der Slider
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/slider
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slider.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert des Sliders zu steuern.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

Verwenden Sie die `default-value`-prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 50
---
::

::tip
Verwenden Sie `aria-label` oder `aria-labelledby`, um einen einzelnen Daumen-Slider zu benennen, sie werden an den Daumen weitergeleitet, der das Element mit der Rolle `slider` ist.

Die Daumen eines Sliders mit mehreren Daumen werden nach ihrer Position benannt, so dass sie auseinandergehalten werden können, `Minimum`/`Maximum` für zwei Daumen und `Value n of m` für drei oder mehr. Diese Namen werden beibehalten, und ein `aria-label` nennt den Slider als Ganzes durch eine `group`-Rolle an der Wurzel, anstatt auf jedem Daumen wiederholt zu werden.
::

### Min/Max (englisch).

Verwenden Sie die Props `min` und `max`, um die minimalen und maximalen Werte des Sliders festzulegen.

::component-code
---
ignore:
  - defaultValue
props:
  min: 0
  max: 50
  defaultValue: 50
---
::

### Step (englisch)

Verwenden Sie die `step` prop, um den Inkrementwert des Slider. Defaults auf `1` zu setzen.

::component-code
---
ignore:
  - defaultValue
props:
  step: 10
  defaultValue: 50
---
::

### Mehrfach

Verwenden Sie die `v-model`-Direktive oder die `default-value`-Prop mit einem Array von Werten, um einen Bereichs-Slider zu erstellen.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [25, 75]
---
::

Verwenden Sie die `min-steps-between-thumbs`-Stütze, um den Mindestabstand zwischen den Daumen zu begrenzen.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [25, 50, 75]
  minStepsBetweenThumbs: 10
---
::

### Orientierung

Verwenden Sie die `orientation`-prop, um die Ausrichtung des Sliders zu ändern. Standardmäßig auf `horizontal`.

::component-code
---
ignore:
  - defaultValue
  - class
props:
  orientation: vertical
  defaultValue: 50
  class: 'h-48'
---
::

### Color Bearbeiten

Verwenden Sie die `color`-Prop, um die Farbe des Sliders zu ändern.

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 50
---
::

### Größe

Verwenden Sie die `size`-Stütze, um die Größe des Sliders zu ändern.

::component-code
---
ignore:
  - defaultValue
props:
  size: xl
  defaultValue: 50
---
::

### Tooltip (englisch)

Verwenden Sie die `tooltip` prop, um eine [Tooltip](/docs/components/tooltip) um die Schieber-Daumen mit dem aktuellen Wert anzuzeigen. Sie können es auf `true` für das Standardverhalten einstellen oder ein Objekt übergeben, um es mit einer beliebigen Eigenschaft aus der Komponente [Tooltip](/docs/components/tooltip#props) anzupassen.

::component-code
---
ignore:
  - defaultValue
  - tooltip
props:
  defaultValue: 50
  tooltip: true
---
::

### Disabled ist ein

Verwenden Sie die `disabled`-Prop, um den Slider zu deaktivieren.

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 50
---
::

### Inverted (englisch)

Verwenden Sie die `inverted`-Prop, um den Slider visuell umzukehren.

::component-code
---
ignore:
  - defaultValue
props:
  inverted: true
  defaultValue: 25
---
::

## API (englisch)

### Props Bearbeiten

:component-props

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
