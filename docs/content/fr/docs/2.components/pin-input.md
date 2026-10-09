---
title: Pininput
description: Un élément d'entrée pour entrer un pin.
category: form
keywords:
  - otp
  - one-time password
  - verification code
links:
  - label: Pininput est
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pin-input
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PinInput.vue
---

## Utilisation

Utilisez la directive `v-model` pour contrôler la valeur de la PinInput.

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

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['1','2','3']
---
::

### Type écrit

Utilisez la prop `type` pour changer le type d'entrée. Defaults à `text`.

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
Lorsque `type` est défini sur `number`, il n'accepte que les caractères numériques.
::

### Masque

Utilisez le prop `mask` pour traiter l'entrée comme un mot de passe.

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

Utilisez la prop `otp` pour activer la fonctionnalité de mot de passe à usage unique. Lorsqu 'elle est activée, les appareils mobiles peuvent détecter et remplir automatiquement les codes OTP à partir de messages SMS ou du contenu du presse-papiers, avec la prise en charge de la saisie automatique.

::component-code
---
props:
  otp: true
---
::

### Référencement

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
props:
  placeholder: '○'
---
::

### longueur

Utilisez le prop `length` pour changer la quantité d'entrées.

::component-code
---
ignore:
  - placeholder
props:
  length: 6
  placeholder: '○'
---
::

### Séparateur: badge{label="4.9+" class="align-text-top"}

Utilisez la prop `separator` pour insérer un séparateur entre les groupes d'entrées. Passez un nombre pour en insérer un après chaque Nème entrée.

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

Vous pouvez également passer un tableau de positions pour insérer des séparateurs après des entrées spécifiques.

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

### Couleur

Utilisez le prop `color` pour changer la couleur de l'anneau lorsque l'Input PinInput est focalisée.

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
La prop `highlight` est utilisée ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

### Variant équivalent

Utilisez le prop `variant` pour modifier la variante de la PinInput.

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

### Size

Utilisez le prop `size` pour modifier la taille de la PinInput.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: '○'
---
::

### Désactivé

Utilisez le prop `disabled` pour désactiver la PinInput.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: '○'
---
::

## Exemples

### Avec fente de séparation: badge{label="4.9+" class="align-text-top"}

Utilisez le slot `separator` pour personnaliser l'apparence du séparateur.

::component-example
---
name: 'pin-input-separator-slot-example'
---
::

## API écrit

### Props équipements

:component-props

### Slots

:component-slots

### Emits

:component-emits

### Expose à

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `inputsRef`x{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`{lang="ts-type"}|

## Thème

:component-theme

## Changelog

:component-changelog
