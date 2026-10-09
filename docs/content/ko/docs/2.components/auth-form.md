---
title: AuthForm 작성
description: '로그인, 등록 또는 비밀번호 재설정 양식을 만들기 위한 사용자 정의 양식입니다.'
category: page
links:
  - label: 양식 (Form)
    to: /docs/components/form
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AuthForm.vue
---

## Usage

[Form](/docs/components/form) 구성 요소 위에 구축 된 `AuthForm` 구성 요소는 페이지에서 사용하거나 [PageCard](xph08x)로 래핑 할 수 있습니다.

::component-example
---
name: 'auth-form-example'
collapse: true
---
::

### 필드

폼은 `fields` prop을 기반으로 자체 구성되며 상태는 내부적으로 처리됩니다.

`fields` Prop을 다음 속성을 가진 오브젝트 배열로 사용합니다.

- `name: string`{lang="ts-type"} Xph017x`name: string`
- `type: 'checkbox' | 'select' | 'otp' | 'InputHTMLAttributes['type']'`{lang="ts-type"}

각 필드에는 입력 구성요소와 적용되는 추가 소품을 결정하는 `type` 속성이 포함되어야 합니다. `checkbox` 필드는 [Checkbox](/docs/components/checkbox#props) props를 사용하고, `select` 필드는 [SelectMenu](/docs/components/select-menu#props) props를 사용하고, `otp` 필드는 [PinInput](/docs/components/pin-input#props/docs/components/pin-input#props, x) props를 사용합니다. 그리고 다른 모든 타입은 [Input](/docs/components/input#props) props를 사용합니다.

또한 [FormField](/docs/components/form-field#props) 구성 요소의 모든 속성을 각 필드로 전달할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - fields
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  fields:
    - name: 'email'
      type: 'email'
      label: 'Email'
      placeholder: 'Enter your email'
      required: true
    - name: 'password'
      type: 'password'
      label: 'Password'
      placeholder: 'Enter your password'
      required: true
    - name: 'country'
      type: 'select'
      label: 'Country'
      placeholder: 'Select country'
      items:
        - label: 'United States'
          value: 'us'
        - label: 'France'
          value: 'fr'
        - label: 'United Kingdom'
          value: 'uk'
        - label: 'Australia'
          value: 'au'
    - name: 'otp'
      type: 'otp'
      label: 'OTP'
      length: 6
      placeholder: '○'
    - name: 'remember'
      type: 'checkbox'
      label: 'Remember me'
      description: 'You will be logged in for 30 days.'
  class: 'max-w-sm'
---
::

### Title 파일

`title` prop 을 사용하여 Form 의 제목을 설정합니다.

::component-code
---
prettier: true
ignore:
  - fields
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  title: 'Login'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  class: 'max-w-md'
---
::

### 설명

`description` prop을 사용하여 양식에 대한 설명을 설정합니다.

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  class: 'max-w-md'
---
::

### Icon

`icon` prop을 사용하여 form의 아이콘을 설정합니다.

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  class: 'max-w-md'
---
::

### 공급자

`providers` prop를 사용하여 양식에 공급자를 추가합니다.

[Button](/docs/components/button) 구성 요소에서 `variant`, `color`, `to` 등과 같은 속성을 전달할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - icon
  - providers
  - headerAlign
  - class
external:
  - providers
  - fields
externalTypes:
  - ButtonProps[]
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  providers:
    - label: 'Google'
      icon: 'i-simple-icons-google'
      color: 'neutral'
      variant: 'subtle'
    - label: 'GitHub'
      icon: 'i-simple-icons-github'
      color: 'neutral'
      variant: 'subtle'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  class: 'max-w-md'
---
::

### Separator 문자 입력

`separator` Prop을 사용하여 공급자와 필드 간에 [Separator](/docs/components/separator)를 사용자 정의합니다. 기본값은 `or`입니다.

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - icon
  - providers
  - class
external:
  - providers
  - fields
externalTypes:
  - ButtonProps[]
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  providers:
    - label: 'Google'
      icon: 'i-simple-icons-google'
      color: 'neutral'
      variant: 'subtle'
    - label: 'GitHub'
      icon: 'i-simple-icons-github'
      color: 'neutral'
      variant: 'subtle'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  separator: 'Providers'
  class: 'max-w-md'
---
::

[Separator](/docs/components/separator#props) 구성 요소의 속성을 전달하여 사용자 정의할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - icon
  - providers
  - class
external:
  - providers
  - fields
externalTypes:
  - ButtonProps[]
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  providers:
    - label: 'Google'
      icon: 'i-simple-icons-google'
      color: 'neutral'
      variant: 'subtle'
    - label: 'GitHub'
      icon: 'i-simple-icons-github'
      color: 'neutral'
      variant: 'subtle'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  separator:
    icon: 'i-lucide-user'
  class: 'max-w-md'
---
::

### Submit 제출

`submit` prop을 사용하여 양식의 제출 버튼을 변경합니다.

[Button](/docs/components/button) 구성 요소에서 `variant`, `color`, `to` 등의 속성을 전달할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - icon
  - providers
  - submit.label
  - submit.color
  - submit.variant
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  submit:
    label: 'Submit'
    color: 'error'
    variant: 'subtle'
  class: 'max-w-md'
---
::

## examples 예제

### 페이지 내에서

`AuthForm` 구성 요소를 [PageCard](/docs/components/page-card) 구성 요소로 래핑하여 `login.vue` 페이지 내에 표시할 수 있습니다.

::component-example
---
name: 'auth-form-page-example'
collapse: true
---
::

## API

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<form>` HTML 속성을 지원합니다.
::

### 슬롯

:component-slots

### Emits

:component-emits

### exose 소개

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)를 사용하여 형식화된 구성 요소 인스턴스(formRef 및 상태 노출)에 액세스할 수 있습니다. 예를 들어, 별도의 양식(예: "reset" 양식)에서 다음을 수행할 수 있습니다.

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

이렇게 하면 다음과 같은 (노출) 속성에 액세스할 수 있습니다.This gives you access to the following (exposed) properties:

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `formRef`{lang="ts-type"}| `Ref<HTMLFormElement \| null>`{lang="ts-type"} (`Ref<HTMLFormElement \| null>`{lang="ts-type"})|
| `state`{lang="ts-type"} 파일| `Reactive<FormStateType>`{lang="ts-type"}|

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
