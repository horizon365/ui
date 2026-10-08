---
title: 仪表板
description: '显示在仪表板导航栏下的工具栏。'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardToolbar.vue
---

## 使用情况

仪表板工具栏组件用于在[DashboardNavbar](/docs/components/dashboard-navbar)组件下显示工具栏。

请在[DashboardPanel组件的`header`插槽中使用它：](/docs/components/dashboard-panel)

```vue [pages/index.vue]{9-13}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />

      <UDashboardToolbar />
    </template>
  </UDashboardPanel>
</template>
```

使用`left`、`default`和`right`插槽自定义工具栏。

::component-example
---
更漂亮：真的
名称：'仪表板工具栏示例'
类：“！px-0！pt-0”
道具：
  类别：'w-完整'
---
::

::note
在这个范例中，我们会使用[NavigationMenu](/docs/components/navigation-menu)元件来转译一些链接。
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
