---
title: ChatPalette
description: 'Eine Chat-Palette zum Erstellen einer Chatbot-Oberfläche innerhalb eines Overlays.'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPalette.vue
---

## Bearbeiten

Die ChatPalette-Komponente ist ein strukturierter Layout-Wrapper, der [ChatMessages](/docs/components/chat-messages) in einem scrollbaren Inhaltsbereich und [ChatPrompt](/docs/components/chat-promptxph08x in einem festen unteren Abschnitt organisiert und zusammenhängende Chatbot-Schnittstellen für Modals, Slidovers oder Schubladen erstellt.

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

## Examples Bearbeiten

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite von **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

### In einem Modal

Sie können die ChatPalette-Komponente innerhalb des Inhalts eines [Modal](/docs/components/modal) verwenden.

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

### Innerhalb ContentSearch

Sie können die ChatPalette-Komponente bedingt im Inhalt von [ContentSearch](/docs/components/content-search) verwenden, um eine Chatbot-Oberfläche anzuzeigen, wenn ein Benutzer ein Element auswählt.

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


## API (englisch)

### Props Bearbeiten

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog Bearbeiten

:component-changelog
