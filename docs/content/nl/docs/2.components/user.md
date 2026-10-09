---
description: 'Geef gebruikersinformatie weer met naam, beschrijving en avatar.'
category: data
keywords:
  - profile
  - person
  - account
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/User.vue
---

## Gebruik

### Naam

Gebruik de `name` prop om een naam voor de gebruiker weer te geven.

::component-code
---
props:
  name: 'John Doe'
---
::

### Beschrijving

Gebruik de `description` prop om een beschrijving voor de gebruiker weer te geven.

::component-code
---
props:
  name: 'John Doe'
  description: 'Software Engineer'
---
::

### Avatar [bewerken]

Gebruik de `avatar` prop om een [Avatar](/docs/components/avatar) weer te geven.

::component-code
---
prettier: true
ignore:
  - name
  - description
props:
  name: 'John Doe'
  description: 'Software Engineer'
  avatar:
    src: 'https://i.pravatar.cc/150?u=john-doe'
    loading: lazy
    icon: i-lucide-image
---
::

::collapsible{name="all avatar properties"}

::component-props
---
name: Avatar
ignore:
  - size
  - as
---
::

::

### Spaander

Gebruik de `chip` prop om een [Chip](/docs/components/chip) weer te geven.

::component-code
---
prettier: true
ignore:
  - name
  - description
  - avatar.src
items:
  chip.color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  chip.position:
    - top-left
    - top-right
    - bottom-left
    - bottom-right
props:
  name: 'John Doe'
  description: 'Software Engineer'
  avatar.src: 'https://i.pravatar.cc/150?u=john-doe'
  chip:
    color: 'primary'
    position: top-right
---
::

::collapsible{name="all chip properties"}

::component-props
---
name: Chip
ignore:
  - as
  - size
  - standalone
---
::

::

### Grootte

Gebruik de `size` prop om de grootte van de gebruiker avatar en tekst te wijzigen.

::component-code
---
prettier: true
ignore:
  - name
  - description
  - avatar.src
  - chip
props:
  name: 'John Doe'
  description: 'Software Engineer'
  avatar.src: 'https://i.pravatar.cc/150?u=john-doe'
  chip: true
  size: xl
---
::

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie te wijzigen. Standaard `horizontal`.

::component-code
---
prettier: true
ignore:
  - avatar.src
props:
  orientation: 'vertical'
  name: 'John Doe'
  description: 'Software Engineer'
  avatar.src: 'https://i.pravatar.cc/150?u=john-doe'
---
::

### Link

U kunt elke eigenschap van de [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component doorgeven, zoals `to`, `target`, `rel`, enz.

::component-code
---
prettier: true
ignore:
  - name
  - description
  - avatar.src
  - target
props:
  to: 'https://github.com/benjamincanac'
  target: '_blank'
  name: 'Benjamin Canac'
  description: 'Software Engineer'
  avatar.src: 'https://github.com/benjamincanac.png'
---
::

::note
De `NuxtLink`-component neemt alle andere kenmerken over die u aan de `User`-component doorgeeft.
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
