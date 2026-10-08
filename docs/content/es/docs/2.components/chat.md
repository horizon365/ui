---
description: Cree interfaces de chat de IA con transmisión, razonamiento y llamadas de herramientas.
category: chat
index: true
links:
  - label: El SDK
    icon: i-simple-icons-vercel
    to: https://ai-sdk.dev/
    target: _blank
---

Nuxt UI proporciona un conjunto de componentes diseñados para construir interfaces de chat impulsadas por IA. Se integran perfectamente con el [Vercel AI SDK](https://ai-sdk.dev/) para transmitir respuestas, razonamiento, llamadas a herramientas y más.

::callout{icon="i-simple-icons-github"}
Echa un vistazo a las plantillas de [`Nuxt`](https://github.com/nuxt-ui-templates/chat) y [`Vue`](https://github.com/nuxt-ui-templates/chat-vue) AI Chat en GitHub para implementaciones listas para la producción.
::

## Componentes

| Componente| Descripción|
| --- | --- |
| @@| Lista de mensajes desplazable con desplazamiento automático e indicador de carga.|
| @@| Burbuja de mensajes individual con avatar, acciones y ranuras.|
| @@| Textarea mejorada para enviar mensajes rápidos.|
| ](/docs/components/chat-prompt-submit/docs/components/chat-prompt-submit)| Botón de envío con manejo automático de estado.|
| [](/docs/components/chat-reasoning)| Bloque plegable para el proceso de razonamiento/pensamiento de IA.|
| @@| Bloque plegable para el estado de invocación de la herramienta AI.|
| @@ph039@@@@ph040@@@ph041@@@ph042| Animación de shimmer de texto para estados de transmisión.|
| @@| Layout wrapper para incrustar chat en modales o cajones.|

## Instalación

Los componentes de Chat están diseñados para ser utilizados con la clase [Vercel AI SDKhttps://ai-sdk.dev/), específicamente la clase [`Chat`](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-chat) para administrar el estado del chat y las respuestas de transmisión.

Instalar las dependencias necesarias:

::framework-only
#Nuxidad
:::div

::::code-group{sync="pm"}

```bash [pnpm]
pnpm add ai @ai-sdk/gateway @ai-sdk/vue @comark/nuxt
```

```bash [yarn]
yarn add ai @ai-sdk/gateway @ai-sdk/vue @comark/nuxt
```

```bash [npm]
npm install ai @ai-sdk/gateway @ai-sdk/vue @comark/nuxt
```

```bash [bun]
bun add ai @ai-sdk/gateway @ai-sdk/vue @comark/nuxt
```

::::

Añadir `@comark/nuxt` a sus módulos:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@comark/nuxt'
  ]
})
```

::::note
[`@comark/nuxt`](https://comark.dev/rendering/nuxt) proporciona el componente `Markdown` utilizado para renderizar las respuestas de IA como streaming Markdown, renderiza de forma incremental los tokens a medida que llegan, evitando el parpadeo y el reanálisis que causan los renderizadores de Markdown tradicionales. También habilita automáticamente los componentes [prose de Nuxt UI ](/docs/typography) para que su contenido tenga un estilo que coincida con su tema.
::::

:::

#vista
:::div

::::code-group{sync="pm"}

```bash [pnpm]
pnpm add ai @ai-sdk/gateway @ai-sdk/vue @comark/vue
```

```bash [yarn]
yarn add ai @ai-sdk/gateway @ai-sdk/vue @comark/vue
```

```bash [npm]
npm install ai @ai-sdk/gateway @ai-sdk/vue @comark/vue
```

```bash [bun]
bun add ai @ai-sdk/gateway @ai-sdk/vue @comark/vue
```

::::

::::note
[`@comark/vue`](https://comark.dev/rendering/vue) proporciona el componente `Markdown` utilizado para renderizar las respuestas de AI como Markdown en streaming, renderiza de forma incremental los tokens a medida que llegan, evitando el parpadeo y el reanálisis que causan los renderizadores de Markdown tradicionales.
<br><br>Para usar los componentes [prose de Nuxt UI ](/docs/typography) con Comark, habilite la opción `prose` en su `vite.config.ts`:

```ts [vite.config.ts] {9}
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    ui({
      prose: true
    })
  ]
})
```
::::

:::

::

## Configuración del servidor

Cree un punto final de la API del servidor para manejar las solicitudes de chat utilizando [`streamText`](). Puede usar el [Vercel AI Gateway](https://vercel.com/ai-gateway) para acceder a los modelos de IA a través de un punto final centralizado:

```ts [server/api/chat.post.ts]
import { streamText, convertToModelMessages, toUIMessageStream, createUIMessageStreamResponse } from 'ai'
import { gateway } from '@ai-sdk/gateway'

export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event)

  const result = streamText({
    model: gateway('anthropic/claude-sonnet-5'),
    maxOutputTokens: 10000,
    instructions: 'You are a helpful assistant.',
    messages: await convertToModelMessages(messages)
  })

  const stream = toUIMessageStream({ stream: result.stream })
  return createUIMessageStreamResponse({ stream })
})
```

@156@Reasoning

Para habilitar [reasoning](https://ai-sdk.dev/docs/ai-sdk-ui/chatbot#reasoning), configure `providerOptions` para su proveedor.([Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#reasoning),[Google](https://ai-sdk.dev/providers/ai-sdk-providers/google#thinking),[OpenAI](https://ai-sdk.dev/providers/ai-sdk-providers/openai#reasoning))):

```ts [server/api/chat.post.ts]
import { streamText, convertToModelMessages, toUIMessageStream, createUIMessageStreamResponse } from 'ai'
import { gateway } from '@ai-sdk/gateway'

export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event)

  const result = streamText({
    model: gateway('anthropic/claude-sonnet-5'),
    maxOutputTokens: 10000,
    instructions: 'You are a helpful assistant.',
    messages: await convertToModelMessages(messages),
    providerOptions: {
      anthropic: {
        thinking: {
          type: 'adaptive'
        },
        effort: 'low'
      },
      google: {
        thinkingConfig: {
          includeThoughts: true,
          thinkingLevel: 'low'
        }
      },
      openai: {
        reasoningEffort: 'low',
        reasoningSummary: 'detailed'
      }
    }
  })

  const stream = toUIMessageStream({ stream: result.stream })
  return createUIMessageStreamResponse({ stream })
})
```

### Búsqueda en la Web

Algunos proveedores ofrecen herramientas de búsqueda web integradas: [Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#web-search-tool),[Google](),[OpenAI]().

::code-group

```ts [Anthropic]
import { streamText, convertToModelMessages, toUIMessageStream, createUIMessageStreamResponse } from 'ai'
import { anthropic } from '@ai-sdk/anthropic'
import { gateway } from '@ai-sdk/gateway'

export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event)

  const result = streamText({
    model: gateway('anthropic/claude-sonnet-5'),
    instructions: 'You are a helpful assistant.',
    messages: await convertToModelMessages(messages),
    tools: {
      web_search: anthropic.tools.webSearch_20260209({})
    }
  })

  const stream = toUIMessageStream({ stream: result.stream })
  return createUIMessageStreamResponse({ stream })
})
```

```ts [Google]
import { streamText, convertToModelMessages, toUIMessageStream, createUIMessageStreamResponse } from 'ai'
import { google } from '@ai-sdk/google'
import { gateway } from '@ai-sdk/gateway'

export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event)

  const result = streamText({
    model: gateway('google/gemini-3-flash'),
    instructions: 'You are a helpful assistant.',
    messages: await convertToModelMessages(messages),
    tools: {
      google_search: google.tools.googleSearch({})
    }
  })

  const stream = toUIMessageStream({ stream: result.stream })
  return createUIMessageStreamResponse({ stream })
})
```

```ts [OpenAI]
import { streamText, convertToModelMessages, toUIMessageStream, createUIMessageStreamResponse } from 'ai'
import { openai } from '@ai-sdk/openai'
import { gateway } from '@ai-sdk/gateway'

export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event)

  const result = streamText({
    model: gateway('openai/gpt-5-nano'),
    instructions: 'You are a helpful assistant.',
    messages: await convertToModelMessages(messages),
    tools: {
      web_search: openai.tools.webSearch({})
    }
  })

  const stream = toUIMessageStream({ stream: result.stream })
  return createUIMessageStreamResponse({ stream })
})
```

::

### MCP cliente

Capacite a su chatbot con funciones avanzadas de llamada de herramientas utilizando el [Model Context Protocol (MCP)]() de `@ai-sdk/mcp`. MCP permite que su IA realice acciones dinámicas, como buscar su documentación o ejecutar tareas personalizadas, para proporcionar respuestas más relevantes y precisas.

Para comenzar, instale el paquete MCP:

:::code-group

```bash [npm]
npm install @ai-sdk/mcp
```

```bash [pnpm]
pnpm add @ai-sdk/mcp
```

```bash [yarn]
yarn add @ai-sdk/mcp
```

:::

A continuación, configure el punto final del servidor para usar las herramientas MCP.

```ts [server/api/chat.post.ts]
import { streamText, convertToModelMessages, isStepCount, toUIMessageStream, createUIMessageStreamResponse } from 'ai'
import { createMCPClient } from '@ai-sdk/mcp'
import { gateway } from '@ai-sdk/gateway'

export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event)

  const httpClient = await createMCPClient({
    transport: { type: 'http', url: 'https://your-app.com/mcp' }
  })
  try {
    const tools = await httpClient.tools()

    const result = streamText({
      model: gateway('anthropic/claude-sonnet-5'),
      maxOutputTokens: 10000,
      instructions: 'You are a helpful assistant. Use your tools to search for relevant information before answering questions.',
      messages: await convertToModelMessages(messages),
      stopWhen: isStepCount(6),
      tools,
      onEnd: async () => {
        await httpClient.close()
      },
      onError: async (error) => {
        console.error(error)
        await httpClient.close()
      }
    })

    const stream = toUIMessageStream({ stream: result.stream })
    return createUIMessageStreamResponse({ stream })
  } catch (error) {
    // Close the MCP client if setup fails before streaming starts
    await httpClient.close()
    throw error
  }
})
```

### Aprobación de la herramienta

Requerir una confirmación del usuario antes de que una herramienta se ejecute con la opción [`toolApproval`](). La parte de la herramienta se detiene en el estado `approval-requested` hasta que el usuario responde:

```ts [server/api/chat.post.ts]
import { streamText, convertToModelMessages, toUIMessageStream, createUIMessageStreamResponse, tool } from 'ai'
import { gateway } from '@ai-sdk/gateway'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event)

  const result = streamText({
    model: gateway('anthropic/claude-sonnet-5'),
    maxOutputTokens: 10000,
    instructions: 'You are a helpful assistant.',
    messages: await convertToModelMessages(messages),
    tools: {
      deleteFile: tool({
        description: 'Delete a file from the project',
        inputSchema: z.object({ path: z.string() }),
        execute: async ({ path }) => ({ deleted: path })
      })
    },
    toolApproval: {
      deleteFile: 'user-approval'
    }
  })

  const stream = toUIMessageStream({ stream: result.stream })
  return createUIMessageStreamResponse({ stream })
})
```

## Configuración del cliente

Utilice el componente `useChat` de `@ai-sdk/vue` para administrar el estado del chat y conectarse a su punto final del servidor:

::framework-only
#Nuxidad
```vue
<script setup lang="ts">
import { isReasoningUIPart, isTextUIPart, isToolUIPart, getToolName, lastAssistantMessageIsCompleteWithApprovalResponses } from 'ai'
import { useChat } from '@ai-sdk/vue'
import { isPartStreaming, isToolStreaming } from '@nuxt/ui/utils/ai'
import shiki from '@comark/nuxt/plugins/shiki'

const plugins = [shiki()]

const input = ref('')

const { messages, status, error, sendMessage, regenerate, stop, addToolApprovalResponse } = useChat({
  sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses,
  onError(error) {
    console.error(error)
  }
})

function onSubmit() {
  sendMessage({ text: input.value })

  input.value = ''
}
</script>

<template>
  <UChatMessages
    :messages="messages"
    :status="status"
  >
    <template #content="{ message }">
      <template
        v-for="(part, index) in message.parts"
        :key="`${message.id}-${part.type}-${index}`"
      >
        <UChatReasoning
          v-if="isReasoningUIPart(part)"
          :text="part.text"
          :streaming="isPartStreaming(part)"
        >
          <Markdown
            :value="part.text"
            :streaming="isPartStreaming(part)"
            :plugins="plugins"
            class="*:first:mt-0 *:last:mb-0"
          />
        </UChatReasoning>

        <UChatTool
          v-else-if="isToolUIPart(part)"
          :text="getToolName(part)"
          :streaming="isToolStreaming(part)"
          :actions="part.state === 'approval-requested' ? [
            { label: 'Approve', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: true }) },
            { label: 'Deny', color: 'neutral', variant: 'ghost', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: false }) }
          ] : undefined"
        />

        <template v-else-if="isTextUIPart(part)">
          <Markdown
            v-if="message.role === 'assistant'"
            :value="part.text"
            :streaming="isPartStreaming(part)"
            :plugins="plugins"
            class="*:first:mt-0 *:last:mb-0"
          />
          <p v-else-if="message.role === 'user'" class="whitespace-pre-wrap">
            {{ part.text }}
          </p>
        </template>
      </template>
    </template>
  </UChatMessages>

  <UChatPrompt
    v-model="input"
    :error="error"
    @submit="onSubmit"
  >
    <UChatPromptSubmit
      :status="status"
      @stop="stop()"
      @reload="regenerate()"
    />
  </UChatPrompt>
</template>
```

#vista
```vue
<script setup lang="ts">
import { ref } from 'vue'
import { isReasoningUIPart, isTextUIPart, isToolUIPart, getToolName, lastAssistantMessageIsCompleteWithApprovalResponses } from 'ai'
import { useChat } from '@ai-sdk/vue'
import { isPartStreaming, isToolStreaming } from '@nuxt/ui/utils/ai'
import { Markdown } from '@comark/vue'
import shiki from '@comark/vue/plugins/shiki'

const plugins = [shiki()]

const input = ref('')

const { messages, status, error, sendMessage, regenerate, stop, addToolApprovalResponse } = useChat({
  sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses,
  onError(error) {
    console.error(error)
  }
})

function onSubmit() {
  sendMessage({ text: input.value })

  input.value = ''
}
</script>

<template>
  <UChatMessages
    :messages="messages"
    :status="status"
  >
    <template #content="{ message }">
      <template
        v-for="(part, index) in message.parts"
        :key="`${message.id}-${part.type}-${index}`"
      >
        <UChatReasoning
          v-if="isReasoningUIPart(part)"
          :text="part.text"
          :streaming="isPartStreaming(part)"
        >
          <Markdown
            :value="part.text"
            :streaming="isPartStreaming(part)"
            :plugins="plugins"
            class="*:first:mt-0 *:last:mb-0"
          />
        </UChatReasoning>

        <UChatTool
          v-else-if="isToolUIPart(part)"
          :text="getToolName(part)"
          :streaming="isToolStreaming(part)"
          :actions="part.state === 'approval-requested' ? [
            { label: 'Approve', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: true }) },
            { label: 'Deny', color: 'neutral', variant: 'ghost', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: false }) }
          ] : undefined"
        />

        <template v-else-if="isTextUIPart(part)">
          <Markdown
            v-if="message.role === 'assistant'"
            :value="part.text"
            :streaming="isPartStreaming(part)"
            :plugins="plugins"
            class="*:first:mt-0 *:last:mb-0"
          />
          <p v-else-if="message.role === 'user'" class="whitespace-pre-wrap">
            {{ part.text }}
          </p>
        </template>
      </template>
    </template>
  </UChatMessages>

  <UChatPrompt
    v-model="input"
    :error="error"
    @submit="onSubmit"
  >
    <UChatPromptSubmit
      :status="status"
      @stop="stop()"
      @reload="regenerate()"
    />
  </UChatPrompt>
</template>
```

::

::tip
Para la configuración de Comark reutilizable (plugins, clases, etc.), utilice [`defineMarkdownComponent`](https://comark.dev/rendering/vue#code-markdown-code-definemarkdowncomponent-code) para crear un componente personalizado en lugar de pasar accesorios en línea cada vez.

::framework-only
#Nuxidad
:::div{class="*:my-0"}
```ts [components/chat/Markdown.ts]
import shiki from '@comark/nuxt/plugins/shiki'

export default defineMarkdownComponent({
  name: 'ChatMarkdown',
  plugins: [shiki()],
  class: '*:first:mt-0 *:last:mb-0'
})
```
:::

#vista
:::div{class="*:my-0"}
```ts [components/chat/Markdown.ts]
import { defineMarkdownComponent } from '@comark/vue'
import shiki from '@comark/vue/plugins/shiki'

export default defineMarkdownComponent({
  name: 'ChatMarkdown',
  plugins: [shiki()],
  class: '*:first:mt-0 *:last:mb-0'
})
```
:::
::

::

::note
Al utilizar el plugin `shiki`, agregue el siguiente CSS a su hoja de estilo para admitir el modo oscuro:

```css [main.css]
html.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}
```
::

::note{to="/blog/how-to-build-an-ai-chat"}
Lea el tutorial completo **Build an AI Chatbot** para obtener una guía paso a paso.
::
