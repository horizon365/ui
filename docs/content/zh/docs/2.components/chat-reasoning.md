---
title: ChatReasoning
description: 显示可折叠的 AI 推理或思考过程。
category: chat
links:
  - label: 可折叠
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatReasoning.vue
---
## 用法

ChatReasoning 组件渲染一个可折叠块，用于显示 AI 推理或思考内容。它在流式输出期间自动展开，并在结束后自动收起。

::component-example
---
collapse: true
prettier: true
name: 'chat-reasoning-example'
class: 'h-[252px]'
---
::

::note{to="/docs/composables/use-scroll-shadow"}
主体内容使用 `useScrollShadow` 组合式函数，在溢出时应用淡出阴影。
::

### 文本

使用 `text` 属性设置推理内容。文本显示在可折叠主体内。

::component-code
---
prettier: true
hide:
  - class
props:
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### 流式输出

使用 `streaming` 属性表示正在进行的推理。组件会在流式输出开始时自动展开，并在结束时自动收起。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

::tip
使用来自 `@nuxt/ui/utils/ai` 的 `isPartStreaming` 工具来判断某个部分当前是否正在流式输出。
::

### 微光

在流式输出时，触发器标签会使用 [`ChatShimmer`](/docs/components/chat-shimmer) 组件。使用 `shimmer` 属性来自定义其 `duration` 和 `spread`。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'The user is asking about Vue components...'
  shimmer:
    duration: 2
    spread: 2
  class: 'w-60'
---
::

### 图标

使用 `icon` 属性在触发器旁边显示 [Icon](/docs/components/icon) 组件。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  icon: i-lucide-brain
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### 箭头

使用 `chevron` 属性更改箭头图标的位置。

::note
当 `chevron` 设置为 `leading` 并带有 `icon` 时，图标会在悬停和展开时与箭头交换。
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
  icon: i-lucide-brain
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### 箭头图标

使用 `chevron-icon` 属性来自定义箭头 [Icon](/docs/components/icon)。默认为 `i-lucide-chevron-down`。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevronIcon: 'i-lucide-arrow-down'
  text: 'The user is asking about Vue components...'
  class: 'w-60'
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

## 示例

::tip{to="/docs/components/chat"}
查看 **Chat** 概览页面以获取安装说明、服务器设置和使用示例。
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