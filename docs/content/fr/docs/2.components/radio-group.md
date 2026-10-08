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

@@ph000@@utilisation

Utilisez la directive `v-model` pour contrôler la valeur du RadioGroup ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
  @@ph004@articles
Extérieur:
  @@ph005@articles
  - modèleValeur
Props:
  Modèle:'Système'
  items:
    - « Réseau »
    - "éclairage"
    - "Désolé"
---
::

@@ph010@articles

Utilisez le `items` prop comme un tableau de chaînes ou de nombres:

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
  @@ph013@articles
Extérieure:
  @@ph014@articles
  - modèleValeur
Props:
  Modèle:'Système'
  items:
    - « Réseau »
    - "Lumière"
    - "Désolé"
---
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
@@
@@

::component-code
---
ignorer:
  - modèle Valeur
  @@ph049@articles
Extérieur:
  @@ph050@articles
  - modèleValeur
Extérieurs:
  - RadioGroupItem [réf. nécessaire]
Props:
  Modèle:'Système'
  items:
    - label:'Système'
      Description: "Correspond aux paramètres de votre appareil."
      Valeur: 'Système'
    - label:« Lumière »
      Description: "Utilisez toujours le thème de la lumière."
      Étiquette:'light'
    - label:« Sombre »
      Description: "Utilisez toujours le thème sombre."
      Catégorie:"Dark"
---
::

::caution
Lorsque vous utilisez des objets, vous devez faire référence à la propriété `value` de l'objet dans la directive `v-model` ou dans la propriété `default-value`.
::

### Clé de valeur

Vous pouvez modifier la propriété utilisée pour définir la valeur en utilisant la propriété `value-key`.

::component-code
---
ignorer:
  - modèleValeur
  @@ph063@articles
  - valueKey
Extérieure:
  @@ph065@articles
  - modèleValeur
Extérieurs:
  - RadioGroupItem [réf. nécessaire]
Props:
  Modèle:'Light'
  valueKey: 'id'
  items:
    - label:'Système'
      Description: 'Correspond aux paramètres de votre appareil.'
      ID: « Système »
    - label:« Lumière »
      Description: "Utilisez toujours le thème de la lumière."
      Étiquette:"light"
    - label:« Sombre »
      Description: "Toujours utiliser le thème sombre."
      Étiquette:"Dark"
---
::

@@ph071@Légende

Utilisez la prop `legend` pour définir la légende du groupe radio.

::component-code
---
Étiquette: true
Ignorer:
  - defaultValue
  @@ph074@articles
Extérieure:
  @@75@éléments
Props:
  Légende:"Thème"
  valeur: 'Système'
  items:
    - « Système »
    - 'Lumière '
    - "Désolé"
---
::

@@79@couleur

Utilisez la prop `color` pour changer la couleur du groupe radio.

::component-code
---
Étiquette: true
Ignorer:
  - defaultValue
  @@ph082@articles
Extérieur:
  @@ph083@articles
Props:
  Couleur: Neutre
  valeur: 'Système'
  items:
    - « Système »
    - "Lumière"
    - "Désolé"
---
::

@@ph087@@Variant

Utilisez la prop `variant` pour modifier la variante du groupe radio.

::component-code
---
Étiquette: true
ignorer:
  - defaultValue
  @@ph090@articles
Extérieure:
  @@ph091@articles
Extérieurs:
  - RadioGroupItem [réf. nécessaire]
Props:
  Couleur: Primaire
  Variante: carte
  valeur: 'système'
  items:
    - label:'Système'
      Valeur: 'Système'
      Description: "Correspond aux paramètres de votre appareil."
    - label:"Lumière"
      Étiquette:'light'
      Description: "Utilisez toujours le thème de la lumière."
    - label:« Sombre »
      Catégorie:"Dark"
      Description: "Utilisez toujours le thème sombre."
---
::

@@ph096@série

Utilisez la prop `size` pour modifier la taille du groupe radio.

::component-code
---
Étiquette: true
Ignorer:
  - defaultValue
  @099@articles
Extérieure:
  @@ph100@éléments
Props:
  Taille: "XL"
  Variante: « liste »
  valeur: 'Système'
  items:
    - « Système »
    - 'Lumière '
    - « Noir »
---
::

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation du RadioGroup. Defaults à `vertical`.

::component-code
---
Étiquette: true
Ignorer:
  - defaultValue
  @@ph108@articles
Extérieur:
  @@ph109@articles
Props:
  Orientation: « horizontale »
  Variante: « liste »
  valeur: 'Système'
  items:
    - « Système »
    - 'Lumière '
    - "Découverte"
---
::

### indicateur

Utilisez la prop `indicator` pour modifier la position ou masquer l'indicateur. Par défaut à `start`.

::note
Le `icon` d'un article n'est affiché que lorsque le `indicator` est `hidden`, au-dessus de l'étiquette, car une radio n'a pas d'icône à l'intérieur de son indicateur.
::

::component-code
---
Étiquette: true
Ignorer:
  @@ph119@@defaultValue
  @@ph120@articles
Extérieure:
  @@ph121@articles
Extérieurs:
  - RadioGroupItem [réf. nécessaire]
items:
  indicateur:
    @@ph123@départ
    @@ph124@fin
    @@P125 @ réservé
  Variante:
    @@ph126@liste
    @@ph127@carte
    @@ph128@table
Props:
  Référence:"Hidden"
  Orientation: « horizontale »
  Variété:"table"
  valeur: 'Système'
  items:
    - label:'Système'
      Icône: i-lucide-monitor
      Valeur: 'Système'
      Catégorie: W-20
    - label:« Lumière »
      Icône: i-lucide-sun
      Catégorie:"Light"
      Catégorie: W-20
    - label:« Sombre »
      Icône: i-lucide-moon
      Catégorie:"Dark"
      Catégorie: W-20
---
::

### désactivé

Utilisez la prop `disabled` pour désactiver le groupe radio.

::component-code
---
Étiquette: true
ignorer:
  - valeur défaillante
  @@ph135@articles
Extérieure:
  @@ph136@articles
Props:
  handicapés: vrai
  valeur: 'Système'
  items:
    - « Système »
    - 'Lumière '
    - « Noir »
---
::

@@ph140@api

@141@141@141

Composants-props

@@ph142@@réglages

Composants slots

### émissions

Composants émetteurs

@@ph144@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
