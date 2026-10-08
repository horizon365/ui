---
description: 화면 안팎으로 부드럽게 미끄러지는 서랍
category: overlay
keywords:
  - bottom sheet
  - action sheet
  - mobile sheet
links:
  - label: 서랍 서랍
    icon: i-custom-reka-ui
    to: https://github.com/unovue/vaul-vue
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Drawer.vue
---

##  사용

[Button](/docs/components/button) 또는 서랍의 기본 슬롯에 있는 다른 구성 요소를 사용합니다.

그런 다음 `#content` 슬롯을 사용하여 Drawer가 열려 있을 때 표시되는 내용을 추가합니다.

::component-code
---
상품명 : True
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  컨텐츠:|

    <Placeholder class="h-48 m-4" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content 내용
: placeholder{class="h-48 m-4"}
::

또한 `#header`{lang="ts-type"}`#body`{lang="ts-type"} 및 `#footer`{lang="ts-type"} 슬롯을 사용하여 서랍의 콘텐츠를 사용자 정의할 수 있습니다.

###  제목

`title`prop을 사용하여 Drawer 헤더의 제목을 설정합니다.

::component-code
---
상품명 : True
소품 :
  사진: "Drawer with title"
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  본문 (Body):|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

# 바디
: placeholder{class="h-48"}
::

###  설명

`description`prop을 사용하여 Drawer의 헤더에 대한 설명을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  사진: "Drawer with description"
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit" (로렘 ipsum dolor sit amet, consectetur adipiscing elit)" 이라는 문구가 있다.
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  본문 (Body):|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

# 바디
: placeholder{class="h-48"}
::

### 닫기: badge{label="4.10+" class="align-text-top"}

`close`prop을 사용하여 서랍에 닫기 단추를 표시합니다. 기본값은 `false`입니다.

[Button](/docs/components/button) 구성 요소에서 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  close. color
  - close.variant - close.variant
소품 :
  사진: "Drawer with close button"
  닫기:
    색상: 기본
    변형: 외곽 선
    클래스: rounded-full
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  본문 (Body):|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

# 본문
: placeholder{class="h-48"}
::

### 닫기 아이콘: badge{label="4.10+" class="align-text-top"}

`close-icon`prop을 사용하여 닫기 버튼 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  사진: "Drawer with close button"
  닫기: true
  closeIcon: 'i-lucide-arrow-right'
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  본문 (Body):|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

# 본문
: placeholder{class="h-48"}
::

###  방향

`direction`prop 을 사용하여 Drawer의 방향을 제어합니다. 기본값은 `bottom`입니다.

::component-code
---
상품명 : True
소품 :
  방향 : "right"
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  컨텐츠 :|

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content 내용
: placeholder {class="min-w-96 min-h-96 size-full m-4"}
::

###  Inset

`inset`prop을 사용하여 가장자리에서 Drawer를 삽입합니다.

::component-code
---
상품명 : True
소품 :
  방향 : "right"
  삽입: true
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  컨텐츠:|

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content 내용
: placeholder {class="min-w-96 min-h-96 size-full m-4"}
::

###  핸들

`handle`prop 을 사용하여 서랍에 핸들이 있는지 여부를 제어합니다. 기본값은 `true`입니다.

::component-code
---
상품명 : True
소품 :
  핸들: false
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  컨텐츠 :|

    <Placeholder class="h-48 m-4" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content 내용
: placeholder{class="h-48 m-4"}
::

###  핸들만 사용

`handle-only`prop을 사용하여 Drawer를 핸들로만 드래그할 수 있습니다.

::component-code
---
상품명 : True
소품 :
  handleOnly : true
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  컨텐츠:|

    <Placeholder class="h-48 m-4" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content 내용
: placeholder{class="h-48 m-4"}
::

###  오버레이

`overlay`prop을 사용하여 Drawer에 오버레이가 있는지 여부를 제어할 수 있습니다. 기본값은 `true`입니다.

::component-code
---
상품명 : True
소품 :
  오버레이: false
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  컨텐츠:|

    <Placeholder class="h-48 m-4" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content 내용
: placeholder {class="h-48 m-4"}
::

### Modal @ 모달

`modal`prop을 사용하여 Drawer가 외부 콘텐츠와의 상호 작용을 차단할지 여부를 제어합니다. 기본값은 `true`입니다.

::note
`modal`가 `false`로 설정되면 오버레이가 자동으로 비활성화되고 외부 콘텐츠가 대화형으로 전환됩니다.
::

::component-code
---
상품명 : True
소품 :
  모달: false
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  컨텐츠 :|

    <Placeholder class="h-48 m-4" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content 내용
: placeholder{class="h-48 m-4"}
::

###  허용되지 않음

`dismissible`prop을 사용하여 Drawer의 바깥쪽을 클릭하거나 escape를 누를 때 Drawer가 허용되지 않도록 설정합니다. 기본값은 `true`입니다.

::note
`close:prevent` 이벤트는 사용자가 종료하려고 할 때 발생합니다.
::

::tip
`modal: false`와 `dismissible: false`를 결합하여 Drawer의 배경을 닫지 않고도 대화형으로 만들 수 있습니다.
::

::component-example
---
상품명 : True
이름: 'drawer-dismissible-example'
---
::

### 스케일 배경

Drawer가 열려 있을 때 `should-scale-background`prop을 사용하여 배경의 배율을 조정하여 시각적 깊이를 만듭니다. `set-background-color-on-scale`prop을 `false`로 설정하면 배경색이 변하지 않습니다.

::component-code
---
상품명 : True
소품 :
  shouldScaleBackground: true : true
  setBackgroundColorOnScale: true
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  컨텐츠 :|

    <Placeholder class="h-48 m-4" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content 내용
: placeholder{class="h-screen m-4"}
::

::warning
이 작업을 수행하려면 앱의 부모 요소에 `data-vaul-drawer-wrapper` 지시문을 추가해야 합니다.Make sure to add the `data-vaul-drawer-wrapper` directive to a parent element of your app.

```vue [app.vue]
<template>
  <UApp>
    <div class="bg-default" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    }
  }
})
```

::

##  예제

###  열린 상태 제어

`default-open`prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.

::component-example
---
상품명 : True
이름: 'drawer-open-example'
---
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 Drawer를 전환할 수 있습니다.
::

::tip
이렇게 하면 트리거를 Drawer 외부로 이동하거나 완전히 제거할 수 있습니다.
::

### 반응형 서랍

예를 들어 [Modal](/docs/components/modal) 구성 요소를 바탕 화면에서 렌더링하고 모바일에서는 Drawer를 렌더링할 수 있습니다.

::component-example
---
상품명 : True
이름: 'drawer-responsive-example'
---
::

### Nested 서랍

`nested`prop을 사용하여 서랍을 서로 중첩할 수 있습니다.

::component-example
---
상품명 : True
이름: 'drawer-nested-example'
---
::

###  바닥글 슬롯 포함

`#footer` 슬롯을 사용하여 Drawer의 본문 뒤에 내용을 추가합니다.

::component-example
---
상품명 : True
축소: true
이름: 'drawer-footer-slot-example'
---
::

###  명령 팔레트 사용

Drawer의 콘텐츠에 [CommandPalette](/docs/components/command-palette) 구성 요소를 사용할 수 있습니다.

::component-example
---
축소: true
이름: 'drawer-command-palette-example'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 Drawer가 열릴 때만 데이터를 가져옵니다.
::

##  API

### Props @ 프로스

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  에미츠

:구성요소 - 방사

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
