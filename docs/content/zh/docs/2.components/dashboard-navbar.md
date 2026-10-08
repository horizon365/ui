---
title: 仪表板导航栏
description: '在仪表板中显示的响应式导航栏。'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardNavbar.vue
---

## 使用情况

DashboardNavbar组件是一个响应式导航栏，它与[DashboardSidebar](/docs/components/dashboard-sidebar)组件集成在一起。它包括一个移动的切换按钮，用于在仪表板布局中启用响应式导航。

请在[DashboardPanel组件的`header`插槽中使用它：](/docs/components/dashboard-panel)

```vue [pages/index.vue]{9-11}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />
    </template>
  </UDashboardPanel>
</template>
```

使用`left`、`default`和`right`插槽来自定义导航栏。

::component-example
---
更漂亮：真的
名称：'仪表板-导航栏-示例'
类：“！px-0！pt-0”
道具：
  类别：'w-完整'
---
::

::note
在这个范例中，我们在右边的插槽中使用[Tabs](/docs/components/tabs)元件来显示一些索引标签。
::

### 标题

使用`title`道具设置导航栏的标题。

::component-code
---
隐藏：
  班级
道具：
  标题：“仪表板”
  类别：'w-完整'
类：“！px-0！pt-0”
---
::

### 图标

使用`icon`道具设置导航栏的图标。

::component-code
---
隐藏：
  班级
忽略：
  标题
道具：
  标题：“仪表板”
  图标：“i-lucide-house”
  类别：'w-完整'
类：“！px-0！pt-0”
---
::

开关

使用`toggle`属性可自定义显示在移动的上的切换按钮，该按钮用于打开[DashboardSidebar](/docs/components/dashboard-sidebar)组件。

您可以从[Button](/docs/components/button)组件传递任何属性来自订它。

::component-example
---
iframe：true
iframeMobile：真的
overflowHidden：真的
名称：'仪表板导航栏切换示例'
道具：
  类：'w-完整'
---
::

切换侧边

使用`toggle-side`道具来变更切换按钮的侧边。预设值为`right`。

::component-example
---
iframe：true
iframeMobile：真的
overflowHidden：真的
名称：'仪表板导航栏切换侧示例'
道具：
  类别：'w-完整'
---
::

活性成分

道具

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志
