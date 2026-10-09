---
title: PaginaLijst
description: 'Een verticale lijstlay-out voor het weergeven van inhoud in een gestapeld formaat.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageList.vue
---

## Gebruik

De PageList-component biedt een flexibele manier om inhoud weer te geven in een verticale lijstindeling.
Het is perfect voor het maken van gestapelde lijsten met [PageCard](/docs/components/page-card) componenten of andere elementen, met optionele verdelers tussen items.

::component-example
---
collapse: true
name: 'page-list-example'
props:
  class: 'w-full'
---
::

### Verdelen

Gebruik de `divide` prop om een scheidingslijn toe te voegen tussen elk onderliggende element.

::component-example
---
collapse: true
name: 'page-list-divide-example'
props:
  class: 'w-full'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Changelog

:component-changelog
