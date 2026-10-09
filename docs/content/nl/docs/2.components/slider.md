---
description: Een invoer om een numerieke waarde binnen een bereik te selecteren.
category: form
keywords:
  - range slider
links:
  - label: Schuifregelaar
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/slider
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slider.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de waarde van de schuifregelaar te bepalen.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

Gebruik de `default-value` prop om de beginwaarde in te stellen wanneer u de status niet hoeft te regelen.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 50
---
::

::tip
Gebruik `aria-label` of `aria-labelledby` om een enkele duimschuif te noemen, ze worden doorgestuurd naar de duim, het element met de `slider`-rol.

De duimen van een schuifknop met meerdere duimen worden genoemd op basis van hun positie, zodat ze uit elkaar kunnen worden gehouden, `Minimum` / `Maximum` voor twee duimen en `Value n of m` voor drie of meer.
Die namen worden bewaard, en een `aria-label` benoemt de Slider als geheel door een `group` rol op de root in plaats van herhaald te worden op elke duim.
::

### Min / Max

Gebruik de `min`- en `max`-rekwisieten om de minimum- en maximumwaarden van de schuifregelaar in te stellen. Standaard ingesteld op `0` en `100`.

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

### Stap

Gebruik de `step` prop om de incrementwaarde van de schuifregelaar in te stellen. Standaard ingesteld op `1`.

::component-code
---
ignore:
  - defaultValue
props:
  step: 10
  defaultValue: 50
---
::

### Meerdere

Gebruik de `v-model`-richtlijn of de `default-value`-prop met een array van waarden om een range Slider te maken.

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

Gebruik de `min-steps-between-thumbs` prop om de minimale afstand tussen de duimen te beperken.

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

### Oriëntatie

Gebruik de `orientation`-prop om de oriëntatie van de schuifregelaar te wijzigen. Standaard `horizontal`.

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

### Kleur

Gebruik de `color` prop om de kleur van de Slider te wijzigen.

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 50
---
::

### Grootte

Gebruik de `size` prop om de grootte van de schuifregelaar te wijzigen.

::component-code
---
ignore:
  - defaultValue
props:
  size: xl
  defaultValue: 50
---
::

### Tooltip

Gebruik de `tooltip` prop om een [Tooltip](/docs/components/tooltip) rond de schuifduimen weer te geven met de huidige waarde.
U kunt het instellen op `true` voor standaardgedrag of een object doorgeven om het aan te passen met een eigenschap van de [Tooltip](/docs/components/tooltip#props) component.

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

### Uitgeschakeld

Gebruik de `disabled` prop om de Slider uit te schakelen.

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 50
---
::

### Omgekeerd

Gebruik de `inverted` prop om de Slider visueel om te keren.

::component-code
---
ignore:
  - defaultValue
props:
  inverted: true
  defaultValue: 25
---
::

## API

### Props

:component-props

### Uitzendt

:component-emits

## Thema

:component-theme

## Changelog

:component-changelog
