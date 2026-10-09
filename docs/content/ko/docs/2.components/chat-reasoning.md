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

## Usage

ChatReasoning 구성 요소는 AI 추론 또는 사고 내용을 표시하는 축소 가능한 블록을 렌더링합니다. 스트리밍 중에는 자동으로 열리고 이후에는 자동으로 닫힙니다.

::component-example
---
collapse: true
prettier: true
name: 'chat-reasoning-example'
class: 'h-[252px]'
---
::

::note{to="/docs/composables/use-scroll-shadow"}
본문 내용은 `useScrollShadow` 컴포지션을 사용하여 오버플로우 시 페이드 그림자를 적용합니다.
::

### Text 파일

`text` 소품을 사용하여 추론 내용을 설정합니다. 텍스트는 축소 가능한 본문 안에 표시됩니다.

::component-code
---
prettier: true
hide:
  - class
props:
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### 스트리밍

`streaming` Prop을 사용하여 활성 추론을 나타냅니다. 구성 요소는 스트리밍이 시작되면 자동으로 열리고 종료되면 자동으로 닫힙니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

::tip
`@nuxt/ui/utils/ai`의 `isPartStreaming` 유틸리티를 사용하여 부품이 현재 스트리밍되고 있는지 확인합니다.
::

### 시머

스트리밍 시 트리거 레이블은 [`ChatShimmer`](/docs/components/chat-shimmer) 구성 요소를 사용합니다. `shimmer` Prop을 사용하여 `duration` 및 `spread`를 사용자 정의합니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'The user is asking about Vue components...'
  shimmer:
    duration: 2
    spread: 2
  class: 'w-60'
---
::

### Icon 이미지

`icon` 소품을 사용하여 트리거 옆에 [Icon](/docs/components/icon) 구성 요소를 표시합니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  icon: i-lucide-brain
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### Chevron 차량 대여

`chevron` Prop을 사용하여 Chevron 아이콘의 위치를 변경합니다.

::note
`chevron`가 `icon`로 설정되어 있으면 아이콘이 커서를 놓고 열려 있을 때 chevron과 스왑됩니다.
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevron: leading
  icon: i-lucide-brain
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

### Chevron 아이콘 아이콘

`chevron-icon` 소품을 사용하여 chevron [Icon](/docs/components/icon) 를 사용자 정의합니다. 기본값은 `i-lucide-chevron-down`입니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevronIcon: 'i-lucide-arrow-down'
  text: 'The user is asking about Vue components...'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.chevronDown` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.chevronDown` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::
::

## examples 예제

::tip{to="/docs/components/chat"}
**Chat** 개요 페이지에서 설치 지침, 서버 설정 및 사용 예를 확인하십시오.
::

## API

### Props (### Props)

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

## 테마

:component-theme

## 변경 로그

:component-changelog
