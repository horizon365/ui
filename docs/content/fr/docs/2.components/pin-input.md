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

@@ph000@@utilisation

Utilisez la directive `v-model` pour contrôler la valeur de la PinInput.

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  Modèle:[]
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
Étiquette: true
ignorer:
  @@@ph005@@defaultValue
Props:
  valeur par défaut:['1 ','2','3 ']
---
::

@@ph006@type

Utilisez la prop `type` pour changer le type d'entrée. Defaults à `text`.

::component-code
---
items:
  Type:
    @@ph009@texte
    @@ph010@numéro de téléphone
Props:
  Type: « Numéro »
---
::

::note
Lorsque `type` est défini sur `number`, il n'accepte que les caractères numériques.
::

@@pH013@@masque

Utilisez la prop `mask` pour traiter l'entrée comme un mot de passe.

::component-code
---
Étiquette: true
Ignorer:
  @@ph015@@placeholder
  - defaultValue
Props:
  Masque: vrai
  defaultValue: ['1 ','2','3 ','4','5 ']
---
::

@@P2017 @@OTP

Utilisez la prop `otp` pour activer la fonctionnalité de mot de passe à usage unique. Lorsqu 'elle est activée, les appareils mobiles peuvent détecter et remplir automatiquement les codes OTP à partir de messages SMS ou de contenu du presse-papiers, avec la prise en charge de la saisie automatique.

::component-code
---
Props:
  OTP: vrai
---
::

### Placeholder

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
Props:
  réservé:'○'
---
::

@@ph021@@longueur

Utilisez la prop `length` pour modifier la quantité d'entrées.

::component-code
---
ignorer:
  @@ph023@@placeholder
Props:
  Longueur: 6
  réservé:'○'
---
::

### Séparateur: badge{label="4.9+" class="align-text-top"}

Utilisez la prop `separator` pour insérer un séparateur entre les groupes d'entrées. Passez un nombre pour en insérer un après chaque Nème entrée.

::component-code
---
Ignorer:
  @27@@réservé
Props:
  Longueur: 6
  Séparateur: 3
  réservé:'○'
---
::

Vous pouvez également passer un tableau de positions pour insérer des séparateurs après des entrées spécifiques.

::component-code
---
Étiquette: true
Ignorer:
  @@28@réservé
  @@ph029@longueur
  - séparateur
Props:
  Longueur: 7
  Séparateur:[3, 4]
  réservé:'○'
---
::

### Couleur

Utilisez la prop `color` pour changer la couleur de l'anneau lorsque la PinInput est focalisée.

::component-code
---
ignorer:
  @@ph033@placeholder
Props:
  Couleur: Neutre
  Highlight: vrai
  réservé:'○'
---
::

::note
Le `highlight` prop est utilisé ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

### Variant

Utilisez la prop `variant` pour modifier la variante de la PinInput.

::component-code
---
Ignorer:
  @@ph037@@placeholder
Props:
  Couleur: Neutre
  Variante: subtile
  Étiquette: false
  réservé:'○'
---
::

@@ph038@@Size

Utilisez la prop `size` pour modifier la taille de la PinInput.

::component-code
---
Ignorer:
  @@ph040@réservoir
Props:
  Taille: XL
  réservé:"○"
---
::

### désactivé

Utilisez la prop `disabled` pour désactiver la PinInput.

::component-code
---
ignorer:
  @@ph043@@placeholder
Props:
  handicapés: vrai
  réservé:'○'
---
::

@@ph044@exemples

### Avec fente de séparation: badge{label="4.9+" class="align-text-top"}

Utilisez l'emplacement `separator` pour personnaliser l'apparence du séparateur.

::component-example
---
nom: 'pin-input-separator-slot-example'
---
::

@@ph048@@api

@@ph049@@props

Composants-props

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Composants slots

@@501@@émetteur

Composants émetteurs

@@ph052@@exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|

@@ph057@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
