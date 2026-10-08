---
title: ChatMessages (대화 메시지)
description: 'Vercel AI SDK와 원활하게 작동하도록 설계된 채팅 메시지 목록을 표시합니다.'
category: chat
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessages.vue
---

##  사용

ChatMessages 컴포넌트는 [ChatMessage](/docs/components/chat-message) 컴포넌트의 목록을 표시하며, 기본 슬롯이나 `messages`prop을 사용합니다.

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

-  로딩 시 초기 스크롤 ([`shouldScrollToBottom`](#should-scroll-to-bottom)).
-  새로운 메시지가 도착할 때 지속적으로 스크롤 다운 ([`shouldAutoScroll`](#should-auto-scroll)).
-  스크롤할 때 "자동 스크롤" 버튼이 나타나 사용자가 최신 메시지로 다시 이동할 수 있습니다 ([`autoScroll`](#auto-scroll)).
-  비서가 처리하는 동안 부하 표시기가 표시됩니다 ([`status`](#status)).
- 제출된 메시지는 뷰포트의 맨 위로 스크롤되고 마지막 사용자 메시지의 높이는 동적으로 조정됩니다.
::

###  메시지

`messages`prop을 사용하여 채팅 메시지 목록을 표시합니다.

::component-code
---
상품명 : True
외부:
  -  메시지
무시하기:
  -  메시지
숨기기 (Hide):
  -  shouldScrollToBottom
축소: true
클래스: 'overflow-y-auto'
소품 :
  메시지:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      역할: 사용자
      부품 :
        - type: '텍스트'
          사진: "hello, how are you?"
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      역할: 도우미
      부품 :
        - type: '텍스트'
          문자: "잘 지내고 있습니다, 물어봐 주셔서 감사합니다! 오늘 어떻게 도와 드릴까요?"
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      역할: 사용자
      부품 :
        - type: '텍스트'
          문자: "도쿄의 현재 날씨는 어떻습니까?"
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      역할: 도우미
      부품 :
        - type: '텍스트'
          텍스트 (Text)"최신 자료에 따르면 도쿄는 현재 24°C(75°F) 정도의 맑은 날씨를 경험하고 있습니다. 맑은 하늘이 있는 아름다운 날입니다."
  shouldScrollToBottom : false
---
::

###  상태

`status`prop을 사용하여 도우미가 처리 중일 때 시각적 표시기를 표시합니다.

::component-code
---
상품명 : True
외부:
  -  메시지
무시하기:
  -  메시지
  -  status
숨기기 (Hide):
  -  shouldScrollToBottom
클래스: 'overflow-y-auto'
소품 :
  상태: 'submitted'
  메시지 :
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      역할: 사용자
      부품 :
        - type: '텍스트'
          사진: "hello, how are you?"
  shouldScrollToBottom : false
---
::

::note
다음은 AI SDK `useChat`composable의 다양한 상태에 대한 세부 정보입니다.

- `submitted` : 메시지가 API로 전송되었으며 응답 스트림이 시작될 때까지 기다리고 있습니다.
- `streaming` 응답이 API에서 활발하게 스트리밍되어 데이터 청크를 수신합니다.
- `ready` : 전체 응답이 수신되고 처리되었으며 새 사용자 메시지를 제출할 수 있습니다.
- `error` : API 요청 중 오류가 발생하여 성공적으로 완료되지 않았습니다.
::

###  사용자

`user`prop을 사용하여 [ChatMessage](/docs/components/chat-messageprops를 `user`messages에 변경합니다. 기본값은 다음과 같습니다.

- `side: 'right'`{lang="ts-type"}
- `variant: 'soft'`{lang="ts-type"}

::component-code
---
상품명 : True
외부:
  -  메시지
무시하기:
  - 메시지
  - avatar . src
  - avatar . loading  - avatar . loading
숨기 기 (Hide) :
  - shouldScrollToBottom
축소 :   true
항목 :
  user.variant:
    - solid
    - outline
    - subtle  @  미묘 한
    - soft
    - 알몸
  user.side:
    - left
    - 오른쪽
클래스 :   ' overflow - y - auto '
소품   :
  사용 자 :
    측면   :   왼쪽
    변형 : 본체
    아바타 (Avatar) :
      src   :https://github.com/benjamincanac.png
      로드 : Lazy
  메시지   :
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      역할: 사용자
      부품 :
        - type: '텍스트'
          사진: "hello, how are you?"
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      역할: 도우미
      부품 :
        - type: '텍스트'
          문자: "잘 지내고 있습니다, 물어봐 주셔서 감사합니다! 오늘 어떻게 도와 드릴까요?"
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      역할: 사용자
      부품 :
        - type: '텍스트'
          문자: "도쿄의 현재 날씨는 어떻습니까?"
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      역할: 도우미
      부품 :
        - type: '텍스트'
          텍스트 (Text)"최신 자료에 따르면 도쿄는 현재 24°C(75°F) 정도의 맑은 날씨를 경험하고 있습니다. 맑은 하늘이 있는 아름다운 날입니다."
  shouldScrollToBottom : false
---
::

###  보조

`assistant`prop을 사용하여 [ChatMessage](/docs/components/chat-message)props를 `assistant` 메시지로 변경합니다. 기본값은:

- `side: 'left'`{lang="ts-type"}
- `variant: 'naked'`{lang="ts-type"}

::component-code
---
상품명 : True
외부:
  -  메시지
무시하기:
  -  메시지
  - avatar.icon 이미지
  - assistant.actions @지원 작업
숨기기 (Hide):
  - shouldScrollToBottom 이미지
축소: true
항목:
  assistant.variant:
    -  솔리드
    - outline 소개
    - subtle @ 미묘한
    -  soft
    -  벌거벗 은
  assistant.side:
    -  왼쪽
    -  오른쪽
클래스: 'overflow-y-auto'
소품 :
  보조 항목:
    측면 : 왼쪽
    변형: 외곽 선
    아바타 (Avatar):
      아이콘: i-lucide-bot
    작업:
      - label: '클립보드로 복사'
        아이콘 : i-lucide-copy
  메시지:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      역할: 사용자
      부품 :
        - type: '텍스트'
          사진: "hello, how are you?"
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      역할: 도우미
      부품 :
        - type: '텍스트'
          문자: "잘 지내고 있습니다, 물어봐 주셔서 감사합니다! 오늘 어떻게 도와 드릴까요?"
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      역할: 사용자
      부품 :
        - type: '텍스트'
          문자: "도쿄의 현재 날씨는 어떻습니까?"
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      역할: 도우미
      부품 :
        - type: '텍스트'
          텍스트 (Text)"최신 자료에 따르면 도쿄는 현재 24°C(75°F) 정도의 맑은 날씨를 경험하고 있습니다. 맑은 하늘이 있는 아름다운 날입니다."
  shouldScrollToBottom : false
---
::

###  자동 스크롤

`auto-scroll`prop을 사용하여 채팅 맨 위로 스크롤할 때 표시되는 자동 스크롤 단추(`false` 값)를 사용자 정의하거나 숨깁니다. 기본값은 다음과 같습니다.

- `color: 'neutral'` {lang="ts-type"}
- `variant: 'outline'` {lang="ts-type"}

[Button](/docs/components/button) 구성 요소에서 임의의 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
축소: true
외부:
  -  메시지
무시하기:
  -  메시지
  -  autoScrolll. color
  - autoScrolll.variant - autoScrolll.variant
  - shouldScrollToBottom 이미지
클래스: 'overflow-y-auto max-h -[341px]static'
소품 :
  자동 스크롤:
    색상: 중립
    변형: 윤곽선
  shouldScrollToBottom : false
  메시지:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      역할: 사용자
      부품 :
        - type: '텍스트'
          사진: "hello, how are you?"
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      역할: 도우미
      부품 :
        - type: '텍스트'
          문자: "잘하고 있습니다, 물어봐 주셔서 감사합니다! 오늘 어떻게 도와 드릴까요?"
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      역할: 사용자
      부품 :
        - type: '텍스트'
          문자: "도쿄의 현재 날씨는 어떻습니까?"
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      역할: 도우미
      부품 :
        - type: '텍스트'
          텍스트 (Text)"최신 데이터에 따르면 도쿄는 현재 기온이 24°C(75°F) 정도로 맑은 날씨를 경험하고 있으며 맑은 하늘이 있는 아름다운 날이다. 나머지 주에 대한 예보에 따르면 목요일에 비가 내릴 가능성이 약간 있으며 주말까지는 기온이 28°C로 점차 상승하고 습도가 65% 정도로 적당하다. 그리고 바람의 속도는 남동쪽에서 8km/h로 가볍습니다. 대기질은 42로 좋습니다. 자외선 지수가 7로 높기 때문에 야외에서 시간을 보낼 계획이라면 자외선 차단제를 바르는 것이 좋습니다. 일출은 오전 5시 24분, 일몰은 6시 됩니다. 오후 48시, 도쿄는 오늘 약 13시간 24분의 일광을 제공하고 있습니다. 달은 현재 빛나는 거대한 단계에 있습니다."
    - id: 'c3e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      역할: 사용자
      부품 :
        - type: 'text' 형식
          사진: "Could you recommend some popular tourist attractions in Kyoto?"
    - id: 'd4f5g8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      역할: 도우미
      부품 :
        - type: '텍스트'
          텍스트 (Text) 교토는 아름다운 절, 전통 찻집, 정원으로 유명하다. 몇몇 인기 명소에는 금각지가 포함된다.(금관) 거울 연못에 비친 아름다운 금빛 잎 외관, 산을 휘감고 있는 수천 개의 주홍색 토리오 문이 있는 푸시미 이나리 신사, 우뚝 솟은 줄기가 다른 세상의 분위기를 조성하는 아라시야마 대나무 숲, 키요미즈데라 사원은 도시의 전경을 제공하는 언덕 위에 자리잡고 있으며, 전통적인 목조 마키야 집들이 줄지어 있는 좁은 돌로 포장된 거리를 지나 저녁 약속에 서둘러 가는 것을 볼 수 있는 역사적인 Gion 지구에 자리잡고 있다.'
---
::

### 자동 스크롤 아이콘

`auto-scroll-icon`prop을 사용하여 자동 스크롤 버튼 [Icon](/docs/components/icon)로 사용자 지정합니다. 기본값은 `i-lucide-arrow-down`입니다.

::component-code
---
상품명 : True
축소: true
외부:
  -  메시지
무시하기:
  -  메시지
  -  autoScrolll. color
  -  autoScrolll. variant
  -  shouldScrollToBottom
클래스: 'overflow-y-auto max-h -[341px]static'
소품 :
  autoScrollIcon: 'i-lucide-chevron-down'
  shouldScrollToBottom : false
  메시지:
    - id: '6045235a-a435-46b8-989d-2df38ca2eb47'
      역할: 사용자
      부품 :
        - type: '텍스트'
          사진: "hello, how are you?"
    - id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8'
      역할: 도우미
      부품 :
        - type: '텍스트'
          문자: "잘하고 있습니다, 물어봐 주셔서 감사합니다! 오늘 어떻게 도와 드릴까요?"
    - id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a'
      역할: 사용자
      부품 :
        - type: '텍스트'
          문자: "도쿄의 현재 날씨는 어떻습니까?"
    - id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      역할: 도우미
      부품 :
        - type: '텍스트'
          텍스트 (Text)"최신 데이터에 따르면 도쿄는 현재 기온이 24°C(75°F) 정도로 맑은 날씨를 경험하고 있으며 맑은 하늘이 있는 아름다운 날이다. 나머지 주에 대한 예보에 따르면 목요일에 비가 내릴 가능성이 약간 있으며 주말까지는 기온이 28°C로 점차 상승하고 습도가 65% 정도로 적당하다. 그리고 바람의 속도는 남동쪽에서 8km/h로 가볍습니다. 대기질은 42로 좋습니다. 자외선 지수가 7로 높기 때문에 야외에서 시간을 보낼 계획이라면 자외선 차단제를 바르는 것이 좋습니다. 일출은 오전 5시 24분, 일몰은 6시 됩니다. 오후 48시, 도쿄는 오늘 약 13시간 24분의 일광을 제공하고 있습니다. 달은 현재 빛나는 거대한 단계에 있습니다."
    - id: 'c3e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      역할: 사용자
      부품 :
        - type: '텍스트'
          사진: "Can you recommend some popular tourist attractions in Kyoto?"
    - id: 'd4f5g8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4'
      역할: 도우미
      부품 :
        - type: '텍스트'
          텍스트 (Text) 교토는 아름다운 절, 전통 찻집, 정원으로 유명하다. 몇몇 인기 명소에는 금각지가 포함된다.(금관) 거울 연못에 비친 아름다운 금빛 잎 외관, 산을 휘감고 있는 수천 개의 주홍색 토리오 문이 있는 푸시미 이나리 신사, 우뚝 솟은 줄기가 다른 세상의 분위기를 조성하는 아라시야마 대나무 숲, 키요미즈데라 사원은 도시의 전경을 제공하는 언덕 위에 자리잡고 있으며, 전통적인 목조 마키야 집들이 줄지어 있는 좁은 돌로 포장된 거리를 지나 저녁 약속에 서둘러 가는 것을 볼 수 있는 역사적인 Gion 지구에 자리잡고 있다.'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.arrowDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.arrowDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  자동으로 스크롤해야 합니다.

`should-auto-scroll`prop을 사용하여 메시지가 스트리밍되는 동안 연속 자동 스크롤을 활성화/비활성화합니다. 기본값은 `false`입니다.

```vue
<template>
  <UChatMessages :messages="messages" should-auto-scroll />
</template>
```

###  아래로 스크롤해야 합니다.

`should-scroll-to-bottom`prop을 사용하여 구성 요소가 마운트될 때 아래쪽 자동 스크롤을 활성화/비활성화합니다. 기본값은 `true`입니다.

```vue
<template>
  <UChatMessages :messages="messages" :should-scroll-to-bottom="false" />
</template>
```

##  예

::tip{to="/docs/components/chat"}
**Chat**Overview 페이지에서 설치 지침, 서버 설정 및 사용 예를 확인하십시오.
::

### LED 슬롯 포함

`#indicator`슬롯을 사용하여 [`ChatShimmer`](/docs/components/chat-shimmer)effect로 로드 표시기를 사용자 지정합니다.

::component-example
---
이름: 'chat-messages-indicator-slot-example'
클래스: 'overflow-y-auto'
축소: true
---
::

##  API

### Props 이미지

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

::tip
ChatMessages 내부의 [`ChatMessage`](/docs/components/chat-message#slots) 구성 요소의 모든 슬롯을 사용할 수 있으며 자동으로 전달되므로 `messages`prop을 사용할 때 개별 메시지를 사용자 정의 할 수 있습니다.

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

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `registerMessageRef(id: string, element: ComponentPublicInstance \| null)`{lang="ts-type"}| `void` @ {lang="ts-type"}|

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
