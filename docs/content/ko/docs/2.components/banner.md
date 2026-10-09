---
description: '웹 사이트 상단에 배너를 표시하여 사용자에게 중요한 정보를 알려줍니다.'
category: element
keywords:
  - announcement bar
  - top bar
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Banner.vue
---

## Usage

### Title 파일

`title` prop을 사용하여 배너에 제목을 표시합니다.

::component-code
---
prettier: true
class: '!p-0'
props:
  title: 'This is a banner with an important message.'
---
::

### Icon

`icon` prop을 사용하여 배너에 아이콘을 표시합니다.

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - title
props:
  icon: i-lucide-info
  title: 'This is a banner with an icon.'
---
::

### Color

`color` Prop을 사용하여 배너의 색상을 변경합니다.

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - icon
  - title
props:
  color: 'neutral'
  icon: i-lucide-info
  title: 'This is a banner with an icon.'
---
::

### 닫기

`close` 소품을 사용하여 [Button](/docs/components/button) 를 표시하여 Banner를 해제합니다. 기본값은 `false`입니다.

::tip
닫기 단추를 클릭하면 `close` 이벤트가 발생합니다.
::

::component-example
---
iframe:
  style: 'height: 48px;'
overflowHidden: true
name: 'banner-example'
---
#code

```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```

::

::note
닫으면 `banner-${id}`가 로컬 스토리지에 저장되어 다시 표시되지 않습니다. :br 위의 예에서 `banner-example`는 로컬 스토리지에 저장됩니다.
::

::caution
페이지를 다시 로드할 때 해제된 상태를 유지하려면 `id` prop를 지정해야 합니다. 명시적 `id`가 없으면 배너는 현재 세션에서만 숨겨지고 페이지 다시 로드 시 다시 나타납니다.
::

### 닫기 아이콘

`close-icon` 소품을 사용하여 닫기 버튼 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-example
---
iframe:
  style: 'height: 48px;'
overflowHidden: true
name: 'banner-example'
props:
  title: 'This is a closable banner with a custom close icon.'
  closeIcon: 'i-lucide-x-circle'
---
#code

```vue
<template>
  <UBanner
    title="This is a closable banner with a custom close icon."
    close
    close-icon="i-lucide-x-circle"
  />
</template>
```

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

### Actions 작업

`actions` 소품을 사용하여 배너에 [Button](/docs/components/button) 액션을 추가합니다.

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - title
  - actions
  - variant
external:
  - actions
externalTypes:
  - ButtonProps[]
props:
  title: 'This is a banner with actions.'
  actions:
    - label: Action 1
      variant: outline
    - label: Action 2
      trailingIcon: i-lucide-arrow-right
---
::

::note
작업 단추의 기본값은 `color="neutral"` 및 `size="xs"`입니다. 각 작업 단추에 직접 전달하여 이러한 값을 사용자 정의할 수 있습니다.
::

### Link 링크

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) 구성 요소에서 `to`, `target`, `rel` 등의 속성을 전달할 수 있습니다.

::component-code
---
prettier: true
class: '!p-0'
overflowHidden: true
ignore:
  - title
  - target
props:
  to: 'https://nuxtlabs.com/'
  target: '_blank'
  title: 'NuxtLabs is joining Vercel!'
  color: 'primary'
---
::

::note
`NuxtLink` 구성 요소는 `User` 구성 요소에 전달된 다른 모든 속성을 상속합니다.
::

## 예제

### x`app.vue` 내부

`app.vue` 또는 레이아웃에서 Banner 구성 요소를 사용합니다.

```vue [app.vue]{3}
<template>
  <UApp>
    <UBanner icon="i-lucide-construction" title="Nuxt UI v4 has been released!" />

    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
