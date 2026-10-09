---
description: Een korte tekst om een status of een categorie weer te geven.
category: element
keywords:
  - tag
  - pill
  - label
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Badge.vue
---

## Gebruik

Gebruik de standaardsleuf om het label van de badge in te stellen.

::component-code
---
slots:
  default: Badge
---
::

### Label

Gebruik de `label` prop om het label van de Badge in te stellen.

::component-code
---
props:
  label: Badge
---
::

### Kleur

Gebruik de `color` prop om de kleur van de Badge te veranderen.

::component-code
---
props:
  color: neutral
slots:
  default: Badge
---
::

### Variant

Gebruik de `variant` rekwisieten om de variant van de Badge te wijzigen.

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Badge
---
::

### Grootte

Gebruik de `size` prop om de grootte van de Badge te wijzigen.

::component-code
---
props:
  size: xl
slots:
  default: Badge
---
::

### Icoon

Gebruik de `icon` prop om een [Icon](/docs/components/icon) in de Badge te tonen.

::component-code
---
props:
  icon: i-lucide-rocket
  size: md
  color: primary
  variant: solid
slots:
  default: Badge
---
::

Gebruik de `leading` en `trailing` rekwisieten om de pictogrampositie in te stellen of de `leading-icon` en `trailing-icon` rekwisieten om voor elke positie een ander pictogram in te stellen.

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Badge
---
::

### Avatar [bewerken]

Gebruik de `avatar` prop om een [Avatar](/docs/components/avatar) in de Badge te tonen.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
slots:
  default: |

    Badge
---
::

## Voorbeelden

### `class` voorschot

Gebruik de `class` prop om de basisstijlen van de Badge te overschrijven.

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Badge
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
