---
title: PinInput (핀입력)
description: 핀을 입력할 입력 요소입니다.
category: form
keywords:
  - otp
  - one-time password
  - verification code
links:
  - label: PinInput (핀입력)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pin-input
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PinInput.vue
---

## Usage

`v-model` 지시문을 사용하여 PinInput 값을 제어합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: []
---
::

상태를 제어할 필요가 없을 때 `default-value` prop을 사용하여 초기 값을 설정합니다.

::component-code
---
prettier: true
ignore:
  - defaultValue
props:
  defaultValue: ['1','2','3']
---
::

### Type 형식

`type` prop을 사용하여 입력 유형을 변경합니다. 기본값은 `text`입니다.

::component-code
---
items:
  type:
    - text
    - number
props:
  type: 'number'
---
::

::note
`type`가 `number`로 설정되면 숫자 문자만 허용됩니다.
::

### Mask

`mask` prop을 사용하여 입력을 암호로 처리합니다.

::component-code
---
prettier: true
ignore:
  - placeholder
  - defaultValue
props:
  mask: true
  defaultValue: ['1','2','3','4','5']
---
::

### OTP 키

`otp` 소품을 사용하여 일회용 비밀번호 기능을 활성화합니다. 이 기능을 활성화하면 모바일 장치가 SMS 메시지 또는 클립보드 내용에서 OTP 코드를 자동으로 감지하고 자동 완성 기능을 지원합니다.

::component-code
---
props:
  otp: true
---
::

### 자리표시자

`placeholder` Prop을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
props:
  placeholder: '○'
---
::

### 길이

`length` prop을 사용하여 입력 양을 변경합니다.

::component-code
---
ignore:
  - placeholder
props:
  length: 6
  placeholder: '○'
---
::

### Separator: badge{label="4.9+" class="align-text-top"}

`separator` prop을 사용하여 입력 그룹 사이에 구분 기호를 삽입합니다. N번째 입력 후에 하나씩 삽입하려면 숫자를 전달합니다.

::component-code
---
ignore:
  - placeholder
props:
  length: 6
  separator: 3
  placeholder: '○'
---
::

또한 위치 배열을 전달하여 특정 입력 뒤에 구분 기호를 삽입할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - placeholder
  - length
  - separator
props:
  length: 7
  separator: [3, 4]
  placeholder: '○'
---
::

### Color 색상

PinInput에 초점을 맞출 때 `color` Prop을 사용하여 링 색상을 변경합니다.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: '○'
---
::

::note
`highlight` prop은 초점 상태를 표시하기 위해 사용되며, 유효성 검사 오류가 발생할 때 내부적으로 사용됩니다.
::

### 변형

`variant` prop을 사용하여 PinInput의 변형을 변경합니다.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: '○'
---
::

### Size

`size` prop을 사용하여 PinInput의 크기를 변경합니다.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: '○'
---
::

### 비활성 화

`disabled` prop을 사용하여 PinInput을 비활성화합니다.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: '○'
---
::

## examples 예제

### Separator 슬롯 포함: badge{label="4.9+" class="align-text-top"}

`separator` 슬롯을 사용하여 구분 기호 모양을 사용자 정의합니다.

::component-example
---
name: 'pin-input-separator-slot-example'
---
::

## API 파일

### Props (### Props)

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

### exose 소개

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `inputsRef`{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`{lang="ts-type"}|

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
