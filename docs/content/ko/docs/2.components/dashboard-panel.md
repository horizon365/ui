---
title: dashboardPanel 대시보드
description: '대시보드에 표시할 크기 조절 가능한 패널입니다.'
category: dashboard
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardPanel.vue
---

##  사용

대시보드 패널 구성 요소는 패널을 표시하는 데 사용됩니다. 해당 상태(크기, 축소 등)는 [DashboardGroup](/docs/components/dashboard-group#props) 구성 요소에 제공한 `storage` 및 `storage-key`props를 기준으로 저장됩니다.

[DashboardGroup](/docs/components/dashboard-group) 구성 요소의 기본 슬롯 안에 사용하면 여러 패널을 서로 옆에 배치할 수 있습니다.

```vue [pages/index.vue]{8,10}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel id="inbox-1" resizable />

  <UDashboardPanel id="inbox-2" class="hidden lg:flex" />
</template>
```

::caution
충돌을 방지하기 위해 서로 다른 페이지에서 여러 패널을 사용할 때는 `id`를 설정하는 것이 좋습니다.
::

::warning
이 구성요소는 `resizable`prop을 사용할 때 단일 루트 요소를 갖지 않으므로 페이지 전환을 사용하거나 레이아웃에 단일 루트가 필요한 경우 컨테이너로 래핑합니다(예: `<div class="flex flex-1">`).
::

패딩이 있는 스크롤 가능한 본체를 원하지 않는 경우 `header`, `body` 및 `footer` 슬롯을 사용하여 패널 또는 기본 슬롯을 사용자 정의합니다.

::component-example
---
축소: true
이름: "dashboard-panel-example"
클래스: "!p-0!justify-start"
소품 :
  minSize: 22개
  defaultSize: 35
  maxSize : 40
  클래스 : "!min-h-96h-136"
---
::

::note
대부분의 경우 [`DashboardNavbar`](/docs/components/dashboard-navbar) 슬롯에 있는 ) 구성 요소를 사용합니다.
::

### Resizable 사이즈 조정

`resizable`prop을 사용하여 패널의 크기를 조절할 수 있도록 합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  minSize
  -  defaultSize
  -  maxSize
  -  class
소품 :
  크기 조정 가능:true
  minSize: 22개
  defaultSize: 35
  maxSize : 40
  클래스: "!min-h-96"
슬롯 :
  본문 (body):|

    <Placeholder class="h-96" />
클래스: "!p-0!justify-start"
---

#바디
: placeholder{class="h-96"}
::

###  크기

`min-size`, `max-size` 및 `default-size`props를 사용하여 패널 크기를 사용자 정의합니다.

::component-code
---
상품명 : True
무시하기:
  - 크기 조절 가능
숨기기 (Hide):
  -  클래스
소품 :
  크기 조절 가능:true
  미니사이즈: 22
  defaultSize: 35
  maxSize : 40
  클래스: "!min-h-96"
슬롯 :
  본문:|

    <Placeholder class="h-96" />
클래스: "!p-0!justify-start"
---

# 바디
: placeholder {class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
크기는 기본적으로 백분율로 계산됩니다. `DashboardGroup` 구성 요소에서 `unit`prop을 사용하여 변경할 수 있습니다.
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
