---
title: PageGrid
description: 'Un système de grille réactif pour afficher le contenu dans une mise en page flexible.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageGrid.vue
---

## Utilisation

Le composant PageGrid fournit une disposition de grille réactive pour afficher les composants [PageCard](xph003) ou tout autre élément, en ajustant automatiquement de 1 à 3 colonnes en fonction de la taille de l'écran.

::component-example
---
name: 'page-grid-example'
class: 'p-8'
---
::

Vous pouvez également l'utiliser pour afficher une liste de cartes dans une disposition de style bento en utilisant les classes d'utilitaires `col-span-*` et `row-span-*`.

::component-example
---
collapse: true
name: 'page-grid-bento-example'
class: 'p-8'
---
::

## api

### Props

:component-props

### Slots électronique

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
