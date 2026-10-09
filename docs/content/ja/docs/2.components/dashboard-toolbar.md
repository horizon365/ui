---
title: ダッシュボードツールバー
description: 'ダッシュボードのナビバーの下に表示するツールバー。'
category: dashboard
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardToolbar.vue
---

## 使用法

DashboardToolbarコンポーネントは、[DashboardNavbar](/docs/components/dashboard-navbar)コンポーネントの下にツールバーを表示するために使用されます。

[DashboardPanel](/docs/components/dashboard-panel)コンポーネントの`header`スロット内で使用します。

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

ツールバーをカスタマイズするには、`left`、`default`、`right`スロットを使用します。

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
この例では、[NavigationMenu](/docs/components/navigation-menu)コンポーネントを使用してリンクをレンダリングします。
::

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
