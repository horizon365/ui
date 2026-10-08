---
title: ChatMessage
description: '显示带有图标、头像和操作项的聊天消息。'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessage.vue
---
## 用法

ChatMessage 组件会为 `user` 或 `assistant` 聊天消息渲染一个 `<article>` 元素。

::code-preview

::u-chat-message
---
parts:
  - type: 'text'
    id: '1'
    text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
side: 'right'
variant: 'soft'
role: 'user'
id: '1'
avatar:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
---
::

::

::tip{to="/docs/components/chat-messages"}
使用 `ChatMessages` 组件来显示聊天消息列表。
::

### 部件

使用 `parts` 属性，以 AI SDK 格式显示消息内容。

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

::note
`parts` 属性是 AI SDK 的推荐格式。每个部件都有一个 `type`（例如 'text'）和对应内容。ChatMessage 组件还支持已弃用的 `content` 属性，以保持向后兼容。
::

### 侧边

使用 `side` 属性将消息显示在左侧或右侧。

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  side: 'right'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

::note
当使用 [`ChatMessages`](/docs/components/chat-messages) 组件时，`assistant` 消息的 `side` 属性会设置为 `left`，`user` 消息会设置为 `right`。
::

### 变体

使用 `variant` 属性更改消息样式。

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  variant: 'soft'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

::note
当使用 [`ChatMessages`](/docs/components/chat-messages) 组件时，`assistant` 消息的 `variant` 属性会设置为 `naked`，`user` 消息会设置为 `soft`。
::

### 颜色 :badge{label="4.8+" class="align-text-top"}

使用 `color` 属性更改消息颜色。

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  variant: 'soft'
  color: 'primary'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

### 图标

使用 `icon` 属性在消息旁边显示一个 [Icon](/docs/components/icon) 组件。

::component-code
---
prettier: true
ignore:
  - parts
  - side
  - variant
  - role
  - id
props:
  icon: i-lucide-user
  variant: 'soft'
  side: 'right'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

### 头像

使用 `avatar` 属性在消息旁边显示一个 [Avatar](/docs/components/avatar) 组件。

::component-code
---
prettier: true
ignore:
  - parts
  - side
  - variant
  - role
  - id
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/benjamincanac.png'
    loading: lazy
  variant: 'soft'
  side: 'right'
  parts:
    - type: 'text'
      id: '1'
      text: 'Hello! Tell me more about building AI chatbots with Nuxt UI.'
  role: 'user'
  id: '1'
---
::

你还可以使用 `avatar.icon` 属性显示一个图标作为头像。

::component-code
---
prettier: true
ignore:
  - parts
  - role
  - id
props:
  avatar:
    icon: i-lucide-bot
  parts:
    - type: 'text'
      id: '1'
      text: 'Nuxt UI offers several features for building AI chatbots including the ChatMessage, ChatMessages, and ChatPrompt components. Best practices include using the Chat class from AI SDK, implementing proper message styling with variants, and utilizing the built-in actions for message interactions. The components are fully customizable with theming support and responsive design.'
  role: 'assistant'
  id: '1'
---
::

### 操作

使用 `actions` 属性在消息下方显示操作，这些操作将在鼠标悬停于消息上时显示。

::component-code
---
prettier: true
external:
  - actions
externalTypes:
  - ButtonProps[]
ignore:
  - parts
  - actions
  - role
  - id
props:
  actions:
    - label: 'Copy to clipboard'
      icon: i-lucide-copy
  parts:
    - type: 'text'
      id: '1'
      text: 'Nuxt UI offers several features for building AI chatbots including the ChatMessage, ChatMessages, and ChatPrompt components. Best practices include using the Chat class from AI SDK, implementing proper message styling with variants, and utilizing the built-in actions for message interactions. The components are fully customizable with theming support and responsive design.'
  role: 'user'
  id: '1'
---
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

## 主题

:component-theme

## 更新日志

:component-changelog