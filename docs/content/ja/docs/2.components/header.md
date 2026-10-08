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
その高さは`--ui-header-height` CSS変数で定義されます。
::

ヘッダーをカスタマイズするには`left`、`default`、`right`スロットを使用し、ヘッダーメニューをカスタマイズするには`body`または`content`スロットを使用します。

::component-example
---
崩壊真
きれい真
名前'header—example'
クラス'！px—0！pt—0'
overflowHidden true
小道具
  クラス'w—full'
---
::

::note
この例では、[ NavigationMenu ](/docs/components/navigation-menu)コンポーネントを使用して、中央のヘッダーリンクをレンダリングします。
::

### タイトル

`title`プロパティを使用してヘッダーのタイトルを変更します。デフォルトは`Nuxt UI`です。

::component-code
---
隠す
  - クラス
小道具
  title 'Nuxt UI'
  クラス'w—full'
クラス'！px—0！pt—0'
---
::

`title`スロットを使用して、独自のロゴを追加することもできます。

::tip{to="#props"}
`title` propを追加して、リンクのデフォルトの`aria-label`を置き換える必要があります。
::

::component-code
---
きれい真
overflowHidden true
隠す
  - クラス
小道具
  クラス'w—full'
スロット
  タイトル|

    <Logo class="h-6 w-auto" />
クラス'！px—0！pt—0'
---

#タイトル
logo {class="h-6 w-auto"}
::

### へ

タイトルのリンクを変更するには、`to`プロパティを使用します。デフォルトは`/`です。

::component-code
---
隠す
  - クラス
クラス'！px—0！pt—0'
小道具
  to '/docs'
  クラス'w—full'
---
::

`left`スロットを使用して、リンクを完全にオーバーライドすることもできます。

::component-code
---
きれい真
overflowHidden true
隠す
  - クラス
クラス'！px—0！pt—0'
小道具
  クラス'w—full'
スロット
  左|

    <NuxtLink to="/docs">
      <Logo class="h-6 w-auto" />
    </NuxtLink>
---

#left
::nuxt-link{to="/docs"}
logo {class="h-6 w-auto"}
::
::

### モード

`mode`プロパティを使用して、ヘッダーメニューのモードを変更します。デフォルトは`modal`です。

`body`スロットを使用してメニュー本体ヘッダーの下を埋め、`content`スロットを使用してメニュー全体を埋めます。

::tip{to="#props"}
`menu` propを使用してヘッダーのメニューをカスタマイズできます。選択したモードに応じて適応します。
::

::component-example
---
崩壊真
iframe
  高さ300px；
iframeモバイルtrue
overflowHidden true
名前'ヘッダーメニュー—example'
オプション
  -  name 'mode'
    ラベル'mode'
    デフォルト'引き出し'
    アイテム
      - モーダル
      - スライドオーバー
      - ドロワー
小道具
  クラス'w—full'
---
::

### トグル

`toggle`プロパティを使用して、モバイルで表示されるトグルボタンをカスタマイズします。

[ Button ](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-example
---
崩壊真
iframe
  高さ300px；
iframeモバイルtrue
overflowHidden true
名前'header—toggle'
小道具
  クラス'w—full'
---
::

### トグル側

トグルボタンの側面を変更するには、`toggle-side`プロパティを使用します。デフォルトは`right`です。

::component-example
---
崩壊真
iframe
  高さ300px；
iframeモバイルtrue
overflowHidden true
名前'header—toggle—side—example'
小道具
  クラス'w—full'
---
::

## 例

### アニメーショントグル付き

`#toggle`スロットを使用して、デフォルトのトグルボタンを[ Motion Vue ](https://motion.dev/docs/vue/motion-component)を使用してカスタムアニメーションハンバーガーアイコンに置き換えます。

::component-example
---
崩壊真
iframe
  高さ300px；
iframeモバイルtrue
overflowHidden true
名前'header—toggle—animated—example'
小道具
  クラス'w—full'
---
::

### 内`app.vue`

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

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
