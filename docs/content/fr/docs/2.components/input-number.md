---
title: Inputnuméro
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

@@ph000@@utilisation

Utilisez la directive `v-model` pour contrôler la valeur de l'InputNumber.

::component-code
---
Ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  Modèle: 5
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
ignorer:
  @@@ph005@@defaultValue
Props:
  Défaut: 5
---
::

::note
Ce composant s'appuie sur le paquet `@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html) qui fournit des utilitaires pour le formatage et l'analyse des numéros à travers les régions locales et les systèmes de numérotation.
::

@ Min/Max

Utilisez les accessoires `min` et `max` pour définir les valeurs minimales et maximales du Numéro d'entrée.

::component-code
---
Ignorer:
  - modelValeur
Extérieure:
  - modèleValeur
Props:
  Modèle: 5
  min: 0 à
  Max: 10 à
---
::

@@ph016@étape

Utilisez la prop `step` pour définir la valeur de pas du numéro d'entrée.

::component-code
---
ignorer:
  - modelValeur
Extérieur:
  - modèleValeur
Props:
  Modèle: 5
  Étape: 2
---
::

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation du numéro d'entrée.

::component-code
---
ignorer:
  - modèleValeur
Extérieure:
  - modelValeur
Props:
  Modèle: 5
  Orientation: verticale
---
::

@24@@Placeholder

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
Props:
  placeholder: "Entrez un numéro"
---
::

@@26@couleur

Utilisez la prop `color` pour changer la couleur de l'anneau lorsque le numéro d'entrée est focalisé.

::component-code
---
Ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  Modèle: 5
  Couleur: Neutre
  Highlights: vrai
---
::

### Variant

Utilisez la prop `variant` pour modifier la variante du numéro d'entrée.

::component-code
---
ignorer:
  - modèleValeur
Extérieur:
  - modelValeur
Props:
  Modèle: 5
  Variante: subtile
  Couleur: Neutre
  Étiquette: false
---
::

@@ph034@@Size

Utilisez la prop `size` pour modifier la taille du numéro d'entrée.

::component-code
---
ignorer:
  - modelValeur
Extérieure:
  - modelValeur
Props:
  Modèle: 5
  Taille: XL
---
::

### désactivé

Utilisez la prop `disabled` pour désactiver le numéro d'entrée.

::component-code
---
Ignorer:
  - modèleValeur
Extérieure:
  - modèleValeur
Props:
  Modèle: 5
  handicapés: vrai
---
::

### incrément/décrémenter

Utilisez les accessoires `increment` et `decrement` pour personnaliser les boutons d'incrémentation et de décrémentation avec n'importe quel accessoire [Button](/docs/components/button).

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
  - incrément.size
  - increment.color
  - incrément.variant
  - decrement.size
  - decrement.color
  - decrement.variant
Extérieure:
  - modèleValeur
Props:
  Modèle: 5
  Accroissement:
    Couleur: Neutre
    Variante: solide
    Taille: XS
  décrété:
    Couleur: Neutre
    Variante: solide
    Taille: XS
---
::

### Icônes d'incrément/décrément

Utilisez les accessoires `increment-icon` et `decrement-icon` pour personnaliser les boutons [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  Modèle: 5
  Icône:'i-lucide-arrow-right'
  Icône: i-lucide-arrow-left
---
::

@@ph070@exemples

### Avec format décimal

Utilisez la prop `format-options` pour personnaliser le format de la valeur.

::component-example
---
name: 'input-number-decimal-exemple'
---
::

### Avec format de pourcentage

Utilisez la prop `format-options` avec `style: 'percent'` pour personnaliser le format de la valeur.

::component-example
---
name: 'input-number-pourcentage-exemple'
---
::

### Avec format de devise

Utilisez la prop `format-options` avec `style: 'currency'` pour personnaliser le format de la valeur.

::component-example
---
name: 'input-number-currency-exemple'
---
::

### Sans boutons

Vous pouvez utiliser les props `increment` et `decrement` pour contrôler la visibilité des boutons.

::component-example
---
name: 'input-number-without-buttons-exemple'
---
::

### Dans un champ de formulaire

Vous pouvez utiliser le numéro d'entrée dans un composant [FormField](/docs/components/form-field) pour afficher une étiquette, un texte d'aide, un indicateur requis, etc.

::component-example
---
name: 'entrée-numéro-form-champ-exemple'
---
::

### Avec slots

Utilisez les emplacements `#increment` et `#decrement` pour personnaliser les boutons.

::component-example
---
nom: 'input-number-slots-exemple'
---
::

@@P090@@écrivain

@@ph091@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<input>`.
::

### Slots

Composants slots

### émissions

Composants émetteurs

@@ph095@@exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|

@@ph100@thème

Composant-thème

@changelog 101

Composant-changelog
