---
title: Chateado
description: Mostrar un efecto de animación de brillo de texto.
category: chat
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatShimmer.vue
---

@@pH000@@Uso del producto

El componente ChatShimmer representa un elemento con un gradiente de brillo animado sobre el texto, comúnmente utilizado para indicar los estados de transmisión o carga en las interfaces de chat.

::note
Este componente es utilizado automáticamente por los componentes [`ChatTool`](/docs/components/chat-tool) y [`ChatReasoning`](/docs/components/chat-reasoning) cuando se transmite.
::

::tip
La animación se deshabilita automáticamente cuando el usuario prefiere el movimiento reducido, el texto se muestra como texto estático silenciado en su lugar.
::

@111@Texto

Utilice el prop `text` para establecer el texto de brillo.

::component-code
---
Props:
  Título:"El pensamiento..."
---
::

@@pH013@Duración

Utilice el prop `duration` para controlar la velocidad de la animación en segundos.

::component-code
---
Props:
  Título:"El pensamiento..."
  Duraciones: 4
---
::

@@15000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `spread` para controlar el ancho de la luz de brillo. La propagación real se calcula como `text.length * spread` en píxeles.

::component-code
---
Props:
  Título:"El pensamiento..."
  Difusión: 5
---
::

@18@Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

@@21@2012

@@2222@2222@2222

Componentes Props

@@23000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@24@Changelog

Categoría: component-changelog
