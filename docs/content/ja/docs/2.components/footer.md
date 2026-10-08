---
description: 'サイトのリンクや法的通知のレスポンシブフッター。'
category: layout
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Footer.vue
---

## 使用法

Footerコンポーネントは`<footer>`要素をレンダリングします。

フッターをカスタマイズするには、`left`、`default`、および`right`スロットを使用します。

::component-example
---
きれい真
崩壊真
名前'footer—example'
クラス'！p—0'
小道具
  クラス'w—full'
---
::

::note
この例では、[ NavigationMenu ](/docs/components/navigation-menu)コンポーネントを使用して、中央のフッターリンクをレンダリングします。
::

::tip{to="/docs/components/footer-columns"}
`FooterColumns`コンポーネントを使用して、`top`スロット内のリンクのリストを表示できます。
::

## 例

### 内`app.vue`

`app.vue`またはレイアウトでFooterコンポーネントを使用します。

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
この例では、[ Separator ](/docs/components/separator)コンポーネントを使用して、フッターの上に境界線を追加します。
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
