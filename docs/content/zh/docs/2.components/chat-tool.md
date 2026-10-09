---
title: 聊天工具
description: 显示可折叠的AI工具调用状态。
category: chat
links:
  - label: 可折叠
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatTool.vue
---

## 用法

ChatTool组件呈现一个可折叠的块，显示AI工具调用状态，例如“正在搜索组件”或“正在阅读文档”。当提供默认插槽时，它将变得可折叠以显示工具输出。

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-example'
---
::

### Text

使用`text`属性设置刀具状态文本。

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

使用`suffix`属性在主标签之后显示辅助文本。

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

### 流媒体

使用`streaming`道具来指示工具正在运行。文本显示闪烁动画。

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
使用`@nuxt/ui/utils/ai`中的`isToolStreaming`实用程序确定工具部件是否仍在运行。当工具正在等待用户批准时，它将返回`false`。
::

### Shimmer

在流式传输时，触发器标签使用[`ChatShimmer`](/docs/components/chat-shimmer)组件。使用`shimmer`道具可以自定义其`duration`和`spread`。

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

### Icon

使用`icon`道具在触发器旁边显示[Icon](/docs/components/icon)组件。

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

### 加载中

使用`loading`道具显示加载指示器。使用`loading-icon`道具自定义加载图标。

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

使用`loading-icon`道具自定义加载图标. `i-lucide-loader-circle`。

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
你可以在你的`app.config.ts`中的`ui.icons.loading`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`ui.icons.loading`键下的`vite.config.ts`中全局自定义这个图标。
:::
::

### 雪佛龙

使用`chevron`道具改变V形图标的位置。

::note
当`chevron`被设置为`leading`和`icon`时，图标在悬停和打开时与V形符号交换。
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

### Chevron图标

使用`chevron-icon`属性将chevron [Icon](/docs/components/icon).exe自定义为`i-lucide-chevron-down`。

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
你可以在你的`app.config.ts`下的`ui.icons.chevronDown`键全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`下的`ui.icons.chevronDown`键全局自定义这个图标。
:::
::

### Variant

使用`variant`属性将视觉样式. css更改为`inline`。

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

### 操作：badge{label="4.10+" class="align-text-top"}

使用`actions`属性在触发器下方显示[Button](/docs/components/button)的列表，对于运行前需要用户确认的工具很有用。

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
查看**Chat**概述页面，了解安装说明、服务器设置和使用示例。
::

### 带审批流程：badge{label="4.10+" class="align-text-top"}

使用`actions` prop通过[AI SDK](https://ai-sdk.dev/docs/agents/tool-approvals)构建刀具审批流，当刀具部件处于`approval-requested`状态时，显示approve和deny操作，并使用`addToolApprovalResponse`进行响应。

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-approval-example'
---
::

::tip
使用`@nuxt/ui/utils/ai`中的`isToolApprovalPending`实用程序来检测挂起的批准，`isToolStreaming`将返回处于此状态的`false`。

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

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
