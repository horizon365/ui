---
title: ChatPalet
description: 'Een chatpalet om een chatbot-interface in een overlay te maken.'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPalette.vue
---

## Gebruik

De ChatPalette-component is een gestructureerde lay-outverpakking die [ChatMessages](/docs/components/chat-messages) organiseert in een schuifbaar inhoudsgebied en [ChatPrompt](/docs/components/chat-prompt) in een vast onderste gedeelte, waardoor samenhangende chatbot-interfaces ontstaan voor modals, slideovers of
 laden.

```vue{2,8}
<template>
  <UChatPalette>
    <UChatMessages />

    <template #prompt>
      <UChatPrompt />
    </template>
  </UChatPalette>
</template>
```

## Voorbeelden

::tip{to="/docs/components/chat"}
Kijk op de **Chat** overzichtspagina voor installatie instructies, server setup en gebruiksvoorbeelden.
::

### Binnen een Modal

U kunt de ChatPalette-component gebruiken in de inhoud van een [Modal](/docs/components/modal).

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'chat-palette-modal-example'
---
::

### Binnen InhoudZoeken

U kunt de ChatPalette-component voorwaardelijk gebruiken in de inhoud van [ContentSearch](/docs/components/content-search) om een chatbot-interface weer te geven wanneer een gebruiker een item selecteert.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'chat-palette-content-search-example'
---
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
