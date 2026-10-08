---
title: 대시보드 도구막대
description: '대시보드에서 탐색 표시줄 아래에 표시할 도구 모음입니다.'
category: dashboard
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardToolbar.vue
---

##  사용

DashboardToolbar 구성 요소는 [DashboardNavbar](/docs/components/dashboard-navbar) 구성 요소 아래에 도구 모음을 표시하는 데 사용됩니다.

[DashboardPanel](/docs/components/dashboard-panel) 구성 요소의 `header` 슬롯 내부에서 사용하십시오.

```vue [pages/index.vue]{9-13}
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar />

      <UDashboardToolbar />
    </template>
  </UDashboardPanel>
</template>
```

`left`, `default` 및 `right` 슬롯을 사용하여 도구 모음을 사용자 정의합니다.

::component-example
---
상품명 : True
이름: 'dashboard-toolbar-example'
클래스: "!px-0!pt-0"
소품 :
  클래스 : 'w-full'
---
::

::note
이 예제에서는 [NavigationMenu](/docs/components/navigation-menu) 구성 요소를 사용하여 일부 링크를 렌더링합니다.
::

##  API

### Props 이미지

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
