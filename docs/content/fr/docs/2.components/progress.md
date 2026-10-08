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

@@ph000@@utilisation

Utilisez la directive `v-model` pour contrôler la valeur de la progression.

::component-code
---
Extérieure:
  - modèleValeur
Props:
  Modèle: 50
---
::

::note
Utilisez le composant [`ProgressGroup`](/docs/components/progress-group) pour diviser une seule barre en plusieurs segments qui s'additionnent pour un total.
::

@08@@Max

Utilisez la prop `max` pour définir la valeur maximale de la progression.

::component-code
---
Extérieure:
  - modèleValeur
Props:
  Modèle: 3
  Max: quatre
---
::

Utilisez le prop `max` avec un tableau de chaînes pour afficher l'étape active sous la barre, la valeur maximale de la progression est la longueur du tableau.

::component-code
---
Étiquette: true
Ignorer:
  @@ph012@max
Extérieure:
  - modèleValeur
Props:
  Modèle: 3
  Max:
    @@ph014 @@« En attente…»
    - 'Clonage '
    - 'Déménagement...'
    - 'Déploiement...'
    - « Réalisé!»
---
::

@@ph019@statut

Utilisez la prop `status` pour afficher la valeur de progression actuelle au-dessus de la barre.

::component-code
---
Extérieure:
  - modèleValeur
Props:
  Modèle: 50
  Statut: vrai
---
::

::tip
Le statut suit la fin de la barre, utilisez `:ui="{ status: 'w-full' }"` pour lui faire couvrir toute la largeur à la place.
::

### Indéterminé

Lorsqu 'aucun `v-model` n'est défini ou que la valeur est `null`, la progression devient_indéterminée_. La barre de progression est animée en tant que `carousel`, mais vous pouvez la modifier en utilisant la prop [`animation`](#animationprop.

::component-code
---
Extérieur:
  - modèle Valeur
Props:
  Modèle: NULL
---
::

### animation

Utilisez la prop `animation` pour changer l'animation de la progression en un carrousel inverse, une barre oscillante ou une barre élastique. Par défaut à `carousel`.

::component-code
---
Props:
  Étiquette: swing
---
::

::tip
L'animation est automatiquement désactivée lorsque l'utilisateur préfère un mouvement réduit, la barre indéterminée est affichée comme une impulsion pleine largeur à la place.
::

### Référencement

Utilisez la prop `orientation` pour changer l'orientation de la progression. Defaults à `horizontal`.

::component-code
---
ignorer:
  @@ph039@classe
Props:
  Orientation: verticale
  Catégorie: H-48
---
::

### couleur

Utilisez le prop `color` pour changer la couleur de la progression.

::component-code
---
Props:
  Couleur: Neutre
---
::

::tip
Ce prop accepte également toute valeur de couleur CSS pour les palettes en dehors du thème.
::

@@ph042@@Size

Utilisez la prop `size` pour modifier la taille de la progression.

::component-code
---
Props:
  Taille: XL
---
::

### Résolu

Utilisez le prop `inverted` pour inverser visuellement la progression.

::component-code
---
Props:
  Inversé: vrai
  Modèle: 25
---
::

@@ph046@@api

@@ph047@@props

Composants-props

@@ph048@@réseaux sociaux

Composants slots

@@pH049@@émissions

Composants émetteurs

@@ph050@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
