---
title: Inputnummer
description: Eine Eingabe für numerische Werte mit einem anpassbaren Bereich.
category: form
keywords:
  - number field
  - spinbutton
  - counter
links:
  - label: Numberfeld
    icon: i-custom-reka-ui
    to: https://www.reka-ui.com/docs/components/number-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputNumber.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert der InputNumber zu steuern.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
---
::

Verwenden Sie die `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 5
---
::

::note
Diese Komponente basiert auf dem Paket [`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html), das Dienstprogramme zum Formatieren und Parsen von Zahlen in Gebietsschemata und Nummerierungssystemen bereitstellt.
::

### Min/Max (nicht verfügbar)

Verwenden Sie die Props `min` und `max`, um die minimalen und maximalen Werte der Eingabezahl festzulegen.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  min: 0
  max: 10
---
::

### step (englisch)

Verwenden Sie die `step`-prop, um den Schrittwert der Eingabezahl festzulegen.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  step: 2
---
::

### Ausrichtung

Verwenden Sie die `orientation`-prop, um die Ausrichtung der Eingabezahl zu ändern.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  orientation: vertical
---
::

### Platzhalter.

Verwenden Sie die `placeholder`-Prop, um einen Platzhaltertext festzulegen.

::component-code
---
props:
  placeholder: 'Enter a number'
---
::

### Farbe

Verwenden Sie die `color`-prop, um die Ringfarbe zu ändern, wenn die InputNumber fokussiert ist.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  color: neutral
  highlight: true
---
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um die Variante der Eingabezahl zu ändern.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  variant: subtle
  color: neutral
  highlight: false
---
::

### Größe

Verwenden Sie die `size`-Prop, um die Größe der Eingabezahl zu ändern.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  size: xl
---
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-prop, um die Eingabenummer zu deaktivieren.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  disabled: true
---
::

### Increment/Decrement (Erhöhung/Abnahme)

Verwenden Sie die `increment`-und `decrement`-Props, um die Inkrement-und Dekrementschaltflächen mit beliebigen [Button](/docs/components/button)-Props anzupassen.

::component-code
---
prettier: true
ignore:
  - modelValue
  - increment.size
  - increment.color
  - increment.variant
  - decrement.size
  - decrement.color
  - decrement.variant
external:
  - modelValue
props:
  modelValue: 5
  increment:
    color: neutral
    variant: solid
    size: xs
  decrement:
    color: neutral
    variant: solid
    size: xs
---
::

### Increment/Decrement Icons (Deutsche Ausgabe)

Verwenden Sie die Props `increment-icon` und `decrement-icon`, um die Schaltflächen [Icon](/docs/components/icon) anzupassen.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  incrementIcon: 'i-lucide-arrow-right'
  decrementIcon: 'i-lucide-arrow-left'
---
::

## Beispiele

### Im Dezimalformat

Verwenden Sie die `format-options`-prop, um das Format des Werts anzupassen.

::component-example
---
name: 'input-number-decimal-example'
---
::

### Mit Prozentsatzformat

Verwenden Sie die `format-options`-Prop mit `style: 'percent'`, um das Format des Werts anzupassen.

::component-example
---
name: 'input-number-percentage-example'
---
::

### Mit Währungsformat

Verwenden Sie die `format-options`-Prop mit `style: 'currency'`, um das Format des Werts anzupassen.

::component-example
---
name: 'input-number-currency-example'
---
::

### Ohne Buttons

Sie können die `increment`-und `decrement`-Requisiten verwenden, um die Sichtbarkeit der Tasten zu steuern.

::component-example
---
name: 'input-number-without-buttons-example'
---
::

### Innerhalb eines Formularfelds

Sie können die InputNumber innerhalb einer [FormField](/docs/components/form-field)-Komponente verwenden, um eine Beschriftung, einen Hilfetext, eine erforderliche Anzeige usw. anzuzeigen.

::component-example
---
name: 'input-number-form-field-example'
---
::

### Mit Steckplätze

Verwenden Sie die `#increment` und `#decrement` Steckplätze, um die Tasten anzupassen.

::component-example
---
name: 'input-number-slots-example'
---
::

## API Bearbeiten

### Props für

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<input>`-HTML-Attribute.
::

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

### Expose Bearbeiten

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| `inputRef`{lang="ts-type"} (englisch)| `Ref<HTMLInputElement \| null>`{lang="ts-type"} nicht|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
