---
title: InputNumber 입력
description: 사용자 정의할 수 있는 범위의 숫자 값에 대한 입력입니다.
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

## Usage

`v-model` 지시문을 사용하여 InputNumber 값을 제어합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
---
::

상태를 제어할 필요가 없을 때 `default-value` prop을 사용하여 초기 값을 설정합니다.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 5
---
::

::note
이 구성 요소는 [`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html) 패키지를 사용하여 로케일 및 번호 매기기 시스템에서 숫자 서식 지정 및 구문 분석을 위한 유틸리티를 제공합니다.
::

### 최소/최대 값

`min` 및 `max` props를 사용하여 InputNumber의 최소값과 최대값을 설정합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  min: 0
  max: 10
---
::

### Step 의 경우

`step` prop 를 사용하여 InputNumber 의 step 값을 설정합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  step: 2
---
::

### 방향 지정

`orientation` prop 를 사용하여 InputNumber 의 방향을 변경합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  orientation: vertical
---
::

### 자리표시자

`placeholder` Prop을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
props:
  placeholder: 'Enter a number'
---
::

### Color 이미지

InputNumber에 초점을 맞출 때 `color` prop을 사용하여 링 색상을 변경합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  color: neutral
  highlight: true
---
::

### 변형

`variant` prop 를 사용하여 InputNumber 의 변형을 변경합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  variant: subtle
  color: neutral
  highlight: false
---
::

### Size

`size` prop 를 사용하여 InputNumber 의 크기를 변경합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  size: xl
---
::

### 비활성 화 됨

`disabled` prop 을 사용하여 InputNumber 를 비활성화합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  disabled: true
---
::

### 증가/감소

`increment` 및 `decrement` 소품을 사용하여 [Button](/docs/components/buttonxph17x 소품을 사용하여 증가 및 감소 버튼을 사용자 정의합니다. 기본값은 `{ variant: 'link' }`{lang="ts-type"}입니다.

::component-code
---
prettier: true
ignore:
  - modelValue
  - increment.size
  - increment.color
  - increment.variant
  - decrement.size
  - decrement.color
  - decrement.variant
external:
  - modelValue
props:
  modelValue: 5
  increment:
    color: neutral
    variant: solid
    size: xs
  decrement:
    color: neutral
    variant: solid
    size: xs
---
::

### 증분/감소 아이콘

`increment-icon` 및 `decrement-icon` 소품을 사용하여 [Icon](/docs/components/icon) 단추를 사용자 정의합니다. 기본값은 `i-lucide-plus`/`i-lucide-minus`입니다.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 5
  incrementIcon: 'i-lucide-arrow-right'
  decrementIcon: 'i-lucide-arrow-left'
---
::

## examples 예제

### 십진수 형식 사용

`format-options` prop을 사용하여 값 형식을 사용자 정의합니다.

::component-example
---
name: 'input-number-decimal-example'
---
::

### 백분율 형식 포함

`format-options` prop을 `style: 'percent'`와 함께 사용하여 값 형식을 사용자 정의합니다.

::component-example
---
name: 'input-number-percentage-example'
---
::

### 통화 형식 사용

`format-options` prop을 `style: 'currency'`와 함께 사용하여 값 형식을 사용자 정의합니다.

::component-example
---
name: 'input-number-currency-example'
---
::

### without 버튼

`increment` 및 `decrement` 소품을 사용하여 버튼의 가시성을 제어할 수 있습니다.

::component-example
---
name: 'input-number-without-buttons-example'
---
::

### within a FormField 형식 안에서

[FormField](/docs/components/form-field) 구성 요소 내에서 InputNumber를 사용하여 레이블, 도움말 텍스트, 필수 표시기 등을 표시할 수 있습니다.

::component-example
---
name: 'input-number-form-field-example'
---
::

### With 슬롯 사용

`#increment` 및 `#decrement` 슬롯을 사용하여 단추를 사용자 정의합니다.

::component-example
---
name: 'input-number-slots-example'
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

### exose 소개

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|

## 테마

:component-theme

## 변경 로그

:component-changelog
