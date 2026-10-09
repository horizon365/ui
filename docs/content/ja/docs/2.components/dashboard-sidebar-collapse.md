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

DashboardSidebarCollapseコンポーネントは、[DashboardSidebar](/docs/components/dashboard-sidebar)コンポーネント**の`collapsible`プロパティが設定**の場合に折りたたみ/展開するために使用されます。

:component-code

[Button](/docs/components/button)コンポーネントを拡張するため、`color`、`variant`、`size`などの任意のプロパティを渡すことができます。

::component-code
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note
ボタンのデフォルトは`color="neutral"`と`variant="ghost"`です。
::

## 例

### `header`スロット内

このコンポーネントを[DashboardSidebar](/docs/components/dashboard-sidebar)コンポーネントの`header`スロットに配置し、`collapsed`プロパティを使用してヘッダーの左側部分を非表示にできます。

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

### x`leading`スロット内

このコンポーネントを[DashboardNavbar](/docs/components/dashboard-navbar)コンポーネントの`leading`スロットに配置して、タイトルの前に表示できます。

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

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<button>` HTML属性もサポートします。
::

## Theme

:component-theme

## Changelog

:component-changelog
