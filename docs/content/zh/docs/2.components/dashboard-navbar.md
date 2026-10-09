---
title: 仪表板导航栏
description: '在仪表板中显示的响应式导航栏。'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardNavbar.vue
---

## 用法

DashboardNavbar组件是与[DashboardSidebar](/docs/components/dashboard-sidebar)组件集成的响应式导航栏。它包括一个移动的切换按钮，用于在仪表板布局中启用响应式导航。

请在[仪表板面板](/docs/components/dashboard-panel)组件的`header`插槽中使用该工具：

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

使用`left`、`default`和`right`插槽自定义导航栏。

::component-example
---
prettier: true
name: 'dashboard-navbar-example'
class: '!px-0 !pt-0'
props:
  class: 'w-full'
---
::

::note
在本例中，我们使用右侧插槽中的[Tabs](/docs/components/tabs)组件来显示一些选项卡。
::

### 标题

使用`title`道具设置导航栏的标题。

::component-code
---
hide:
  - class
props:
  title: 'Dashboard'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

### 图标

使用`icon`道具设置导航栏的图标。

::component-code
---
hide:
  - class
ignore:
  - title
props:
  title: 'Dashboard'
  icon: 'i-lucide-house'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

### 切换

使用`toggle`属性自定义移动的上显示的切换按钮，该按钮用于打开[DashboardSidebar](/docs/components/dashboard-sidebar)组件。

您可以从[Button](/docs/components/button)组件传递任何属性，以自订该组件。

::component-example
---
iframe: true
iframeMobile: true
overflowHidden: true
name: 'dashboard-navbar-toggle-example'
props:
  class: 'w-full'
---
::

### 切换侧边

使用`toggle-side`属性来变更切换按钮的边。预设为`right`。

::component-example
---
iframe: true
iframeMobile: true
overflowHidden: true
name: 'dashboard-navbar-toggle-side-example'
props:
  class: 'w-full'
---
::

## 应用程序接口

### 道具

:component-props

x插槽

:component-slots

## 主题

:component-theme

## 更改日志

:component-changelog
