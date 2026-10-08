---
title: 仪表板侧边栏切换
description: '在移动的上切换侧边栏的按钮。'
category: dashboard
links:
  - label: 按钮
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarToggle.vue
---

## 使用情况

DashboardSidebarToggle组件由[DashboardNavbar](/docs/components/dashboard-navbar)和[DashboardSidebar](/docs/components/dashboard-sidebar)组件使用。

在移动的上自动显示切换侧边栏，**无需手动添加**。

::component-code
---
隐藏：
  - class
道具：
  class：'lg：flex'
---
::

它扩展了[Button](/docs/components/button)组件，因此您可以传递任何属性，如`color`、`variant`、`size`等。

::component-code
---
隐藏：
  - class
忽略：
  - variant
道具：
  变体：“细微”
  class：'lg：flex'
---
::

::note
按钮默认为`color="neutral"`和`variant="ghost"`。
::

## 示例

### `toggle`插槽内

即使此组件自动显示在移动的上，您也可以使用[DashboardNavbar](/docs/components/dashboard-navbar)和[DashboardSidebar](/docs/components/dashboard-sidebar)组件的`toggle`插槽自定义按钮。

::code-group

```vue [layouts/dashboard.vue]{4-6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <template #toggle>
        <UDashboardSidebarToggle variant="subtle" />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

```vue [pages/index.vue]{11-13}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Home">
        <template #toggle>
          <UDashboardSidebarToggle variant="subtle" />
        </template>
      </UDashboardNavbar>
    </template>
  </UDashboardPanel>
</template>
```

::

::tip
当使用`DashboardSidebar`和`DashboardNavbar`组件的`toggle-side`道具时，按钮将显示在指定的一侧。
::

## API

### Props

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有本机`<button>`HTML属性。
::

## Theme

：组件主题

## Changelog

：组件更改日志
