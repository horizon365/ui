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

DashboardNavbarコンポーネントは、[ DashboardSidebar ](/docs/components/dashboard-sidebar)コンポーネントと統合されたレスポンシブナビゲーションバーです。ダッシュボードレイアウトでレスポンシブナビゲーションを有効にするモバイルトグルボタンが含まれています。

[ DashboardPanel ](/docs/components/dashboard-panel)コンポーネントの`header`スロット内で使用します。

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

ナバーをカスタマイズするには、`left`、`default`、および`right`スロットを使用します。

::component-example
---
きれい真
名前'dashboard—navbar—example'
クラス'！px—0！pt—0'
小道具
  クラス'w—full'
---
::

::note
この例では、右スロットの[ Tabs ](/docs/components/tabs)コンポーネントを使用してタブを表示しています。
::

### タイトル

`title`プロパティを使用して、ナビバーのタイトルを設定します。

::component-code
---
隠す
  - クラス
小道具
  title「ダッシュボード」
  クラス'w—full'
クラス'！px—0！pt—0'
---
::

### アイコン

`icon`プロパティを使用して、ナビバーのアイコンを設定します。

::component-code
---
隠す
  - クラス
無視
  -  title
小道具
  title「ダッシュボード」
  アイコン'i—lucide—house'
  クラス'w—full'
クラス'！px—0！pt—0'
---
::

### トグル

`toggle`プロパティを使用して、[ DashboardSidebar ](/docs/components/dashboard-sidebar)コンポーネントを開くモバイルに表示されるトグルボタンをカスタマイズします。

[ Button ](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-example
---
iframe true
iframeモバイルtrue
overflowHidden true
名前'dashboard—navbar—toggle—example'
小道具
  クラス'w—full'
---
::

### トグル側

トグルボタンの側面を変更するには、`toggle-side`プロパティを使用します。デフォルトは`right`です。

::component-example
---
iframe true
iframeモバイルtrue
overflowHidden true
名前'dashboard—navbar—toggle—side—example'
小道具
  クラス'w—full'
---
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
