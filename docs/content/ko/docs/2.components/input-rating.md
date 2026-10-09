---
title: InputRating (입력 등급)
description: 사용자로부터 등급을 표시하고 수집하는 구성요소입니다.
category: form
keywords:
  - star rating
  - stars
links:
  - label: 등급 (Rating)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/rating
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputRating.vue
---

## Usage

`v-model` 지시어를 사용하여 InputRating 구성 요소의 등급 값을 제어합니다.

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
---
::

상태를 제어할 필요가 없을 때 `default-value` prop을 사용하여 초기값을 설정합니다.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 3
---
::

### Step (### Step)

`step` 소품을 사용하여 각 별의 세분화를 제어합니다. 절반 별 등급을 허용하려면 `0.5`로 설정합니다.

::component-code
---
ignore:
  - defaultValue
props:
  step: 0.5
  defaultValue: 3.5
---
::

### Length 길이

`length` 소품을 사용하여 별 수를 설정합니다. 기본값은 `5`입니다.

::component-code
---
ignore:
  - defaultValue
props:
  length: 10
  step: 0.5
  defaultValue: 7.5
---
::

### 지우기 가능

`clearable` 소품을 사용하여 사용자가 현재 선택한 값을 클릭하여 등급을 지울 수 있도록 합니다. 기본값은 `false`입니다.

::component-code
---
ignore:
  - defaultValue
props:
  clearable: true
  defaultValue: 3
---
::

### Hoverable 사용 가능

`hoverable` 소품을 사용하여 별 위에 마우스를 놓을 때 등급이 값을 미리 볼지 여부를 제어합니다. 기본값은 `false`입니다.

::component-code
---
ignore:
  - defaultValue
props:
  hoverable: true
  defaultValue: 3
---
::

### Icon 이미지

`icon` 소품을 사용하여 별에 사용할 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-star`입니다.

::component-code
---
ignore:
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: 4
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.star` 키 아래에서 `app.config.ts`의 기본 별 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.star` 키 아래에서 `vite.config.ts`의 기본 별 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### 빈 아이콘

`empty-icon` 소품을 사용하여 빈 별에 사용할 아이콘을 사용자 정의합니다. 제공되지 않으면 `icon`와 동일한 아이콘을 사용합니다.

::component-code
---
ignore:
  - defaultValue
props:
  emptyIcon: 'i-lucide-circle'
  icon: 'i-lucide-circle-check'
  defaultValue: 3
---
::

### Color 이미지

`color` 소품을 사용하여 채워진 별의 색상을 변경합니다.

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 4
---
::

### Size

`size` Prop을 사용하여 별의 크기를 변경합니다.

::component-code
---
ignore:
  - defaultValue
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  size: xl
  defaultValue: 4
---
::

### 방향 성

`orientation` 소품을 사용하여 등급 방향을 변경합니다. 기본값은 `horizontal`입니다.

::component-code
---
ignore:
  - defaultValue
props:
  orientation: vertical
  defaultValue: 4
---
::

### Disabled 사용 안 함

`disabled` 소품을 사용하여 InputRating 구성 요소를 비활성화합니다. 비활성화하면 구성 요소의 불투명도(75%)가 줄어들고 `not-allowed` 커서가 나타나 상호 작용이 아니라는 것을 나타냅니다.

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 3
---
::

### ReadOnly 읽기 전용

`readonly` 소품을 사용하면 사용자 상호 작용을 허용하지 않고 등급을 표시할 수 있습니다. `disabled`와 달리 정상적인 모양(전체 불투명도, 기본 커서)을 유지합니다. 변경할 수 없지만 정상적으로 보이는 등급을 표시하려는 경우에 사용합니다.

::component-code
---
ignore:
  - defaultValue
props:
  readonly: true
  defaultValue: 4.5
---
::

## API 파일

### Props (### Props)

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
