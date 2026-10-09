---
title: DashboardSidebarToggle
description: 'モバイルでサイドバーを切り替えるボタン。'
category: dashboard
links:
  - label: ボタン
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarToggle.vue
---

## 使用法

DashboardSidebarToggleコンポーネントは、[DashboardNavbar](/docs/components/dashboard-navbar)および[DashboardSidebar](/docs/components/dashboard-sidebar)コンポーネントで使用されます。

サイドバーを切り替えるにはモバイル上で自動的に表示されますが、**x**を手動で追加する必要はありません。

::component-code
---
hide:
  - class
props:
  class: 'lg:flex'
---
::

[Button](/docs/components/button)コンポーネントを拡張するため、`color`、`variant`、`size`などの任意のプロパティを渡すことができます。

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
ボタンのデフォルトは`color="neutral"`と`variant="ghost"`です。
::

## サンプル

### x`toggle`スロット内

このコンポーネントはモバイルで自動的に表示されますが、[DashboardNavbar](/docs/components/dashboard-navbar)および[DashboardSidebar](/docs/components/dashboard-sidebar)コンポーネントの`toggle`スロットを使用してボタンをカスタマイズできます。

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
`DashboardSidebar`および`DashboardNavbar`コンポーネントの`toggle-side`プロパティを使用すると、指定された側にボタンが表示されます。
::

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
