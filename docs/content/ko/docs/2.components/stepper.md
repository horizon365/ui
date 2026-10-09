---
description: 다중 단계 프로세스를 통해 진행 상황을 나타내는 데 사용되는 단계 세트입니다.
category: navigation
keywords:
  - wizard
links:
  - label: 스텝퍼 (Stepper)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/stepper
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Stepper.vue
---

## Usage

Stepper 구성요소를 사용하여 스테퍼의 항목 목록을 표시합니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Items 이미지

`items` Prop을 다음 속성을 가진 오브젝트 배열로 사용합니다.

- `title?: string`{lang="ts-type"}
- `description?: AvatarProps`{lang="ts-type"} (- `description?: AvatarProps`{lang="ts-type"})
- `content?: string`{lang="ts-type"} - {lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"} (- `disabled?: boolean`{lang="ts-type"})
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"} (- `ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"})

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

::note
단계를 탐색하려면 항목을 클릭합니다.
::

### Color 이미지

`color` Prop을 사용하여 Stepper의 색상을 변경합니다.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  color: neutral
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Size 사용

`size` Prop을 사용하여 Stepper의 크기를 변경합니다.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  size: xl
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### 방향 성

`orientation` 소품을 사용하여 Stepper.기본값은 `horizontal`로 변경합니다.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  orientation: vertical
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Disabled 사용 안 함

`disabled` prop을 사용하여 단계 탐색을 비활성화합니다.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  disabled: true
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
---
::

::note{to="#with-controls"}
이 기능은 컨트롤을 사용하여 탐색을 강제로 수행하려는 경우에 유용합니다.
::

## examples 예제

### With 컨트롤

버튼을 사용하여 스텝퍼에 대한 추가 컨트롤을 추가할 수 있습니다.

:component-example{name="stepper-with-controls-example"}

### Control 활성화된 프로젝트

`default-value` prop 또는 `v-model` 지시어를 사용하여 활성 항목을 제어할 수 있습니다. `value`가 제공되지 않으면 기본적으로 인덱스로 설정됩니다.

:component-example{name="stepper-model-value-example"}

::tip
`value-key` prop을 사용하여 `v-model` 또는 `default-value`가 제공될 때 항목을 일치시키는 키를 변경합니다.
::

### With 컨텐츠 슬롯

`#content` 슬롯을 사용하여 각 항목의 컨텐츠를 사용자 정의합니다.

:component-example{name="stepper-content-slot-example"}

### 사용자 지정 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}`{lang="ts-type"} (- `#{{ item.slot }}`{lang="ts-type"})

:component-example{name="stepper-custom-slot-example"}

## API 파일

### Props (### Props)

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

### exose 소개

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)를 사용하여 유형이 지정된 구성 요소 인스턴스에 액세스할 수 있습니다.

```vue
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <UStepper ref="stepper" />
</template>
```

이렇게 하면 다음 항목에 액세스할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `next`{lang="ts-type"}| `() => void`{lang="ts-type"}|
| `prev`{lang="ts-type"} 파일| `() => void`{lang="ts-type"}|
| `hasNext`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|
| `hasPrev`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
