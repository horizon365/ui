---
title: ChatRedeneren
description: Toon een opvouwbaar AI-redeneer- of denkproces.
category: chat
links:
  - label: Inklapbaar
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatReasoning.vue
---

## Gebruik

De ChatReasoning-component geeft een opvouwbaar blok weer dat AI-redenering of denkinhoud weergeeft. Het wordt automatisch geopend tijdens het streamen en wordt daarna automatisch gesloten.

::component-example
---
collapse: true
prettier: true
name: 'chat-reasoning-example'
class: 'h-[252px]'
---
::

::note{to="/docs/composables/use-scroll-shadow"}
De inhoud van het lichaam gebruikt de `useScrollShadow`-compositie om vervagende schaduwen toe te passen wanneer deze overlopen.
::

### Tekst

Gebruik de `text` prop om de redeneerinhoud in te stellen. De tekst wordt weergegeven in de opvouwbare behuizing.

::component-code
---
prettier: true
hide:
  - class
props:
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### Streamen

Gebruik de `streaming` prop om actieve redenering aan te geven. Het onderdeel wordt automatisch geopend wanneer het streamen begint en wordt automatisch gesloten wanneer het eindigt.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

::tip
Gebruik het `isPartStreaming` hulpprogramma van `@nuxt/ui/utils/ai` om te bepalen of een onderdeel momenteel wordt gestreamd.
::

### Shimmer

Bij het streamen gebruikt het triggerlabel de [`ChatShimmer`](/docs/components/chat-shimmer) component. Gebruik de `shimmer` prop om zijn `duration` en `spread` aan te passen.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'The user is asking about Vue components...'
  shimmer:
    duration: 2
    spread: 2
  class: 'w-60'
---
::

### Icoon

Gebruik de `icon` prop om een [Icon](/docs/components/icon) naast de trigger weer te geven.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  icon: i-lucide-brain
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### Chevron

Gebruik de `chevron` prop om de positie van het chevron icoon te veranderen.

::note
Wanneer `chevron` is ingesteld op `leading` met een `icon`, wisselt het pictogram met de chevron bij zweven en openen.
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevron: leading
  icon: i-lucide-brain
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### Chevron pictogram

Gebruik de `chevron-icon` prop om de chevron [Icon](/docs/components/icon) aan te passen. Standaard `i-lucide-chevron-down`.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevronIcon: 'i-lucide-arrow-down'
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.chevronDown`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.chevronDown`-toets.
:::
::

## Voorbeelden

::tip{to="/docs/components/chat"}
Bekijk de **Chat** overzichtspagina voor installatie-instructies, serverconfiguratie en gebruiksvoorbeelden.
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
