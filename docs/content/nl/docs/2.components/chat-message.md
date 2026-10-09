---
title: ChatBericht
description: 'Geef een chatbericht weer met pictogram, avatar en acties.'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessage.vue
---

## Gebruik

Het ChatMessage-onderdeel geeft een `<article>`-element weer voor een `user` of `assistant` chatbericht.

::code-preview

::u-chat-message
---
parts:
  - type: 'text'
    id: '1'
    text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
side: 'right'
variant: 'soft'
role: 'user'
id: '1'
avatar:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
---
::

::

::tip{to="/docs/components/chat-messages"}
Gebruik het `ChatMessages`-onderdeel om een lijst met chatberichten weer te geven.
::

### Onderdelen

Gebruik de `parts` prop om de berichtinhoud weer te geven met behulp van de AI SDK-indeling.

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

::note
De `parts` prop is het aanbevolen formaat voor de AI SDK. Elk onderdeel heeft een `type` (bijv. 'tekst') en bijbehorende inhoud.
De ChatMessage-component ondersteunt ook de verouderde `content`-prop voor achterwaartse compatibiliteit.
::

### Zijde

Gebruik de `side` prop om het bericht links of rechts weer te geven.

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  side: 'right'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

::note
Bij gebruik van de [`ChatMessages`](/docs/components/chat-messages) is de `side` prop ingesteld op `left` voor `assistant` berichten en `right` voor `user` berichten.
::

### Variant

Gebruik de `variant` prop om de stijl van het bericht te wijzigen.

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  variant: 'soft'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

::note
Bij gebruik van de [`ChatMessages`](/docs/components/chat-messages) component wordt de `variant` prop ingesteld op `naked` voor `assistant` berichten en `soft` voor `user` berichten.
::

### Kleur: badge{label="4.8+" class="align-text-top"}

Gebruik de `color` prop om de kleur van het bericht te wijzigen.

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  variant: 'soft'
  color: 'primary'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

### Icoon

Gebruik de `icon` prop om een [Icon](/docs/components/icon) naast het bericht weer te geven.

::component-code
---
prettier: true
ignore:
  - parts
  - side
  - variant
  - role
  - id
props:
  icon: i-lucide-user
  variant: 'soft'
  side: 'right'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

### Avatar

Gebruik de `avatar` prop om een [Avatar](/docs/components/avatar) naast het bericht weer te geven.

::component-code
---
prettier: true
ignore:
  - parts
  - side
  - variant
  - role
  - id
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/benjamincanac.png'
    loading: lazy
  variant: 'soft'
  side: 'right'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

U kunt ook de `avatar.icon` prop gebruiken om een pictogram als avatar weer te geven.

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  avatar:
    icon: i-lucide-bot
  parts:
    - type: 'text'
      id: '1'
      text: 'Nuxt UI offers several features for building AI chatbots including the ChatMessage, ChatMessages, and ChatPrompt components. Best practices include using the Chat class from AI SDK, implementing proper message styling with variants, and utilizing the built-in actions for message interactions. The components are fully customizable with theming support and responsive design.'
  role: 'assistant'
  id: '1'
---
::

### Acties

Gebruik de `actions`-prop om acties onder het bericht weer te geven die worden weergegeven wanneer u met de muisaanwijzer over het bericht beweegt.

::component-code
---
prettier: true
external:
  - actions
externalTypes:
  - ButtonProps[]
ignore:
  - parts
  - actions
  - role
  - id
props:
  actions:
    - label: 'Copy to clipboard'
      icon: i-lucide-copy
  parts:
    - type: 'text'
      id: '1'
      text: 'Nuxt UI offers several features for building AI chatbots including the ChatMessage, ChatMessages, and ChatPrompt components. Best practices include using the Chat class from AI SDK, implementing proper message styling with variants, and utilizing the built-in actions for message interactions. The components are fully customizable with theming support and responsive design.'
  role: 'user'
  id: '1'
---
::

## Voorbeelden

::tip{to="/docs/components/chat"}
Bekijk de **Chat** overzichtspagina voor installatie-instructies, serverinstellingen en gebruiksvoorbeelden.
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
