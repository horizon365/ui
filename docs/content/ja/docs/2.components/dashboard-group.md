---
title: DashboardGroup
description: 'サイドバー状態管理と永続性を備えたダッシュボードコンポーネントのコンテキストを提供する固定レイアウトコンポーネント。'
category: dashboard
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardGroup.vue
---

## 使用法

DashboardGroupコンポーネントは、[DashboardSidebar](/docs/components/dashboard-sidebar)および[DashboardPanel](/docs/components/dashboard-panel)コンポーネントをラップして応答性の高いダッシュボードインターフェイスを作成するメインレイアウトです。

レイアウトまたは`app.vue`で使用してください：

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

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
