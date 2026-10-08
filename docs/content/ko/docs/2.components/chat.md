---
description: 스트리밍, 추론 및 도구 호출을 사용하여 AI 채팅 인터페이스를 구축합니다.
category: chat
index: true
links:
  - label: AI SDK
    icon: i-simple-icons-vercel
    to: https://ai-sdk.dev/
    target: _blank
---

Nuxt UI는 AI 기반 채팅 인터페이스를 구축하기 위해 설계된 구성 요소 세트를 제공합니다. [Vercel AI SDK](https://ai-sdk.dev/)와 원활하게 통합하여 응답 스트리밍, 추론, 도구 통화 등을 수행합니다.

::callout{icon="i-simple-icons-github"}
프로덕션 준비 구현을 위해 GitHub의 [`Nuxt`](https://github.com/nuxt-ui-templates/chat) 및 [](https://github.com/nuxt-ui-templates/chat-vue)AI 채팅 템플릿을 확인하십시오.
::

##  구성 요소

| 구성 요소| 설명 (Description)|
| --- | --- |
| [ ChatMessages ](/docs/components/chat-messages)| 자동 스크롤 및 로드 표시기가 포함된 스크롤 가능한 메시지 목록입니다.|
| [ ChatMessage ](/docs/components/chat-message)| 아바타, 동작 및 슬롯이 있는 개별 메시지 버블.|
| [ ChatPrompt ](/docs/components/chat-prompt)| 프롬프트를 제출하기 위한 향상된 텍스트 영역.|
| [ ChatPromptSubmit ](/docs/components/chat-prompt-submit)| 자동 상태 처리가 있는 제출 단추.|
| [ ChatReasoning ](/docs/components/chat-reasoning)| Collapable block for AI reasoning/thinking process (인공지능 추론/사고 과정을 위한 축소가능한 블록)|
| [ ChatTool ](/docs/components/chat-tool)| AI 도구 호출 상태에 대한 축소 가능한 블록입니다.|
| [ ChatShimmer ](/docs/components/chat-shimmer)| 스트리밍 상태의 텍스트 흐리기 애니메이션입니다.|
| [ChatPalette]( /docs/components/chat-palette @ )| 모달 또는 서랍에 채팅을 포함하기 위한 레이아웃 래퍼.|

##  설치

Chat 구성 요소는 [Vercel AI SDK](https://ai-sdk.dev/) 특히 [`Chat`](](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-chat)클래스와 함께 사용하여 채팅 상태 및 스트리밍 응답을 관리하도록 설계되었습니다.

필요한 종속성을 설치하려면 다음과 같이 하십시오.

::framework-only
#nuxt 코드
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

모듈에 `@comark/nuxt`를 추가하십시오.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@comark/nuxt'
  ]
})
```

::::note
[`@comark/nuxt`](https://comark.dev/rendering/nuxt)는 AI 응답을 스트리밍 Markdown으로 렌더링하는 `Markdown` 구성 요소를 제공하며, 도착하면 토큰을 점진적으로 렌더링합니다. 기존의 Markdown 렌더러에서 발생하는 깜박임을 방지하고 다시 구문 분석합니다. 또한 Nuxt UI의 [prose 구성 요소](/docs/typography) 그래서 당신의 콘텐츠는 당신의 테마에 맞게 스타일 지정됩니다.
::::

:::

#vue #vue
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
[`@comark/vue`](https://comark.dev/rendering/vue)는 AI 응답을 스트리밍 Markdown으로 렌더링하는 데 사용되는 `Markdown` 구성 요소를 제공하며, 토큰이 도착하면 토큰을 점진적으로 렌더링하여 깜박임을 방지하고 전통적인 Markdown 렌더러가 야기하는 것을 다시 분석합니다.
<br><br> Nuxt UI의 [prose 구성 요소](/docs/typography ) Comark와 함께 사용하려면 `vite.config.ts` 옵션을 사용하십시오.

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

## 서버 설치

[`streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text)를 사용하여 채팅 요청을 처리할 서버 API 엔드포인트를 생성하여 [Vercel AI Gateway](https://vercel.com/ai-gateway)를 사용하여 중앙 집중화된 엔드포인트를 통해 AI 모델에 액세스할 수 있습니다.

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

### Reasoning @ 논리

[reasoning](https://ai-sdk.dev/docs/ai-sdk-ui/chatbot#reasoning)을 활성화하려면 공급자에 대해 `providerOptions`을 설정합니다.([ Anthropic ](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#reasoning)) Google ](https://ai-sdk.dev/providers/ai-sdk-providers/google#thinking))[)[ PHP 167 @@@@@ PHP 167 @@@@@ PHP 167 @@@@@@@ PHP 167 @@@@@ PHP 167 @@@@@@@@@@ PHP 167 @@@@@@@ PHP 167 @@@@ PHP 167 @@@@@@@

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

###  웹 검색

일부 공급업체는 내장 웹 검색 도구를 제공합니다 [Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#web-search-tool)Google](https://ai-sdk.dev/providers/ai-sdk-providers/google#google-searchhttps://ai-sdk.dev/providers/ai-sdk-providers/google#google-search)))))))[[)[)[[PH2

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

### MCP 고객

[Model Context Protocol(MCP)](https://ai-sdk.dev/docs/ai-sdk-core/mcp-tools)의 고급 도구 호출 기능을 사용하여 챗봇을 강화하십시오. MCP는 AI가 문서를 검색하거나 사용자 지정 작업을 수행하는 것과 같은 동적 동작을 수행하여 보다 관련성 있고 정확한 응답을 제공할 수 있도록 합니다.

시작하려면 MCP 패키지를 설치하십시오:

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

그런 다음 MCP 도구를 사용하도록 서버 끝점을 구성합니다.

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

### 도구 승인

[`toolApproval`](https://ai-sdk.dev/docs/agents/tool-approvals)옵션으로 도구를 실행하기 전에 사용자 확인이 필요합니다. 도구 부품은 `approval-requested` 상태에서 사용자가 응답할 때까지 일시 중지됩니다.

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

## 클라이언트 설정

`@ai-sdk/vue`의 `useChat`컴포지블을 사용하여 채팅 상태를 관리하고 서버 엔드포인트에 연결합니다.

::framework-only
#nuxt #nuxt
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

#vue #vue
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
재사용 가능한 Comark 구성(플러그인, 클래스 등)의 경우, 매번 props를 인라인으로 전달하는 대신 [`defineMarkdownComponent`](https://comark.dev/rendering/vue#code-markdown-code-definemarkdowncomponent-code)를 사용하여 사용자 정의 구성요소를 만듭니다.

::framework-only
#nuxt 코드
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

#vue #vue
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
`shiki` 플러그인을 사용할 때 스타일시트에 다음 CSS를 추가하여 어두운 모드를 지원합니다.

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
전체 **Build an AI Chatbot** 자습서를 읽어 단계별 가이드를 참조하십시오.
::
