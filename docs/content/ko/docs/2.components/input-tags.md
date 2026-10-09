---
title: InputTags 입력
description: 대화형 태그를 표시하는 입력 요소입니다.
category: form
keywords:
  - chips input
  - multi value
links:
  - label: InputTags 입력
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tags-input
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTags.vue
---

## Usage

`v-model` 지시문을 사용하여 InputTags 값을 제어합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
---
::

상태를 제어할 필요가 없을 때 `default-value` prop을 사용하여 초기 값을 설정합니다.

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['Vue']
---
::

### 자리표시자

`placeholder` 소품을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
props:
  placeholder: 'Enter tags...'
---
::

### Max 길이

`max-length` Prop을 사용하여 태그에 허용되는 최대 문자 수를 설정합니다.

::component-code
---
props:
  maxLength: 4
---
::

### Color 이미지

InputTags에 초점을 맞출 때 `color` Prop을 사용하여 링 색상을 변경합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  color: neutral
  highlight: true
---
::

::note
`highlight` prop은 초점 상태를 표시하기 위해 사용되며, 유효성 검사 오류가 발생할 때 내부적으로 사용됩니다.
::

### 변형 변수

`variant` prop을 사용하여 InputTags의 모양을 변경합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  variant: subtle
  color: neutral
  highlight: false
---
::

### Sizes 크기

`size` prop 를 사용하여 InputTags 의 크기를 조정합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  size: xl
---
::

### Icon

`icon` prop을 사용하여 InputTags 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  icon: 'i-lucide-search'
  size: md
  variant: outline
---
::

::note
`leading` 및 `trailing` 소품을 사용하여 아이콘 위치를 설정하거나 `leading-icon` 및 `trailing-icon` 소품을 사용하여 각 위치에 대해 다른 아이콘을 설정합니다.
::

### avatar 이미지

`avatar` prop을 사용하여 InputTags 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
  - avatar.loading
external:
  - modelValue
props:
  modelValue: ['Vue']
  avatar:
    src: 'https://github.com/vuejs.png'
    loading: lazy
  size: md
  variant: outline
---
::

### 제거 아이콘

`delete-icon` 소품을 사용하여 태그에서 [Iconxph18x/docs/components/icon) 삭제를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  deleteIcon: 'i-lucide-trash'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.close` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.close` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### loading 파일

`loading` prop을 사용하여 InputTags에 로딩 아이콘을 표시합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  loading: true
  trailing: false
---
::

### Loading 아이콘

`loading-icon` prop을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  loading: true
  loadingIcon: 'i-lucide-loader'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.loading` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.loading` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### 비활성 화

`disabled` prop을 사용하여 InputTags를 비활성화합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ['Vue']
  disabled: true
---
::

## 예제

### within a FormField 형식 내에서

[FormField](/docs/components/form-field) 구성 요소 내에서 InputTags를 사용하여 레이블, 도움말 텍스트, 필수 표시기 등을 표시할 수 있습니다.

::component-example
---
name: 'input-tags-form-field-example'
---
::

## API

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<input>` HTML 속성을 지원합니다.
::

### Slots

:component-slots

### Emits 파일

:component-emits

### exposes 소개

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `inputRef`{lang="ts-type"} Xph195x (`inputRef`{lang="ts-type"}) - `inputRef`{lang="ts-type"}의 발음을 {lang="ts-type"} [en]| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|

## 테마

:component-theme

## 변경 로그

:component-changelog
