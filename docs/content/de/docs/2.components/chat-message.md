---
title: Chatmessage
description: 'Anzeige einer Chat-Nachricht mit Symbol, Avatar und Aktionen.'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessage.vue
---

## Bearbeiten

Die ChatMessage-Komponente rendert ein `<article>`-Element für eine `user`-oder `assistant`-Chat-Nachricht.

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
Verwenden Sie die `ChatMessages`-Komponente, um eine Liste von Chatnachrichten anzuzeigen.
::

### Parts Bearbeiten

Verwenden Sie die `parts`-Prop, um den Nachrichteninhalt im AI-SDK-Format anzuzeigen.

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
Das `parts`-prop ist das empfohlene Format für das AI SDK. Jeder Teil hat ein `type` (z.B.'text') und den entsprechenden Inhalt. Die ChatMessage-Komponente unterstützt auch das veraltete `content`-prop für die Abwärtskompatibilität.
::

### Side

Verwenden Sie die `side` prop, um die Nachricht links oder rechts anzuzeigen.

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
Bei Verwendung der Komponente [`ChatMessages`](/docs/components/chat-messages) wird die prop `side` für `assistant`-Nachrichten auf `left` und für `user`-Nachrichten auf `right` gesetzt.
::

### Variant Übersetzung

Verwenden Sie die `variant` prop, um den Stil der Nachricht zu ändern.

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
Bei Verwendung der Komponente [`ChatMessages`](/docs/components/chat-messages) wird die prop `variant` für `assistant`-Nachrichten auf `naked` und für `user`-Nachrichten auf `soft` gesetzt.
::

### Color: badge{label="4.8+" class="align-text-top"} Farbe: badge{label="4.8+" class="align-text-top"}

Verwenden Sie die `color`-Prop, um die Farbe der Nachricht zu ändern.

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

### Icon (nicht)

Verwenden Sie die `icon`-Prop, um eine [Icon](/docs/components/icon)-Komponente neben der Nachricht anzuzeigen.

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

### Avatar (englisch)

Verwenden Sie die `avatar`-Prop, um eine [Avatar](/docs/components/avatar)-Komponente neben der Nachricht anzuzeigen.

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

Sie können auch die `avatar.icon` prop verwenden, um ein symbol als avatar anzuzeigen.

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

### Aktionen

Verwenden Sie die `actions`-Prop, um Aktionen unterhalb der Nachricht anzuzeigen, die angezeigt werden, wenn Sie mit der Maus über die Nachricht fahren.

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

## Examples (Beispiele)

::tip{to="/docs/components/chat"}
Auf der Übersichtsseite **Chat** finden Sie Installationsanweisungen, Server-Setup und Anwendungsbeispiele.
::

## API Bearbeiten

### Props (englisch)

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
