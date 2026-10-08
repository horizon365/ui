---
title: 仪表板组
description: '一个固定的布局组件，为仪表板组件提供侧边栏状态管理和持久性的上下文。'
category: dashboard
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardGroup.vue
---

## 使用情况

DashboardGroup组件是包装[DashboardSidebar](/docs/components/dashboard-sidebar)和[DashboardPanel](/docs/components/dashboard-panel)组件以创建响应式仪表板界面的主要布局。

在布局中或在`app.vue`中使用它：

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

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
