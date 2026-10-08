---
title: ProseCard Group
description: 'レスポンシブグリッドレイアウトで複数のカードを整理し、コンテンツプレゼンテーションを改善。'
category: components
navigation.title: CardGroup
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CardGroup.vue
---

## 使用 法

`card`コンポーネント を`card-group`コンポーネント で ラップ し て 、 グリッドレイアウト で グループ 化 し ます 。

::code-preview

:::card-group{class="w-full my-0"}

::card
---
title ダッシュ ボード
アイコン i-simple-icons-github
次 へhttps://github.com/nuxt-ui-templates/dashboard
ターゲット _blank
---
複数 列 レイアウト の ダッシュ ボード 。
::

::card
---
title SaaS
アイコン i-simple-icons-github
次 へhttps://github.com/nuxt-ui-templates/saas
ターゲット _blank
---
ランディング 、 価格 設定 、 ドキュメント 、 ブログ を 含む テンプレート 。
::

::card
---
title ドキュメント
アイコン i-simple-icons-github
次 へhttps://github.com/nuxt-ui-templates/docs
ターゲット _blank
---
`@nuxt/content`の ドキュメント 。
::

::card
---
title ランディング
アイコン i-simple-icons-github
次 へhttps://github.com/nuxt-ui-templates/landing
ターゲット _blank
---
出発 点 として 使用 できる ランディング ページ 。
::

:::

# コード

```mdc
::card-group

::card
---
title: Dashboard
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/dashboard
target: _blank
---
A dashboard with multi-column layout.
::

::card
---
title: SaaS
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/saas
target: _blank
---
A template with landing, pricing, docs and blog.
::

::card
---
title: Docs
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/docs
target: _blank
---
A documentation with `@nuxt/content`.
::

::card
---
title: Landing
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/landing
target: _blank
---
A landing page you can use as starting point.
::

::
```

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
