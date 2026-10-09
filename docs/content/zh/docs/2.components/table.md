---
description: 一个响应式表元素，用于以行和列显示数据。
category: data
keywords:
  - data table
  - datagrid
  - data grid
links:
  - label: TanStack表
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/table/v8
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Table.vue
---

## 用法

Table组件构建在[TanStack Table v8](https://tanstack.com/table/v8)之上，并由[useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable)组合提供支持，以提供灵活且完全类型安全的API。

它将您的数据呈现为行和列，并支持排序，过滤，分页，行选择，扩展，分组，固定和虚拟化，因此您可以构建从简单的数据表到功能齐全的数据网格的一切。

::component-example
---
source: false
name: 'table-example'
class: '!p-0'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="查看源代码"}
此示例演示了`Table`组件的最常见用例。请查看GitHub上的源代码。
::

### Data

使用`data` prop作为对象数组，列将根据对象的键生成。

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1'
---
::

### 列

使用`columns` prop作为[ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def)对象的数组，其属性如下：

- `accessorKey`：[提取列的值时要使用的行对象的键。]{class="text-muted"}
- `header`：[要为列显示的标题。如果传递字符串，则可以将其用作列ID的默认值。如果传递函数，则会传递标题的props对象，并应返回呈现的标题值（确切类型取决于所使用的适配器）。]{class="text-muted"}
- [`footer`](#with-column-footer)：[要为列显示的页脚。与页眉完全相同，但显示在表下。]{class="text-muted"}
- `cell`：[显示列的每一行的单元格。如果传递一个函数，它将被传递一个单元格的props对象，并且应该返回呈现的单元格值（确切的类型取决于所使用的适配器）。]{class="text-muted"}
- `meta`：[列的额外属性。]{class="text-muted"}
  - `class`：
    - `td`：[应用于`td`元素的类。]{class="text-muted"}
    - `th`：[应用于`th`元素的类。]{class="text-muted"}
  - `style`：
    - `td`：[应用于`td`元素的样式。]{class="text-muted"}
    - `th`：[应用于`th`元素的样式。]{class="text-muted"}
  - [`colspan`](#with-column-span)：
    - `td`：[应用于`td`元素的colspan属性。]{class="text-muted"}
  - [`rowspan`](#with-column-span)：
    - `td`：[应用于`td`元素的rowspan属性。]{class="text-muted"}

要渲染组件或其他HTML元素，需要在`header`和`cell` props中使用Vue [`h`函数](https://vuejs.org/api/render-function.html#h)。这与其他使用插槽的组件不同，但允许更大的灵活性。

::tip{to="#with-slots" aria-label="带插槽的表列"}
您也可以使用插槽自订表格的信头和数据储存格。
::

::component-example
---
prettier: true
collapse: true
class: '!p-0'
name: 'table-columns-example'
highlights:
  - 53
  - 108
---
::

::note
使用`h`渲染组件时，可以使用`resolveComponent`函数或从`#components`导入。
::

### Meta

使用`meta` prop作为对象（[TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta)）来传递属性，如：

- `class`：
  - `tr`：[应用于`tr`元素的类。] {class="text-muted"}
- `style`：
  - `tr`：[应用于`tr`元素的样式。] {class="text-muted"}

::component-example
---
prettier: true
collapse: true
name: 'table-meta-example'
class: '!p-0'
highlights:
  - 128
  - 140
---
::

### 加载中

使用`loading` prop显示加载状态，使用`loading-color` prop更改其颜色，使用`loading-animation` prop更改其动画。

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  loading: true
  loadingColor: primary
  loadingAnimation: carousel
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1'
---
::

::tip
当用户喜欢减少运动时，加载动画会自动禁用，栏显示为全宽脉冲。
::

### Sticky

使用`sticky`属性使页眉或页脚具有粘性。

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
items:
  sticky:
    - true
    - false
props:
  sticky: true
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
    - id: '4595'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
    - id: '4594'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1 max-h-[312px]'
---
::

## 示例

### 使用行操作

您可以添加一个新列，在`cell`中呈现[DropdownMenu](/docs/components/dropdown-menu)组件，以呈现行操作。

::component-example
---
prettier: true
collapse: true
name: 'table-row-actions-example'
highlights:
  - 115
  - 141
class: '!p-0'
---
::

### 具有可扩展行

您可以添加一个新列，在`cell`中呈现[Button](/docs/components/button)组件，以使用TanStack Table [ Expanding APIs](https://tanstack.com/table/v8/docs/api/features/expanding)切换行的可扩展状态。

::caution
您需要定义`#expanded`插槽来呈现扩展的内容，它将接收行作为参数。
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-expandable-example'
highlights:
  - 55
  - 72
class: '!p-0'
---
::

::tip
您可以使用`expanded`属性来控制行的可扩展状态（可以与`v-model`绑定）。
::

::note
您还可以将此操作添加到`actions`列中的[`DropdownMenu`](/docs/components/dropdown-menu)组件。
::

### 具有分组行

您可以根据给定的列值对行进行分组，并使用TanStack Table [API Is](https://tanstack.com/table/v8/docs/api/features/grouping)通过添加到单元格的一些按钮显示/隐藏子行。

#### 重要部件

* 添加`grouping` prop，其中包含要分组的列ID数组。
* 添加`grouping-options` prop。它必须包含`getGroupedRowModel`，您可以从`@tanstack/vue-table`导入或实现自己的prop。
* 通过`row.toggleExpanded()`方法在行的任何单元格上扩展行。记住，它也切换`#expanded`插槽。
* 在列定义上使用`aggregateFn`来定义如何聚合行。
列定义上的* `agregatedCell`渲染器仅在没有`cell`渲染器的情况下有效。

::component-example
---
prettier: true
collapse: true
name: 'table-grouped-rows-example'
highlights:
  - 157
  - 160
class: '!p-0'
---
::

### 行固定：badge{label="4.6+" class="align-text-top"}

您可以在`cell`内添加一个呈现[Button](/docs/components/button)组件的列，以使用TanStack表[行固定API ](https://tanstack.com/table/v8/docs/api/features/row-pinning)切换行的固定状态。无论排序或筛选如何，固定的行都将位于表的顶部或底部。

::component-example
---
prettier: true
collapse: true
name: 'table-row-pinning-example'
overflowHidden: true
highlights:
  - 91
  - 107
  - 160
  - 165
  - 168
class: '!p-0'
---
::

::tip
您可以使用`row-pinning`属性来控制行的固定状态（可以使用`v-model`绑定）。
::

### 带行选择

您可以添加一个新列，在`header`和`cell`中呈现[Checkbox](/docs/components/checkbox)组件，以使用TanStack Table [ Row Selection API ](https://tanstack.com/table/v8/docs/api/features/row-selection)选择行。

::component-example
---
prettier: true
collapse: true
name: 'table-row-selection-example'
highlights:
  - 55
  - 72
class: '!p-0'
---
::

::tip
您可以使用`row-selection`属性来控制行的选择状态（可以与`v-model`绑定）。
::

### 带有行选择事件

您可以添加一个`@select`侦听器，使行可单击，无论是否有复选框列。

::note
handler函数分别接收`Event`和`TableRow`实例作为第一个和第二个参数。
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-select-event-example'
highlights:
  - 124
  - 131
class: '!p-0'
---
::

::tip
您可以使用它来导航到一个页面，打开一个模式，甚至手动选择行。
::

### 带有行上下文菜单事件

例如，您可以添加`@contextmenu`侦听器以使行可右键单击，并将Table包装在[ContextMenu](/docs/components/context-menu)组件中以显示行操作。

::note
handler函数分别接收`Event`和`TableRow`实例作为第一个和第二个参数。
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-context-menu-event-example'
highlights:
  - 133
  - 173
class: '!p-0'
---
::

### 带有行悬停事件

例如，您可以添加`@hover`侦听器以使行可悬停，并使用[Pover](/docs/components/popover)或[Tooltip](/docs/components/tooltip)组件来显示行详细信息。

::note
handler函数分别接收`Event`和`TableRow`实例作为第一个和第二个参数。
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-hover-event-example'
highlights:
  - 129
  - 152
class: '!p-0'
---
::

::note
此示例与以下光标example](/docs/components/popover#with-following-cursor)的Popover [类似，并使用[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)来防止在将光标从一行移动到另一行时Popover打开和关闭过快。
::

### 带列页脚

可以向列定义中添加`footer`属性，以呈现列的脚注。

::component-example
---
prettier: true
collapse: true
name: 'table-column-footer-example'
highlights:
  - 100
  - 112
class: '!p-0'
---
::

### 带列跨度

您可以使用`meta`列中的`colspan`和`rowspan`属性来合并单元格。这些属性接受静态值或接收单元格并返回跨度值的函数。

::note
当使用`rowspan`时，被前一行的跨度“吸收”的单元格需要在视觉上隐藏。使用`class` Meta一个函数，为这些单元格返回`'hidden'`。
::

::component-example
---
prettier: true
collapse: true
name: 'table-column-span-example'
class: '!p-0'
---
::

### 带列排序

您可以更新列`header`，以在`header`中呈现[Button](/docs/components/button)组件，从而使用TanStack Table [Sorting APIs](https://tanstack.com/table/v8/docs/api/features/sorting)切换排序状态。

在这些列上也设置`enableSorting: true`。这将`aria-sort`放在`<th>`上，以便屏幕阅读器可以读取列的当前排序状态：`none`，`ascending`或`descending`。`Button`保留更改它的控件。

::component-example
---
prettier: true
collapse: true
name: 'table-column-sorting-example'
highlights:
  - 90
  - 106
class: '!p-0'
---
::

::tip
您可以使用`sorting`属性来控制列的排序状态（可以与`v-model`绑定）。
::

您还可以创建一个可重用的组件来使任何列标题都可排序。

::component-example
---
prettier: true
collapse: true
name: 'table-column-sorting-reusable-example'
highlights:
  - 115
  - 166
class: '!p-0'
---
::

::note
在这个例子中，我们使用一个函数来定义列标题，但你也可以创建一个实际的组件。
::

### 带列固定

您可以更新列`header`，以在`header`中呈现[Button](/docs/components/button)组件，从而使用TanStack表[列固定APIs](https://tanstack.com/table/v8/docs/api/features/column-pinning)切换固定状态。

::note
固定的列将在表的左侧或右侧变得粘滞。使用列固定时，您应该为列定义显式的`size`值，以确保正确的列宽处理，特别是对于多个固定的列。
::

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-column-pinning-example'
highlights:
  - 108
  - 126
class: '!p-0 overflow-clip'
---
::

::tip
您可以使用`column-pinning`属性来控制列的固定状态（可以使用`v-model`绑定）。
::

### 具有列可见性

您可以使用[DropdownMenu](/docs/components/dropdown-menu)组件，通过TanStack表[列可见性APIs](https://tanstack.com/table/v8/docs/api/features/column-visibility)切换列的可见性。

::component-example
---
prettier: true
collapse: true
name: 'table-column-visibility-example'
highlights:
  - 121
  - 146
class: '!p-0'
---
::

::tip
您可以使用`column-visibility`属性来控制列的可见性状态（可以与`v-model`绑定）。
::

### 带列过滤器

您可以使用[Input](/docs/components/input)组件，通过TanStack Table [列过滤APIs](https://tanstack.com/table/v8/docs/api/features/column-filtering)按列过滤行。

::component-example
---
prettier: true
collapse: true
name: 'table-column-filters-example'
highlights:
  - 123
  - 128
class: '!p-0'
---
::

::tip
您可以使用`column-filters`属性来控制列的过滤器状态（可以与`v-model`绑定）。
::

### 带有全局过滤器

您可以使用[Input](/docs/components/input)组件，通过TanStack Table [全局过滤APIs](https://tanstack.com/table/v8/docs/api/features/global-filtering)过滤行。

::component-example
---
prettier: true
collapse: true
name: 'table-global-filter-example'
class: '!p-0'
highlights:
  - 116
---
::

::tip
您可以使用`global-filter`属性来控制全局过滤器状态（可以与`v-model`绑定）。
::

### 带分页

您可以使用[Pagination](/docs/components/pagination)组件通过[Pagination APIs](https://tanstack.com/table/v8/docs/api/features/pagination)控制分页状态。

有不同的分页方法，如[分页指南](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide)中所解释的。在这个例子中，我们使用客户端分页，所以我们需要手动传递`getPaginationRowModel()`{lang="ts-type"}函数。

::component-example
---
prettier: true
collapse: true
name: 'table-pagination-example'
class: '!p-0'
highlights:
  - 204
  - 209
---
::

::tip
您可以使用`pagination`属性来控制分页状态（可以与`v-model`绑定）。
::

### 使用获取的数据

您可以从API获取数据并在表中使用它们。

::component-example
---
prettier: true
collapse: true
name: 'table-fetch-example'
highlights:
  - 15
  - 26
class: '!p-0'
---
::

::note
这个例子使用`useLazyFetch`和`server: false`在客户端获取数据，而不阻塞初始渲染。加载状态检查`pending`和`idle`的状态，以在获取之前和期间显示加载指示器。
::

### 无限滚动

如果使用服务器端分页，则可以使用[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll)组合项在用户滚动时加载更多数据。

::component-example
---
prettier: true
collapse: true
highlights:
  - 72
  - 83
overflowHidden: true
name: 'table-infinite-scroll-example'
class: '!p-0'
---
::

::note
本例使用`useLazyFetch`和`server: false`在客户端上获取数据，而不会阻塞初始呈现。加载状态检查`pending`和`idle`的状态，以在获取之前和期间显示加载指示符。当用户滚动时，会加载其他页面。
::

### 使用拖放

您可以使用[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)中的[`useSortable`](https://vueuse.org/integrations/useSortable/)组合来启用Table上的拖放功能。此集成包装了[Sortable.js](https://sortablejs.github.io/Sortable/)，以提供无缝拖放体验。

::note
由于table ref没有公开tbody元素，所以通过`:ui` prop向它添加一个唯一的类，以便使用`useSortable`（例如`:ui="{ tbody: 'my-table-tbody' }"`）将其作为目标。
::

::component-example
---
prettier: true
collapse: true
highlights:
  - 81
  - 83
name: 'table-drag-and-drop-example'
class: '!p-0'
---
::

### 虚拟化：badge{label="4.1+" class="align-text-top"}

使用`virtualize` prop以布尔值或带有`{ estimateSize: 65, overscan: 12 }`等选项的对象的形式启用大型数据集的虚拟化。您还可以传递其他[TanStack Virtual选项](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options)以自定义虚拟化行为。`sticky` prop与`virtualize`结合使用，以在滚动大型数据集时保持页眉或页脚可见。

::warning
启用虚拟化时不支持行固定。
::

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-virtualize-example'
class: '!p-0'
---
::

::note
为了使虚拟化正常工作，需要对表进行高度限制（例如`class="h-[400px]"`）。
::

### 带有外部滚动元素：badge{label="4.10+" class="align-text-top"}

在`virtualize` prop中传递一个`getScrollElement`函数，以针对祖先滚动容器而不是表本身的根进行虚拟化。将`scrollMargin`设置为表从滚动元素开始的偏移量（例如，其上方内容的高度），因此表头和表体共享一个滚动条。

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-external-scroll-example'
class: '!p-0'
---
::

::note
在这种模式下，表根的`overflow`是`visible`，外部容器拥有两个轴上的滚动，所以给它`overflow-auto`（而不仅仅是`overflow-y-auto`）以保持宽表的水平滚动。然后`sticky`头部锚定到该容器。
::

### 使用树数据

您可以使用`get-sub-rows`属性在表中显示分层（树）数据。
例如，如果您的数据对象具有`children`数组，则将`:get-sub-rows="row => row.children"`设置为启用可扩展行。

::component-example
---
prettier: true
collapse: true
highlights:
  - 175
name: 'table-tree-data-example'
class: '!p-0'
---
::

### 带插槽

您可以使用插槽来自定义表格的标题和数据单元格。

使用`#<column>-header`插槽自定义列的标题。您将可以访问插槽范围中的`column`、`header`和`table`属性。

使用`#<column>-cell`插槽自定义列的单元格。您将可以访问插槽范围中的`cell`、`column`、`getValue`、`renderValue`、`row`和`table`属性。

::component-example
---
prettier: true
collapse: true
name: 'table-slots-example'
class: '!p-0'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
此组件还支持所有原生`<table>` HTML属性。
::

### Slots

:component-slots

### Expose

您可以使用[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)访问类型化的组件实例。

```vue
<script setup lang="ts">
const table = useTemplateRef('table')
</script>

<template>
  <UTable ref="table" />
</template>
```

这将使您能够访问以下内容：

| 名称|类型|
| ---- | ---- |
| `tableRef`{lang="ts-type"}| `Ref<HTMLTableElement \| null>`{lang="ts-type"}|
| `tableApi`{lang="ts-type"}| [`Table`{lang="ts-type"}](https://tanstack.com/table/v8/docs/api/core/table#table-api)|

## Theme

:component-theme

## Changelog

:component-changelog
