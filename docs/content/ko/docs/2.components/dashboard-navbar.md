---
title: 대시보드 Navbar
description: '대시보드에 표시할 응답형 navbar입니다.A responsible navbar to display in a dashboard.'
category: dashboard
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardNavbar.vue
---

## Usage

DashboardNavbar 구성 요소는 [DashboardSidebar](/docs/components/dashboard-sidebar) 구성 요소와 통합되는 응답형 탐색 막대입니다. 대시보드 레이아웃에서 응답형 탐색을 활성화하는 모바일 전환 단추가 포함되어 있습니다.

[DashboardPanel](/docs/components/dashboard-panel) 구성 요소의 `header` 슬롯 내에서 사용합니다.

```vue [pages/index.vue]{9-11}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />
    </template>
  </UDashboardPanel>
</template>
```

`left`, `default` 및 `right` 슬롯을 사용하여 navbar를 사용자 지정합니다.

::component-example
---
prettier: true
name: 'dashboard-navbar-example'
class: '!px-0 !pt-0'
props:
  class: 'w-full'
---
::

::note
이 예제에서는 오른쪽 슬롯에 있는 [Tabs](/docs/components/tabs) 구성 요소를 사용하여 일부 탭을 표시합니다.
::

### 제목

`title` Prop 을 사용하여 navbar 의 제목을 설정합니다.

::component-code
---
hide:
  - class
props:
  title: 'Dashboard'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

### Icon 이미지

`icon` prop 를 사용하여 navbar 아이콘을 설정합니다.

::component-code
---
hide:
  - class
ignore:
  - title
props:
  title: 'Dashboard'
  icon: 'i-lucide-house'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

### 토글

`toggle` 소품을 사용하여 [DashboardSidebar](/docs/components/dashboard-sidebar) 구성 요소를 여는 모바일에 표시되는 토글 버튼을 사용자 정의합니다.

[Button](/docs/components/button) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-example
---
iframe: true
iframeMobile: true
overflowHidden: true
name: 'dashboard-navbar-toggle-example'
props:
  class: 'w-full'
---
::

### 면 전환

`toggle-side` 소품을 사용하여 토글 버튼의 측면을 변경합니다. 기본값은 `right`입니다.

::component-example
---
iframe: true
iframeMobile: true
overflowHidden: true
name: 'dashboard-navbar-toggle-side-example'
props:
  class: 'w-full'
---
::

## API 파일

### Props

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
