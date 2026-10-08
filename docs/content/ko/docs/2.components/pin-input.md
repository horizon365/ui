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

##  사용

`v-model` 지시문을 사용하여 PinInput 값을 제어합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: []
---
::

상태를 제어할 필요가 없을 때는 `default-value`prop을 사용하여 초기값을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  - defaultValue - defaultValue
소품 :
  defaultValue: ['1', '2', '3']
---
::

###  유형

입력 유형을 변경하려면 `type`prop을 사용합니다. 기본값은 `text`입니다.

::component-code
---
프로젝트:
  문자:
    -  텍스트
    -  번호
소품 :
  type: '숫자'
---
::

::note
`type`가 `number`로 설정된 경우 숫자만 허용됩니다.
::

###  마스크

`mask`prop을 사용하여 입력을 암호처럼 처리합니다.

::component-code
---
상품명 : True
무시하기:
  - 자리 표시자
  - defaultValue - defaultValue
소품 :
  마스크: true
  defaultValue: ['1', '2', '3', '4', '5']
---
::

###  OTP

`otp`prop을 사용하여 일회성 암호 기능을 활성화합니다. 활성화되면 모바일 장치가 SMS 메시지 또는 클립보드 내용에서 OTP 코드를 자동으로 감지하고 자동 완성 지원을 통해 채울 수 있습니다.

::component-code
---
소품 :
  otp: true 입니다.
---
::

### 자리 표시자

`placeholder`prop을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
소품 :
  자리 표시자: '○○'
---
::

###  길이

`length`prop 을 사용하여 입력 양을 변경합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  길이: 6
  자리 표시자: '○○'
---
::

###  구분 자: badge {label="4.9+" class="align-text-top"}

`separator`prop을 사용하여 입력 그룹 사이에 구분 기호를 삽입합니다. N번째 입력 후에 하나씩 삽입하려면 숫자를 전달합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  길이: 6
  구분 기호: 3
  자리 표시자: '○○'
---
::

위치 배열을 전달하여 특정 입력 뒤에 구분 기호를 삽입할 수도 있습니다.

::component-code
---
상품명 : True
무시하기:
  - 자리 표시자
  -  길이
  -  구분 기호
소품 :
  길이: 7
  구분 기호: [3, 4]
  자리 표시자: '○○'
---
::

###  색상

`color`prop을 사용하여 PinInput에 초점을 맞출 때 링 색상을 변경합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  색상: 중립
  강조 표시:true
  자리 표시자: '○○'
---
::

::note
`highlight`prop은 초점 상태를 보여주기 위해 사용되며, 검증 오류가 발생할 때 내부적으로 사용됩니다.
::

###  Variant

`variant`prop 을 사용하여 PinInput 의 변형을 변경합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  색상: 중립
  변형: 미묘함
  강조 표시:거짓
  자리 표시자: '○○'
---
::

###  크기

`size`prop 을 사용하여 PinInput 의 크기를 변경합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  크기: xl
  자리 표시자: '○○'
---
::

###  비활성 화

`disabled`prop 을 사용하여 PinInput 을 비활성화합니다.

::component-code
---
무시하기:
  - 자리 표시자
소품 :
  사용 안 함:true
  자리 표시자: '○○'
---
::

##  예제

###  분리 슬롯 사용: badge{label="4.9+" class="align-text-top"}

`separator` 슬롯을 사용하여 구분자 모양을 사용자 정의합니다.

::component-example
---
이름: 'pin-input-separator-slot-example'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

### Emits @ 에미츠

:구성요소 - 방사

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `inputsRef`{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`{lang="ts-type"}|

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
