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

DashboardToolbarコンポーネントは、[ DashboardNavbar ](/docs/components/dashboard-navbar)コンポーネントの下にツールバーを表示するために使用されます。

[ DashboardPanel ](/docs/components/dashboard-panel)コンポーネントの`header`スロット内で使用します。

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

ツールバーをカスタマイズするには、`left`、`default`、および`right`スロットを使用します。

::component-example
---
きれい真
名前'dashboard—toolbar'
クラス'！px—0！pt—0'
小道具
  クラス'w—full'
---
::

::note
この例では、[ NavigationMenu ](/docs/components/navigation-menu)コンポーネントを使用して、いくつかのリンクをレンダリングします。
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
