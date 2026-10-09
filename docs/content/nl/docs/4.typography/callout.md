---
title: ProseCallout
description: 'Markeer belangrijke informatie met opvallende gekleurde dozen en pictogrammen.'
category: components
navigation.title: Callout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Callout.vue
---

## Gebruik

Gebruik markdown in de standaardsleuf van de `callout`-component om een opvallende context aan uw inhoud toe te voegen.

::component-code{slug="callout" prose}
---
props:
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with full **markdown** support.
---
::

### Icoon

Gebruik de `icon` prop om een pictogram naast de inhoud weer te geven.

::component-code{slug="callout" prose}
---
props:
  icon: i-lucide-square-play
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with an icon.
---
::

### Kleur

Gebruik de `color` prop om de kleur van de callout te veranderen.

::component-code{slug="callout" prose}
---
ignore:
  - icon
props:
  icon: i-lucide-info
  color: info
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with a custom color.
---
::

### Link

U kunt elke eigenschap van de [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component zoals `to` en `target` doorgeven om de callout een link te maken.

::component-code{slug="callout" prose}
---
hide:
  - class
ignore:
  - icon
  - target
props:
  icon: i-lucide-square-play
  to: '/docs/getting-started/installation/nuxt'
  color: neutral
  class: 'w-full my-0'
slots:
  default: Learn how to install `@nuxt/ui` in your project.
---
::

## Snelkoppelingen

U kunt ook de sneltoetsen `note`, `tip`, `warning` en `caution` gebruiken met vooraf gedefinieerde pictogrammen en kleuren.

::code-preview

:::div{class="flex flex-col gap-4 w-full"}

::note{class="w-full my-0"}
Hier is wat aanvullende informatie voor u.
::

::tip{class="w-full my-0"}
Hier is een nuttige suggestie.
::

::warning{class="w-full my-0"}
Wees voorzichtig met deze actie, want deze kan onverwachte resultaten opleveren.
::

::caution{class="w-full my-0"}
Deze actie kan niet ongedaan worden gemaakt.
::

:::

#code

```mdc
::note
Here's some additional information.
::

::tip
Here's a helpful suggestion.
::

::warning
Be careful with this action as it might have unexpected results.
::

::caution
This action cannot be undone.
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
