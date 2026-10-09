---
title: 仪表板组
description: '一个固定的布局组件，为仪表板组件提供侧边栏状态管理和持久性的上下文。'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardGroup.vue
---

## 用法

DashboardGroup组件是包装[DashboardSidebar](/docs/components/dashboard-sidebar)和[DashboardPanel](/docs/components/dashboard-panel)组件以创建响应式仪表板界面的主布局。

在布局或`app.vue`中使用它：

```vue [layouts/dashboard.vue]{2,6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

## API

### Props

:component-props

### 老虎机

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
