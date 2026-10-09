---
title: ChatPrompt 대화
description: 'AI 채팅 인터페이스에서 프롬프트를 제출하기 위한 향상된 Textarea.'
category: chat
links:
  - label: 텍스트레아 Textarea
    to: /docs/components/textarea
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPrompt.vue
---

## Usage

ChatPrompt 구성 요소는 `<form>` 요소를 렌더링하고 [Textarea](/docs/components/textareaxph08x 구성 요소를 확장하여 `icon`, `placeholder`, `autofocus` 등과 같은 속성을 전달할 수 있습니다.

::component-example
---
collapse: true
name: 'chat-prompt-example'
---
::

::note
ChatPrompt는 다음과 같은 이벤트를 처리합니다:

- 사용자가 :kbd{value="enter"}를 누를 때 양식이 제출됩니다. `submit-on-enter` prop을 `false`로 설정하면 다음 줄을 추가할 수 있습니다. kbd{value="ctrl"}+:kbd{value="enter"} (또는 macOS에서는 :kbd{value="cmd"}+:kbd{value="enter"})로 제출할 수 있습니다
- :kbd{value="escape"} 를 누르면 `close` 이벤트가 발생할 때 텍스트 영역이 흐리게 됩니다.
::

### 변형

`variant` Prop을 사용하여 프롬프트 스타일을 변경합니다. 기본값은 `outline`입니다.

::component-code
---
hide:
  - autofocus
props:
  variant: 'soft'
  autofocus: false
---
::

## 예

::tip{to="/docs/components/chat"}
**Chat** 개요 페이지에서 설치 지침, 서버 설정 및 사용 예를 확인하십시오.
::

### 편집기 사용 : badge{label="4.10+" class="align-text-top"}

`#header`, `#body` 및 `#footer` 슬롯을 구성하여 파일 첨부 파일, `@` 언급이 포함된 [Editor](/docs/components/editor) 및 [EditorMentionMenu](/docs/components/editor-mention-menu/docs/components/editor-mention-menu) 및 선택기 모드를 통한 `/` 명령과 같은 풍부한 프롬프트를 구축합니다.

::component-example
---
collapse: true
name: 'chat-prompt-editor-example'
class: 'justify-center'
---
::

::note
`#body` 슬롯은 내부 텍스트 영역을 대체하고 `submit` 및 `close` 처리기를 노출하므로 편집기의 키보드 바로 가기를 양식에 와이어링할 수 있습니다. 언급 메뉴가 열려 있을 때 : kbd{value="enter"} 키를 누르면 강조 표시된 항목이 제출되지 않고 선택됩니다
::

### As 홈 페이지

또한 채팅 인터페이스 홈 페이지에서 사용할 수 있습니다.

```vue [pages/index.vue] {2,4,8-15,24,26}
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const input = ref('')

const { messages, status, sendMessage } = useChat()

async function onSubmit() {
  sendMessage({ text: input.value })

  // Navigate to chat page after first message
  if (messages.value.length === 1) {
    await navigateTo('/chat')
  }
}
</script>

<template>
  <UDashboardPanel>
    <template #body>
      <UContainer>
        <h1>How can I help you today?</h1>

        <UChatPrompt v-model="input" @submit="onSubmit">
          <UChatPromptSubmit :status="status" />
        </UChatPrompt>
      </UContainer>
    </template>
  </UDashboardPanel>
</template>
```

## API

### Props 코드

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<textarea>` HTML 속성도 지원합니다.
::

### 슬롯

:component-slots

### Emits

:component-emits

### exposes

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `textareaRef`{lang="ts-type"} (`textareaRef`{lang="ts-type"})| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"}|

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
