---
description: Sépare le contenu horizontalement ou verticalement.
category: element
keywords:
  - divider
  - hr
  - horizontal rule
links:
  - label: séparateur
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Separator.vue
---

@@ph000@utilisation

Utilisez le composant Separator tel quel pour séparer le contenu.

::component-code
---
Catégorie: P-8
---
::

@@ph001@@référencement

Utilisez la prop `orientation` pour changer l'orientation du séparateur. Defaults à `horizontal`.

::component-code
---
ignorer:
  @@ph004@classe
Catégorie: P-8
Props:
  Orientation: verticale
  Catégorie: H-48
---
::

@@ph005@étiquette

Utilisez la prop `label` pour afficher une étiquette au milieu du séparateur.

::component-code
---
Catégorie: P-8
Props:
  Étiquette: Hello World
---
::

### Position: badge{label="4.8+" class="align-text-top"}

Utilisez la prop `position` pour changer la position du contenu du séparateur. Defaults à `center`.

::component-code
---
ignorer:
  @@classe 11
Catégorie: P-8
Props:
  Position: départ
  Étiquette: Hello World
---
::

@@ph012 @ Icon

Utilisez la prop `icon` pour afficher une icône au milieu du séparateur.

::component-code
---
Catégorie: P-8
Props:
  icon: 'i-simple-icons-nuxtdotjs'
---
::

@14@avatar

Utilisez le prop `avatar` pour afficher un avatar au milieu du Séparateur.

::component-code
---
Étiquette: true
Catégorie: P-8
Ignorer:
  - avatar.chargement
Props:
  Avatar:
    src: 'https://github.com/nuxt.png'
    Étiquette: Lazy
---
::

### couleur

Utilisez la prop `color` pour changer la couleur du Séparateur. Par défaut à `neutral`.

::component-code
---
Catégorie: P-8
Props:
  Couleur: Primaire
  Type: Solide
---
::

@@ph020@type

Utilisez la prop `type` pour changer le type du Séparateur. Defaults à `solid`.

::component-code
---
Catégorie: P-8
Props:
  Catégorie: Fretted
---
::

@@223@@Size

Utilisez la prop `size` pour modifier la taille du Séparateur. Defaults à `xs`.

::component-code
---
Catégorie: P-8
Props:
  Taille: LG
---
::

@@226@api

@27@@Projets

Composants-props

@@28@@séries

Composants slots

@29@thème

Composant-thème

@changelog @changelog

Composant-changelog
