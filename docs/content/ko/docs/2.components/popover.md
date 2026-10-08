---
description: 트리거 요소 주위에 부동하는 비모달 대화상자입니다.
category: overlay
keywords:
  - hover card
  - flyout
links:
  - label: 호버카드 (HoverCard)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/hover-card
  - label: 포포포버 Popover
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/popover
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Popover.vue
---

##  사용

[Button](/docs/components/button) 또는 Popover의 기본 슬롯에 있는 다른 구성 요소를 사용합니다.

그런 다음 `#content` 슬롯을 사용하여 Popover가 열려 있을 때 표시되는 내용을 추가합니다.

::component-code
---
상품명 : True
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  컨텐츠 :|

    <Placeholder class="size-48 m-4 inline-flex" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

#content 내용
: placeholder{class="size-48 m-4 inline-flex"}
::

###  모드

`mode`prop을 사용하여 Popover의 모드를 변경합니다. 기본값은 `click`입니다.

::tip
`hover`모드에서 `enable-touch`prop을 설정하여 사용자가 터치 장치에서 트리거를 탭하여 Popover를 전환하거나 탭할 트리거에 대해 `click` 모드를 사용하도록 합니다.
::

::component-code
---
상품명 : True
프로젝트:
  모드:
    -  click
    -  hover
소품 :
  모델 번호:hover
  enableTouch: true
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  컨텐츠:|

    <Placeholder class="size-48 m-4 inline-flex" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

#content 내용
: placeholder{class="size-48 m-4 inline-flex"}
::

::note
`hover` 모드를 사용하는 경우 Reka UI[`HoverCard`](https://reka-ui.com/docs/components/hover-card) 구성 요소를 [`Popover`]() 대신 사용합니다.
::

###  지연

`hover` 모드를 사용할 때는 `open-delay` 및 `close-delay`props를 사용하여 Popover가 열리거나 닫히기 전의 지연 시간을 제어할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  -  모드
소품 :
  모델 번호:hover
  OpenDelay: 500 이상
  closeDelay : 300
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  컨텐츠:|

    <Placeholder class="size-48 m-4 inline-flex" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

#content 내용
: placeholder{class="size-48 m-4 inline-flex"}
::

###  컨텐츠

`content`prop을 사용하여 Popover 콘텐츠가 렌더링되는 방식을 제어합니다(예: `align` 또는 `side` ).

::component-code
---
상품명 : True
항목:
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
  컨텐츠 :
    정렬: 중심
    측면: 맨 아래
    사이드 오프셋: 8
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  컨텐츠:|

    <Placeholder class="size-48 m-4 inline-flex" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

#content 내용
: placeholder{class="size-48 m-4 inline-flex"}
::

###  화살표

`arrow`prop 을 사용하여 Popover 에 화살표를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  arrow
소품 :
  화살표: true
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  컨텐츠:|

    <Placeholder class="size-48 m-4 inline-flex" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

#content 내용
: placeholder {class="size-48 m-4 inline-flex"}
::

### Modal @ 모달

`modal`prop을 사용하여 Popover가 외부 콘텐츠와의 상호 작용을 차단할지 여부를 제어합니다. 기본값은 `false`입니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  모달: true
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  컨텐츠 :|

    <Placeholder class="size-48 m-4 inline-flex" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

#content 내용
: placeholder{class="size-48 m-4 inline-flex"}
::

###  허용되지 않음

`dismissible`prop을 사용하여 Popover 외부를 클릭하거나 escape를 누를 때 Popover가 허용되지 않도록 설정합니다. 기본값은 `true`입니다.

::note
`close:prevent` 이벤트는 사용자가 종료하려고 할 때 발생합니다.
::

::component-example
---
이름: popher-dismissible-example
---
::

##  예

###  열린 상태 제어

`default-open`prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.

::component-example
---
제목: popher-open-example
---
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 Popover를 전환할 수 있습니다.
::

###  명령 팔레트 사용

Popover의 콘텐츠에 [CommandPalette](/docs/components/command-palette) 구성 요소를 사용할 수 있습니다.

::component-example
---
축소: true
이름: popher-command-palette-example
---
::

###  다음 커서

요소 위에 마우스를 놓을 때 [`reference`](https://reka-ui.com/docs/components/tooltip#trigger)prop을 사용하여 Popover가 커서를 따라 이동하도록 할 수 있습니다.

::component-example
---
이름 : popher-cursor-example
---
::

### 앵커 슬롯 포함

`#anchor`slot을 사용하여 Popover를 사용자 정의 요소에 대해 배치할 수 있습니다.

::warning
이 슬롯은 `mode`이 `click`일 때만 작동합니다.
::

::component-example
---
축소: true
이름: popher-anchor-slot-example
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

::note
`close` 함수는 `mode`가 `click`로 설정된 경우에만 사용할 수 있습니다. Reka UI가 [](https://reka-ui.com/docs/components/popover#close-using-slot-props ) 하지만 [`HoverCard` 에 대해서는 사용할 수 없습니다.
::

###  에미츠

:구성요소 - 방출

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
