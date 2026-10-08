---
title: ChatShimmer 이미지
description: 텍스트 쉬머 애니메이션 효과를 표시합니다.
category: chat
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatShimmer.vue
---

##  사용

ChatShimmer 구성 요소는 텍스트 위에 애니메이션 shimmer 그라디언트를 가진 요소를 렌더링하며, 일반적으로 채팅 인터페이스에서 스트리밍 또는 로드 상태를 나타내는 데 사용됩니다.

::note
이 구성 요소는 스트리밍 시 [`ChatTool`](/docs/components/chat-tool) 및 [`ChatReasoning`PH08/docs/components/chat-reasoning) 구성 요소에 의해 자동으로 사용됩니다.
::

::tip
사용자가 축소된 모션을 선호하면 애니메이션이 자동으로 비활성화되고 텍스트는 정적 음소거 텍스트로 표시됩니다.
::

###  텍스트

`text`prop을 사용하여 shimmer 텍스트를 설정합니다.

::component-code
---
소품 :
  사진: "Thinking …"
---
::

###  시간

`duration`prop 을 사용하여 애니메이션 속도를 초 단위로 제어합니다.

::component-code
---
소품 :
  사진: "Thinking …"
  지속시간: 4개
---
::

### Spread 이미지

`spread`prop을 사용하여 shimmer 강조 표시의 너비를 제어합니다. 실제 스프레드는 픽셀 단위로 `text.length * spread`로 계산됩니다.

::component-code
---
소품 :
  사진: "Thinking …"
  스프레드: 5
---
::

##  예제

::tip{to="/docs/components/chat"}
**Chat**Overview 페이지에서 설치 지침, 서버 설정 및 사용 예를 확인하십시오.
::

##  API

###  Props

:컴포넌트 - 소품

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
