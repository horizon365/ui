---
title: ChatMessage (ChatMessage)
description: '아이콘, 아바타 및 동작이 포함된 대화 메시지를 표시합니다.'
category: chat
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessage.vue
---

##  사용

ChatMessage 컴포넌트는 `<article>` 요소를 `user` 또는 `assistant` 채팅 메시지로 렌더링합니다.

::code-preview

::u-chat-message
---
부품 :
  - type: '텍스트'
    ID: '1'
    텍스트: '안녕하세요! Nuxt UI를 사용하여 AI 챗봇을 구축하는 방법에 대해 자세히 알려주세요.'
사진: "right"
모델 번호:soft
역할: "사용자"
id: '1'
아바타 (Avatar):
  src: 'https://github.com/benjamincanac.png'
  로드: Lazy
---
::

::

::tip{to="/docs/components/chat-messages"}
`ChatMessages` 구성 요소를 사용하여 채팅 메시지 목록을 표시합니다.
::

###  부품

`parts`prop을 사용하여 AI SDK 형식을 사용하여 메시지 내용을 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  부품
  -  역할
  -  id
소품 :
  부품 :
    - type: 'text'
      ID: '1'
      텍스트: '안녕하세요! Nuxt UI를 사용하여 AI 챗봇을 구축하는 방법에 대해 자세히 알려주세요.'
  역할: '사용자'
  ID: '1'
---
::

::note
`parts`prop은 AI SDK에 권장되는 형식입니다. 각 파트에는 `type` (예: 'text') 및 해당 콘텐츠가 있습니다. ChatMessage 구성 요소는 이전 버전과의 호환성을 위해 사용되지 않는 `content`prop을 지원합니다.
::

###  사이드

`side`prop을 사용하여 왼쪽이나 오른쪽에 메시지를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  부품
  -  역할
  -  id
소품 :
  사진: "right"
  부품 :
    - type: '텍스트'
      id: '1'
      텍스트: '안녕하세요! Nuxt UI를 사용하여 AI 챗봇을 구축하는 방법에 대해 자세히 알려주세요.'
  역할: '사용자'
  ID: '1'
---
::

::note
[`ChatMessages`](/docs/components/chat-messages) 구성요소를 사용할 때 `side`prop은 `assistant`메시지에 대해 `left`로 설정되고 `user`메시지에 대해 `right`로 설정됩니다.
::

###  Variant

`variant`prop을 사용하여 메시지 스타일을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  부품
  -  역할
  -  id
소품 :
  모델 번호:soft
  부품 :
    - type: '텍스트'
      id: '1'
      텍스트: '안녕하세요! Nuxt UI를 사용하여 AI 챗봇을 구축하는 방법에 대해 자세히 알려주세요.'
  역할: '사용자'
  id: '1'
---
::

::note
[`ChatMessages`](/docs/components/chat-messages) 구성요소를 사용할 때 `variant`prop은 `naked` 메시지에 대해 `assistant`로 설정되고 `user` 메시지에 대해서는 `soft`로 설정됩니다.
::

### 색상: badge{label="4.8+" class="align-text-top"}

`color`prop을 사용하여 메시지 색상을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  부품
  -  역할
  -  id
소품 :
  모델 번호:soft
  색상 : primary
  부품 :
    - type: '텍스트'
      id: '1'
      텍스트: '안녕하세요! Nuxt UI를 사용하여 AI 챗봇을 구축하는 방법에 대해 자세히 알려주세요.'
  역할: '사용자'
  id: '1'
---
::

###  아이콘

`icon`prop을 사용하여 메시지 옆에 [Icon](/docs/components/icon) 구성 요소를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  부품
  -  side
  -  variant
  -  역할
  -  id
소품 :
  아이콘: i-lucide-user
  모델 번호:soft
  사진: "right"
  부품 :
    - type: '텍스트'
      id: '1'
      텍스트: '안녕하세요! Nuxt UI를 사용하여 AI 챗봇을 구축하는 방법에 대해 자세히 알려주세요.'
  역할: '사용자'
  id: '1'
---
::

### Avatar 이미지

`avatar`prop을 사용하여 메시지 옆에 [Avatar](/docs/components/avatar) 구성 요소를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  파트
  -  side
  -  variant
  -  역할
  -  id
  - avatar.loading @ 아바타 로드
소품 :
  아바타 (Avatar):
    src: 'https://github.com/benjamincanac.png'
    로드: Lazy
  모델 번호:soft
  사진: "right"
  부품 :
    - type: 'text'
      ID: '1'
      텍스트: '안녕하세요! Nuxt UI를 사용하여 AI 챗봇을 구축하는 방법에 대해 자세히 알려주세요.'
  역할: '사용자'
  ID: '1'
---
::

또한 `avatar.icon`prop을 사용하여 아이콘을 아바타로 표시할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  -  부품
  -  역할
  -  id
소품 :
  아바타 (Avatar):
    아이콘: i-lucide-bot
  부품 :
    - type: '텍스트'
      id: '1'
      텍스트 (Text)"Nuxt UI는 ChatMessage, ChatMessages, ChatPrompt 구성 요소를 포함한 AI 챗봇을 구축하기 위한 몇 가지 기능을 제공합니다. 모범 사례에는 AI SDK의 Chat 클래스 사용, 변형을 사용하여 적절한 메시지 스타일 지정 구현, 메시지 상호 작용을 위한 내장 작업 활용이 포함됩니다. 구성 요소는 테마 지원 및 응답형 디자인으로 완전히 사용자 정의할 수 있습니다."
  사진: "assistant"
  id: '1'
---
::

###  액션

`actions`prop을 사용하여 메시지 위에 마우스를 놓을 때 표시될 메시지 아래에 동작을 표시합니다.

::component-code
---
상품명 : True
외부:
  - actions 작업
externalTypes:
  -  ButtonProps []
무시하기:
  -  부품
  -  actions
  -  역할
  -  id
소품 :
  동작:
    - label: '클립보드로 복사'
      아이콘 : i-lucide-copy
  부품 :
    - type: '텍스트'
      id: '1'
      텍스트 (Text)"Nuxt UI는 ChatMessage, ChatMessages, ChatPrompt 구성 요소를 포함한 AI 챗봇을 구축하기 위한 몇 가지 기능을 제공합니다. 모범 사례에는 AI SDK의 Chat 클래스 사용, 변형을 사용하여 적절한 메시지 스타일 지정 구현, 메시지 상호 작용을 위한 내장 작업 활용이 포함됩니다. 구성 요소는 테마 지원 및 응답형 디자인으로 완전히 사용자 정의할 수 있습니다."
  역할: '사용자'
  ID: '1'
---
::

##  예

::tip{to="/docs/components/chat"}
**Chat**개요 페이지에서 설치 지침, 서버 설정 및 사용 예를 확인하십시오.
::

##  API

### Props 이미지

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
