---
title: DashboardResizeHandle 대시보드ResizeHandle
description: '사이드바 또는 패널의 크기를 조정하는 핸들입니다.'
category: dashboard
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardResizeHandle.vue
---

## Usage

DashboardResizeHandle 구성 요소는 [DashboardSidebar](/docs/components/dashboard-sidebar) 및 [DashboardPanel](xph07x) 구성 요소에 사용됩니다.

`resizable` prop이 설정되면 자동으로 표시되며, **manualy**를 추가 할 필요가 없습니다.

## examples 예

### x`resize-handle` 슬롯 내

`resizable` 소품을 설정하면 이 구성 요소가 자동으로 표시되지만 [DashboardSidebar](/docs/components/dashboard-sidebar) 및 [DashboardPanel](/docs/components/dashboard-panel) 구성 요소의 `resize-handle` 슬롯을 사용하여 핸들을 사용자 정의할 수 있습니다.

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
이 예제에서는 `after` 유사 요소를 추가하여 마우스를 가리키는 수직 선을 표시합니다.
::

## API 사용

### Props (### Props)

:component-props

### 슬롯

:component-slots

## Theme 주제

:component-theme

## 변경 로그

:component-changelog
