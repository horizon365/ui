---
title: PageLogos
description: 'Une liste de logos ou d'images à afficher sur vos pages.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

## Utilisation

Le composant PageLogos fournit un moyen flexible d'afficher une liste de logos ou d'images dans vos pages.

::component-code
---
collapse: true
prettier: true
hide:
  - class
ignore:
  - items
props:
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'mb-10'
---
::

### Titre

Utilisez le prop `title` pour placer le titre au-dessus des logos.

::component-code
---
prettier: true
ignore:
  - items
hide:
  - class
props:
  title: 'Trusted by the best front-end teams'
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'my-10'
---
::

### Éléments

Vous pouvez afficher les logos de deux manières:

1. Utiliser la prop `items` pour fournir une liste de logos. Chaque élément peut être:
  - Un nom d'icône (par exemple, `i-simple-icons-github`)
  - Un objet contenant les propriétés `src` et `alt` pour les images, qui sera utilisé dans un composant `UAvatar`
2. Utiliser l'emplacement par défaut pour avoir un contrôle complet sur le contenu

::tabs{class="gap-0"}

::component-example{label="Avec items"}
---
name: 'page-logos-with-items'
class: '[&>div]:my-10'
---
::

::component-example{label="Avec slot"}
---
name: 'page-logos-with-slot'
class: '[&>div]:my-10'
---
::

::

### marqueur

Utilisez le prop `marquee` pour activer un effet de marquise pour les logos.

::component-code
---
prettier: true
ignore:
  - items
  - marquee
hide:
  - class
props:
  title: 'Trusted by the best front-end teams'
  marquee: true
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'my-10'
---
::

::note{to="/docs/components/marquee"}
Lorsque vous utilisez le mode `marquee`, vous pouvez personnaliser son comportement en passant des props. Pour plus d'informations, consultez le composant `Marquee`.
::

## API

### Props équipement

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
