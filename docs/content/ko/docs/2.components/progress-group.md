---
title: ProgressGroup 진행 그룹
description: 진행률 막대는 합계가 되는 여러 세그먼트로 분할됩니다.
category: element
navigation.badge: New
keywords:
  - meter
  - meter group
  - segmented progress
  - stacked bar
  - breakdown
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ProgressGroup.vue
---

## Usage

ProgressGroup 구성 요소를 사용하여 여러 값을 단일 진행률 막대의 세그먼트로 표시합니다.

::component-code
---
collapse: true
ignore:
  - items
  - max
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  max: 128
  items:
    - label: 'System'
      value: 24
      color: 'neutral'
      icon: 'i-lucide-cog'
    - label: 'Apps'
      value: 8
      color: 'error'
      icon: 'i-lucide-app-window'
    - label: 'Documents'
      value: 12
      color: 'warning'
      icon: 'i-lucide-file'
    - label: 'Multimedia'
      value: 42
      color: 'success'
      icon: 'i-lucide-film'
  class: 'w-96'
---
::

### Items 이미지

`items` Prop을 다음 속성을 가진 오브젝트 배열로 사용합니다.

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"} Xph037x{lang="ts-type"}
- `value?: number`{lang="ts-type"} (- `value?: number`{lang="ts-type"})
- [`color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | (string & {})`{lang="ts-type"}](#with-custom-colors)
- `slot?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { segment?: ClassNameValue, indicator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingDot?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue }`{lang="ts-type"}

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  items:
    - label: 'Compute'
      value: 42
      color: 'primary'
    - label: 'Storage'
      value: 18
      color: 'info'
    - label: 'Bandwidth'
      value: 9
      color: 'warning'
  class: 'w-96'
---
::

::note
`icon`가 없는 항목은 대신 목록에서 색상 점을 얻습니다.
::

### Max 파일

`max` prop을 사용하여 모든 항목의 합을 설정합니다. 기본값은 `100`입니다.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  max: 512
  items:
    - label: 'Used'
      value: 128
      color: 'primary'
    - label: 'Reserved'
      value: 64
      color: 'neutral'
  class: 'w-96'
---
::

::note
값은 `0`와 `max` 사이에서 클램프되고, `max`보다 많은 세그먼트는 비례적으로 트랙을 공유합니다.
::

### status 상태

`status` Prop을 사용하여 막대 위에 합계된 값을 표시합니다.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  status: true
  max: 128
  items:
    - label: 'System'
      value: 24
      color: 'neutral'
    - label: 'Apps'
      value: 8
      color: 'error'
    - label: 'Multimedia'
      value: 42
      color: 'success'
  class: 'w-96'
---
::

::tip
상태는 막대의 끝을 추적하고, 대신 전체 너비를 가로 질러 `:ui="{ status: 'w-full' }"`를 사용합니다.
::

### Color 색상

`color` Prop을 사용하여 자체 설정되지 않은 모든 세그먼트의 색상을 변경합니다.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  color: neutral
  items:
    - label: 'Read'
      value: 42
    - label: 'Write'
      value: 18
  class: 'w-96'
---
::

::tip
이 소품과 각 아이템의 `color` 모두 CSS 색상 값을 허용하며, 이는 테마 외부의 팔레트에 유용합니다.
::

### Size 크기

`size` prop 를 사용하여 ProgressGroup 의 크기를 변경합니다.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  size: xl
  items:
    - label: 'Read'
      value: 42
      color: 'primary'
    - label: 'Write'
      value: 18
      color: 'info'
  class: 'w-96'
---
::

### 방향

`orientation` prop을 사용하여 ProgressGroup.Defaults의 방향을 `horizontal`로 변경합니다.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  orientation: vertical
  items:
    - label: 'Read'
      value: 42
      color: 'primary'
    - label: 'Write'
      value: 18
      color: 'info'
  class: 'h-48'
---
::

## examples 예제

### With 상태 슬롯

`#status` 슬롯을 사용하여 합산 백분율을 자신의 콘텐츠로 바꿉니다.

::component-example
---
collapse: true
name: progress-group-status-example
---
::

### 항목 슬롯 포함

`#item-label` 및 `#item-trailing` 슬롯을 사용하여 각 항목이 표시하는 내용을 변경합니다. 둘 다 `item`, `index` 및 `percent`를 수신합니다.

::component-example
---
collapse: true
name: progress-group-item-example
---
::

### 사용자 정의 색상 사용

각 항목에 CSS 색상을 지정하여 테마 팔레트 외부에서 분석을 작성합니다.

::component-example
---
collapse: true
name: progress-group-custom-color-example
---
::

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
