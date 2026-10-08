---
title: InputNumber 입력
description: 사용자 정의 가능한 범위를 가진 숫자 값에 대한 입력입니다.
category: form
keywords:
  - number field
  - spinbutton
  - counter
links:
  - label: NumberField (숫자필드)
    icon: i-custom-reka-ui
    to: https://www.reka-ui.com/docs/components/number-field
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputNumber.vue
---

##  사용

`v-model` 지시문을 사용하여 InputNumber 값을 제어합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 5 모델
---
::

상태를 제어할 필요가 없을 때는 `default-value`prop을 사용하여 초기값을 설정합니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  defaultValue : 5 개
---
::

::note
이 구성 요소는 [`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html) 패키지에 의존하며 로케일 및 번호 시스템에서 숫자 서식 지정 및 구문 분석을 위한 유틸리티를 제공합니다.
::

###  최소/최대

`min` 및 `max`props를 사용하여 InputNumber의 최소값과 최대값을 설정합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 5 모델
  분 : 0
  최대 : 10
---
::

###  스텝

`step`prop을 사용하여 InputNumber의 단계 값을 설정합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 5 모델
  단계: 2
---
::

###  방향

`orientation`prop 을 사용하여 InputNumber 의 방향을 변경합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 5 모델
  방향: 세로
---
::

### 자리 표시자

`placeholder`prop을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
소품 :
  자리 표시자: '숫자 입력'
---
::

###  색상

`color`prop을 사용하여 InputNumber에 초점을 맞출 때 링 색상을 변경합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 5 모델
  색상: 중립
  강조 표시: true
---
::

###  변형

`variant`prop 을 사용하여 InputNumber 의 변형을 변경합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 5 모델
  변형: 미묘한
  색상: 중립
  강조 표시:거짓
---
::

###  크기

`size`prop 을 사용하여 InputNumber 의 크기를 변경합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 5 모델
  크기: xl
---
::

###  비활성 화

`disabled`prop 을 사용하여 InputNumber 를 비활성화합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 5 모델
  사용 안 함:true
---
::

###  증가/감소

`increment` 및 `decrement`props를 사용하여 임의의 [Button](/docs/components/button)props를 사용하여 증가 및 감소 버튼을 사용자 정의합니다. 기본값은`{ variant: 'link' }`{lang="ts-type"}입니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
  -  increment. size
  -  increment. color
  -  increment. variant
  -  decrement. size
  -  decrement. color
  - decrement.variant @PHP057@@decrement.variant
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 5 모델
  증분:
    색상: 중립
    변형: 본체
    크기: xs
  감소 :
    색상: 중립
    변형: 본체
    크기: xs
---
::

### 증가/감소 아이콘

`increment-icon` 및 `decrement-icon`props를 사용하여 [Icon](/docs/components/icon) 기본값은 `i-lucide-plus``i-lucide-minus`입니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 5 모델
  incrementIcon: 'i-lucide-arrow-right'
  decrementIcon: 'i-lucide-arrow-left' (i-lucide-arrow-left) - ' ( ) 'i-lucide-arrow-left ' ( ) ' ' ' '
---
::

##  예제

###  10진수 형식

`format-options`prop을 사용하여 값 형식을 사용자 정의합니다.

::component-example
---
name: 'input-number-decimal-example' 입력번호-소수-예제
---
::

### 백분율 형식으로

`format-options`prop을 `style: 'percent'`와 함께 사용하여 값 형식을 사용자 정의합니다.

::component-example
---
name: 'input-number-percentage-example' 입력번호-백분율-예
---
::

### 통화 형식 사용

`format-options`prop을 `style: 'currency'`와 함께 사용하여 값 형식을 사용자 정의합니다.

::component-example
---
name: 'input-number-currency-example' 입력번호-현재 예제
---
::

### 버튼 없음

`increment` 및 `decrement`props를 사용하여 버튼의 가시성을 제어할 수 있습니다.

::component-example
---
이름: 'input-number-with-buttons-example' 입력번호-with-buttons-example'
---
::

###  내에서 FormField

[FormField](/docs/components/form-field) 구성 요소 내에서 InputNumber를 사용하여 레이블, 도움말 텍스트, 필수 표시기 등을 표시할 수 있습니다.

::component-example
---
name: 'input-number-form-field-example' 입력번호-양식-필드-예제
---
::

###  슬롯 포함

`#increment` 및 `#decrement` 슬롯을 사용하여 버튼을 사용자 정의합니다.

::component-example
---
이름: 'input-number-slots-example'
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

###  Emits

:구성요소 - 방사

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
