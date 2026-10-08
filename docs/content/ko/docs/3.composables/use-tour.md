---
title: useTour 사용법
description: '한 단계에 걸쳐 단일 포포버를 다시 고정하여 가이드 투어를 구성하는 구성 가능.'
---

##  사용

자동으로 가져온 `useTour`컴포지블을 사용하여 가이드 투어를 진행하기 위해 단일 [Popower](/docs/components/popover) 이 앵커는 단계 간에 이동합니다. 컴포지블은 단계 상태를 소유하고 각 단계의 `target`를 `reference` you bind to @PH04,`<UPopover>`, `<UPopover>`컨텐츠와 탐색을 완전히 제어할 수 있습니다.

::component-example
---
축소: true
이름 : "use-tour-example"
---
::

각 단계는 포포포버가 앵커하는 `target`를 필요로 합니다. CSS 선택기, 요소, 가상 요소를 허용합니다.(`getBoundingClientRect` 가 있는 모든 항목) 또는 ref/getter 가 그 중 하나를 반환합니다. `null` 를 통해 단계를 뷰포트의 중앙에 고정시킵니다. 스텝의 다른 필드는 아무 것도 없습니다.(`title`, `body`, `side`,..)는 손대지 않은 상태로 전달되며 `current`를 통해 사용할 수 있습니다.

```vue
<script setup lang="ts">
const card = useTemplateRef('card')

const tour = useTour([
  { target: '#cta', title: 'Get started' },
  { target: () => card.value, title: 'Profile', side: 'right' },
  { target: null, title: 'All set' }
])
</script>

<template>
  <UButton @click="tour.start()">Start tour</UButton>

  <UPopover :open="tour.open.value" :reference="tour.reference.value" :dismissible="false">
    <template #content>
      <!-- your content + buttons -->
      <UButton :disabled="!tour.hasPrev.value" @click="tour.prev()">Back</UButton>
      <UButton @click="tour.next()">{{ tour.hasNext.value ? 'Next' : 'Finish' }}</UButton>
    </template>
  </UPopover>
</template>
```

- Popover의 반응형 `reference`prop을 기반으로 구축되어 활성 단계가 변경되면 Popover가 원활하게 위치를 변경합니다.
-  단계가 활성화되면 활성 대상이 자동으로 보기로 스크롤됩니다.
-  콘텐츠를 직접 렌더링하기 때문에 유지할 추가 테마나 로케일이 없습니다.

##  API

`useTour(steps, options?)`{lang="ts-type"} @ {lang="ts-type"}

###  매개변수

::field-group

  ::field{name="steps" type="MaybeRefOrGetter<TourStep[]>" required}
  둘러보기 단계 목록입니다. 정적 배열, `ref` 또는 반응 단계의 getter일 수 있습니다.

    ::collapsible

      ::field-group
        ::field{name="target" type="MaybeRefOrGetter<string | ReferenceElement | null | undefined>"}
        단계가 앵커하는 요소입니다. CSS 선택기(`'#id'`, `'.class'` 또는 `#id`로 해석되는 벌거벗은 ID), 요소, 가상 요소 또는 참조/getter를 반환합니다. `null` 를 사용하여 뷰포트의 중앙에 단계를 배치합니다.
        ::

        ::field{name="[key: string]" type="any"}
        추가 필드(`title``body`, `side`,..)는 모두 전달되며 `current`를 통해 사용할 수 있습니다.
        ::
      ::
    ::
  ::

  ::field{name="options" type="UseTourOptions"}
  둘러보기에 대한 구성 옵션.

    ::collapsible

      ::field-group
        ::field{name="initialStep" type="number" default="0"}
        둘러보기가 시작되는 단계 색인입니다.
        ::

        ::field{name="loop" type="boolean" default="false"}
        마지막 단계 후에 첫 번째 단계로 돌아갑니다.
        ::

        ::field{name="scrollIntoView" type="boolean | ScrollIntoViewOptions" default="true"}
        단계가 활성화되면 대상을 보기로 스크롤합니다.
        ::
      ::
    ::
  ::
::

###  반환

::field-group

  ::field{name="open" type="Ref<boolean>"}
  투어가 현재 열려 있는지 여부입니다.
  ::

  ::field{name="index" type="Ref<number>"}
  단계 범위에 클램프된 현재 단계 인덱스입니다.
  ::

  ::field{name="current" type="ComputedRef<TourStep | undefined>"}
  현재 단계 개체 또는 단계가 없는 경우 `undefined`
  ::

  ::field{name="reference" type="ComputedRef<ReferenceElement | undefined>"}
  현재 단계에 대한 해결된 앵커로 `<UPopover :reference>`로 전달됩니다.
  ::

  ::field{name="total" type="ComputedRef<number>"}
  전체 단계 수입니다.
  ::

  ::field{name="hasNext" type="ComputedRef<boolean>"}
  다음 단계가 있는지 여부입니다.
  ::

  ::field{name="hasPrev" type="ComputedRef<boolean>"}
  이전 단계가 존재하는지 여부입니다.
  ::

  ::field{name="start" type="(index?: number) => void"}
  선택적으로 지정된 색인에서 둘러보기를 엽니다.
  ::

  ::field{name="next" type="() => void"}
  다음 단계로 이동합니다. `loop` 옵션에 따라 루프 또는 끝에서 완료됩니다.
  ::

  ::field{name="prev" type="() => void"}
  이전 단계로 이동합니다.
  ::

  ::field{name="goTo" type="(index: number) => void"}
  특정 단계로 이동하여 둘러보기를 엽니다.
  ::

  ::field{name="finish" type="() => void"}
  둘러보기를 닫습니다.
  ::
::
