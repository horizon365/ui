---
title: 仪表板
description: '显示在仪表板导航栏下的工具栏。'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardToolbar.vue
---

## 用法

仪表板工具栏组件用于在[DashboardNavbar](/docs/components/dashboard-navbar)组件下显示工具栏。

请在[仪表板面板](/docs/components/dashboard-panel)组件的`header`插槽中使用该工具：

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
prettier: true
name: 'dashboard-toolbar-example'
class: '!px-0 !pt-0'
props:
  class: 'w-full'
---
::

::note
在本例中，我们使用[NavigationMenu](/docs/components/navigation-menu)组件来呈现一些链接。
::

应用程序接口

### 道具

:component-props

### 插槽

:component-slots

## 主题

:component-theme

## 更改日志

:component-changelog
