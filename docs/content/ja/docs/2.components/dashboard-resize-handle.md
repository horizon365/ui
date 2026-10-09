---
title: ダッシュボードResizeHandle
description: 'サイドバーまたはパネルのサイズを変更するハンドル。'
category: dashboard
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardResizeHandle.vue
---

## 使用法

DashboardResizeHandleコンポーネントは、[DashboardSidebar](/docs/components/dashboard-sidebar)および[DashboardPanel](/docs/components/dashboard-panel)コンポーネントで使用されます。

`resizable`プロパティが設定されていると自動的に表示されます。**手動で追加する必要はありません。

## 例

### x`resize-handle`スロット内

`resizable`プロパティが設定されているときにこのコンポーネントが自動的に表示されますが、[DashboardSidebar](/docs/components/dashboard-sidebar)および[DashboardPanel](/docs/components/dashboard-panel)コンポーネントの`resize-handle`スロットを使用してハンドルをカスタマイズできます。

::code-group

```vue [layouts/dashboard.vue]{4-10}
<template>
  <UDashboardGroup>
    <UDashboardSidebar resizable>
      <template #resize-handle="{ onMouseDown, onTouchStart, onDoubleClick }">
        <UDashboardResizeHandle
          class="after:absolute after:inset-y-0 after:right-0 after:w-px hover:after:bg-(--ui-border-accented) after:transition"
          @mousedown="onMouseDown"
          @touchstart="onTouchStart"
          @dblclick="onDoubleClick"
        />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
```

```vue [pages/index.vue]{9-15}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel resizable>
    <template #resize-handle="{ onMouseDown, onTouchStart, onDoubleClick }">
      <UDashboardResizeHandle
        class="after:absolute after:inset-y-0 after:right-0 after:w-px hover:after:bg-(--ui-border-accented) after:transition"
        @mousedown="onMouseDown"
        @touchstart="onTouchStart"
        @dblclick="onDoubleClick"
      />
    </template>
  </UDashboardPanel>
</template>
```

::

::note
この例では、ホバー時に垂直線を表示する`after`疑似要素を追加しています。
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
