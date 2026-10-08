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

@@@ph000@@Verwendung

Verwenden Sie die `v-model`-Direktive, um den Wert des ColorPickers zu steuern.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Modellwert: '#00C16A'
---
::

Verwenden Sie `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  DefaultValue: '#00BCD4'(Standardwert: #00BCD4)
---
::

### RGB-Format

Verwenden Sie `format` prop, um den Wert `rgb` des ColorPickers festzulegen.

::component-code
---
Ignoriert:
  - modellWert
  @@ph010@@format
Außen:
  - modellWert
Props:
  Dateiformat: RGB
  modellWert: 'rgb (0, 193, 106)'
---
::

### HSL-Format

Verwenden Sie `format` prop, um den Wert `hsl` des ColorPickers festzulegen.

::component-code
---
Ignoriert:
  - modellWert
  @@ph016@@format
Außen:
  - modellWert
Props:
  Format: HSL
  modellWert: 'hsl (153, 100%, 37.8%)'
---
::

### CMYK-Format

Verwenden Sie `format` prop, um den Wert `cmyk` des ColorPickers festzulegen.

::component-code
---
Ignoriert:
  - modellWert
  @@ph022@@format Bearbeiten
Außen:
  - modellWert
Props:
  Dateiformat: cmyk
  modellWert: 'cmyk (100%, 0%, 45.08%, 24.31%)'
---
::

### CIELab Format (englisch)

Verwenden Sie `format` prop, um den Wert `lab` des ColorPickers festzulegen.

::component-code
---
Ignoriert:
  - modellWert
  @@ph028@@format
Außen:
  - modellWert
Props:
  Dateiendung: Lab
  modellWert: 'labor (68.88%-60.41% 32. 55%)'
---
::

### Throttle (@ Throttle) Bearbeiten

Verwenden Sie `throttle` prop, um den Throttle-Wert des ColorPickers einzustellen.

::component-code
---
Ignoriert:
  - modellWert
Außen:
  - modellWert
Props:
  Schlagzahl: 100
  Modellwert: '#00C16A'
---
::

@@ph034@@Größe

Verwenden Sie `size` prop, um die Größe des ColorPickers einzustellen.

::component-code
---
Props:
  Größe: XL
---
::

### disabled @ disabled

Verwenden Sie `disabled` prop, um den ColorPicker zu deaktivieren.

::component-code
---
Props:
  Behindert: Wahr
---
::

## Beispiele

### Wie ein Farbwähler

Verwenden Sie eine [Button](/docs/components/button) und eine [Popover](/docs/components/popover) Komponente, um eine Farbauswahl zu erstellen.

::component-example
---
Bezeichnung: color-picker-chooser-example.
---
::

@@048@gbt-gbt.de

@@ph049@@@gmail.de

Komponenten Props

@@ph050@emits

Komponenten emittieren

@@ph051@gmail.de

Das Komponenten-Theme

@@ph052@@changelog @@@ changelog

Das Component-Changelog
