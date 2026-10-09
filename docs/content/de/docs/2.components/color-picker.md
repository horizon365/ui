---
title: Der Colorpicker
description: Eine Komponente zum Auswählen einer Farbe.
category: form
keywords:
  - colour picker
  - swatch
  - hex
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ColorPicker.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert des ColorPickers zu steuern.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: '#00C16A'
---
::

Verwenden Sie die `default-value`-prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: '#00BCD4'
---
::

### RGB-Format

Verwenden Sie die `format`-Prop, um den `rgb`-Wert des ColorPickers festzulegen.

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: rgb
  modelValue: 'rgb(0, 193, 106)'
---
::

### HSL Format Bearbeiten

Verwenden Sie die `format`-Prop, um den `hsl`-Wert des ColorPickers festzulegen.

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: hsl
  modelValue: 'hsl(153, 100%, 37.8%)'
---
::

### CMYK Format Bearbeiten

Verwenden Sie die `format`-Prop, um den `cmyk`-Wert des ColorPickers festzulegen.

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: cmyk
  modelValue: 'cmyk(100%, 0%, 45.08%, 24.31%)'
---
::

### CIELab Format (englisch)

Verwenden Sie die `format`-Prop, um den `lab`-Wert des ColorPickers festzulegen.

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: lab
  modelValue: 'lab(68.88% -60.41% 32.55%)'
---
::

### Throttle ist ein

Verwenden Sie die `throttle` prop, um den Drosselwert des ColorPicker einzustellen.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  throttle: 100
  modelValue: '#00C16A'
---
::

### size

Verwenden Sie die `size`-Prop, um die Größe des ColorPickers einzustellen.

::component-code
---
props:
  size: xl
---
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um den ColorPicker zu deaktivieren.

::component-code
---
props:
  disabled: true
---
::

## Beispiele

### As ein Farbwähler

Verwenden Sie eine [Button](/docs/components/button) und eine [Popover](/docs/components/popover) Komponente, um eine Farbauswahl zu erstellen.

::component-example
---
name: 'color-picker-chooser-example'
---
::

## API Bearbeiten

### Props für

:component-props

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
