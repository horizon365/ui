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

##  사용

`v-model` 지시문을 사용하여 Textarea 값을 제어합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: ''
---
::

###  행

`rows`prop을 사용하여 행 수를 설정합니다. 기본값은 `3`입니다.

::component-code
---
소품 :
  행 : 12
---
::

### 자리 표시자

`placeholder`prop을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
소품 :
  placeholder: 'Type something...' (어떤 것을 입력하십시오...)
---
::

### 자동 크기 조정

`autoresize`prop을 사용하여 Textarea의 높이 자동 크기 조정을 활성화합니다.

::component-code
---
무시하기:
  - modelValue - modelValue
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: '텍스트의 높이를 자동으로 조정하는 긴 텍스트입니다.'
  자동 크기 조정:true
---
::

`maxrows`prop을 사용하여 자동 크기 조정 시 최대 행 수를 설정합니다. `0`로 설정하면 Textarea가 무한히 증가합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: '이 텍스트는 Textarea의 높이를 최대 4개의 행으로 자동 크기 조정하는 긴 텍스트입니다.'
  maxrows: 4 개
  자동 크기 조정: true
---
::

###  색상

`color`prop을 사용하여 Textarea에 초점을 맞출 때 링 색상을 변경합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  색상: 중립
  강조 표시:true
  placeholder: 'Type something...' (어떤 것을 입력하십시오...)
---
::

::note
`highlight`prop은 초점 상태를 보여주기 위해 사용됩니다. 검증 오류가 발생할 때 내부적으로 사용됩니다.
::

### Variant 변수

`variant`prop을 사용하여 Textarea의 변형을 변경합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  색상: 중립
  변형: 미묘한
  강조 표시:거짓
  placeholder: 'Type something...' (어떤 것을 입력하십시오...)
---
::

###  크기

`size`prop을 사용하여 Textarea의 크기를 변경합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  크기: xl
  placeholder: 'Type something...' (어떤 것을 입력하세요...)
---
::

###  아이콘

`icon`prop을 사용하여 Textarea 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  - 자리 표시자
소품 :
  아이콘: 'i-lucide-search'
  크기: md
  변형: 윤곽선
  자리 표시자: 검색...
  행 : 1
---
::

`leading` 및 `trailing`props를 사용하여 아이콘 위치를 설정하거나 `leading-icon` 및 `trailing-icon`props를 사용하여 각 위치에 대해 다른 아이콘을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  - 자리 표시자
소품 :
  trailingIcon: i-lucide-at-sign
  자리 표시자: "Enter your email"
  크기: MD
  행 : 1
---
::

### Avatar 이미지

`avatar`prop을 사용하여 Textarea 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  - 자리 표시자
  - avatar.loading - avatar.loading
소품 :
  아바타 (Avatar):
    src: 'https://github.com/nuxt.png'
    로드: Lazy
  크기: MD
  변형: 외곽 선
  자리 표시자: 검색...
  행: 1
---
::

### 로드 중

`loading`prop을 사용하여 Textarea에 로드 아이콘을 표시합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  로드: true
  트레일링: false
  자리 표시자: 검색...
  행 : 1
---
::

### Loading icon 아이콘

`loading-icon`prop을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  로드: true
  loadingIcon: 'i-lucide-loader'
  자리 표시자: 검색...
  행: 1
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  비활성 화

`disabled`prop 을 사용하여 Textarea 를 비활성화합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  사용 안 함:true
  placeholder: 'Type something...' (어떤 것을 입력하십시오...)
---
::

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

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `textareaRef`{lang="ts-type"}| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"}|
| `autoResize`{lang="ts-type"}| `() => void`{lang="ts-type"}|

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
