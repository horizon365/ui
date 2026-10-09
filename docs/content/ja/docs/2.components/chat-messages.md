---
title: チャットメッセージ
description: 'Vercel AI SDKとシームレスに連携するように設計されたチャットメッセージの一覧を表示します。'
category: chat
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessages.vue
---

## 使用法

ChatMessagesコンポーネントは[ChatMessage](/docs/components/chat-message)コンポーネントのリストをデフォルトスロットまたは`messages`プロパティのいずれかを使用して表示します。

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
このコンポーネントは、以下のような機能を備えたAIチャットボット専用に構築されています。

- ロード時に最初にスクロールします（[`shouldScrollToBottom`](#should-scroll-to-bottom)）。
- 新しいメッセージが到着すると連続的にスクロールダウン（[`shouldAutoScroll`](#should-auto-scroll)）。
- スクロールアップすると「自動スクロール」ボタンが表示され、最新のメッセージ（[`autoScroll`](#auto-scroll)）にジャンプできます。
- Aアシスタントの処理中に読み込みインジケータが表示されます[`status`](#status)。
-  Submittedメッセージはビューポートの上部までスクロールされ、最後のユーザーメッセージの高さは動的に調整されます。
::

### メッセージ

`messages`プロパティを使用して、チャットメッセージのリストを表示します。

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

### Status

`status`プロパティを使用して、アシスタントが処理中にビジュアルインジケータを表示します。

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
AI SDK `useChat` composableの異なるステータスの詳細は次のとおりです。

- `submitted`：メッセージがAPIに送信され、レスポンスストリームの開始を待っています。
- `streaming`：レスポンスがAPIからアクティブにストリーミングされ、大量のデータを受信します。
- `ready`：完全なレスポンスが受信され処理されました。新しいユーザーメッセージを送信できます。
- `error`：APIリクエスト中にエラーが発生し、正常に完了できませんでした。
::

### User

`user`プロパティを使用して、[ChatMessage](/docs/components/chat-message)プロパティを`user`メッセージに変更します。デフォルトは

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

### Assistant

`assistant`プロパティを使用して、[ChatMessage](/docs/components/chat-message)プロパティを`assistant`メッセージに変更します。デフォルトは

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

### Autoスクロール

`auto-scroll`プロパティを使用して、チャットの先頭までスクロールするときに表示される自動スクロールボタン（`false`値）をカスタマイズまたは非表示にします。デフォルトは

- `color: 'neutral'`{lang="ts-type"}
- `variant: 'outline'`{lang="ts-type"}

[Button](/docs/components/button)コンポーネントの任意のプロパティを渡してカスタマイズできます。

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

### Autoスクロールアイコン

`auto-scroll-icon`プロパティを使用して、自動スクロールボタン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-arrow-down`です。

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
このアイコンは`app.config.ts`の`ui.icons.arrowDown`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.arrowDown`キーでグローバルにカスタマイズできます。
:::
::

### 自動スクロール

`should-auto-scroll`プロパティを使用して、メッセージのストリーミング中に連続自動スクロールを有効/無効にします。デフォルトは`false`です。

```vue
<template>
  <UChatMessages :messages="messages" should-auto-scroll />
</template>
```

### 下までスクロールしてください

`should-scroll-to-bottom`プロパティを使用して、コンポーネントがマウントされたときに下部の自動スクロールを有効/無効にします。デフォルトは`true`です。

```vue
<template>
  <UChatMessages :messages="messages" :should-scroll-to-bottom="false" />
</template>
```

## サンプル

::tip{to="/docs/components/chat"}
インストール手順、サーバーのセットアップ、使用例については、**Chat**の概要ページをご覧ください。
::

### インジケータスロット付

`#indicator`スロットを使用して、[`ChatShimmer`](/docs/components/chat-shimmer)エフェクトでロードインジケータをカスタマイズします。

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

### スロット

:component-slots

::tip
[`ChatMessage`](/docs/components/chat-message#slots)コンポーネントのすべてのスロットをChatMessages内で使用できます。`messages`プロパティを使用するときに個々のメッセージをカスタマイズできるように自動的に転送されます。

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

### Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `registerMessageRef(id: string, element: ComponentPublicInstance \| null)`{lang="ts-type"}| `void`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
