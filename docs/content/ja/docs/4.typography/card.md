---
title: ProseCard
description: 'オプションのリンクとナビゲーションでハイライトコンテンツブロックを作成します。'
category: components
navigation.title: Card
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Card.vue
---

## 使用 法

`card`コンポーネント の デフォルト スロット で markdown を 使用 し て 、 コンテンツ を ハイライト し ます 。

`title`、`icon`、`color`props を 使用 し て カスタマイズ し ます 。[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)[`<RouterLink>`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html)コンポーネント から 任意 の プロ パティ を 渡す こと も でき ます 。

::component-code{slug="card" prose}
---
隠す
  - クラス
無視
  - ターゲット
小道具
  クラス ' my-0 w-96 '
  title スタート アップ
  アイコン i-lucide-users
  色 プライマリ
  “ https//”nuxt.lemonsqueezy.com'
  ターゲット ' _blank '
スロット
  default ： 最大 5 人 の 開発 者 を 持つ 小規模 チーム 、 スタート アップ 、 代理 店 に 最適 です 。
---

最大 5 人 の 開発 者 を 持つ 小規模 チーム 、 スタート アップ 、 代理 店 に 最適 です 。
::

## API

### Props

component-props{prose}

### スロット

component-slots{prose}

## テーマ

component-theme{prose}

## Changelog

component-changelog{prefix="prose"}
