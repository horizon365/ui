---
title: Dashboard그룹
description: '사이드바 상태 관리 및 지속성을 갖춘 대시보드 구성 요소의 컨텍스트를 제공하는 고정 레이아웃 구성 요소입니다.'
category: dashboard
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardGroup.vue
---

##  사용

DashboardGroup 구성 요소는 응답형 대시보드 인터페이스를 생성하기 위해 [DashboardSidebar](/docs/components/dashboard-sidebar) 및 [DashboardPanel](/docs/components/dashboard-panelPH08@@ 구성 요소를 래핑하는 기본 레이아웃입니다.

레이아웃이나 `app.vue`에서 사용하십시오.

```vue [layouts/dashboard.vue]{2,6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
