---
description: 여러 줄 텍스트를 입력할 textarea 요소입니다.
category: form
keywords:
  - multiline
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Textarea.vue
---

## Usage

`v-model` 명령어를 사용하여 Textarea의 값을 제어합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ''
---
::

### 행

`rows` 소품을 사용하여 행 수를 설정합니다. 기본값은 `3`입니다.

::component-code
---
props:
  rows: 12
---
::

### 자리 표시자

`placeholder` Prop을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
props:
  placeholder: 'Type something...'
---
::

### 자동 크기 조정

`autoresize` prop을 사용하여 Textarea의 높이 자동 크기 조정을 활성화합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea.'
  autoresize: true
---
::

자동 크기 조정 시 `maxrows` Prop을 사용하여 최대 행 수를 설정합니다. `0`로 설정하면 Textarea가 무한히 증가합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea with a maximum of 4 rows.'
  maxrows: 4
  autoresize: true
---
::

### Color

`color` Prop을 사용하여 Textarea에 초점을 맞출 때 링 색상을 변경합니다.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Type something...'
---
::

::note
`highlight` prop은 초점 상태를 표시하기 위해 사용되며, 유효성 검사 오류가 발생할 때 내부적으로 사용됩니다.
::

### 변형

`variant` prop 를 사용하여 Textarea 의 변형을 변경합니다.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Type something...'
---
::

### Size 크기

`size` prop 을 사용하여 Textarea 의 크기를 변경합니다.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Type something...'
---
::

### Icon 이미지

`icon` prop을 사용하여 Textarea 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  icon: 'i-lucide-search'
  size: md
  variant: outline
  placeholder: 'Search...'
  rows: 1
---
::

`leading` 및 `trailing` props를 사용하여 아이콘 위치를 설정하거나 `leading-icon` 및 `trailing-icon` props를 사용하여 각 위치에 대해 다른 아이콘을 설정합니다.

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  trailingIcon: i-lucide-at-sign
  placeholder: 'Enter your email'
  size: md
  rows: 1
---
::

### Avatar 이미지

`avatar` prop을 사용하여 Textarea 내부에 [Avatar](xph12x)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - placeholder
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  variant: outline
  placeholder: 'Search...'
  rows: 1
---
::

### loading 중

`loading` prop을 사용하여 Textarea에 로딩 아이콘을 표시합니다.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
  rows: 1
---
::

### Loading 아이콘

`loading-icon` 소품을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  placeholder: 'Search...'
  rows: 1
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

### 비활성 화 됨

`disabled` prop 을 사용하여 Textarea 를 비활성화합니다.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Type something...'
---
::

## API 파일

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<textarea>` HTML 속성을 지원합니다.
::

### 슬롯

:component-slots

### Emits 파일

:component-emits

### 노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `textareaRef`{lang="ts-type"}| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"} (`Ref<HTMLTextAreaElement \| null>`{lang="ts-type"})|
| `autoResize`{lang="ts-type"} 공식| `() => void`{lang="ts-type"} (`() => void`{lang="ts-type"})|

## 테마

:component-theme

## Changelog 파일

:component-changelog
