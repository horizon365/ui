---
description: '一个可折叠的侧边栏与多个视觉变量。'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

## 使用情况

侧边栏组件是一个独立的、固定的侧边栏，用于推送页面内容。在桌面上，它呈现为内联，并可以折叠;在移动的上，它会打开一个[Modal](/docs/components/modal)，请将幻灯片移到](/docs/components/slideover)或[](/docs/components/drawer)的抽屉上。

::tip{to="/docs/components/dashboard-sidebar"}
**侧边栏与仪表板侧边栏**：此组件是一个简单的独立侧栏，您可以将其放在任何位置（聊天面板、设置、导航）。如果您需要通过拖动来调整大小、状态持久性以及与[DashboardGroup](/docs/components/dashboard-group)的集成，请使用“仪表板边栏”。
::

使用`header`、`default`和`footer`插槽自定义侧栏内容。`v-model:open`指令是可感知视口的：在桌面上，它控制展开/折叠状态;在移动的设备上，它控制菜单。

::component-example
---
收阖：true
更漂亮：真的
名称：'边栏示例'
overflowHidden：真的
类：“！p-0！对齐-开始h-[500 px]包含-[绘制]转换-图形处理器”
---
::

变体

使用`variant`道具来变更提要字段的视觉样式。预设为`sidebar`。

::component-example
---
收阖：true
更漂亮：真的
名称：'边栏-道具-示例'
overflowHidden：真的
可选项：
- 名称：“变量”
    标签：'variant'
    项目名称：
      边栏
      浮动的
      插入式
    默认值：'inset'
类：“！p-0！对齐-开始h-[500 px]包含-[绘制]转换-图形处理器”
---
::

可折叠的

使用`collapsible`属性更改边栏的折叠行为。默认为`offcanvas`。

- `offcanvas`：侧栏完全滑出视图。
- `icon`：侧栏收缩为仅图标宽度。
- `none`：侧栏不可折叠。

::component-example
---
收阖：true
更漂亮：真的
名称：'边栏-道具-示例'
overflowHidden：真的
可选项：
  - 名称：“可折叠”
    标签：“可折叠”
    项目名称：
      画布外的
      图标
      无
    默认值：'icon'
  名称：'变量'
    标签：'variant'
    项目名称：
      边栏
      浮动的
      插入式
    默认值：“边栏”
类：“！p-0！对齐-开始h-[500 px]包含-[绘制]转换-图形处理器”
---
::

::tip{to="#slots"}
您可以访问插槽道具中的`state`，以自定义折叠侧栏时的内容。
::

### 侧边

使用`side`道具来变更侧边栏的侧边。预设值为`left`。

::component-example
---
收阖：true
更漂亮：真的
名称：'边栏-道具-示例'
overflowHidden：真的
可选项：
  名称：“边”
    标签：'边'
    项目名称：
      左边的
      对了
    默认值：'right'
类：“！p-0！对齐-开始h-[500 px]包含-[绘制]转换-图形处理器”
---
::

标题：

使用`title`道具设置侧栏标题的标题。

::component-code
---
更漂亮：真的
隐藏：
  班级
  你好
忽略：
  - 用户界面容器
道具：
  标题：导航
  用户界面：
    容器：h-满
插槽：
  默认值：|

    063号
类：“！p-0！对齐-开始h-[500 px]包含-[绘制]转换-图形处理器”
---

：占位符{class="h-full"}
::

说明：

使用`description`属性设置侧栏标题的说明。

::component-code
---
更漂亮：真的
隐藏：
  班级
  你好
忽略：
  标题：
  集装箱
道具：
  标题：导航
  description：浏览您的工作区
  用户界面：
    容器：h-满
插槽：
  默认值：|

    071号
类：“！p-0！对齐-开始h-[500 px]包含-[绘制]转换-图形处理器”
---

：占位符{class="h-full"}
::

轨道

使用`rail`道具可在边栏上显示一个交互式细边，单击该边栏可切换折叠状态。仅当`collapsible`不是`none`时，才会呈现扶手。

::component-code
---
更漂亮：真的
忽略：
  标题：
  集装箱
隐藏：
  你好
  班级
道具：
  轨道：真
  可折叠：图标
  标题：导航
  ui.容器：h-满
插槽：
  默认值：|

<Placeholder class="h-full" />，你好
类：“！p-0！对齐-开始h-[500 px]包含-[绘制]转换-图形处理器”
---

：占位符{class="h-full"}
::

### 关闭

使用`close`属性在提要字段标题中显示关闭按钮。只有当`collapsible`不是`none`时，才会显示关闭按钮。

您可以从[Button](/docs/components/button)组件传递任何属性来自订该组件。

::component-code
---
更漂亮：真的
忽略：
  标题：
  轨道
  用户界面容器
隐藏：
  我的天
  班级
道具：
  关闭：true
  轨道：真
  可折叠：图标
  标题：导航
  用户界面：
    容器：h-已满
项目名称：
  结束语：
    真的
    不对
插槽：
  默认值：|

    098号
类：“！p-0！对齐-开始h-[500 px]包含-[绘制]转换-图形处理器”
---

：占位符{class="h-full"}
::

### 关闭图标

使用`close-icon`道具来自订关闭按钮[Icon](/docs/components/icon)。预设值为`i-lucide-x`。

::component-code
---
更漂亮：真的
忽略：
  标题
- 钢轨
- 侧
- 关闭
- ui.container容器
隐藏：
- 用户界面
  班级
道具：
  关闭：true
  关闭图标：i-lucide-面板-右-关闭
  轨道：真
  可折叠：图标
  侧面：右侧
  标题：导航
  用户界面：
    容器：h-满
项目名称：
  结束语：
    真的
    错误的
插槽：
  默认值：|

<Placeholder class="h-full" />级
类："! p-0!对齐-开始h-[500px]包含-[绘制]转换-图形处理器"
---

：占位符{class="h-full"}
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.close`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.close`键下全局自定此图标。
:::
::

模式

使用`mode`属性更改移动设备上的侧边栏菜单模式。默认为`slideover`。

::component-example
---
收阖：true
iframe：
  高度：500px;
iframeMobile：真的
overflowHidden：真的
名称：'边栏模式示例'
可选项：
  - 名称：'模式'
    标签：'模式'
    预设值：“滑过”
    项目名称：
- 模态
- 滑过
      抽屉
道具：
  类别：'w-完整'
---
::

::tip{to="#props"}
您可以使用`menu`道具来自定义边栏的菜单，它会根据您选择的模式进行调整。
::

示例：

### 控制打开状态

您可以使用`open`属性或`v-model:open`指示词来控制开启状态。在桌面上，它会控制展开/折迭状态，在行动装置上，它会开启/关闭工作表功能表。

::component-example
---
收阖：true
更漂亮：真的
名称：'边栏-打开-示例'
overflowHidden：真的
类："! p-0!对齐-开始h-[500px]包含-[绘制]转换-图形处理器"
---
::

::note
在此示例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按下：kbd{value="O"}来切换边栏的打开状态。
::

### 保持打开状态

使用VueUse中的[`useLocalStorage`](https://vueuse.org/core/useLocalStorage/)或[`useCookie`](https://nuxt.com/docs/4.x/api/composables/use-cookie)（而不是`ref`），可在页面重新加载过程中保持侧边栏状态。

::component-example
---
收阖：true
更漂亮：真的
名称：'侧栏持久性示例'
overflowHidden：真的
类："! p-0!对齐-开始h-[500px]包含-[绘制]转换-图形处理器"
---
::

::note
与上一个示例的唯一区别是将`ref(true)`替换为`useLocalStorage('sidebar-open', true)`。
::

### 使用自定义宽度

侧边栏宽度由`--sidebar-width`CSS变量控制（默认为`16rem`）。折叠图标宽度由`--sidebar-width-icon`控制（默认为`4rem`）。

使用`style`属性在CSS中全局覆盖它们或按实例覆盖它们。

::component-example
---
收阖：true
更漂亮：真的
名称：'边栏宽度示例'
overflowHidden：真的
类："! p-0!对齐-开始h-[500px]包含-[绘制]转换-图形处理器"
---
::

### 带页眉

若要将提要字段放置在[标题](/docs/components/header)下方，请使用`ui`属性自订`gap`和`container`。

::component-example
---
收阖：true
更漂亮：真的
名称：'边栏标题示例'
overflowHidden：真的
类："! p-0!对齐-开始h-[500px]包含-[绘制]转换-图形处理器"
---
::

::note
`--ui-header-height`变量默认为`4rem`，并由标题使用。如果导航栏使用不同的高度，请调整该变量。
::

### 使用人工智能聊天

使用右侧的侧边栏和[ChatMessages](/docs/components/chat-messages)和[ChatPrompt](/docs/components/chat-prompt)来创建人工智能聊天面板。

::component-example
---
收阖：true
更漂亮：真的
名称：'边栏-聊天-示例'
overflowHidden：真的
类："! p-0!对齐-开始h-[500px]包含-[绘制]转换-图形处理器"
---
::

美国石油学会

### Props

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
