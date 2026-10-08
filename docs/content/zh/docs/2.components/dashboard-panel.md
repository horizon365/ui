---
title: 仪表板面板
description: '要在仪表板中显示的可调整大小的面板。'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardPanel.vue
---

## 使用情况

DashboardPanel组件用于显示面板。它的状态（大小、折叠等）将根据您提供给[DashboardGroup](/docs/components/dashboard-group#props)组件的`storage`和`storage-key`属性进行保存。

在[DashboardGroup](/docs/components/dashboard-group)组件的默认插槽中使用它，您可以将多个面板并排放置：

```vue [pages/index.vue]{8,10}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel id="inbox-1" resizable />

  <UDashboardPanel id="inbox-2" class="hidden lg:flex" />
</template>
```

::caution
在不同页面中使用多个面板时，建议设置`id`以避免冲突。
::

::warning
在使用`resizable`属性时，此组件没有单个根元素，因此，如果您使用页面过渡效果或需要单个根元素进行布局，请将其包装在容器（例如`<div class="flex flex-1">`）中。
::

使用`header`、`body`和`footer`插槽自定义面板，或者如果不需要带填充的可滚动正文，则使用默认插槽。

::component-example
---
收阖：true
名称：'仪表板面板示例'
类：“！p-0！对齐-开始”
道具：
  最小大小：22
  默认大小：35
  最大大小：40
  类别：'！min-h-96 h-136'
---
::

::note
在大多数情况下，您将在`header`插槽中使用[`DashboardNavbar`](/docs/components/dashboard-navbar)组件。
::

可调整大小

使用`resizable`道具可调整面板的大小。

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
  主体：|

    042号
类：“！p-0！对齐-开始”
---

正文数
：占位符{class="h-96"}
::

尺寸

使用`min-size`、`max-size`和`default-size`道具来自订面板的大小。

::component-code
---
更漂亮：真的
忽略：
  可调整大小
隐藏：
  班级
道具：
  可调整大小：true
  最小大小：22
  默认大小：35
  最大大小：40
  类：“！min-h-96”
插槽：
  主体：|

    50秒
类：“！p-0！对齐-开始”
---

正文数
：占位符{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
默认情况下，大小是以百分比计算的。您可以使用`DashboardGroup`组件上的`unit`属性来更改此设置。
::

美国石油学会

道具

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志
