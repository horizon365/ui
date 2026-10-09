---
title: 대시보드 도구막대
description: '대시보드의 탐색 표시줄 아래에 표시할 도구 모음입니다.'
category: dashboard
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardToolbar.vue
---

## Usage

DashboardToolbar 구성 요소는 [DashboardNavbar](/docs/components/dashboard-navbar) 구성 요소 아래에 도구 모음을 표시하는 데 사용됩니다.

[DashboardPanel](/docs/components/dashboard-panel) 구성 요소의 `header` 슬롯 내부에서 사용합니다.

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

`left`, `default` 및 `right` 슬롯을 사용하여 도구 모음을 사용자 지정합니다.

::component-example
---
prettier: true
name: 'dashboard-toolbar-example'
class: '!px-0 !pt-0'
props:
  class: 'w-full'
---
::

::note
이 예제에서는 [NavigationMenu](/docs/components/navigation-menu) 구성 요소를 사용하여 일부 링크를 렌더링합니다.
::

## API 파일

### Props (### Props)

:component-props

### 슬롯

:component-slots

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
