---
description: '사이트 탐색을 위한 응답형 헤더입니다.'
category: layout
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Header.vue
---

## Usage

Header 구성요소는 `<header>` 요소를 렌더링합니다.

::tip{to="/docs/getting-started/theme/css-variables#header"}
높이는 `--ui-header-height` CSS 변수를 통해 정의됩니다.
::

`left`, `default` 및 `right` 슬롯을 사용하여 헤더를 사용자 정의하고 `body` 또는 `content` 슬롯을 사용자 정의하여 헤더 메뉴를 사용자 정의합니다.

::component-example
---
collapse: true
prettier: true
name: 'header-example'
class: '!px-0 !pt-0'
overflowHidden: true
props:
  class: 'w-full'
---
::

::note
이 예제에서는 [NavigationMenu](/docs/components/navigation-menu) 구성 요소를 사용하여 중심에 헤더 링크를 렌더링합니다.
::

### Title 파일

`title` prop을 사용하여 헤더 제목을 변경합니다. 기본값은 `Nuxt UI`입니다.

::component-code
---
hide:
  - class
props:
  title: 'Nuxt UI'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

또한 `title` 슬롯을 사용하여 자신의 로고를 추가할 수 있습니다.

::tip{to="#props"}
링크의 기본 `aria-label` 대신 `title` prop을 추가해야 합니다.
::

::component-code
---
prettier: true
overflowHidden: true
hide:
  - class
props:
  class: 'w-full'
slots:
  title: |

    <Logo class="h-6 w-auto" />
class: '!px-0 !pt-0'
---

#title
:logo{class="h-6 w-auto"}
::

### To

`to` prop을 사용하여 제목의 링크를 변경합니다. 기본값은 `/`입니다.

::component-code
---
hide:
  - class
class: '!px-0 !pt-0'
props:
  to: '/docs'
  class: 'w-full'
---
::

또한 `left` 슬롯을 사용하여 링크를 완전히 덮어쓸 수 있습니다.

::component-code
---
prettier: true
overflowHidden: true
hide:
  - class
class: '!px-0 !pt-0'
props:
  class: 'w-full'
slots:
  left: |

    <NuxtLink to="/docs">
      <Logo class="h-6 w-auto" />
    </NuxtLink>
---

#left
::nuxt-link{to="/docs"}
:logo{class="h-6 w-auto"}
::
::

### Mode 모드

`mode` prop을 사용하여 헤더 메뉴의 모드를 변경합니다. 기본값은 `modal`입니다.

`body` 슬롯을 사용하여 헤더 아래의 메뉴 본문을 채우거나 `content` 슬롯을 사용하여 전체 메뉴를 채웁니다.

::tip{to="#props"}
`menu` 소품을 사용하여 헤더의 메뉴를 사용자 정의 할 수 있으며, 선택한 모드에 따라 조정됩니다.
::

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-menu-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'drawer'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

### 토글

`toggle` Prop을 사용하여 Mobile에 표시되는 토글 버튼을 사용자 정의합니다.

[Button](/docs/components/button) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-example'
props:
  class: 'w-full'
---
::

### toggle 측면

`toggle-side` 소품을 사용하여 토글 버튼의 측면을 변경합니다. 기본값은 `right`입니다.

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-side-example'
props:
  class: 'w-full'
---
::

## examples 예제

### With 애니메이션 전환

`#toggle` 슬롯을 사용하여 기본 토글 버튼을 [Motion Vue](https://motion.dev/docs/vue/motion-component)를 사용하여 사용자 정의 애니메이션 햄버거 아이콘으로 대체합니다.

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-animated-example'
props:
  class: 'w-full'
---
::

### 내부 `app.vue`

`app.vue` 또는 레이아웃에서 Header 구성 요소를 사용합니다.

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

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme 본문

:component-theme

## 변경 로그

:component-changelog
