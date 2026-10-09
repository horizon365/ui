---
title: InputNuméro
description: Une entrée pour des valeurs numériques avec une plage personnalisable.
category: form
keywords:
  - number field
  - spinbutton
  - counter
links:
  - label: Numéro Field
    icon: i-custom-reka-ui
    to: https://www.reka-ui.com/docs/components/number-field
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputNumber.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur du numéro d'entrée.

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

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 5
---
::

::note
Ce composant s'appuie sur le paquet [`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html) qui fournit des utilitaires pour le formatage et l'analyse des numéros à travers les paramètres locaux et les systèmes de numérotation.
::

### Min/Max

Utilisez les accessoires `min` et `max` pour définir les valeurs minimales et maximales du numéro d'entrée.

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

### étape

Utilisez la prop `step` pour définir la valeur de l'étape du numéro d'entrée.

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

### Définition

Utilisez la prop `orientation` pour modifier l'orientation du numéro d'entrée.

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

### Placeholder électronique

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
props:
  placeholder: 'Enter a number'
---
::

### couleur

Utilisez le prop `color` pour changer la couleur de la bague lorsque le numéro d'entrée est focalisé.

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

Utilisez la prop `variant` pour modifier la variante du numéro d'entrée.

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

### Size

Utilisez la prop `size` pour modifier la taille du numéro d'entrée.

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

### Désactivé

Utilisez la prop `disabled` pour désactiver le numéro d'entrée.

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

### Increment/Décroissance

Utilisez les accessoires `increment` et `decrement` pour personnaliser les boutons d'incrémentation et de décrémentation avec n'importe quel accessoire [Button](/docs/components/button).

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

### Increment/Decrement Icons (Icônes de décrément)

Utilisez les accessoires `increment-icon` et `decrement-icon` pour personnaliser les boutons [Icon](/docs/components/icon).

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

## Exemples

### Avec format décimal

Utilisez la prop `format-options` pour personnaliser le format de la valeur.

::component-example
---
name: 'input-number-decimal-example'
---
::

### Avec pourcentage

Utilisez la prop `format-options` avec `style: 'percent'` pour personnaliser le format de la valeur.

::component-example
---
name: 'input-number-percentage-example'
---
::

### Avec format de devise

Utilisez la prop `format-options` avec `style: 'currency'` pour personnaliser le format de la valeur.

::component-example
---
name: 'input-number-currency-example'
---
::

### Sans boutons

Vous pouvez utiliser les props `increment` et `decrement` pour contrôler la visibilité des boutons.

::component-example
---
name: 'input-number-without-buttons-example'
---
::

### Dans un FormField

Vous pouvez utiliser le numéro d'entrée dans un composant [FormField](/docs/components/form-field) pour afficher une étiquette, un texte d'aide, un indicateur requis, etc.

::component-example
---
name: 'input-number-form-field-example'
---
::

### Avec slots

Utilisez les fentes `#increment` et `#decrement` pour personnaliser les boutons.

::component-example
---
name: 'input-number-slots-example'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<input>`.
::

### Slots

:component-slots

### Emits

:component-emits

### Expose à

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `inputRef`x{lang="ts-type"}| `Ref<HTMLInputElement \| null>`x{lang="ts-type"}|

## Thème

:component-theme

## Changelog

:component-changelog
