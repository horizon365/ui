---
title: Kleurkiezer
description: Een component om een kleur te selecteren.
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

## Gebruik

Gebruik de `v-model`-richtlijn om de waarde van de ColorPicker te bepalen.

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

Gebruik de `default-value` prop om de beginwaarde in te stellen wanneer u de status niet hoeft te regelen.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: '#00BCD4'
---
::

### RGB-formaat

Gebruik de `format` prop om de `rgb` waarde van de ColorPicker in te stellen.

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

### HSL Formaat

Gebruik de `format` prop om de `hsl` waarde van de ColorPicker in te stellen.

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

### CMYK Formaat

Gebruik de `format` prop om de `cmyk` waarde van de ColorPicker in te stellen.

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

### CIELab Formaat

Gebruik de `format` prop om de `lab` waarde van de ColorPicker in te stellen.

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

### Gasklep

Gebruik de `throttle` prop om de gaswaarde van de ColorPicker in te stellen.

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

### Grootte

Gebruik de `size` prop om de grootte van de ColorPicker in te stellen.

::component-code
---
props:
  size: xl
---
::

### Uitgeschakeld

Gebruik de `disabled` prop om de ColorPicker uit te schakelen.

::component-code
---
props:
  disabled: true
---
::

## Voorbeelden

### Als kleurkiezer

Gebruik een [Button](/docs/components/button) en een [Popover](/docs/components/popover) om een kleurkiezer te maken.

::component-example
---
name: 'color-picker-chooser-example'
---
::

## API

### Props

:component-props

### Uitzendt

:component-emits

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
