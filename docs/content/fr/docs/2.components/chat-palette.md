---
title: Chatière
description: 'Une palette de chat pour créer une interface de chatbot à l'intérieur d'une superposition.'
category: chat
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPalette.vue
---

## Utilisation

Le composant ChatPalette est un enveloppeur de mise en page structuré qui organise [ChatMessages](/docs/components/chat-messages) dans une zone de contenu déroulable et [ChatPrompt](/docs/components/chat-prompt) dans une section inférieure fixe, créant ainsi des interfaces chatbot cohérentes pour les modaux, les diapositives ou les tiroirs.

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

## Exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

### Dans un modal

Vous pouvez utiliser le composant ChatPalette à l'intérieur du contenu d'un [Modal](/docs/components/modal).

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

### Dans ContentSearch

Vous pouvez utiliser le composant ChatPalette conditionnellement à l'intérieur du contenu de [ContentSearch](/docs/components/content-search) pour afficher une interface de chatbot lorsqu 'un utilisateur sélectionne un élément.

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


## api

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
