---
description: Een reeks stappen die worden gebruikt om de voortgang aan te geven via een proces met meerdere stappen.
category: navigation
keywords:
  - wizard
links:
  - label: Stepper
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/stepper
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Stepper.vue
---

## Gebruik

Gebruik de Stepper-component om een lijst met items in een stepper weer te geven.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- `title?: string`{lang="ts-type"}
- `description?: AvatarProps`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

::note
Klik op de items om door de stappen te navigeren.
::

### Kleur

Gebruik de `color` prop om de kleur van de Stepper te veranderen.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  color: neutral
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Grootte

Gebruik de `size` prop om de grootte van de Stepper te wijzigen.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  size: xl
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van de Stepper te wijzigen. Standaard is `horizontal`.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  orientation: vertical
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Uitgeschakeld

Gebruik de `disabled` prop om de navigatie door de stappen uit te schakelen.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  disabled: true
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
---
::

::note{to="#with-controls"}
Dit kan handig zijn wanneer u navigatie met bedieningselementen wilt forceren.
::

## Voorbeelden

### Met bedieningselementen

Met knoppen kunt u extra bedieningselementen voor de stepper toevoegen.

:component-example{name="stepper-with-controls-example"}

### Control actief item

U kunt het actieve item besturen door de `default-value` prop of de `v-model`-richtlijn te gebruiken met de `value` van het item. Als er geen `value` is opgegeven, wordt deze standaard ingesteld op de index.

:component-example{name="stepper-model-value-example"}

::tip
Gebruik de `value-key` prop om de sleutel te wijzigen die wordt gebruikt om items te matchen wanneer een `v-model` of `default-value` wordt geleverd.
::

### Met inhoud slot

Gebruik de `#content`-sleuf om de inhoud van elk item aan te passen.

:component-example{name="stepper-content-slot-example"}

### Met aangepaste sleuf

Gebruik de eigenschap `slot` om een specifiek item aan te passen.

U krijgt toegang tot de volgende slots:

- `#{{ item.slot }}`{lang="ts-type"}

:component-example{name="stepper-custom-slot-example"}

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

U hebt toegang tot de getypte componentinstantie met [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <UStepper ref="stepper" />
</template>
```

Dit geeft u toegang tot het volgende:

| Naam | Type |
| ---- | ---- |
| `next`{lang="ts-type"} | `() => void`{lang="ts-type"} |
| `prev`{lang="ts-type"} | `() => void`{lang="ts-type"} |
| `hasNext`{lang="ts-type"} | `Ref<boolean>`{lang="ts-type"} |
| `hasPrev`{lang="ts-type"} | `Ref<boolean>`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
