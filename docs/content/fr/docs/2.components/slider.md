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

@@ph000@@utilisation

Utilisez la directive `v-model` pour contrôler la valeur du curseur.

::component-code
---
Extérieure:
  - modèleValeur
Props:
  Modèle: 50
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
Ignorer:
  @@ph004@@valeur défaillante
Props:
  Défaut: 50
---
::

::tip
Utilisez `aria-label` ou `aria-labelledby` pour nommer un seul curseur de pouce, ils sont transférés au pouce qui est l'élément avec le rôle `slider`.

Les pouces d'un curseur à plusieurs pouces sont nommés par leur position afin qu 'ils puissent être distingués,`Minimum`/`Maximum` pour deux pouces et `Value n of m` pour trois ou plus. Ces noms sont conservés, et un `aria-label` nomme le curseur dans son ensemble par un rôle `group` sur la racine au lieu d'être répété sur chaque pouce.
::

@ Min/Max

Utilisez les accessoires `min` et `max` pour définir les valeurs minimales et maximales du Slider. Defaults sur `0` et `100`.

::component-code
---
ignorer:
  - defaultValue
Props:
  min: 0 à
  Max: à 50
  Défaut: 50
---
::

@@ph019@étape

Utilisez la prop `step` pour définir la valeur d'incrément du Slider. Defaults à `1`.

::component-code
---
Ignorer:
  - defaultValue
Props:
  Étape: 10
  Défaut: 50
---
::

@@223@multiple

Utilisez la directive `v-model` ou la prop `default-value` avec un tableau de valeurs pour créer un curseur de plage.

::component-code
---
ignorer:
  - modelValeur
Extérieur:
  - modelValeur
Props:
  Modèle:[25, 75]
---
::

Utilisez le prop `min-steps-between-thumbs` pour limiter la distance minimale entre les pouces.

::component-code
---
Ignorer:
  - modèleValeur
Extérieure:
  - modèleValeur
Props:
  Modèle:[25, 50, 75]
  minStepsBetweenThumbs: 10
---
::

### Référencement

Utilisez la prop `orientation` pour changer l'orientation du curseur. Defaults à `horizontal`.

::component-code
---
ignorer:
  - valeur défaillante
  @@classe 35
Props:
  Orientation: verticale
  Défaut: 50
  Catégorie: H-48
---
::

@@pH036@couleur

Utilisez la prop `color` pour changer la couleur du curseur.

::component-code
---
Ignorer:
  - defaultValue
Props:
  Couleur: Neutre
  Défaut: 50
---
::

@@pH039@@Size

Utilisez la prop `size` pour modifier la taille du curseur.

::component-code
---
Ignorer:
  - defaultValue
Props:
  Taille: XL
  Défaut: 50
---
::

@@ph042@Tooltip

Utilisez le prop `tooltip` pour afficher un [Tooltip](/docs/components/tooltip) autour des pouces du curseur avec la valeur actuelle. Vous pouvez le définir sur `true` pour le comportement par défaut ou passer un objet pour le personnaliser avec n'importe quelle propriété du composant [tipTool]().

::component-code
---
Ignorer:
  - valeur défaillante
  @@ph054@tooltip
Props:
  Défaut: 50
  Tooltip: vrai
---
::

### désactivé

Utilisez la prop `disabled` pour désactiver le curseur.

::component-code
---
ignorer:
  - defaultValue
Props:
  handicapés: vrai
  Valeur défaillante: 50
---
::

### Résolu

Utilisez le prop `inverted` pour inverser visuellement le curseur.

::component-code
---
ignorer:
  @@ph060@@valeur défaillante
Props:
  Inversé: vrai
  Défauts: 25
---
::

@@ph061@@api

@@ph062@@props

Composants-props

### émissions

Composants émetteurs

@@ph064@thème

Composant-thème

@changelog @changelog

Composant-changelog
