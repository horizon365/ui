---
title: Paginakaart
description: 'Een vooraf gestileerde kaartcomponent met een titel, beschrijving en optionele link.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCard.vue
---

## Gebruik

Het PageCard-onderdeel biedt een flexibele manier om inhoud op een kaart weer te geven met een illustratie in de standaardsleuf.

::code-preview

::u-page-card
---
title: 'Tailwind CSS'
description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
icon: 'i-simple-icons-tailwindcss'
class: 'w-96'
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::

::tip
Gebruik de [PageGrid](/docs/components/page-grid), [PageColumns](/docs/components/page-columns) of [PageList](/docs/components/page-list) om meerdere PageCard weer te geven.
::

### Titel

Gebruik de `title` prop om de titel van de kaart in te stellen.

::component-code
---
hide:
  - class
props:
  title: 'Tailwind CSS'
  class: 'w-96'
---
::

### Beschrijving

Gebruik de `description` prop om de beschrijving van de kaart in te stellen.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  class: 'w-96'
---
::

### Icoon

Gebruik de `icon` prop om het pictogram van de kaart in te stellen.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  class: 'w-96'
---
::

### Link

U kunt elke eigenschap van de [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component doorgeven, zoals `to`, `target`, `rel`, enz.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - target
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  to: 'https://tailwindcss.com/blog/tailwindcss-v4'
  target: _blank
  class: 'w-96'
---
::

### Variant

Gebruik de `variant` prop om de stijl van de kaart te veranderen.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - to
  - target
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  to: 'https://tailwindcss.com/blog/tailwindcss-v4'
  target: _blank
  variant: soft
  class: 'w-96'
---
::

::tip
U kunt de klasse `light` of `dark` toepassen op de `links`-sleuf wanneer u de `solid`-variant gebruikt om de kleuren om te keren.
::

### Oriëntatie

Gebruik de `orientation`-prop om de oriëntatie met de standaardsleuf te wijzigen. Standaard `vertical`.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### Omkeren

Gebruik de `reverse` prop om de oriëntatie van de standaardsleuf om te keren.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
  reverse: true
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### Hoogtepunt

Gebruik de `highlight` en `highlight-color` rekwisieten om een gemarkeerde rand rond de kaart weer te geven.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - orientation
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
  highlight: true
  highlightColor: 'primary'
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### Spotlicht

Gebruik de `spotlight`- en `spotlight-color`-rekwisieten om een spotlight-effect weer te geven dat uw muiscursor volgt en randen bij zweven markeert.

::note
Het spotlight-effect zal zweefeffecten overnemen bij gebruik van een `to` prop. Je kunt het het beste gebruiken met de `outline`-variant.
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - orientation
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
  spotlight: true
  spotlightColor: 'primary'
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::tip
U kunt de kleur en grootte ook aanpassen met de variabelen `--spotlight-color` en `--spotlight-size` CSS:

```vue
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

## Voorbeelden

### Als een testimonial

Gebruik de [User](/docs/components/user) component in de `header`- of `footer`-sleuf om de kaart eruit te laten zien als een testimonial.

::component-example
---
name: 'page-card-testimonial-example'
---
::

::tip{to="/docs/components/page-columns"}
U kunt het `PageColumns`-onderdeel gebruiken om meerdere PageCard in een lay-out met meerdere kolommen weer te geven.
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
