---
title: ChatPromptSubmit (ChatPromptSubmit)
description: '자동 상태 처리를 사용하여 채팅 프롬프트를 제출하는 단추입니다.'
category: chat
links:
  - label: 단추
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPromptSubmit.vue
---

##  사용

ChatPromptSubmit 구성 요소는 [ChatPrompt](/docs/components/chat-prompt) 구성 요소 내에서 사용되며 자동으로 다른 `status` 값을 처리하여 대화를 제어합니다.

그것은 [Button](/docs/components/button) 구성 요소를 확장, 그래서 당신은 `color`, `variant`, `size` 등과 같은 속성을 전달 할 수 있습니다.

::code-preview

#기본 값
: u-chat-prompt-제출

# 코드
```vue
<template>
  <UChatPrompt>
    <UChatPromptSubmit />
  </UChatPrompt>
</template>
```
::

::note
또한 [`ChatPrompt`](/docs/components/chat-prompt) 구성 요소의 `footer` 슬롯 내에서 사용할 수 있습니다.
::

###  준비

상태가 `ready`{lang="ts-type"}인 경우 `color`, `variant` 및 `icon`props를 사용하여 Button을 사용자 정의합니다. 기본값은 다음과 같습니다.

- `color="primary"`{lang="ts-type"}
- `variant="solid"`{lang="ts-type"}
-  @ `icon="i-lucide-arrow-up"` @ {lang="ts-type"}

::component-code
---
상품명 : True
항목:
  색상 :
    -  primary
    -  secondary
    -  성공
    -  경고
    -  오류
    -  neutral
  변형:
    -  solid
    -  outline
    -  soft
    - subtle @ 미묘한
    -  ghost
소품 :
  색상 : primary
  variant: 'solid'에 해당되는 글 1건
  아이콘: 'i-lucide-arrow-up'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.arrowUp` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.arrowUp` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  제출 됨

상태가 `submitted`{lang="ts-type"}인 경우 `submitted-color`, `submitted-variant` 및 `submitted-icon`props를 사용하여 Button을 사용자 정의합니다. 기본값은 다음과 같습니다.

-  @ `submittedColor="neutral"` @ @ {lang="ts-type"} @
- `submittedVariant="subtle"`{lang="ts-type"}
-  @ `submittedIcon="i-lucide-square"` @ {lang="ts-type"}

::note
`stop` 이벤트는 사용자가 Button을 클릭하면 발생합니다.
::

::component-code
---
상품명 : True
무시하기:
  -  status
프로젝트:
  submittedColor:
    -  기본
    -  secondary
    -  성공
    -  경고
    -  오류
    -  neutral
  submittedVariant:
    -  solid
    -  개요
    -  soft
    - subtle @ 미묘한
    -  ghost
소품 :
  submittedColor: 'neutral' (중립적인 색상)
  submittedVariant: '미묘한'
  submittedIcon: 'i-lucide-square'
  상태: 'submitted'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.stop` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.stop` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  스트리밍

상태가 `streaming`{lang="ts-type"}인 경우 `streaming-color`, `streaming-variant` 및 `streaming-icon`props를 사용하여 Button을 사용자 정의합니다. 기본값은 다음과 같습니다.

- `streamingColor="neutral"`{lang="ts-type"}
- `streamingVariant="subtle"`{lang="ts-type"}
- `streamingIcon="i-lucide-square"`{lang="ts-type"}

::note
`stop` 이벤트는 사용자가 버튼을 클릭할 때 발생합니다.
::

::component-code
---
상품명 : True
무시하기:
  -  status
항목:
  streamingColor:
    -  기본
    -  secondary
    -  성공
    -  경고
    -  오류
    -  neutral
  streamingVariant:
    -  solid
    -  outline
    -  soft
    - subtle @@ 비밀번호
    -  ghost
소품 :
  streamingColor: 'neutral' 이미지
  streamingVariant: "미묘한"
  streamingIcon: 'i-lucide-square'
  상태: "스트리밍"
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.stop` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.stop` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  에러

`error`{lang="ts-type"} 상태인 경우 `error-color`, `error-variant` 및 `error-icon`props를 사용하여 Button을 사용자 정의합니다. 기본값은 다음과 같습니다.

- `errorColor="error"`{lang="ts-type"}
- `errorVariant="soft"`{lang="ts-type"}
- `errorIcon="i-lucide-rotate-ccw"`{lang="ts-type"}

::note
`reload` 이벤트는 사용자가 버튼을 클릭할 때 발생합니다.
::

::component-code
---
상품명 : True
무시하기:
  -  status
프로젝트:
  errorColor:
    -  기본
    - secondary @ 시월
    -  성공
    -  경고
    -  오류
    -  neutral
  errorVariant :
    -  solid
    -  개요
    -  soft
    - subtle @ 비밀번호
    @ph147@@ghost @ ghost @ @ @ @ ghost
소품 :
  errorColor: '오류'
  errorVariant: '소프트'
  errorIcon: 'i-lucide-rotate-ccw'
  상태: 'error'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.reload` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.reload` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

##  예

::tip{to="/docs/components/chat"}
**Chat**Overview 페이지에서 설치 지침, 서버 설정 및 사용 예를 확인하십시오.
::

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 컴포넌트는 또한 모든 네이티브 `<button>`HTML 속성을 지원합니다.
::

###  슬롯

:컴포넌트 - 슬롯

###  에미츠

:구성요소 - 방출

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
