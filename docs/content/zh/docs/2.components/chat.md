---
description: 构建支持流式传输、推理和工具调用的 AI 聊天界面。
category: chat
index: true
links:
  - label: AI SDK
    icon: i-simple-icons-vercel
    to: https://ai-sdk.dev/
    target: _blank
---
Nuxt UI 提供了一组用于构建 AI 驱动聊天界面的组件。它们可与 [Vercel AI SDK](https://ai-sdk.dev/) 无缝集成，支持流式响应、推理、工具调用等功能。

::callout{icon="i-simple-icons-github"}
在 GitHub 上查看 [`Nuxt`](https://github.com/nuxt-ui-templates/chat) 和 [`Vue`](https://github.com/nuxt-ui-templates/chat-vue) AI 聊天模板，获取生产就绪实现。
::

## 组件

| 组件 | 描述 |
| --- | --- |
| [ChatMessages](/docs/components/chat-messages) | 可滚动消息列表，支持自动滚动和加载指示器。 |
| [ChatMessage](/docs/components/chat-message) | 单条消息气泡，包含头像、操作和插槽。 |
| [ChatPrompt](/docs/components/chat-prompt) | 用于提交提示词的增强型文本域。 |
| [ChatPromptSubmit](/docs/components/chat-prompt-submit) | 具备自动状态处理的提交按钮。 |
| [ChatReasoning](/docs/components/chat-reasoning) | 用于 AI 推理 / 思考过程的可折叠块。 |
| [ChatTool](/docs/components/chat-tool) | 用于 AI 工具调用状态的可折叠块。 |
| [ChatShimmer](/docs/components/chat-shimmer) | 用于流式状态的文本微光动画。 |
| [ChatPalette](/docs/components/chat-palette) | 用于在模态框或抽屉中嵌入聊天的布局包装器。 |

## 安装

Chat 组件旨在与 [Vercel AI SDK](https://ai-sdk.dev/) 配合使用，特别是用于管理聊天状态和流式响应的 [`Chat`](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-chat) 类。本页示例面向 AI SDK v7。

安装所需依赖：

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

将 `@comark/nuxt` 添加到你的 modules：

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@comark/nuxt'
  ]
})
```

::::note
[`@comark/nuxt`](https://comark.dev/rendering/nuxt) 提供用于将 AI 响应渲染为流式 Markdown 的 `Markdown` 组件，它会随着 token 到达而增量渲染，避免传统 Markdown 渲染器造成的闪烁和重新解析。它还会自动启用 Nuxt UI 的 [prose 组件](/docs/typography)，使内容样式与你的主题保持一致。
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
[`@comark/vue`](https://comark.dev/rendering/vue) 提供用于将 AI 响应渲染为流式 Markdown 的 `Markdown` 组件，它会随着 token 到达而增量渲染，避免传统 Markdown 渲染器造成的闪烁和重新解析。
<br><br>要在 Comark 中使用 Nuxt UI 的 [prose 组件](/docs/typography)，请在你的 `vite.config.ts` 中启用 `prose` 选项：

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

## 服务器设置

使用 [`streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text) 创建服务器 API 端点以处理聊天请求。你可以使用 [Vercel AI Gateway](https://vercel.com/ai-gateway) 通过集中式端点访问 AI 模型：

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

### 推理

要启用 [reasoning](https://ai-sdk.dev/docs/ai-sdk-ui/chatbot#reasoning)，请为你的提供商配置 `providerOptions`（[Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#reasoning)、[Google](https://ai-sdk.dev/providers/ai-sdk-providers/google#thinking)、[OpenAI](https://ai-sdk.dev/providers/ai-sdk-providers/openai#reasoning)）：

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

### 网页搜索

一些提供商提供内置网页搜索工具：[Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#web-search-tool)、[Google](https://ai-sdk.dev/providers/ai-sdk-providers/google#google-search)、[OpenAI](https://ai-sdk.dev/providers/ai-sdk-providers/openai#web-search-tool)。

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

### MCP 客户端

使用来自 `@ai-sdk/mcp` 的 [Model Context Protocol (MCP)](https://ai-sdk.dev/docs/ai-sdk-core/mcp-tools)，为你的聊天机器人赋予高级工具调用功能。MCP 使你的 AI 能够执行动态操作，例如搜索你的文档或执行自定义任务，从而提供更相关、更准确的响应。

开始使用，安装 MCP 包：

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

然后，配置你的服务器端点以使用 MCP 工具：

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

### 工具审批

通过 [`toolApproval`](https://ai-sdk.dev/docs/agents/tool-approvals) 选项，要求在工具运行前获得用户确认。工具部分会暂停在 `approval-requested` 状态，直到用户响应：

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

## 客户端设置

使用来自 `@ai-sdk/vue` 的 `useChat` 组合式函数来管理聊天状态并连接到你的服务器端点：

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
对于可复用的 Comark 配置（plugins、class 等），使用 [`defineMarkdownComponent`](https://comark.dev/rendering/vue#code-markdown-code-definemarkdowncomponent-code) 创建自定义组件，而不是每次以内联方式传递 props。

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
使用 `shiki` 插件时，请将以下 CSS 添加到样式表中以支持暗色模式：

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
阅读完整的 **构建 AI 聊天机器人** 教程，获取分步指南。
::