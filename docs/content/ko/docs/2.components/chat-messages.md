---
title: ChatMessages (대화 메시지)
description: 'Vercel AI SDK와 원활하게 작동하도록 설계된 채팅 메시지 목록을 표시합니다.'
category: chat
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessages.vue
---

## Usage

ChatMessages 구성 요소는 기본 슬롯 또는 `messages` prop를 사용하여 [ChatMessage](xph04x) 구성 요소 목록을 표시합니다.

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
이 구성 요소는 다음과 같은 기능을 가진 AI 챗봇을 위해 특별히 제작되었습니다.This component is purpose-built for AI chatbots with features like:

- 로드 시 초기 스크롤 ([`shouldScrollToBottom`](#should-scroll-to-bottom)).
- 새 메시지가 도착하면 계속 아래로 스크롤합니다 ([`shouldAutoScroll`](#should-auto-scroll)).
- 스크롤할 때 자동 스크롤 버튼이 나타나 사용자가 최신 메시지([`autoScroll`](#auto-scroll))로 다시 이동할 수 있습니다.
보조 장치가 처리하는 동안 - A 로드 표시기가 표시됩니다([`status`](#status)).
- Submitted 메시지는 뷰포트의 맨 위로 스크롤되고 마지막 사용자 메시지의 높이가 동적으로 조정됩니다.
::

### Message 정보

`messages` prop를 사용하여 채팅 메시지 목록을 표시합니다.

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

### 상태

도우미가 처리 중일 때 `status` 소품을 사용하여 시각적 표시기를 표시합니다.

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
다음은 AI SDK `useChat` 컴포블 가능 상태의 다양한 세부 정보입니다.

- `submitted` : 메시지가 API로 전송되었으며 응답 스트림의 시작을 기다리고 있습니다.
- `streaming`: 응답이 API에서 활발하게 스트리밍되어 데이터 청크를 수신합니다.
- `ready` : 전체 응답을 수신하고 처리했으며 새 사용자 메시지를 제출할 수 있습니다.
- `error`: API 요청 중에 오류가 발생하여 성공적으로 완료되지 않습니다.
::

### User 사용자

`user` prop을 사용하여 `user` 메시지에 대한 [ChatMessage](xph14xxph15x prop을 변경합니다. 기본값은 다음과 같습니다.

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

### Assistant 지원

`assistant` prop을 사용하여 ](/docs/components/chat-message) prop을 `assistant` 메시지에 대한 [ChatMessagexph178) prop을 변경합니다. 기본값은 다음과 같습니다.

- `side: 'left'`{lang="ts-type"} - {lang="ts-type"} (- `side: 'left'`{lang="ts-type"}) / `side: 'left'`{lang="ts-type"} / - `side: 'left'`{lang="ts-type"} / {lang="ts-type"} / - {lang="ts-type"} / xph181`side: 'left'`{lang="ts-type"}
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

### Auto 스크롤

`auto-scroll` 소품을 사용하여 채팅 맨 위로 스크롤할 때 표시되는 자동 스크롤 단추(`false` 값)를 사용자 정의하거나 숨깁니다. 기본값은 다음과 같습니다.

- `color: 'neutral'`{lang="ts-type"} (- `color: 'neutral'`{lang="ts-type"})
- `variant: 'outline'`{lang="ts-type"}

[Button](/docs/components/button) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

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

### Auto 스크롤 아이콘

`auto-scroll-icon` 소품을 사용하여 자동 스크롤 단추 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-arrow-down`입니다.

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
`ui.icons.arrowDown` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.arrowDown` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Should 자동 스크롤

메시지가 스트리밍되는 동안 `should-auto-scroll` Prop을 사용하여 연속 자동 스크롤을 활성화/비활성화합니다. 기본값은 `false`입니다.

```vue
<template>
  <UChatMessages :messages="messages" should-auto-scroll />
</template>
```

### 아래로 스크롤해야 합니다.

구성 요소가 마운트될 때 `should-scroll-to-bottom` 소품을 사용하여 아래쪽 자동 스크롤을 활성화/비활성화합니다. 기본값은 `true`입니다.

```vue
<template>
  <UChatMessages :messages="messages" :should-scroll-to-bottom="false" />
</template>
```

## 예제

::tip{to="/docs/components/chat"}
**Chat** 개요 페이지에서 설치 지침, 서버 설정 및 사용법 예를 확인하십시오.
::

### LED 슬롯 포함

`#indicator` 슬롯을 사용하여 [`ChatShimmer`](/docs/components/chat-shimmer) 효과로 로드 표시기를 사용자 정의합니다.

::component-example
---
name: 'chat-messages-indicator-slot-example'
class: 'overflow-y-auto'
collapse: true
---
::

## API

### Props (### Props)

:component-props

### 슬롯

:component-slots

::tip
ChatMessages 내에서 [`ChatMessage`](/docs/components/chat-message#slots) 구성 요소의 모든 슬롯을 사용할 수 있으며, `messages` prop을 사용할 때 개별 메시지를 사용자 정의 할 수 있도록 자동으로 전달됩니다.

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

### exose 소개

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `registerMessageRef(id: string, element: ComponentPublicInstance \| null)`{lang="ts-type"} (`registerMessageRef(id: string, element: ComponentPublicInstance \| null)`{lang="ts-type"})| `void`{lang="ts-type"}|

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
