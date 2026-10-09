---
title: 滚动区域
description: 具有虚拟化支持的灵活滚动容器。
category: data
keywords:
  - scrollbar
  - overflow
  - scrolling
links:
  - label: TanStack虚拟
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/virtual/latest
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ScrollArea.vue
---

## 用法

ScrollArea组件为大型列表创建可滚动的容器，并提供可选的虚拟化。

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-example'
class: '!p-0'
---
::

### 项目

使用`items` prop作为数组，并使用默认插槽渲染每个项目：

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-items-example'
class: '!p-0'
---
::

::tip{to="#with-default-slot"}
您也可以使用不带`items`属性的默认插槽来直接呈现自定义的可滚动内容。
::

### 方向

使用`orientation`属性更改滚动方向。将滚动方向改为`vertical`。

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

### 虚拟化

使用`virtualize`属性仅呈现当前视图中的项目，在处理大型数据集时显著提高性能。

::note
当虚拟化为**enabled**时，通过`virtualize` prop选项（如`gap`、`paddingStart`和`paddingEnd`）自定义间距。否则，使用`ui` prop在`viewport`插槽上应用`gap p-4`等类。
::

::tip
如果你的所有项目都有**相同的高度**，在`virtualize`属性中将`skipMeasurement`设置为`true`，以跳过每个项目的DOM测量，而依赖于`estimateSize`。这显著提高了大型统一列表的性能。
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

### 阴影：badge{label="4.9+" class="align-text-top"}

使用`shadow`道具在可滚动边缘显示淡入淡出阴影，表示滚动方向上有更多内容可用。淡入淡出自动跟随`orientation`，仅在内容溢出时出现。

::component-example
---
collapse: true
name: 'scroll-area-shadow-example'
---
::

::tip
传递一个对象到`shadow` prop来配置渐变大小，例如`:shadow="{ size: 48 }"`。
::

## 示例

### As砌体布置图

将`virtualize`道具与`lanes`、`gap`和`estimateSize`选项一起使用，创建具有可变高度项目的Pinterest风格砖石布局。

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
为了获得最佳性能，请将`estimateSize`设置为接近平均项目高度。增加`overscan`可以提高滚动平滑度，但会呈现更多的屏幕外项目。
::

### 带响应通道

您可以使用[`useWindowSize`](https://vueuse.org/core/useWindowSize/)（对于基于视口的）或[`useElementSize`](https://vueuse.org/core/useElementSize/)（对于基于容器的）组合来使`lanes`成为响应式的。

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-responsive-lanes-example'
class: '!p-0'
---
::

### 带有外部滚动元素：badge{label="4.10+" class="align-text-top"}

在`virtualize` prop中传递一个`getScrollElement`函数，以针对祖先滚动容器而不是组件自己的viewport进行虚拟化。将`scrollMargin`设置为列表从滚动元素开始的偏移量（例如，其上方内容的高度）。

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
因为容器拥有滚动条，所以工具栏的查找和“Top”按钮直接使用`container.scrollTo`滚动它。
::

::caution
`shadow`道具在此模式下无效，因为根不再拥有卷轴。请对卷轴容器应用您自己的淡入淡出。
::

### 带有可编程滚动

您可以使用暴露的`virtualizer`以编程方式控制滚动位置。

::component-example
---
collapse: true
overflowHidden: true
name: 'scroll-area-scroll-to-example'
class: '!p-0'
---
::

### 无限滚动

您可以使用[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/)组合文件在用户滚动时加载更多数据。

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
本例使用`useLazyFetch`和`server: false`在客户端上获取数据，而不会阻塞初始呈现。加载状态检查`pending`和`idle`的状态，以在获取之前和期间显示加载指示符。当用户滚动时，会加载其他页面。
::

### 带默认插槽

您可以使用不带`items`属性的默认插槽来直接呈现自定义的可滚动内容。

::component-example
---
name: 'scroll-area-default-slot-example'
class: '!p-0'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### 曝光

您可以使用[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)访问类型化的组件实例。

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

这将使您能够访问以下内容：

| 名称|类型|描述|
| ---- | ---- | ----------- |
| `$el`{lang="ts-type"}| `HTMLElement`{lang="ts-type"}|组件的根元素。|
| `virtualizer`{lang="ts-type"}| `Ref<Virtualizer> \| undefined`{lang="ts-type"}| [TanStack Virtual](https://tanstack.com/virtual/latest/docs/api/virtualizer)虚拟器实例（如果禁用虚拟化，则为`undefined`）。|

## Theme

:component-theme

## Changelog

:component-changelog
