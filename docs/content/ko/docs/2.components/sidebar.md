---
description: '여러 시각적 변형이 있는 축소 가능한 사이드바입니다.'
category: layout
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

##  사용

사이드바 구성 요소는 페이지 내용을 푸시하는 독립형 고정 사이드바입니다. 데스크탑에서는 인라인으로 렌더링되며 축소될 수 있습니다. 모바일에서는 [Modal](/docs/components/modal)[Slideover](/docs/components/slideover ) 또는 [ Drawer](/docs/components/drawer) 구성 요소.

::tip{to="/docs/components/dashboard-sidebar"}
**Sidebar vs DashboardSidebar** : 이 구성 요소는 어디서나 드롭 할 수있는 간단한, 독립형 사이드바입니다.(채팅 패널, 설정, 탐색).드래그 투 크기, 상태 지속성 및 통합 [DashboardGroup](/docs/components/dashboard-group), 대신 [DashboardSidebar](/docs/components/dashboard-sidebar)를 사용합니다.
::

`header``default` 및 `footer` slots를 사용하여 사이드바 내용을 사용자 정의합니다.`v-model:open` 지시문은 뷰포트를 인식합니다: 데스크톱에서는 확장/축소 상태를 제어하고 모바일에서는 메뉴를 제어합니다.

::component-example
---
축소: true
상품명 : True
이름: sidebar-example
overflowHidden: true
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---
::

###  Variant

사이드바의 비주얼 스타일을 변경하려면 `variant`prop을 사용합니다. 기본값은 `sidebar`입니다.

::component-example
---
축소: true
상품명 : True
이름: 'sidebar-props-example'
overflowHidden: true
선택 사항:
  - 이름: 'variant'
    레이블: 'variant'
    항목:
      -  사이드바
      -  floating
      -  inset
    기본값: 'inset'
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---
::

### Collapsible 이미지

사이드바의 축소 동작을 변경하려면 `collapsible`prop을 사용합니다. 기본값은 `offcanvas`입니다.

- `offcanvas` : 사이드바가 완전히 시야에서 벗어납니다.
- `icon` : 사이드바가 아이콘만 너비로 축소됩니다.
- `none` : 사이드바가 축소 가능하지 않습니다.

::component-example
---
축소: true
상품명 : True
이름: 'sidebar-props-example'
overflowHidden: true
선택 사항:
  -  이름: '축소 가능'
    사진: "collapsable"
    항목:
      - offcanvas @ 오프캔버스
      -  icon
      -  없 음
    기본값: "icon"
  -  이름: 'variant'
    레이블: 'variant'
    프로젝트:
      -  사이드바
      -  floating
      -  inset
    기본값: 사이드바
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---
::

::tip{to="#slots"}
슬롯 소품에서 `state`에 액세스하여 사이드바가 축소될 때 내용을 사용자 정의할 수 있습니다.
::

###  사이드

사이드바의 측면을 변경하려면 `side`prop을 사용합니다. 기본값은 `left`입니다.

::component-example
---
축소: true
상품명 : True
이름: 'sidebar-props-example'
overflowHidden: true
선택 사항:
  - 이름: 'side'
    사진: "Side"
    프로젝트:
      -  왼쪽
      -  오른쪽
    기본값: "right"
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---
::

###  제목

`title`prop 을 사용하여 사이드바 헤더의 제목을 설정합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
  -  ui
무시하기:
  - ui.container - ui.container (으)로 검색 제한하기
소품 :
  제목 : Navigation
  ui:
    컨테이너: h-full
슬롯 :
  기본값 :|

    <Placeholder class="h-full" />
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---

: placeholder{class="h-full"}
::

###  설명

`description`prop을 사용하여 사이드바 헤더에 대한 설명을 설정합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
  -  ui
무시하기:
  -  title
  - ui.container - ui.container
소품 :
  제목 : Navigation
  설명: 작업공간 찾아보기
  ui:
    컨테이너: h-full
슬롯 :
  기본값 :|

    <Placeholder class="h-full" />
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---

: placeholder{class="h-full"}
::

###  레일

`rail`prop을 사용하여 클릭 시 축소된 상태를 전환하는 세로 막대에 얇은 대화식 가장자리를 표시합니다. 레일은 `collapsible`가 `none`가 아닌 경우에만 렌더링됩니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  - ui.container - ui.container
숨기기 (Hide):
  -  ui
  -  클래스
소품 :
  레일: true
  축소 가능:아이콘
  제목 : Navigation
  ui.container: h-full 컨테이너
슬롯 :
  기본값 :|

    <Placeholder class="h-full" />
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---

: placeholder {class="h-full"}
::

###  닫기

`close`prop을 사용하여 사이드바 헤더에 닫기 단추를 표시합니다. 닫기 단추는 `collapsible`가 `none`가 아닌 경우에만 렌더링됩니다.

[Button](/docs/components/button) 구성 요소에서 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  rail
  - ui.container - ui.container
숨기기 (Hide):
  -  ui
  -  클래스
소품 :
  닫기: true
  레일: true
  축소 가능:아이콘
  제목 : Navigation
  ui:
    컨테이너: h-full
프로젝트:
  닫기:
    -  true
    -  false
슬롯 :
  기본 값:|

    <Placeholder class="h-full" />
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---

: placeholder{class="h-full"}
::

### 아이콘 닫기

`close-icon`prop을 사용하여 닫기 버튼 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  rail
  -  side
  -  닫기
  - ui.container - ui.container
숨기기 (Hide):
  -  ui
  -  클래스
소품 :
  닫기: True
  closeIcon: i-lucide-panel-right-close
  레일: true
  축소 가능:아이콘
  측면: 오른쪽
  제목 : Navigation
  ui:
    컨테이너: h-full
프로젝트:
  닫기:
    -  true
    -  false
슬롯 :
  기본값 :|

    <Placeholder class="h-full" />
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---

: placeholder{class="h-full"}
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.close` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.close` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  모드

`mode`prop을 사용하여 모바일에서 사이드바 메뉴의 모드를 변경합니다. 기본값은 `slideover`입니다.

::component-example
---
축소: true
iframe :
  높이 : 500px;
iframeMobile : true
overflowHidden: true
이름: sidebar-mode-example
선택 사항:
  - 이름: 'mode'
    모델 번호:mode
    기본값: 'slideover'
    항목:
      -  modal
      - slideover @ 슬라이드오버
      -  서랍
소품 :
  클래스: 'w-full'
---
::

::tip{to="#props"}
당신은 `menu`prop을 사용하여 사이드바의 메뉴를 사용자 정의 할 수 있습니다, 그것은 당신이 선택한 모드에 따라 적응합니다.
::

##  예

###  열린 상태 제어

`open`prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.데스크톱에서는 확장/축소 상태를 제어하고 모바일에서는 시트 메뉴를 열거나 닫습니다.

::component-example
---
축소: true
상품명 : True
이름: 'sidebar-open-example'
overflowHidden: true
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 사이드바의 열기를 전환할 수 있습니다.
::

### 지속적인 오픈 상태

VueUse에서 [`useLocalStorage`](https://vueuse.org/core/useLocalStorage/) @ @ [`useCookie`]( 대신 https://nuxt.com/docs/4.x/api/composables/use-cookie)를 사용하여 상태 사이드바 페이지를 다시로드합니다.

::component-example
---
축소: true
상품명 : True
이름: 'sidebar-persist-example'
overflowHidden: true
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---
::

::note
앞의 예제와 유일한 차이점은 `ref(true)`를 `useLocalStorage('sidebar-open', true)`로 바꾸는 것입니다.
::

### 사용자 지정 너비로

사이드바 너비는 `--sidebar-width`CSS 변수(기본값은 `16rem`)로 제어됩니다. 축소된 아이콘 너비는 `--sidebar-width-icon`(기본값은 `4rem`)로 제어됩니다.

CSS에서 전역적으로 또는 인스턴스별로 `style` 속성을 덮어씁니다.

::component-example
---
축소: true
상품명 : True
이름: 'sidebar-width-example'
overflowHidden: true
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---
::

###  헤더 포함

사이드바를 [Header](/docs/components/header) 아래에 배치하려면 `ui`prop을 사용하여 `gap` 및 `container`를 사용자 지정합니다.

::component-example
---
축소: true
상품명 : True
이름: 'sidebar-header-example'
overflowHidden: true
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---
::

::note
`--ui-header-height` 변수는 기본적으로 `4rem`로 설정되며 헤더에서 사용됩니다. navbar가 다른 높이를 사용할 경우 조정합니다.
::

### AI 채팅으로

오른쪽 사이드바를 사용하여 [ChatMessages](/docs/components/chat-messages) 및 [ChatPrompt](/docs/components/chat-prompt) AI 채팅 패널을 만들 수 있습니다.

::component-example
---
축소: true
상품명 : True
이름: 'sidebar-chat-example'
overflowHidden: true
class: '!p-0!justify-start h-[500px] contain -[paint] transform-gpu'
---
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
