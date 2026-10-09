---
title: CheckboxGroup 체크박스 그룹
description: 리스트에서 여러 옵션을 선택하는 확인란 세트입니다.
category: form
keywords:
  - multi select
  - checklist
links:
  - label: CheckboxGroup 체크박스 그룹
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox#group-root
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CheckboxGroup.vue
---


## Usage

`v-model` 지시문을 사용하여 CheckboxGroup의 값을 제어하거나 `default-value` prop의 상태를 제어할 필요가 없을 때 초기 값을 설정합니다.

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
  modelValue:
    - 'System'
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
  modelValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

또한 다음 속성을 사용하여 객체 배열을 전달할 수 있습니다.

- `label?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"} (- `description?: string`{lang="ts-type"})
- [`value?: string`{lang="ts-type"}](#value-key)
- `disabled?: boolean`{lang="ts-type"}
- [`icon?: string`{lang="ts-type"}](#indicator)
- `class?: any`{lang="ts-type"} (- `class?: any`{lang="ts-type"})
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"} (- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"})

::component-code
---
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - CheckboxGroupItem[]
props:
  modelValue:
    - 'system'
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
객체를 사용할 때는 `v-model` 지시문이나 `default-value` prop에서 객체의 `value` 속성을 참조해야 합니다.
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
  - CheckboxGroupItem[]
props:
  modelValue:
    - 'light'
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

`legend` prop 를 사용하여 CheckboxGroup 의 범례를 설정합니다.

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
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Color 색상

`color` prop 를 사용하여 CheckboxGroup 의 색상을 변경합니다.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  color: neutral
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 변형

`variant` prop 를 사용하여 CheckboxGroup 의 변형을 변경합니다.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - CheckboxGroupItem[]
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  variant:
    - list
    - card
    - table
props:
  color: 'primary'
  variant: 'card'
  defaultValue:
    - 'system'
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

### Size

`size` prop 를 사용하여 CheckboxGroup 의 크기를 변경합니다.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
items:
  variant:
    - list
    - card
    - table
props:
  size: 'xl'
  variant: 'list'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### 방향

`orientation` prop을 사용하여 CheckboxGroup.기본값은 `vertical`로 변경합니다.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
items:
  variant:
    - list
    - card
    - table
props:
  orientation: 'horizontal'
  variant: 'list'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Indicator (### 표시기)

`indicator` 소품을 사용하여 위치를 변경하거나 지시자를 숨깁니다. 기본값은 `start`입니다.

::note
항목의 `icon`는 표시기가 보이는 동안 확인 표시를 대체하고 `hidden`일 때는 레이블 위에 표시됩니다.
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
  - CheckboxGroupItem[]
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
  defaultValue:
    - 'System'
  items:
    - label: 'System'
      icon: 'i-lucide-monitor'
      value: 'System'
      class: 'w-20'
    - label: 'Light'
      icon: 'i-lucide-sun'
      class: 'w-20'
      value: 'Light'
    - label: 'Dark'
      icon: 'i-lucide-moon'
      class: 'w-20'
      value: 'Dark'
---
::

### 비활성 화 됨

`disabled` prop 를 사용하여 CheckboxGroup 을 비활성화합니다.

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
  defaultValue:
    - 'System'
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
