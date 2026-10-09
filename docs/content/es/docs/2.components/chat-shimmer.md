---
title: Chateado
description: Mostrar un efecto de animación de brillo de texto.
category: chat
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatShimmer.vue
---

xph0000xUso

El componente ChatShimmer representa un elemento con un gradiente de brillo animado sobre el texto, comúnmente utilizado para indicar los estados de transmisión o carga en las interfaces de chat.

::note
Este componente es utilizado automáticamente por los componentes [`ChatTool`](/docs/components/chat-tool) y [`ChatReasoning`](/docs/components/chat-reasoning) durante la transmisión.
::

::tip
La animación se deshabilita automáticamente cuando el usuario prefiere el movimiento reducido, el texto se muestra como texto estático silenciado en su lugar.
::

### Text (Edición española)

Utilice el prop `text` para establecer el texto de brillo.

::component-code
---
props:
  text: 'Thinking...'
---
::

### Duracion

Utilice el prop `duration` para controlar la velocidad de la animación en segundos.

::component-code
---
props:
  text: 'Thinking...'
  duration: 4
---
::

### Difusión

Utilice el prop `spread` para controlar el ancho de la luz de brillo. La propagación real se calcula como `text.length * spread` en píxeles.

::component-code
---
props:
  text: 'Thinking...'
  spread: 5
---
::

## Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general de **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

## API (Edición española)

### Props (Edición española)

:component-props

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
