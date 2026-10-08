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

##  사용

ScrollArea 구성 요소는 큰 목록에 대한 선택적 가상화를 사용하여 스크롤 가능한 컨테이너를 만듭니다.

::component-example
---
축소: true
overflowHidden: true
이름: 'scroll-area-example'
클래스 : "!p-0"
---
::

###  프로젝트

`items`prop을 배열로 사용하고 기본 슬롯을 사용하여 각 항목을 렌더링합니다.

::component-example
---
축소: true
overflowHidden: true
이름: 'scroll-area-items-example'
클래스 : "!p-0"
---
::

::tip{to="#with-default-slot"}
`items`prop 없이 기본 슬롯을 사용하여 사용자 정의 스크롤 가능 콘텐츠를 직접 렌더링할 수도 있습니다.
::

###  방향

스크롤 방향을 변경하려면 `orientation`prop을 사용합니다. 기본값은 `vertical`입니다.

::component-example
---
축소: true
overflowHidden: true
이름: 'scroll-area-orientation-example'
클래스 : "!p-0"
선택 사항:
  -  이름: 방향
    레이블: 방향
    기본값: 수평
    프로젝트:
      -  수직
      -  수평
---
::

###  가상화

`virtualize`prop을 사용하여 현재 보기에 있는 항목만 렌더링하므로 대규모 데이터 세트를 사용할 때 성능이 크게 향상됩니다.

::note
가상화가 **enabled**인 경우 `virtualize`prop 옵션을 사용하여 `gap`, `paddingStart` 및 `paddingEnd` 등의 간격을 사용자 지정합니다. 그렇지 않으면 `ui`prop을 사용하여 `gap p-4` 슬롯에서 @@와 같은 클래스를 적용합니다.
::

::tip
만약 모든 항목이 **동일한 높이**를 가지고 있다면, `virtualize`prop에서 `skipMeasurement`을 `true`로 설정하여 항목별 DOM 측정을 건너뛰고 `estimateSize`에 의존하도록 하십시오. 이는 대규모 균일 목록의 성능을 크게 향상시킵니다.
::

::component-example
---
축소: true
overflowHidden: true
이름: 'scroll-area-virtualize-example'
클래스 : "!p-0"
선택 사항:
  -  이름: 방향
    레이블: 방향
    기본값: 수직
    항목:
      -  수직
      -  horizontal
---
::

### 그림자: badge{label="4.9+" class="align-text-top"}

`shadow`prop 을 사용하여 스크롤 가능한 가장자리에 페이드 그림자를 표시하면 스크롤 방향으로 더 많은 콘텐츠를 사용할 수 있음을 나타냅니다. 페이드는 자동으로 `orientation` 뒤에 나타나며 컨텐츠가 넘치는 경우에만 나타납니다.

::component-example
---
축소: true
이름: "scroll-area-shadow-example"
---
::

::tip
객체를 `shadow`prop에 전달하여 페이드 크기를 설정합니다(예: `:shadow="{ size: 48 }"`).
::

##  예

###  석조 배치로.

`virtualize`prop을 `lanes`, `gap`옵션과 함께 사용하여 다양한 높이 항목을 가진 핀테이스트 스타일의 석조 레이아웃을 만듭니다.

::component-example
---
축소: true
overflowHidden: true
이름: 'scroll-area-masonry-layout-example'
클래스: "!p-0"
선택 사항:
  - 이름: 방향
    레이블: 방향
    기본값: 수직
    프로젝트:
      -  수직
      -  수평
  - 이름: 레인
    문자: 번호
    레이블: 차선
    기본 값: 3
  -  이름: gap
    문자: 숫자
    레이블: 간격
    기본값: 16
---
::

::tip
최적의 성능을 얻으려면 평균 항목 높이에 가깝게 `estimateSize`를 설정하십시오. `overscan`를 늘리면 스크롤 부드럽기가 향상되지만 화면 밖의 항목이 더 많이 렌더링됩니다.
::

###  응답 차선

[`useWindowSize`](https://vueuse.org/core/useWindowSize/) (뷰포트 기반의 경우) 또는 [`useElementSize`](https://vueuse.org/core/useElementSize/) (컨테이너 기반의 경우) 반응형 합성 가능한 합성 파일을 만들 수 있습니다.

::component-example
---
축소: true
overflowHidden: true
이름: 'scroll-area-responsive-lanes-example'
클래스: "!p-0"
---
::

### 외부 스크롤 요소와 함께: badge{label="4.10+" class="align-text-top"}

`virtualize`prop에서 `getScrollElement` 함수를 전달하여 구성요소의 뷰포트가 아닌 조상 스크롤 컨테이너에 대해 가상화합니다. `scrollMargin`를 스크롤 요소의 시작으로부터 목록의 오프셋(예: 위의 컨텐츠 높이)으로 설정합니다.

::component-example
---
상품명 : True
축소: true
overflowHidden: true
이름: 'scroll-area-external-scroll-example'
클래스 : "!p-0"
선택 사항:
  -  이름: 방향
    레이블: 방향
    기본값: 수직
    항목:
      -  수직
      -  수평
---
::

::note
컨테이너가 스크롤을 소유하기 때문에 도구 모음의 찾기 및 "맨 위" 버튼은 `container.scrollTo`로 스크롤합니다.
::

::caution
`shadow`prop은 더 이상 스크롤을 소유하지 않기 때문에 이 모드에서 아무런 영향을 주지 않습니다. 스크롤 컨테이너에 자신의 페이드를 적용하십시오.
::

###  프로그래밍 스크롤

노출된 `virtualizer`를 사용하여 프로그래밍 방식으로 스크롤 위치를 제어 할 수 있습니다.

::component-example
---
축소: true
overflowHidden: true
이름: 'scroll-area-scroll-to-example'
클래스 : "!p-0"
---
::

### 무한 스크롤 사용

[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/)컴포지블을 사용하여 사용자가 스크롤할 때 더 많은 데이터를 로드할 수 있습니다.

::component-example
---
상품명 : True
축소: true
overflowHidden: true
이름: 'scroll-area-infinite-scroll-example'
클래스: "!p-0"
---
::

::note
이 예에서는 `useLazyFetch`와 `server: false`를 사용하여 초기 렌더링을 차단하지 않고 클라이언트에서 데이터를 검색합니다. 로드 상태에서는 `pending` 및 `idle`status를 모두 확인하여 가져오기 전과 진행 중에 로드 표시기를 표시합니다. 추가 페이지는 사용자가 스크롤할 때 로드됩니다.
::

### 기본 슬롯 포함

`items`prop 없이 기본 슬롯을 사용하여 사용자 정의 스크롤 가능한 콘텐츠를 직접 렌더링할 수 있습니다.

::component-example
---
이름: 'scroll-area-default-slot-example'
클래스: "!p-0"
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  Emits

:구성요소 - 방출

###  노출

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)를 사용하여 유형 구성요소 인스턴스에 액세스할 수 있습니다.

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
| `$el`{lang="ts-type"}| `HTMLElement`{lang="ts-type"}| 구성 요소의 루트 요소입니다.|
| `virtualizer`{lang="ts-type"}| `Ref<Virtualizer> \| undefined` @ {lang="ts-type"}| [TanStack Virtual](https://tanstack.com/virtual/latest/docs/api/virtualizer)virtualizer 인스턴스(가상화가 비활성화된 경우).|

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
