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

## 使用情况

ScrollArea组件为大型列表创建可滚动的容器，并提供可选的虚拟化功能。

::component-example
---
收阖：true
overflowHidden：真的
名称：“滚动区示例”
类：“！p-0”
---
::

项目

将`items`道具用作数组，并使用默认插槽呈现每个项目：

::component-example
---
收阖：true
overflowHidden：真的
名称：'滚动区项目示例'
类：“！p-0”
---
::

::tip{to="#with-default-slot"}
您也可以使用不含`items`属性的预设插槽，直接呈现自订可卷动内容。
::

方向

使用`orientation`道具来变更卷动方向。预设为`vertical`。

::component-example
---
收阖：true
overflowHidden：真的
名称：'滚动区方向示例'
类：“！p-0”
可选项：
- 名称：方向
    标签：方向
    默认：水平
    项目名称：
      垂直的
      水平方向
---
::

### 虚拟化

使用`virtualize`道具仅呈现当前视图中的项目，从而在处理大型数据集时显著提高性能。

::note
当虚拟化**enabled**时，请透过`virtualize`属性选项（例如`gap`、`paddingStart`和`paddingEnd`）自订间距。否则，请使用`ui`属性在`viewport`插槽上套用`gap p-4`之类的类别。
::

::tip
如果您的所有项目都具有**相同的高度**，请在`virtualize`属性中将`skipMeasurement`设定为`true`，以略过每一项目的DOM测量，而改用`estimateSize`。这会大幅改善大型统一清单的效能。
::

::component-example
---
收阖：true
overflowHidden：真的
名称：“滚动区虚拟化示例”
类：“！p-0”
可选项：
- 名称：方向
    标签：方向
    默认：垂直
    项目名称：
      垂直的
      水平方向
---
::

阴影：徽章

使用`shadow`道具可在可滚动边缘上显示渐变阴影，表示在滚动方向上有更多内容可用。渐变会自动跟随`orientation`，并且仅在内容溢出时才会显示。

::component-example
---
收阖：true
名称："滚动区阴影示例"
---
::

::tip
将对象传递给`shadow`道具以配置淡入淡出大小，例如`:shadow="{ size: 48 }"`。
::

示例

按砌体布置图

将`virtualize`道具与`lanes`、`gap`和`estimateSize`选项一起使用，可创建具有可变高度项目的Pinterest风格的砖石布局。

::component-example
---
收阖：true
overflowHidden：真的
名称：'滚动区-砖石结构-布局-示例'
类："! p-0"
可选项：
- 的方向
    标签：方向
    默认：垂直
    项目名称：
      垂直的
      水平方向
  我的天啊
    类型：数字
    标签：车道
    默认值：3
  空白处
    类型：数字
    标签：间隙
    默认值：16
---
::

::tip
若要获得最佳性能，请将`estimateSize`设置为接近平均项目高度。增大`overscan`可提高滚动的平滑度，但会呈现更多屏幕外项目。
::

有了快速响应的通道

您可以使用[`useWindowSize`](https://vueuse.org/core/useWindowSize/)（对于基于视口的）或[`useElementSize`](https://vueuse.org/core/useElementSize/)（对于基于容器的）可合成对象使`lanes`具有反应性。

::component-example
---
收阖：true
overflowHidden：真的
名称："滚动区响应通道示例"
类："! p-0"
---
::

### 带有外部滚动元素：徽标{label="4.10+" class="align-text-top"}

在`virtualize`属性中传递`getScrollElement`函数，以便根据祖先滚动容器而不是组件自己的视口进行虚拟化。将`scrollMargin`设置为列表相对于滚动元素开始位置的偏移量（例如，其上内容的高度）。

::component-example
---
更漂亮：真的
收阖：true
overflowHidden：真的
名称：'滚动区域外部滚动示例'
类：“！p-0”
可选项：
- 名称：方向
    标签：方向
    默认：垂直
    项目名称：
      垂直的
      水平方向
---
::

::note
因为容器拥有滚动条，所以工具栏的“查找”和“顶部”按钮直接使用`container.scrollTo`滚动它。
::

::caution
`shadow`道具在此模式下无效，因为根目录不再拥有卷轴。请改为将您自己的淡化应用到卷轴容器。
::

### 使用程序设计滚动

您可以使用公开的`virtualizer`以程序设计方式控制卷动位置。

::component-example
---
收阖：true
overflowHidden：真的
名称：'滚动区域滚动到示例'
类：“！p-0”
---
::

使用无限滚动

您可以使用[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/)可组合对象在用户滚动时加载更多数据。

::component-example
---
更漂亮：真的
收阖：true
overflowHidden：真的
名称：'滚动区域-无限滚动-示例'
类：“！p-0”
---
::

::note
此示例使用`useLazyFetch`和`server: false`在客户端上提取数据，而不阻止初始呈现。加载状态检查`pending`和`idle`的状态，以在提取之前和提取过程中显示加载指示器。用户滚动时将加载其他页面。
::

### 使用默认插槽

您可以使用不含`items`属性的预设插槽，直接呈现自订可卷动内容。

::component-example
---
名称：'滚动区默认插槽示例'
类：“！p-0”
---
::

美国石油学会

道具

：组件-支柱

插槽

：组件插槽

发射器

：组件发射

曝光

您可以使用[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)来存取具型别的元件实体。

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

这将允许您访问以下内容：

| 名称|类型|描述|
| ---- | ---- | ----------- |
| `$el`{lang="ts-type"}|`HTMLElement`{lang="ts-type"}|组件的根元素。|
| `virtualizer`{lang="ts-type"}|`Ref<Virtualizer> \| undefined`{lang="ts-type"}|[TanStack Virtual](https://tanstack.com/virtual/latest/docs/api/virtualizer)virtualizer实例（如果禁用虚拟化，则为`undefined`）。|

## Theme

：组件主题

## Changelog

：组件更改日志
