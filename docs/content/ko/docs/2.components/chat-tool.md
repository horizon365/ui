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

## Usage

ChatTool 구성 요소는 "구성 요소 검색" 또는 "문서 읽기"와 같이 AI 도구 호출 상태를 표시하는 축소 가능한 블록을 렌더링합니다. 기본 슬롯이 제공되면 축소 가능하게 되어 도구 출력을 표시합니다.

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-example'
---
::

### Text 파일

`text` Prop을 사용하여 공구 상태 텍스트를 설정합니다.

::component-code
---
hide:
  - class
props:
  text: 'Searched components'
  class: 'w-60'
---
::

### 접미어

`suffix` prop 을 사용하여 주 레이블 뒤에 보조 텍스트를 표시합니다.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  text: 'Reading component'
  suffix: 'Button'
  class: 'w-60'
---
::

### Streaming 스트리밍

`streaming` Prop을 사용하여 도구가 활성화되어 있음을 나타냅니다. 텍스트에는 Shimmer 애니메이션이 표시됩니다.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'Searching components...'
  class: 'w-60'
---
::

::tip
`@nuxt/ui/utils/ai`의 `isToolStreaming` 유틸리티를 사용하여 도구 부품이 여전히 실행 중인지 확인합니다. 사용자의 승인을 기다리는 동안 `false`를 반환합니다.
::

### 시머

스트리밍 시 트리거 레이블은 [`ChatShimmer`](/docs/components/chat-shimmer) 구성 요소를 사용합니다. `shimmer` 소품을 사용하여 `duration` 및 `spread`를 사용자 정의합니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'Searching components...'
  shimmer:
    duration: 2
    spread: 2
  class: 'w-60'
---
::

### Icon

`icon` prop을 사용하여 트리거 옆에 [Icon](/docs/components/icon) 구성 요소를 표시합니다.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  icon: i-lucide-search
  text: 'Searched components'
  class: 'w-60'
---
::

### Loading 중

`loading` prop을 사용하여 로딩 표시기를 표시하고, `loading-icon` prop을 사용하여 로딩 아이콘을 사용자 정의합니다.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  loading: true
  text: 'Searching components...'
  class: 'w-60'
---
::

### loading 아이콘

`loading-icon` 소품을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
hide:
  - class
ignore:
  - text
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  text: 'Searching components...'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.loading` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.loading` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::
::

### Chevron 차량

`chevron` 소품을 사용하여 갈매기 모양 아이콘의 위치를 변경합니다.

::note
`chevron`가 `icon`와 `leading`로 설정되면 아이콘이 마우스 위에 있고 열려 있을 때 chevron과 스왑됩니다.
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
  icon: i-lucide-search
  text: 'Searched components'
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

### Chevron 아이콘 아이콘

`chevron-icon` 소품을 사용하여 chevron [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-chevron-down`입니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevronIcon: 'i-lucide-arrow-down'
  text: 'Searched components'
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.chevronDown` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.chevronDown` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### 변형

`variant` 소품을 사용하여 비주얼 스타일을 변경합니다. 기본값은 `inline`입니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
  - icon
props:
  variant: card
  text: 'Searched components'
  icon: i-lucide-search
  chevron: trailing
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

### Actions:badge{label="4.10+" class="align-text-top"} 동작

`actions` prop을 사용하여 트리거 아래에 [Button](/docs/components/button) 목록을 표시하며, 실행 전에 사용자 확인이 필요한 도구에 유용합니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
  - icon
  - variant
  - actions
props:
  actions:
    - label: 'Approve'
    - label: 'Deny'
      color: neutral
      variant: soft
  text: 'Run terminal command'
  variant: card
  icon: i-lucide-terminal
  class: 'w-60'
slots:
  default: |

    $ pnpm run lint
---
::

## examples 예제

::tip{to="/docs/components/chat"}
**Chat** 개요 페이지에서 설치 지침, 서버 설정 및 사용법 예를 확인하십시오.
::

### 승인 흐름 포함: badge{label="4.10+" class="align-text-top"}

`actions` 소품을 사용하여 [AI SDK](https://ai-sdk.dev/docs/agents/tool-approvalsxph22x로 도구 승인 플로우를 구축합니다. 도구 부품이 `approval-requested` 상태에 있으면 승인 및 거부 작업을 표시하고 `addToolApprovalResponse`로 응답합니다.

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-approval-example'
---
::

::tip
`@nuxt/ui/utils/ai`의 `isToolApprovalPending` 유틸리티를 사용하여 보류 중인 승인을 감지하면 `isToolStreaming`는 이 상태에서 `false`를 반환합니다.

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

## API 파일

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
