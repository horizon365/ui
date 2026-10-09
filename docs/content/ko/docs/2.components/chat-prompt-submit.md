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

## Usage

ChatPromptSubmit 구성 요소는 [ChatPrompt](xph04x) 구성 요소 내에서 프롬프트를 제출하는 데 사용됩니다. 대화를 제어하기 위해 다른 `status` 값을 자동으로 처리합니다.

[Button](/docs/components/button) 구성 요소를 확장하므로 `color`, `variant`, `size` 등과 같은 속성을 전달할 수 있습니다.

::code-preview

#default
:u-chat-prompt-submit

#code
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

### Ready 지원

상태가 `ready`{lang="ts-type"}인 경우 `color`, `variant` 및 `icon` props를 사용하여 Button을 사용자 정의합니다. 기본값은 다음과 같습니다.

- `color="primary"`{lang="ts-type"}
- `variant="solid"`{lang="ts-type"}
- `icon="i-lucide-arrow-up"`{lang="ts-type"}의 발음을 - `icon="i-lucide-arrow-up"`{lang="ts-type"}

::component-code
---
prettier: true
items:
  color:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  color: 'primary'
  variant: 'solid'
  icon: 'i-lucide-arrow-up'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.arrowUp` 키 아래의 `app.config.ts` 내에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.arrowUp` 키 아래의 `vite.config.ts` 내에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Submitted 제출

상태가 `submitted`{lang="ts-type"}인 경우 `submitted-color`, `submitted-variant` 및 `submitted-icon` props를 사용하여 Button을 사용자 정의합니다. 기본값은 다음과 같습니다.

- `submittedColor="neutral"`{lang="ts-type"} (- `submittedColor="neutral"`{lang="ts-type"})
- `submittedVariant="subtle"`{lang="ts-type"} (- `submittedVariant="subtle"`{lang="ts-type"})
- `submittedIcon="i-lucide-square"`{lang="ts-type"}의 발음을 - `submittedIcon="i-lucide-square"`{lang="ts-type"}

::note
`stop` 이벤트는 사용자가 Button을 클릭할 때 발생합니다.
::

::component-code
---
prettier: true
ignore:
  - status
items:
  submittedColor:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  submittedVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  submittedColor: 'neutral'
  submittedVariant: 'subtle'
  submittedIcon: 'i-lucide-square'
  status: 'submitted'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.stop` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.stop` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Streaming 파일

상태가 `streaming`{lang="ts-type"}인 경우 `streaming-color`, `streaming-variant` 및 `streaming-icon` 소품을 사용하여 Button을 사용자 정의합니다. 기본값은 다음과 같습니다.

- `streamingColor="neutral"`{lang="ts-type"}
- `streamingVariant="subtle"`{lang="ts-type"} - xph120{lang="ts-type"}
- `streamingIcon="i-lucide-square"`{lang="ts-type"} (- `streamingIcon="i-lucide-square"`{lang="ts-type"})

::note
`stop` 이벤트는 사용자가 Button을 클릭할 때 발생합니다.
::

::component-code
---
prettier: true
ignore:
  - status
items:
  streamingColor:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  streamingVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  streamingColor: 'neutral'
  streamingVariant: 'subtle'
  streamingIcon: 'i-lucide-square'
  status: 'streaming'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.stop` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.stop` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Error 오류

상태가 `error`{lang="ts-type"}인 경우 `error-color`, `error-variant` 및 `error-icon` props를 사용하여 Button을 사용자 정의합니다. 기본값은 다음과 같습니다.

- `errorColor="error"`{lang="ts-type"} (- `errorColor="error"`{lang="ts-type"})
- `errorVariant="soft"`{lang="ts-type"} - {lang="ts-type"} (- `errorVariant="soft"`{lang="ts-type"}) / - `errorVariant="soft"`{lang="ts-type"}
- `errorIcon="i-lucide-rotate-ccw"`{lang="ts-type"}

::note
`reload` 이벤트는 사용자가 Button을 클릭할 때 발생합니다.
::

::component-code
---
prettier: true
ignore:
  - status
items:
  errorColor:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  errorVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  errorColor: 'error'
  errorVariant: 'soft'
  errorIcon: 'i-lucide-rotate-ccw'
  status: 'error'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.reload` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.reload` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

## 예제

::tip{to="/docs/components/chat"}
**Chat** 개요 페이지에서 설치 지침, 서버 설정 및 사용법 예를 확인하십시오.
::

## API 파일

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<button>` HTML 속성을 지원합니다.
::

### Slots

:component-slots

### Emits

:component-emits

## 테마

:component-theme

## 변경 로그

:component-changelog
