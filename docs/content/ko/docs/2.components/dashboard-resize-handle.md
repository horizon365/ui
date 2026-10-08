---
title: DashboardResizeHandle 대시보드 ResizeHandle
description: '사이드바 또는 패널의 크기를 조정하는 핸들입니다.'
category: dashboard
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardResizeHandle.vue
---

##  사용

DashboardResizeHandle 구성 요소는 [DashboardSidebar](/docs/components/dashboard-sidebar) 및 [DashboardPanel](/docs/components/dashboard-panel) 구성 요소에 사용됩니다.

`resizable`prop이 설정되면 자동으로 표시됩니다. ** 수동으로 추가할 필요가 없습니다.

##  예

###  Within `resize-handle` slot

`resizable`prop이 설정될 때 이 구성요소가 자동으로 표시되더라도 [DashboardSidebar](/docs/components/dashboard-sidebar) 및 [DashboardPanel]()의 @@ 슬롯을 사용하여 구성요소를 사용자 정의할 수 있습니다.

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
이 예제에서는 `after`pseudo-element를 추가하여 마우스 위에 수직선을 표시합니다.
::

##  API

### Props 이미지

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
