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

## 使用法

`card`コンポーネントのデフォルトスロットでmarkdownを使用して、コンテンツを強調表示します。

`title`、`icon`、`color`プロパティを使用してカスタマイズします。[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)または[`<RouterLink>`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html)コンポーネントから任意のプロパティを渡すこともできます。

::component-code{slug="card" prose}
---
hide:
  - class
ignore:
  - target
props:
  class: 'my-0 w-96'
  title: Startup
  icon: i-lucide-users
  color: primary
  to: 'https://nuxt.lemonsqueezy.com'
  target: '_blank'
slots:
  default: Best suited for small teams, startups and agencies with up to 5 developers.
---

最大5人の開発者を持つ小規模チーム、スタートアップ、代理店に最適です。
::

## API

### Props

:component-props{prose}

### スロット

:component-slots{prose}

## Theme

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
