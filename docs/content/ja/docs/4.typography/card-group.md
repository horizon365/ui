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

## 使用法

`card`コンポーネントを`card-group`コンポーネントでラップして、グリッドレイアウトでグループ化します。

::code-preview

:::card-group{class="w-full my-0"}

::card
---
title: Dashboard
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/dashboard
target: _blank
---
複数列レイアウトのダッシュボード。
::

::card
---
title: SaaS
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/saas
target: _blank
---
ランディング、価格設定、ドキュメント、ブログを含むテンプレート。
::

::card
---
title: Docs
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/docs
target: _blank
---
`@nuxt/content`のドキュメント。
::

::card
---
title: Landing
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/landing
target: _blank
---
出発点として使用できるランディングページ。
::

:::

#code

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

:component-props{prose}

### スロット

:component-slots{prose}

## Theme

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
