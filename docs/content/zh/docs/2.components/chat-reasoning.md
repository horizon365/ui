---
title: 聊天推理
description: 显示可折叠的AI推理或思维过程。
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

ChatReasoning组件呈现一个可折叠的块，显示AI推理或思考内容。它在流式传输期间自动打开，并在流式传输后自动关闭。

::component-example
---
collapse: true
prettier: true
name: 'chat-reasoning-example'
class: 'h-[252px]'
---
::

::note{to="/docs/composables/use-scroll-shadow"}
body内容使用`useScrollShadow`组合工具在溢出时应用渐变阴影。
::

### Text

使用`text`属性设置推理内容，文本显示在可折叠的正文中。

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

### 流媒体

使用`streaming` prop来表示主动推理。该组件在流式传输开始时自动打开，在流式传输结束时自动关闭。

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
使用`@nuxt/ui/utils/ai`中的`isPartStreaming`实用程序确定当前是否正在流式传输部件。
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
  text: 'The user is asking about Vue components...'
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
  icon: i-lucide-brain
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### Chevron图标

使用`chevron-icon`道具将chevron [Icon](/docs/components/icon).exe自定义为`i-lucide-chevron-down`。

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
你可以在你的`app.config.ts`中的`ui.icons.chevronDown`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`ui.icons.chevronDown`键下的`vite.config.ts`中全局自定义这个图标。
:::
::

## 示例

::tip{to="/docs/components/chat"}
查看**Chat**概述页面以获取安装说明、服务器设置和使用示例。
::

## API

### Props

:component-props

### Slots

:component-slots

### 发射

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
