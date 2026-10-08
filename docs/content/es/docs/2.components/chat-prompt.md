---
title: Chatrápido
description: 'Una Textarea mejorada para enviar mensajes en las interfaces de chat de IA.'
category: chat
links:
  - label: Textería
    to: /docs/components/textarea
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPrompt.vue
---

@@pH000@@Uso del producto

El componente ChatPrompt procesa un elemento `<form>` y extiende el componente [Textarea](/docs/components/textarea) para que pueda pasar cualquier propiedad como `icon`,`placeholder`,`autofocus`, etc.

::component-example
---
Colapso: Verdad
Nombre: 'chat-prompt-example'
---
::

::note
El ChatPrompt maneja los siguientes eventos:

- El formulario se envía cuando el usuario presiona: kbd{value="enter"} o cuando el usuario hace clic en el botón enviar. Establezca el prop `submit-on-enter` a `false` para enviar con: kbd{value="ctrl"}+: kbd{value="enter"}(o: kbd{value="cmd"}+: kbd{value="enter"} en macOS) en su lugar, permitiendo que: kbd{value="enter"} inserte una nueva línea.
- El área de texto se difumina cuando: kbd{value="escape"} se presiona y emite un evento `close`.
::

@@21@Variante

Utilice la prop `variant` para cambiar el estilo del prompt. Defaults a `outline`.

::component-code
---
Escondido:
  @24@autofocus
Props:
  Categoría:"Soft"
  Autoenfoque: Falso
---
::

@@25@Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

### Con un editor: badge{label="4.10+" class="align-text-top"}

Componga los slots `#header`,`#body` y `#footer` para crear un prompt rico: archivos adjuntos, un [Editor](/docs/components/editor) con `@` menciones y `/` comandos a través de [EditorMentionMenu](/docs/components/editor-mention-menu), y un selector de moda.

::component-example
---
Colapso: Verdad
Nombre: 'chat-prompt-editor-ejemplo'
Categoría: Justificación-Centro
---
::

::note
La ranura `#body` reemplaza el área de texto interna y expone los manejadores `submit` y `close`, de modo que puede conectar los atajos de teclado del editor al formulario. Cuando se abre un menú de mención, presionando: kbd{value="enter"} selecciona el elemento resaltado en lugar de enviarlo.
::

### Como página de inicio

También puede usarlo en la página de inicio de la interfaz de chat.

```vue [pages/index.vue] {2,4,8-15,24,26}
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const input = ref('')

const { messages, status, sendMessage } = useChat()

async function onSubmit() {
  sendMessage({ text: input.value })

  // Navigate to chat page after first message
  if (messages.value.length === 1) {
    await navigateTo('/chat')
  }
}
</script>

<template>
  <UDashboardPanel>
    <template #body>
      <UContainer>
        <h1>How can I help you today?</h1>

        <UChatPrompt v-model="input" @submit="onSubmit">
          <UChatPromptSubmit :status="status" />
        </UChatPrompt>
      </UContainer>
    </template>
  </UDashboardPanel>
</template>
```

@080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@081@081@081@081

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<textarea>`.
::

@083@espanol

Componentes de slots

@@84000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Emisiones

@085@@Exposicion

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| @@|@@@ph087 @|

@090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@changelog

Categoría: component-changelog
