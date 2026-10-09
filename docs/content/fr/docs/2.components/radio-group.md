---
title: Le radiogroupe
description: Un ensemble de boutons radio pour sélectionner une seule option dans une liste.
category: form
keywords:
  - radio buttons
  - single choice
links:
  - label: Le radiogroupe
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/radio-group
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/RadioGroup.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur du RadioGroup ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
props:
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Éléments

Utilisez le prop `items` comme un tableau de chaînes ou de nombres:

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
props:
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

- x`label?: string`xx{lang="ts-type"}
- x`description?: string`x{lang="ts-type"}
Xph041xx[x`value?: string`x{lang="ts-type"}x](#value-keyx)
- x`disabled?: boolean`x{lang="ts-type"}
- x[x`icon?: string`x{lang="ts-type"}x](x#indicatorx)
- xx`class?: any`xx{lang="ts-type"}
- x`ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, icon?: ClassNameValue, description?: ClassNameValue }`xx{lang="ts-type"}

::component-code
---
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - RadioGroupItem[]
props:
  modelValue: 'system'
  items:
    - label: 'System'
      description: 'Matches your device settings.'
      value: 'system'
    - label: 'Light'
      description: 'Always uses the light theme.'
      value: 'light'
    - label: 'Dark'
      description: 'Always uses the dark theme.'
      value: 'dark'
---
::

::caution
Lorsque vous utilisez des objets, vous devez faire référence à la propriété `value` de l'objet dans la directive `v-model` ou la prop `default-value`.
::

Clé ### Value

Vous pouvez modifier la propriété qui est utilisée pour définir la valeur en utilisant la prop. `value-key`.

::component-code
---
ignore:
  - modelValue
  - items
  - valueKey
external:
  - items
  - modelValue
externalTypes:
  - RadioGroupItem[]
props:
  modelValue: 'light'
  valueKey: 'id'
  items:
    - label: 'System'
      description: 'Matches your device settings.'
      id: 'system'
    - label: 'Light'
      description: 'Always uses the light theme.'
      id: 'light'
    - label: 'Dark'
      description: 'Always uses the dark theme.'
      id: 'dark'
---
::

### Légende

Utilisez le prop `legend` pour définir la légende du RadioGroup.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  legend: 'Theme'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### couleur

Utilisez le prop `color` pour changer la couleur du groupe radio.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  color: neutral
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Variant

Utilisez le prop `variant` pour changer la variante du RadioGroup.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  color: 'primary'
  variant: 'card'
  defaultValue: 'system'
  items:
    - label: 'System'
      value: 'system'
      description: 'Matches your device settings.'
    - label: 'Light'
      value: 'light'
      description: 'Always uses the light theme.'
    - label: 'Dark'
      value: 'dark'
      description: 'Always uses the dark theme.'
---
::

### Size

Utilisez le prop `size` pour modifier la taille du groupe radio.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  size: 'xl'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Orientation

Utilisez la prop `orientation` pour changer l'orientation du RadioGroup. Defaults à `vertical`.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  orientation: 'horizontal'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### indicateur

Utilisez la prop `indicator` pour modifier la position ou masquer l'indicateur. Par défaut, `start`.

::note
Le `icon` d'un article n'est affiché que lorsque `indicator` est `hidden`, au-dessus de l'étiquette, car une radio n'a pas d'icône à l'intérieur de son indicateur.
::

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
items:
  indicator:
    - start
    - end
    - hidden
  variant:
    - list
    - card
    - table
props:
  indicator: 'hidden'
  orientation: 'horizontal'
  variant: 'table'
  defaultValue: 'System'
  items:
    - label: 'System'
      icon: 'i-lucide-monitor'
      value: 'System'
      class: 'w-20'
    - label: 'Light'
      icon: 'i-lucide-sun'
      value: 'Light'
      class: 'w-20'
    - label: 'Dark'
      icon: 'i-lucide-moon'
      value: 'Dark'
      class: 'w-20'
---
::

### Disabled

Utilisez le prop `disabled` pour désactiver le RadioGroup.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  disabled: true
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

## API

### Props équipements

:component-props

### Slots électroniques

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog

:component-changelog
