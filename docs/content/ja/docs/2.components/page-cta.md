---
title: ページCTA
description: 'ページに表示するCTAセクション。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCTA.vue
---

## 使用法

PageCTAコンポーネントは、デフォルトスロットにイラストを使用してページ内のCTAを柔軟に表示する方法を提供します。

::code-preview

::u-page-c-t-a
---
タイトル：「素晴らしいコミュニティに信頼され支えられている」
説明：'最新のTailwind CSSをプレビューし、Nuxt UIを使い始めましょう。'
オリエンテーション水平
リンク
  -  label '始める'
    色'中立'
  -  label '詳細を見る'
    色'中立'
    バリアント：'微妙'
    trailingIcon 'i—lucide—arrow—right'
---

img {src="https://picsum.photos/640/616" width="320" height="308" alt="Illustration" class="w-full rounded-lg"}
::

::

[ PageSection ](/docs/components/page-section)コンポーネント内で使用するか、ページ内で直接使用します。

```vue {4,8-10}
<template>
  <UPageHero />

  <UPageCTA class="rounded-none" />

  <UPageSection />

  <UPageSection :ui="{ container: 'px-0' }">
    <UPageCTA class="rounded-none sm:rounded-xl" />
  </UPageSection>

  <UPageSection />
</template>
```

::tip
`px-0`および`rounded-none`クラスを使用して、モバイルでページの端をCTAで埋めるようにします。
::

### タイトル

`title`プロパティを使用して、CTAのタイトルを設定します。

::component-code{slug="page-CTA"}
---
小道具
  タイトル：「素晴らしいコミュニティに信頼され支えられている」
---
::

### 説明

`description`プロパティを使用して、CTAの説明を設定します。

::component-code{slug="page-CTA"}
---
きれい真
無視
  -  title
小道具
  タイトル：「素晴らしいコミュニティに信頼され支えられている」
  説明：「私たちは強固で永続的なパートナーシップを築いてきました。彼らの信頼は私たちの原動力であり、成功を共有するために推進します。
---
::

### リンク

`links`プロパティを使用して、説明の下に[ Button ](/docs/components/button)のリストを表示します。

::component-code{slug="page-CTA"}
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
  タイトル：「素晴らしいコミュニティに信頼され支えられている」
  説明：「私たちは強固で永続的なパートナーシップを築いてきました。彼らの信頼は私たちの原動力であり、成功を共有するために推進します。
  リンク
    -  label '始める'
      色'ニュートラル'
    -  label '詳細を見る'
      色'中立'
      バリアント：'微妙'
      trailingIcon 'i—lucide—arrow—right'
---
::

### バリアント

`variant`プロパティを使用して、CTAのスタイルを変更します。

::component-code{slug="page-CTA"}
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
  タイトル：「素晴らしいコミュニティに信頼され支えられている」
  説明：「私たちは強固で永続的なパートナーシップを築いてきました。彼らの信頼は私たちの原動力であり、成功を共有するために推進します。
  バリアントソフト
  リンク
    -  label '始める'
      色'中立'
    -  label '詳細を見る'
      色'ニュートラル'
      バリアント：'微妙'
      trailingIcon 'i—lucide—arrow—right'
---
::

::tip
`solid`バリアントを使用して色を反転させる場合、`light`または`dark`クラスを`links`スロットに適用できます。
::

### オリエンテーション

`orientation`プロパティを使用して、デフォルトスロットの向きを変更します。デフォルトは`vertical`です。

::component-code{slug="page-CTA"}
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
  タイトル：「素晴らしいコミュニティに信頼され支えられている」
  説明：「私たちは強固で永続的なパートナーシップを築いてきました。彼らの信頼は私たちの原動力であり、成功を共有するために推進します。
  オリエンテーション水平
  リンク
    -  label '始める'
      色'中立'
    -  label '詳細を見る'
      色'ニュートラル'
      バリアント：'微妙'
      trailingIcon 'i—lucide—arrow—right'
スロット
  デフォルト|

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

img {src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

### リバース

`reverse`プロパティを使用して、デフォルトスロットの向きを反転させます。

::component-code{slug="page-CTA"}
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
  タイトル：「素晴らしいコミュニティに信頼され支えられている」
  説明：「私たちは強固で永続的なパートナーシップを築いてきました。彼らの信頼は私たちの原動力であり、成功を共有するために推進します。
  オリエンテーション水平
  逆真
  リンク
    -  label '始める'
      色'ニュートラル'
    -  label '詳細を見る'
      色'ニュートラル'
      バリアント：'微妙'
      trailingIcon 'i—lucide—arrow—right'
スロット
  デフォルト|

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

img {src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

##  API

###  Props

component—props {slug="page-CTA"}

### スロット

component—slots {slug="page-CTA"}

## テーマ

component—theme {slug="page-CTA"}

##  Changelog

component—changelog
