---
description: 텍스트를 입력할 입력 요소입니다.
category: form
keywords:
  - text field
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Input.vue
---

##  사용

`v-model` 지시문을 사용하여 Input 값을 제어합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: \"\"
---
::

###  타입

입력 유형을 변경하려면 `type`prop을 사용합니다. 기본값은 `text`입니다.

일부 유형은 자체 구성 요소에 구현되었습니다. [Checkbox](/docs/components/checkbox)[Radio](/docs/components/radio-group))))))와 같은 일부 다른 유형은 다른 유형은 스타일과 같은 다른 것들은 다른 것들은 스타일에 대해 php016@@InputNumber](](php01

::component-code
---
프로젝트:
  문자:
    -  텍스트
    -  번호
    -  password
    -  search
    -  파일
소품 :
  type : '파일'
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank"}
MDN 웹 문서에서 사용 가능한 모든 유형을 확인할 수 있습니다.
::

### 자리 표시자

`placeholder`prop을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
소품 :
  자리 표시자: 검색...
---
::

###  색상

`color`prop을 사용하여 입력에 초점을 맞출 때 링 색상을 변경합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  색상: 중립
  강조 표시: True
  자리 표시자: 검색...
---
::

::note
`highlight`prop은 초점 상태를 보여주기 위해 사용되며, 검증 오류가 발생할 때 내부적으로 사용됩니다.
::

###  Variant

`variant`prop 을 사용하여 입력의 변형을 변경합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  색상: 중립
  변형: 미묘함
  강조 표시:거짓
  자리 표시자: 검색...
---
::

###  크기

`size`prop을 사용하여 입력 크기를 변경합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  크기: xl
  자리 표시자: 검색...
---
::

###  아이콘

`icon`prop을 사용하여 입력 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  - 자리 표시자
소품 :
  아이콘: 'i-lucide-search'
  크기: md
  변형: 외곽 선
  자리 표시자: 검색...
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
  자리 표시자: 'Enter your email'
  크기: md
---
::

### Avatar 이미지

`avatar`prop을 사용하여 입력 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

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
  변형: 윤곽선
  자리 표시자: 검색...
---
::

###  로딩 중

`loading`prop을 사용하여 입력에 로드 아이콘을 표시합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  로드: true
  트레일링: false
  자리 표시자: 검색...
---
::

### Loading Icon 이미지

`loading-icon`prop을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  로드: true
  loadingIcon: 'i-lucide-loader'
  자리 표시자: 검색...
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

###  비활성 화

`disabled`prop 을 사용하여 입력을 비활성화합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  사용 안 함:true
  자리 표시자: 검색...
---
::

##  예제

###  투명 버튼으로

[Button](/docs/components/button) 슬롯 내부에 입력을 지우려면 입력을 지울 수 있습니다.

::component-example
---
이름: input-clear-button-example 입력-클리어-버튼-예제
---
::

###  복사 버튼 사용

[Button](/docs/components/button) 슬롯에 ) 를 넣어 클립보드에 값을 복사할 수 있습니다.

::component-example
---
이름: 'input-copy-button-example'
---
::

###  비밀번호 전환

[Button](/docs/components/button) 슬롯에 `#trailing` 를 넣어 암호 표시를 토글할 수 있습니다.

::component-example
---
이름: 'input-password-toggle-example'
---
::

### 암호 강도 표시기 포함

[Progresss](/docs/components/progress) 구성 요소를 사용하여 암호 강도 표시기를 표시할 수 있습니다.

::component-example
---
축소: true
이름 : 'input-password-strength-indicator-example'
---
::

###  문자 제한

`#trailing`slot을 사용하여 입력에 문자 제한을 추가할 수 있습니다.

::component-example
---
이름: 'input-character-limit-example'
---
::

###  키보드 단축키 사용

[Kbd](/docs/components/kbd) 구성 요소를 `#trailing` 슬롯에 사용하여 입력에 키보드 바로 가기를 추가할 수 있습니다.

::component-example
---
이름: 'input-kbd-example'
---
::

::note{to="/docs/composables/define-shortcuts"}
이 예제에서는 `defineShortcuts`composable을 사용하여 :kbd{value="/"} 키를 누를 때 Input에 초점을 맞춥니다.
::

### 마스크 사용

마스크에 대한 지원이 내장되어 있지는 않지만 [maska](https://github.com/beholdr/maska)와 같은 라이브러리를 사용하여 입력을 마스킹할 수 있습니다.

::component-example
---
이름: "input-mask-example"
---
::

###  부동 레이블 있음

`#default`slot을 사용하여 입력에 부동 레이블을 추가할 수 있습니다.

::component-example
---
name: 'input-floating-label-example' 입력-floating-label-example'
---
::

###  내에서 FormField

[FormField](/docs/components/form-field) 구성 요소 내에서 입력을 사용하여 레이블, 도움말 텍스트, 필수 표시기 등을 표시할 수 있습니다.

::component-example
---
name: 'input-form-field-example' 입력폼-필드-예제
---
::

::tip{to="/docs/components/form"}
또한 **Form** 구성 요소 내에서 사용할 때 유효성 검사 및 오류 처리를 제공합니다.
::

### within a fieldGroup 필드 그룹 내에서

[FieldGroup](/docs/components/field-group) 컴포넌트 내에서 입력을 사용하여 여러 요소를 함께 그룹화할 수 있습니다.

::component-example
---
name: 'input-field-group-example' 입력필드-그룹-예제
---
::

###  전화번호 입력으로

[FieldGroup](/docs/components/field-group) 구성 요소와 함께 [SelectMenu](/docs/components/select-menu) 내에서 입력을 사용하여 국가 코드 선택으로 전화 번호 입력을 만들 수 있습니다.

::component-example
---
축소: true
name: 'input-phone-number-example' 입력 전화 번호-예
---
::

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<input>`HTML 속성을 지원합니다.
::

###  슬롯

:구성요소 - 슬롯

###  에미츠

:구성요소 - 방사

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
