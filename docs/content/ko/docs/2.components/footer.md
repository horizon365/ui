---
description: '귀하의 사이트 링크 및 법적 고지에 대한 응답 바닥글.'
category: layout
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Footer.vue
---

##  사용

Footer 구성 요소는 `<footer>` 요소를 렌더링합니다.

`left``default` 및 `right` 슬롯을 사용하여 바닥글을 사용자 정의합니다.

::component-example
---
상품명 : True
축소: true
이름: 'footer-example'
클래스: "!p-0"
소품 :
  클래스 : 'w-full'
---
::

::note
이 예제에서는 [NavigationMenu](/docs/components/navigation-menu) 구성요소를 사용하여 중앙에 바닥글 링크를 렌더링합니다.
::

::tip{to="/docs/components/footer-columns"}
`FooterColumns` 구성 요소를 사용하여 `top` 슬롯 내에 링크 목록을 표시할 수 있습니다.
::

##  예

### Within`app.vue` @ 내부 `app.vue`

`app.vue` 또는 레이아웃에서 Footer 구성 요소를 사용하십시오:

```vue [app.vue]{32-67}
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: 'Figma Kit',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Playground',
  to: 'https://stackblitz.com/edit/nuxt-ui',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UApp>
    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" type="dashed" class="h-px" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <UNavigationMenu :items="items" variant="link" />

      <template #right>
        <UButton
          icon="i-simple-icons-discord"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/discord"
          target="_blank"
          aria-label="Discord"
        />
        <UButton
          icon="i-simple-icons-x"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/x"
          target="_blank"
          aria-label="X"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/nuxt"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </UApp>
</template>
```

::note
이 예제에서는 [Separator](/docs/components/separator) 구성 요소를 사용하여 바닥글 위에 테두리를 추가합니다.
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
