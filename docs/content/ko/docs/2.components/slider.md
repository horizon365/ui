---
description: 범위 내에서 숫자 값을 선택하는 입력입니다.
category: form
keywords:
  - range slider
links:
  - label: 슬라이더 슬라이더
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/slider
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slider.vue
---

##  사용

`v-model` 지시문을 사용하여 Slider 값을 제어합니다.

::component-code
---
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 50
---
::

상태를 제어할 필요가 없을 때는 `default-value`prop을 사용하여 초기값을 설정합니다.

::component-code
---
무시하기:
  - defaultValue - 
소품 :
  defaultValue : 50
---
::

::tip
`aria-label` 또는 `aria-labelledby` 를 사용하여 Slider 하나의 엄지 손가락 이름을 지정하면 `slider` 역할을 가진 요소인 엄지 손가락으로 전달됩니다.

여러 엄지 손가락의 엄지 손가락 Slider는 위치에 따라 이름이 지정되어 있으므로 두 엄지 손가락에 대해 @/`Maximum` 그리고 세 개 이상의 엄지 손가락에 대해 `Value n of m` 이 이름은 유지되며, `aria-label` 는 모든 엄지 손가락에 반복되는 대신 루트에 `group` 역할을 통해 Slider 전체를 명명합니다.
::

###  최소/최대

`min` 및 `max`props를 사용하여 Slider의 최소값과 최대값을 설정합니다. 기본값은 `0` 및 `100`입니다.

::component-code
---
무시하기:
  -  defaultValue
소품 :
  분 : 0
  최대 : 50
  defaultValue : 50
---
::

###  스텝

`step`prop 을 사용하여 Slider.기본값을 `1`로 설정합니다.

::component-code
---
무시하기:
  -  defaultValue
소품 :
  단계 : 10
  defaultValue: 50
---
::

###  다중

`v-model` 지시어 또는 `default-value`prop 값 배열을 사용하여 Slider 범위를 만듭니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  모델값: [25, 75]
---
::

`min-steps-between-thumbs`prop을 사용하여 엄지 손가락 사이의 최소 거리를 제한합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: [25, 50, 75]
  minStepsBetweenThumbs : 10 개의 글
---
::

###  방향

`orientation`prop을 사용하여 Slider.기본값을 `horizontal`로 변경합니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
  -  클래스
소품 :
  방향: 수직
  defaultValue: 50
  클래스: H-48
---
::

###  색상

`color`prop을 사용하여 Slider의 색상을 변경합니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  색상: 중립
  defaultValue: 50
---
::

###  크기

`size`prop 을 사용하여 Slider 의 크기를 변경합니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  크기: xl
  defaultValue: 50
---
::

###  툴 팁

`tooltip`prop을 사용하여 Slider 엄지손가락 주위에 [Tooltip](/docs/components/tooltip)을 표시합니다. 기본 동작에 대해서는 `true`로 설정하거나 객체를 전달하여 [Tool@PH0@PH05@ 구성 요소의 속성으로 사용자 정의할 수 있습니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
  -  툴 팁
소품 :
  defaultValue: 50
  툴 팁: true
---
::

###  비활성 화

`disabled`prop 을 사용하여 Slider 를 비활성화합니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  사용 안 함:true
  defaultValue : 50
---
::

###  반전

`inverted`prop을 사용하여 Slider를 시각적으로 반전시킵니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  반전: true
  defaultValue : 25
---
::

##  API

###  Props

:컴포넌트 - 소품

###  Emits

:구성요소 - 방출

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
