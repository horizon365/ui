---
title: ContentNavigation
description: 'ページリンクを整理するためのアコーディオンスタイルのナビゲーションコンポーネント。'
category: content
framework: nuxt
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentNavigation.vue
---

::warning{to="/docs/getting-started/integrations/content"}
このコンポーネントは`@nuxt/content`モジュールがインストールされている場合にのみ使用できます。
::

## 使用法

`navigation`プロパティには、アプリケーションのナビゲーションを取得するときに取得する`navigation`{lang="ts-type"}値を指定して使用します。

::component-example
---
name: 'content-navigation-example'
class: 'h-96 overflow-y-auto'
overflowHidden: true
props:
  class: 'w-full'
---
::

### Type

`type`プロパティを`single`に設定すると、一度に1つのアイテムしか開くことができません。デフォルトは`multiple`です。

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
items:
  type:
  - 'single'
  - 'multiple'
hide:
  - class
  - navigation
props:
  class: 'w-full'
  type: 'single'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
        - title: 'Introduction'
          path: '#introduction'
          active: true
        - title: 'Installation'
          path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
        - title: 'defineShortcuts'
          path: '#defineshortcuts'
        - title: 'useModal'
          path: '#usemodal'
---
::

### Color

`color`プロパティを使用して、ナビゲーションリンクの色を変更します。

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
props:
  class: 'w-full'
  color: 'neutral'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

### Variant

`variant`プロパティを使用して、ナビゲーションリンクのバリアントを変更します。

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
items:
  variant:
  - 'link'
  - 'pill'
props:
  class: 'w-full'
  variant: 'link'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

### ハイライト

`highlight`プロパティを使用して、アクティブなリンクのハイライトされた境界線を表示します。

境界線の色を変更するには`highlight-color`プロパティを使用します。デフォルトは`color`プロパティです。

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
props:
  class: 'w-full'
  highlight: true
  highlightColor: 'primary'
  color: 'primary'
  variant: 'pill'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

### Trailingアイコン

`trailing-icon`プロパティを使用して、子を持つアイテムの末尾の[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

::component-code{prefix="content"}
---
prettier: true
collapse: true
external:
  - navigation
externalTypes:
  - ContentNavigationLink[]
hide:
  - class
  - navigation
props:
  class: 'w-full'
  trailingIcon: 'i-lucide-arrow-up'
  navigation:
    - title: 'Guide'
      icon: 'i-lucide-book-open'
      path: '#getting-started'
      children:
      - title: 'Introduction'
        path: '#introduction'
        active: true
      - title: 'Installation'
        path: '#installation'
    - title: 'Composables'
      icon: 'i-lucide-database'
      path: '#composables'
      children:
      - title: 'defineShortcuts'
        path: '#defineshortcuts'
      - title: 'useModal'
        path: '#usemodal'
---
::

::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.chevronDown`キーでグローバルにカスタマイズできます。
::

## サンプル

### レイアウト内

レイアウト内の[PageAside](/docs/components/page-aside)コンポーネント内のContentNavigationコンポーネントを使用して、ページのナビゲーションを表示します。

```vue [layouts/docs.vue]{11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" highlight />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

### ヘッダー内

モバイルでページのナビゲーションを表示するには、[Header](/docs/components/header)コンポーネントの`content`スロット内のContentNavigationコンポーネントを使用します。

```vue [components/Header.vue]{9-11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UHeader>
    <template #body>
      <UContentNavigation :navigation="navigation" highlight />
    </template>
  </UHeader>
</template>
```

## API

### Props

:component-props

### Slot

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog{prefix="content"}
