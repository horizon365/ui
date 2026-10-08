---
title: ページ別
description: 'ページナビゲーションを表示するための付箋脇。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAside.vue
---

## 使用法

PageAsideコンポーネントは、[`lg` breakpoint ](https://tailwindcss.com/docs/breakpoints)から始まるだけ表示されるスティッキー `<aside>`要素です。

::tip{to="/docs/getting-started/theme/css-variables#header"}
PageAsideコンポーネントは、`--ui-header-height` CSS変数を使用して、自身を`Header`の下に正しく配置します。
::

[ Page ](/docs/components/page)コンポーネントの`left`または`right`スロット内で使用します。

```vue {4}
<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>
  </UPage>
</template>
```

## 例

::note
これらの例では[ Nuxt Content ](https://content.nuxt.com)を使用していますが、コンポーネントは任意のコンテンツ管理システムと統合できます。
::

### レイアウト内

レイアウトでPageAsideコンポーネントを使用してナビゲーションを表示します。

```vue [layouts/docs.vue]{9-13}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

::note
この例では、`ContentNavigation`コンポーネントを使用して、`app.vue`に注入されたナビゲーションを表示します。
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
