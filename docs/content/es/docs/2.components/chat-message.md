---
title: chatmensaje
description: 'Mostrar un mensaje de chat con icono, avatar y acciones.'
category: chat
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessage.vue
---

@@pH000@@Uso del producto

El componente ChatMessage representa un elemento `<article>` para un mensaje de chat `user` o `assistant`.

::code-preview

::u-chat-message
---
partes:
  - type:'texte'
    Nombre: "1"
    texto: 'Hola! Cuéntame más sobre la creación de chatbots de IA con Nuxt UI.'
Étiquette:"Right"
Categoría:"Soft"
Función:"Usuario"
Nombre: "1"
El avatar:
  src: 'https://github.com/benjamincanac.png'
  Categoría: Lazy
---
::

::

::tip{to="/docs/components/chat-messages"}
Utilice el componente `ChatMessages` para mostrar una lista de mensajes de chat.
::

@@pH006@puntos

Utilisez la prop `parts` pour afficher le contenu du message en utilisant le format AI SDK.

::component-code
---
Categoría: true
Ignora:
  @008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH009@rôle
  @@ph010@id.
Props:
  partes:
    - tipo:'texto'
      Nombre: "1"
      texto: 'Hola! Cuéntame más sobre la creación de chatbots de IA con Nuxt UI.'
  Función:"Usuario"
  Nombre: "1"
---
::

::note
El `parts` prop es el formato recomendado para el SDK de IA. Cada parte tiene un `type`(por ejemplo,'texto') y el contenido correspondiente. El componente ChatMessage también admite el obsoleto `content` prop para compatibilidad con versiones anteriores.
::

@@15 @

Utilice el prop `side` para mostrar el mensaje a la izquierda o derecha.

::component-code
---
Categoría: true
Ignora:
  @170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@@ph018@rôle
  @@pH019
Props:
  Étiquette:"Right"
  partes:
    - tipo:'texto'
      Nombre: "1"
      texto: 'Hola! Cuéntame más sobre la creación de chatbots de IA con Nuxt UI.'
  Función:"Usuario"
  Nombre: "1"
---
::

::note
Lorsque vous utilisez le composant [`ChatMessages`](/docs/components/chat-messages), le prop `side` est défini sur `left` pour les messages `assistant` et `right` pour les messages `user`.
::

@@P201@@Variante

Utilice el prop `variant` para cambiar el estilo del mensaje.

::component-code
---
Categoría: true
Ignora:
  @333@@puntos
  @@pH034@rôle
  @@pH035
Props:
  Categoría:"Soft"
  partes:
    - tipo:'texto'
      Nombre: "1"
      texto: 'Hola! Cuéntame más sobre la creación de chatbots de IA con Nuxt UI.'
  Función:"Usuario"
  Nombre: "1"
---
::

::note
Cuando se utiliza el [`ChatMessages`](/docs/components/chat-messages) componente, el `variant` prop se establece en `naked` para `assistant` mensajes y `soft` para `user` mensajes.
::

### Color: insignia @

Utilice el prop `color` para cambiar el color del mensaje.

::component-code
---
Categoría: true
Ignora:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@501@@Rol
  @@502@id.
Props:
  Categoría:"Soft"
  Categoría:"Primary"
  partes:
    - tipo:'texto'
      Nombre: "1"
      texto: 'Hola! Cuéntame más sobre la creación de chatbots de IA con Nuxt UI.'
  Función:"Usuario"
  Nombre: "1"
---
::

@@54@Icon

Utilice el prop `icon` para mostrar un componente [Icon](/docs/components/icon) junto al mensaje.

::component-code
---
Categoría: true
Ignora:
  @@pH060@puntos
  @@pH061@@lado
  @@P062@Variación
  @@pH063@rol
  @@pH064
Props:
  Icono: i-lucide-usuario
  Categoría:"Soft"
  Categoría:"Right"
  partes:
    - tipo:'texto'
      Nombre: "1"
      texto: 'Hola! Cuéntame más sobre la creación de chatbots de IA con Nuxt UI.'
  Función:"Usuario"
  Nombre: "1"
---
::

@666@Avatara

Utilice el prop `avatar` para mostrar un componente [Avatar](/docs/components/avatar) junto al mensaje.

::component-code
---
Categoría: true
Ignora:
  @@2007@@artículos
  @@pH073@@lado
  @@74@Variación
  @750@@Rol
  @@pH076
  - avatar.carga
Props:
  El avatar:
    src: 'https://github.com/benjamincanac.png'
    Categoría: Lazy
  Categoría:"Soft"
  Categoría:"Right"
  partes:
    - tipo:'texto'
      Nombre: "1"
      texto: 'Hola! Cuéntame más sobre la creación de chatbots de IA con Nuxt UI.'
  Función:"Usuario"
  Nombre: "1"
---
::

También puede utilizar el prop `avatar.icon` para mostrar un icono como el avatar.

::component-code
---
Categoría: true
Ignora:
  @080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @081
  @082 @@ Nombre
Props:
  El avatar:
    Icono: i-lucide-bot
  partes:
    - tipo:'texto'
      Nombre: "1"
      Texto: Nuxt UI ofrece varias características para la creación de chatbots de IA, incluidos los componentes ChatMessage, ChatMessages y ChatPrompt. Las mejores prácticas incluyen el uso de la clase Chat del SDK de AI, la implementación de un estilo de mensaje adecuado con variantes y la utilización de las acciones integradas para las interacciones de mensajes. Los componentes son totalmente personalizables con soporte de temas y diseño receptivo.
  Categoría:"Asistente"
  Nombre: "1"
---
::

@@84@Acciones

Utilice el prop `actions` para mostrar las acciones debajo del mensaje que se mostrarán al pasar el cursor sobre el mensaje.

::component-code
---
Categoría: true
Externo:
  @@86@acciones
Externalidades:
  @@@P287 @@BotónProps []
Ignora:
  @@888@puntos
  @@89@acciones
  @090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH091
Props:
  Acciones:
    - label:'Copiar al portapapeles'
      Archivo de la etiqueta: i-lucide-copy
  partes:
    - tipo:'texto'
      Nombre: "1"
      Texto: Nuxt UI ofrece varias características para la creación de chatbots de IA, incluidos los componentes ChatMessage, ChatMessages y ChatPrompt. Las mejores prácticas incluyen el uso de la clase Chat del SDK de AI, la implementación de un estilo de mensaje adecuado con variantes y la utilización de las acciones integradas para las interacciones de mensajes. Los componentes son totalmente personalizables con soporte de temas y diseño receptivo.
  Función:"Usuario"
  Nombre: "1"
---
::

@@pH094@Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

@@pH097

@098@098@098

Componentes Props

@@999@@espanol

Componentes de slots

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@101@Changelog

Categoría: component-changelog
