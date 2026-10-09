---
title: ChatTool
description: Geef de aanroepstatus van een opvouwbare AI-tool weer.
category: chat
links:
  - label: Inklapbaar
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatTool.vue
---

## Gebruik

De ChatTool-component geeft een opvouwbaar blok weer dat de aanroepstatus van de AI-tool weergeeft, zoals 'Onderdelen zoeken' of 'Documentatie lezen'.
Wanneer een standaardsleuf is voorzien, wordt deze inklapbaar om de gereedschapsuitvoer te onthullen.

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-example'
---
::

### Tekst

Gebruik de `text` prop om de gereedschapsstatustekst in te stellen.

::component-code
---
hide:
  - class
props:
  text: 'Searched components'
  class: 'w-60'
---
::

### Achtervoegsel

Gebruik de `suffix` prop om secundaire tekst na het hoofdlabel weer te geven.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  text: 'Reading component'
  suffix: 'Button'
  class: 'w-60'
---
::

### Streamen

Gebruik de `streaming` prop om aan te geven dat de tool actief actief is. De tekst geeft een glinsterende animatie weer.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'Searching components...'
  class: 'w-60'
---
::

::tip
Gebruik het hulpprogramma `isToolStreaming` van `@nuxt/ui/utils/ai` om te bepalen of een gereedschapsonderdeel nog steeds actief is. Het retourneert `false` wanneer het gereedschap wacht op goedkeuring door de gebruiker.
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
  text: 'Searching components...'
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
hide:
  - class
ignore:
  - text
props:
  icon: i-lucide-search
  text: 'Searched components'
  class: 'w-60'
---
::

### Bezig met laden

Gebruik de `loading` prop om een laadindicator te tonen. Gebruik de `loading-icon` prop om het laadpictogram aan te passen.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  loading: true
  text: 'Searching components...'
  class: 'w-60'
---
::

### Icoon aan het laden

Gebruik de `loading-icon` prop om het laadpictogram aan te passen. Standaard `i-lucide-loader-circle`.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  text: 'Searching components...'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.loading`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.loading`-toets.
:::
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
  icon: i-lucide-search
  text: 'Searched components'
  class: 'w-60'
slots:
  default: |

    Tool output content
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
  text: 'Searched components'
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.chevronDown`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.chevronDown`-sleutel.
:::
::

### Variant

Gebruik de `variant` prop om de visuele stijl te wijzigen. Standaard is `inline`.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
  - icon
props:
  variant: card
  text: 'Searched components'
  icon: i-lucide-search
  chevron: trailing
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

### Acties: badge{label="4.10+" class="align-text-top"}

Gebruik de `actions` prop om een lijst met [Button](/docs/components/button) onder de trigger weer te geven, handig voor tools die een gebruikersbevestiging vereisen voordat ze worden uitgevoerd.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
  - icon
  - variant
  - actions
props:
  actions:
    - label: 'Approve'
    - label: 'Deny'
      color: neutral
      variant: soft
  text: 'Run terminal command'
  variant: card
  icon: i-lucide-terminal
  class: 'w-60'
slots:
  default: |

    $ pnpm run lint
---
::

## Voorbeelden

::tip{to="/docs/components/chat"}
Bekijk de **Chat** overzichtspagina voor installatie-instructies, serverinstellingen en gebruiksvoorbeelden.
::

### Met goedkeuringsstroom: badge{label="4.10+" class="align-text-top"}

Gebruik de `actions` prop om een gereedschapsgoedkeuringsstroom op te bouwen met de [AI SDK](https://ai-sdk.dev/docs/agents/tool-approvals).
Wanneer een gereedschapsonderdeel zich in de `approval-requested`-status bevindt, geeft u de acties goedkeuren en weigeren weer en reageert u met `addToolApprovalResponse`.

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-approval-example'
---
::

::tip
Gebruik het hulpprogramma `isToolApprovalPending` van `@nuxt/ui/utils/ai` om een goedkeuring in afwachting te detecteren, `isToolStreaming` retourneert `false` in deze staat.

```vue
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'
import { lastAssistantMessageIsCompleteWithApprovalResponses } from 'ai'

const { messages, addToolApprovalResponse } = useChat({
  sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses
})
</script>

<template>
  <UChatTool
    v-if="isToolUIPart(part)"
    :text="getToolName(part)"
    :streaming="isToolStreaming(part)"
    :actions="part.state === 'approval-requested' ? [
      { label: 'Approve', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: true }) },
      { label: 'Deny', color: 'neutral', variant: 'ghost', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: false }) }
    ] : undefined"
  />
</template>
```
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

## Changelog

:component-changelog
