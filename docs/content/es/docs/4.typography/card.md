---
title: Prosecard
description: 'Cree bloques de contenido resaltados con enlaces y navegación opcionales.'
category: components
navigation.title: Card
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Card.vue
---

xph0000xUso

Utilice la reducción de valor en la ranura predeterminada del componente `card` para resaltar su contenido.

También puede pasar cualquier propiedad del componente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) o [`<RouterLink>`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html).

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

Es ideal para equipos pequeños, startups y agencias con hasta 5 desarrolladores.
::

## API (Edición española)

### Accesorios

:component-props{prose}

### Slots (Edición española)

:component-slots{prose}

## Temas

:component-theme{prose}

## Changelog (Edición española)

:component-changelog{prefix="prose"}
