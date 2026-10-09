---
title: ダッシュボードNavbar
description: 'ダッシュボードに表示するレスポンシブなナビバー。'
category: dashboard
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardNavbar.vue
---

## 使用法

DashboardNavbarコンポーネントは、[DashboardSidebar](/docs/components/dashboard-sidebar)コンポーネントと統合されたレスポンシブナビゲーションバーです。ダッシュボードレイアウトでレスポンシブナビゲーションを有効にするモバイルトグルボタンが含まれています。

[DashboardPanel](/docs/components/dashboard-panel)コンポーネントの`header`スロット内で使用します。

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

navbarをカスタマイズするには、`left`、`default`、`right`スロットを使用します。

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
この例では、右スロットの[Tabs](/docs/components/tabs)コンポーネントを使用してタブを表示します。
::

### Title

`title`プロパティを使用して、ナビバーのタイトルを設定します。

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

### Icon

`icon`プロパティを使用して、ナビバーのアイコンを設定します。

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

### Toggle

`toggle`プロパティを使用して、[DashboardSidebar](/docs/components/dashboard-sidebar)コンポーネントを開くモバイルに表示されるトグルボタンをカスタマイズします。

[Button](/docs/components/button)コンポーネントの任意のプロパティを渡してカスタマイズできます。

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

### Toggle側

トグルボタンの側面を変更するには、`toggle-side`プロパティを使用します。デフォルトは`right`です。

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

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
