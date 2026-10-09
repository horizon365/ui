---
description: 드래그 가능한 핸들로 구분된 크기 조절 가능한 패널 세트입니다.
category: layout
links:
  - label: 분할 장치(Splitter)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/splitter
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Splitter.vue
navigation.badge: New
---

## Usage

[분할] 구성 요소를 사용하여 드래그 가능한 핸들로 구분된 크기 조정 가능한 패널 리스트를 표시합니다.

::component-example
---
collapse: true
name: 'splitter-example'
---
::

::note
Splitter는 컨테이너의 높이를 채우므로 부모 요소가 하나를 정의하는지 확인합니다.The Splitter fills the height of its container, so make sure a parent element defines one.
::

### Items 이미지

`items` Prop을 다음과 같은 속성을 가진 오브젝트 배열로 사용합니다.

- `defaultSize?: number`{lang="ts-type"}
- `minSize?: number`{lang="ts-type"}
- `maxSize?: number`{lang="ts-type"} - `maxSize?: number`{lang="ts-type"}
- `collapsible?: boolean`{lang="ts-type"}
- `collapsedSize?: number`{lang="ts-type"} (- `collapsedSize?: number`{lang="ts-type"})
- `sizeUnit?: '%' | 'px'`{lang="ts-type"} - `sizeUnit?: '%' | 'px'`{lang="ts-type"}
- `order?: number`{lang="ts-type"} - {lang="ts-type"}
- `id?: string`{lang="ts-type"}
- `slot?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { panel?: ClassNameValue }`{lang="ts-type"} Xph037x{lang="ts-type"}

패널의 내용을 채우려면 `slot` 키를 사용하고 `class` 키를 사용하여 스타일을 지정합니다. `slot` 키가 없는 항목은 `panel-{index}` 슬롯으로 돌아갑니다. 크기는 기본적으로 백분율이며 픽셀 값으로 항목에 `sizeUnit: 'px'`를 설정합니다.

::caution
서버에서 렌더링할 때 `id` Prop을 설정하고 `defaultSize`를 모든 항목에 또는 없음으로 설정합니다. ID는 자동으로 생성되며 서버와 클라이언트가 동의하지 않을 수 있으므로 수화 레이아웃이 중단됩니다. `defaultSize`가 없는 항목은 서버의 동일한 공유로 다시 떨어지므로 두 개의 크기를 혼합하면 패널이 한 번 수분을 공급하게 됩니다. 픽셀은 클라이언트에서 측정되며 항상 약간의 이동합니다.
::

::component-code
---
collapse: true
class: 'h-96'
prettier: true
ignore:
  - items
  - id
external:
  - items
externalTypes:
  - SplitterItem[]
props:
  id: 'splitter-items'
  items:
    - slot: 'sidebar'
      minSize: 15
      maxSize: 40
      defaultSize: 25
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot: 'main'
      defaultSize: 75
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
slots:
  sidebar: Sidebar
  main: Main
---

#sidebar
사이드바 Sidebar

#main
주 (Main)
::

### 방향

`orientation` 소품을 사용하여 Splitter의 방향을 변경합니다. 기본값은 `horizontal`입니다.

::component-code
---
collapse: true
class: 'h-96'
prettier: true
ignore:
  - items
  - id
external:
  - items
externalTypes:
  - SplitterItem[]
props:
  id: 'splitter-orientation'
  orientation: 'vertical'
  items:
    - slot: 'first'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot: 'second'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
slots:
  first: First
  second: Second
---

#first
첫 번째(First)

#second
두 번째
::

## 예제

### With 접이식 패널

항목에 `collapsible: true`를 설정하여 `minSize`를 지나서 축소되도록 하고 `collapsedSize`를 사용하여 축소될 때 패널의 일부를 표시합니다. 패널 슬롯에는 `collapsed`, `collapse` 및 `expand`가 노출되어 프로그래밍 방식으로 제어할 수 있습니다. `collapse`, `expand` 및 `resize` 이벤트는 패널 인덱스와 함께 발생합니다.

::component-example
---
collapse: true
name: 'splitter-collapsible-example'
---
::

### 중첩된 Splitter 포함

패널 내부에 `Splitter`를 중첩하여 2차원 IDE 스타일의 레이아웃을 만듭니다.

::component-example
---
collapse: true
name: 'splitter-nested-example'
---
::

### 사용자 지정 핸들 사용

기본적으로 핸들은 보이지 않습니다. `ui` 소품을 사용하여 스타일을 변경합니다. 예를 들어 플러쉬 레이아웃의 표시 구분자로 사용하고 `resize-handle` 슬롯을 사용하여 내부의 내용을 그립처럼 렌더링합니다.

::component-example
---
collapse: true
name: 'splitter-custom-handle-example'
---
::

### with 지속성

`auto-save-id`를 제공하여 레이아웃을 `localStorage`로 유지하고 다시 로드할 때 복원합니다.

```vue
<template>
  <USplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </USplitter>
</template>
```

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
