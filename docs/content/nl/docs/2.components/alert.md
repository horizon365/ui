---
description: Een oproep om de aandacht van de gebruiker te trekken.
category: element
keywords:
  - notice
  - inline notification
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Alert.vue
---

## Gebruik

### Titel

Gebruik de `title` prop om de titel van de waarschuwing in te stellen.

::component-code
---
props:
  title: 'Heads up!'
---
::

### Beschrijving

Gebruik de `description` prop om de beschrijving van de waarschuwing in te stellen.

::component-code
---
prettier: true
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
---
::

### Icoon

Gebruik de `icon` prop om een [Icon](/docs/components/icon) te tonen.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: 'i-lucide-terminal'
---
::

### Avatar [bewerken]

Gebruik de `avatar` prop om een [Avatar](/docs/components/avatar) te tonen.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  avatar.src: 'https://github.com/nuxt.png'
---
::

### Kleur

Gebruik de `color` prop om de kleur van de waarschuwing te wijzigen.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  color: neutral
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: 'i-lucide-terminal'
---
::

### Variant

Gebruik de `variant` prop om de variant van de waarschuwing te wijzigen.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  color: neutral
  variant: subtle
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: 'i-lucide-terminal'
---
::

### Sluiten

Gebruik de `close`-prop om een [Button](/docs/components/button) weer te geven om de waarschuwing te negeren.

::tip
Een `update:open` event wordt uitgezonden wanneer op de knop Sluiten wordt geklikt.
::

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  close: true
---
::

U kunt elke eigenschap van de [Button](/docs/components/button) component doorgeven om deze aan te passen.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close.color
  - close.variant
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
---
::

### Sluit pictogram

Gebruik de `close-icon` prop om de knop Sluiten aan te passen [Icon](/docs/components/icon). Standaard `i-lucide-x`.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  close: true
  closeIcon: 'i-lucide-arrow-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.close`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.close`-sleutel.
:::
::

### Acties

Gebruik de `actions` prop om enkele [Button](/docs/components/button) acties aan de waarschuwing toe te voegen.

::component-code
---
prettier: true
ignore:
  - title
  - actions
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  actions:
    - label: Action 1
    - label: Action 2
      color: neutral
      variant: subtle
---
::

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van de waarschuwing te wijzigen.

::component-code
---
prettier: true
ignore:
  - title
  - actions
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  orientation: horizontal
  actions:
    - label: Action 1
    - label: Action 2
      color: neutral
      variant: subtle
---
::

## Voorbeelden

### `class` prop

Gebruik de `class` prop om de basisstijlen van de waarschuwing te negeren.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  class: 'rounded-none'
---
::

### `ui` prop

Gebruik de `ui`-prop om de slots-stijlen van de waarschuwing te negeren.

::component-code
---
prettier: true
ignore:
  - ui
  - title
  - description
  - icon
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: i-lucide-rocket
  ui:
    icon: 'size-11'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
