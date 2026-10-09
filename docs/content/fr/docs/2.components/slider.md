---
description: Une entrée pour sélectionner une valeur numérique dans une plage.
category: form
keywords:
  - range slider
links:
  - label: Slider à
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/slider
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slider.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur du curseur.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 50
---
::

::tip
Utilisez `aria-label` ou `aria-labelledby` pour nommer un seul curseur de pouce, ils sont transférés au pouce qui est l'élément avec le rôle `slider`.

Les pouces d'un curseur à plusieurs pouces sont nommés par leur position afin qu 'ils puissent être distingués, `Minimum`/`Maximum` pour deux pouces et `Value n of m` pour trois ou plus. Ces noms sont conservés, et un `aria-label` nomme le curseur dans son ensemble par un rôle `group` sur la racine au lieu d'être répété sur chaque pouce.
::

### Min/Max

Utilisez les props `min` et `max` pour définir les valeurs minimales et maximales du curseur. Defaults sur `0` et `100`.

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

### Step étape

Utilisez la prop `step` pour définir la valeur d'incrément du Slider. Defaults à `1`.

::component-code
---
ignore:
  - defaultValue
props:
  step: 10
  defaultValue: 50
---
::

### Multiple équivalent

Utilisez la directive `v-model` ou la prop `default-value` avec un tableau de valeurs pour créer un curseur de plage.

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

Utilisez le prop `min-steps-between-thumbs` pour limiter la distance minimale entre les pouces.

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

### Définition

Utilisez la prop `orientation` pour changer l'orientation du curseur. Defaults à `horizontal`.

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

### Couleur

Use the `color` prop to change the color of the slider.

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 50
---
::

### Size

Utilisez le prop `size` pour modifier la taille du curseur.

::component-code
---
ignore:
  - defaultValue
props:
  size: xl
  defaultValue: 50
---
::

### Tooltip écrit

Utilisez la prop `tooltip` pour afficher un [Tooltip](/docs/components/tooltip) autour des pouces du curseur avec la valeur actuelle. Vous pouvez le définir sur `true` pour le comportement par défaut ou passer un objet pour le personnaliser avec n'importe quelle propriété du composant [Tooltip](/docs/components/tooltip#props).

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

### Désactivé

Utilisez le prop `disabled` pour désactiver le curseur.

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 50
---
::

### Inverté

Utilisez le prop `inverted` pour inverser visuellement le curseur.

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

### Emits

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog
