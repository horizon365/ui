---
title: 대화 프롬프트
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

##  사용

ChatPrompt 컴포넌트는 `<form>` 요소를 렌더링하고 [Textarea](/docs/components/textarea) 구성요소를 확장하여 `icon`, `placeholder`, `autofocus` 등과 같은 속성을 전달할 수 있습니다.

::component-example
---
축소: true
이름: 'chat-prompt-example'
---
::

::note
ChatPrompt는 다음과 같은 이벤트를 처리합니다.

-  양식은 사용자가 : kbd{value="enter"} 를 누를 때 제출됩니다. `submit-on-enter`prop 을 `false` 로 설정하여 다음과 같이 제출하십시오: kbd{value="ctrl"}+: kbd{value="enter"} (또는: kbd{value="cmd"} @ kbd@ @ ph015 @ @
-  textarea는 : kbd{value="escape"} 을 누르고 `close` 이벤트를 발생시킬 때 흐리게 표시됩니다.
::

### Variant 변수

`variant`prop을 사용하여 프롬프트 스타일을 변경합니다. 기본값은 `outline`입니다.

::component-code
---
숨기기 (Hide):
  - autofocus @ 자동 초점
소품 :
  모델 번호:soft
  자동 초점:false
---
::

##  예제

::tip{to="/docs/components/chat"}
**Chat**Overview 페이지에서 설치 지침, 서버 설정 및 사용 예를 확인하십시오.
::

###  편집자와 함께: badge{label="4.10+" class="align-text-top"}

`#header``#body` 및 `#footer` 슬롯을 작성하여 풍부한 프롬프트를 작성합니다. 파일 첨부 파일, [Editor](/docs/components/editor) @ `@` 멘션 및 `/` 명령 [EditorMentionMenu](/docs/components/editor-mention-menu) 를 통해 파일 첨부 파일 mode selector 를 선택하는 방법

::component-example
---
축소: true
이름 : 'chat-prompt-editor-example'
원제 : justify-center
---
::

::note
`#body` 슬롯은 내부 텍스트 영역을 대체하고 `submit` 및 `close` 처리기를 노출하므로 편집기의 키보드 바로 가기를 양식에 연결할 수 있습니다. 언급 메뉴가 열려 있을 때 : kbd{value="enter"} 를 누르면 강조 표시된 항목이 제출되지 않고 선택됩니다
::

### 홈 페이지로

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

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<textarea>`HTML 속성을 지원합니다.
::

###  슬롯

:컴포넌트 - 슬롯

###  Emits

:구성요소 - 방사

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `textareaRef`{lang="ts-type"}| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"}|

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
