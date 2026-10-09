---
title: 使用说明
description: '一个可组合的构建引导图尔斯通过重新锚定一个单一的弹出跨越步骤。'
---

## 用法

使用自动导入的`useTour`可组合项，通过单个[Popover](/docs/components/popover)（其锚在步骤之间移动）来驱动指导教程。可组合项拥有步骤状态，并将每个步骤的`target`解析为绑定到`<UPopover>`的`reference`，同时您可以完全控制内容和导航。

::component-example
---
collapse: true
name: 'use-tour-example'
---
::

每个步骤都需要一个`target`，以供弹出窗口锚定。它接受CSS选择器、元素、虚拟元素（任何包含`getBoundingClientRect`的元素）或返回其中之一的ref/getter。传递`null`以将步骤锚定到视口的中心。步骤上的任何其他字段（`title`、`body`、`side`...）都将原封不动地传递，并可通过`current`访问。

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

- 基于Popover的反应式`reference`道具而构建，因此当活动步骤发生变化时，Popover会平滑地重新定位。
- 当步骤变为活动状态时，活动目标自动滚动到视图中。
- 由于您自己呈现内容，因此无需维护额外的主题或区域设置。

应用程序接口

`useTour(steps, options?)`{lang="ts-type"}的字符串

参数

::field-group

  ::field{name="steps" type="MaybeRefOrGetter<TourStep[]>" required}
  导览步骤的清单。可以是静态数组、`ref`或反应式步骤的getter。

    ::collapsible

      ::field-group
        ::field{name="target" type="MaybeRefOrGetter<string | ReferenceElement | null | undefined>"}
        步骤所锚定的元素。接受CSS选择器（`'#id'`、`'.class'`或解析为`#id`的bare id）、元素、虚拟元素或传回元素的ref/getter。使用`null`可将步骤置于视见区的中央。
        ::

        ::field{name="[key: string]" type="any"}
        任何附加字段（`title`、`body`、`side`、......）都将通过`current`传递并可用。
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

### 返回

::field-group

  ::field{name="open" type="Ref<boolean>"}
  导览目前是否已开启。
  ::

  ::field{name="index" type="Ref<number>"}
  当前步长索引，钳制到步长范围。
  ::

  ::field{name="current" type="ComputedRef<TourStep | undefined>"}
  当前步骤对象，或者当没有步骤时为`undefined`。
  ::

  ::field{name="reference" type="ComputedRef<ReferenceElement | undefined>"}
  当前步骤的已解析锚点，要传递到`<UPopover :reference>`。
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
  转到下一步。根据`loop`选项，循环或结束。
  ::

  ::field{name="prev" type="() => void"}
  转到上一步。
  ::

  ::field{name="goTo" type="(index: number) => void"}
  跳转到特定步骤并打开浏览。
  ::

  ::field{name="finish" type="() => void"}
  结束参观。
  ::
::
