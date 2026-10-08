---
title: ChatReasoning 대화
description: 축소 가능한 AI 추론 또는 사고 과정을 표시합니다.
category: chat
links:
  - label: 축소 가능
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatReasoning.vue
---

##  사용

ChatReasoning 구성 요소는 AI 추론 또는 사고 내용을 표시하는 축소 가능한 블록을 렌더링합니다. 스트리밍 중에는 자동으로 열리고 이후에는 자동으로 닫힙니다.

::component-example
---
축소: true
상품명 : True
제목: chat-reasoning-example
클래스: 'h-[252px]'
---
::

::note{to="/docs/composables/use-scroll-shadow"}
본문 내용은 `useScrollShadow`컴포지블을 사용하여 오버플로우할 때 페이드 그림자를 적용합니다.
::

###  텍스트

`text`prop을 사용하여 추론 내용을 설정합니다. 텍스트는 축소 가능한 본문 안에 표시됩니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
소품 :
  텍스트: '사용자가 Vue 구성 요소에 대해 묻고 있습니다...'
  클래스: 'w-60'
---
::

###  스트리밍

`streaming`prop을 사용하여 활성 추론을 나타냅니다. 구성 요소는 스트리밍이 시작되면 자동으로 열리고 종료되면 자동으로 닫힙니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  text
소품 :
  스트리밍: True
  텍스트: '사용자가 Vue 구성 요소에 대해 묻고 있습니다...'
  클래스: 'w-60'
---
::

::tip
`@nuxt/ui/utils/ai`의 `isPartStreaming` 유틸리티를 사용하여 부품이 현재 스트리밍되고 있는지 확인합니다.
::

### Shimmer @ 시머

스트리밍 시 트리거 레이블은 [`ChatShimmer`](/docs/components/chat-shimmer) 구성요소를 사용합니다. `shimmer`prop을 사용하여 `duration` 및 `spread`를 사용자 지정합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  text
소품 :
  스트리밍: true
  텍스트: '사용자가 Vue 구성 요소에 대해 묻고 있습니다...'
  Shimmer:
    기간: 2
    스프레드: 2
  클래스: 'w-60'
---
::

###  아이콘

`icon`prop을 사용하여 트리거 옆에 [Icon](/docs/components/icon) 구성 요소를 표시합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  텍스트
소품 :
  아이콘 : i-lucide-brain
  텍스트: '사용자가 Vue 구성 요소에 대해 묻고 있습니다...'
  클래스: 'w-60'
---
::

### Chevron 시브론

`chevron`prop 을 사용하여 Chevron 아이콘의 위치를 변경합니다.

::note
`chevron`가 `leading`로 설정되어 있으면 아이콘은 호버 및 열려 있을 때 체브론과 스왑됩니다.
::

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  텍스트
소품 :
  갈매기 모양:지시선
  아이콘 : i-lucide-brain
  텍스트: '사용자가 Vue 구성 요소에 대해 묻고 있습니다...'
  클래스: 'w-60'
---
::

### Chevron Icon 이미지

`chevron-icon`prop을 사용하여 chevron [Icon](/docs/components/icon). 기본값은 `i-lucide-chevron-down`로 사용자 지정합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  텍스트
소품 :
  chevronIcon: 'i-lucide-arrow-down'
  텍스트: "사용자가 Vue 구성 요소에 대해 묻고 있습니다..."
  클래스: 'w-60'
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.chevronDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.chevronDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

##  예

::tip{to="/docs/components/chat"}
**Chat**Overview 페이지에서 설치 지침, 서버 설정 및 사용 예를 확인하십시오.
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  Emits

:구성요소 - 방사

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
