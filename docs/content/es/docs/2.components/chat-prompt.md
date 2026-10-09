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

xph0000xUso

El componente ChatPrompt procesa un elemento `<form>` y extiende el componente [Textarea](/docs/components/textarea) para que pueda pasar cualquier propiedad como `icon`, `placeholder`, `autofocus`, etc.

::component-example
---
collapse: true
name: 'chat-prompt-example'
---
::

::note
El ChatPrompt maneja los siguientes eventos:

- El formulario se envía cuando el usuario presiona: kbd{value="enter"} o cuando el usuario hace clic en el botón enviar. Establezca el prop `submit-on-enter` en `false` para enviar con: kbd{value="ctrl"} +: kbd{value="enter"} (o: kbd{value="cmd"} +: kbd{value="enter"} en macOS) en su lugar, permitiendo que: kbd{value="enter"} inserte una nueva línea.
- El área de texto se difumina cuando: kbd{value="escape"} se presiona y emite un evento `close`.
::

### Variante

Utilice el prop `variant` para cambiar el estilo del prompt. Defaults a `outline`.

::component-code
---
hide:
  - autofocus
props:
  variant: 'soft'
  autofocus: false
---
::

## Ejemplos

::tip{to="/docs/components/chat"}
Consulte la página de descripción general de **Chat** para obtener instrucciones de instalación, configuración del servidor y ejemplos de uso.
::

### Con un Editor: badge{label="4.10+" class="align-text-top"}

Componga las ranuras `#header`, `#body` y `#footer` para crear un prompt rico: archivos adjuntos, un [Editor](xph047) con menciones `@` y comandos `/` a través de [EditorMentionMenu](/docs/components/editor-mention-menu), y un selector de modo.

::component-example
---
collapse: true
name: 'chat-prompt-editor-example'
class: 'justify-center'
---
::

::note
La ranura `#body` reemplaza el área de texto interna y expone los manejadores `submit` y `close`, de modo que puede conectar los atajos de teclado del editor al formulario. Cuando se abre un menú de mención, presionando: kbd{value="enter"} selecciona el elemento resaltado en lugar de enviarlo.
::

Página de inicio ### As

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

## API (Edición española)

### Accesorios

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<textarea>`.
::

### Slots (Edición española)

:component-slots

### Emisiones

:component-emits

### Expose

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `textareaRef`{lang="ts-type"} (Edición española)| `Ref<HTMLTextAreaElement \| null>`x{lang="ts-type"} (Edición española)|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
