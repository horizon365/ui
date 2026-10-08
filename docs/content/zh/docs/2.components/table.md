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

## 使用情况

表组件构建在[TanStack表v8](https://tanstack.com/table/v8)之上，并由[useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable)提供支持，可组合以提供灵活且完全类型安全的API。

它将数据呈现为行和列，并支持排序、筛选、分页、行选择、扩展、分组、锁定和虚拟化，因此您可以构建从简单数据表到功能齐全的数据网格的所有内容。

::component-example
---
资料来源：错误
名称：'table-example'
类："! p-0"
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="查看源代码"}
这个例子演示了`Table`组件最常见的用例。请查看GitHub上的源代码。
::

数据

将`data`属性用作对象数组时，将根据对象的键生成列。

::component-code
---
更漂亮：真的
收阖：true
类："! p-0"
忽略：
- 数据
  班级
外部：
- 数据
道具：
  数据类型：
    "4600"是我的手机号码
      日期：'2024年3月11日15时30分'
      状态："已付"
      电子邮件："詹姆斯.安德森@www.example.com"
      数量：594
    "4599"是我的手机号码
      日期：'2024年3月11日10时10分'
      状态：'失败'
      电子邮件："mia. white@www.example.com"
      数量：276
    "4598"是我的手机号码
      日期：'2024年3月11日08：50：00'
      状态：'已退款'
      电子邮件："威廉.布朗@www.example.com"
      数量：315
    "4597"是我的手机号码
      日期：'2024年3月10日19时45分'
      状态："已付"
      电子邮件："emma. davis@www.example.com"
      总数：529
    "4596"是我的手机号码
      日期：'2024年3月10日15时55分'
      状态：“已付”
      电子邮件：“ethan. example.com”
      金额：639
  类别：'flex-1'
---
::

### 列

使用`columns`属性做为[ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def)物件的数组，其属性如下：

- `accessorKey`：[提取列的值时要使用的行对象的键。]{class="text-muted"}
- `header`：[要为列显示的标题。如果传递字符串，它可以用作列ID的默认值。如果传递函数，它将被传递标题的props对象，并且应该返回呈现的标题值（确切的类型取决于所使用的适配器）。]{class="text-muted"}
- [`footer`](#with-column-footer)：[要为该列显示的页脚。其作用与页眉完全相同，但显示在表的下面。]{class="text-muted"}
- `cell`：[要显示列的每一行的单元格。如果传递函数，则会传递该单元格的props对象，并应返回呈现的单元格值（确切类型取决于所使用的适配器）。]{class="text-muted"}
- `meta`：[该列的附加属性。]{class="text-muted"}
  - `class`：
    - `td`：[要应用于`td`元素的类。]{class="text-muted"}
    - `th`：[要应用于`th`元素的类。]{class="text-muted"}
  - `style`：
    - `td`：[要应用于`td`元素的样式。]{class="text-muted"}
    - `th`：[要套用至`th`元素的样式。]{class="text-muted"}
  - [`colspan`](#with-column-span)：
    - `td`：[要套用至`td`元素的colspan属性。]{class="text-muted"}
  - [`rowspan`](#with-column-span)：
    - `td`：[要套用至`td`元素的数据列范围属性。]{class="text-muted"}

若要呈现组件或其他HTML元素，您需要在`header`和`cell`属性中使用Vue[`h`函数](https://vuejs.org/api/render-function.html#h)。这与其他使用插槽的组件不同，但具有更大的灵活性。

::tip{to="#with-slots" aria-label="带插槽的表列"}
您也可以使用插槽自订表格的信头和数据储存格。
::

::component-example
---
更漂亮：真的
收阖：true
类：“！p-0”
名称：'表格-栏-范例'
亮点：
  第五十三章
  第一百零八章
---
::

::note
使用`h`呈现组件时，可以使用`resolveComponent`函数或从`#components`导入。
::

元数据

使用`meta`属性做为物件（[TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta)）来传递属性，例如：

- `class`：
  - `tr`：[要应用于`tr`元素的类。]{class="text-muted"}
111、112、
  - `tr`：[要套用至`tr`元素的样式。]{class="text-muted"}

::component-example
---
更漂亮：真的
收阖：true
名称：'数据表中继范例'
类：“！p-0”
亮点：
  128岁
- @140
---
::

正在加载

使用`loading`道具可显示加载状态，使用`loading-color`道具可更改其颜色，使用`loading-animation`道具可更改其动画。

::component-code
---
更漂亮：真的
收阖：true
类：“！p-0”
忽略：
- 数据
  124班
外部：
- 数据
道具：
  载入：true
  加载颜色：主色
  加载动画：轮播
  数据类型：
    4600，我的手机号是
      日期：'2024年3月11日15时30分'
      状态：“已付”
      电子邮件：“詹姆斯.安德森@ example.com”
      数量：594
    4599号手机
      日期：'2024年3月11日10时10分'
      状态：“失败”
      电子邮件：“mia.白色”example.com
      数量：276
    4598，我的手机号是
      日期：'2024年3月11日08：50：00'
      状态：'已退款'
      电子邮件：“威廉.布朗@ example.com”
      数量：315
    4597号手机
      日期：'2024年3月10日19时45分'
      状态：'已付'
      电子邮件：“emma. example.com”
      金额：529
    4596，我的手机号码是
      日期：'2024年3月10日15时55分'
      状态：“已付”
      电子邮件：“ethan. example.com”
      金额：639
  类别：'flex-1'
---
::

::tip
当用户偏好减少运动时，加载动画自动禁用，条形显示为全宽脉冲。
::

### 粘性

使用`sticky`属性使页眉或页脚具有粘性。

::component-code
---
更漂亮：真的
收阖：true
类：“！p-0”
忽略：
- 数据
  班级
外部：
- 数据
项目名称：
  粘性：
    真的
    不对
道具：
  粘滞：true
  数据类型：
    “4600”是我的手机号码
      日期：'2024年3月11日15时30分'
      状态：“已付”
      电子邮件：“詹姆斯.安德森@ example.com”
      数量：594
    4599号手机
      日期：'2024年3月11日10时10分'
      状态：“失败”
      电子邮件：“mia.白色”example.com
      数量：276
    4598，我的手机号是
      日期：'2024年3月11日08：50：00'
      状态：'已退款'
      电子邮件：“威廉.布朗@ example.com”
      数量：315
    4597号手机
      日期：'2024年3月10日19时45分'
      状态：“已付”
      电子邮件：“emma. example.com”
      金额：529
    4596，我的手机号是
      日期：'2024年3月10日15时55分'
      状态：“已付”
      电子邮件：“ethan. example.com”
      金额：639
    4595号手机
      日期：'2024年3月10日15时55分'
      状态：“已付”
      电子邮件：“ethan. example.com”
      金额：639
    4594，我的手机号是
      日期：'2024年3月10日15时55分'
      状态：“已付”
      电子邮件：“ethan. example.com”
      金额：639
  类别：'flex-1最大值-小时-[312像素]'
---
::

示例

### 使用行操作

您可以在`cell`内新增一个可呈现[DropdownMenu](/docs/components/dropdown-menu)组件的栏，以呈现列动作。

::component-example
---
更漂亮：真的
收阖：true
名称：'表格-列-动作-范例'
亮点：
  115分
  141号
类：“！p-0”
---
::

### 使用可展开的列

您可以加入新的数据行，以在`cell`内呈现[Button](/docs/components/button)元件，以使用TanStack数据表切换数据列的可展开状态[Expanding APIs](https://tanstack.com/table/v8/docs/api/features/expanding)。

::caution
您需要定义`#expanded`槽来呈现将接收行作为参数的展开内容。
::

::component-example
---
更漂亮：真的
收阖：true
名称：'表格列可扩充范例'
亮点：
  165分55秒
  72岁
类：“！p-0”
---
::

::tip
您可以使用`expanded`属性来控制列的可展开状态（可以与`v-model`系结）。
::

::note
您也可以将此动作加入[`DropdownMenu`](/docs/components/dropdown-menu)元件的`actions`栏中。
::

### 使用分组行

您可以根据给定的列值对行进行分组，并使用TanStack表通过添加到单元格中的某个按钮显示/隐藏子行[Grouping APIs](https://tanstack.com/table/v8/docs/api/features/grouping)。

重要部件：

* Add`grouping`属性，该属性包含要作为分组依据列ID数组。
* Add`grouping-options`属性它必须包括`getGroupedRowModel`，您可以从`@tanstack/vue-table`导入它或实现您自己属性
* 通过`row.toggleExpanded()`方法在行的任意单元格上展开行。请记住，它也会切换`#expanded`槽。
* 在列定义上使用`aggregateFn`来定义如何聚合行。
只有在没有`cell`呈现器时，列定义上* `agregatedCell`呈现器才起作用

::component-example
---
更漂亮：真的
收阖：true
名称：'表格分组行示例'
亮点：
  157分
- 小时160小时
类：“！p-0”
---
::

### 使用行锁定：标记{label="4.6+" class="align-text-top"}

可以添加一个在`cell`内呈现[Button](/docs/components/button)组件的列，以使用TanStack表[Row Pinning APIs](https://tanstack.com/table/v8/docs/api/features/row-pinning)切换行的锁定状态。锁定的行将保留在表的顶部或底部，而不管是排序还是筛选。

::component-example
---
更漂亮：真的
收阖：true
名称：'表行固定示例'
overflowHidden：真的
亮点：
  91号
  107号
  PH210160
  165分
  168度
类：“！p-0”
---
::

::tip
您可以使用`row-pinning`属性来控制数据列的固定状态（可以使用`v-model`来系结）。
::

### 使用行选择

您可以新增一个新数据行，在`header`和`cell`内呈现[Checkbox](/docs/components/checkbox)元件，以使用TanStack数据表[Row Selection API](https://tanstack.com/table/v8/docs/api/features/row-selection)来选取数据列。

::component-example
---
更漂亮：真的
收阖：true
名称：'表格-行-选择-示例'
亮点：
  226分55秒
  72岁
类：“！p-0”
---
::

::tip
您可以使用`row-selection`属性来控制列的选取状态（可以与`v-model`系结）。
::

### 使用行选择事件

您可以添加`@select`侦听器，以使行可单击（无论是否带有复选框列）。

::note
行程常式函数会分别接收`Event`和`TableRow`实体做为第一个和第二个参数。
::

::component-example
---
更漂亮：真的
收阖：true
名称：'表格-列-选取-事件-范例'
亮点：
  124号
  131号
类：“！p-0”
---
::

::tip
您可以使用它来导航到页面、打开模式，甚至手动选择行。
::

### With行上下文菜单事件

例如，您可以添加`@contextmenu`侦听器以使行可右键单击，并将表包装在[ContextMenu](/docs/components/context-menu)组件中以显示行操作.

::note
行程常式函数会分别接收`Event`和`TableRow`实体做为第一个和第二个参数。
::

::component-example
---
更漂亮：真的
收阖：true
名称：'表格-列-内容-功能表-事件-范例'
亮点：
  133号
  173度
类：“！p-0”
---
::

### 使用行悬停事件

例如，您可以添加`@hover`侦听器以使行可悬停，并使用[Popover](/docs/components/popover)或[Tooltip](/docs/components/tooltip)组件来显示行详细信息。

::note
行程常式函数会分别接收`Event`和`TableRow`实体做为第一个和第二个参数。
::

::component-example
---
更漂亮：真的
收阖：true
名称：'表格-列-悬停-事件-示例'
亮点：
  129岁
  152岁
类：“！p-0”
---
::

::note
此示例与Popover[类似，但具有以下游标示例：](/docs/components/popover#with-following-cursor)，并使用[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)来防止在将游标从一行移动到另一行时Popover打开和关闭得过快。
::

### 使用列页脚

您可以将`footer`属性加入至数据行定义，以呈现数据行的页尾。

::component-example
---
更漂亮：真的
收阖：true
名称：'表格栏页尾范例'
亮点：
- @100个单位
  112号
类：“！p-0”
---
::

### 具有列跨度

可以使用列`meta`中的`colspan`和`rowspan`属性来合并单元格。这些属性接受静态值或接收单元格并返回范围值的函数。

::note
使用`rowspan`时，需要在视觉上隐藏由上一行的范围“吸收”的单元格。请将`class` Meta与返回这些单元格的`'hidden'`的函数一起使用。
::

::component-example
---
更漂亮：真的
收阖：true
名称：'表格-栏-范围-范例'
类：“！p-0”
---
::

使用列排序

可以更新列`header`以呈现`header`内的[Button](/docs/components/button)组件，从而使用TanStack表[Sorting APIs](https://tanstack.com/table/v8/docs/api/features/sorting)来切换排序状态。

在这些列上也设置`enableSorting: true`。这会将`aria-sort`放在`<th>`上，以便屏幕阅读器可以读取列的当前排序状态：`none`、`ascending`或`descending`。`Button`将保留更改它的控件。

::component-example
---
更漂亮：真的
收阖：true
名称：'表格-栏-排序-范例'
亮点：
  90分
  106号线
类：“！p-0”
---
::

::tip
您可以使用`sorting`属性来控制数据行的排序状态（可以与`v-model`系结）。
::

您还可以创建一个可重用组件，使任何列标题都可排序。

::component-example
---
更漂亮：真的
收阖：true
名称：'表列排序可重用示例'
亮点：
- ，115
  166号
类：“！p-0”
---
::

::note
在本例中，我们使用一个函数来定义列标题，但您也可以创建一个实际组件。
::

### 带柱锁定

可以更新列`header`以呈现`header`内的[Button](/docs/components/button)组件，从而使用TanStack表[Column Pinning APIs](https://tanstack.com/table/v8/docs/api/features/column-pinning)来切换固定状态。

::note
固定的列将粘在表的左侧或右侧。使用列固定时，您应该为列定义显式的`size`值，以确保正确处理列宽，尤其是对于多个固定的列。
::

::component-example
---
更漂亮：真的
收阖：true
overflowHidden：真的
名称：'表格-栏-固定-范例'
亮点：
  PH316108
  126号
类：“！p-0溢出剪辑”
---
::

::tip
您可以使用`column-pinning`属性来控制数据行的固定状态（可以与`v-model`系结）。
::

### 使用列可见性

您可以使用[DropdownMenu](/docs/components/dropdown-menu)组件，透过TanStack数据表[Column Visibility APIs](https://tanstack.com/table/v8/docs/api/features/column-visibility)来切换数据行的可见性。

::component-example
---
更漂亮：真的
收阖：true
名称：'表列可见性示例'
亮点：
  121号线
- @146
类：“！p-0”
---
::

::tip
您可以使用`column-visibility`属性来控制数据行的可见性状态（可以与`v-model`系结）。
::

使用列筛选器

您可以使用[Input](/docs/components/input)元件，透过TanStack数据表[Column Filtering APIs](https://tanstack.com/table/v8/docs/api/features/column-filtering)来筛选每一个数据行。

::component-example
---
更漂亮：真的
收阖：true
名称：'表格-栏-筛选器-范例'
亮点：
  123号
  128号
类：“！p-0”
---
::

::tip
您可以使用`column-filters`属性来控制数据行的筛选状态（可以与`v-model`系结）。
::

使用全局筛选器

您可以使用[Input](/docs/components/input)组件，通过TanStack表[全局筛选API](https://tanstack.com/table/v8/docs/api/features/global-filtering)来筛选行。

::component-example
---
更漂亮：真的
收阖：true
名称：'表格全域筛选范例'
类：“！p-0”
亮点：
  116号
---
::

::tip
您可以使用`global-filter`属性来控制全域筛选器状态（可以与`v-model`系结）。
::

使用分页功能

您可以使用[Pagination](/docs/components/pagination)组件，透过[Pagination API](https://tanstack.com/table/v8/docs/api/features/pagination)来控制分页状态。

[Pagination Guide](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide)中说明了不同分页方法在此示例中，我们使用客户端分页，因此需要手动传递`getPaginationRowModel()`{lang="ts-type"}函数

::component-example
---
更漂亮：真的
收阖：true
名称：'表格分页范例'
类：“！p-0”
亮点：
  204号
  209号
---
::

::tip
您可以使用`pagination`属性来控制分页状态（可以与`v-model`绑定）。
::

### 使用提取的数据

您可以从API获取数据并在表中使用它们。

::component-example
---
更漂亮：真的
收阖：true
名称：'数据表撷取范例'
亮点：
  15岁
  26岁
类：“！p-0”
---
::

::note
此示例使用`useLazyFetch`和`server: false`在客户端上提取数据，而不阻止初始呈现。加载状态检查`pending`和`idle`的状态，以在提取之前和提取过程中显示加载指示器。
::

使用无限滚动

如果您使用服务器端分页，则可以使用[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll)可组合项在用户滚动时加载更多数据。

::component-example
---
更漂亮：真的
收阖：true
亮点：
  PH 39072小时
  83号
overflowHidden：真的
名称：'表格无限卷动范例'
类：“！p-0”
---
::

::note
此示例使用`useLazyFetch`和`server: false`在客户端上提取数据，而不阻止初始呈现。加载状态检查`pending`和`idle`的状态，以在提取之前和提取过程中显示加载指示器。用户滚动时将加载其他页面。
::

使用拖放

您可以使用可从[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)组合的[`useSortable`](https://vueuse.org/integrations/useSortable/)来启用数据表上的拖放功能。此整合会包装[Sortable.js](https://sortablejs.github.io/Sortable/)以提供无缝拖放体验。

::note
由于表引用不公开tbody元素，因此请通过`:ui`属性为其添加一个唯一的类，以便使用`useSortable`（例如`:ui="{ tbody: 'my-table-tbody' }"`）将其作为目标。
::

::component-example
---
更漂亮：真的
收阖：true
亮点：
  81岁
  83岁
名称：'表格拖放示例'
类：“！p-0”
---
::

### 借助虚拟化：徽标{label="4.1+" class="align-text-top"}

使用`virtualize`属性可将大型数据集的虚拟化作为布尔值或带有`{ estimateSize: 65, overscan: 12 }`等选项的对象来启用。您还可以传递其他[TanStack虚拟选项](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options)来自定义虚拟化行为。`sticky`属性可与`virtualize`一起使用以在卷动大型数据集时，保持页首或页尾可见。

::warning
启用虚拟化时不支持行固定。
::

::component-example
---
更漂亮：真的
收阖：true
overflowHidden：真的
名称：“表虚拟化示例”
类：“！p-0”
---
::

::note
为了使虚拟化正常工作，需要对桌面进行高度限制（例如`class="h-[400px]"`）。
::

### 带有外部滚动元素：徽标{label="4.10+" class="align-text-top"}

在`virtualize`属性中传递`getScrollElement`函数，以便根据祖先滚动容器而不是表自己的根进行虚拟化。将`scrollMargin`设置为表相对于滚动元素起始位置的偏移量（例如，其上内容的高度），以便表头和表体共享一个滚动条。

::component-example
---
更漂亮：真的
收阖：true
overflowHidden：真的
名称：'表格外部卷动范例'
类：“！p-0”
---
::

::note
在此模式下，表格根目录的`overflow`是`visible`，而外部容器拥有两个轴上的卷动功能，因此请指定它`overflow-auto`（而非`overflow-y-auto`），以保持宽表格可水平卷动。然后，`sticky`信头会锚定至该容器。
::

使用树数据

您可以使用`get-sub-rows`属性来显示数据表中的阶层式（树状）数据。
例如，如果您的数据物件有`children`数组，请设定`:get-sub-rows="row => row.children"`以启用可展开的列。

::component-example
---
更漂亮：真的
收阖：true
亮点：
  175分
名称：'表格-树状结构-数据-范例'
类：“！p-0”
---
::

带插槽的

您可以使用槽自定义表格的标题和数据单元格。

使用`#<column>-header`槽可自定义列标题。您将可以访问槽范围中的`column`、`header`和`table`属性。

使用`#<column>-cell`槽可自定义列的单元格。您将可以访问槽作用域中的`cell`、`column`、`getValue`、`renderValue`、`row`和`table`属性。

::component-example
---
更漂亮：真的
收阖：true
名称：'table-slots-example'（表插槽示例）
类：“！p-0”
---
::

活性成分

道具

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
此组件还支持所有本机`<table>`HTML属性。
::

插槽

：组件插槽

暴露

您可以使用[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)来存取具型别的元件执行严修。

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
| 475号公路|474号|
| 483号公路|479，478，484，480，481，482，|

主题

：组件主题

## Changelog

：组件更改日志
