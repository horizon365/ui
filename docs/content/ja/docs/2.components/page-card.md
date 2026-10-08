---
title: ページカード
description: 'タイトル、説明、およびオプションのリンクを表示するスタイル付きのカードコンポーネント。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCard.vue
---

## 使用法

PageCardコンポーネントは、デフォルトスロットにイラストを含むカード内のコンテンツを柔軟に表示する方法を提供します。

::code-preview

::u-page-card
---
title 'テールウィンドCSS'
説明：'Nuxt UIは最新のTailwind CSSと統合され、大幅な改善をもたらします。
アイコン'i—simple—icons—tailwindcss'
クラス'w—96'
---

img {src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::

::tip
[ PageGrid ](/docs/components/page-grid)[ PageColumns ](/docs/components/page-columns)または[ PageList ](/docs/components/page-list)コンポーネントを使用して、複数のPageCardを表示します。
::

### タイトル

`title` propを使ってカードのタイトルを設定します。

::component-code
---
隠す
  - クラス
小道具
  title 'テールウィンドCSS'
  クラス'w—96'
---
::

### 説明

`description`プロパティを使用して、カードの説明を設定します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
小道具
  title 'テールウィンドCSS'
  説明：'Nuxt UIは最新のTailwind CSSと統合され、大幅な改善をもたらします。
  クラス'w—96'
---
::

### アイコン

`icon`プロパティを使用して、カードのアイコンを設定します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
小道具
  title 'テールウィンドCSS'
  説明：'Nuxt UIは最新のTailwind CSSと統合され、大幅な改善をもたらします。
  アイコン'i—simple—icons—tailwindcss'
  クラス'w—96'
---
::

### リンク

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネントから、`to`、`target`、`rel`などのプロパティを渡すことができます。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - アイコン
  - ターゲット
小道具
  title 'テールウィンドCSS'
  説明：'Nuxt UIは最新のTailwind CSSと統合され、大幅な改善をもたらします。
  アイコン'i—simple—icons—tailwindcss'
  へ'https//tailwindcss.com/blog/tailwindcss—v4'
  ターゲット_blank
  クラス'w—96'
---
::

### バリアント

`variant`プロパティを使用して、カードのスタイルを変更します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - アイコン
  - へ
  - ターゲット
小道具
  title 'テールウィンドCSS'
  説明：'Nuxt UIは最新のTailwind CSSと統合され、大幅な改善をもたらします。
  アイコン'i—simple—icons—tailwindcss'
  宛先'https//tailwindcss.com/blog/tailwindcss—v4'
  ターゲット_blank
  バリアントソフト
  クラス'w—96'
---
::

::tip
`solid`バリアントを使用して色を反転させる場合、`light`または`dark`クラスを`links`スロットに適用できます。
::

### オリエンテーション

`orientation`プロパティを使用して、デフォルトスロットの向きを変更します。デフォルトは`vertical`です。

::component-code
---
きれい真
無視
  -  title
  - 説明
  - アイコン
小道具
  title 'テールウィンドCSS'
  説明：'Nuxt UIは最新のTailwind CSSと統合され、大幅な改善をもたらします。
  アイコン'i—simple—icons—tailwindcss'
  オリエンテーション水平
スロット
  デフォルト|

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

img {src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### リバース

`reverse`プロパティを使用して、デフォルトスロットの向きを反転させます。

::component-code
---
きれい真
無視
  -  title
  - 説明
  - アイコン
小道具
  title 'テールウィンドCSS'
  説明：'Nuxt UIは最新のTailwind CSSと統合され、大幅な改善をもたらします。
  アイコン'i—simple—icons—tailwindcss'
  オリエンテーション水平
  逆真
スロット
  デフォルト|

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

img {src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### ハイライト

`highlight`と`highlight-color` propsを使用して、カードの周りにハイライトされた境界線を表示します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - アイコン
  - オリエンテーション
小道具
  title 'テールウィンドCSS'
  説明：'Nuxt UIは最新のTailwind CSSと統合され、大幅な改善をもたらします。
  アイコン'i—simple—icons—tailwindcss'
  オリエンテーション水平
  ハイライト真
  highlightColor 'primary'
スロット
  デフォルト|

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

img {src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

###  Spotlight

`spotlight`および`spotlight-color` propsを使用して、マウスカーソルに沿ってスポットライト効果を表示し、ホバー時に境界線を強調表示します。

::note
`to` propを使用すると、スポットライトエフェクトはホバーエフェクトを引き継ぎます。`outline`バリアントと一緒に使用するのがベストです。
::

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - アイコン
  - オリエンテーション
小道具
  title 'テールウィンドCSS'
  説明：'Nuxt UIは最新のTailwind CSSと統合され、大幅な改善をもたらします。
  アイコン'i—simple—icons—tailwindcss'
  オリエンテーション水平
  スポットライト真
  spotlightColor 'primary'
スロット
  デフォルト|

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

img {src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::tip
CSS変数`--spotlight-color`と`--spotlight-size`を使用して色とサイズをカスタマイズすることもできます。

```vue
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

## 例

### 証言として

`header``footer`スロットの[ User ](/docs/components/user)コンポーネントを使用して、カードを推薦状のように見せます。

::component-example
---
名前'ページカード証言例'
---
::

::tip{to="/docs/components/page-columns"}
`PageColumns`コンポーネントを使用して、複数列レイアウトで複数のPageCardを表示できます。
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
