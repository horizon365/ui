---
description: 상태 또는 범주를 나타내는 짧은 텍스트입니다.
category: element
keywords:
  - tag
  - pill
  - label
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Badge.vue
---

## Usage

기본 슬롯을 사용하여 배지의 레이블을 설정합니다.

::component-code
---
slots:
  default: Badge
---
::

### Label 태그

`label` prop 을 사용하여 배지의 레이블을 설정합니다.

::component-code
---
props:
  label: Badge
---
::

### Color 이미지

`color` prop을 사용하여 배지의 색상을 변경합니다.

::component-code
---
props:
  color: neutral
slots:
  default: Badge
---
::

### Variant

`variant` props를 사용하여 Badge의 변형을 변경합니다.

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Badge
---
::

### Size 크기

`size` Prop을 사용하여 배지의 크기를 변경합니다.

::component-code
---
props:
  size: xl
slots:
  default: Badge
---
::

### Icon 이미지

`icon` prop을 사용하여 배지 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
props:
  icon: i-lucide-rocket
  size: md
  color: primary
  variant: solid
slots:
  default: Badge
---
::

`leading` 및 `trailing` 소품을 사용하여 아이콘 위치를 설정하거나 `leading-icon` 및 `trailing-icon` 소품을 사용하여 각 위치에 대해 다른 아이콘을 설정합니다.

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Badge
---
::

### 아바타

`avatar` prop을 사용하여 배지 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
slots:
  default: |

    Badge
---
::

## 예제

### `class` 소품

`class` prop을 사용하여 배지의 기본 스타일을 재정의합니다.

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Badge
---
::

## API

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
