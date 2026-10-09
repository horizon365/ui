---
title: PinEingang
description: Ein Eingabeelement, um einen Pin einzugeben.
category: form
keywords:
  - otp
  - one-time password
  - verification code
links:
  - label: Pininput hinzufügen
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pin-input
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PinInput.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert des PinInput zu steuern.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: []
---
::

Verwenden Sie die `default-value`-prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['1','2','3']
---
::

### type ist ein

Verwenden Sie die `type`-prop, um den Eingabetyp zu ändern. Standardmäßig `text`.

::component-code
---
items:
  type:
    - text
    - number
props:
  type: 'number'
---
::

::note
Wenn `type` auf `number` gesetzt ist, werden nur numerische Zeichen akzeptiert.
::

### Maske

Verwenden Sie die `mask`-Prop, um die Eingabe wie ein Passwort zu behandeln.

::component-code
---
prettier: true
ignore:
  - placeholder
  - defaultValue
props:
  mask: true
  defaultValue: ['1','2','3','4','5']
---
::

### OTP

Verwenden Sie die `otp`-prop, um One-Time Password-Funktionalität zu aktivieren. Wenn aktiviert, können mobile Geräte OTP-Codes automatisch aus SMS-Nachrichten oder Zwischenablage-Inhalten erkennen und ausfüllen, mit Autocomplete-Unterstützung.

::component-code
---
props:
  otp: true
---
::

### Platzhalter

Verwenden Sie die `placeholder`-Prop, um einen Platzhaltertext festzulegen.

::component-code
---
props:
  placeholder: '○'
---
::

### Length Übersetzung

Verwenden Sie die `length`-prop, um die Anzahl der Eingänge zu ändern.

::component-code
---
ignore:
  - placeholder
props:
  length: 6
  placeholder: '○'
---
::

### Separator: badge{label="4.9+" class="align-text-top"} (englisch)

Verwenden Sie die `separator` prop, um ein Trennzeichen zwischen Gruppen von Eingängen einzufügen. Geben Sie eine Zahl ein, um nach jeder N-ten Eingabe eins einzufügen.

::component-code
---
ignore:
  - placeholder
props:
  length: 6
  separator: 3
  placeholder: '○'
---
::

Sie können auch ein Array von Positionen übergeben, um Trennzeichen nach bestimmten Eingaben einzufügen.

::component-code
---
prettier: true
ignore:
  - placeholder
  - length
  - separator
props:
  length: 7
  separator: [3, 4]
  placeholder: '○'
---
::

### Color (englisch)

Verwenden Sie die `color` prop, um die Ringfarbe zu ändern, wenn der PinInput fokussiert ist.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: '○'
---
::

::note
Die `highlight`-prop wird hier verwendet, um den Fokusstatus anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

### Variant Übersetzung

Verwenden Sie die `variant`-prop, um die Variante des PinInput zu ändern.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: '○'
---
::

### Size

Verwenden Sie die `size`-prop, um die Größe des PinInput zu ändern.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: '○'
---
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled` prop, um den PinInput zu deaktivieren.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: '○'
---
::

## Beispiele

### Mit Separator-Slot: badge{label="4.9+" class="align-text-top"}

Verwenden Sie den `separator`-Steckplatz, um das Erscheinungsbild des Separators anzupassen.

::component-example
---
name: 'pin-input-separator-slot-example'
---
::

## API Bearbeiten

### Props (englisch)

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

### Expose (englisch)

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| `inputsRef`{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`{lang="ts-type"} (nicht)|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
