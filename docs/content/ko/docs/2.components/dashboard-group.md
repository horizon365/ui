---
title: Dashboard그룹
description: '사이드바 상태 관리 및 지속성을 갖춘 대시보드 구성 요소에 컨텍스트를 제공하는 고정 레이아웃 구성 요소입니다.'
category: dashboard
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardGroup.vue
---

## Usage

DashboardGroup 구성 요소는 [DashboardSidebar](/docs/components/dashboard-sidebar) 및 [DashboardPanel](/docs/components/dashboard-panelxph08x 구성 요소를 래핑하여 응답형 대시보드 인터페이스를 생성하는 기본 레이아웃입니다.

레이아웃 또는 `app.vue`에서 사용하십시오 :

```vue [layouts/dashboard.vue]{2,6}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

## API

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
