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

## Usage

`v-model` 지시문을 사용하여 Input 값을 제어합니다.

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

### Type 형식

`type` prop을 사용하여 입력 유형을 변경합니다. 기본값은 `text`입니다.

일부 타입은 [Checkbox](/docs/components/checkbox), [Radio](), [InputNumber](/docs/components/input-number) 등과 같은 자체 컴포넌트에서 구현되었으며 다른 타입은 `file`와 같이 스타일이 지정되었습니다.

::component-code
---
items:
  type:
    - text
    - number
    - password
    - search
    - file
props:
  type: 'file'
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank"}
MDN Web Docs에서 사용 가능한 모든 유형을 확인할 수 있습니다.
::

### 자리 표시자

`placeholder` 소품을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
props:
  placeholder: 'Search...'
---
::

### Color

`color` Prop을 사용하여 입력에 초점을 맞출 때 링 색상을 변경합니다.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Search...'
---
::

::note
`highlight` prop은 초점 상태를 표시하기 위해 사용되며, 유효성 검사 오류가 발생할 때 내부적으로 사용됩니다.
::

### 변형

`variant` prop 을 사용하여 Input 의 변형을 변경합니다.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Search...'
---
::

### Size

`size` Prop을 사용하여 Input의 크기를 변경합니다.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Search...'
---
::

### Icon 이미지

`icon` prop을 사용하여 입력 안에 [Icon](/docs/components/icon)를 표시합니다.

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
---
::

`leading` 및 `trailing` 소품을 사용하여 아이콘 위치를 설정하거나 `leading-icon` 및 `trailing-icon` 소품을 사용하여 각 위치에 대해 다른 아이콘을 설정합니다.

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  trailingIcon: i-lucide-at-sign
  placeholder: 'Enter your email'
  size: md
---
::

### Avatar 이미지

`avatar` prop을 사용하여 입력 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

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
---
::

### loading 파일

`loading` prop을 사용하여 입력에 로드 아이콘을 표시합니다.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.loading` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.loading` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### 비활성 화 됨

`disabled` prop을 사용하여 Input을 비활성화합니다.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Search...'
---
::

## examples 예제

### Clear 버튼 사용

[Button](/docs/components/button)를 `#trailing` 슬롯 안에 넣어 입력을 지울 수 있습니다.

::component-example
---
name: 'input-clear-button-example'
---
::

### With 복사 버튼

`#trailing` 슬롯 안에 [Button](/docs/components/button)를 넣어 클립보드에 값을 복사 할 수 있습니다.

::component-example
---
name: 'input-copy-button-example'
---
::

### With 암호 토글

[Button](/docs/components/button)를 `#trailing` 슬롯 안에 넣어 암호 표시를 토글할 수 있습니다.

::component-example
---
name: 'input-password-toggle-example'
---
::

### With 암호 강도 표시기

[Progress](/docs/components/progress) 구성 요소를 사용하여 암호 강도 표시기를 표시할 수도 있습니다.

::component-example
---
collapse: true
name: 'input-password-strength-indicator-example'
---
::

###  문자 제한

`#trailing` 슬롯을 사용하여 입력에 문자 한계를 추가할 수 있습니다.

::component-example
---
name: 'input-character-limit-example'
---
::

### 키보드 단축키 사용

`#trailing` 슬롯 내에서 [Kbd](/docs/components/kbd) 구성 요소를 사용하여 입력에 키보드 바로 가기를 추가할 수 있습니다.

::component-example
---
name: 'input-kbd-example'
---
::

::note{to="/docs/composables/define-shortcuts"}
이 예제에서는 `defineShortcuts` 컴포지블을 사용하여 :kbd{value="/"} 키를 누를 때 Input 에 초점을 맞춥니다.
::

### with 마스크

마스크에 대한 기본 제공 지원은 없지만 [maska](https://github.com/beholdr/maska)와 같은 라이브러리를 사용하여 Input을 마스크 할 수 있습니다.

::component-example
---
name: 'input-mask-example'
---
::

### 부동 레이블 사용

`#default` 슬롯을 사용하여 입력 에 부동 레이블을 추가할 수 있습니다.

::component-example
---
name: 'input-floating-label-example'
---
::

### within a FormField 형식 안에서

[FormField](/docs/components/form-field) 구성 요소 내에서 입력을 사용하여 레이블, 도움말 텍스트, 필수 표시기 등을 표시할 수 있습니다.

::component-example
---
name: 'input-form-field-example'
---
::

::tip{to="/docs/components/form"}
또한 **Form** 구성 요소에서 사용할 때 유효성 검사 및 오류 처리를 제공합니다.
::

### Within a FieldGroup 필드 그룹 내에서

[FieldGroup](/docs/components/field-group) 구성 요소 내에서 Input을 사용하여 여러 요소를 그룹화할 수 있습니다.

::component-example
---
name: 'input-field-group-example'
---
::

### As 전화 번호 입력

[FieldGroup](/docs/components/field-group) 구성 요소 내에서 입력을 [SelectMenu](/docs/components/select-menu)와 함께 사용하여 국가 코드를 선택하여 전화 번호 입력을 만들 수 있습니다.

::component-example
---
collapse: true
name: 'input-phone-number-example'
---
::

## API

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<input>` HTML 속성도 지원합니다.
::

### 슬롯

:component-slots

### Emits

:component-emits

### exose 소개

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
