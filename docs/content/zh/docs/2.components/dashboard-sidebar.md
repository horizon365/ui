---
title: 仪表板侧边栏
description: '一个可调整大小和可折叠的侧边栏显示在仪表板。'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebar.vue
---

## 使用情况

DashboardSidebar组件用于在仪表板布局中显示侧栏。它支持通过拖动来调整大小、状态持久性，并与[DashboardGroup](/docs/components/dashboard-group)、“仪表板面板”和“仪表板导航栏”。

::tip{to="/docs/components/sidebar"}
**DashboardSidebar vs Sidebar**：此组件是为具有“拖动以调整大小”、状态持久性和`DashboardGroup`集成的仪表板布局而设计的。对于简单、独立的侧边栏（聊天面板、设置、导航），请改用[Sidebar](/docs/components/sidebar)。
::

它的状态（大小、折叠等）将根据您提供给[DashboardGroup](/docs/components/dashboard-group#props)组件的`storage`和`storage-key`属性进行保存。

请在[DashboardGroup](/docs/components/dashboard-group)组件的默认插槽中使用该窗口：

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

::warning
使用`resizable`属性时，此组件没有单个根元素，因此，如果您使用页面过渡效果或需要单个根元素进行布局，请将其包装在容器（例如`<div class="flex flex-1">`）中。
::

使用`header`、`default`和`footer`插槽自定义侧栏，使用`body`或`content`插槽自定义侧栏菜单。

::component-example
---
收阖：true
名称：'仪表板侧栏示例'
类：“！p-0！对齐-开始”
道具：
  最小大小：22
  默认大小：35
  最大大小：40
  类别：'！min-h-96 h-136'
---
::

::note
拖移屏幕左边缘附近的边栏以折叠它。
::

可调整大小

使用`resizable`道具可调整边栏的大小。

::component-code
---
更漂亮：真的
隐藏：
  - 最小尺寸
  - 默认大小
  - 最大尺寸
  班级
道具：
  可调整大小：true
  最小大小：22
  默认大小：35
  最大大小：40
  类：“！min-h-96”
插槽：
  默认值：|

    052号
类：“！p-0！对齐-开始”
---

：占位符{class="h-96"}
::

可折叠的

使用`collapsible`道具可在拖动到屏幕边缘附近时使边栏可折叠。

::warning
如果侧栏不是可折叠的，则)组件将无效。
::

::component-code
---
更漂亮：真的
忽略：
  可调整大小
隐藏：
  - 最小尺寸
  - 默认大小
  - 最大尺寸
  班级
道具：
  可调整大小：true
  可折叠：真
  最小大小：22
  默认大小：35
  最大大小：40
  类：“！min-h-96”
插槽：
  默认值：|

<Placeholder class="h-96" />，我的天
类：“！p-0！对齐-开始”
---

：占位符{class="h-96"}
::

::tip{to="#slots"}
您可以在插槽道具中访问`collapsed`状态，以自定义折叠侧栏时的内容。
::

尺寸

使用`min-size`、`max-size`、`default-size`和`collapsed-size`道具来自定义边栏的大小。

::component-code
---
更漂亮：真的
忽略：
  可调整大小
  可折叠的
隐藏：
  班级
道具：
  可调整大小：true
  可折叠：真
  最小大小：22
  默认大小：35
  最大大小：40
  折叠大小：0
  类：“！min-h-96”
插槽：
  默认值：|

    第079章
类：“！p-0！对齐-开始”
---

：占位符{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
默认情况下，大小是以百分比计算的。您可以使用`DashboardGroup`组件上的`unit`属性来更改此设置。
::

::note
默认情况下，`collapsed-size`属性设置为`0`，但侧栏中有一个`min-w-16`以确保其可见。
::

### 侧面

使用`side`道具来变更侧边栏的边。预设值为`left`。

::component-code
---
更漂亮：真的
忽略：
  可调整大小
- 可折叠
隐藏：
  - 最小尺寸
  - 默认大小
  - 最大尺寸
  班级
道具：
  侧边：“右”
  可调整大小：true
  可折叠：真
  最小大小：22
  默认大小：35
  最大大小：40
  类：“！min-h-96”
插槽：
  默认值：|

    095号
类：“！p-0！两端对齐-结束”
---

：占位符{class="h-96"}
::

模式

使用`mode`属性更改侧栏菜单的模式。默认为`slideover`。

请使用`body`插槽来填满功能表主体（在标题下方），或使用`content`插槽来填满整个功能表。

::tip{to="#props"}
您可以使用`menu`道具来自定义边栏的菜单，它会根据您选择的模式进行调整。
::

::component-example
---
收阖：true
iframe：
  高度：500 px;
iframeMobile：真的
overflowHidden：真的
名称：'仪表板侧栏模式示例'
可选项：
  - 名称：'模式'
    标签：'模式'
    默认值：'drawer'
    项目名称：
- 模态
- 滑过
      抽屉
道具：
  类别：'w-完整'
---
::

::note
这些示例包含[`DashboardGroup`](/docs/components/dashboard-group)、[`DashboardPanel`](/docs/components/dashboard-panel)和[`DashboardNavbar`](/docs/components/dashboard-navbar)组件，因为在移动的上演示侧栏需要这些组件。
::

切换开关

使用`toggle`属性可自定义在移动的上显示的[DashboardSidebarToggle](/docs/components/dashboard-sidebar-toggle)组件。

您可以从[Button](/docs/components/button)组件传递任何属性来自订该组件。

::component-example
---
收阖：true
iframe：
  高度：500 px;
iframeMobile：真的
overflowHidden：真的
名称：'仪表板侧栏切换示例'
道具：
  类别：'w-完整'
---
::

### 切换侧边

使用`toggle-side`道具来变更切换按钮的侧边。预设值为`left`。

::component-example
---
收阖：true
iframe：
  高度：500 px;
iframeMobile：真的
overflowHidden：真的
名称：'仪表板侧边栏切换侧边示例'
道具类：
  类别：'w-完整'
---
::

示例

### 控制打开状态

您可以使用`open`属性或`v-model:open`指示词来控制开启状态。

::component-example
---
iframe：
  高度：500 px;
iframeMobile：真的
overflowHidden：真的
名称：“仪表板侧栏打开示例”
类：“！p-0！对齐-开始”
---
::

::note
在此示例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按kbd{value="O"}来切换仪表板边栏的打开状态。
::

### 控件折叠状态

您可以使用`collapsed`属性或`v-model:collapsed`指示词来控制折迭状态。

::component-example
---
name：'dashboard-sidebar-browsed-example'
类：“！p-0！对齐-开始”
道具类：
  最小大小：22
  默认大小：35
  最大大小：40
  class：'！min-h-96 h-136'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="C"}来切换仪表板侧边栏的折叠状态。
::

## API

### Props

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
