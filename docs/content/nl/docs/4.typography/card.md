---
title: ProseKaart
description: 'Maak gemarkeerde inhoudsblokken met optionele links en navigatie.'
category: components
navigation.title: Card
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Card.vue
---

## Gebruik

Gebruik markdown in de standaardsleuf van de `card`-component om uw inhoud te markeren.

Gebruik de `title`, `icon` en `color` props om het aan te passen. U kunt ook elke eigenschap van de [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) of [`<RouterLink>`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html) component doorgeven.

::component-code{slug="card" prose}
---
hide:
  - class
ignore:
  - target
props:
  class: 'my-0 w-96'
  title: Startup
  icon: i-lucide-users
  color: primary
  to: 'https://nuxt.lemonsqueezy.com'
  target: '_blank'
slots:
  default: Best suited for small teams, startups and agencies with up to 5 developers.
---

Het meest geschikt voor kleine teams, startups en bureaus met maximaal 5 ontwikkelaars.
::

## API

### Voordelen

:component-props{prose}

### Slots

:component-slots{prose}

## Thema

:component-theme{prose}

## Wijzigingsgelog

:component-changelog{prefix="prose"}
