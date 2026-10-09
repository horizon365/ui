---
description: 페이지를 탐색할 단추 또는 링크 목록입니다.
category: navigation
keywords:
  - pager
  - page navigation
links:
  - label: 페이지 지정
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pagination
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Pagination.vue
---

## Usage

`default-page` prop 또는 `v-model:page` 지시어를 사용하여 현재 페이지를 제어합니다.

::component-code
---
external:
  - page
model:
  - page
ignore:
  - page
  - total
props:
  page: 5
  total: 100
---
::

::note
페이지 지정 구성 요소는 일부 [`Button`](/docs/components/button)를 사용하여 페이지를 표시하고, [](#color), [`variant`]() 및 [)를 사용하여 props 스타일을 표시합니다.
::

### 전체

`total` prop을 사용하여 목록에 있는 총 항목 수를 설정합니다.

::component-code
---
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
---
::

### Items Per Page 페이지당 항목

`items-per-page` 소품을 사용하여 페이지당 항목 수를 설정합니다. 기본값은 `10`입니다.

::component-code
---
ignore:
  - page
external:
  - page
model:
  - page
props:
  page: 5
  itemsPerPage: 20
  total: 100
---
::

### Sibling 카운트

`sibling-count` prop을 사용하여 표시할 형제 수를 설정합니다. 기본값은 `2`입니다.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  siblingCount: 1
  total: 100
---
::

### 모서리 표시

`show-edges` 소품을 사용하여 항상 줄임표, 첫 번째 페이지와 마지막 페이지를 표시합니다. 기본값은 `false`입니다.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showEdges: true
  siblingCount: 1
  total: 100
---
::

### 컨트롤 보기

`show-controls` prop을 사용하여 첫 번째, prev, 다음 및 마지막 버튼을 표시합니다. 기본값은 `true`입니다.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showControls: false
  showEdges: true
  total: 100
---
::

### color

`color` Prop을 사용하여 비활성 컨트롤의 색상을 설정합니다. 기본값은 `neutral`입니다.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
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
  page: 5
  color: primary
  total: 100
---
::

### 변형

`variant` 소품을 사용하여 비활성 컨트롤의 변형을 설정합니다. 기본값은 `outline`입니다.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
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
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  color: neutral
  variant: subtle
  total: 100
---
::

### Active 색상

`active-color` 소품을 사용하여 활성 컨트롤의 색상을 설정합니다. 기본값은 `primary`입니다.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  activeColor: neutral
  total: 100
---
::

### Active 변수

`active-variant` Prop을 사용하여 활성 컨트롤의 변형을 설정합니다. 기본값은 `solid`입니다.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  activeColor: primary
  activeVariant: subtle
  total: 100
---
::

### Size 파일

`size` 소품을 사용하여 컨트롤의 크기를 설정합니다. 기본값은 `md`입니다.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  page: 5
  size: xl
  total: 100
---
::

### Disabled 사용 안 함

`disabled` prop을 사용하여 페이지 매김 컨트롤을 비활성화합니다.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
  disabled: true
---
::

## examples 예제

### 링크

`to` prop을 사용하여 단추를 링크로 변환합니다. 페이지 번호를 받고 경로 목적지를 반환하는 함수를 전달합니다.

::component-example
---
name: 'pagination-links-example'
---
::

::note
이 예제에서는 페이지의 맨 위로 이동하지 않도록 `#with-links` 해시를 추가합니다.
::

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

### Emits 파일

:component-emits

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
