---
title: 仪表板侧边栏折叠
description: '一个按钮，折叠桌面上的侧边栏。'
category: dashboard
links:
  - label: 按钮
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarCollapse.vue
---

## 使用情况

DashboardSidebarCollapse组件用于在设置`collapsible`属性时折叠/展开[DashboardSidebar](/docs/components/dashboard-sidebar)组件****。

：组件代码

它扩展了[Button](/docs/components/button)组件，因此您可以传递任何属性，如`color`、`variant`、`size`等。

::component-code
---
忽略：
  - variant
道具：
  变体：“细微”
---
::

::note
按钮默认为`color="neutral"`和`variant="ghost"`。
::

## Examples

### `header`插槽内

您可以将此组件放在[DashboardSidebar](/docs/components/dashboard-sidebar)组件的`header`插槽中，并使用`collapsed`道具隐藏标题的左侧部分，例如：

```vue [layouts/dashboard.vue]{4-8}
<template>
  <UDashboardGroup>
    <UDashboardSidebar collapsible>
      <template #header="{ collapsed }">
        <Logo v-if="!collapsed" />

        <UDashboardSidebarCollapse variant="subtle" />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

### `leading`插槽内

您可以将此组件放在[DashboardNavbar](/docs/components/dashboard-navbar)组件的`leading`插槽中，以将其显示在标题之前，例如：

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
        <template #leading>
          <UDashboardSidebarCollapse variant="subtle" />
        </template>
      </UDashboardNavbar>
    </template>
  </UDashboardPanel>
</template>
```

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
