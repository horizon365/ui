---
title: ChatTool (ChatTool)
description: 축소 가능한 AI 도구 호출 상태를 표시합니다.
category: chat
links:
  - label: 축소 가능
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatTool.vue
---

##  사용

ChatTool 구성 요소는 "구성 요소 검색" 또는 "문서 읽기"와 같이 AI 도구 호출 상태를 표시하는 축소 가능한 블록을 렌더링합니다. 기본 슬롯이 제공되면 축소 가능하게 되어 도구 출력을 표시합니다.

::component-example
---
축소: true
상품명 : True
이름: 'chat-tool-example'
---
::

###  텍스트

`text`prop을 사용하여 공구 상태 텍스트를 설정합니다.

::component-code
---
숨기기 (Hide):
  -  클래스
소품 :
  사진: "Searched components"
  클래스: 'w-60'
---
::

###  접미사

`suffix`prop 을 사용하여 주 레이블 뒤에 보조 텍스트를 표시합니다.

::component-code
---
숨기기 (Hide):
  -  클래스
무시하기:
  -  텍스트
소품 :
  텍스트: '구성요소 읽기'
  태그 추가 ~를 위한 "Button".
  클래스: 'w-60'
---
::

###  스트리밍

`streaming`prop을 사용하여 도구가 활성화되어 있음을 나타냅니다. 텍스트는 쉬머 애니메이션을 표시합니다.

::component-code
---
숨기기 (Hide):
  -  클래스
무시하기:
  -  text
소품 :
  스트리밍: True
  텍스트: '구성요소 검색 중...'
  클래스: 'w-60'
---
::

::tip
`@nuxt/ui/utils/ai`의 `isToolStreaming` 유틸리티를 사용하여 도구 부품이 여전히 실행 중인지 확인합니다. 도구가 사용자 승인을 기다리는 동안 `false`를 반환합니다.
::

###  Shimmer

스트리밍 시 트리거 레이블은 [`ChatShimmer`](/docs/components/chat-shimmer) 구성요소를 사용합니다. `shimmer` prop을 사용하여 `duration` 및 `spread`를 사용자 정의합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  텍스트
소품 :
  스트리밍: true
  텍스트: '구성요소 검색 중...'
  shimmer:
    기간: 2
    스프레드: 2
  클래스: 'w-60'
---
::

###  아이콘

`icon`prop을 사용하여 트리거 옆에 [Icon](/docs/components/icon) 구성 요소를 표시합니다.

::component-code
---
숨기기 (Hide):
  -  클래스
무시하기:
  -  텍스트
소품 :
  아이콘: i-lucide-search
  사진: "Searched components"
  클래스: 'w-60'
---
::

###  로딩 중

`loading`prop을 사용하여 로드 표시기를 표시합니다. `loading-icon`prop을 사용하여 로드 아이콘을 사용자 정의합니다.

::component-code
---
숨기기 (Hide):
  - class 클래스
무시하기:
  -  텍스트
소품 :
  로드: true
  텍스트: '구성요소 검색 중...'
  클래스: 'w-60'
---
::

### Loading Icon (아이콘 불러오기)

`loading-icon`prop 을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
숨기기 (Hide):
  -  클래스
무시하기:
  -  텍스트
소품 :
  로드: true
  loadingIcon: 'i-lucide-loader'
  텍스트: '구성요소 검색 중...'
  클래스: 'w-60'
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

### Chevron 시브론

`chevron`prop을 사용하여 Chevron 아이콘의 위치를 변경합니다.

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
  아이콘 : i-lucide-search
  사진: "Searched components"
  클래스: 'w-60'
슬롯 :
  기본값 :|

    도구 출력 내용
---
::

### Chevron Icon 이미지

`chevron-icon`prop을 사용하여 chevron[Icon](/docs/components/icon) 기본값은 `i-lucide-chevron-down`로 사용자 지정합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  text
소품 :
  chevronIcon: 'i-lucide-arrow-down'
  사진: "Searched components"
  클래스: 'w-60'
슬롯 :
  기본값 :|

    도구 출력 내용
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

### Variant (변형)

비주얼 스타일을 변경하려면 `variant`prop을 사용합니다. 기본값은 `inline`입니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  class
무시하기:
  -  텍스트
  -  icon
소품 :
  변형: 카드
  사진: "Searched components"
  아이콘 : i-lucide-search
  갈매기 모양:후행
  클래스: 'w-60'
슬롯 :
  기본값 :|

    도구 출력 내용
---
::

###  동작: badge{label="4.10+" class="align-text-top"}

`actions`prop을 사용하여 트리거 아래에 [Button](/docs/components/button) 목록을 표시하며 실행 전에 사용자 확인이 필요한 도구에 유용합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  - class 클래스
무시하기:
  -  텍스트
  -  icon
  -  variant
  -  actions
소품 :
  동작:
    - label: '승인'
    - label: '거부'
      색상: 중립
      변형: 소프트
  텍스트: 'Terminal Command 실행'
  변형: 카드
  아이콘: i-lucide-terminal
  클래스: 'w-60'
슬롯 :
  기본 값:|

    $pnpm 실행 Lint
---
::

##  예

::tip{to="/docs/components/chat"}
**Chat**Overview 페이지에서 설치 지침, 서버 설정 및 사용 예를 확인하십시오.
::

###  승인 흐름으로: badge{label="4.10+" class="align-text-top"}

`actions`prop을 사용하여 [AI SDK](https://ai-sdk.dev/docs/agents/tool-approvals)로 도구 승인 흐름을 구축합니다. 도구 부품이 `approval-requested`상태에 있을 때 승인 및 거부 작업을 표시하고 `addToolApprovalResponse`로 응답합니다.

::component-example
---
축소: true
상품명 : True
이름: 'chat-tool-approval-example'
---
::

::tip
보류 중인 승인을 감지하려면 `@nuxt/ui/utils/ai`의 `isToolApprovalPending` 유틸리티를 사용하십시오. `isToolStreaming`는 이 상태에서 `false`를 반환합니다.

```vue
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'
import { lastAssistantMessageIsCompleteWithApprovalResponses } from 'ai'

const { messages, addToolApprovalResponse } = useChat({
  sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses
})
</script>

<template>
  <UChatTool
    v-if="isToolUIPart(part)"
    :text="getToolName(part)"
    :streaming="isToolStreaming(part)"
    :actions="part.state === 'approval-requested' ? [
      { label: 'Approve', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: true }) },
      { label: 'Deny', color: 'neutral', variant: 'ghost', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: false }) }
    ] : undefined"
  />
</template>
```
::

##  API

### Props @ 프로

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  에미츠

:구성요소 - 방출

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
