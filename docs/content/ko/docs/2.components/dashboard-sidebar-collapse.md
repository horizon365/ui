---
title: 대시보드사이드바 축소
description: '바탕 화면에서 사이드바를 축소하는 단추입니다.'
category: dashboard
links:
  - label: 버튼 (Button)
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarCollapse.vue
---

## Usage

DashboardSidebarCollapse 구성 요소는 `collapsible` 소품이 set**인 경우 [DashboardSidebar](xph04x) 구성 요소 **를 축소/확장하는 데 사용됩니다.

:component-code

[Button](/docs/components/button) 구성 요소를 확장하므로 `color`, `variant`, `size` 등과 같은 속성을 전달할 수 있습니다.

::component-code
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note
버튼의 기본값은 `color="neutral"` 및 `variant="ghost"`입니다.
::

## 예

### x`header` 슬롯 내부

이 구성 요소를 [DashboardSidebar](/docs/components/dashboard-sidebar) 구성 요소의 `header` 슬롯에 넣고 `collapsed` prop을 사용하여 헤더의 왼쪽 부분을 숨길 수 있습니다.

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

### x`leading` 슬롯 내

이 구성 요소를 [DashboardNavbar](/docs/components/dashboard-navbar) 구성 요소의 `leading` 슬롯에 배치하여 제목 앞에 표시할 수 있습니다. 예를 들면 다음과 같습니다.

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

### Props 코드

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<button>` HTML 속성도 지원합니다.
::

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
