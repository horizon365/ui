---
title: ScrollArea (스크롤 영역)
description: 가상화를 지원하는 유연한 스크롤 컨테이너.
category: data
keywords:
  - scrollbar
  - overflow
  - scrolling
links:
  - label: TanStack 가상
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/virtual/latest
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ScrollArea.vue
---

## Usage

ScrollArea 구성 요소는 큰 목록에 대한 선택적인 가상화를 사용하여 스크롤 가능한 컨테이너를 만듭니다.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-example'
class: '!p-0'
---
::

### Items 이미지

`items` prop을 배열로 사용하고 기본 슬롯을 사용하여 각 항목을 렌더링합니다.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-items-example'
class: '!p-0'
---
::

::tip{to="#with-default-slot"}
또한 `items` Prop 없이 기본 슬롯을 사용하여 사용자 정의 스크롤 가능한 내용을 직접 렌더링할 수도 있습니다.
::

### 방향 지정

`orientation` Prop을 사용하여 스크롤 방향을 변경합니다. 기본값은 `vertical`입니다.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-orientation-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: horizontal
    items:
      - vertical
      - horizontal
---
::

### 가상화

`virtualize` Prop을 사용하여 현재 보기에 있는 항목만 렌더링하면 큰 데이터 세트를 사용할 때 성능이 크게 향상됩니다.

::note
가상화가 **enabled**인 경우 `gap`, `paddingStart` 및 `paddingEnd`와 같은 `virtualize` Prop 옵션을 사용하여 간격을 사용자 정의합니다. 그렇지 않으면 `ui` Prop을 사용하여 `viewport` 슬롯에 `gap p-4`와 같은 클래스를 적용합니다.
::

::tip
만약 모든 항목이 **same height**를 가지고 있다면, `virtualize` prop에서 `skipMeasurement`를 `true`로 설정하여 항목별 DOM 측정을 건너뛰고 대신 `estimateSize`에 의존합니다. 이렇게 하면 큰 균일 목록의 성능이 크게 향상됩니다.
::

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-virtualize-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
---
::

### Shadow : badge{label="4.9+" class="align-text-top"}

`shadow` 소품을 사용하여 스크롤 가능한 가장자리에 페이드 그림자를 표시하여 스크롤 방향에서 더 많은 내용을 사용할 수 있음을 나타냅니다. 페이드는 `orientation`를 따라 자동으로 나타나며 내용이 넘치는 경우에만 나타납니다.

::component-example
---
collapse: true
name: 'scroll-area-shadow-example'
---
::

::tip
오브젝트를 `shadow` 소품에 전달하여 페이드 크기를 구성합니다(예: `:shadow="{ size: 48 }"`).
::

## 예제

### As 석조 레이아웃

`virtualize` Prop을 `lanes`, `gap` 및 `estimateSize` 옵션과 함께 사용하여 다양한 높이 항목이 있는 Pinterest 스타일의 석조 레이아웃을 만듭니다.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-masonry-layout-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
  - name: lanes
    type: number
    label: lanes
    default: 3
  - name: gap
    type: number
    label: gap
    default: 16
---
::

::tip
최적의 성능을 위해 `estimateSize`를 평균 항목 높이에 가깝게 설정합니다. `overscan`를 늘리면 스크롤 부드럽기가 향상되지만 화면 밖의 항목이 더 많이 렌더링됩니다.
::

### with responsive lanes 반응형 레인

[`useWindowSize`](https://vueuse.org/core/useWindowSize/)(뷰포트 기반) 또는 [`useElementSize`](https://vueuse.org/core/useElementSize/)(컨테이너 기반) 합성 파일을 사용하여 `lanes`를 반응적으로 만들 수 있습니다.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-responsive-lanes-example'
class: '!p-0'
---
::

### 외부 스크롤 요소 포함: badge{label="4.10+" class="align-text-top"}

`virtualize` Prop에서 `getScrollElement` 함수를 전달하여 구성 요소의 뷰포트가 아닌 조상 스크롤 컨테이너에 대해 가상화합니다. `scrollMargin`를 스크롤 요소의 시작에서 목록의 오프셋(예: 위 내용의 높이)으로 설정합니다.

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'scroll-area-external-scroll-example'
class: '!p-0'
options:
  - name: orientation
    label: orientation
    default: vertical
    items:
      - vertical
      - horizontal
---
::

::note
컨테이너가 스크롤을 소유하기 때문에 도구 모음의 찾기 및 "맨 위"버튼은 `container.scrollTo`를 사용하여 스크롤합니다.
::

::caution
루트가 스크롤을 소유하지 않기 때문에 `shadow` Prop은 이 모드에서 아무런 효과가 없습니다. 스크롤 컨테이너에 자신의 페이드를 적용합니다.
::

### 프로그래밍 스크롤 포함

노출 된 `virtualizer`를 사용하여 프로그래밍 방식으로 스크롤 위치를 제어할 수 있습니다.

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-scroll-to-example'
class: '!p-0'
---
::

###  무한 스크롤 포함

[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) 컴포지블을 사용하여 스크롤할 때 더 많은 데이터를 로드할 수 있습니다.

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'scroll-area-infinite-scroll-example'
class: '!p-0'
---
::

::note
이 예에서는 `useLazyFetch`와 `server: false`를 사용하여 초기 렌더링을 차단하지 않고 클라이언트에서 데이터를 검색합니다. 로드 상태는 `pending` 및 `idle` 상태를 모두 확인하여 인출 전과 도중에 로드 표시기를 표시합니다. 사용자가 스크롤할 때 추가 페이지가 로드됩니다.
::

### 기본 슬롯 사용

`items` Prop 없이 기본 슬롯을 사용하여 사용자 정의 스크롤 가능한 내용을 직접 렌더링할 수 있습니다.

::component-example
---
name: 'scroll-area-default-slot-example'
class: '!p-0'
---
::

## API

### Props (### Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

### 노출

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)를 사용하여 입력된 구성 요소 인스턴스에 액세스할 수 있습니다.

```vue
<script setup lang="ts">
const scrollArea = useTemplateRef('scrollArea')

// Scroll to a specific item
function scrollToItem(index: number) {
  scrollArea.value?.virtualizer?.scrollToIndex(index, { align: 'center' })
}
</script>

<template>
  <UScrollArea ref="scrollArea" :items="items" virtualize />
</template>
```

이렇게 하면 다음 항목에 액세스할 수 있습니다.

| 이름 Name| 유형 (Type)| 설명 (Description)|
| ---- | ---- | ----------- |
| `$el`{lang="ts-type"} 공식| `HTMLElement`{lang="ts-type"} 파일| 구성요소의 루트 요소입니다.|
| `virtualizer`{lang="ts-type"}| `Ref<Virtualizer> \| undefined`{lang="ts-type"}| [TanStack Virtual](https://tanstack.com/virtual/latest/docs/api/virtualizer) 가상화 인스턴스 (가상화가 비활성화된 경우 `undefined`).|

## Theme 테마

:component-theme

## Changelog 파일

:component-changelog
