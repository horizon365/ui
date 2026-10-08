---
title: 使用说明
description: '一个可组合的构建引导图尔斯通过重新锚定一个单一的弹出跨越步骤。'
---

## 使用情况

使用自动导入的`useTour`可组合项来驱动带有单个[Popover](/docs/components/popover)（其锚在步骤之间移动）的指导教程。可组合项拥有步骤状态，并将每个步骤的`target`解析为您绑定到`<UPopover>`的`reference`。同时保持对内容和导航的完全控制。

::component-example
---
收阖：true
名称：'使用教程示例'
---
::

每一步都需要一个`target`作为弹出窗口的锚点。它接受一个CSS选择器、一个元素、一个虚拟元素（任何带有`getBoundingClientRect`的字段），或返回其中一个的ref/getter。传递`null`将步骤定位到视口的中心。步骤上的任何其他字段（`title`、`body`、`side`、...）会原封不动地通过，并可透过`current`使用。

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

- 建立在Popover的反应`reference`道具上，因此当作用中步骤变更时，Popover会顺利地重新定位。
- 当步骤变为活动状态时，活动目标将自动滚动到视图中。
- 由于您是自己呈现内容的，因此不需要维护额外的主题或区域设置。

活性成分

我的天啊

参数

::field-group

  ::field{name="steps" type="MaybeRefOrGetter<TourStep[]>" required}
  导览步骤的清单。可以是静态数组、`ref`或反应式步骤的getter。

    ::collapsible

      ::field-group
        ::field{name="target" type="MaybeRefOrGetter<string | ReferenceElement | null | undefined>"}
        步骤锚定的元素。接受CSS选取器（`'#id'`、`'.class'`或解析为`#id`的bare id）、元素、虚拟元素或传回元素的ref/getter。使用`null`将步骤置于视区中央。
        ::

        ::field{name="[key: string]" type="any"}
        任何其他字段（`title`、`body`、`side`、...）都将通过`current`传递并可用。
        ::
      ::
    ::
  ::

  ::field{name="options" type="UseTourOptions"}
  教程的配置选项。

    ::collapsible

      ::field-group
        ::field{name="initialStep" type="number" default="0"}
        导览开始的步骤索引。
        ::

        ::field{name="loop" type="boolean" default="false"}
        在最后一个步骤之后，循环回到第一个步骤。
        ::

        ::field{name="scrollIntoView" type="boolean | ScrollIntoViewOptions" default="true"}
        当步骤变为活动状态时，将目标滚动到视图中。
        ::
      ::
    ::
  ::
::

返回

::field-group

  ::field{name="open" type="Ref<boolean>"}
  导览目前是否已开启。
  ::

  ::field{name="index" type="Ref<number>"}
  当前步长索引，钳制到步长范围。
  ::

  ::field{name="current" type="ComputedRef<TourStep | undefined>"}
  当前步骤对象，或者`undefined`（如果没有步骤）。
  ::

  ::field{name="reference" type="ComputedRef<ReferenceElement | undefined>"}
  当前步骤的已解析锚，要传递给`<UPopover :reference>`。
  ::

  ::field{name="total" type="ComputedRef<number>"}
  总步骤数。
  ::

  ::field{name="hasNext" type="ComputedRef<boolean>"}
  是否存在下一步。
  ::

  ::field{name="hasPrev" type="ComputedRef<boolean>"}
  上一个步骤是否存在。
  ::

  ::field{name="start" type="(index?: number) => void"}
  开启导览，选择性地在指定的索引处开启。
  ::

  ::field{name="next" type="() => void"}
  转到下一步。根据`loop`选项的不同，是循环还是在结尾结束。
  ::

  ::field{name="prev" type="() => void"}
  转到上一步。
  ::

  ::field{name="goTo" type="(index: number) => void"}
  跳转到特定步骤并打开教程。
  ::

  ::field{name="finish" type="() => void"}
  关闭导览。
  ::
::
