---
description: 사용자에게 정보 또는 피드백을 제공하는 간결한 메시지입니다.
category: overlay
keywords:
  - notification
  - snackbar
  - flash message
links:
  - label: 토스트 (Toast)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/toast
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toast.vue
---

##  사용

[useToast](/docs/composables/use-toast)컴포지블을 사용하여 응용 프로그램에 토스트를 표시합니다.

::component-example
---
축소: true
상품명 : True
이름: toast-example
---
::

::warning
앱을 [`App`](/docs/components/app) 구성 요소로 포장해야 합니다. [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) 구성 요소는 https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue]( 구성 요소로 포장해야 합니다. ]([ 구성 요소로 포장해야 합니다. Reka UI 의 구성요소.
::

::tip{to="/docs/components/app#props"}
`App`component`toaster`prop을 확인하여 Toaster를 전역적으로 구성하는 방법을 확인할 수 있습니다.
::

###  제목

`title` 필드를 `toast.add` 메소드에 전달하여 제목을 표시합니다.

::component-example
---
선택 사항:
  - 이름: 'title'
    레이블 : "title"
    기본값: "어! 뭔가 잘못되었습니다."
이름: 'toast-title-example'
---
::

###  설명

`description` 필드를 `toast.add` 메소드에 전달하여 설명을 표시합니다.

::component-example
---
선택 사항:
  - 이름: 'title'
    레이블 : "title"
    기본값: '어! 뭔가 잘못되었어.'
  - name: '설명'
    레이블: "Description"
    기본값: "요청에 문제가 있습니다."
이름: 'toast-description-example'
---
::

###  아이콘

`icon` 필드를 `toast.add` 메소드에 전달하여 [Icon](/docs/components/icon) 를 표시합니다.

::component-example
---
선택 사항:
  - 이름: 'icon'
    레이블: "icon"
    기본값: 'i-lucide-wifi'
이름: 'toast-icon-example'
---
::

### Avatar 이미지

`avatar` 필드를 `toast.add` 메소드에 전달하여 [Avatar](/docs/components/avatar) 를 표시합니다.

::component-example
---
선택 사항:
  -  이름: 'avatar.src'
    제목: Avatar
    레이블: 'avatar.src'
    기본 값:
      src: 'https://github.com/benjamincanac.png'
이름: toast-avatar-example
---
::

###  색상

`color` 필드를 `toast.add` 메소드에 전달하여 토스트의 색상을 변경합니다.

::component-example
---
선택 사항:
  - 이름: 'color'
    레이블: "Color"
    기본 값: 중립
    항목:
      -  primary
      -  secondary
      -  성공
      -  info
      -  경고
      -  오류
      -  neutral
이름: toast-color-example
---
::

###  닫기

`close` 필드를 전달하여 닫기 [Button](/docs/components/button) (`false` 값 포함)를 사용자 지정하거나 숨깁니다.

::component-example
---
이름: toast-close-example (toast-close-example)
---
::

### 아이콘 닫기

`closeIcon` 필드를 전달하여 닫기 단추를 사용자 지정합니다.[Icon](/docs/components/icon). 기본값은`i-lucide-x`입니다.

::component-example
---
선택 사항:
  -  이름: 'closeIcon'
    태그: 'closeIcon'
    기본값: 'i-lucide-arrow-right'
이름: toast-close-icon-example
---
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

###  액션

`actions` 필드를 전달하여 일부 [Button](/docs/components/button)actions를 토스트에 추가합니다.

::component-example
---
선택 사항:
  - 이름: '설명'
    레이블: "Description"
    기본값: "요청에 문제가 있었습니다."
이름: toast-actions-example (toast-actions-example)
---
::

###  지속시간

`duration` 필드를 `toast.add` 메소드에 전달하여 토스트가 표시되는 기간(밀리초)을 변경합니다. 기본값은 `5000`입니다.

::tip
`duration` 필드를 `0`로 설정하여 토스트가 수동으로 닫힐 때까지 열려 있도록 합니다.
::

::component-example
---
선택 사항:
  - 이름: 'duration'
    레이블: "duration"
    기본값: 0
    항목:
      -  0
      -  1000
      -  3000
      -  5000
이름: toast-duration-example
---
::

###  진행 률

`progress` 필드를 전달하여 [Progresss](/docs/components/progressbar(`false` 값 포함)를 사용자 지정하거나 숨깁니다.

::tip
진행률 표시줄은 기본적으로 토스트 색상을 상속하지만 `progress.color` 필드를 사용하여 재정의할 수 있습니다.
::

::component-example
---
이름 : toast-progress-example
---
::

###  방향

`orientation` 필드를 `toast.add` 메소드에 전달하여 토스트의 방향을 변경합니다.

::component-example
---
선택 사항:
  - 이름: 'orientation'
    레이블: "orientation"
    기본값: '수평'
    프로젝트:
      -  수평
      -  수직
이름: toast-orientation-example
---
::

##  예제

::note{to="/docs/components/app"}
Nuxt UI는 **App** 구성 요소를 제공하여 앱을 래핑하여 글로벌 구성을 제공합니다.
::

### 글로벌 위치 변경

[App](/docs/components/app#props) 구성 요소에서 `toaster.position`prop을 변경하여 토스트의 위치를 변경합니다.

```vue [app.vue]
<script setup lang="ts">
const toaster = { position: 'bottom-right' }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
상품명 : True
이름: toast-example
---

# 옵션
: toaster-position-예제
::


### 글로벌 기간 변경

변경 [App](/docs/components/app#props) 구성 요소에서 toast의 지속 시간을 변경 합니다.

```vue [app.vue]
<script setup lang="ts">
const toaster = { duration: 5000 }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
상품명 : True
이름: toast-example
---

# 옵션
:toaster-duration-example (toaster-duration-예제)
::


###  글로벌 변경 max:badge{label="4.1+" class="align-text-top"}

[App](/docs/components/app#props) 구성 요소에서 `toaster.max`prop을 변경하여 한 번에 표시되는 최대 토스트 수를 변경합니다.

```vue [app.vue]
<script setup lang="ts">
const toaster = { max: 3 }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
상품명 : True
이름: toast-example
---

# 옵션
: toaster-max-예제
::


### 스택 토스트

[App](/docs/components/app#props) 구성요소에서 [Sonner](https://sonner.emilkowal.ski/)에 저장된 토스트를 표시하기 위해 `false`로 설정합니다.

```vue [app.vue]
<script setup lang="ts">
const toaster = { expand: true }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::tip
토스트 위에 커서를 올려 놓으면 토스트 타이머가 일시 중지됩니다.
::

::component-example
---
상품명 : True
이름: toast-example
---

# 옵션
:toaster-expand-example (toaster-expand-example) : toaster-expand-example (toaster-expand-example)의 발음을 toaster-expand-example [en]
::


### 중복 제거된 토스트: badge{label="4.5+" class="align-text-top"}

`toast.add`를 이미 존재하는 `id`로 호출하면 기존 토스트가 중복을 생성하는 대신 펄스를 생성합니다.

::component-example
---
축소: true
이름: 'toast-duplicate-example'
---
::

###  콜백 사용

토스트가 닫힐 때 (만료 또는 사용자 해고에 의해) 콜백을 실행하려면 `onUpdateOpen` 필드를 전달합니다.

::component-example
---
축소: true
toast-callback-example 이름: toast-callback-example
---
::

### HTML 컨텐츠 포함

`title` 또는 `description` 필드에서 [`h()`render function](https://vuejs.org/api/render-function.html#h) 를 사용하여 HTML 요소 또는 Vue 구성 요소를 사용자 정의 스타일로 렌더링합니다.

::component-example
---
축소: true
이름: 'toast-html-example'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

###  Emits

:구성요소 - 방사

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `height`{lang="ts-type"}| `Ref<number>`{lang="ts-type"}|

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
