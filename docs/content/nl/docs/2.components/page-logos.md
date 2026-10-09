---
title: PaginaLogos
description: 'Een lijst met logo 's of afbeeldingen die op uw pagina 's moeten worden weergegeven.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

## Gebruik

Het PageLogos-onderdeel biedt een flexibele manier om een lijst met logo 's of afbeeldingen op uw pagina 's weer te geven.

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

### Titel

Gebruik de `title` prop om de titel boven de logo 's in te stellen.

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

### Items

U kunt logo 's op twee manieren weergeven:

1. De `items` prop gebruiken om een lijst met logo 's te geven. Elk item kan zijn:
- Een pictogramnaam (bijv. `i-simple-icons-github`)
- Een object met `src` en `alt` eigenschappen voor afbeeldingen, dat zal worden gebruikt in een `UAvatar` component
2. Het standaard slot gebruiken om volledige controle over de inhoud te hebben

::tabs{class="gap-0"}

::component-example{label="Met items"}
---
name: 'page-logos-with-items'
class: '[&>div]:my-10'
---
::

::component-example{label="Met slot"}
---
name: 'page-logos-with-slot'
class: '[&>div]:my-10'
---
::

::

### Marquee

Gebruik de `marquee`-prop om een selectiekader voor de logo 's in te schakelen.

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
Wanneer u de `marquee`-modus gebruikt, kunt u het gedrag aanpassen door rekwisieten door te geven. Bekijk voor meer informatie de `Marquee`-component.
::

## API

### Voordelen

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
