---
title: ProseCardGroep
description: 'Organiseer meerdere kaarten in responsieve rasterlay-outs voor een betere inhoudspresentatie.'
category: components
navigation.title: CardGroup
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CardGroup.vue
---

## Gebruik

Wikkel uw `card`-componenten in met de `card-group`-component om ze samen te groeperen in een rasterlay-out.

::code-preview

:::card-group{class="w-full my-0"}

::card
---
title: Dashboard
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/dashboard
target: _blank
---
Een dashboard met meerkolomindeling.
::

::card
---
title: SaaS
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/saas
target: _blank
---
Een template met landing, prijzen, docs en blog.
::

::card
---
title: Docs
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/docs
target: _blank
---
Een documentatie met `@nuxt/content`.
::

::card
---
title: Landing
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/landing
target: _blank
---
Een landingspagina die je als startpunt kunt gebruiken.
::

:::

#code

```mdc
::card-group

::card
---
title: Dashboard
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/dashboard
target: _blank
---
A dashboard with multi-column layout.
::

::card
---
title: SaaS
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/saas
target: _blank
---
A template with landing, pricing, docs and blog.
::

::card
---
title: Docs
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/docs
target: _blank
---
A documentation with `@nuxt/content`.
::

::card
---
title: Landing
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/landing
target: _blank
---
A landing page you can use as starting point.
::

::
```

::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thema

:component-theme{prose}

## Wijzigingsgelog

:component-changelog{prefix="prose"}
