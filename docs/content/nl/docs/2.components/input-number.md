---
title: Inputnummer
description: Een invoer voor numerieke waarden met een aanpasbaar bereik.
category: form
keywords:
  - number field
  - spinbutton
  - counter
links:
  - label: NummerVeld
    icon: i-custom-reka-ui
    to: https://www.reka-ui.com/docs/components/number-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputNumber.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de waarde van het InputNumber te bepalen.

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

Gebruik de `default-value` prop om de beginwaarde in te stellen wanneer u de status niet hoeft te regelen.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 5
---
::

::note
Dit onderdeel is afhankelijk van het [`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html) pakket dat hulpprogramma 's biedt voor het opmaken en parseren van nummers over landinstellingen en nummeringssystemen.
::

### Min / Max

Gebruik de `min` en `max` props om de minimum en maximum waarden van het InputNumber in te stellen.

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

### Stap

Gebruik de `step` prop om de stapwaarde van het InputNumber in te stellen.

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

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van het InputNumber te wijzigen.

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

### Plaatshouder

Gebruik de `placeholder` prop om een tijdelijke aanduiding in te stellen.

::component-code
---
props:
  placeholder: 'Enter a number'
---
::

### Kleur

Gebruik de `color` prop om de ringkleur te wijzigen wanneer het invoernummer is scherpgesteld.

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

### Variant

Gebruik de `variant` prop om de variant van het InputNumber te wijzigen.

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

### Grootte

Gebruik de `size` prop om de grootte van het invoernummer te wijzigen.

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

### Uitgeschakeld

Gebruik de `disabled` prop om het invoernummer uit te schakelen.

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

### Verhoging / Vermindering

Gebruik de `increment` en `decrement` rekwisieten om de knoppen voor toename en afname aan te passen met [Button](/docs/components/button) rekwisieten. Standaard `{ variant: 'link' }`{lang="ts-type"}.

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

### Toename / Afname Iconen

Gebruik de `increment-icon` en `decrement-icon` rekwisieten om de knoppen aan te passen [Icon](/docs/components/icon). Standaard `i-lucide-plus` / `i-lucide-minus`.

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

## Voorbeelden

### Met decimaal formaat

Gebruik de `format-options` prop om het formaat van de waarde aan te passen.

::component-example
---
name: 'input-number-decimal-example'
---
::

### Met percentage formaat

Gebruik de `format-options` prop met `style: 'percent'` om het formaat van de waarde aan te passen.

::component-example
---
name: 'input-number-percentage-example'
---
::

### Met valuta formaat

Gebruik de `format-options` prop met `style: 'currency'` om het formaat van de waarde aan te passen.

::component-example
---
name: 'input-number-currency-example'
---
::

### Zonder knoppen

U kunt de `increment` en `decrement` props gebruiken om de zichtbaarheid van de knoppen te regelen.

::component-example
---
name: 'input-number-without-buttons-example'
---
::

### Binnen een FormField

U kunt het InputNumber binnen een [FormField](/docs/components/form-field) gebruiken om een label, helptekst, vereiste indicator, enz. Weer te geven.

::component-example
---
name: 'input-number-form-field-example'
---
::

### Met sleuven

Gebruik de `#increment` en `#decrement` slots om de knoppen aan te passen.

::component-example
---
name: 'input-number-slots-example'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<input>` HTML-kenmerken.
::

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `inputRef`{lang="ts-type"} | `Ref<HTMLInputElement \| null>`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
