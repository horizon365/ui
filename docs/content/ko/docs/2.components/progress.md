---
description: 작업의 진행률을 표시하는 표시기입니다.
category: element
keywords:
  - progress bar
  - loading bar
  - meter
links:
  - label: 진행 상태
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/progress
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Progress.vue
---

##  사용

`v-model` 지시문을 사용하여 Progress 값을 제어합니다.

::component-code
---
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 50
---
::

::note
[`ProgressGroup`](/docs/components/progress-group) 구성요소를 사용하여 단일 막대를 하나의 세그먼트로 분할하여 합계를 합산합니다.
::

###  Max

`max`prop을 사용하여 Progress의 최대값을 설정합니다.

::component-code
---
외부:
  - modelValue - modelValue
소품 :
  ModelValue: 3 모델
  최대 : 4
---
::

문자열 배열과 함께 `max`prop을 사용하여 막대 아래에 활성 단계를 표시합니다. Progress의 최대값은 배열 길이입니다.

::component-code
---
상품명 : True
무시하기:
  -  max
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 3 모델
  max:
    -  '기다리는 중..'
    - 복제 중..'
    - 마이그레이션 중..'
    - 배포 중..'
    -  '완료!'
---
::

###  상태

`status`prop을 사용하여 막대 위에 현재 Progress 값을 표시합니다.

::component-code
---
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 50
  상태 : true
---
::

::tip
상태는 막대의 끝을 추적하며, 대신 전체 너비를 가로 질러 `:ui="{ status: 'w-full' }"`를 사용합니다.
::

### 확실하지 않음

`v-model`가 설정되지 않았거나 값이 `null`인 경우 진행률은 _indeterminate_가 됩니다. 진행률 표시줄은 `carousel`로 애니메이션되지만 [`animation`](#animationprop을 사용하여 변경할 수 있습니다.

::component-code
---
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: null
---
::

###  애니메이션

`animation`prop을 사용하여 진행률의 애니메이션을 반전 회전 목마, 스윙 바 또는 탄성 막대로 변경합니다. 기본값은 `carousel`입니다.

::component-code
---
소품 :
  애니메이션: 회전
---
::

::tip
사용자가 축소된 모션을 선호하면 애니메이션이 자동으로 비활성화되고 불확실한 바가 전체 폭 펄스로 대신 표시됩니다.
::

###  방향

`orientation`prop을 사용하여 Progress.기본값은 `horizontal`로 변경합니다.

::component-code
---
무시하기:
  -  클래스
소품 :
  방향: 세로
  클래스: H-48
---
::

###  색상

`color`prop을 사용하여 Progress의 색상을 변경합니다.

::component-code
---
소품 :
  색상: 중립
---
::

::tip
이 소품은 테마 외부의 팔레트에 대해 CSS 색상 값도 허용합니다.
::

###  크기

`size`prop을 사용하여 Progress 크기를 변경합니다.

::component-code
---
소품 :
  크기: xl
---
::

###  반전

`inverted`prop을 사용하여 Progress를 시각적으로 반전시킵니다.

::component-code
---
소품 :
  반전: true
  모델값: 25
---
::

##  API

### Props @ 프로

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

### Emits @ 에미츠

:구성요소 - 방출

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
