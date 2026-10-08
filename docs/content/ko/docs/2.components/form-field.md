---
title: FormField 형식필드
description: 유효성 검사 및 오류 처리를 제공하는 양식 요소에 대한 래퍼입니다.
category: form
keywords:
  - field wrapper
  - form label
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FormField.vue
---

##  사용

폼 구성 요소를 FormField로 감싸고 [Form](/docs/components/form)에 사용하며 유효성 검사 및 오류 처리를 제공합니다.

###  레이블

`label`prop을 사용하여 양식 컨트롤에 대한 레이블을 설정합니다.

::component-code
---
상품명 : True
소품 :
  label: 이메일
슬롯 :
  기본값 :|

    <UInput placeholder="Enter your email" />
---

:u-input {placeholder="Enter your email"}
::

::note
레이블 `for` 속성 및 양식 컨트롤은 제공되지 않은 경우 고유한 `id`와 연결됩니다.
::

`required`prop을 사용할 때 레이블 옆에 별표가 추가됩니다.

::component-code
---
상품명 : True
무시하기:
  -  label
소품 :
  label: 이메일
  required: true
슬롯 :
  기본값 :|

    <UInput placeholder="Enter your email" />
---

: u-input {placeholder="Enter your email"}
::

###  설명

`description`prop을 사용하여 레이블 아래에 추가 정보를 제공합니다.

::component-code
---
상품명 : True
무시하기:
  -  label
소품 :
  레이블: 이메일
  설명: 우리는 결코 다른 사람과 귀하의 이메일을 공유하지 않습니다.
슬롯 :
  기본값 :|

    <UInput placeholder="Enter your email" class="w-full" />
---

: u-input {placeholder="Enter your email" class="w-full"}
::

###  힌트

`hint`prop 을 사용하여 레이블 옆에 힌트 메시지를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  label
소품 :
  레이블: 이메일
  힌트: 선택 사항
슬롯 :
  기본값 :|

    <UInput placeholder="Enter your email" />
---

: u-input {placeholder="Enter your email"}
::

###  도움 말

`help`prop을 사용하여 양식 컨트롤 아래에 도움말 메시지를 표시합니다. `error`prop과 함께 사용할 경우 `error`prop이 우선합니다.

::component-code
---
상품명 : True
무시하기:
  -  label
소품 :
  label: 이메일
  도움말: 올바른 이메일 주소를 입력하십시오.
슬롯 :
  기본값 :|

    <UInput placeholder="Enter your email" class="w-full" />
---

: u-input {placeholder="Enter your email" class="w-full"}
::

###  오류

`error`prop을 사용하여 양식 컨트롤 아래에 오류 메시지를 표시합니다. `help`prop과 함께 사용할 경우 `error`prop이 우선합니다.

[Form](/docs/components/form) 내부에서 사용하면 유효성 검사 오류가 발생할 때 자동으로 설정됩니다.

::component-code
---
상품명 : True
무시하기:
  -  label
소품 :
  label: 이메일
  오류: 올바른 이메일 주소를 입력하십시오.
슬롯 :
  기본 값:|

    <UInput placeholder="Enter your email" class="w-full" />
---

: u-input {placeholder="Enter your email" class="w-full"}
::

::tip{to="/docs/getting-started/theme/design-system#color-system"}
양식 컨트롤에서 `color`를 `error`로 설정합니다. `app.config.ts`에서 전체적으로 변경할 수 있습니다.
::

### 오류 패턴

`error-pattern`prop을 사용하여 양식 오류를 정규 표현식과 일치시킵니다. 이는 특히 [InputTags](/docs/components/input-tags)와 같은 배열 값을 가진 구성 요소에 관련이 있습니다. 여기서 오류는 이름에 배열 인덱스를 포함합니다(예: `tags.0`).

::tip{to="/docs/components/form#error-reporting"}
양식에서 `error-pattern`를 사용하는 예를 참조하십시오.
::

###  크기

`size`prop을 사용하여 FormField의 크기를 변경하면 `size`가 양식 컨트롤에 프록시됩니다.

::component-code
---
상품명 : True
무시하기:
  -  label
  -  설명
  -  힌트
  -  도움 말
소품 :
  label: 이메일
  설명: 우리는 결코 다른 사람과 귀하의 이메일을 공유하지 않습니다.
  힌트: 선택 사항
  도움말: 올바른 이메일 주소를 입력하십시오.
  크기: xl
슬롯 :
  기본값 :|

    <UInput placeholder="Enter your email" class="w-full" />
---

: u-input {placeholder="Enter your email" class="w-full"}
::

### 방향: badge{label="4.3+" class="align-text-top"}

`orientation`prop을 사용하여 FormField.Defaults의 레이아웃을 `vertical`로 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  label
  -  클래스
소품 :
  방향: 수평
  레이블: 이메일
  도움말: 올바른 이메일 주소를 입력하십시오.
  클래스: W-72
슬롯 :
  기본값 :|

    <UInput placeholder="Enter your email" class="w-full" />
---

: u-input {placeholder="Enter your email" class="w-full"}
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
