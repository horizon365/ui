---
description: Un ensemble d'étapes qui sont utilisées pour indiquer les progrès à travers un processus en plusieurs étapes.
category: navigation
keywords:
  - wizard
links:
  - label: étape
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/stepper
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Stepper.vue
---

## Utilisation

Utilisez le composant Stepper pour afficher une liste d'éléments dans un stepper.

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

### Éléments

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

- x`title?: string`x{lang="ts-type"}
- x`description?: AvatarProps`x{lang="ts-type"}
- x`content?: string`xx{lang="ts-type"}
- x`icon?: string`xx{lang="ts-type"}
- x`value?: string | number`x{lang="ts-type"}
- x`disabled?: boolean`x{lang="ts-type"}
Xph044xx[x`slot?: string`x{lang="ts-type"}x](x#with-custom-slotx)
- x`class?: any`x{lang="ts-type"}
- x`ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`x{lang="ts-type"}

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
Cliquez sur les éléments pour naviguer à travers les étapes.
::

### Couleur

Utilisez le prop `color` pour changer la couleur du Stepper.

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

### Size

Utilisez le prop `size` pour modifier la taille du Stepper.

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

### Orientation

Utilisez la prop `orientation` pour modifier l'orientation du Stepper. Defaults à `horizontal`.

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

### Disabled

Utilisez le prop `disabled` pour désactiver la navigation à travers les étapes.

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
Cela peut être utile lorsque vous souhaitez forcer la navigation avec des contrôles.
::

## exemples

### Avec contrôles

Vous pouvez ajouter des contrôles supplémentaires pour le stepper à l'aide de boutons.

:component-example{name="stepper-with-controls-example"}

### Control élément actif

Vous pouvez contrôler l'élément actif à l'aide de la prop `default-value` ou de la directive `v-model` avec le `value` de l'élément.

:component-example{name="stepper-model-value-example"}

::tip
Utilisez la prop `value-key` pour modifier la clé utilisée pour faire correspondre les éléments lorsqu 'un `v-model` ou `default-value` est fourni.
::

### With slot de contenu

Utilisez le slot `#content` pour personnaliser le contenu de chaque élément.

:component-example{name="stepper-content-slot-example"}

### With slot personnalisé

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

- x`#{{ item.slot }}`x{lang="ts-type"}

:component-example{name="stepper-custom-slot-example"}

## API

### Props électrique

:component-props

### Slots

:component-slots

### Emis

:component-emits

### Expose à

Vous pouvez accéder à l'instance du composant typé en utilisant [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <UStepper ref="stepper" />
</template>
```

Cela vous donnera accès à ce qui suit:

| nom| type|
| ---- | ---- |
| `next`x{lang="ts-type"}| `() => void`x{lang="ts-type"}|
| `prev`{lang="ts-type"}| `() => void`x{lang="ts-type"}|
| `hasNext`x{lang="ts-type"}| `Ref<boolean>`x{lang="ts-type"}|
| `hasPrev`{lang="ts-type"}| `Ref<boolean>`x{lang="ts-type"}|

## Thème

:component-theme

## Changelog

:component-changelog
