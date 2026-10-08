---
description: Construisez des interfaces de chat AI avec streaming, raisonnement et appel d'outils.
category: chat
index: true
links:
  - label: Le SDK
    icon: i-simple-icons-vercel
    to: https://ai-sdk.dev/
    target: _blank
---

Nuxt UI fournit un ensemble de composants conçus pour créer des interfaces de chat alimentées par l'IA. Ils s'intègrent parfaitement au [Vercel AI SDKhttps://ai-sdk.dev/) pour le streaming des réponses, le raisonnement, l'appel d'outils, et plus encore.

::callout{icon="i-simple-icons-github"}
Découvrez les modèles [`Nuxt`](https://github.com/nuxt-ui-templates/chat) et [`Vue`](https://github.com/nuxt-ui-templates/chat-vue) AI Chat sur GitHub pour des implémentations prêtes pour la production.
::

## Composants

| composante| Description|
| --- | --- |
| ](/docs/components/chat-messages)| Liste de messages déroulable avec défilement automatique et indicateur de chargement.|
| [ChatMessage](/docs/components/chat-message)| Bulle de message individuelle avec avatar, actions et slots.|
| [ChatPrompt](/docs/components/chat-prompt)| Textarea amélioré pour soumettre des invites.|
| [ChatPromptSubmit](/docs/components/chat-prompt-submit)| Bouton Soumettre avec gestion automatique de l'état.|
| [](/docs/components/chat-reasoning)| Bloc rétractable pour le processus de raisonnement/pensée de l'IA.|
| @@| Bloc rétractable pour l'état d'invocation de l'outil d'IA.|
| ](/docs/components/chat-shimmer)| Animation de miroitement de texte pour les états de streaming.|
| [](/docs/components/chat-palette)| Layout wrapper pour intégrer le chat dans des modaux ou des tiroirs.|

## Installation d'un

Les composants Chat sont conçus pour être utilisés avec la classe [Vercel AI SDKhttps://ai-sdk.dev/), en particulier la classe [`Chat`](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-chatpour la gestion de l'état du chat et des réponses en streaming.

Installer les dépendances requises:

::framework-only
#numérique
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

Ajoutez `@comark/nuxt` à vos modules:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@comark/nuxt'
  ]
})
```

::::note
[`@comark/nuxt`](https://comark.dev/rendering/nuxt) fournit le composant `Markdown` utilisé pour rendre les réponses AI en streaming Markdown, il rend incrémentalement les jetons à mesure qu 'ils arrivent, en évitant le scintillement et la ré-analyse que les rendus Markdown traditionnels provoquent. Il permet également automatiquement les composants [prose de Nuxt UI ](/docs/typography) afin que votre contenu soit conçu pour correspondre à votre thème.
::::

:::

#vue
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
[`@comark/vue`](https://comark.dev/rendering/vue) fournit le composant `Markdown` utilisé pour rendre les réponses AI en streaming Markdown, il rend incrémentiellement les jetons à mesure qu 'ils arrivent, évitant le scintillement et la ré-analyse que les rendus Markdown traditionnels provoquent.
<br><br>Pour utiliser les composants [prose de l'interface utilisateur Nuxt ](/docs/typographyComark, activez l'option `prose` dans votre `vite.config.ts`:

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

## Serveur

Créez un point de terminaison API serveur pour gérer les demandes de chat en utilisant [`streamText`](). Vous pouvez utiliser le [Vercel AI Gatewayhttps://vercel.com/ai-gateway) pour accéder aux modèles d'IA via un point de terminaison centralisé:

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

@@ph156@@raisonnement

Pour activer [reasoning](https://ai-sdk.dev/docs/ai-sdk-ui/chatbot#reasoning), configurez `providerOptions` pour votre fournisseur ([Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#reasoning),[Google](https://ai-sdk.dev/providers/ai-sdk-providers/google#thinking),[OpenAI](https://ai-sdk.dev/providers/ai-sdk-providers/openai#reasoning))):

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

### Recherche sur le Web

Certains fournisseurs proposent des outils de recherche Web intégrés:[Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#web-search-tool),[Google](),[OpenAI](PH2222 @.

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

### MCP Client

Donnez à votre chatbot des fonctionnalités avancées d'appel d'outils à l'aide du [Model Context Protocol (MCP)]() de `@ai-sdk/mcp`. MCP permet à votre IA d'effectuer des actions dynamiques, telles que la recherche dans votre documentation ou l'exécution de tâches personnalisées, afin de fournir des réponses plus pertinentes et plus précises.

Pour commencer, installez le paquet MCP:

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

Ensuite, configurez votre point de terminaison serveur pour utiliser les outils MCP:

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

### Approbation de l'outil

Exiger une confirmation de l'utilisateur avant qu 'un outil ne s'exécute avec l'option `toolApproval`](https://ai-sdk.dev/docs/agents/tool-approvals). La partie outil fait une pause dans l'état `approval-requested` jusqu'à ce que l'utilisateur réponde:

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

## Client Configuration

Utilisez le composable `useChat` de `@ai-sdk/vue` pour gérer l'état du chat et vous connecter à votre point de terminaison serveur:

::framework-only
#numérique
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

#vue
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
Pour une configuration Comark réutilisable (plugins, classe, etc.), utilisez [`defineMarkdownComponent`](https://comark.dev/rendering/vue#code-markdown-code-definemarkdowncomponent-code) pour créer un composant personnalisé au lieu de passer des props en ligne à chaque fois.

::framework-only
#numérique
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

#vue
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
Lorsque vous utilisez le plugin `shiki`, ajoutez le CSS suivant à votre feuille de style pour prendre en charge le mode sombre:

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
Lisez le tutoriel complet **Build an AI Chatbot** pour un guide étape par étape.
::
