---
title: ChatShimmer
description: Geef een animatie-effect met tekstglans weer.
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatShimmer.vue
---

## Gebruik

De ChatShimmer-component geeft een element weer met een geanimeerd glansverloop over tekst, dat vaak wordt gebruikt om streaming- of laadtoestanden in chatinterfaces aan te geven.

::note
Dit onderdeel wordt automatisch gebruikt door de [`ChatTool`](/docs/components/chat-tool) en [`ChatReasoning`](/docs/components/chat-reasoning) componenten tijdens het streamen.
::

::tip
De animatie wordt automatisch uitgeschakeld wanneer de gebruiker de voorkeur geeft aan verminderde beweging, de tekst wordt weergegeven als statische gedempte tekst.
::

### Tekst

Gebruik de `text` prop om de shimmer tekst in te stellen.

::component-code
---
props:
  text: 'Thinking...'
---
::

### Duur

Gebruik de `duration` prop om de animatiesnelheid in seconden te regelen.

::component-code
---
props:
  text: 'Thinking...'
  duration: 4
---
::

### Verspreiden

Gebruik de `spread` prop om de breedte van de shimmer highlight te bepalen. De werkelijke spreiding wordt berekend als `text.length * spread` in pixels.

::component-code
---
props:
  text: 'Thinking...'
  spread: 5
---
::

## Voorbeelden

::tip{to="/docs/components/chat"}
Kijk op de **Chat** overzichtspagina voor installatie instructies, server setup en gebruiksvoorbeelden.
::

## API

### Props

:component-props

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
