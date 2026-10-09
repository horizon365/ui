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

PageAsideコンポーネントは、[`lg`ブレークポイント](https://tailwindcss.com/docs/breakpoints)からのみ表示されるスティッキーな`<aside>`要素です。

::tip{to="/docs/getting-started/theme/css-variables#header"}
PageAsideコンポーネントはCSS変数`--ui-header-height`を使用して`Header`の下に正しく位置します。
::

[Page](/docs/components/page)コンポーネントの`left`または`right`スロット内で使用します。

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
これらの例は[Nuxt Content](https://content.nuxt.com)を使用していますが、コンポーネントは任意のコンテンツ管理システムと統合できます。
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

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
