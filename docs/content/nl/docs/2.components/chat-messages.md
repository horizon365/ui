---
title: ChatBerichten
description: 'Geef een lijst met chatberichten weer, ontworpen om naadloos samen te werken met Vercel AI SDK.'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessages.vue
---

## Gebruik

Het ChatMessages-onderdeel geeft een lijst met [ChatMessage](/docs/components/chat-message) componenten weer met behulp van de standaardsleuf of de `messages`-prop.

```vue {2,8}
<template>
  <UChatMessages>
    <UChatMessage
      v-for="(message, index) in messages"
      :key="index"
      v-bind="message"
    />
  </UChatMessages>
</template>
```

::callout{icon="i-lucide-rocket"}
Dit onderdeel is speciaal gebouwd voor AI-chatbots met functies zoals:

- Eerste scroll naar beneden bij het laden ([`shouldScrollToBottom`](#should-scroll-to-bottom)).
- Continu naar beneden scrollen als er nieuwe berichten binnenkomen ([`shouldAutoScroll`](#should-auto-scroll)).
- Een knop "Auto scroll" verschijnt wanneer omhoog wordt gescrold, zodat gebruikers terug kunnen springen naar de nieuwste berichten ([`autoScroll`](#auto-scroll)).
- A laadindicator wordt weergegeven terwijl de assistent wordt verwerkt ([`status`](#status)).
- Ingezonden berichten worden naar de bovenkant van de viewport gescrold en de hoogte van het laatste gebruikersbericht wordt dynamisch aangepast.
::

### Berichten

Gebruik de `messages` prop om een lijst met chatberichten weer te geven.

::component-code
---
prettier: true
external:
  - messages
ignore:
  - messages
hide:
  - shouldScrollToBottom
collapse: true
class: 'overflow-y-auto'
props:
  messages:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      role: user
      parts:
        - type: 'text'
          text: 'Hello, how are you?'
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      role: assistant
      parts:
        - type: 'text'
          text: 'I am doing well, thank you for asking! How can I assist you today?'
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      role: user
      parts:
        - type: 'text'
          text: 'What is the current weather in Tokyo?'
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies."
  shouldScrollToBottom: false
---
::

### Status

Gebruik de `status` prop om een visuele indicator weer te geven wanneer de assistent aan het verwerken is.

::component-code
---
prettier: true
external:
  - messages
ignore:
  - messages
  - status
hide:
  - shouldScrollToBottom
class: 'overflow-y-auto'
props:
  status: 'submitted'
  messages:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      role: user
      parts:
        - type: 'text'
          text: 'Hello, how are you?'
  shouldScrollToBottom: false
---
::

::note
Hier is het detail van de verschillende statussen van de AI SDK `useChat` composable:

- `submitted`: Het bericht is verzonden naar de API en we wachten op het begin van de responsstroom.
- `streaming`: Het antwoord wordt actief gestreamd vanuit de API en ontvangt stukjes gegevens.
- `ready`: De volledige reactie is ontvangen en verwerkt; er kan een nieuw gebruikersbericht worden verzonden.
- `error`: Er is een fout opgetreden tijdens het API-verzoek, waardoor succesvolle voltooiing werd voorkomen.
::

### Gebruiker

Gebruik de `user` prop om de [ChatMessage](/docs/components/chat-message) rekwisieten voor `user`-berichten te wijzigen. Standaard:

- `side: 'right'`{lang="ts-type"}
- `variant: 'soft'`{lang="ts-type"}

::component-code
---
prettier: true
external:
  - messages
ignore:
  - messages
  - avatar.src
  - avatar.loading
hide:
  - shouldScrollToBottom
collapse: true
items:
  user.variant:
    - solid
    - outline
    - subtle
    - soft
    - naked
  user.side:
    - left
    - right
class: 'overflow-y-auto'
props:
  user:
    side: left
    variant: solid
    avatar:
      src: https://github.com/benjamincanac.png
      loading: lazy
  messages:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      role: user
      parts:
        - type: 'text'
          text: 'Hello, how are you?'
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      role: assistant
      parts:
        - type: 'text'
          text: 'I am doing well, thank you for asking! How can I assist you today?'
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      role: user
      parts:
        - type: 'text'
          text: 'What is the current weather in Tokyo?'
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies."
  shouldScrollToBottom: false
---
::

### Assistent

Gebruik de `assistant`-prop om de [ChatMessage](/docs/components/chat-message) voor `assistant`-berichten te wijzigen. Standaard:

- `side: 'left'`{lang="ts-type"}
- `variant: 'naked'`{lang="ts-type"}

::component-code
---
prettier: true
external:
  - messages
ignore:
  - messages
  - avatar.icon
  - assistant.actions
hide:
  - shouldScrollToBottom
collapse: true
items:
  assistant.variant:
    - solid
    - outline
    - subtle
    - soft
    - naked
  assistant.side:
    - left
    - right
class: 'overflow-y-auto'
props:
  assistant:
    side: left
    variant: outline
    avatar:
      icon: i-lucide-bot
    actions:
      - label: 'Copy to clipboard'
        icon: i-lucide-copy
  messages:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      role: user
      parts:
        - type: 'text'
          text: 'Hello, how are you?'
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      role: assistant
      parts:
        - type: 'text'
          text: 'I am doing well, thank you for asking! How can I assist you today?'
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      role: user
      parts:
        - type: 'text'
          text: 'What is the current weather in Tokyo?'
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies."
  shouldScrollToBottom: false
---
::

### Automatisch scrollen

Gebruik de `auto-scroll` prop om de automatische scrollknop (met `false`-waarde) die wordt weergegeven bij het scrollen naar de bovenkant van de chat aan te passen of te verbergen. Standaard:

- `color: 'neutral'`{lang="ts-type"}
- `variant: 'outline'`{lang="ts-type"}

U kunt elke eigenschap van de [Button](/docs/components/button) component doorgeven om deze aan te passen.

::component-code
---
prettier: true
collapse: true
external:
  - messages
ignore:
  - messages
  - autoScroll.color
  - autoScroll.variant
  - shouldScrollToBottom
class: 'overflow-y-auto max-h-[341px] static'
props:
  autoScroll:
    color: neutral
    variant: outline
  shouldScrollToBottom: false
  messages:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      role: user
      parts:
        - type: 'text'
          text: 'Hello, how are you?'
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      role: assistant
      parts:
        - type: 'text'
          text: 'I am doing well, thank you for asking! How can I assist you today?'
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      role: user
      parts:
        - type: 'text'
          text: 'What is the current weather in Tokyo?'
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies. The forecast for the rest of the week shows a slight chance of rain on Thursday, with temperatures gradually rising to 28°C by the weekend. Humidity levels are moderate at around 65%, and wind speeds are light at 8 km/h from the southeast. Air quality is good with an index of 42. The UV index is high at 7, so it's recommended to wear sunscreen if you're planning to spend time outdoors. Sunrise was at 5:24 AM and sunset will be at 6:48 PM, giving Tokyo approximately 13 hours and 24 minutes of daylight today. The moon is currently in its waxing gibbous phase."
    - id: 'c3e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: user
      parts:
        - type: 'text'
          text: 'Can you recommend some popular tourist attractions in Kyoto?'
    - id: 'd4f5g8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: 'Kyoto is known for its beautiful temples, traditional tea houses, and gardens. Some popular attractions include Kinkaku-ji (Golden Pavilion) with its stunning gold leaf exterior reflecting in the mirror pond, Fushimi Inari Shrine with its thousands of vermilion torii gates winding up the mountainside, Arashiyama Bamboo Grove where towering stalks create an otherworldly atmosphere, Kiyomizu-dera Temple perched on a hillside offering panoramic views of the city, and the historic Gion district where you might spot geisha hurrying to evening appointments through narrow stone-paved streets lined with traditional wooden machiya houses.'
---
::

### Auto scrollen pictogram

Gebruik de `auto-scroll-icon`-prop om de automatische scrollknop aan te passen [Icon](/docs/components/icon). Standaard `i-lucide-arrow-down`.

::component-code
---
prettier: true
collapse: true
external:
  - messages
ignore:
  - messages
  - autoScroll.color
  - autoScroll.variant
  - shouldScrollToBottom
class: 'overflow-y-auto max-h-[341px] static'
props:
  autoScrollIcon: 'i-lucide-chevron-down'
  shouldScrollToBottom: false
  messages:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      role: user
      parts:
        - type: 'text'
          text: 'Hello, how are you?'
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      role: assistant
      parts:
        - type: 'text'
          text: 'I am doing well, thank you for asking! How can I assist you today?'
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      role: user
      parts:
        - type: 'text'
          text: 'What is the current weather in Tokyo?'
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies. The forecast for the rest of the week shows a slight chance of rain on Thursday, with temperatures gradually rising to 28°C by the weekend. Humidity levels are moderate at around 65%, and wind speeds are light at 8 km/h from the southeast. Air quality is good with an index of 42. The UV index is high at 7, so it's recommended to wear sunscreen if you're planning to spend time outdoors. Sunrise was at 5:24 AM and sunset will be at 6:48 PM, giving Tokyo approximately 13 hours and 24 minutes of daylight today. The moon is currently in its waxing gibbous phase."
    - id: 'c3e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: user
      parts:
        - type: 'text'
          text: 'Can you recommend some popular tourist attractions in Kyoto?'
    - id: 'd4f5g8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: 'Kyoto is known for its beautiful temples, traditional tea houses, and gardens. Some popular attractions include Kinkaku-ji (Golden Pavilion) with its stunning gold leaf exterior reflecting in the mirror pond, Fushimi Inari Shrine with its thousands of vermilion torii gates winding up the mountainside, Arashiyama Bamboo Grove where towering stalks create an otherworldly atmosphere, Kiyomizu-dera Temple perched on a hillside offering panoramic views of the city, and the historic Gion district where you might spot geisha hurrying to evening appointments through narrow stone-paved streets lined with traditional wooden machiya houses.'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.arrowDown`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.arrowDown`-sleutel.
:::
::

### Moet automatisch scrollen

Gebruik de `should-auto-scroll`-prop om continu automatisch scrollen in / uit te schakelen terwijl berichten worden gestreamd. Standaard `false`.

```vue
<template>
  <UChatMessages :messages="messages" should-auto-scroll />
</template>
```

### Moet naar beneden scrollen

Gebruik de `should-scroll-to-bottom`-prop om automatisch scrollen onder in / uit te schakelen wanneer het onderdeel is gemonteerd. Standaard `true`.

```vue
<template>
  <UChatMessages :messages="messages" :should-scroll-to-bottom="false" />
</template>
```

## Voorbeelden

::tip{to="/docs/components/chat"}
Bekijk de **Chat** overzichtspagina voor installatie-instructies, serverinstellingen en gebruiksvoorbeelden.
::

### Met indicatorsleuf

Gebruik de `#indicator`-sleuf om de laadindicator aan te passen met een [`ChatShimmer`](/docs/components/chat-shimmer) effect.

::component-example
---
name: 'chat-messages-indicator-slot-example'
class: 'overflow-y-auto'
collapse: true
---
::

## API

### Props

:component-props

### Slots

:component-slots

::tip
U kunt alle slots van de [`ChatMessage`](/docs/components/chat-message#slots) component in ChatMessages gebruiken, ze worden automatisch doorgestuurd, zodat u individuele berichten kunt aanpassen wanneer u de `messages`-prop gebruikt.

```vue{7-15}
<script setup lang="ts">
import { isTextUIPart } from 'ai'
</script>

<template>
  <UChatMessages :messages="messages" :status="status">
    <template #content="{ message }">
      <template
        v-for="(part, index) in message.parts"
        :key="`${message.id}-${part.type}-${index}`"
      >
        <p v-if="isTextUIPart(part)" class="whitespace-pre-wrap">
          {{ part.text }}
        </p>
      </template>
    </template>
  </UChatMessages>
</template>
```
::

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `registerMessageRef(id: string, element: ComponentPublicInstance \| null)`{lang="ts-type"} | `void`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
