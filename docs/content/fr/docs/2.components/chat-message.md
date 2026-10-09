---
title: Chatmessage
description: 'Affichez un message de chat avec une icône, un avatar et des actions.'
category: chat
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessage.vue
---

## Utilisation

Le composant ChatMessage rend un élément `<article>` pour un message de chat `user` ou `assistant`.

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
Utilisez le composant `ChatMessages` pour afficher une liste de messages de chat.
::

### pièces

Utilisez le prop `parts` pour afficher le contenu du message à l'aide du format AI SDK.

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
Le prop `parts` est le format recommandé pour le SDK d'IA. Chaque partie a un `type` (par exemple 'text') et le contenu correspondant. Le composant ChatMessage prend également en charge le prop `content` obsolète pour la compatibilité descendante.
::

### Side

Utilisez le prop `side` pour afficher le message à gauche ou à droite.

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
Lorsque vous utilisez le composant [`ChatMessages`](/docs/components/chat-messages), la prop `side` est définie sur `left` pour les messages `assistant` et `right` pour les messages `user`.
::

### Variant

Utilisez la prop `variant` pour changer le style du message.

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
Lors de l'utilisation du composant [`ChatMessages`](/docs/components/chat-messages), la prop `variant` est définie sur `naked` pour les messages `assistant` et `soft` pour les messages `user`.
::

Couleur: badge{label="4.8+" class="align-text-top"}

Utilisez la prop `color` pour changer la couleur du message.

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

### Icon

Utilisez la prop `icon` pour afficher un composant [Icon](/docs/components/icon) à côté du message.

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

Utilisez la prop `avatar` pour afficher un composant [Avatar](/docs/components/avatar) à côté du message.

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

Vous pouvez également utiliser le prop `avatar.icon` pour afficher une icône en tant qu 'avatar.

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

### Actions

Utilisez le prop `actions` pour afficher les actions en dessous du message qui s'afficheront lorsque vous survolerez le message.

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

## Examples of

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

## API écrit

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
