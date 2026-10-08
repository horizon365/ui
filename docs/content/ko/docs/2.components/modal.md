---
description: 메시지를 표시하거나 사용자 입력을 요청하는 데 사용할 수 있는 대화상자 창입니다.
category: overlay
keywords:
  - dialog
  - popup
  - confirm
  - alert dialog
links:
  - label: 대화 상자
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Modal.vue
---

##  사용

[Button](/docs/components/button) 또는 Modal의 기본 슬롯에 있는 다른 구성 요소를 사용합니다.

그런 다음 `#content` 슬롯을 사용하여 모달이 열려 있을 때 표시되는 내용을 추가합니다.

::component-code
---
상품명 : True
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  컨텐츠:|

    <Placeholder class="h-48 m-4" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

#content 내용
: placeholder{class="h-48 m-4"}
::

또한 `#header`{lang="ts-type"}`#body`{lang="ts-type"} 및 `#footer`{lang="ts-type"} 슬롯을 사용하여 모달 콘텐츠를 사용자 정의할 수 있습니다.

###  제목

`title`prop을 사용하여 Modal의 헤더 제목을 설정합니다.

::component-code
---
상품명 : True
소품 :
  제목: "Modal with title"
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문:|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder{class="h-48"}
::

###  설명

`description`prop을 사용하여 Modal 헤더에 대한 설명을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  사진: "Modal with description"
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit" (로렘 ipsum dolor sit amet, consectetur adipiscing elit)" 이라는 문구가 있다.
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문 (Body):|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder{class="h-48"}
::

###  닫기

`close`prop 을 사용하여 Modal 헤더에 표시된 닫기 버튼(`false` 값)을 사용자 정의하거나 숨깁니다.

[Button](/docs/components/button) 구성 요소에서 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  close. color
  - close.variant - close.variant
소품 :
  제목: "Modal with Close Button"
  닫기:
    색상: 기본
    변형: 윤곽선
    클래스: rounded-full
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문:|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 본문
: placeholder {class="h-48"}
::

::tip
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
  제목: "Modal with Close Button"
  closeIcon: 'i-lucide-arrow-right'
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문 (Body):|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder{class="h-48"}
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

###  전환

`transition`prop을 사용하여 모달이 애니메이션되는지 여부를 제어합니다. 기본값은 `true`입니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  변환: false
  제목: Modal without transition
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문:|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 본문
: placeholder {class="h-48"}
::

###  오버레이

`overlay`prop 을 사용하여 모달에 오버레이가 있는지 여부를 제어합니다. 기본값은 `true`입니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  오버레이: false
  사진: "Modal without overlay"
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문:|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder{class="h-48"}
::

###  Modal

`modal`prop을 사용하여 모달이 외부 콘텐츠와의 상호 작용을 차단할지 여부를 제어합니다. 기본값은 `true`입니다.

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
  제목: Modal Interactive
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문 (Body):|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 본문
: placeholder{class="h-48"}
::

###  허용되지 않음

`dismissible`prop을 사용하여 모달 외부를 클릭하거나 escape 키를 누를 때 모달이 허용되지 않는지 여부를 제어합니다. 기본값은 `true`입니다.

::note
`close:prevent` 이벤트는 사용자가 종료하려고 할 때 발생합니다.
::

::tip
`modal: false`와 `dismissible: false`를 결합하여 Modal의 배경을 닫지 않고도 대화형으로 만들 수 있습니다.
::

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  허용 안 함: false
  모달: true
  사진: "modal non-dismissible"
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문 (Body):|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 본문
: placeholder{class="h-48"}
::

### 스크롤 가능: badge{label="4.2+" class="align-text-top"}

`scrollable`prop을 사용하여 Modal의 콘텐츠를 오버레이 내에서 스크롤할 수 있도록 만듭니다.

::warning
스크롤에 오버레이가 필요하기 때문에 `modal: false`는 호환되지 않으며 `overlay: false`는 배경만 제거합니다.
::

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  스크롤 가능: true
  오버레이: True
  제목: Modal Scrollable
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문 (Body):|

    <Placeholder class="h-full" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder{class="h-screen"}
::

::caution
[known issue](https://reka-ui.com/docs/components/dialog#scrollable-overlay) 여기서 스크롤 막대를 클릭하면 일부 운영 체제에서 대화 상자가 의도하지 않게 종료 될 수 있습니다.
::

### Fullscreen 이미지

`fullscreen`prop을 사용하여 Modal 전체 화면을 만듭니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  fullscreen
소품 :
  전체 화면:true
  사진: "Modal fullscreen"
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문:|

    <Placeholder class="h-full" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder {class="h-full"}
::

###  언마운트: badge{label="4.10+" class="align-text-top"}

모달 콘텐츠가 닫힐 때 마운트 해제되지 않도록 하려면 `unmount-on-hide`prop을 사용합니다. 기본값은 `true`입니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  unmountOnHide : false
  사진: "Modal"
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" />

  본문:|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle"}

# 바디
: placeholder{class="h-48"}
::

::note
DOM을 검사하여 Modal이 닫혀 있는 동안에도 렌더링되는 내용을 볼 수 있습니다.
::

::tip
`portal`prop이 `false`로 설정되어 있으면 컨텐츠도 서버에서 렌더링됩니다. SSR 중에 페이지 로드 시 플래시 없이 열린 모드를 렌더링하거나 SEO에 콘텐츠를 노출시키는 데 유용합니다.
::

##  예

###  열린 상태 제어

`default-open`prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.

::component-example
---
이름 : 'modal-open-example'
---
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 모드를 전환할 수 있습니다. kbd{value="O"}를 누르면 됩니다.
::

::tip
이렇게 하면 트리거를 모달 밖으로 이동하거나 완전히 제거할 수 있습니다.
::

###  프로그래밍 방식 사용법

[`useOverlay`](/docs/composables/use-overlay)컴포지블을 사용하여 모드를 프로그래밍 방식으로 열 수 있습니다.

::warning
앱을 [`App`](/docs/components/app`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue) 구성 요소로 래핑해야 합니다.
::

먼저 프로그래밍 방식으로 열 모달 컴포넌트를 만듭니다.First, create a modal component that will be opened programmatically:

::component-example
---
상품명 : True
이름 : 'modal-example'
미리 보기:false
---
::

::note
모달이 닫히거나 해제되면 `close` 이벤트가 발생합니다. `close` 이벤트를 통해 임의의 데이터를 전송할 수 있으며, 해당 데이터는 `open()`의 확인된 값이 됩니다. promise가 해결되려면 이벤트를 내보내야 합니다.
::

그런 다음 앱에서 사용하십시오.Use it in your app:

::component-example
---
이름: 'modal-programmatic-example'
---
::

::tip
모달 구성요소 내에서 모달을 닫으려면 `emit('close')`를 출력합니다.
::

### Nested modals 이미지

당신은 서로 안에 modals를 중첩 할 수 있습니다.

::component-example
---
이름: 'modal-nested-example'
---
::

###  바닥글 슬롯 포함

`#footer` 슬롯을 사용하여 Modal의 본문 뒤에 콘텐츠를 추가합니다.

::component-example
---
name: 'modal-footer-slot-example' (modal-footer-slot-example)'
---
::

###  명령 팔레트 사용

Modal 콘텐츠에 [CommandPalette](/docs/components/command-palette) 구성 요소를 사용할 수 있습니다.

::component-example
---
축소: true
name: 'modal-command-palette-example' (modal-command-palette-example)'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 Modal이 열릴 때만 데이터를 가져옵니다.
::

##  API

### Props @ 프로스

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  에미츠

:구성요소 - 방출

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
