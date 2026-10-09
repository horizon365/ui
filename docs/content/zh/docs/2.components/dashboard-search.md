---
title: 仪表板搜索
description: '一个随时可用的命令行添加到您的仪表板。'
category: dashboard
links:
  - label: 指挥官
    to: /docs/components/command-palette
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearch.vue
---

## 用法

DashboardSearch组件扩展了[CommandPalette](/docs/components/command-palette)组件，因此您可以传递任何属性，如`icon`、`placeholder`等。

在[DashboardGroup](/docs/components/dashboard-group)组件的默认插槽中使用它：

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <UDashboardSearchButton />
    </UDashboardSidebar>

    <UDashboardSearch />

    <slot />
  </UDashboardGroup>
</template>
```

::tip
您可以通过按：kbd{value="meta"}：kbd{value="K" class="ms-px"}、使用[DashboardSearchButton](/docs/components/dashboard-search-button)组件或使用`v-model:open`{lang="ts"}指令来打开命令栏。
::

xph032

使用`shortcut`属性将[defineShortcuts](/docs/composables/define-shortcuts)中用于打开ContentSearch组件的快捷方式. png更改为`meta_k`（：kbd{value="meta"}：kbd{value="K"}）。

```vue [app.vue]{4}
<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    shortcut="meta_k"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
</template>
```

### 颜色模式

默认情况下，一组命令会被添加到命令面板中，这样你就可以在亮暗模式之间切换。这只会在`colorMode`没有被强制在特定页面中的情况下生效，这可以通过`definePageMeta`来实现：

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

您可以通过将`color-mode`属性设置为`false`来禁用此行为：

```vue [app.vue]{4}
<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    :color-mode="false"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
</template>
```

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### 曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `commandPaletteRef`{lang="ts-type"}| `Ref<InstanceType<typeof UCommandPalette> \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
