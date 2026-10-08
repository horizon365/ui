---
title: ChatPalette
description: 'Eine Chat-Palette zum Erstellen einer Chatbot-Oberfläche innerhalb eines Overlays.'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPalette.vue
---

@@@ph000@@Verwendung

Die ChatPalette-Komponente ist ein strukturierter Layout-Wrapper, der [ChatMessages](/docs/components/chat-messages) in einem scrollbaren Inhaltsbereich und [ChatPrompt](/docs/components/chat-prompt) in einem festen unteren Abschnitt organisiert und zusammenhängende Chatbot-Schnittstellen für Modals, Slidovers oder Schubladen erstellt.

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

@@ph020@@@Beispiele

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

### Innerhalb eines Modal

Sie können die ChatPaletten-Komponente innerhalb eines Inhalts von [Modal](/docs/components/modal) verwenden.

::component-example
---
Einsturz: wahr
IFrame:
  Größe: 500px
iframeMobile: Richtig
Übertreibungen: wahr
Name: 'chat-palette-modal-example'(Chat-Palette-Modal-Beispiel)
---
::

### Within ContentSearch

Sie können die ChatPaletten-Komponente bedingt innerhalb des Inhalts von [ContentSearch](/docs/components/content-search) verwenden, um eine Chatbot-Oberfläche anzuzeigen, wenn ein Benutzer ein Element auswählt.

::component-example
---
Einsturz: wahr
iFrame:
  Größe: 500px
iframeMobile: Richtig
Übertreibungen: wahr
Name: 'chat-palette-content-search-example'(Chat-Palette-Inhalt-Suche-Beispiel)
---
::


@@333@bpb

@@ph034@@gmail.de

Komponenten Props

@@ph035@gmail.de

Die Komponenten-Slots

@@ph036@gmail.de

Das Komponenten-Theme

@@ph037@changelog @ changelog

Das Component-Changelog
