---
description: Un texte court pour représenter un statut ou une catégorie.
category: element
keywords:
  - tag
  - pill
  - label
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Badge.vue
---

@@ph000@utilisation

Utilisez l'emplacement par défaut pour définir l'étiquette du badge.

::component-code
---
Slots:
  Défaut: Badge
---
::

@@ph001@étiquette

Utilisez la prop `label` pour définir l'étiquette du badge.

::component-code
---
Props:
  Étiquette: badge
---
::

@@pH003@couleur

Utilisez le prop `color` pour changer la couleur de l'insigne.

::component-code
---
Props:
  Couleur: Neutre
Slots:
  Défaut: Badge
---
::

@@005@@Variant

Utilisez les accessoires `variant` pour modifier la variante du badge.

::component-code
---
Props:
  Couleur: Neutre
  Étiquette: Outline
Slots:
  Défaut: Badge
---
::

@@ph007@série

Utilisez la prop `size` pour modifier la taille de l'insigne.

::component-code
---
Props:
  Taille: XL
Slots:
  Défaut: Badge
---
::

@@ph009@icône

Utilisez le prop `icon` pour afficher une [Icon](/docs/components/icon) à l'intérieur du badge.

::component-code
---
Props:
  Étiquette: i-lucide-rocket
  Taille: MD
  Couleur: Primaire
  Variante: solide
Slots:
  Défaut: Badge
---
::

Utilisez les accessoires `leading` et `trailing` pour définir la position de l'icône ou les accessoires `leading-icon` et `trailing-icon` pour définir une icône différente pour chaque position.

::component-code
---
Props:
  Icône: i-lucide-arrow-right
  Étiquette: MD
Slots:
  Défaut: Badge
---
::

@19@avatar

Utilisez le prop `avatar` pour montrer un [Avatar](/docs/components/avatar) à l'intérieur du badge.

::component-code
---
Étiquette: true
ignorer:
  - avatar.chargement
Props:
  Avatar:
    src: 'https://github.com/nuxt.png'
    Étiquette: Lazy
  Étiquette: MD
  Couleur: Neutre
  Étiquette: Outline
Slots:
  Défaut:|

    badge à
---
::

@@ph026@exemples

@@

Utilisez la prop `class` pour remplacer les styles de base du badge.

::component-code
---
Props:
  classe: 'font-bold rounded-full'
Slots:
  Défaut: Badge
---
::

@@ph030@@api

@@ph031@@props

Composants-props

@@ph032@@réglages

Composants slots

@@ph033@thème

Composant-thème

@changelog @changelog

Composant-changelog
