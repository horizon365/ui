---
title: Proséquence
description: 'Créez des blocs de contenu surlignés avec des liens et une navigation optionnels.'
category: components
navigation.title: Card
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Card.vue
---

## Utilisation

Utilisez le markdown dans l'emplacement par défaut du composant `card` pour mettre en évidence votre contenu.

Vous pouvez également passer n'importe quelle propriété du composant [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) ou [`<RouterLink>`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html).

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

Idéal pour les petites équipes, les startups et les agences comptant jusqu'à 5 développeurs.
::

## api

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thème

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
