---
description: 요소 위에 마우스를 놓을 때 정보를 표시하는 팝업입니다.
category: overlay
keywords:
  - hint
links:
  - label: 도구 설명
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tooltip.vue
---

##  사용

[Button](/docs/components/button) 또는 툴팁의 기본 슬롯에 있는 다른 구성 요소를 사용합니다.

::component-code
---
상품명 : True
무시하기:
  -  텍스트
소품 :
  제목: 'Open on GitHub'
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

::warning
앱을 Reka UI의 [`App`](/docs/components/app) 구성 요소로 래핑해야 합니다.
::

::tip{to="/docs/components/app#props"}
`App`component`tooltip`prop을 확인하여 툴팁을 전역적으로 구성하는 방법을 확인할 수 있습니다.
::

###  텍스트

`text`prop을 사용하여 툴팁의 내용을 설정합니다.

::component-code
---
상품명 : True
소품 :
  제목: 'Open on GitHub'
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

### Kbds

툴팁에서 `kbds`prop을 사용하여 [Kbd](/docs/components/kbd) 구성요소를 렌더링합니다.

::component-code
---
상품명 : True
무시하기:
  -  텍스트
  -  kbds
소품 :
  제목: 'Open on GitHub'
  kbds:
    -  meta
    -  G
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

::tip
macOS에서는 `meta`와 같은 특수 키를 사용하여 `⌘`로 표시하고 다른 플랫폼에서는 `Ctrl`로 표시할 수 있습니다.
::

###  지연

`delay-duration`prop을 사용하여 도구 설명이 나타나기 전의 지연 시간을 변경합니다. 예를 들어, `0`로 설정하면 즉시 나타나도록 할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  -  텍스트
소품 :
  delayDuration: 0 (delayDuration: 0)
  제목: 'Open on GitHub'
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

::tip
이는 [`App`](/docs/components/app) 구성 요소의 `tooltip.delayDuration` 옵션을 통해 전 세계적으로 구성할 수 있습니다.
::

###  컨텐츠

`content`prop을 사용하여 툴팁 컨텐츠가 렌더링되는 방식을 제어합니다(예: `align` 또는 `side` ).

::tip
이는 [`App`](/docs/components/app) 구성 요소의 `tooltip.content` 옵션을 통해 전 세계적으로 구성할 수 있습니다.
::

::component-code
---
상품명 : True
무시하기:
  -  text
프로젝트:
  content.align:
    -  start
    -  센터
    -  끝
  content.side:
    -  오른쪽
    -  왼쪽
    -  top
    -  아래
소품 :
  컨텐츠:
    정렬: 중심
    측면: 맨 아래
    사이드 오프셋: 8
  제목: 'Open on GitHub'
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

###  Arrow

`arrow`prop을 사용하여 도구 설명에 화살표를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  텍스트
  -  arrow
소품 :
  화살표: True
  제목: 'Open on GitHub'
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

###  비활성 화

`disabled`prop을 사용하여 도구 설명을 비활성화합니다.

::component-code
---
상품명 : True
무시하기:
  -  텍스트
소품 :
  사용 안 함:true
  제목: 'Open on GitHub'
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

##  예제

###  열린 상태 제어

`default-open`prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.

::component-example
---
이름: "tooltip-open-example"
---
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 툴팁을 전환할 수 있습니다.
::

###  다음 커서 포함

[`reference`](https://reka-ui.com/docs/components/tooltip#trigger)prop을 사용하여 요소 위에 마우스를 놓을 때 도구 설명이 커서를 따라 이동하도록 할 수 있습니다.

::component-example
---
이름: 'tooltip-cursor-example'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

###  Emits

:구성요소 - 방출

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
