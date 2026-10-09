---
description: Indicateur indiquant l'avancement d'une tâche.
category: element
keywords:
  - progress bar
  - loading bar
  - meter
links:
  - label: Progrès
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/progress
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Progress.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur de la progression.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

::note
Utilisez le composant [`ProgressGroup`](/docs/components/progress-group) pour diviser une seule barre en plusieurs segments qui s'additionnent pour un total.
::

### max

Utilisez le prop `max` pour définir la valeur maximale de la progression.

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
  max: 4
---
::

Utilisez le prop `max` avec un tableau de chaînes pour afficher le pas actif sous la barre, la valeur maximale de la progression est la longueur du tableau.

::component-code
---
prettier: true
ignore:
  - max
external:
  - modelValue
props:
  modelValue: 3
  max:
    - 'Waiting...'
    - 'Cloning...'
    - 'Migrating...'
    - 'Deploying...'
    - 'Done!'
---
::

### Statut

Utilisez le prop `status` pour afficher la valeur de progression actuelle au-dessus de la barre.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
  status: true
---
::

::tip
Le statut suit la fin de la barre, utilisez `:ui="{ status: 'w-full' }"` pour lui faire couvrir toute la largeur à la place.
::

### Indéterminé

Lorsqu 'aucun `v-model` n'est défini ou que la valeur est `null`, la progression devient_indéterminée_. La barre de progression est animée comme un `carousel`, mais vous pouvez la modifier en utilisant la prop. [`animation`](xph0555).

::component-code
---
external:
  - modelValue
props:
  modelValue: null
---
::

### animation

Utilisez la prop `animation` pour changer l'animation de la progression en un carrousel inverse, une barre oscillante ou une barre élastique.

::component-code
---
props:
  animation: swing
---
::

::tip
L'animation est automatiquement désactivée lorsque l'utilisateur préfère un mouvement réduit, la barre indéterminée est affichée comme une impulsion pleine largeur à la place.
::

### Orientation

Utilisez la prop `orientation` pour modifier l'orientation de Progress. Defaults à `horizontal`.

::component-code
---
ignore:
  - class
props:
  orientation: vertical
  class: 'h-48'
---
::

### couleur

Utilisez le prop `color` pour changer la couleur de la progression.

::component-code
---
props:
  color: neutral
---
::

::tip
Ce prop accepte également toute valeur de couleur CSS pour les palettes en dehors du thème.
::

### Size

Utilisez le prop `size` pour modifier la taille de la progression.

::component-code
---
props:
  size: xl
---
::

### Résolu

Utilisez le prop `inverted` pour inverser visuellement la progression.

::component-code
---
props:
  inverted: true
  modelValue: 25
---
::

## api

### Props équipement

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog
