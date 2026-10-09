---
description: 'サイトナビゲーションのレスポンシブヘッダー。'
category: layout
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Header.vue
---

## 使用法

Headerコンポーネントは`<header>`要素をレンダリングします。

::tip{to="/docs/getting-started/theme/css-variables#header"}
高さはCSS変数`--ui-header-height`で定義されます。
::

ヘッダーをカスタマイズするには`left`、`default`、`right`スロットを使用し、ヘッダーメニューをカスタマイズするには`body`または`content`スロットを使用します。

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
この例では、[NavigationMenu](/docs/components/navigation-menu)コンポーネントを使用して、中央のヘッダリンクをレンダリングします。
::

### Title

`title`プロパティを使用してヘッダーのタイトルを変更します。デフォルトは`Nuxt UI`です。

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

`title`スロットを使用して独自のロゴを追加することもできます。

::tip{to="#props"}
リンクのデフォルトの`aria-label`を置き換えるために`title`プロパティを追加する必要があります。
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

`to`プロパティを使用してタイトルのリンクを変更します。デフォルトは`/`です。

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

`left`スロットを使用してリンクを完全にオーバーライドすることもできます。

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

### Mode

ヘッダーメニューのモードを変更するには、`mode`プロパティを使用します。デフォルトは`modal`です。

メニュー本体（ヘッダー下）を埋めるには`body`スロットを使用し、メニュー全体を埋めるには`content`スロットを使用します。

::tip{to="#props"}
`menu`プロパティを使用してヘッダーのメニューをカスタマイズすることができます。選択したモードに応じて適応します。
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

### Toggle

`toggle`プロパティを使用して、モバイルで表示されるトグルボタンをカスタマイズします。

[Button](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

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

### Toggle側

トグルボタンの側面を変更するには、`toggle-side`プロパティを使用します。デフォルトは`right`です。

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

## 例

### Withアニメーショントグル

`#toggle`スロットを使用して、[Motion Vue](https://motion.dev/docs/vue/motion-component)を使用して、デフォルトのトグルボタンをカスタムアニメーションハンバーガーアイコンに置き換えます。

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

### x`app.vue`内

`app.vue`またはレイアウトでHeaderコンポーネントを使用します。

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

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
