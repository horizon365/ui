---
description: 작업의 진행률을 보여주는 표시기입니다.
category: element
keywords:
  - progress bar
  - loading bar
  - meter
links:
  - label: 진행 상황
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/progress
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Progress.vue
---

## Usage

`v-model` 지시문을 사용하여 Progress 값을 제어합니다.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

::note
[`ProgressGroup`](/docs/components/progress-group) 구성 요소를 사용하여 단일 막대를 여러 세그먼트로 분할하여 합계를 얻을 수 있습니다.
::

### Max

`max` prop 를 사용하여 Progress 의 최대값을 설정합니다.

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
  max: 4
---
::

문자열 배열과 함께 `max` Prop을 사용하여 막대 아래에 활성 단계를 표시합니다. Progress의 최대값은 배열 길이입니다.

::component-code
---
prettier: true
ignore:
  - max
external:
  - modelValue
props:
  modelValue: 3
  max:
    - 'Waiting...'
    - 'Cloning...'
    - 'Migrating...'
    - 'Deploying...'
    - 'Done!'
---
::

### 상태

`status` prop을 사용하여 막대 위에 현재 Progress 값을 표시합니다.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
  status: true
---
::

::tip
상태는 막대의 끝을 추적하며, 대신 `:ui="{ status: 'w-full' }"`를 사용하여 전체 너비를 가로 질러 놓습니다.
::

### indeterminate 불확실성

`v-model`가 설정되지 않았거나 값이 `null`인 경우 Progress는 _indeterminate_가 됩니다. 진행률 막대는 `carousel`로 애니메이션되지만 [`animation`](#animation) prop를 사용하여 변경할 수 있습니다.

::component-code
---
external:
  - modelValue
props:
  modelValue: null
---
::

### Animation 이미지

`animation` 소품을 사용하여 Progress의 애니메이션을 반전 회전 목마, 스윙 바 또는 탄성 막대로 변경합니다. 기본값은 `carousel`입니다.

::component-code
---
props:
  animation: swing
---
::

::tip
사용자가 축소된 모션을 선호하면 애니메이션이 자동으로 비활성화되고 불확실한 막대가 전체 폭 펄스로 대신 표시됩니다.
::

### 방향

`orientation` prop을 사용하여 Progress의 방향을 변경합니다. 기본값은 `horizontal`입니다.

::component-code
---
ignore:
  - class
props:
  orientation: vertical
  class: 'h-48'
---
::

### Color 색상

`color` prop을 사용하여 Progress의 색상을 변경합니다.

::component-code
---
props:
  color: neutral
---
::

::tip
이 소품은 테마 외부의 팔레트에 대해 CSS 색상 값도 허용합니다.
::

### Size

`size` prop을 사용하여 Progress 크기를 변경합니다.

::component-code
---
props:
  size: xl
---
::

### 반전 됨

`inverted` prop을 사용하여 Progress를 시각적으로 반전시킵니다.

::component-code
---
props:
  inverted: true
  modelValue: 25
---
::

## API 파일

### Props 코드

:component-props

### 슬롯

:component-slots

### Emits 파일

:component-emits

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
