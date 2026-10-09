---
title: ChangelogVersie
description: 'Een aanpasbaar artikel om weer te geven in een changelog.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersion.vue
---

## Gebruik

De ChangelogVersion-component biedt een flexibele manier om een `<article>`-element weer te geven met aanpasbare inhoud, inclusief titel, beschrijving, afbeelding, enz.

::code-preview

::u-changelog-version
---
title: 'Introducing Nuxt UI v3'
description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
date: 2025-03-12
authors:
  - name: Benjamin Canac
    description: '@benjamincanac'
    avatar:
      src: https://github.com/benjamincanac.png
      loading: lazy
    to: https://x.com/benjamincanac
    target: _blank
  - name: Sebastien Chopin
    description: '@atinux'
    avatar:
      src: https://github.com/atinux.png
      loading: lazy
    to: https://x.com/atinux
    target: _blank
  - name: Hugo Richard
    description: '@hugorcd'
    avatar:
      src: https://github.com/hugorcd.png
      loading: lazy
    to: https://x.com/hugorcd
    target: _blank
to: 'https://nuxt.com/blog/nuxt-ui-v3'
target: '_blank'
class: 'w-full'
ui.container: 'max-w-lg'
---
::

::

::tip{to="/docs/components/changelog-versions"}
Gebruik het `ChangelogVersions`-onderdeel om meerdere changelog-versies weer te geven in een tijdlijn met een indicatorbalk aan de linkerkant.
::

### Titel

Gebruik de `title` prop om de titel van de ChangelogVersion weer te geven.

::component-code
---
hide:
  - class
  - ui
  - ui.container
props:
  title: 'Introducing Nuxt UI v3'
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Beschrijving

Gebruik de `description` prop om de beschrijving van de ChangelogVersion weer te geven.

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Datum

Gebruik de `date` prop om de datum van de ChangelogVersion weer te geven.

::tip
De datum wordt automatisch opgemaakt naar de [current locale](/docs/getting-started/integrations/i18n/nuxt#locale). U kunt een `Date`-object of een tekenreeks doorgeven.
::

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
  - description
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Badge

Gebruik de `badge` prop om een [Badge](/docs/components/badge) weer te geven op de ChangelogVersion.

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
  - description
  - date
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  badge: 'Release'
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

U kunt elke eigenschap van de [Badge](/docs/components/badge#props) component doorgeven om deze aan te passen.

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
  - description
  - date
  - badge.label
  - badge.color
  - badge.variant
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  badge:
    label: 'Release'
    color: primary
    variant: outline
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Afbeelding

Gebruik de `image` prop om een afbeelding in de BlogPost weer te geven.

::note
Als [`@nuxt/image`](https://image.nuxt.com/get-started/installation) is geïnstalleerd, wordt de `<NuxtImg>`-component gebruikt in plaats van de native `img`-tag.
::

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
  - description
  - date
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Auteurs

Gebruik de `authors` prop om een lijst met [User](/docs/components/user) in de ChangelogVersion weer te geven als een array van objecten met de volgende eigenschappen:

- `name?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `avatar?: Omit<AvatarProps, 'size'>`{lang="ts-type"}
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{lang="ts-type"}
- `size?: UserProps['size']`{lang="ts-type"}
- `orientation?: UserProps['orientation']`{lang="ts-type"}

U kunt elke eigenschap van de [Link](/docs/components/link#props) component doorgeven, zoals `to`, `target`, enz.

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
external:
  - authors
externalTypes:
  - UserProps[]
ignore:
  - title
  - description
  - date
  - image
  - authors
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  authors:
    - name: Benjamin Canac
      description: '@benjamincanac'
      avatar:
        src: https://github.com/benjamincanac.png
        loading: lazy
      to: https://x.com/benjamincanac
      target: _blank
    - name: Sebastien Chopin
      description: '@atinux'
      avatar:
        src: https://github.com/atinux.png
        loading: lazy
      to: https://x.com/atinux
      target: _blank
    - name: Hugo Richard
      description: '@hugorcd'
      avatar:
        src: https://github.com/hugorcd.png
        loading: lazy
      to: https://x.com/hugorcd
      target: _blank
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Link

U kunt elke eigenschap van de [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component doorgeven, zoals `to`, `target`, `rel`, enz.

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
  - description
  - date
  - image
  - target
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  to: 'https://nuxt.com/blog/nuxt-ui-v3'
  target: _blank
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Indicator

Gebruik de `indicator` prop om de indicatorstip aan de linkerkant te verbergen. Standaard `true`.

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
  - description
  - date
  - image
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  indicator: false
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

::note
Als de `indicator` prop `false` is, wordt de datum over de titel weergegeven.
::

## Voorbeelden

### Met body slot

U kunt de `body`-sleuf gebruiken om aangepaste inhoud tussen de afbeelding en de auteurs weer te geven met:

- the [Markdown](https://comark.dev/rendering/vue) component van `@comark/vue` om wat markdown weer te geven.
- the [ContentRenderer](https://content.nuxt.com/docs/components/content-renderer) component van `@nuxt/content` om de inhoud van de pagina of lijst weer te geven.
- or gebruik de `:u-changelog-version`-component rechtstreeks in uw inhoud met markdown in de `body`-sleuf, aangezien Nuxt UI vooraf gestileerde prozacomponenten biedt.

::component-example
---
prettier: true
name: 'changelog-version-markdown-example'
collapse: true
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
