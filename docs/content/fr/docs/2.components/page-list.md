---
title: PageLire
description: 'Une disposition de liste verticale pour afficher du contenu dans un format empilé.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageList.vue
---

## Utilisation

Il est parfait pour créer des listes empilées de composants [PageCard](/docs/components/page-card) ou de tout autre élément, avec des séparateurs facultatifs entre les éléments.

::component-example
---
collapse: true
name: 'page-list-example'
props:
  class: 'w-full'
---
::

### Séparation

Utilisez le prop `divide` pour ajouter un diviseur entre chaque élément enfant.

::component-example
---
collapse: true
name: 'page-list-divide-example'
props:
  class: 'w-full'
---
::

## api

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## changelog

:component-changelog
