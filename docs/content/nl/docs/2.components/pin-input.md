---
title: PinInput
description: Een invoerelement om een pin in te voeren.
category: form
keywords:
  - otp
  - one-time password
  - verification code
links:
  - label: PinInput
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pin-input
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PinInput.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de waarde van de PinInput te regelen.

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

Gebruik de `default-value` prop om de beginwaarde in te stellen wanneer u de status niet hoeft te regelen.

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['1','2','3']
---
::

### Type

Gebruik de `type` prop om het ingangstype te wijzigen. Standaard ingesteld op `text`.

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
Als `type` is ingesteld op `number`, accepteert het alleen numerieke tekens.
::

### Masker

Gebruik de `mask` prop om de invoer als een wachtwoord te behandelen.

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

Gebruik de `otp`-prop om One-Time Password-functionaliteit in te schakelen. Indien ingeschakeld, kunnen mobiele apparaten automatisch OTP-codes detecteren en vullen vanuit sms-berichten of klembordinhoud, met ondersteuning voor automatisch aanvullen.

::component-code
---
props:
  otp: true
---
::

### Plaatshouder

Gebruik de `placeholder` prop om een tijdelijke aanduiding in te stellen.

::component-code
---
props:
  placeholder: '○'
---
::

### Lengte

Gebruik de `length` prop om het aantal ingangen te wijzigen.

::component-code
---
ignore:
  - placeholder
props:
  length: 6
  placeholder: '○'
---
::

### Afscheider: badge{label="4.9+" class="align-text-top"}

Gebruik de `separator`-prop om een scheidingsteken tussen groepen ingangen in te voegen. Geef een nummer door om er een in te voegen na elke Nth-invoer.

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

U kunt ook een reeks posities doorgeven om scheidingstekens in te voegen na specifieke invoer.

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

### Kleur

Gebruik de `color` prop om de ringkleur te veranderen wanneer de PinInput is scherpgesteld.

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
De `highlight` prop wordt hier gebruikt om de focusstatus weer te geven. Het wordt intern gebruikt wanneer er een validatiefout optreedt.
::

### Variant

Gebruik de `variant` prop om de variant van de PinInput te wijzigen.

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

### Grootte

Gebruik de `size` prop om de grootte van de PinInput te wijzigen.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: '○'
---
::

### Uitgeschakeld

Gebruik de `disabled` prop om de PinInput uit te schakelen.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: '○'
---
::

## Voorbeelden

### Met scheidingssleuf: badge{label="4.9+" class="align-text-top"}

Gebruik de `separator`-sleuf om het uiterlijk van de scheider aan te passen.

::component-example
---
name: 'pin-input-separator-slot-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `inputsRef`{lang="ts-type"} | `Ref<ComponentPublicInstance[]>`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
