---
title: 대시보드 사이드바토글
description: '모바일에서 사이드바를 전환하는 버튼입니다.'
category: dashboard
links:
  - label: 단추
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarToggle.vue
---

## Usage

DashboardSidebarToggle 구성 요소는 [DashboardNavbar](/docs/components/dashboard-navbar) 및 [DashboardSidebar](xph07xxph08x 구성 요소에 사용됩니다.

그것은 자동으로 사이드바를 토글 모바일에 표시 됩니다, ** 당신은 그것을 manually **를 추가 할 필요가 없습니다.

::component-code
---
hide:
  - class
props:
  class: 'lg:flex'
---
::

[Button](/docs/components/button) 구성 요소를 확장하므로 `color`, `variant`, `size` 등과 같은 속성을 전달할 수 있습니다.

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
버튼의 기본값은 `color="neutral"` 및 `variant="ghost"`입니다.
::

## 예

### x`toggle` 슬롯 내

이 구성 요소는 모바일에서 자동으로 표시되지만 [DashboardNavbar](/docs/components/dashboard-navbar) 및 [DashboardSidebar](/docs/components/dashboard-sidebar) 구성 요소의 `toggle` 슬롯을 사용하여 버튼을 사용자 정의할 수 있습니다.

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
`DashboardSidebar` 및 `DashboardNavbar` 구성 요소의 `toggle-side` Prop을 사용하면 지정된 측면에 버튼이 표시됩니다.
::

## API 사용

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<button>` HTML 속성도 지원합니다.
::

## Theme 주제

:component-theme

## Changelog 파일

:component-changelog
