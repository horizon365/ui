---
title: DashboardSearchButton
description: 'DashboardSearch 모달을 여는 사전 스타일 단추입니다.A pre-styled Button to open the DashboardSearch modal.'
category: dashboard
links:
  - label: 버튼 (Button)
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearchButton.vue
---

##  사용

DashboardSearchButton 구성 요소는 [DashboardSearch](/docs/components/dashboard-search)modal을 여는 데 사용됩니다.

:구성 요소 코드

그것은 [Button](/docs/components/button) 구성 요소를 확장하므로 `color`, `variant`, `size` 등과 같은 속성을 전달할 수 있습니다.

::component-code
---
무시하기:
  - variant @
소품 :
  variant: '미묘한'
---
::

::note{to="#collapsed"}
단추의 기본값은 `color="neutral"`이고 축소되지 않은 경우 `variant="outline"`이고 축소되지 않은 경우 `variant="ghost"`입니다.
::

###  삭제

`collapsed`prop을 사용하여 버튼의 레이블을 숨기고 [kbds](#kbds). 기본값은 `false`입니다.

::component-code
---
상품명 : True
소품 :
  축소됨: true
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
**DashboardSidebar** 구성 요소의 버튼을 사용할 때 `collapsed` 슬롯 소품을 직접 사용합니다.
::

###  Kbds

`kbds`prop을 사용하여 단추에 키보드 키를 표시합니다. 기본값은 `['meta', 'K']`{lang="ts-type"}입니다. @@DashboardSearch](/docs/components/dashboard-search#shortcut) 구성 요소의 기본 바로 가기와 일치합니다.

::component-code
---
상품명 : True
무시하기:
  -  kbds
소품 :
  축소: false
  kbds:
    -  alt '
    - O'
---
::

##  API

### Props 이미지

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<button>`HTML 속성을 지원합니다.
::

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
