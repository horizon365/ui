---
title: 仪表板侧边栏
description: '一个可调整大小和可折叠的侧边栏显示在仪表板。'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebar.vue
---

## 用法

DashboardSidebar组件用于在仪表板布局中显示侧边栏。它支持通过拖动来调整大小、状态持久性，并与[仪表板组](/docs/components/dashboard-group)、[仪表板面板](/docs/components/dashboard-panel)和[仪表板导航栏](/docs/components/dashboard-navbar)集成。

::tip{to="/docs/components/sidebar"}
**仪表板侧栏与侧栏**：此组件设计用于具有拖动以调整大小、状态持久性和`DashboardGroup`集成的仪表板布局。对于简单、独立的侧栏（聊天面板、设置、导航），请改用[Sidebar](/docs/components/sidebar)。
::

它的状态（大小、折叠等）将根据您提供给[DashboardGroup](/docs/components/dashboard-group#props)组件的`storage`和`storage-key`属性进行保存。

请在[DashboardGroup](/docs/components/dashboard-group)组件的默认插槽中使用该工具：

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

::warning
在使用`resizable`道具时，此组件没有单个根元素，因此，如果您使用页面过渡或需要单个根元素进行布局，请将其包装在容器（例如`<div class="flex flex-1">`）中。
::

使用`header`、`default`和`footer`插槽自定义边栏，使用`body`或`content`插槽自定义边栏菜单。

::component-example
---
collapse: true
name: 'dashboard-sidebar-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
拖移屏幕左边缘附近的边栏以折叠它。
::

### 可调整大小

使用`resizable`道具可调整边栏的大小。

::component-code
---
prettier: true
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

可折叠式

使用`collapsible`道具，在屏幕边缘附近拖动时，使侧栏可折叠。

::warning
如果边栏不是**collapsible**，则[`DashboardSidebarCollapse`](/docs/components/dashboard-sidebar-collapse)组件将不起作用。
::

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="#slots"}
您可以在插槽道具中访问`collapsed`状态，以在侧栏折叠时自定义其内容。
::

### 尺寸

使用`min-size`、`max-size`、`default-size`和`collapsed-size`道具来自定义边栏的大小。

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  collapsedSize: 0
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
默认情况下，大小是以百分比计算的。您可以使用`DashboardGroup`组件上的`unit`属性来更改此值。
::

::note
`collapsed-size`属性默认设置为`0`，但侧边栏中有一个`min-w-16`以确保其可见。
::

### 侧面

使用`side`道具来变更侧边栏的侧边。预设为`left`。

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  side: 'right'
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-end'
---

:placeholder{class="h-96"}
::

### 型

使用`mode`道具来变更侧边栏功能表的模式。预设为`slideover`。

使用`body`插槽填充菜单主体（标题下），或使用`content`插槽填充整个菜单。

::tip{to="#props"}
你可以使用`menu`道具来定制侧边栏的菜单，它会根据你选择的模式进行调整。
::

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'drawer'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::note
这些示例包含[`DashboardGroup`](/docs/components/dashboard-group)、[`DashboardPanel`](/docs/components/dashboard-panel)和[`DashboardNavbar`](/docs/components/dashboard-navbar)组件，因为在移动的上演示侧边栏时需要这些组件。
::

### 切换

使用`toggle`道具自定义显示在移动的上的[DashboardSidebarToggle](/docs/components/dashboard-sidebar-toggle)组件。

您可以从[Button](/docs/components/button)组件传递任何属性来对其进行自定义。

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-example'
props:
  class: 'w-full'
---
::

### 切换侧

使用`toggle-side`属性将切换按钮. push的侧面更改为`left`。

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-side-example'
props:
  class: 'w-full'
---
::

## 示例

### 控制打开状态

您可以使用`open` prop或`v-model:open`指令控制打开状态。

::component-example
---
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-open-example'
class: '!p-0 !justify-start'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="O"}切换仪表板侧边栏的打开状态。
::

### Control折叠状态

您可以使用`collapsed` prop或`v-model:collapsed`指令控制折叠状态。

::component-example
---
name: 'dashboard-sidebar-collapsed-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="C"}切换仪表板侧边栏的折叠状态。
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
