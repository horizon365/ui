---
title: chatmensaje
description: 'Mostrar un mensaje de chat con icono, avatar y acciones.'
category: chat
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessage.vue
---

xph0000xUso

El componente ChatMessage representa un elemento `<article>` para un mensaje de chat `user` o `assistant`.

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
Utilice el componente `ChatMessages` para mostrar una lista de mensajes de chat.
::

### Partes

Utilice el prop `parts` para mostrar el contenido del mensaje utilizando el formato AI SDK.

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
El prop `parts` es el formato recomendado para el SDK de IA. Cada parte tiene un `type` (por ejemplo,'text') y el contenido correspondiente. El componente ChatMessage también admite el prop `content` obsoleto para compatibilidad con versiones anteriores.
::

### lado

Utilice el soporte `side` para mostrar el mensaje a la izquierda o a la derecha.

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
Cuando se utiliza el componente [`ChatMessages`](/docs/components/chat-messages), el prop `side` se establece en `left` para mensajes `assistant` y `right` para mensajes `user`.
::

### Variante

Utilice el prop `variant` para cambiar el estilo del mensaje.

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
Cuando se utiliza el componente [`ChatMessages`](/docs/components/chat-messages), el prop `variant` se establece en `naked` para los mensajes `assistant` y `soft` para los mensajes `user`.
::

### Color: badge{label="4.8+" class="align-text-top"} (en inglés)

Utilice el prop `color` para cambiar el color del mensaje.

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

Utilice el prop `icon` para mostrar un componente [Icon](/docs/components/icon) junto al mensaje.

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

### Avatar en Español

Utilice el prop `avatar` para mostrar un componente [Avatar](/docs/components/avatar) junto al mensaje.

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

También puede utilizar el soporte `avatar.icon` para mostrar un icono como el avatar.

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

Xph180xAcciones

Utilice el prop `actions` para mostrar las acciones debajo del mensaje que se mostrarán al pasar el cursor sobre el mensaje.

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

## Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general de **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

## API (Versión)

### Props (accesorios)

:component-props

### Slots (Edición española)

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
