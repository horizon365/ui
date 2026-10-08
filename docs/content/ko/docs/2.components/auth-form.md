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

##  사용

[Form](/docs/components/form) 구성 요소 위에 내장되어 있으며 `AuthForm` 구성 요소는 페이지에서 사용하거나 [Page Card](/docs/components/page-cardPH09@@ 로 포장할 수 있습니다.

::component-example
---
이름: 'auth-form-example'
축소: true
---
::

###  필드

양식은 `fields`prop을 기반으로 자체적으로 구성되며 상태는 내부적으로 처리됩니다.

`fields`prop을 다음 속성을 가진 객체의 배열로 사용합니다.

- `name: string`{lang="ts-type"}
-  @ `type: 'checkbox' | 'select' | 'otp' | 'InputHTMLAttributes['type']'` @ @ {lang="ts-type"} @

각 필드에는 입력 구성요소와 적용되는 추가 소품을 결정하는 `type` 속성이 포함되어야 합니다.`checkbox`필드 사용[Checkbox](/docs/components/checkbox#propsprops, )props, `select`fields use[SelectMenu](/docs/components/select-menu#props)props, props `otp`필드는 [PinInput](/docs/components/pin-input#props)props를 사용하고 다른 모든 유형은 [Input](/docs/components/input#props)props를 사용합니다.

또한 [FormField](/docs/components/form-field#props) 구성 요소의 속성을 각 필드에 전달할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  -  필드
  -  클래스
외부:
  -  필드
externalTypes:
  -  AuthFormField []
소품 :
  필드 :
    -  이름: 'email'
      유형: 'email'
      사진: "Email"
      자리 표시자: "Enter your email"
      required: true
    - 이름: 'password'
      type : 'password'
      레이블: "Password"
      자리 표시자: "Enter your password"
      required: true
    - 이름: '국가'
      타입: 'select'
      사진: "Country "
      위치 표시자: '국가 선택'
      프로젝트:
        - label: '미국'
          value: '우리'
        - label: '프랑스'
          값: 'fr'
        - label: '영국'
          값: "uk"
        - label: '호주'
          값: "au"
    - 이름: 'otp'
      타입 : 'otp'
      레이블: OTP
      길이: 6
      자리 표시자: '○'
    - 이름: '기억해'
      type : 체크박스
      사진: "Remember Me"
      설명: "30일 동안 로그인합니다."
  클래스: 'max-w-sm'
---
::

###  제목

`title`prop을 사용하여 양식의 제목을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  필드
  -  클래스
외부:
  -  필드
externalTypes:
  -  AuthFormField []
소품 :
  제목: Login
  필드 :
    -  이름: 'email'
      문자: 문자
      사진: "Email"
    - 이름: 'password'
      type : 'password'
      레이블: "Password"
  클래스: 'max-w-md'
---
::

###  설명

`description`prop을 사용하여 양식에 대한 설명을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  필드
  -  title
  -  클래스
외부:
  -  필드
externalTypes:
  -  AuthFormField []
소품 :
  제목: Login
  계정에 액세스하려면 자격 증명을 입력하십시오.Enter your credentials to access your account.
  필드 :
    -  이름: 'email'
      문자: 문자
      사진: "email"
    - 이름: 'password'
      type : 'password'
      태그: "Password"
  클래스: 'max-w-md'
---
::

###  아이콘

`icon`prop을 사용하여 양식의 아이콘을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  필드
  -  title
  -  설명
  -  클래스
외부:
  -  필드
externalTypes:
  -  AuthFormField []
소품 :
  제목: Login
  계정에 액세스하려면 자격 증명을 입력하십시오.Enter your credentials to access your account.
  아이콘: i-lucide-user
  필드 :
    -  이름: 'email'
      문자: 문자
      사진: "email"
    - 이름: 'password'
      type : 'password'
      태그: "Password"
  클래스: 'max-w-md'
---
::

###  공급자

`providers`prop을 사용하여 양식에 공급자를 추가하십시오.

당신은 [Button](/docs/components/button) 구성 요소에서 모든 속성을 전달할 수 있습니다 `variant`, `color`, `to` 등.

::component-code
---
상품명 : True
무시하기:
  -  필드
  -  title
  -  설명
  -  icon
  -  공급자
  -  headerAlign
  -  클래스
외부:
  -  공급자
  -  필드
externalTypes:
  - ButtonProps []
  -  AuthFormField []
소품 :
  사진: "Login"
  계정에 액세스하려면 자격 증명을 입력하십시오.Enter your credentials to access your account.
  아이콘: i-lucide-user
  공급 업체:
    - label: 'Google'
      아이콘 : 'i-simple-icons-google'
      색상 : Neutral
      variant: '미묘한'
    - label: 'GitHub'
      아이콘 : 'i-simple-icons-github'
      색상: Neutral
      variant: '미묘한'
  필드 :
    - 이름: 'email'
      문자: 문자
      사진: "email"
    - 이름: 'password'
      type : 'password'
      레이블: "Password"
  클래스: 'max-w-md'
---
::

###  분리자

`separator`prop을 사용하여 공급자와 필드 사이의 [Separator](/docs/components/separator)를 사용자 정의합니다. 기본값은 `or`입니다.

::component-code
---
상품명 : True
무시하기:
  -  필드
  -  title
  -  설명
  -  icon
  -  공급자
  - class 클래스
외부:
  -  공급자
  -  필드
externalTypes:
  -  ButtonProps []
  -  AuthFormField []
소품 :
  사진: "Login"
  계정에 액세스하려면 자격 증명을 입력하십시오.Enter your credentials to access your account.
  아이콘: i-lucide-user
  공급 업체:
    - label: 'Google'
      아이콘 : 'i-simple-icons-google'
      색상 : Neutral
      variant: '미묘한'
    - label: 'GitHub'
      아이콘 : 'i-simple-icons-github'
      색상 : Neutral
      variant: '미묘한'
  필드 :
    -  이름: 'email'
      문자: 문자
      사진: "email"
    - 이름: 'password'
      type : 'password'
      태그: "Password"
  구분 기호: '공급자'
  class: 'max-w-md' 의 약자
---
::

[Separator](/docs/components/separator#props) 구성 요소에서 임의의 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  -  필드
  -  title
  -  설명
  -  icon
  -  공급자
  -  클래스
외부:
  -  공급자
  -  필드
externalTypes:
  -  ButtonProps []
  -  AuthFormField []
소품 :
  제목: Login
  계정에 액세스하려면 자격 증명을 입력하십시오.Enter your credentials to access your account.
  아이콘: i-lucide-user
  공급 업체:
    - label: 'Google'
      아이콘 : 'i-simple-icons-google'
      색상: Neutral
      variant: '미묘한'
    - label: 'GitHub'
      아이콘 : 'i-simple-icons-github'
      색상 : Neutral
      variant: '미묘한'
  필드 :
    -  이름: 'email'
      문자: 문자
      사진: "email"
    - 이름: 'password'
      type : 'password'
      레이블: "Password"
  구분 기호:
    아이콘: i-lucide-user
  클래스: 'max-w-md'
---
::

###  제출

`submit`prop을 사용하여 양식의 제출 단추를 변경합니다.

당신은 [Button](/docs/components/button) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `variant`, `color`, `to`, 등.

::component-code
---
상품명 : True
무시하기:
  -  필드
  -  title
  -  설명
  -  icon
  -  공급자
  -  submit. label
  -  submit. color
  -  submit. variant
  -  클래스
외부:
  -  필드
externalTypes:
  -  AuthFormField []
소품 :
  제목: Login
  계정에 액세스하려면 자격 증명을 입력하십시오.Enter your credentials to access your account.
  아이콘: i-lucide-user
  필드 :
    -  이름: 'email'
      문자: 문자
      사진: "email"
    - 이름: 'password'
      type : 'password'
      태그: "Password"
  제출 하기:
    사진: "Submit"
    색상 : "error"
    variant: '미묘한'
  class: 'max-w-md' 의 약자
---
::

##  예제

###  한 페이지 내에서

`AuthForm` 구성 요소를 [PageCard](/docs/components/page-card) 구성 요소로 래핑하여 `login.vue` 페이지 내에 표시할 수 있습니다.

::component-example
---
이름: 'authe-form-page-example'
축소: true
---
::

##  API

###  Props

: 컴포넌트-소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
이 컴포넌트는 또한 모든 네이티브 `<form>`HTML 속성을 지원합니다.
::

###  슬롯

:구성요소 - 슬롯

### Emits @ 에미츠

:구성요소 - 방출

###  노출

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)를 사용하여 형식화된 구성 요소 인스턴스에 액세스할 수 있습니다. 예를 들어, "리셋" 양식과 같은 별도의 양식으로 다음을 수행할 수 있습니다.

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
| `formRef`{lang="ts-type"}| `Ref<HTMLFormElement \| null>`{lang="ts-type"}|
| `state`{lang="ts-type"}| `Reactive<FormStateType>`{lang="ts-type"}|

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
