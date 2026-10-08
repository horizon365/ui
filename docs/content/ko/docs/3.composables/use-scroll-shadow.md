---
title: useScrollShadow 사용법
description: '스크롤 가능한 요소에 스크롤 그림자 효과를 적용하기 위한 컴포지션.'
---

##  사용

자동으로 가져온 `useScrollShadow`컴포지블을 사용하여 스크롤 가능한 요소의 가장자리에 페이드 그림자를 적용하여 스크롤 방향으로 더 많은 컨텐트를 사용할 수 있음을 나타냅니다.

::component-example
---
이름: "use-scroll-shadow-example"
---
::

- CSS `mask-image`를 사용하여 요소를 오버레이하는 대신 가장자리에서 콘텐츠를 페이드하므로 모든 배경에서 작동합니다.
-  요소가 오버플로되었는지 자동으로 감지하고 필요할 때만 그림자를 적용합니다.
-  수직 및 수평 방향 모두 지원합니다.

##  API

`useScrollShadow(element, options?)`{lang="ts-type"}

###  매개변수

::field-group

  ::field{name="element" type="MaybeRef<HTMLElement | null | undefined>" required}
  스크롤 가능한 요소에 대한 템플릿 참조 또는 반응 참조입니다.
  ::

  ::field{name="options" type="UseScrollShadowOptions"}
  스크롤 그림자의 구성 옵션입니다.

    ::collapsible

      ::field-group
        ::field{name="size" type="MaybeRefOrGetter<number>" default="24"}
        픽셀 단위의 그림자 크기입니다.
        ::

        ::field{name="orientation" type="MaybeRefOrGetter<'vertical' | 'horizontal'>" default="'vertical'"}
        그림자를 적용할 스크롤 방향.
        ::
      ::
    ::
  ::
::

###  반환

::field-group

  ::field{name="style" type="ComputedRef<CSSProperties | undefined>"}
  스크롤 가능한 요소에 바인딩할 반응형 스타일 오브젝트입니다. `:style` 섀도우가 활성화되면 `maskImage` 를 포함하고 그렇지 않으면 `undefined` 를 포함합니다.
  ::

  ::field{name="isOverflowing" type="ComputedRef<boolean>"}
  요소의 컨텐트가 표시 영역을 오버플로하는지 여부입니다.
  ::

  ::field{name="arrivedState" type="{ top: boolean, bottom: boolean, left: boolean, right: boolean }"}
  반응형 스크롤 도착 상태 [`useScroll`](https://vueuse.org/core/useScroll/)
  ::
::

##  예

###  수평

수평으로 스크롤할 수 있는 컨테이너에 `orientation` 옵션을 사용합니다.

```vue
<script setup lang="ts">
const el = useTemplateRef('el')

const { style } = useScrollShadow(el, { orientation: 'horizontal' })
</script>

<template>
  <div ref="el" class="overflow-x-auto whitespace-nowrap" :style="style">
    <!-- Horizontally scrollable content -->
  </div>
</template>
```

### 사용자 정의 크기

`size` 옵션을 사용하여 그림자 크기를 픽셀 단위로 변경합니다.

```vue
<script setup lang="ts">
const el = useTemplateRef('el')

const { style } = useScrollShadow(el, { size: 48 })
</script>

<template>
  <div ref="el" class="max-h-[300px] overflow-y-auto" :style="style">
    <!-- Scrollable content -->
  </div>
</template>
```
