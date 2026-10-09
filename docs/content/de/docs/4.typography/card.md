---
title: Die ProseCard
description: 'Erstellen Sie hervorgehobene Inhaltsblöcke mit optionalen Links und Navigation.'
category: components
navigation.title: Card
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Card.vue
---

## Bearbeiten

Verwenden Sie Markdown im Standard-Slot der `card`-Komponente, um Ihren Inhalt hervorzuheben.

Sie können auch jede Eigenschaft aus der Komponente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) oder [xph06x](https://router.vuejs.org/api/interfaces/RouterLinkProps.html) übergeben..

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

Ideal für kleine Teams, Startups und Agenturen mit bis zu 5 Entwicklern.
::

## API Bearbeiten

### Props (englisch)

:component-props{prose}

### Slots Bearbeiten

:component-slots{prose}

## Theme Bearbeiten

:component-theme{prose}

## Changelog (englisch)

:component-changelog{prefix="prose"}
