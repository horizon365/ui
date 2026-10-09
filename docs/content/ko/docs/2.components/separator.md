---
description: 내용을 가로 또는 세로로 구분합니다.
category: element
keywords:
  - divider
  - hr
  - horizontal rule
links:
  - label: 구분 기호
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Separator.vue
---

## Usage

구분 기호 구성 요소를 있는 그대로 사용하여 내용을 구분합니다.

::component-code
---
class: 'p-8'
---
::

### 방향

`orientation` 소품을 사용하여 Separator의 방향을 변경합니다. 기본값은 `horizontal`입니다.

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  orientation: vertical
  class: 'h-48'
---
::

### Label 태그

`label` 소품을 사용하여 구분 기호의 중간에 레이블을 표시합니다.

::component-code
---
class: 'p-8'
props:
  label: 'Hello World'
---
::

### Position : badge{label="4.8+" class="align-text-top"}

`position` 소품을 사용하여 Separator의 내용 위치를 변경합니다. 기본값은 `center`입니다.

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  position: start
  label: 'Hello World'
---
::

### Icon 이미지

`icon` 소품을 사용하여 구분 기호 가운데에 아이콘을 표시합니다.

::component-code
---
class: 'p-8'
props:
  icon: 'i-simple-icons-nuxtdotjs'
---
::

### Avatar 이미지

`avatar` 소품을 사용하여 구분자 가운데에 아바타를 표시합니다.

::component-code
---
prettier: true
class: 'p-8'
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
---
::

### Color

`color` 소품을 사용하여 구분 기호의 색상을 변경합니다. 기본값은 `neutral`입니다.

::component-code
---
class: 'p-8'
props:
  color: primary
  type: solid
---
::

### Type

`type` prop을 사용하여 Separator.기본값은 `solid`로 변경합니다.

::component-code
---
class: 'p-8'
props:
  type: dashed
---
::

### Size 크기

`size` prop을 사용하여 Separator. 기본값은 `xs`입니다.

::component-code
---
class: 'p-8'
props:
  size: lg
---
::

## API 파일

### Props 코드 코드

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## Changelog 파일

:component-changelog
