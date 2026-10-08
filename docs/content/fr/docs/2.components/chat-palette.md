---
title: Chatière
description: 'Une palette de chat pour créer une interface de chatbot à l'intérieur d'une superposition.'
category: chat
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPalette.vue
---

@@ph000@utilisation

Le composant ChatPalette est un enveloppeur de mise en page structuré qui organise [ChatMessages/docs/components/chat-messages) dans une zone de contenu défilable et [ChatPrompt](/docs/components/chat-prompt) dans une section inférieure fixe, créant ainsi des interfaces chatbot cohérentes pour les modaux, les diapositives ou les tiroirs.

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

@@ph020@exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour connaître les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

### Dans un Modal

Vous pouvez utiliser le composant ChatPalette dans le contenu d'un [Modal](/docs/components/modal).

::component-example
---
Collapse: vrai
iframe:
  Hauteur: 500px
iframeMobile: vrai
dépassement: true
nom: 'chat-palette-modal-exemple'
---
::

### Dans le contenu

Vous pouvez utiliser le composant ChatPalette conditionnellement dans le contenu de [ContentSearch](/docs/components/content-search) pour afficher une interface de chatbot lorsqu 'un utilisateur sélectionne un élément.

::component-example
---
Collapse: vrai
Iframe:
  Hauteur: 500px
iframeMobile: vrai
dépassement: true
nom: 'chat-palette-content-search-example'
---
::


@@ph033@@api

@@ph034@@props

Composants-props

### Slots

Composants slots

@@ph036@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
