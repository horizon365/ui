---
description: Bouw AI-chatinterfaces met streaming, redenering en toolcalling.
category: chat
index: true
links:
  - label: KI SDK
    icon: i-simple-icons-vercel
    to: https://ai-sdk.dev/
    target: _blank
---

Nuxt UI biedt een set componenten die zijn ontworpen om door AI aangedreven chatinterfaces te bouwen. Ze integreren naadloos met de [Vercel AI SDK](https://ai-sdk.dev/) voor het streamen van reacties, redeneren, aanroepen van tools en meer.

::callout{icon="i-simple-icons-github"}
Bekijk de [`Nuxt`](https://github.com/nuxt-ui-templates/chat) en [`Vue`](https://github.com/nuxt-ui-templates/chat-vue) AI Chat-sjablonen op GitHub voor productieklare implementaties.
::

## Componenten

| Component | Omschrijving |
| --- | --- |
| [ChatMessages](/docs/components/chat-messages) | Doorschuifbare berichtenlijst met auto-scroll en laadindicator. |
| [ChatMessage](/docs/components/chat-message) | Individuele berichtenballon met avatar, acties en slots. |
| [ChatPrompt](/docs/components/chat-prompt) | Verbeterd tekstgebied voor het indienen van prompts. |
| [ChatPromptSubmit](/docs/components/chat-prompt-submit) | Indienknop met automatische statusafhandeling. |
| [ChatReasoning](/docs/components/chat-reasoning) | Inklapbaar blok voor AI-redeneer- / denkproces. |
| [ChatTool](/docs/components/chat-tool) | Inklapbaar blok voor aanroepstatus AI-tool. |
| [ChatShimmer](/docs/components/chat-shimmer) | Tekst glinsterende animatie voor streaming-staten. |
| [ChatPalette](/docs/components/chat-palette) | Layout wrapper voor het insluiten van chat in modals of lades. |

## Installatie

De Chat-componenten zijn ontworpen om te worden gebruikt met de [Vercel AI SDK](https://ai-sdk.dev/), met name de [`Chat`](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-chat) klasse voor het beheren van de chatstatus en het streamen van reacties.
De voorbeelden op deze pagina zijn gericht op AI SDK v7.

Installeer de vereiste afhankelijkheden:

::framework-only
#nuxt
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

Voeg `@comark/nuxt` toe aan uw modules:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@comark/nuxt'
  ]
})
```

::::note
[`@comark/nuxt`](https://comark.dev/rendering/nuxt) biedt de `Markdown`-component die wordt gebruikt om AI-reacties weer te geven als Markdown, het geeft stapsgewijs tokens weer wanneer ze aankomen, waardoor de flikkering en herparsering wordt vermeden die traditionele Markdown renderers veroorzaken.
  Het schakelt ook automatisch de [prose- components](/docs/typography) van Nuxt UI in, zodat uw inhoud is afgestemd op uw thema.
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
[`@comark/vue`](https://comark.dev/rendering/vue) biedt de `Markdown`-component die wordt gebruikt om AI-reacties weer te geven als Markdown, het geeft stapsgewijs tokens weer wanneer ze aankomen, waardoor de flikkering en herparsering wordt vermeden die traditionele Markdown renderers veroorzaken.
<br><br>Als u de [prose components](/docs/typography) van Nuxt UI met Comark wilt gebruiken, schakelt u de optie `prose` in uw `vite.config.ts` in:

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

## Server instellen

Maak een server-API-eindpunt om chatverzoeken af te handelen met [`streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text). U kunt de [Vercel AI- Gateway](https://vercel.com/ai-gateway) gebruiken om toegang te krijgen tot AI-modellen via een gecentraliseerd eindpunt:

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

### Redeneren

Als u [reasoning](https://ai-sdk.dev/docs/ai-sdk-ui/chatbot#reasoning) wilt inschakelen, configureert u `providerOptions` voor uw provider ([Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#reasoning), [Google](https://ai-sdk.dev/providers/ai-sdk-providers/google#thinking), [OpenAI](https://ai-sdk.dev/providers/ai-sdk-providers/openai#reasoning)):

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

### Web Zoeken

Sommige providers bieden ingebouwde webzoekhulpmiddelen: [Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#web-search-tool), [Google](https://ai-sdk.dev/providers/ai-sdk-providers/google#google-search), [OpenAI](https://ai-sdk.dev/providers/ai-sdk-providers/openai#web-search-tool).

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

### MCP Opdrachtgever

Geef uw chatbot geavanceerde functies voor het aanroepen van gereedschappen met behulp van het [Model Context Protocol (MCP)](https://ai-sdk.dev/docs/ai-sdk-core/mcp-tools) van `@ai-sdk/mcp`.
MCP stelt uw AI in staat dynamische acties uit te voeren, zoals het doorzoeken van uw documentatie of het uitvoeren van aangepaste taken, om relevantere en nauwkeurigere antwoorden te geven.

Installeer om te beginnen het MCP-pakket:

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

Configureer vervolgens uw serverendpoint om MCP-tools te gebruiken:

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

### Tool Goedkeuring

Vereist een gebruikersbevestiging voordat een tool wordt uitgevoerd met de [`toolApproval`](https://ai-sdk.dev/docs/agents/tool-approvals) optie. Het gereedschapsonderdeel pauzeert in de `approval-requested`-status totdat de gebruiker reageert:

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

## Client instellen

Gebruik de `useChat` composable van `@ai-sdk/vue` om de chatstatus te beheren en verbinding te maken met het servereindpunt:

::framework-only
#nuxt
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
Gebruik voor herbruikbare Comark-configuratie (plug-ins, klasse, enz.) [`defineMarkdownComponent`](https://comark.dev/rendering/vue#code-markdown-code-definemarkdowncomponent-code) om een aangepast onderdeel te maken in plaats van rekwisieten elke keer inline door te geven.

::framework-only
#nuxt
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
Wanneer u de `shiki`-plug-in gebruikt, voegt u de volgende CSS toe aan uw stylesheet om de donkere modus te ondersteunen:

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
Lees de volledige **Bouw een AI Chatbot** tutorial voor een stap-voor-stap handleiding.
::
