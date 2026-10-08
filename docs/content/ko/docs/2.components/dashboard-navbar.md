---
title: dashboardNavbar
description: '대시보드에 표시할 응답형 navbar입니다.A responsible navbar to display in a dashboard.'
category: dashboard
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardNavbar.vue
---

##  사용

DashboardNavbar 구성 요소는 [DashboardSidebar](/docs/components/dashboard-sidebar) 구성 요소와 통합되는 응답형 탐색 모음입니다. 대시보드 레이아웃에서 응답형 탐색을 활성화하는 모바일 전환 단추가 포함되어 있습니다.

[DashboardPanel](/docs/components/dashboard-panel) 구성 요소의 `header` 슬롯 내에서 사용하십시오.

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
상품명 : True
이름: "dashboard-navbar-example"
클래스: "!px-0!pt-0"
소품 :
  클래스 : 'w-full'
---
::

::note
이 예제에서는 오른쪽 슬롯에 [Tabs](/docs/components/tabs) 구성 요소를 사용하여 일부 탭을 표시합니다.
::

###  제목

`title`prop 을 사용하여 navbar 제목을 설정합니다.

::component-code
---
숨기기 (Hide):
  -  클래스
소품 :
  사진: "Dashboard"
  클래스 : 'w-full'
클래스: "!px-0!pt-0"
---
::

###  아이콘

`icon`prop 을 사용하여 navbar 아이콘을 설정합니다.

::component-code
---
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
소품 :
  제목: Dashboard
  사진: "i-lucide-house"
  클래스: 'w-full'
클래스: "!px-0!pt-0"
---
::

###  토글

`toggle`prop을 사용하여 [DashboardSidebar](/docs/components/dashboard-sidebar) 구성 요소를 여는 모바일에 표시되는 전환 버튼을 사용자 정의합니다.

[Button](/docs/components/button) 구성 요소에서 임의의 속성을 전달하여 사용자 지정할 수 있습니다.

::component-example
---
iframe : true (iframe : true)
iframeMobile : true (iframeMobile)
overflowHidden: true
이름: 'dashboard-navbar-toggle-example'
소품 :
  클래스: 'w-full'
---
::

###  옆으로 전환

`toggle-side`prop을 사용하여 토글 버튼의 측면을 변경합니다. 기본값은 `right`입니다.

::component-example
---
iframe : true (iframe : true)
iframeMobile : true
overflowHidden: true
이름: 'dashboard-navbar-toggle-side-example'
소품 :
  클래스 : 'w-full'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
