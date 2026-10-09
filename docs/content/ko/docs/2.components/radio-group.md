---
title: 라디오그룹 RadioGroup
description: 목록에서 단일 옵션을 선택하는 라디오 단추 세트입니다.
category: form
keywords:
  - radio buttons
  - single choice
links:
  - label: 라디오그룹 RadioGroup
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/radio-group
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/RadioGroup.vue
---

## Usage

`v-model` 지시문을 사용하여 RadioGroup의 값을 제어하거나 `default-value` prop의 상태를 제어할 필요가 없을 때 초기 값을 설정합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
props:
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Items 이미지

`items` prop을 문자열 또는 숫자의 배열로 사용합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
props:
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

또한 다음 속성을 사용하여 객체 배열을 전달할 수 있습니다.

- `label?: string`{lang="ts-type"} - {lang="ts-type"}
- `description?: string`{lang="ts-type"}
- [`value?: string`{lang="ts-type"}](#value-key)
- `disabled?: boolean`{lang="ts-type"}의 발음을 - `disabled?: boolean`{lang="ts-type"}
- [`icon?: string`{lang="ts-type"}](#indicator)
- `class?: any`{lang="ts-type"}의 발음을 - `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, icon?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"} - {lang="ts-type"}

::component-code
---
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - RadioGroupItem[]
props:
  modelValue: 'system'
  items:
    - label: 'System'
      description: 'Matches your device settings.'
      value: 'system'
    - label: 'Light'
      description: 'Always uses the light theme.'
      value: 'light'
    - label: 'Dark'
      description: 'Always uses the dark theme.'
      value: 'dark'
---
::

::caution
객체를 사용할 때는 `v-model` 지시문 또는 `default-value` prop에서 객체의 `value` 속성을 참조해야 합니다.
::

### 값 키

`value-key` prop.Defaults 를 `value`로 사용하여 값을 설정하는 데 사용되는 속성을 변경할 수 있습니다.

::component-code
---
ignore:
  - modelValue
  - items
  - valueKey
external:
  - items
  - modelValue
externalTypes:
  - RadioGroupItem[]
props:
  modelValue: 'light'
  valueKey: 'id'
  items:
    - label: 'System'
      description: 'Matches your device settings.'
      id: 'system'
    - label: 'Light'
      description: 'Always uses the light theme.'
      id: 'light'
    - label: 'Dark'
      description: 'Always uses the dark theme.'
      id: 'dark'
---
::

### 범례

`legend` prop을 사용하여 RadioGroup의 범례를 설정합니다.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  legend: 'Theme'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Color 색상

`color` prop을 사용하여 RadioGroup의 색상을 변경합니다.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  color: neutral
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Variant 형식

`variant` prop을 사용하여 RadioGroup의 변형을 변경합니다.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  color: 'primary'
  variant: 'card'
  defaultValue: 'system'
  items:
    - label: 'System'
      value: 'system'
      description: 'Matches your device settings.'
    - label: 'Light'
      value: 'light'
      description: 'Always uses the light theme.'
    - label: 'Dark'
      value: 'dark'
      description: 'Always uses the dark theme.'
---
::

### 크기

`size` prop을 사용하여 RadioGroup 크기를 변경합니다.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  size: 'xl'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 방향

`orientation` Prop을 사용하여 RadioGroup의 방향을 변경합니다. 기본값은 `vertical`입니다.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  orientation: 'horizontal'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Indicator (### 표시기)

`indicator` 소품을 사용하여 위치를 변경하거나 지시자를 숨깁니다. 기본값은 `start`입니다.

::note
항목의 `icon`는 `indicator`가 레이블 위에 있는 경우에만 표시되는데, 라디오에는 표시기 내부에 아이콘이 없기 때문입니다.
::

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
items:
  indicator:
    - start
    - end
    - hidden
  variant:
    - list
    - card
    - table
props:
  indicator: 'hidden'
  orientation: 'horizontal'
  variant: 'table'
  defaultValue: 'System'
  items:
    - label: 'System'
      icon: 'i-lucide-monitor'
      value: 'System'
      class: 'w-20'
    - label: 'Light'
      icon: 'i-lucide-sun'
      value: 'Light'
      class: 'w-20'
    - label: 'Dark'
      icon: 'i-lucide-moon'
      value: 'Dark'
      class: 'w-20'
---
::

### 비활성 화

`disabled` prop를 사용하여 RadioGroup을 비활성화합니다.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  disabled: true
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
