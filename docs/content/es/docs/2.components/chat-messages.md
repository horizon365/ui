---
title: Chatmensajes
description: 'Muestra una lista de mensajes de chat, diseñados para funcionar sin problemas con Vercel AI SDK.'
category: chat
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessages.vue
---

@@pH000@@Uso del producto

El componente ChatMessages muestra una lista de [ChatMessage](/docs/components/chat-message) componentes utilizando la ranura predeterminada o el `messages` prop.

```vue {2,8}
<template>
  <UChatMessages>
    <UChatMessage
      v-for="(message, index) in messages"
      :key="index"
      v-bind="message"
    />
  </UChatMessages>
</template>
```

::callout{icon="i-lucide-rocket"}
Este componente está diseñado específicamente para chatbots de IA con características como:

- Desplazamiento inicial hasta la parte inferior al cargar ([`shouldScrollToBottom`](#should-scroll-to-bottom)).
Desplazamiento continuo hacia abajo a medida que llegan nuevos mensajes ([`shouldAutoScroll`](#should-auto-scroll)).
- Un botón de "Auto scroll" aparece cuando se desplaza hacia arriba, permitiendo a los usuarios volver a los últimos mensajes ([`autoScroll`](#auto-scroll)).
- Un indicador de carga se muestra mientras el asistente está procesando ([`status`](#status)).
- Los mensajes enviados se desplazan hasta la parte superior de la ventana y la altura del último mensaje del usuario se ajusta dinámicamente.
::

@@42@Mensajes

Utilice el prop `messages` para mostrar una lista de mensajes de chat.

::component-code
---
Categoría: true
Externo:
  @@44@mensajes
Ignora:
  @@pH045@mensajes
Escondido:
  - shouldScrollToBottom (Edición española)
Colapso: Verdad
Categoría: Overflow-y-auto
Props:
  mensajes:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'
      Rol: Usuario
      partes:
        - tipo:'texto'
          Texto: "Hola,¿ cómo estás?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'
      Función: Asistente
      partes:
        - tipo:'texto'
          Texto: "Estoy bien, gracias por preguntar,¿ cómo puedo ayudarle hoy?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'
      Rol: usuario
      partes:
        - type:'texto'
          Texto: "¿ Cuál es el clima actual en Tokio?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Función: Asistente
      partes:
        - tipo:'texto'
          Texto:"Según los últimos datos, Tokio está experimentando actualmente un clima soleado con temperaturas de alrededor de 24 ° C (75 ° F).
  Tablero: Falso
---
::

@@505@@Estado

Utilice el prop `status` para mostrar un indicador visual cuando el asistente está procesando.

::component-code
---
Categoría: true
Externo:
  @@57@mensajes
Ignora:
  @@58@mensajes
  @@500@@estado
Escondido:
  @@ph060@shouldScrollToBottom (Edición española)
Categoría: Overflow-y-auto
Props:
  Estado: "Presentado"
  Mensajes:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'
      Rol: usuario
      partes:
        - tipo:'texto'
          Texto: "Hola,¿ cómo estás?"
  Tablero: Falso
---
::

::note
Aquí está el detalle de los diferentes estados del SDK de IA `useChat` composable:

- `submitted`: El mensaje ha sido enviado a la API y estamos esperando el inicio del flujo de respuesta.
- `streaming`: La respuesta se transmite activamente desde la API, recibiendo fragmentos de datos.
- `ready`: La respuesta completa ha sido recibida y procesada; un nuevo mensaje de usuario puede ser enviado.
- `error`: Se produjo un error durante la solicitud de API, lo que impidió su finalización exitosa.
::

@@2007@usuario

Utilice el prop `user` para cambiar el prop [ChatMessage](/docs/components/chat-message) para los mensajes `user`.

@@ph080@@@ph081
@@

::component-code
---
Categoría: true
Externo:
  @@pH085@mensajes
Ignora:
  @@pH086@mensajes
  - avatar.src (en inglés)
  - avatar.carga
Escondido :
  - shouldScrollToBottom (Edición española)
Colapso : Verdad
Items :
  user.variant:
    @@pH090@@sólido
    @091@espanol
    @2009@subtil
    @@pH093@
    @@pH094@naked (en inglés)
  user.side:
    @095@izquierda
    @@pH096@@derecha
Categoría : Overflow-y - auto
Props :
  Usuario :
    Categoría : Left
    Variante : Sólido
    El avatar :
      El src :https://github.com/benjamincanac.png
      Categoría : Lazy
  mensajes :
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'
      Rol: usuario
      partes:
        - tipo:'texto'
          Texto: "Hola,¿ cómo estás?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'
      Función: Asistente
      partes:
        - tipo:'texto'
          Texto: "Estoy bien, gracias por preguntar,¿ cómo puedo ayudarle hoy?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'
      Rol: usuario
      partes:
        - tipo:'texto'
          Texto: "¿ Cuál es el clima actual en Tokio?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Función: Asistente
      partes:
        - tipo:'texto'
          Texto:"Según los últimos datos, Tokio está experimentando actualmente un clima soleado con temperaturas de alrededor de 24 ° C (75 ° F).
  Tablero: Falso
---
::

@@P105@Asistente de usuario

Utilice el prop `assistant` para cambiar el prop [ChatMessage](/docs/components/chat-message) para los mensajes `assistant`.

@@112@@@113@@114 @
@@115@@116@117

::component-code
---
Categoría: true
Externo:
  @118@mensajes
Ignora:
  @@119@mensajes
  - avatar.icon
  - assistant.acciones
Escondido:
  - shouldScrollToBottom (Edición española)
Colapso: Verdad
items:
  assistant.variant:
    @@ph123@@sólido
    @124 @ Proyecto
    @125 @ subtil
    @126 @@ de nuevo
    @127 @@ Desconocido
  assistant.side:
    @128 @ izquierda
    @@pH129@@derecha
Categoría: Overflow-y-auto
Props:
  Asistente:
    Categoría: Left
    Categoría: Outline
    El avatar:
      Icono: i-lucide-bot
    Acciones:
      - label:'Copiar al portapapeles'
        Archivo de la etiqueta: i-lucide-copy
  Mensajes:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'
      Rol: usuario
      partes:
        - tipo:'texto'
          Texto: "Hola,¿ cómo estás?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'
      Función: Asistente
      partes:
        - tipo:'texto'
          Texto: "Estoy bien, gracias por preguntar,¿ cómo puedo ayudarle hoy?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'
      Rol: usuario
      partes:
        - tipo:'texto'
          Texto: "¿ Cuál es el clima actual en Tokio?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Función: Asistente
      partes:
        - tipo:'texto'
          Texto:"Según los últimos datos, Tokio está experimentando actualmente un clima soleado con temperaturas de alrededor de 24 ° C (75 ° F).
  Tablero: Falso
---
::

### Auto Scroll (Edición española)

Utilice el prop `auto-scroll` para personalizar u ocultar el botón de desplazamiento automático (con el valor `false`) que se muestra al desplazarse hasta la parte superior del chat.

@@ph142@@@ph143 @
- `variant: 'outline'`{lang="ts-type"}

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
Categoría: true
Colapso: Verdad
Externo:
  @@ph152@mensajes
Ignora:
  @@pH153@mensajes
  - autoScroll.color
  - autoScroll.variante
  - shouldScrollToBottom (Edición española)
clase: 'overflow-y-auto max-h-[341px] static'
Props:
  Autoscroll:
    Color: Neutral
    Categoría: Outline
  Tablero: Falso
  mensajes:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'
      Rol: usuario
      partes:
        - tipo:'texto'
          Texto: "Hola,¿ cómo estás?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'
      Función: Asistente
      partes:
        - tipo:'texto'
          Texto: "Estoy bien, gracias por preguntar,¿ cómo puedo ayudarle hoy?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'
      Rol: usuario
      partes:
        - tipo:'texto'
          Texto: "¿ Cuál es el clima actual en Tokio?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Función: Asistente
      partes:
        - tipo:'texto'
          Texto: Según los últimos datos, Tokio está experimentando actualmente un clima soleado con temperaturas de alrededor de 24 ° C (75 ° F). Es un hermoso día con cielos despejados.El pronóstico para el resto de la semana muestra una ligera posibilidad de lluvia el jueves, con temperaturas que aumentan gradualmente a 28 ° C para el fin de semana. Los niveles de humedad son moderados en torno al 65%, y las velocidades del viento son ligeras a 8 km/h desde el sureste. La calidad del aire es buena con un índice de 42. El índice UV es alto a 7, por lo que se recomienda usar protector solar si planea pasar tiempo al aire libre. El amanecer fue a las 5:24 AM y la puesta del sol será a las 6:24: 48 PM, dando a Tokio aproximadamente 13 horas y 24 minutos de luz del día de hoy. La luna está actualmente en su fase gibosa creciente.
    - id:'c3e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Rol: usuario
      partes:
        - type:'texto'(en inglés)
          texto: '¿ Puede recomendar algunas atracciones turísticas populares en Kyoto?'
    - id:'d4f5g8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Función: Asistente
      partes:
        - tipo:'texto'
          Texto: Kioto es conocida por sus hermosos templos, casas de té tradicionales y jardines.Algunas atracciones populares incluyen Kinkaku-ji.(Pabellón Dorado) con su impresionante exterior de pan de oro que se refleja en el estanque de espejo, el santuario Fushimi Inari con sus miles de puertas torii bermellón que serpentean por la ladera de la montaña, Arashiyama Bamboo Grove donde los tallos imponentes crean una atmósfera de otro mundo, El templo Kiyomizu-dera se alza en una ladera que ofrece vistas panorámicas de la ciudad, y el histórico distrito de Gion, donde es posible ver a las geishas apresurándose a las citas nocturnas a través de estrechas calles pavimentadas de piedra bordeadas de casas tradicionales de madera machiya.
---
::

### Auto Scroll Icon (Edición española)

Utilice el prop `auto-scroll-icon` para personalizar el botón de desplazamiento automático [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Colapso: Verdad
Externo:
  @176@mensajes
Ignora:
  @177@mensajes
  - autoScroll.color
  - autoScroll.variante
  - shouldScrollToBottom (Edición española)
clase: 'overflow-y-auto max-h-[341px] static'
Props:
  autoScrollIcon: 'i-lucide-chevron-down'
  Tablero: Falso
  mensajes:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'
      Rol: usuario
      partes:
        - tipo:'texto'
          Texto: "Hola,¿ cómo estás?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'
      Función: Asistente
      partes:
        - tipo:'texto'
          Texto: "Estoy bien, gracias por preguntar,¿ cómo puedo ayudarle hoy?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'
      Rol: usuario
      partes:
        - tipo:'texto'
          Texto: "¿ Cuál es el clima actual en Tokio?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Función: Asistente
      partes:
        - tipo:'texto'
          Texto: Según los últimos datos, Tokio está experimentando actualmente un clima soleado con temperaturas de alrededor de 24 ° C (75 ° F). Es un hermoso día con cielos despejados.El pronóstico para el resto de la semana muestra una ligera posibilidad de lluvia el jueves, con temperaturas que aumentan gradualmente a 28 ° C para el fin de semana. Los niveles de humedad son moderados en torno al 65%, y las velocidades del viento son ligeras a 8 km/h desde el sureste. La calidad del aire es buena con un índice de 42. El índice UV es alto a 7, por lo que se recomienda usar protector solar si planea pasar tiempo al aire libre. El amanecer fue a las 5:24 AM y la puesta del sol será a las 6:24: 48 PM, dando a Tokio aproximadamente 13 horas y 24 minutos de luz del día de hoy. La luna está actualmente en su fase gibosa creciente.
    - id:'c3e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Rol: usuario
      partes:
        - tipo:'texto'
          texto: '¿ Puede recomendar algunas atracciones turísticas populares en Kyoto?'
    - id:'d4f5g8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Función: Asistente
      partes:
        - tipo:'texto'
          Texto: Kioto es conocida por sus hermosos templos, casas de té tradicionales y jardines.Algunas atracciones populares incluyen Kinkaku-ji.(Pabellón Dorado) con su impresionante exterior de pan de oro que se refleja en el estanque de espejo, el santuario Fushimi Inari con sus miles de puertas torii bermellón que serpentean por la ladera de la montaña, Arashiyama Bamboo Grove donde los tallos imponentes crean una atmósfera de otro mundo, El templo Kiyomizu-dera se alza en una ladera que ofrece vistas panorámicas de la ciudad, y el histórico distrito de Gion, donde es posible ver a las geishas apresurándose a las citas nocturnas a través de estrechas calles pavimentadas de piedra bordeadas de casas tradicionales de madera machiya.
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.arrowDown`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.arrowDown`.
:::
::

### Debería Auto Scroll

Utilice el prop `should-auto-scroll` para habilitar/deshabilitar el desplazamiento automático continuo mientras los mensajes están transmitiendo.

```vue
<template>
  <UChatMessages :messages="messages" should-auto-scroll />
</template>
```

### Debería desplazarse hacia abajo

Utilice el prop `should-scroll-to-bottom` para habilitar/deshabilitar el desplazamiento automático inferior cuando el componente esté montado.

```vue
<template>
  <UChatMessages :messages="messages" :should-scroll-to-bottom="false" />
</template>
```

@@213@Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

### Con ranura de indicador

Utilice la ranura `#indicator` para personalizar el indicador de carga con un efecto [`ChatShimmer`](/docs/components/chat-shimmer).

::component-example
---
Nombre: 'chat-mensajes-indicador-slot-ejemplo'
Categoría: Overflow-y-auto
Colapso: Verdad
---
::

@223

@224@224@224

Componentes Props

@225@225@225

Componentes de slots

::tip
Puede usar todas las ranuras del componente [`ChatMessage`](/docs/components/chat-message#slots) dentro de ChatMessages, se reenvían automáticamente para que pueda personalizar mensajes individuales cuando usa el `messages` prop.

```vue{7-15}
<script setup lang="ts">
import { isTextUIPart } from 'ai'
</script>

<template>
  <UChatMessages :messages="messages" :status="status">
    <template #content="{ message }">
      <template
        v-for="(part, index) in message.parts"
        :key="`${message.id}-${part.type}-${index}`"
      >
        <p v-if="isTextUIPart(part)" class="whitespace-pre-wrap">
          {{ part.text }}
        </p>
      </template>
    </template>
  </UChatMessages>
</template>
```
::

@@252@@Exposición25

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @@|@@@ 256 @|

@257 @@ Temas

Componente Tema

@@258@Changelog

Categoría: component-changelog
