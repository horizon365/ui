---
description: 'Afficher les informations de l'utilisateur avec le nom, la description et l'avatar.'
category: data
keywords:
  - profile
  - person
  - account
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/User.vue
---

@@ph000@utilisation

@@ph001@prénom

Utilisez la prop `name` pour afficher un nom pour l'utilisateur.

::component-code
---
Props:
  Prénom: John Doe
---
::

@@ph003@Description

Utilisez la prop `description` pour afficher une description pour l'utilisateur.

::component-code
---
Props:
  Prénom: John Doe
  Description: 'Ingénieur logiciel'
---
::

### Avatar

Utilisez la prop `avatar` pour afficher un composant [Avatar](/docs/components/avatar).

::component-code
---
Étiquette: true
ignorer:
  @@ph011@prénom
  @@ph012@description
Props:
  Prénom: John Doe
  Description: 'Ingénieur logiciel'
  Avatar:
    src: 'https://i.pravatar.cc/150?u=john-doe'
    Étiquette: Lazy
    icon: i-lucide-image
---
::

::collapsible{name="all avatar properties"}

::component-props
---
Prénom: Avatar
Ignorer:
  @@ph013@size
  @@ph014 @
---
::

::

@@ph015@ph015

Utilisez le prop `chip` pour afficher un composant [Chip](/docs/components/chip).

::component-code
---
Étiquette: true
ignorer:
  @@ph021@prénom
  @@ph022@description
  - avatar.src
items:
  chip.color:
    @@ph024@primaire
    @@25@secondaire
    @@26@réussite
    @@27@info
    @@28@avertissement
    @@29@erreur
    @@ph030@neutre
  chip.position:
    -  haut à gauche
    -  en haut à droite
    -  en bas à gauche
    -  en bas à droite
Props:
  Prénom: John Doe
  Description: 'Ingénieur logiciel'
  avatar. src: 'https://i.pravatar.cc/150?u=john-doe'
  Chipé:
    Couleur: Primaire
    Position: top-droite
---
::

::collapsible{name="all chip properties"}

::component-props
---
Prénom: Chip
Ignorer:
  @@ph035
  @@ph036@size
  @@ph037@autonome
---
::

::

@@ph038@@Size

Utilisez la prop `size` pour modifier la taille de l'avatar de l'utilisateur et du texte.

::component-code
---
Étiquette: true
Ignorer:
  @@ph040@prénom
  @@ph041@description
  - avatar.src
  @@pH043@pH043@pH043@pH043@pH043@pH043@pH0443@pH0443@pH0443pH00pH00pH00pH00pH00pH00pH00pH00pH000pH00pH00pH000pH00pH00pH00pH00pH000pH000pH0pH00phéhéhénomèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèè
Props:
  Prénom: John Doe
  Description: "Ingénieur logiciel"
  avatar. src: 'https://i.pravatar.cc/150?u=john-doe'
  Chip: vrai
  Taille: XL
---
::

### Référencement

Utilisez la prop `orientation` pour changer l'orientation. Par défaut à `horizontal`.

::component-code
---
Étiquette: true
Ignorer:
  - avatar.src
Props:
  Orientation: "Vertical"
  Prénom: John Doe
  Description: "Ingénieur logiciel"
  avatar. src: 'https://i.pravatar.cc/150?u=john-doe'
---
::

@@ph048@lien

Vous pouvez passer n'importe quelle propriété du composant [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) comme `to`,`target`,`rel`, etc.

::component-code
---
Étiquette: true
ignorer:
  @@ph057@prénom
  @@ph058@description
  - avatar.src
  @@ph060@cible
Props:
  à:'https://github.com/benjamincanac'
  cible: _blanc
  Prénom: Benjamin Canac
  Description: 'Ingénieur logiciel'
  avatar. src: 'https://github.com/benjamincanac.png'
---
::

::note
Le composant `NuxtLink` héritera de tous les autres attributs que vous passez au composant `User`.
::

@@ph063@@api

@@ph064@@props

Composants-props

### série

Composants slots

@@ph066@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
