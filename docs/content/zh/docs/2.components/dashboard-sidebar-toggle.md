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

## 用法

DashboardSidebarToggle组件由[DashboardNavbar](/docs/components/dashboard-navbar)和[DashboardSidebar](/docs/components/dashboard-sidebar)组件使用。

它是自动显示在移动的切换侧边栏，**你不必手动添加**。

::component-code
---
hide:
  - class
props:
  class: 'lg:flex'
---
::

它扩展了[Button](/docs/components/button)组件，因此您可以传递任何属性，如`color`，`variant`，`size`等。

::component-code
---
hide:
  - class
ignore:
  - variant
props:
  variant: 'subtle'
  class: 'lg:flex'
---
::

::note
按钮默认为`color="neutral"`和`variant="ghost"`。
::

## 示例

###  `toggle`插槽内

即使此组件自动显示在移动的上，您也可以使用[仪表板Navbar](/docs/components/dashboard-navbar)和[仪表板Sidebar](/docs/components/dashboard-sidebar)组件的`toggle`插槽来自定义按钮。

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

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有原生`<button>` HTML属性。
::

## Theme

:component-theme

## Changelog

:component-changelog
