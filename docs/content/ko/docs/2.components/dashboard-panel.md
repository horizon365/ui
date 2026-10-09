---
title: dashboardPanel 대시보드
description: '대시보드에 표시할 크기 조절 가능한 패널입니다.'
category: dashboard
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardPanel.vue
---

## Usage

대시보드 패널 구성 요소는 패널을 표시하는 데 사용됩니다. 해당 상태(크기, 축소 등)는 [DashboardGroup](/docs/components/dashboard-group#props) 구성 요소에 제공된 `storage` 및 `storage-key` 소품에 따라 저장됩니다.

[DashboardGroup](/docs/components/dashboard-group) 구성 요소의 기본 슬롯에 사용하면 여러 패널을 서로 옆에 배치할 수 있습니다.

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
충돌을 방지하려면 서로 다른 페이지에서 여러 패널을 사용할 때 `id`를 설정하는 것이 좋습니다.
::

::warning
`resizable` Prop을 사용할 때 이 구성 요소는 단일 루트 요소를 갖지 않으므로 페이지 전환을 사용하거나 레이아웃에 단일 루트가 필요한 경우 컨테이너(예: `<div class="flex flex-1">`)에 래핑합니다.
::

패딩이 있는 스크롤 가능한 몸체를 원하지 않는 경우 `header`, `body` 및 `footer` 슬롯을 사용하여 패널이나 기본 슬롯을 사용자 정의합니다.

::component-example
---
collapse: true
name: 'dashboard-panel-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
대부분의 경우 `header` 슬롯에서 [`DashboardNavbar`](/docs/components/dashboard-navbar) 구성 요소를 사용합니다.
::

### 크기 조정 가능

`resizable` 소품을 사용하여 패널의 크기를 조절할 수 있도록 합니다.

::component-code
---
prettier: true
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

### Size 크기

`min-size`, `max-size` 및 `default-size` 소품을 사용하여 패널의 크기를 사용자 정의합니다.

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  body: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

#body
:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
크기는 기본적으로 백분율로 계산됩니다. `DashboardGroup` 구성 요소에서 `unit` prop을 사용하여 변경할 수 있습니다.
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
