---
description: 화면의 어느 쪽에서나 슬라이드 인하는 대화 상자입니다.
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: 대화 상자
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slideover.vue
---

##  사용

[Button](/docs/components/button) 또는 Slideover의 기본 슬롯에 있는 다른 구성 요소를 사용합니다.

그런 다음 `#content`슬롯을 사용하여 Slideover가 열려 있을 때 표시되는 내용을 추가합니다.

::component-code
---
상품명 : True
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  컨텐츠:|

    <Placeholder class="h-full m-4" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

#content 내용
: placeholder{class="h-full m-4"}
::

또한 `#header`{lang="ts-type"}`#body`{lang="ts-type"} 및 `#footer`{lang="ts-type"} 슬롯을 사용하여 Slideover 콘텐츠를 사용자 정의할 수 있습니다.

###  제목

`title`prop을 사용하여 Slideover의 헤더 제목을 설정합니다.

::component-code
---
상품명 : True
소품 :
  제목: 'Slideover with title'
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문:|

    <Placeholder class="h-full" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder{class="h-full"}
::

###  설명

`description`prop을 사용하여 Slideover 헤더에 대한 설명을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  제목: 'Slideover with description'
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit" (로렘 ipsum dolor sit amet, consectetur adipiscing elit)" 이라는 문구가 있다.
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문 (Body):|

    <Placeholder class="h-full" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder{class="h-full"}
::

###  닫기

`close`prop을 사용하여 Slideover 헤더에 표시된 닫기 버튼(`false` 값)을 사용자 정의하거나 숨깁니다.

[Button](/docs/components/button) 구성 요소에서 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  close. color
  - close.variant - close.variant
소품 :
  제목 : Slideover with close button
  닫기:
    색상: 기본
    변형: 윤곽선
    클래스: rounded-full
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문 (Body):|

    <Placeholder class="h-full" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 본문
: placeholder {class="h-full"}
::

::note
`#content`슬롯이 헤더의 일부로 사용되는 경우 닫기 버튼이 표시되지 않습니다.
::

### 아이콘 닫기

`close-icon`prop을 사용하여 닫기 버튼 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  제목 : Slideover with close button
  closeIcon: 'i-lucide-arrow-right'
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문:|

    <Placeholder class="h-full" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 본문
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

###  사이드

`side`prop을 사용하여 Slideover가 .Defaults에서 슬라이드로 들어갈 화면 측면을 `right`로 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  사진: "Left"
  사진: "Slideover with side"
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문:|

    <Placeholder class="h-full min-h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder {class="h-full min-h-48"}
::

### Inset:badge{label="4.3+" class="align-text-top"} @ {label="4.3+" class="align-text-top"}

`inset`prop 을 사용하여 가장자리에서 Slideover 를 삽입합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  사진: "right"
  삽입: true
  제목: 'Slideover with inset'
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문 (Body):|

    <Placeholder class="min-w-96 min-h-96 size-full" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 본문
: placeholder{class="min-w-96 min-h-96 size-full"}
::

###  전환

`transition`prop을 사용하여 Slideover가 애니메이션되는지 여부를 제어합니다. 기본값은 `true`입니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  변환: false
  제목: 'Slideover without transition'
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문 (Body):|

    <Placeholder class="h-full" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 본문
: placeholder{class="h-full"}
::

###  오버레이

`overlay`prop을 사용하여 Slideover에 오버레이가 있는지 여부를 제어할 수 있습니다. 기본값은 `true`입니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  오버레이: false
  제목: 'Slideover without overlay'
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문:|

    <Placeholder class="h-full" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder{class="h-full"}
::

###  Modal

`modal`prop을 사용하여 Slideover가 외부 콘텐츠와의 상호 작용을 차단할지 여부를 제어합니다. 기본값은 `true`입니다.

::note
`modal`가 `false`로 설정되면 오버레이가 자동으로 비활성화되고 외부 콘텐츠가 대화형으로 전환됩니다.
::

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  모달: false
  제목: Slideover interactive
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문:|

    <Placeholder class="h-full" />
---

: u 버튼 {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder{class="h-full"}
::

###  허용되지 않음

`dismissible`prop을 사용하여 Slideover 외부를 클릭하거나 escape를 누를 때 Slideover를 허용하지 않도록 설정합니다. 기본값은 `true`입니다.

::note
`close:prevent` 이벤트는 사용자가 닫으려고 할 때 발생합니다.
::

::tip
`modal: false`와 `dismissible: false`를 결합하여 Slideover 배경을 닫지 않고도 대화형으로 만들 수 있습니다.
::

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  허용 안 함: false
  모달: True
  제목: 'Slideover non-dismissible'
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문 (Body):|

    <Placeholder class="h-full" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder{class="h-full"}
::

###  언마운트: badge{label="4.10+" class="align-text-top"}

`unmount-on-hide`prop을 사용하여 Slideover가 닫힐 때 콘텐츠가 마운트 해제되지 않도록 합니다. 기본값은 `true`입니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  unmountOnHide : false
  제목: Slideover
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문:|

    <Placeholder class="h-full" />
---

: u 버튼 {label="Open" color="neutral" variant="subtle"}

# 본문
: placeholder {class="h-full"}
::

::note
DOM을 검사하여 Slideover가 닫혀 있는 동안에도 렌더링되는 내용을 볼 수 있습니다.You can inspect the DOM to see the Slideover's content being rendered even while it is closed.
::

::tip
`portal`prop이 `false`로 설정되어 있으면 컨텐츠도 서버에 렌더링됩니다. SSR 중에 페이지 로드 시 플래시 없이 열린 슬라이드오버를 렌더링하거나 SEO에 노출하는 데 유용합니다.
::

##  예

###  오픈 상태 제어

`default-open`prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.

::component-example
---
이름 : 'slideover-open-example'
---
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 슬라이드오버를 전환할 수 있습니다.
::

::tip
이렇게 하면 트리거를 Slideover 밖으로 이동하거나 완전히 제거할 수 있습니다.This lets you move the trigger outside of the Slideover or remove it entirely.
::

###  프로그래밍 방식 사용법

프로그래밍 방식으로 Slideover를 열려면 [`useOverlay`](/docs/composables/use-overlay)composable을 사용할 수 있습니다.

::warning
앱을 [`App`](/docs/components/app) 구성 요소로 래핑해야 합니다.[`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue) 구성 요소를 사용합니다.
::

먼저 프로그래밍 방식으로 열 슬라이드오버 컴포넌트를 생성합니다.

::component-example
---
상품명 : True
이름: 'slideover-example'
미리 보기:거짓
---
::

::note
슬라이드오버가 닫히거나 여기서 무시될 때 `close` 이벤트를 실행합니다. `close` 이벤트를 통해 임의의 데이터를 내보낼 수 있으며 해당 데이터는 `open()`의 확인된 값이 됩니다. promise가 해결되려면 이벤트를 내보내야 합니다.
::

그런 다음 앱에서 사용하십시오.Use it in your app:

::component-example
---
이름: 'slideover-programmatic-example'
---
::

::tip
`emit('close')`를 출력하여 슬라이드오버 컴포넌트 내에서 슬라이드오버를 닫을 수 있습니다.
::

### Nested 슬라이드오버

슬라이드오버를 서로 내부에 중첩할 수 있습니다.

::component-example
---
이름: "slideover-nested-example"
---
::

###  바닥글 슬롯 포함

`#footer` 슬롯을 사용하여 Slideover의 본문 뒤에 콘텐츠를 추가합니다.

::component-example
---
이름: 'slideover-footer-slot-example'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

###  Emits

:구성요소 - 방사

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
