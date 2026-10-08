---
title: ダッシュボードサイドバー Collapse
description: 'デスクトップ上のサイドバーを折りたたむボタン。'
category: dashboard
links:
  - label: ボタン
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarCollapse.vue
---

## 使用法

DashboardSidebarCollapseコンポーネントは、[ DashboardSidebar ](/docs/components/dashboard-sidebar) component **を折りたたみ/展開するために使用されます。

コンポーネントコード

[ Button ](/docs/components/button)コンポーネントを拡張しているので、`color`、`variant`、`size`などのプロパティを渡すことができます。

::component-code
---
無視
  - バリアント
小道具
  バリアント：'微妙'
---
::

::note
ボタンのデフォルトは`color="neutral"`および`variant="ghost"`です。
::

## 例

### 内`header`スロット

このコンポーネントを[ DashboardSidebar ](/docs/components/dashboard-sidebar)コンポーネントの`header`スロットに配置し、`collapsed` propを使用してヘッダーの左側部分を隠すことができます。

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

### 内`leading`スロット

このコンポーネントを[ DashboardNavbar ](/docs/components/dashboard-navbar)コンポーネントの`leading`スロットに配置して、タイトルの前に表示できます。

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

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<button>` HTML属性もサポートします。
::

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
