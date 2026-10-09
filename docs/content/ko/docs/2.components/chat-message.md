---
title: ChatMessage 대화
description: '아이콘, 아바타 및 동작이 포함된 대화 메시지를 표시합니다.'
category: chat
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessage.vue
---

## Usage

ChatMessage 구성 요소는 `user` 또는 `assistant` 채팅 메시지에 대한 `<article>` 요소를 렌더링합니다.

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
`ChatMessages` 구성 요소를 사용하여 대화 메시지 목록을 표시합니다.
::

### Parts 부품

`parts` prop를 사용하여 AI SDK 형식을 사용하여 메시지 내용을 표시합니다.

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
`parts` prop은 AI SDK에 권장되는 형식입니다. 각 부분에는 `type`(예: 'text')와 해당 내용이 있습니다. ChatMessage 구성 요소는 이전 버전과의 호환성을 위해 더 이상 사용되지 않는 `content` prop도 지원합니다.
::

### Side 사이드

`side` prop을 사용하여 메시지를 왼쪽이나 오른쪽에 표시합니다.

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
[`ChatMessages`](/docs/components/chat-messages) 구성 요소를 사용하는 경우 `side` 소품은 `assistant` 메시지의 경우 `left`로, `user` 메시지의 경우 `right`로 설정됩니다.
::

### 변형

`variant` prop을 사용하여 메시지의 스타일을 변경합니다.

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
[`ChatMessages`](/docs/components/chat-messages) 구성 요소를 사용하는 경우 `variant` 소품은 `assistant` 메시지의 경우 `naked`, `user` 메시지의 경우 `soft`로 설정됩니다.
::

### Color : badge{label="4.8+" class="align-text-top"}

`color` prop을 사용하여 메시지 색상을 변경합니다.

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

`icon` prop을 사용하여 메시지 옆에 [Icon](xph14x) 구성 요소를 표시합니다.

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

### avatar 이미지

`avatar` prop을 사용하여 메시지 옆에 [Avatar](/docs/components/avatar) 구성 요소를 표시합니다.

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

`avatar.icon` prop을 사용하여 아이콘을 아바타로 표시할 수도 있습니다.

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

### Actions (### 액션)

`actions` 소품을 사용하여 메시지 위에 마우스를 놓을 때 표시될 메시지 아래에 액션을 표시합니다.

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

## 예제

::tip{to="/docs/components/chat"}
**Chat** 개요 페이지에서 설치 지침, 서버 설정 및 사용 예를 확인하십시오.
::

## API 파일

### Props (### Props)

:component-props

### 슬롯

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
