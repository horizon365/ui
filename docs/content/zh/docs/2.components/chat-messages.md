---
title: 聊天信息
description: '显示聊天消息列表，旨在与Vercel AI SDK无缝协作。'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessages.vue
---

## 用法

ChatMessages组件使用默认插槽或`messages`属性显示[ChatMessage](/docs/components/chat-message)组件的列表。

```vue {2,8}
<template>
  <UChatMessages>
    <UChatMessage
      v-for="(message, index) in messages"
      :key="index"
      v-bind="message"
    />
  </UChatMessages>
</template>
```

::callout{icon="i-lucide-rocket"}
此组件专为AI聊天机器人构建，具有以下特性：

- 加载时初始滚动到底部（[`shouldScrollToBottom`](#should-scroll-to-bottom)）。
- 在新邮件到达时持续向下滚动（[`shouldAutoScroll`](#should-auto-scroll)）。
- 向上滚动时会出现“自动滚动”按钮，允许用户跳回到最新消息（[`autoScroll`](#auto-scroll)）。
- 助手正在处理时显示加载指示器（[`status`](#status)）。
- 提交的消息滚动到视口的顶部，最后一条用户消息的高度动态调整。
::

### 留言

使用`messages`属性显示聊天消息列表。

::component-code
---
prettier: true
external:
  - messages
ignore:
  - messages
hide:
  - shouldScrollToBottom
collapse: true
class: 'overflow-y-auto'
props:
  messages:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      role: user
      parts:
        - type: 'text'
          text: 'Hello, how are you?'
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      role: assistant
      parts:
        - type: 'text'
          text: 'I am doing well, thank you for asking! How can I assist you today?'
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      role: user
      parts:
        - type: 'text'
          text: 'What is the current weather in Tokyo?'
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies."
  shouldScrollToBottom: false
---
::

### 状态

使用`status`道具在助手处理时显示可视指示器。

::component-code
---
prettier: true
external:
  - messages
ignore:
  - messages
  - status
hide:
  - shouldScrollToBottom
class: 'overflow-y-auto'
props:
  status: 'submitted'
  messages:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      role: user
      parts:
        - type: 'text'
          text: 'Hello, how are you?'
  shouldScrollToBottom: false
---
::

::note
以下是AI SDK `useChat`组合的不同状态的详细信息：

- `submitted`：消息已发送到API，我们正在等待响应流的开始。
- `streaming`：响应正在从API主动流入，接收数据块。
- `ready`：已收到并处理完整响应;可以提交新用户消息。
- `error`：请求API时出错，无法成功完成。
::

### 用户

使用`user` prop更改`user`消息的[ChatMessage](/docs/components/chat-message) prop。请更改为：

- `side: 'right'`{lang="ts-type"}
- `variant: 'soft'`{lang="ts-type"}

::component-code
---
prettier: true
external:
  - messages
ignore:
  - messages
  - avatar.src
  - avatar.loading
hide:
  - shouldScrollToBottom
collapse: true
items:
  user.variant:
    - solid
    - outline
    - subtle
    - soft
    - naked
  user.side:
    - left
    - right
class: 'overflow-y-auto'
props:
  user:
    side: left
    variant: solid
    avatar:
      src: https://github.com/benjamincanac.png
      loading: lazy
  messages:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      role: user
      parts:
        - type: 'text'
          text: 'Hello, how are you?'
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      role: assistant
      parts:
        - type: 'text'
          text: 'I am doing well, thank you for asking! How can I assist you today?'
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      role: user
      parts:
        - type: 'text'
          text: 'What is the current weather in Tokyo?'
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies."
  shouldScrollToBottom: false
---
::

### 助手

使用`assistant` prop更改`assistant`消息的[ChatMessage](/docs/components/chat-message) prop。请更改为：

- `side: 'left'`{lang="ts-type"}
- `variant: 'naked'`{lang="ts-type"}

::component-code
---
prettier: true
external:
  - messages
ignore:
  - messages
  - avatar.icon
  - assistant.actions
hide:
  - shouldScrollToBottom
collapse: true
items:
  assistant.variant:
    - solid
    - outline
    - subtle
    - soft
    - naked
  assistant.side:
    - left
    - right
class: 'overflow-y-auto'
props:
  assistant:
    side: left
    variant: outline
    avatar:
      icon: i-lucide-bot
    actions:
      - label: 'Copy to clipboard'
        icon: i-lucide-copy
  messages:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      role: user
      parts:
        - type: 'text'
          text: 'Hello, how are you?'
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      role: assistant
      parts:
        - type: 'text'
          text: 'I am doing well, thank you for asking! How can I assist you today?'
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      role: user
      parts:
        - type: 'text'
          text: 'What is the current weather in Tokyo?'
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies."
  shouldScrollToBottom: false
---
::

### 自动滚动

使用`auto-scroll`道具自定义或隐藏自动滚动按钮（使用`false`值），当滚动到聊天顶部时显示。

- `color: 'neutral'`{lang="ts-type"}
- `variant: 'outline'`{lang="ts-type"}

您可以从[Button](/docs/components/button)组件传递任何属性来对其进行自定义。

::component-code
---
prettier: true
collapse: true
external:
  - messages
ignore:
  - messages
  - autoScroll.color
  - autoScroll.variant
  - shouldScrollToBottom
class: 'overflow-y-auto max-h-[341px] static'
props:
  autoScroll:
    color: neutral
    variant: outline
  shouldScrollToBottom: false
  messages:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      role: user
      parts:
        - type: 'text'
          text: 'Hello, how are you?'
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      role: assistant
      parts:
        - type: 'text'
          text: 'I am doing well, thank you for asking! How can I assist you today?'
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      role: user
      parts:
        - type: 'text'
          text: 'What is the current weather in Tokyo?'
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies. The forecast for the rest of the week shows a slight chance of rain on Thursday, with temperatures gradually rising to 28°C by the weekend. Humidity levels are moderate at around 65%, and wind speeds are light at 8 km/h from the southeast. Air quality is good with an index of 42. The UV index is high at 7, so it's recommended to wear sunscreen if you're planning to spend time outdoors. Sunrise was at 5:24 AM and sunset will be at 6:48 PM, giving Tokyo approximately 13 hours and 24 minutes of daylight today. The moon is currently in its waxing gibbous phase."
    - id: 'c3e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: user
      parts:
        - type: 'text'
          text: 'Can you recommend some popular tourist attractions in Kyoto?'
    - id: 'd4f5g8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: 'Kyoto is known for its beautiful temples, traditional tea houses, and gardens. Some popular attractions include Kinkaku-ji (Golden Pavilion) with its stunning gold leaf exterior reflecting in the mirror pond, Fushimi Inari Shrine with its thousands of vermilion torii gates winding up the mountainside, Arashiyama Bamboo Grove where towering stalks create an otherworldly atmosphere, Kiyomizu-dera Temple perched on a hillside offering panoramic views of the city, and the historic Gion district where you might spot geisha hurrying to evening appointments through narrow stone-paved streets lined with traditional wooden machiya houses.'
---
::

### 自动滚动图标

使用`auto-scroll-icon`道具自定义自动滚动按钮[Icon](/docs/components/icon)。

::component-code
---
prettier: true
collapse: true
external:
  - messages
ignore:
  - messages
  - autoScroll.color
  - autoScroll.variant
  - shouldScrollToBottom
class: 'overflow-y-auto max-h-[341px] static'
props:
  autoScrollIcon: 'i-lucide-chevron-down'
  shouldScrollToBottom: false
  messages:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      role: user
      parts:
        - type: 'text'
          text: 'Hello, how are you?'
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      role: assistant
      parts:
        - type: 'text'
          text: 'I am doing well, thank you for asking! How can I assist you today?'
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      role: user
      parts:
        - type: 'text'
          text: 'What is the current weather in Tokyo?'
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies. The forecast for the rest of the week shows a slight chance of rain on Thursday, with temperatures gradually rising to 28°C by the weekend. Humidity levels are moderate at around 65%, and wind speeds are light at 8 km/h from the southeast. Air quality is good with an index of 42. The UV index is high at 7, so it's recommended to wear sunscreen if you're planning to spend time outdoors. Sunrise was at 5:24 AM and sunset will be at 6:48 PM, giving Tokyo approximately 13 hours and 24 minutes of daylight today. The moon is currently in its waxing gibbous phase."
    - id: 'c3e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: user
      parts:
        - type: 'text'
          text: 'Can you recommend some popular tourist attractions in Kyoto?'
    - id: 'd4f5g8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      role: assistant
      parts:
        - type: 'text'
          text: 'Kyoto is known for its beautiful temples, traditional tea houses, and gardens. Some popular attractions include Kinkaku-ji (Golden Pavilion) with its stunning gold leaf exterior reflecting in the mirror pond, Fushimi Inari Shrine with its thousands of vermilion torii gates winding up the mountainside, Arashiyama Bamboo Grove where towering stalks create an otherworldly atmosphere, Kiyomizu-dera Temple perched on a hillside offering panoramic views of the city, and the historic Gion district where you might spot geisha hurrying to evening appointments through narrow stone-paved streets lined with traditional wooden machiya houses.'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`中的`ui.icons.arrowDown`键下全局自定义此图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`下的`ui.icons.arrowDown`键全局自定义这个图标。
:::
::

### 应自动滚动

使用`should-auto-scroll` prop来启用/禁用连续自动滚动，而消息是流。安装到`false`。

```vue
<template>
  <UChatMessages :messages="messages" should-auto-scroll />
</template>
```

### 应滚动到底部

使用`should-scroll-to-bottom` prop来启用/禁用底部自动滚动时，组件是挂载。安装到`true`。

```vue
<template>
  <UChatMessages :messages="messages" :should-scroll-to-bottom="false" />
</template>
```

## 示例

::tip{to="/docs/components/chat"}
查看**Chat**概述页面以获取安装说明、服务器设置和使用示例。
::

### 带指示灯槽

使用`#indicator`插槽自定义具有[`ChatShimmer`](/docs/components/chat-shimmer)效果的加载指示器。

::component-example
---
name: 'chat-messages-indicator-slot-example'
class: 'overflow-y-auto'
collapse: true
---
::

## API

### Props

:component-props

### Slots

:component-slots

::tip
您可以使用ChatMessages内[`ChatMessage`](/docs/components/chat-message#slots)组件的所有插槽，它们会自动转发，因此您可以在使用`messages`道具时自定义单个消息。

```vue{7-15}
<script setup lang="ts">
import { isTextUIPart } from 'ai'
</script>

<template>
  <UChatMessages :messages="messages" :status="status">
    <template #content="{ message }">
      <template
        v-for="(part, index) in message.parts"
        :key="`${message.id}-${part.type}-${index}`"
      >
        <p v-if="isTextUIPart(part)" class="whitespace-pre-wrap">
          {{ part.text }}
        </p>
      </template>
    </template>
  </UChatMessages>
</template>
```
::

### 曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `registerMessageRef(id: string, element: ComponentPublicInstance \| null)`{lang="ts-type"}| `void`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
