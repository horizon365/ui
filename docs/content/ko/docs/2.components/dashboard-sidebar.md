---
title: 대시보드사이드바
description: '대시보드에 표시할 크기 조절 가능하고 축소 가능한 사이드바입니다.'
category: dashboard
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebar.vue
---

##  사용

DashboardSidebar 구성 요소는 대시보드 레이아웃에 사이드바를 표시하는 데 사용됩니다. 끌어서 크기를 조정하고 상태 지속성을 지원하며 [DashboardGroup](/docs/components/dashboard-group), 과(와) 통합됩니다.[DashboardPanel](/docs/components/dashboard-panel) 및 [DashboardNavbar](/docs/components/dashboard-navbar) .

::tip{to="/docs/components/sidebar"}
**DashboardSidebar vs Sidebar**: 이 구성 요소는 드래그 크기 조정, 상태 지속성 및 `DashboardGroup` 통합이 포함된 대시보드 레이아웃용으로 설계되었습니다. 간단한 독립형 사이드바(채팅 패널, 설정, 탐색)의 경우 [bar](/docs/components/sidebarSidebar@ @ @ )을 대신 사용하십시오.
::

해당 상태(크기, 축소 등)는 [DashboardGroup](/docs/components/dashboard-group#props) 구성요소에 제공한 `storage` 및 `storage-key`props에 따라 저장됩니다.

[DashboardGroup](/docs/components/dashboard-group) 구성 요소의 기본 슬롯 내에서 사용하십시오.

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

::warning
이 구성요소는 `resizable`prop을 사용할 때 단일 루트 요소를 갖지 않으므로 페이지 전환을 사용하거나 레이아웃에 단일 루트가 필요한 경우 컨테이너로 래핑합니다(예: `<div class="flex flex-1">`).
::

`header`, `default` 및 `footer` 슬롯을 사용하여 사이드바 메뉴를 사용자 정의하고 `body` 또는 `content` 슬롯을 사용자 정의합니다.

::component-example
---
축소: true
이름: 'dashboard-sibar-example'
클래스: "!p-0!justify-start"
소품 :
  minSize: 22개
  defaultSize: 35
  maxSize : 40
  클래스: "!min-h-96h-136"
---
::

::note
화면의 왼쪽 가장자리 근처에 있는 사이드바를 끌어 축소합니다.
::

### Resizable 크기 조정

`resizable`prop을 사용하여 사이드바의 크기를 조정할 수 있도록 합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  minSize
  -  defaultSize
  -  maxSize
  - class 클래스
소품 :
  크기 조절 가능:true
  미니사이즈: 22
  defaultSize: 35
  maxSize : 40
  클래스: "!min-h-96"
슬롯 :
  기본값 :|

    <Placeholder class="h-96" />
클래스: "!p-0!justify-start"
---

: placeholder{class="h-96"}
::

### Collapsible 이미지

`collapsible`prop을 사용하여 화면 가장자리 근처로 드래그할 때 사이드바를 축소할 수 있도록 합니다.

::warning
[`DashboardSidebarCollapse`](/docs/components/dashboard-sidebar-collapse) 구성 요소는 사이드바가 **collapsible@@ ** 이 아닌 경우 아무런 영향을 미치지 않습니다.
::

::component-code
---
상품명 : True
무시하기:
  - 크기 조절 가능
숨기기 (Hide):
  -  minSize
  -  defaultSize
  -  maxSize
  -  클래스
소품 :
  크기 조정 가능:true
  축소 가능:true
  미니사이즈: 22
  defaultSize: 35
  maxSize : 40
  클래스: "!min-h-96"
슬롯 :
  기본값 :|

    <Placeholder class="h-96" />
클래스: "!p-0!justify-start"
---

: placeholder {class="h-96"}
::

::tip{to="#slots"}
슬롯 소품에서 `collapsed` 상태에 액세스하여 사이드바가 축소될 때 내용을 사용자 정의할 수 있습니다.
::

###  크기

`min-size`, `max-size`, `default-size` 및 `collapsed-size`props를 사용하여 사이드바의 크기를 사용자 지정합니다.

::component-code
---
상품명 : True
무시하기:
  - 크기 조절 가능
  - 축소 가능
숨기기 (Hide):
  -  클래스
소품 :
  크기 조정 가능:true
  축소 가능:true
  미니사이즈: 22
  defaultSize: 35
  maxSize : 40
  collapsed 크기: 0
  클래스: "!min-h-96"
슬롯 :
  기본값 :|

    <Placeholder class="h-96" />
클래스: "!p-0!justify-start"
---

: placeholder {class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
크기는 기본적으로 백분율로 계산됩니다. `DashboardGroup` 구성 요소에서 `unit`prop을 사용하여 변경할 수 있습니다.
::

::note
`collapsed-size`prop은 기본적으로 `0`로 설정되어 있지만 사이드바에는 `min-w-16`가 있어 보이는지 확인합니다.
::

###  사이드

사이드바의 측면을 변경하려면 `side`prop을 사용합니다. 기본값은 `left`입니다.

::component-code
---
상품명 : True
무시하기:
  - 크기 조절 가능
  -  축소 가능
숨기기 (Hide):
  -  minSize
  -  defaultSize
  -  maxSize
  -  클래스
소품 :
  사진: "right"
  크기 조정 가능:true
  축소 가능:true
  minSize: 22개
  defaultSize: 35
  maxSize : 40
  클래스: "!min-h-96"
슬롯 :
  기본 값:|

    <Placeholder class="h-96" />
클래스: "!p-0! 정의의 끝"
---

: placeholder{class="h-96"}
::

###  모드

사이드바 메뉴의 모드를 변경하려면 `mode`prop을 사용합니다. 기본값은 `slideover`입니다.

`body` 슬롯을 사용하여 메뉴 본문(헤더 아래)을 채우거나 `content` 슬롯을 사용하여 전체 메뉴를 채우십시오.

::tip{to="#props"}
당신은 `menu`prop을 사용하여 사이드바의 메뉴를 사용자 정의 할 수 있습니다, 그것은 당신이 선택한 모드에 따라 적응합니다.
::

::component-example
---
축소: true
iframe :
  높이 : 500px;
iframeMobile : true (iframeMobile)
overflowHidden: true
이름: 'dashboard-sidebar-mode-example'
선택 사항:
  - 이름: 'mode'
    모델 번호:mode
    기본값: 서랍
    항목:
      -  modal
      -  slideover
      -  서랍
소품 :
  클래스 : 'w-full'
---
::

::note
이러한 예에는 [`DashboardGroup`](/docs/components/dashboard-group)[`DashboardPanel`](/docs/components/dashboard-panel/docs/components/dashboard-panelPH1116@@@@@@@@@ 및 @@PH111117@PH11111110@PH10@ 모바일 구성 요소로 구성 요소를 보여주는 데 필요한 것입니다.
::

###  토글

`toggle`prop을 사용하여 모바일에 표시된 [DashboardSidebarToggle](/docs/components/dashboard-sidebar-toggle) 구성 요소를 사용자 지정합니다.

[Button](/docs/components/button) 구성 요소에서 속성을 전달하여 사용자 지정할 수 있습니다.

::component-example
---
축소: true
iframe :
  높이 : 500px;
iframeMobile : true
overflowHidden: true
이름: 'dashboard-sidebar-toggle-example'
소품 :
  클래스 : 'w-full'
---
::

###  옆으로 전환

`toggle-side`prop을 사용하여 토글 버튼의 측면을 변경합니다. 기본값은 `left`입니다.

::component-example
---
축소: true
iframe :
  높이 : 500px;
iframeMobile : true (iframeMobile)
overflowHidden: true
이름: 'dashboard-sidebar-toggle-side-example'
소품 :
  클래스 : 'w-full'
---
::

##  예제

###  열린 상태 제어

`open`prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.

::component-example
---
iframe :
  높이 : 500px;
iframeMobile : true
overflowHidden: true
이름: 'dashboard-sidebar-open-example'
클래스: "!p-0!justify-start"
---
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 kbd{value="O"}를 눌러 DashboardSidebar의 열기 상태를 전환할 수 있습니다.
::

###  컨트롤 붕괴 상태

`collapsed`prop 또는 `v-model:collapsed` 지시문을 사용하여 축소 상태를 제어할 수 있습니다.

::component-example
---
'dashboard-sidebar-collapsed-example'에 해당되는 글 1건
클래스: "!p-0!justify-start"
소품 :
  미니사이즈: 22
  defaultSize: 35
  maxSize : 40
  클래스: "!min-h-96h-136"
---
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 kbd{value="C"}를 눌러 DashboardSidebar의 축소된 상태를 전환할 수 있습니다.
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
