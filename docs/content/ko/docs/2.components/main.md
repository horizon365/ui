---
description: '사용 가능한 뷰포트 높이를 채우는 주 요소입니다.'
category: layout
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Main.vue
---

##  사용

Main 구성요소는 [Header](/docs/components/header) 구성요소와 함께 작동하는 `<main>` 요소를 렌더링하여 뷰포트의 사용 가능한 높이까지 확장되는 전체 높이 레이아웃을 만듭니다.

::tip{to="/docs/getting-started/theme/css-variables#header"}
Main 컴포넌트는 `--ui-header-height`CSS 변수를 사용하여 `Header` 아래에 정확하게 위치합니다.
::

##  예제

### Within `app.vue`

`app.vue` 또는 레이아웃에서 Main 구성 요소를 사용합니다.Use the Main component in your `app.vue` or in a layout:

```vue [app.vue]{5-9}
<template>
  <UApp>
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

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
