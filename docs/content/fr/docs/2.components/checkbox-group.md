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


@@ph000@utilisation

Utilisez la directive `v-model` pour contrôler la valeur du CheckboxGroup ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
  @@ph004@articles
Extérieur:
  @@ph005@articles
  - modèleValeur
Props:
  Modélisation:
    - « Réseau »
  items:
    - « Réseau »
    - "éclairage"
    - "Désolé"
---
::

@111@111@1111

Utilisez le `items` prop comme un tableau de chaînes ou de nombres:

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
  @@ph014@articles
Extérieur:
  @@ph015@articles
  - modelValeur
Props:
  Modélisation:
    - « Réseau »
  items:
    - « Système »
    - 'Lumière '
    - « Sombre »
---
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
[`icon?: string`{lang="ts-type"}](#indicator)
@@
@@

::component-code
---
Ignorer:
  - modèleValeur
  @@ph051@articles
Extérieure:
  @@502@articles
  - modèleValeur
Extérieurs:
  - CheckboxGroupItem [réf. nécessaire]
Props:
  Modélisation:
    - 'système '
  items:
    - label:'Système'
      Description: 'Correspond aux paramètres de votre appareil.'
      Valeur: 'Système'
    - label:"Lumière"
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
  @@ph066@éléments
  - valueKey
Extérieur:
  @@ph068@articles
  - modèleValeur
Extérieurs:
  - CheckboxGroupItem [réf. nécessaire]
Props:
  Modèle:
    - 'éclairage '
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

@@75@Légende

Utilisez la prop `legend` pour définir la légende du groupe de contrôle.

::component-code
---
Étiquette: true
ignorer:
  - defaultValue
  @@ph078@articles
Extérieur:
  @@779@articles
Props:
  Légende:"Thème"
  Valeur défaillante:
    - « Système »
  items:
    - « Réseau »
    - "éclairage"
    - 'Noir '
---
::

### couleur

Utilisez la prop `color` pour changer la couleur du groupe de checkbox.

::component-code
---
Étiquette: true
Ignorer:
  - valeur défaillante
  @@ph087@articles
Extérieur:
  @@888@articles
items:
  Couleur:
    @@ph089@primaire
    @@ph090@secondaire
    - réussite
    @@ph092@info
    @@pH093@référencement
    @@F094@erreur
    @@ph095@neutre
Props:
  Couleur: Neutre
  Valeur défaillante:
    - « Système »
  items:
    - « Système »
    - 'Lumière '
    - "Désolé"
---
::

@@P100@@Variant

Utilisez la prop `variant` pour modifier la variante du groupe de contrôle.

::component-code
---
Étiquette: true
ignorer:
  - defaultValue
  @@ph103@articles
Extérieur:
  @@ph104@articles
Extérieurs:
  - CheckboxGroupItem [réf. nécessaire]
items:
  Couleur:
    @@ph106@primaire
    - secondaire
    @@808@réussite
    @@ph109@info
    @@ph110@avertissement
    @@ph111@erreur
    @@ph112@neutre
  Variante:
    @@ph113@liste
    @@ph114@carte
    @@P115@Télécharger
Props:
  Couleur: Primaire
  Variante: carte
  Valeur défaillante:
    - 'système '
  items:
    - label:'Système'
      Valeur: 'Système'
      Description: 'Correspond aux paramètres de votre appareil.'
    - label:« Lumière »
      Étiquette:'light'
      Description: "Utilisez toujours le thème de la lumière."
    - label:« Sombre »
      Catégorie:"Dark"
      Description: "Utilisez toujours le thème sombre."
---
::

@@ph120@size

Utilisez la prop `size` pour modifier la taille du groupe de checkboxs.

::component-code
---
Étiquette: true
ignorer:
  - valeur défaillante
  @@ph123@articles
Extérieure:
  @@ph124@articles
items:
  Variante:
    @@ph125@liste
    @@ph126@carte
    @@ph127@table
Props:
  Taille: "XL"
  Variante: « liste »
  Valeur défaillante:
    - « Système »
  items:
    - « Système »
    - 'Lumière '
    - « Noir »
---
::

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation de la CheckboxGroup. Defaults à `vertical`.

::component-code
---
Étiquette: true
Ignorer:
  - valeur défaillante
  @@ph136@articles
Extérieur:
  @@ph137@articles
items:
  Variante:
    @@ph138@liste
    @@ph139@carte
    - téléchargement
Props:
  Orientation: « horizontale »
  Variante: « liste »
  Valeur défaillante:
    - « Système »
  items:
    - « Système »
    - 'Lumière '
    - « Sombre »
---
::

### indicateur

Utilisez la prop `indicator` pour modifier la position ou masquer l'indicateur. Par défaut à `start`.

::note
Le `icon` d'un article remplace la coche lorsque l'indicateur est visible, et s'affiche au-dessus de l'étiquette lorsqu 'il est `hidden`.
::

::component-code
---
Étiquette: true
Ignorer:
  - valeur défaillante
  @@ph151@articles
Extérieure:
  @@ph152@@articles
Extérieurs:
  - CheckboxGroupItem [réf. nécessaire]
items:
  indicateur:
    @@ph154@départ
    @@ph155@fin
    @@ph156@cachée
  Variante:
    @@ph157@liste
    @@ph158@carte
    @@ph159@table
Props:
  Étiquette:"Hidden"
  Orientation: « horizontale »
  Variété:"table"
  Valeur défaillante:
    - « Système »
  items:
    - label:'Système'
      Icône: i-lucide-monitor
      Valeur: 'Système'
      Catégorie: W-20
    - label:« Lumière »
      Icône: i-lucide-sun
      Catégorie: W-20
      Catégorie:"Light"
    - label:« Sombre »
      Icône: i-lucide-moon
      Catégorie: W-20
      Catégorie:"Dark"
---
::

### désactivé

Utilisez la prop `disabled` pour désactiver le CheckboxGroup.

::component-code
---
Étiquette: true
ignorer:
  @@ph166@@valeur par défaut
  @@ph167@articles
Extérieur:
  @@ph168@articles
Props:
  handicapés: vrai
  Valeur défaillante:
    - « Système »
  items:
    - 'Système '
    - 'Lumière '
    - "Découverte"
---
::

@@ph173@api

@@ph174@@props

Composants-props

@@ph175@@réglages

Composants slots

@@ph176@@émissions

Composants émetteurs

@@ph177@thème

Composant-thème

@change178 @ changement

Composant-changelog
