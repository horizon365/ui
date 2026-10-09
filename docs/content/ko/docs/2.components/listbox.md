---
description: 검색, 가상화 및 리치 항목 렌더링이 포함된 선택 가능한 항목 목록입니다.
category: form
keywords:
  - option list
  - picker
  - selection
links:
  - label: 목록 상자
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Listbox.vue
---

## Usage

`v-model` 지시문을 사용하여 ListBox의 값을 제어하거나 `default-value` prop의 상태를 제어할 필요가 없을 때 초기 값을 설정합니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - modelValue.label
  - modelValue.icon
  - modelValue.value
  - items
external:
  - items
  - modelValue
externalTypes:
  - ListboxItem[]
props:
  modelValue:
    label: 'France'
    icon: 'i-lucide-map-pin'
    value: 'FR'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
    - label: 'Netherlands'
      icon: 'i-lucide-map-pin'
      value: 'NL'
    - label: 'Poland'
      icon: 'i-lucide-map-pin'
      value: 'PL'
    - label: 'Belgium'
      icon: 'i-lucide-map-pin'
      value: 'BE'
    - label: 'Portugal'
      icon: 'i-lucide-map-pin'
      value: 'PT'
    - label: 'Austria'
      icon: 'i-lucide-map-pin'
      value: 'AT'
    - label: 'Sweden'
      icon: 'i-lucide-map-pin'
      value: 'SE'
  class: 'w-full'
---
::

### Items 파일

`items` prop을 다음 속성을 가진 오브젝트 배열로 사용합니다.

- `label?: string`{lang="ts-type"} (- `label?: string`{lang="ts-type"})
- [`description?: string`{lang="ts-type"}](#with-description-in-items)
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"}](#with-icon-in-items)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
- `disabled?: boolean`{lang="ts-type"} 사용자
- `onSelect?: (e: Event) => void`{lang="ts-type"}의 최상위 리뷰
- `class?: any`{lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, ... }`{lang="ts-type"}

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'France'
      description: 'The Hexagon'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      description: 'The Federal Republic'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      description: 'The Boot'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      description: 'The Bull Skin'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

배열 배열을 `items` prop에 전달하여 개별 항목 그룹을 표시할 수도 있습니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[][]
props:
  items:
    - - label: 'France'
        icon: 'i-lucide-map-pin'
        value: 'FR'
      - label: 'Germany'
        icon: 'i-lucide-map-pin'
        value: 'DE'
      - label: 'Italy'
        icon: 'i-lucide-map-pin'
        value: 'IT'
    - - label: 'Brazil'
        icon: 'i-lucide-map-pin'
        value: 'BR'
      - label: 'Argentina'
        icon: 'i-lucide-map-pin'
        value: 'AR'
  class: 'w-full'
---
::

### Multiple 다중

`multiple` prop을 사용하여 여러 항목을 선택할 수 있습니다. 활성화되면 `v-model`가 배열이 됩니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
  - multiple
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  multiple: true
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### Value 키

`value-key` prop.Defaults to `undefined`를 사용하여 전체 객체가 아닌 객체의 단일 속성을 바인딩하도록 선택할 수 있습니다.

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - ListboxItem[]
props:
  modelValue: 'FR'
  valueKey: 'value'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### Filter 필터

`filter` 소품을 사용하여 필터 입력을 표시하거나 객체를 전달하여 [Input](/docs/components/input) 구성 요소를 사용자 정의합니다. 기본값은 `false`입니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  filter:
    placeholder: 'Filter...'
    icon: 'i-lucide-search'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
    - label: 'Netherlands'
      icon: 'i-lucide-map-pin'
      value: 'NL'
    - label: 'Poland'
      icon: 'i-lucide-map-pin'
      value: 'PL'
  class: 'w-full'
---
::

### 선택된 아이콘

`selected-icon` 소품을 사용하여 항목을 선택할 때 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-check`입니다.

::component-code
---
collapse: true
ignore:
  - items
  - modelValue
  - valueKey
  - class
external:
  - items
  - modelValue
externalTypes:
  - ListboxItem[]
props:
  modelValue: 'FR'
  selectedIcon: 'i-lucide-flame'
  valueKey: 'value'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### Size 크기

`size` prop을 사용하여 ListBox의 크기를 변경합니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  size: xl
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### loading 중

`loading` prop을 사용하여 로딩 지시자를 표시하고, `loading-icon` prop을 사용하여 아이콘을 사용자 정의합니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  loading: true
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
  class: 'w-full'
---
::

### 비활성 화 됨

`disabled` prop을 사용하여 ListBox와의 사용자 상호 작용을 방지합니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  disabled: true
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

## examples 예제

### With 아이템 타입

`type` 속성을 `separator`와 함께 사용하여 항목 사이의 구분 기호를 표시하거나 `label`를 사용하여 레이블을 표시할 수 있습니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[][]
props:
  items:
    - - type: 'label'
        label: 'Fruits'
      - label: 'Apple'
      - label: 'Banana'
      - label: 'Blueberry'
      - label: 'Grapes'
      - label: 'Pineapple'
    - - type: 'label'
        label: 'Vegetables'
      - label: 'Aubergine'
      - label: 'Broccoli'
      - label: 'Carrot'
      - label: 'Courgette'
      - label: 'Leek'
  class: 'w-full'
---
::

::note
`label` 항목을 그룹 제목으로 사용할 때 배열 배열을 전달하여 레이블이 그룹과 함께 필터링되도록 합니다.
::

### With 항목의 아이콘

`icon` 속성을 사용하여 [Icon](/docs/components/icon)를 항목 내부에 표시할 수 있습니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'Backlog'
      icon: 'i-lucide-circle-help'
      value: 'backlog'
    - label: 'Todo'
      icon: 'i-lucide-circle-plus'
      value: 'todo'
    - label: 'In Progress'
      icon: 'i-lucide-circle-arrow-up'
      value: 'in_progress'
    - label: 'Done'
      icon: 'i-lucide-circle-check'
      value: 'done'
  class: 'w-full'
---
::

### 항목에 아바타 포함

`avatar` 속성을 사용하여 [Avatar](/docs/components/avatar)를 항목 내부에 표시할 수 있습니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'benjamincanac'
      avatar:
        src: 'https://github.com/benjamincanac.png'
    - label: 'HugoRCD'
      avatar:
        src: 'https://github.com/HugoRCD.png'
    - label: 'atinux'
      avatar:
        src: 'https://github.com/atinux.png'
    - label: 'romhml'
      avatar:
        src: 'https://github.com/romhml.png'
  class: 'w-full'
---
::

### With 칩 in items

`chip` 속성을 사용하여 [Chip](/docs/components/chip)를 항목 안에 표시할 수 있습니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'bug'
      chip:
        color: 'error'
    - label: 'feature'
      chip:
        color: 'success'
    - label: 'enhancement'
      chip:
        color: 'info'
  class: 'w-full'
---
::

### 항목에 설명 포함

`description` 속성을 사용하여 레이블 아래에 추가 텍스트를 표시할 수 있습니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'France'
      description: 'The Hexagon'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      description: 'The Federal Republic'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      description: 'The Boot'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      description: 'The Bull Skin'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### Control 선택된 항목

`default-value` prop 또는 `v-model` 지시문을 사용하여 선택한 항목을 제어할 수 있습니다.

::component-example
---
name: 'listbox-model-value-example'
collapse: true
---
::

### Control 검색 용어

`v-model:search-term` 지시문을 사용하여 검색 용어를 제어합니다.

::component-example
---
name: 'listbox-search-term-example'
---
::

### Ignore 필터 포함

`ignore-filter` prop을 `true`로 설정하여 내부 검색을 비활성화하고 자신의 검색 논리를 사용합니다.

::component-example
---
collapse: true
name: 'listbox-ignore-filter-example'
---
::

::note
이 예제에서는 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)를 사용하여 API 호출을 설명합니다.
::

### With 필터 필드 포함

`filter-fields` Prop을 필드 배열과 함께 사용하여 필터링합니다. 기본값은 `[labelKey]`입니다.

::component-example
---
collapse: true
name: 'listbox-filter-fields-example'
---
::

### 가상화 지원

`virtualize` prop을 사용하여 큰 목록에 대해 부울 또는 `{ estimateSize: 32, overscan: 12 }`와 같은 옵션이 있는 개체로 가상화를 활성화합니다.

::component-example
---
name: 'listbox-virtualize-example'
collapse: true
---
::

### As 전송 리스트

[Button](/docs/components/button) 컨트롤을 사용하여 두 개의 ListBox 구성 요소를 구성하여 전송 목록 패턴을 빌드할 수 있습니다.

::component-example
---
name: 'listbox-transfer-list-example'
collapse: true
---
::

## API 사용

### Props 코드 코드

:component-props

### 슬롯

:component-slots

### Emits 파일

:component-emits

## Theme 테마

:component-theme

## Changelog 파일

:component-changelog
