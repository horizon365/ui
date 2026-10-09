---
title: CheckboxGroupe
description: Ensemble de cases à cocher pour sélectionner plusieurs options dans une liste.
category: form
keywords:
  - multi select
  - checklist
links:
  - label: CheckboxGroupe
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox#group-root
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CheckboxGroup.vue
---


## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur du CheckboxGroup ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

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
  modelValue:
    - 'System'
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
  modelValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

- x`label?: string`xx{lang="ts-type"}
- x`description?: string`x{lang="ts-type"}
Xph043xx[x`value?: string`{lang="ts-type"}x](#value-keyx)
- x`disabled?: boolean`x{lang="ts-type"}
Xph053xxx[x`icon?: string`x{lang="ts-type"}x](x#indicatorx)
- x`class?: any`xx{lang="ts-type"}
- x`ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`xx{lang="ts-type"}

::component-code
---
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - CheckboxGroupItem[]
props:
  modelValue:
    - 'system'
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
  - CheckboxGroupItem[]
props:
  modelValue:
    - 'light'
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

XPH120xLégende

Utilisez la prop `legend` pour définir la légende du groupe de checkbox.

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
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### couleur

Utilisez la prop `color` pour changer la couleur du groupe de checkbox.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  color: neutral
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Variant

Utilisez la prop `variant` pour modifier la variante du groupe de checkbox.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - CheckboxGroupItem[]
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  variant:
    - list
    - card
    - table
props:
  color: 'primary'
  variant: 'card'
  defaultValue:
    - 'system'
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

Utilisez la prop `size` pour modifier la taille du groupe de checkbox.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
items:
  variant:
    - list
    - card
    - table
props:
  size: 'xl'
  variant: 'list'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Orientation

Utilisez la prop `orientation` pour modifier l'orientation du groupe CheckboxGroup. Defaults à `vertical`.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
items:
  variant:
    - list
    - card
    - table
props:
  orientation: 'horizontal'
  variant: 'list'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### indicateur

Utilisez la prop `indicator` pour modifier la position ou masquer l'indicateur. Par défaut, `start`.

::note
L'étiquette `icon` d'un article remplace la coche lorsque l'indicateur est visible, et s'affiche au-dessus de l'étiquette lorsqu 'elle est `hidden`.
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
  - CheckboxGroupItem[]
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
  defaultValue:
    - 'System'
  items:
    - label: 'System'
      icon: 'i-lucide-monitor'
      value: 'System'
      class: 'w-20'
    - label: 'Light'
      icon: 'i-lucide-sun'
      class: 'w-20'
      value: 'Light'
    - label: 'Dark'
      icon: 'i-lucide-moon'
      class: 'w-20'
      value: 'Dark'
---
::

### Désactivé

Utilisez la prop `disabled` pour désactiver le CheckboxGroup.

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
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

## API

### Props équipements

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog
