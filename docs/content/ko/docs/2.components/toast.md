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

## Usage

응용 프로그램에 토스트를 표시하려면 [useToast](xph03x) 컴포지블을 사용합니다.

::component-example
---
collapse: true
prettier: true
name: 'toast-example'
---
::

::warning
앱을 Reka UI의 [`ToastProvider`](https://reka-ui.com/docs/components/toast#provider) 구성 요소를 사용하는 [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) 구성 요소를 사용하는 [`App`](/docs/components/app) 구성 요소로 래핑해야 합니다.
::

::tip{to="/docs/components/app#props"}
`App` 컴포넌트 `toaster` prop을 확인하여 Toaster를 전역적으로 구성하는 방법을 확인할 수 있습니다.
::

### 제목

`title` 필드를 `toast.add` 메서드에 전달하여 제목을 표시합니다.

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
name: 'toast-title-example'
---
::

### 설명

`description` 필드를 `toast.add` 메서드에 전달하여 설명을 표시합니다.

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-description-example'
---
::

### Icon

`icon` 필드를 `toast.add` 메서드에 전달하여 [Icon](/docs/components/icon) 를 표시합니다.

::component-example
---
options:
  - name: 'icon'
    label: 'icon'
    default: 'i-lucide-wifi'
name: 'toast-icon-example'
---
::

### Avatar 이미지

`avatar` 필드를 `toast.add` 메서드에 전달하여 [Avatar](/docs/components/avatar)를 표시합니다.

::component-example
---
options:
  - name: 'avatar.src'
    alias: 'avatar'
    label: 'avatar.src'
    default:
      src: 'https://github.com/benjamincanac.png'
name: 'toast-avatar-example'
---
::

### Color 색상

`color` 필드를 `toast.add` 메서드에 전달하여 Toast의 색상을 변경합니다.

::component-example
---
options:
  - name: 'color'
    label: 'color'
    default: neutral
    items:
      - primary
      - secondary
      - success
      - info
      - warning
      - error
      - neutral
name: 'toast-color-example'
---
::

### Close 닫기

`close` 필드를 전달하여 닫기 [Button](/docs/components/button) (`false` 값 포함)를 사용자 정의하거나 숨깁니다.

::component-example
---
name: 'toast-close-example'
---
::

### Close 아이콘

`closeIcon` 필드를 전달하여 종료 단추 [Iconxph12x/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-example
---
options:
  - name: 'closeIcon'
    label: 'closeIcon'
    default: 'i-lucide-arrow-right'
name: 'toast-close-icon-example'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.close` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.close` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Actions (### 액션)

`actions` 필드를 전달하여 일부 [Button](/docs/components/button) 액션을 Toast에 추가합니다.

::component-example
---
options:
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-actions-example'
---
::

### Duration (### 기간)

`duration` 필드를 `toast.add` 메소드에 전달하여 Toast가 표시되는 기간(밀리초)을 변경합니다. 기본값은 `5000`입니다.

::tip
`duration` 필드를 `0`로 설정하여 Toast가 수동으로 닫힐 때까지 열려 있도록 합니다.
::

::component-example
---
options:
  - name: 'duration'
    label: 'duration'
    default: 0
    items:
      - 0
      - 1000
      - 3000
      - 5000
name: 'toast-duration-example'
---
::

### 진행 률

`progress` 필드를 전달하여 [Progress](/docs/components/progress) 막대(`false` 값 포함)를 사용자 정의하거나 숨깁니다.

::tip
진행률 표시줄은 기본적으로 토스트 색상을 상속하지만 `progress.color` 필드를 사용하여 재정의할 수 있습니다.
::

::component-example
---
name: 'toast-progress-example'
---
::

### 방향 성

`orientation` 필드를 `toast.add` 메서드에 전달하여 Toast의 방향을 변경합니다.

::component-example
---
options:
  - name: 'orientation'
    label: 'orientation'
    default: 'horizontal'
    items:
      - horizontal
      - vertical
name: 'toast-orientation-example'
---
::

## 예제

::note{to="/docs/components/app"}
Nuxt UI는 글로벌 구성을 제공하기 위해 앱을 래핑하는 **App** 구성 요소를 제공합니다.Nuxt UI provides an **App** component that wraps your app to provide global configurations.
::

### 전역 위치 변경

[App](/docs/components/app#props) 구성 요소에서 `toaster.position` prop을 변경하여 토스트의 위치를 변경합니다.

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
prettier: true
name: 'toast-example'
---

#options
:toaster-position-example
::


### 전역 기간 변경

[App](/docs/components/app#props) 구성 요소에서 `toaster.duration` prop을 변경하여 토스트의 지속 시간을 변경합니다.

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
prettier: true
name: 'toast-example'
---

#options
:toaster-duration-example
::


### 전역 변경 최대:badge{label="4.1+" class="align-text-top"}

[App](/docs/components/app#props) 구성 요소의 `toaster.max` prop을 변경하여 한 번에 표시되는 최대 토스트 수를 변경합니다.

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
prettier: true
name: 'toast-example'
---

#options
:toaster-max-example
::


### 스택 토스트

[App](/docs/components/app#props) 구성 요소에서 `toaster.expand` Prop을 `false`로 설정하여 스택 토스트를 표시합니다([Sonner](https://sonner.emilkowal.ski/)에서 영감을 받음).

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
prettier: true
name: 'toast-example'
---

#options
:toaster-expand-example
::


### 중복 제거된 토스트: badge{label="4.5+" class="align-text-top"}

이미 존재하는 `id`를 사용하여 `toast.add`를 호출할 때, 기존 토스트는 중복을 생성하는 대신 펄스를 생성합니다.

::component-example
---
collapse: true
name: 'toast-duplicate-example'
---
::

### With 콜백 기능

토스트가 종료될 때(만료 또는 사용자 삭제에 의해) 콜백을 실행하려면 `onUpdateOpen` 필드를 전달합니다.

::component-example
---
collapse: true
name: 'toast-callback-example'
---
::

### HTML 콘텐츠 포함

`title` 또는 `description` 필드에서 [`h()` render function](https://vuejs.org/api/render-function.html#h)를 사용하여 사용자 정의 스타일을 사용하여 HTML 요소 또는 Vue 구성 요소를 렌더링합니다.

::component-example
---
collapse: true
name: 'toast-html-example'
---
::

## API

### Props (### Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

### exose 소개

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `height`{lang="ts-type"}| `Ref<number>`{lang="ts-type"}|

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
