---
title: 대시보드 사이드바토글
description: '모바일에서 사이드바를 전환하는 버튼입니다.'
category: dashboard
links:
  - label: 버튼 (Button)
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebarToggle.vue
---

##  사용

DashboardSidebarToggle 구성 요소는 [DashboardNavbar](/docs/components/dashboard-navbar) 및 [DashboardSidebar](/docs/components/dashboard-sidebar) 구성 요소에 사용됩니다.

사이드바를 전환하기 위해 모바일에 자동으로 표시됩니다. ** 수동으로 ** 추가 할 필요가 없습니다.

::component-code
---
숨기기 (Hide):
  -  class
소품 :
  class: 'lg:flex'에 해당되는 글 0건
---
::

그것은 [Button](/docs/components/button) 구성 요소를 확장, 그래서 당신은 `color`, `variant`, `size` 등과 같은 속성을 전달 할 수있다.

::component-code
---
숨기기 (Hide):
  -  클래스
무시하기:
  -  variant
소품 :
  variant: '미묘한'
  클래스: 'lg:flex'
---
::

::note
버튼의 기본값은 `color="neutral"` 및 `variant="ghost"`입니다.
::

##  예제

###  Within `toggle` 슬롯

이 구성 요소는 모바일에서 자동으로 표시되지만 [DashboardNavbar](/docs/components/dashboard-navbar) 및 [DashboardSidebar](/docs/components/dashboard-sidebar 버튼을 사용하여 구성 요소를 사용자 정의할 수 있습니다.

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
`DashboardSidebar` 및 `DashboardNavbar` 컴포넌트의 `toggle-side`prop을 사용하면 지정된 측면에 버튼이 표시됩니다.
::

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<button>`HTML 속성을 지원합니다.
::

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
