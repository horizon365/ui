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

`navigation`プロパティを、アプリケーションのナビゲーションを取得するときに取得する`navigation`{lang="ts-type"}を指定して使用します。

::component-example
---
名前'content—navigation—example'
クラス'h—96 overflow—y—auto'
overflowHidden true
小道具
  クラス'w—full'
---
::

### タイプ

`type` propを`single`に設定して、一度に1つのアイテムのみを開くことができます。デフォルトは`multiple`です。

::component-code{prefix="content"}
---
きれい真
崩壊真
外部
  - ナビゲーション
externalTypes
  -  ContentNavigationLink []
アイテム
  タイプ
  - 'シングル'
  - '複数'
隠す
  - クラス
  - ナビゲーション
小道具
  クラス'w—full'
  タイプ'シングル'
  ナビゲーション
    -  title 'ガイド'
      アイコン'i—lucide—book—open'
      path '#getting—started'
      子供：
        -  title 'はじめに'
          path '#導入'
          アクティブtrue
        -  title 'インストール'
          path '#インストール'
    -  title 'Composables'
      アイコン'i—lucide—database'
      path '#composables'
      子供：
        -  title '定義ショートカット'
          パス'#defineshortcuts'
        -  title 'useModal'
          パス'#usemodal'
---
::

### カラー

`color`プロパティを使用して、ナビゲーションリンクの色を変更します。

::component-code{prefix="content"}
---
きれい真
崩壊真
外部
  - ナビゲーション
externalTypes
  -  ContentNavigationLink []
隠す
  - クラス
  - ナビゲーション
小道具
  クラス'w—full'
  色'ニュートラル'
  ナビゲーション
    -  title 'ガイド'
      アイコン'i—lucide—book—open'
      path '#getting—started'
      子供：
      -  title 'はじめに'
        path '#導入'
        アクティブtrue
      -  title 'インストール'
        path '#インストール'
    -  title 'Composables'
      アイコン'i—lucide—database'
      path '#composables'
      子供：
      -  title '定義ショートカット'
        パス'#defineshortcuts'
      -  title 'useModal'
        パス'#usemodal'
---
::

### バリアント

`variant`プロパティを使用して、ナビゲーションリンクのバリアントを変更します。

::component-code{prefix="content"}
---
きれい真
崩壊真
外部
  - ナビゲーション
externalTypes
  -  ContentNavigationLink []
隠す
  - クラス
  - ナビゲーション
アイテム
  バリアント
  - 'link'
  - 'ピル'
小道具
  クラス'w—full'
  variant 'link'
  ナビゲーション
    -  title 'ガイド'
      アイコン'i—lucide—book—open'
      path '#getting—started'
      子供：
      -  title 'はじめに'
        path '#導入'
        アクティブtrue
      -  title 'インストール'
        path '#インストール'
    -  title 'Composables'
      アイコン'i—lucide—database'
      path '#composables'
      子供：
      -  title '定義ショートカット'
        パス'#defineshortcuts'
      -  title 'useModal'
        パス'#usemodal'
---
::

### ハイライト

`highlight`プロパティを使用して、アクティブなリンクのハイライトされた境界線を表示します。

境界線の色を変更するには`highlight-color` propを使用します。デフォルトは`color` propです。

::component-code{prefix="content"}
---
きれい真
崩壊真
外部
  - ナビゲーション
externalTypes
  -  ContentNavigationLink []
隠す
  - クラス
  - ナビゲーション
小道具
  クラス'w—full'
  ハイライト真
  highlightColor 'primary'
  色'プライマリ'
  バリアント'ピル'
  ナビゲーション
    -  title 'ガイド'
      アイコン'i—lucide—book—open'
      path '#getting—started'
      子供：
      -  title 'はじめに'
        path '#導入'
        アクティブtrue
      -  title 'インストール'
        path '#インストール'
    -  title 'Composables'
      アイコン'i—lucide—database'
      path '#composables'
      子供：
      -  title '定義ショートカット'
        パス'#defineshortcuts'
      -  title 'useModal'
        パス'#usemodal'
---
::

### トレーリングアイコン

`trailing-icon`プロパティを使用して、子を持つアイテムの末尾の[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

::component-code{prefix="content"}
---
きれい真
崩壊真
外部
  - ナビゲーション
externalTypes
  -  ContentNavigationLink []
隠す
  - クラス
  - ナビゲーション
小道具
  クラス'w—full'
  trailingIcon 'i—lucide—arrow—up'
  ナビゲーション
    -  title 'ガイド'
      アイコン'i—lucide—book—open'
      path '#getting—started'
      子供：
      -  title 'はじめに'
        path '#導入'
        アクティブtrue
      -  title 'インストール'
        path '#インストール'
    -  title 'Composables'
      アイコン'i—lucide—database'
      path '#composables'
      子供：
      -  title '定義ショートカット'
        パス'#defineshortcuts'
      -  title 'useModal'
        パス'#usemodal'
---
::

::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
::

## 例

### レイアウト内

レイアウト内の[ PageAside ](/docs/components/page-aside)コンポーネント内のContentNavigationコンポーネントを使用して、ページのナビゲーションを表示します。

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

モバイルでページのナビゲーションを表示するには、[ Header ](/docs/components/header)コンポーネントの`content`スロット内のContentNavigationコンポーネントを使用します。

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

##  API

###  Props

component—props

### スロット

コンポーネントスロット

###  Emits

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog {prefix="content"}
