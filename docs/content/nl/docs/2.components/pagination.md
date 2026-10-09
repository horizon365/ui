---
description: Een lijst met knoppen of links om door pagina 's te navigeren.
category: navigation
keywords:
  - pager
  - page navigation
links:
  - label: Paginatie
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pagination
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Pagination.vue
---

## Gebruik

Gebruik de `default-page` prop of de `v-model:page` richtlijn om de huidige pagina te besturen.

::component-code
---
external:
  - page
model:
  - page
ignore:
  - page
  - total
props:
  page: 5
  total: 100
---
::

::note
De Pagination-component gebruikt enkele [`Button`](/docs/components/button) om de pagina 's weer te geven, gebruik [`color`](#color), [`variant`](#variant) en [`size`](#size) rekwisieten om ze te stylen.
::

### Totaal

Gebruik de `total` prop om het totale aantal items in de lijst in te stellen.

::component-code
---
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
---
::

### Items per pagina

Gebruik de `items-per-page` prop om het aantal items per pagina in te stellen. Standaard `10`.

::component-code
---
ignore:
  - page
external:
  - page
model:
  - page
props:
  page: 5
  itemsPerPage: 20
  total: 100
---
::

### Aantal broers en zussen

Gebruik de `sibling-count`-prop om het aantal broers en zussen in te stellen dat moet worden weergegeven. Standaard `2`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  siblingCount: 1
  total: 100
---
::

### Randen tonen

Gebruik de `show-edges` prop om altijd de ellips, eerste en laatste pagina 's weer te geven. Standaard `false`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showEdges: true
  siblingCount: 1
  total: 100
---
::

### Besturing tonen

Gebruik de `show-controls` prop om de eerste, vorige, volgende en laatste knoppen weer te geven. Standaard `true`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showControls: false
  showEdges: true
  total: 100
---
::

### Kleur

Gebruik de `color` prop om de kleur van de inactieve besturingselementen in te stellen. Standaard ingesteld op `neutral`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  color: primary
  total: 100
---
::

### Variant

Gebruik de `variant` prop om de variant van de inactieve besturingselementen in te stellen. Standaard ingesteld op `outline`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  color: neutral
  variant: subtle
  total: 100
---
::

### Actieve Kleur

Gebruik de `active-color` prop om de kleur van het actieve besturingselement in te stellen. Standaard ingesteld op `primary`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  activeColor: neutral
  total: 100
---
::

### Actieve Variant

Gebruik de `active-variant` prop om de variant van het actieve besturingselement in te stellen. Standaard ingesteld op `solid`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  activeColor: primary
  activeVariant: subtle
  total: 100
---
::

### Grootte

Gebruik de `size`-prop om de grootte van de bedieningselementen in te stellen. Standaard ingesteld op `md`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  page: 5
  size: xl
  total: 100
---
::

### Uitgeschakeld

Gebruik de `disabled` prop om de paginatieknoppen uit te schakelen.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
  disabled: true
---
::

## Voorbeelden

### Met links

Gebruik de `to`-prop om knoppen om te zetten in links. Geef een functie door die het paginanummer ontvangt en een routebestemming retourneert.

::component-example
---
name: 'pagination-links-example'
---
::

::note
In dit voorbeeld voegen we de `#with-links`-hash toe om te voorkomen dat we naar de bovenkant van de pagina gaan.
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Changelog

:component-changelog
