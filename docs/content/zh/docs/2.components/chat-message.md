---
title: 聊天消息
description: '显示带有图标、头像和操作的聊天消息。'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessage.vue
---

## 用法

ChatMessage组件为`user`或`assistant`聊天消息呈现`<article>`元素。

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
使用`ChatMessages`组件显示聊天消息列表。
::

### 零件

使用`parts` prop以AI SDK格式显示消息内容。

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
`parts` prop是AI SDK的推荐格式。每个部分都有一个`type`（例如“text”）和相应的内容。ChatMessage组件也支持弃用的`content` prop，以实现向后兼容。
::

### Side

使用`side`属性在左侧或右侧显示消息。

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
当使用[`ChatMessages`](/docs/components/chat-messages)组件时，`side`属性对于`assistant`消息设置为`left`，对于`user`消息设置为`right`。
::

### Variant

使用`variant`属性更改消息的样式。

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
当使用[`ChatMessages`](/docs/components/chat-messages)组件时，`variant`属性对于`assistant`消息设置为`naked`，对于`user`消息设置为`soft`。
::

### 颜色：badge{label="4.8+" class="align-text-top"}

使用`color`属性更改消息的颜色。

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

### Icon

使用`icon`属性在消息旁边显示[Icon](/docs/components/icon)组件。

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

### Avatar

使用`avatar`道具在消息旁边显示[Avatar](/docs/components/avatar)组件。

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

你也可以使用`avatar.icon`道具来显示一个图标作为头像。

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

### Actions

使用`actions` prop在消息下方显示操作，当鼠标悬停在消息上方时将显示这些操作。

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
查看**Chat**概述页面以获取安装说明、服务器设置和使用示例。
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
