---
description: '웹 사이트 상단에 배너를 표시하여 중요한 정보를 사용자에게 알릴 수 있습니다.'
category: element
keywords:
  - announcement bar
  - top bar
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Banner.vue
---

##  사용

###  제목

`title`prop 을 사용하여 배너에 제목을 표시합니다.

::component-code
---
상품명 : True
클래스: "!p-0"
소품 :
  제목은 '이것은 중요한 메시지가 있는 깃발이다.'
---
::

###  아이콘

`icon`prop 을 사용하여 배너에 아이콘을 표시합니다.

::component-code
---
상품명 : True
클래스: "!p-0"
무시하기:
  -  title
소품 :
  아이콘: i-lucide-info
  제목: "이것은 아이콘이 있는 배너입니다."
---
::

###  색상

`color`prop을 사용하여 배너 색상을 변경합니다.

::component-code
---
상품명 : True
클래스: "!p-0"
무시하기:
  -  icon
  -  title
소품 :
  색상: Neutral
  아이콘: i-lucide-info
  제목: "이것은 아이콘이 있는 배너입니다."
---
::

###  닫기

`close`prop을 사용하여 [Button](/docs/components/button)를 표시하여 배너를 무시합니다. 기본값은 `false`입니다.

::tip
닫기 단추를 클릭하면 `close` 이벤트가 발생합니다.
::

::component-example
---
iframe :
  스타일: 'height: 48px;'
overflowHidden: true
이름: "banner-example"
---
# 코드

```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```

::

::note
닫으면 `banner-${id}`가 로컬 저장소에 저장되어 다시 표시되지 않습니다. :br 위의 예에서 `banner-example`가 로컬 저장소에 저장됩니다.
::

::caution
페이지가 다시 로드되는 동안 무시된 상태를 유지하려면 `id`prop을 지정해야 합니다. 명시적인 `id`가 없으면 배너는 현재 세션에서만 숨겨지고 페이지를 다시 로드할 때 다시 나타납니다.
::

### 아이콘 닫기

`close-icon`prop을 사용하여 닫기 버튼 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-example
---
iframe :
  스타일: 'height: 48px;'
overflowHidden: true
이름: "banner-example"
소품 :
  제목: "사용자 정의 닫기 아이콘이 있는 닫을 수 있는 배너입니다."
  closeIcon: 'i-lucide-x-circle'
---
# 코드

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
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.close` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.close` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  작업

`actions`prop을 사용하여 배너에 [Button](/docs/components/button)액션을 추가합니다.

::component-code
---
상품명 : True
클래스: "!p-0"
무시하기:
  -  title
  -  actions
  - variant @ 변수
외부:
  - actions 작업
externalTypes:
  -  ButtonProps []
소품 :
  제목은 '이것은 행동이 있는 깃발이다.'
  동작:
    - label: 행동 1
      변형: 윤곽선
    - label: 액션 2
      trailingIcon: i-lucide-arrow-right
---
::

::note
작업 단추의 기본값은 `color="neutral"` 및 `size="xs"`입니다. 각 작업 단추에 직접 전달하여 이러한 값을 사용자 정의할 수 있습니다.
::

###  링크

당신은 [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `to`, `target`, `rel`, etc.

::component-code
---
상품명 : True
클래스: "!p-0"
overflowHidden: true
무시하기:
  -  title
  -  target
소품 :
  주소: 'https://nuxtlabs.com/'
  대상: '_blank'
  제목: 'NuxtLabs is joining Vercel!'
  색상 : primary
---
::

::note
`NuxtLink` 구성 요소는 `User` 구성 요소에 전달된 다른 모든 속성을 상속합니다.
::

##  예

###  내부 `app.vue`

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
