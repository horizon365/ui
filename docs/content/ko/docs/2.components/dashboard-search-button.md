---
title: DashboardSearchButton
description: 'DashboardSearch 모달을 여는 사전 스타일 단추입니다.A pre-styled Button to open the DashboardSearch modal.'
category: dashboard
links:
  - label: 단추
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearchButton.vue
---

## Usage

DashboardSearchButton 구성 요소는 [DashboardSearch](/docs/components/dashboard-search) 모달을 열 수 있습니다.

:component-code

[Button](/docs/components/button) 구성 요소를 확장하므로 `color`, `variant`, `size` 등과 같은 모든 속성을 전달할 수 있습니다.

::component-code
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note{to="#collapsed"}
기본적으로 버튼은 축소되지 않은 경우 `color="neutral"` 및 `variant="outline"`, 축소된 경우 `variant="ghost"`로 지정됩니다.
::

### Collapsed 파일

`collapsed` 소품을 사용하여 버튼의 레이블과 [kbds](#kbds)를 숨깁니다. 기본값은 `false`입니다.

::component-code
---
prettier: true
props:
  collapsed: true
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
**DashboardSidebar** 구성 요소의 버튼을 사용하는 경우 `collapsed` 슬롯 소품을 직접 사용합니다.
::

### Kbds 파일

`kbds` 소품을 사용하여 단추에 키보드 키를 표시합니다. [DashboardSearch](/docs/components/dashboard-search#shortcut) 구성 요소의 기본 바로 가기와 일치하려면 기본값이 `['meta', 'K']`{lang="ts-type"}입니다.

::component-code
---
prettier: true
ignore:
  - kbds
props:
  collapsed: false
  kbds:
    - 'alt'
    - 'O'
---
::

## API 사용

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<button>` HTML 속성도 지원합니다.
::

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
