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

##  사용

DashboardSidebarCollapse 구성 요소는 [DashboardSidebar](/docs/components/dashboard-sidebar)component** 구성 요소를 `collapsible`prop이 설정된 경우 축소/확장하는 데 사용됩니다.

:구성요소 코드

그것은 [Button](/docs/components/button) 구성 요소를 확장하여 `color`, `variant`, `size` 등과 같은 속성을 전달할 수 있습니다.

::component-code
---
무시하기:
  - variant @
소품 :
  variant: '미묘한'
---
::

::note
버튼의 기본값은 `color="neutral"` 및 `variant="ghost"`입니다.
::

##  예제

###  Within `header` slot

이 구성요소를 [DashboardSidebar](/docs/components/dashboard-sidebar) 구성요소의 `header` 슬롯에 넣고 `collapsed`prop을 사용하여 헤더의 왼쪽 부분을 숨길 수 있습니다.

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

###  Within `leading` 슬롯

이 구성 요소를 [DashboardNavbar](/docs/components/dashboard-navbar) 구성 요소의 `leading` 슬롯에 넣어 제목 앞에 표시할 수 있습니다.

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

### Props 이미지

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<button>`HTML 속성을 지원합니다.
::

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
