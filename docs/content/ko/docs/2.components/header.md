---
description: '사이트 탐색을 위한 응답 헤더입니다.'
category: layout
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Header.vue
---

##  사용

Header 컴포넌트는 `<header>` 요소를 렌더링합니다.

::tip{to="/docs/getting-started/theme/css-variables#header"}
높이는 `--ui-header-height`CSS 변수를 통해 정의됩니다.
::

`left`, `default` 및 `right` 슬롯을 사용하여 헤더를 사용자 지정하고 `body` 또는 `content` 슬롯을 사용하여 헤더 메뉴를 사용자 지정합니다.

::component-example
---
축소: true
상품명 : True
이름: header-example
클래스: "!px-0!pt-0"
overflowHidden: true
소품 :
  클래스: 'w-full'
---
::

::note
이 예제에서는 [NavigationMenu](/docs/components/navigation-menu) 구성요소를 사용하여 중앙에 헤더 링크를 렌더링합니다.
::

###  제목

`title`prop을 사용하여 헤더 제목을 변경합니다. 기본값은 `Nuxt UI`입니다.

::component-code
---
숨기기 (Hide):
  -  클래스
소품 :
  제목: Nuxt UI
  클래스: 'w-full'
클래스: '!px-0!pt-0'
---
::

또한 `title`slot을 사용하여 자신의 로고를 추가할 수 있습니다.

::tip{to="#props"}
링크의 기본 `aria-label` 대신 `title`prop을 추가해야 합니다.
::

::component-code
---
상품명 : True
overflowHidden: true
숨기기 (Hide):
  -  클래스
소품 :
  클래스: 'w-full'
슬롯 :
  제목 :|

    <Logo class="h-6 w-auto" />
클래스: "!px-0!pt-0"
---

#제목
: logo{class="h-6 w-auto"}
::

###  To

`to`prop을 사용하여 제목 링크를 변경합니다. 기본값은 `/`입니다.

::component-code
---
숨기기 (Hide):
  -  클래스
클래스: '!px-0!pt-0'
소품 :
  to: `/docs' 에 해당되는 글 1건
  클래스 : 'w-full'
---
::

또한 `left`슬롯을 사용하여 링크를 완전히 덮어쓸 수 있습니다.

::component-code
---
상품명 : True
overflowHidden: true
숨기기 (Hide):
  -  클래스
클래스: '!px-0!pt-0'
소품 :
  클래스: 'w-full'
슬롯 :
  왼쪽:|

    <NuxtLink to="/docs">
      <Logo class="h-6 w-auto" />
    </NuxtLink>
---

#왼쪽
::nuxt-link{to="/docs"}
: logo {class="h-6 w-auto"}
::
::

###  모드

`mode`prop을 사용하여 헤더 메뉴의 모드를 변경합니다. 기본값은 `modal`입니다.

`body` 슬롯을 사용하여 메뉴 본문(헤더 아래)을 채우거나 `content` 슬롯을 사용하여 전체 메뉴를 채우십시오.

::tip{to="#props"}
`menu`prop을 사용하여 헤더의 메뉴를 사용자 정의할 수 있으며, 선택한 모드에 따라 적응할 것입니다.
::

::component-example
---
축소: true
iframe :
  높이 : 300px;
iframeMobile : true
overflowHidden: true
이름: 'header-menu-example'
선택 사항:
  - 이름: 'mode'
    모델 번호:mode
    기본값: 서랍
    항목:
      -  modal
      -  slideover
      -  서랍
소품 :
  클래스: 'w-full'
---
::

###  토글

`toggle`prop을 사용하여 모바일에 표시되는 토글 버튼을 사용자 지정합니다.

[Button](/docs/components/button) 구성 요소에서 임의의 속성을 전달하여 사용자 지정할 수 있습니다.

::component-example
---
축소: true
iframe :
  높이 : 300px;
iframeMobile : true
overflowHidden: true
이름: 'header-toggle-example'
소품 :
  클래스: 'w-full'
---
::

### Toggle Side (옆면 전환)

`toggle-side`prop을 사용하여 토글 버튼의 측면을 변경합니다. 기본값은 `right`입니다.

::component-example
---
축소: true
iframe :
  높이 : 300px;
iframeMobile : true
overflowHidden: true
이름: 'header-toggle-side-example'
소품 :
  클래스 : 'w-full'
---
::

##  예제

###  애니메이션 토글

`#toggle` 슬롯을 사용하여 기본 토글 버튼을 [Motion Vue](https://motion.dev/docs/vue/motion-component) 로 사용자 정의 햄버거 아이콘으로 대체합니다.

::component-example
---
축소: true
iframe :
  높이 : 300px;
iframeMobile : true (iframeMobile)
overflowHidden: true
이름: 'header-toggle-animated-example'
소품 :
  클래스: 'w-full'
---
::

### Within `app.vue` 내부 `app.vue`

`app.vue` 또는 레이아웃에서 Header 구성 요소를 사용합니다.Use the Header component in your `app.vue` or in a layout:

```vue [app.vue]{28-51}
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />

        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

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

###  에미츠

:구성요소 - 방출

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
