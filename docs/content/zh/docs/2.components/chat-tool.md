---
title: ChatTool
description: 显示可折叠的 AI 工具调用状态。
category: chat
links:
  - label: 可折叠
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatTool.vue
---
## 使用

ChatTool 组件渲染一个可折叠块，显示 AI 工具调用状态，例如“正在搜索组件”或“正在阅读文档”。当提供默认插槽时，它可以折叠以显示工具输出。

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-example'
---
::

### 文本

使用 `text` 属性设置工具状态文本。

::component-code
---
hide:
  - class
props:
  text: 'Searched components'
  class: 'w-60'
---
::

### 后缀

使用 `suffix` 属性在主标签后显示次要文本。

::component-code
---
hide:
  - class
ignore:
  - text
props:
  text: 'Reading component'
  suffix: 'Button'
  class: 'w-60'
---
::

### 流式传输

使用 `streaming` 属性表示工具正在运行。文本会显示微光动画。

::component-code
---
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'Searching components...'
  class: 'w-60'
---
::

::tip
使用 `@nuxt/ui/utils/ai` 中的 `isToolStreaming` 工具来判断工具部分是否仍在运行。当工具等待用户批准时，它返回 `false`。
::

### 微光

流式传输时，触发器标签使用 [`ChatShimmer`](/docs/components/chat-shimmer) 组件。使用 `shimmer` 属性自定义其 `duration` 和 `spread`。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'Searching components...'
  shimmer:
    duration: 2
    spread: 2
  class: 'w-60'
---
::

### 图标

使用 `icon` 属性在触发器旁显示 [Icon](/docs/components/icon) 组件。

::component-code
---
hide:
  - class
ignore:
  - text
props:
  icon: i-lucide-search
  text: 'Searched components'
  class: 'w-60'
---
::

### 加载

使用 `loading` 属性显示加载指示器。使用 `loading-icon` 属性自定义加载图标。

::component-code
---
hide:
  - class
ignore:
  - text
props:
  loading: true
  text: 'Searching components...'
  class: 'w-60'
---
::

### 加载图标

使用 `loading-icon` 属性自定义加载图标。默认为 `i-lucide-loader-circle`。

::component-code
---
hide:
  - class
ignore:
  - text
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  text: 'Searching components...'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在 `app.config.ts` 中的 `ui.icons.loading` 键下全局自定义此图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在 `vite.config.ts` 中的 `ui.icons.loading` 键下全局自定义此图标。
:::
::

### 箭头

使用 `chevron` 属性更改箭头图标的位置。

::note
当 `chevron` 设置为 `leading` 且提供了 `icon` 时，悬停和展开时图标会与箭头交换。
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevron: leading
  icon: i-lucide-search
  text: 'Searched components'
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

### 箭头图标

使用 `chevron-icon` 属性自定义箭头 [Icon](/docs/components/icon)。默认为 `i-lucide-chevron-down`。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevronIcon: 'i-lucide-arrow-down'
  text: 'Searched components'
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在 `app.config.ts` 中的 `ui.icons.chevronDown` 键下全局自定义此图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在 `vite.config.ts` 中的 `ui.icons.chevronDown` 键下全局自定义此图标。
:::
::

### 变体

使用 `variant` 属性更改视觉样式。默认为 `inline`。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
  - icon
props:
  variant: card
  text: 'Searched components'
  icon: i-lucide-search
  chevron: trailing
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

### 操作 :badge{label="4.10+" class="align-text-top"}

使用 `actions` 属性在触发器下方显示一组 [Button](/docs/components/button)，适用于运行前需要用户确认的工具。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
  - icon
  - variant
  - actions
props:
  actions:
    - label: 'Approve'
    - label: 'Deny'
      color: neutral
      variant: soft
  text: 'Run terminal command'
  variant: card
  icon: i-lucide-terminal
  class: 'w-60'
slots:
  default: |

    $ pnpm run lint
---
::

## 示例

::tip{to="/docs/components/chat"}
查看 **Chat** 概览页面，了解安装说明、服务器设置和使用示例。
::

### 带审批流程 :badge{label="4.10+" class="align-text-top"}

使用 `actions` 属性结合 [AI SDK](https://ai-sdk.dev/docs/agents/tool-approvals) 构建工具审批流程。当工具部分处于 `approval-requested` 状态时，显示批准和拒绝操作，并使用 `addToolApprovalResponse` 进行响应。

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-approval-example'
---
::

::tip
使用 `@nuxt/ui/utils/ai` 中的 `isToolApprovalPending` 工具检测待处理的审批，在此状态下 `isToolStreaming` 返回 `false`。

```vue
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'
import { lastAssistantMessageIsCompleteWithApprovalResponses } from 'ai'

const { messages, addToolApprovalResponse } = useChat({
  sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses
})
</script>

<template>
  <UChatTool
    v-if="isToolUIPart(part)"
    :text="getToolName(part)"
    :streaming="isToolStreaming(part)"
    :actions="part.state === 'approval-requested' ? [
      { label: 'Approve', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: true }) },
      { label: 'Deny', color: 'neutral', variant: 'ghost', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: false }) }
    ] : undefined"
  />
</template>
```
::

## API

### 属性

:component-props

### 插槽

:component-slots

### 事件

:component-emits

## 主题

:component-theme

## 更新日志

:component-changelog