---
title: 대시보드 사이드바
description: '대시보드에 표시할 크기 조절 가능하고 축소 가능한 사이드바입니다.'
category: dashboard
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebar.vue
---

## Usage

DashboardSidebar 구성 요소는 대시보드 레이아웃에 사이드바를 표시하는 데 사용됩니다. 끌어서 크기 조정, 상태 지속성을 지원하며 [DashboardGroup](/docs/components/dashboard-groupxph04x, [boardPanelxph06x/docs/components/dashboard-panelxph08x 및 [dashboardNavbarx와 통합됩니다.

::tip{to="/docs/components/sidebar"}
**DashboardSidebar 대 Sidebar**: 이 구성 요소는 드래그 크기 조정, 상태 지속성 및 `DashboardGroup` 통합이 포함된 대시보드 레이아웃용으로 설계되었습니다. 단순한 독립형 사이드바(채팅 패널, 설정, 탐색)의 경우 [Sidebar](/docs/components/sidebar)를 대신 사용합니다.
::

해당 상태(크기, 축소 등)는 [DashboardGroup](/docs/components/dashboard-group#props) 구성 요소에 제공된 `storage` 및 `storage-key` 소품을 기반으로 저장됩니다.

[DashboardGroup](/docs/components/dashboard-group) 구성 요소의 기본 슬롯 내에서 이 옵션을 사용합니다.

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

::warning
`resizable` Prop을 사용할 때 이 구성 요소는 단일 루트 요소를 가지지 않으므로 페이지 전환을 사용하거나 레이아웃에 단일 루트가 필요한 경우 컨테이너(예: `<div class="flex flex-1">`)로 래핑합니다.
::

`header`, `default` 및 `footer` 슬롯을 사용하여 사이드바와 `body` 또는 `content` 슬롯을 사용자 정의하여 사이드바 메뉴를 사용자 정의합니다.

::component-example
---
collapse: true
name: 'dashboard-sidebar-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
화면의 왼쪽 가장자리 근처에 있는 사이드바를 끌어 축소합니다.
::

### 크기 조정 가능

`resizable` Prop을 사용하여 사이드바의 크기를 조절할 수 있도록 합니다.

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
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

### 축소가능

화면 가장자리 근처로 드래그할 때 `collapsible` 소품을 사용하여 사이드바를 축소 가능하게 만듭니다.

::warning
사이드바가 **collapsible**가 아닌 경우 [`DashboardSidebarCollapse`](/docs/components/dashboard-sidebar-collapse) 구성 요소는 아무런 효과가 없습니다.
::

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="#slots"}
슬롯 소품에서 `collapsed` 상태에 액세스하여 사이드바가 축소될 때 내용을 사용자 정의할 수 있습니다.
::

### Size 크기

`min-size`, `max-size`, `default-size` 및 `collapsed-size` 소품을 사용하여 사이드바 크기를 사용자 정의합니다.

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  collapsedSize: 0
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
크기는 기본적으로 백분율로 계산됩니다. `DashboardGroup` 구성 요소에서 `unit` prop을 사용하여 변경할 수 있습니다.
::

::note
`collapsed-size` prop은 기본적으로 `0`로 설정되어 있지만 사이드바에는 `min-w-16`가 있어 보이는지 확인합니다.
::

### 사이드

사이드바 측면을 변경하려면 `side` 소품을 사용합니다. 기본값은 `left`입니다.

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  side: 'right'
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-end'
---

:placeholder{class="h-96"}
::

### Mode 모드

`mode` 소품을 사용하여 사이드바 메뉴의 모드를 변경합니다. 기본값은 `slideover`입니다.

`body` 슬롯을 사용하여 메뉴 본문(헤더 아래)을 채우거나 `content` 슬롯을 사용하여 전체 메뉴를 채웁니다.

::tip{to="#props"}
당신은 사이드바의 메뉴를 사용자 정의하기 위해 `menu` 소품을 사용할 수 있습니다, 그것은 당신이 선택한 모드에 따라 적응합니다.
::

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'drawer'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::note
이러한 예에는 [`DashboardGroup`](/docs/components/dashboard-group), [`DashboardPanel`](/docs/components/dashboard-panel) 및 [`DashboardNavbar`](/docs/components/dashboard-navbar) 구성 요소가 포함되어 있으며 모바일에서 사이드바를 시연하는 데 필요합니다.
::

### 토글

`toggle` Prop을 사용하여 모바일에 표시되는 [DashboardSidebarToggle](/docs/components/dashboard-sidebar-toggle) 구성 요소를 사용자 정의합니다.

[Button](/docs/components/button) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-example'
props:
  class: 'w-full'
---
::

###  측면 전환

`toggle-side` 소품을 사용하여 토글 버튼의 측면을 변경합니다. 기본값은 `left`입니다.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-side-example'
props:
  class: 'w-full'
---
::

## examples 예제

### Control 열기 상태

`open` prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.

::component-example
---
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-open-example'
class: '!p-0 !justify-start'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 kbd{value="O"}를 눌러 DashboardSidebar의 열기 상태를 토글할 수 있습니다.
::

### Control 축소된 상태

`collapsed` prop 또는 `v-model:collapsed` 지시어를 사용하여 축소 상태를 제어할 수 있습니다.

::component-example
---
name: 'dashboard-sidebar-collapsed-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 kbd{value="C"}를 눌러 DashboardSidebar의 축소된 상태를 토글할 수 있습니다.
::

## API

### Props (### Props)

:component-props

### 슬롯

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
