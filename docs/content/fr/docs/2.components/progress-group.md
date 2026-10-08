---
title: Progresseur
description: Une barre de progression divisée en plusieurs segments qui s'additionnent pour un total.
category: element
navigation.badge: New
keywords:
  - meter
  - meter group
  - segmented progress
  - stacked bar
  - breakdown
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ProgressGroup.vue
---

@@ph000@utilisation

Utilisez le composant ProgressGroup pour afficher plusieurs valeurs sous forme de segments d'une seule barre de progression.

::component-code
---
Collapse: vrai
Ignorer:
  @@ph001@articles
  @@ph002@max
  @@ph003@classe
Extérieur:
  @@ph004@articles
Extérieurs:
  - ProgressGroupItem [réf. nécessaire]
Props:
  Étiquette: 128
  items:
    - label:"Système"
      Valeur: 24
      Couleur: "Neutre"
      Icône: i-lucide-cog
    - label:« Applications »
      Valeurs: 8
      Couleur: "Erreur"
      icon: 'i-lucide-app-window'
    - label:« Documents »
      Valeurs: 12
      Couleur: "Avertissement"
      icon: 'i-lucide-file'
    - label:'Multimédia'
      Valeur: 42
      Couleur: "Succès"
      icon: 'i-lucide-film'
  Catégorie: W-96
---
::

@@ph010@articles

Utilisez le `items` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
@@
@@

::component-code
---
Collapse: vrai
ignorer:
  @@ph037@articles
  @@ph038@classe
Extérieure:
  @@ph039@articles
Extérieurs:
  - ProgressGroupItem [réf. nécessaire]
Props:
  items:
    - label:"Découverte"
      Valeur: 42
      Couleur: Primaire
    - label:'Stockage'
      Valeurs: 18
      Couleur: "info"
    - label:"bande passante"
      Valeur: 9
      Couleur: "Avertissement"
  Catégorie: W-96
---
::

::note
Les éléments sans `icon` obtiennent un point coloré dans la liste à la place.
::

@@pH045@@max

Utilisez la prop `max` pour définir la valeur à laquelle tous les éléments s'ajoutent. Defaults à `100`.

::component-code
---
Collapse: vrai
Ignorer:
  @@ph048@articles
  @@ph049@classe
Extérieure:
  @@ph050@articles
Extérieurs:
  - ProgressGroupItem [réf. nécessaire]
Props:
  Étiquette: 512
  items:
    - label:"Utilisé"
      Valeur: 128
      Couleur: Primaire
    - label:'Réservé'
      Valeur: 64
      Couleur: "Neutre"
  Catégorie: W-96
---
::

::note
Les valeurs sont serrées entre `0` et `max`, et les segments qui s'additionnent à plus de `max` partagent la piste proportionnellement.
::

@@ph057@statut

Utilisez la prop `status` pour afficher la valeur sommée au-dessus de la barre.

::component-code
---
Collapse: vrai
Ignorer:
  @@59@@éléments
  @@ph060@classe
Extérieur:
  @@ph061@articles
Extérieurs:
  - ProgressGroupItem [réf. nécessaire]
Props:
  Statut: vrai
  Étiquette: 128
  items:
    - label:'Système'
      Valeur: 24
      Couleur: "Neutre"
    - label:« Applications »
      Valeur: 8
      Couleur: "erreur"
    - label:'Multimédia'
      Valeur: 42
      Couleur: "Succès"
  Catégorie: W-96
---
::

::tip
Le statut suit la fin de la barre, utilisez `:ui="{ status: 'w-full' }"` pour lui faire couvrir toute la largeur à la place.
::

@@pH067@couleur

Utilisez la prop `color` pour modifier la couleur de chaque segment qui n'est pas le sien.

::component-code
---
Collapse: vrai
Ignorer:
  @@ph069@articles
  @@ph070@classe
Extérieure:
  @@ph071@articles
Extérieurs:
  - ProgressGroupItem [réf. nécessaire]
Props:
  Couleur: Neutre
  items:
    - label:« Lire »
      Valeur: 42
    - label:« Écrire »
      Valeurs: 18
  Catégorie: W-96
---
::

::tip
Cet accessoire et le `color` de chaque élément acceptent toutes les valeurs de couleur CSS, ce qui est pratique pour les palettes en dehors du thème.
::

@766@série

Utilisez la prop `size` pour modifier la taille du ProgressGroup.

::component-code
---
Collapse: vrai
Ignorer:
  @@ph078@articles
  @@ph079@classe
Extérieur:
  @@ph080@articles
Extérieurs:
  - ProgressGroupItem [réf. nécessaire]
Props:
  Taille: XL
  items:
    - label:« Lire »
      Valeur: 42
      Couleur: Primaire
    - label:« Écrire »
      Valeurs: 18
      Couleur: "info"
  Catégorie: W-96
---
::

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation du ProgressGroup. Defaults à `horizontal`.

::component-code
---
Collapse: vrai
Ignorer:
  @@ph087@articles
  @@ph088@classe
Extérieure:
  @@ph089@articles
Extérieurs:
  - ProgressGroupItem [réf. nécessaire]
Props:
  Orientation: verticale
  items:
    - label:« Lire »
      Valeur: 42
      Couleur: Primaire
    - label:« Écrire »
      Valeurs: 18
      Couleur: "info"
  Catégorie: H-48
---
::

@@ph093@exemples

### Avec emplacement de statut

Utilisez l'emplacement `#status` pour remplacer le pourcentage additionné par votre propre contenu.

::component-example
---
Collapse: vrai
nom: progress-groupe-statut-exemple
---
::

### Avec emplacements d'éléments

Utilisez les emplacements `#item-label` et `#item-trailing` pour modifier ce que chaque entrée affiche. Les deux reçoivent le `item`, son `index` et son `percent`.

::component-example
---
Collapse: vrai
nom: progress-groupe-item-exemple
---
::

### Avec couleurs personnalisées

Donnez à chaque élément une couleur CSS pour créer une ventilation en dehors de la palette de thèmes.

::component-example
---
Collapse: vrai
nom: progress-group-custom-color-example
---
::

@@pha103 @

@@ph104@@props

Composants-props

### Slots

Composants slots

@@ph106@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
