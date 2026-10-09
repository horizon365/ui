---
description: Scheidt inhoud horizontaal of verticaal.
category: element
keywords:
  - divider
  - hr
  - horizontal rule
links:
  - label: Afscheider
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Separator.vue
---

## Gebruik

Gebruik de Separator-component zoals deze is om inhoud te scheiden.

::component-code
---
class: 'p-8'
---
::

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van de Separator te wijzigen. Standaard `horizontal`.

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  orientation: vertical
  class: 'h-48'
---
::

### Label

Gebruik de `label` prop om een label in het midden van de Separator weer te geven.

::component-code
---
class: 'p-8'
props:
  label: 'Hello World'
---
::

### Positie: badge{label="4.8+" class="align-text-top"}

Gebruik de `position` prop om de positie van de inhoud van de Separator te wijzigen. Standaard is `center`.

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  position: start
  label: 'Hello World'
---
::

### Icoon

Gebruik de `icon` prop om een pictogram in het midden van de Separator weer te geven.

::component-code
---
class: 'p-8'
props:
  icon: 'i-simple-icons-nuxtdotjs'
---
::

### Avatar [bewerken]

Gebruik de `avatar` prop om een avatar in het midden van de Separator weer te geven.

::component-code
---
prettier: true
class: 'p-8'
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
---
::

### Kleur

Gebruik de `color` prop om de kleur van de Separator te wijzigen. Standaard `neutral`.

::component-code
---
class: 'p-8'
props:
  color: primary
  type: solid
---
::

### Type

Gebruik de `type` prop om het type van de Separator te wijzigen. Standaard `solid`.

::component-code
---
class: 'p-8'
props:
  type: dashed
---
::

### Grootte

Gebruik de `size` prop om de grootte van de Separator te wijzigen. Standaard `xs`.

::component-code
---
class: 'p-8'
props:
  size: lg
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
