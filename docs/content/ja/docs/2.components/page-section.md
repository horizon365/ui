---
title: ページセクション
description: 'ページのレスポンシブセクション。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageSection.vue
---

## 使用法

PageSectionコンポーネントは、コンテンツを[ Container ](/docs/components/container)でラップします。背景色、画像、パターンを簡単に追加できるように全幅の柔軟性を維持します。デフォルトスロットにイラストを使用してコンテンツを表示する柔軟な方法を提供します。

::code-preview

::u-page-section
---
title「美しいVue UIコンポーネント」
説明Nuxt UIは、VueとNuxtで美しくアクセスしやすいWebアプリケーションを構築するのに役立つコンポーネントとユーティリティの包括的なスイートを提供します。
headline '特徴'
特徴
  -  title 'アイコン'
    説明：Nuxt UIはNuxt Iconと統合され、Iconifyから20万以上のアイコンにアクセスできます。
    アイコン'i—lucide—smile'
    to '/docs/getting—started/integrations/icons'
  -  title 'フォント'
    説明'Nuxt UIはNuxtフォントと統合され、プラグアンドプレイフォント最適化を提供します。
    アイコン'i—lucide a—large small'
    '/docs/getting—started/integrations/fonts'
  -  title 'カラーモード'
    説明'Nuxt UIはNuxt Color Modeと統合され、明暗を切り替えます。
    アイコン'i—lucide—sun—moon'
    to '/docs/getting—started/integrations/color—mode'
---
::

::

[ PageHero ](/docs/components/page-hero)コンポーネントの後に使用します。

```vue {4}
<template>
  <UPageHero />

  <UPageSection />
</template>
```

### タイトル

セクションのタイトルを設定するには、`title`プロパティを使用します。

::component-code
---
小道具
  title「美しいVue UIコンポーネント」
---
::

### 説明

セクションの説明を設定するには、`description`プロパティを使用します。

::component-code
---
きれい真
無視
  -  title
小道具
  title「美しいVue UIコンポーネント」
  説明Nuxt UIは、VueとNuxtで美しくアクセスしやすいWebアプリケーションを構築するのに役立つコンポーネントとユーティリティの包括的なスイートを提供します。
---
::

### ヘッドライン

セクションの見出しを設定するには、`headline` propを使用します。

::component-code
---
きれい真
無視
  -  title
  - 説明
小道具
  title「美しいVue UIコンポーネント」
  説明Nuxt UIは、VueとNuxtで美しくアクセスしやすいWebアプリケーションを構築するのに役立つコンポーネントとユーティリティの包括的なスイートを提供します。
  headline '特徴'
---
::

### アイコン

`icon`プロパティを使用して、セクションのアイコンを設定します。

::component-code
---
きれい真
無視
  -  title
  - 説明
小道具
  title「美しいVue UIコンポーネント」
  説明Nuxt UIは、VueとNuxtで美しくアクセスしやすいWebアプリケーションを構築するのに役立つコンポーネントとユーティリティの包括的なスイートを提供します。
  アイコン'i—lucide—rocket'
---
::

### 特徴

`features`プロパティを使用して、説明の下に[ PageFeature ](/docs/components/page-feature)のリストを、次のプロパティを持つオブジェクトの配列として表示します。

- `title?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `orientation?: 'horizontal' | 'vertical'`{lang="ts-type"}

[ Link ](/docs/components/link#props)コンポーネントから、`to`、`target`などのプロパティを渡すことができます。

::component-code
---
きれい真
外部
  - 特徴
externalTypes
  -  PageFeatureProps []
無視
  -  title
  - 説明
  - 機能
小道具
  title「美しいVue UIコンポーネント」
  説明Nuxt UIは、VueとNuxtで美しくアクセスしやすいWebアプリケーションを構築するのに役立つコンポーネントとユーティリティの包括的なスイートを提供します。
  特徴
    -  title 'アイコン'
      説明：Nuxt UIはNuxt Iconと統合され、Iconifyから20万以上のアイコンにアクセスできます。
      アイコン'i—lucide—smile'
      to '/docs/getting—started/integrations/icons'
    -  title 'フォント'
      説明'Nuxt UIはNuxtフォントと統合され、プラグアンドプレイフォントの最適化を提供します。
      アイコン'i—lucide a—large small'
      '/docs/getting—started/integrations/fonts'
    -  title 'カラーモード'
      説明'Nuxt UIはNuxt Color Modeと統合され、明暗を切り替えます。
      アイコン'i—lucide—sun—moon'
      to '/docs/getting—started/integrations/color—mode'
---
::

### リンク

`links` propを使用して、[ Button ](/docs/components/button)のリストを表示します。

::component-code
---
きれい真
外部
  - リンク
externalTypes
  -  ButtonProps []
無視
  -  title
  - 説明
  - リンク
小道具
  title「美しいVue UIコンポーネント」
  説明Nuxt UIは、VueとNuxtで美しくアクセスしやすいWebアプリケーションを構築するのに役立つコンポーネントとユーティリティの包括的なスイートを提供します。
  リンク
    -  label '始める'
      /docs/getting—started
      アイコン'i—lucide—square—play'
      色'中立'
    -  label 'コンポーネントを探索'
      to '/docs/components/app'
      色'中立'
      バリアント：'微妙'
      trailingIcon 'i—lucide—arrow—right'
---
::

### オリエンテーション

`orientation`プロパティを使用して、デフォルトスロットの向きを変更します。デフォルトは`vertical`です。

::component-code
---
きれい真
外部
  - 機能
  - リンク
externalTypes
  -  PageFeatureProps []
  -  ButtonProps []
無視
  -  title
  - 説明
  - アイコン
  - 特徴
  - リンク
小道具
  title「美しいVue UIコンポーネント」
  説明Nuxt UIは、VueとNuxtで美しくアクセスしやすいWebアプリケーションを構築するのに役立つコンポーネントとユーティリティの包括的なスイートを提供します。
  アイコン'i—lucide—rocket'
  オリエンテーション水平
  特徴
    -  title 'アイコン'
      説明：Nuxt UIはNuxt Iconと統合され、Iconifyから20万以上のアイコンにアクセスできます。
      アイコン'i—lucide—smile'
      to '/docs/getting—started/integrations/icons'
    -  title 'フォント'
      説明'Nuxt UIはNuxtフォントと統合され、プラグアンドプレイフォントの最適化を提供します。
      アイコン'i—lucide a—large small'
      '/docs/getting—started/integrations/fonts'
    -  title 'カラーモード'
      説明'Nuxt UIはNuxt Color Modeと統合され、明暗を切り替えます。
      アイコン'i—lucide—sun—moon'
      to '/docs/getting—started/integrations/color—mode'
  リンク
    -  label 'コンポーネントの探索'
      to '/docs/components/app'
      色'ニュートラル'
      バリアント：'微妙'
      trailingIcon 'i—lucide—arrow—right'
スロット
  デフォルト|

    <img src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

img {src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

### リバース

`reverse`プロパティを使用して、デフォルトスロットの向きを反転させます。

::component-code
---
きれい真
外部
  - 機能
  - リンク
externalTypes
  -  PageFeatureProps []
  -  ButtonProps []
無視
  -  title
  - 説明
  - アイコン
  - 機能
  - リンク
小道具
  title「美しいVue UIコンポーネント」
  説明Nuxt UIは、VueとNuxtで美しくアクセスしやすいWebアプリケーションを構築するのに役立つコンポーネントとユーティリティの包括的なスイートを提供します。
  アイコン'i—lucide—rocket'
  オリエンテーション水平
  逆真
  特徴
    -  title 'アイコン'
      説明：Nuxt UIはNuxt Iconと統合され、Iconifyから20万以上のアイコンにアクセスできます。
      アイコン'i—lucide—smile'
      to '/docs/getting—started/integrations/icons'
    -  title 'フォント'
      説明'Nuxt UIはNuxtフォントと統合され、プラグアンドプレイフォント最適化を提供します。
      アイコン'i—lucide a—large small'
      '/docs/getting—started/integrations/fonts'
    -  title 'カラーモード'
      説明'Nuxt UIはNuxt Color Modeと統合され、明暗を切り替えます。
      アイコン'i—lucide—sun—moon'
      to '/docs/getting—started/integrations/color—mode'
  リンク
    -  label 'コンポーネントの探索'
      to '/docs/components/app'
      色'中立'
      バリアント：'微妙'
      trailingIcon 'i—lucide—arrow—right'
スロット
  デフォルト|

    <img src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

メール：info @@ ph111
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
