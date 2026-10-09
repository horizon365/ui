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

## Usage

`v-model` 지시어를 사용하여 Slider 값을 제어합니다.

::component-code
---
external:
  - modelValue
props:
  modelValue: 50
---
::

상태를 제어할 필요가 없을 때 `default-value` prop을 사용하여 초기값을 설정합니다.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 50
---
::

::tip
`aria-label` 또는 `aria-labelledby`를 사용하여 단일 엄지 손가락의 이름을 Slider로 지정하면 `slider` 역할이있는 요소 인 엄지 손가락으로 전달됩니다.

여러 엄지 손가락의 엄지 손가락 Slider는 위치에 따라 명명되어 구분할 수 있습니다. `Minimum`/`Maximum`는 두 엄지 손가락, `Value n of m`는 세 개 이상의 엄지 손가락을 의미합니다. 이러한 이름은 유지되며 `aria-label`는 모든 엄지 손가락에서 반복되는 대신 루트에서 `group` 역할을 통해 Slider를 전체적으로 이름 지정합니다.
::

### 최소/최대

`min` 및 `max` props를 사용하여 Slider.Defaults의 최소값과 최대값을 `0` 및 `100`로 설정합니다.

::component-code
---
ignore:
  - defaultValue
props:
  min: 0
  max: 50
  defaultValue: 50
---
::

### Step (### Step)

`step` prop을 사용하여 Slider.기본값은 `1`로 설정합니다.

::component-code
---
ignore:
  - defaultValue
props:
  step: 10
  defaultValue: 50
---
::

### Multiple 다중

`v-model` 지시어 또는 값 배열과 함께 `default-value` prop을 사용하여 범위 Slider를 만듭니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [25, 75]
---
::

`min-steps-between-thumbs` Prop을 사용하여 엄지손가락 사이의 최소 거리를 제한합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [25, 50, 75]
  minStepsBetweenThumbs: 10
---
::

### 방향 지정

`orientation` Prop을 사용하여 Slider.기본값은 `horizontal`입니다.

::component-code
---
ignore:
  - defaultValue
  - class
props:
  orientation: vertical
  defaultValue: 50
  class: 'h-48'
---
::

### Color 이미지

`color` Prop을 사용하여 Slider의 색상을 변경합니다.

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 50
---
::

### Size

`size` Prop를 사용하여 Slider의 크기를 변경합니다.

::component-code
---
ignore:
  - defaultValue
props:
  size: xl
  defaultValue: 50
---
::

### 도구 팁

`tooltip` 소품을 사용하여 Slider 엄지손가락 주위에 [Tooltip](/docs/components/tooltip)를 현재 값으로 표시합니다. 기본 동작을 위해 `true`로 설정하거나 객체를 전달하여 [Tooltip](/docs/components/tooltip#props) 구성 요소의 속성으로 사용자 정의할 수 있습니다.

::component-code
---
ignore:
  - defaultValue
  - tooltip
props:
  defaultValue: 50
  tooltip: true
---
::

### 비활성 화

`disabled` Prop을 사용하여 Slider를 비활성화합니다.

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 50
---
::

### 반전 됨

`inverted` Prop을 사용하여 Slider를 시각적으로 반전시킵니다.

::component-code
---
ignore:
  - defaultValue
props:
  inverted: true
  defaultValue: 25
---
::

## API

### Props (### Props)

:component-props

### Emits

:component-emits

## Theme 본문

:component-theme

## 변경 로그

:component-changelog
