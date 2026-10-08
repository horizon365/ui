---
title: InputTags 입력
description: 대화식 태그를 표시하는 입력 요소입니다.
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

##  사용

`v-model` 지시문을 사용하여 InputTags 값을 제어합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: ['Vue']
---
::

상태를 제어할 필요가 없을 때는 `default-value`prop을 사용하여 초기값을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  - defaultValue - defaultValue
소품 :
  defaultValue: ['Vue']
---
::

### 자리 표시자

`placeholder`prop을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
소품 :
  자리 표시자: "태그 입력..."
---
::

### 최대 길이

`max-length`prop 을 사용하여 태그에 허용되는 최대 문자 수를 설정합니다.

::component-code
---
소품 :
  maxLength : 4개
---
::

###  색상

`color`prop을 사용하여 InputTags에 초점을 맞출 때 링 색상을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: ['Vue']
  색상: 중립
  강조 표시:true
---
::

::note
`highlight`prop은 초점 상태를 보여주기 위해 사용됩니다. 검증 오류가 발생할 때 내부적으로 사용됩니다.
::

### Variants 변형

`variant`prop 을 사용하여 InputTags 의 모양을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: ['Vue']
  변형: 미묘한
  색상: 중립
  강조 표시:거짓
---
::

###  사이즈

`size`prop을 사용하여 InputTags의 크기를 조정합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: ['Vue']
  크기: xl
---
::

###  아이콘

`icon`prop을 사용하여 InputTags 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: ['Vue']
  아이콘: 'i-lucide-search'
  크기: MD
  변형: 윤곽선
---
::

::note
`leading` 및 `trailing`props를 사용하여 아이콘 위치를 설정하거나 `leading-icon` 및 `trailing-icon`props를 사용하여 각 위치에 대해 다른 아이콘을 설정합니다.
::

### Avatar 이미지

`avatar`prop을 사용하여 InputTags 내부에 [Avatar](/docs/components/avatar) 를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
  - avatar.loading - avatar.loading
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: ['Vue']
  아바타 (Avatar):
    src: 'https://github.com/vuejs.png'
    로드: Lazy
  크기: md
  변형: 외곽 선
---
::

### 아이콘 삭제

`delete-icon`prop을 사용하여 태그에서 [Icon](/docs/components/icon) 삭제를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: ['Vue']
  deleteIcon: 'i-lucide-trash'
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.close` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.close` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  로딩 중

`loading`prop을 사용하여 InputTags에 로드 아이콘을 표시합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue
소품 :
  modelValue: ['Vue']
  로드: true
  후행: false
---
::

### Loading Icon (아이콘 불러오기)

`loading-icon`prop을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: ['Vue']
  로드: true
  loadingIcon: 'i-lucide-loader'
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

`disabled`prop 을 사용하여 InputTags 를 비활성화합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: ['Vue']
  사용 안 함:true
---
::

##  예제

###  내에서 FormField

[FormField](/docs/components/form-field) 구성 요소 내에서 InputTags를 사용하여 레이블, 도움말 텍스트, 필수 표시기 등을 표시할 수 있습니다.

::component-example
---
name: 'input-tags-form-field-example' 입력태그-양식-필드-예제
---
::

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<input>`HTML 속성을 지원합니다.
::

###  슬롯

:컴포넌트 - 슬롯

###  Emits

:구성요소 - 방출

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
