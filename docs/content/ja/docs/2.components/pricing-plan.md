---
title: 料金プラン
description: '価格ページに表示されるカスタマイズ可能な価格プラン。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlan.vue
---

## 使用法

PricingPlanコンポーネントは、タイトル、説明、価格、機能などのカスタマイズ可能なコンテンツを含む価格プランを柔軟に表示する方法を提供します。

::code-preview

::u-pricing-plan
---
title: 'Solo'
description: 'For bootstrappers and indie hackers.'
price: '$249'
discount: '$199'
billing-cycle: '/month'
badge: 'Most popular'
features:
  - 'One developer'
  - 'Unlimited projects'
  - 'Access to GitHub repository'
  - 'Unlimited patch & minor updates'
  - 'Lifetime access'
button:
  label: 'Buy now'
class: 'w-96'
---
::

::

::tip{to="/docs/components/pricing-plans"}
`PricingPlans`コンポーネントを使用して、レスポンシブなグリッドレイアウトで複数の価格プランを表示します。
::

### Title

`title`プロパティを使用してPricingPlanのタイトルを設定します。

::component-code
---
ignore:
  - class
props:
  title: 'Solo'
  class: 'w-96'
---
::

### Description

`description`プロパティを使用してPricingPlanの説明を設定します。

::component-code
---
hide:
  - class
ignore:
  - title
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  class: 'w-96'
---
::

### バッジ

`badge`プロパティを使用して、PricingPlanのタイトルの横に[Badge](/docs/components/badge)を表示します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  badge: 'Most popular'
  class: 'w-96'
---
::

[Badge](/docs/components/badge#props)コンポーネントの任意のプロパティを渡してカスタマイズできます。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - badge.label
  - badge.color
  - badge.variant
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  badge:
    label: 'Most popular'
    color: 'neutral'
    variant: 'solid'
  class: 'w-96'
---
::

### 価格

`price`プロパティを使用してPricingPlanの価格を設定します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  class: 'w-96'
---
::

### 割引

`discount`プロップを使用して、元の価格（ストライクスルーで表示されます）と一緒に表示される割引価格を設定します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  discount: '$199'
  class: 'w-96'
---
::

### Billing

`billing-cycle`および/または`billing-period`小道具を使用して、PricingPlanの請求情報を表示します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$9'
  billingCycle: '/month'
  billingPeriod: 'billed annually'
  class: 'w-96'
---
::

### 機能

PricingPlanに機能のリストを表示するには、`features`プロパティを文字列の配列として使用します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - price
  - features
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Unlimited patch & minor updates'
    - 'Lifetime access'
  class: 'w-96'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.success`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.success`キーでグローバルにカスタマイズできます。
:::
::

次のプロパティを持つオブジェクトの配列を渡すこともできます：

- `title: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}

::component-code
---
prettier: true
hide:
  - class
external:
  - features
externalTypes:
  - PricingPlanFeature[]
ignore:
  - title
  - description
  - price
  - features
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - title: 'One developer'
      icon: i-lucide-user
    - title: 'Unlimited projects'
      icon: i-lucide-infinity
    - title: 'Access to GitHub repository'
      icon: i-lucide-github
    - title: 'Unlimited patch & minor updates'
      icon: i-lucide-refresh-cw
    - title: 'Lifetime access'
      icon: i-lucide-clock
  class: 'w-96'
---
::

### Button

PricingPlanの下部にボタンを表示するには、[Button](/docs/components/button)コンポーネントの任意のプロパティを指定して`button`プロパティを使用します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - price
  - features
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Unlimited patch & minor updates'
    - 'Lifetime access'
  button:
    label: 'Buy now'
  class: 'w-96'
---
::

::tip
`onClick`項目を使用して、プラン購入をトリガーするクリックハンドラーを追加します。
::

### Variant

`variant`プロパティを使用して、PricingPlanのバリアントを変更します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - price
  - features
  - button.label
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Unlimited patch & minor updates'
    - 'Lifetime access'
  button:
    label: 'Buy now'
  variant: 'subtle'
  class: 'w-96'
---
::

### Orientation

`orientation`プロパティを使用してPricingPlanの向きを変更します。デフォルトは`vertical`です。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - price
  - features
  - button.label
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Lifetime access'
  button:
    label: 'Buy now'
  orientation: horizontal
  variant: 'outline'
  class: 'w-full'
---
::

### Tagline

`tagline`プロパティを使用して、価格の上にタグラインテキストを表示します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - price
  - features
  - button.label
  - orientation
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Lifetime access'
  button:
    label: 'Buy now'
  orientation: horizontal
  tagline: 'Pay once, own it forever'
  class: 'w-full'
---
::

### Terms

`terms`プロパティを使用して、価格以下の用語を表示します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - price
  - features
  - button.label
  - orientation
  - tagline
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Lifetime access'
  button:
    label: 'Buy now'
  orientation: horizontal
  tagline: 'Pay once, own it forever'
  terms: 'Invoices and receipts available.'
  class: 'w-full'
---
::

### ハイライト

`highlight`プロパティを使用して、PricingPlanの周りにハイライトされた境界線を表示します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - price
  - features
  - button.label
props:
  title: 'Solo'
  description: 'For bootstrappers and indie hackers.'
  price: '$249'
  features:
    - 'One developer'
    - 'Unlimited projects'
    - 'Access to GitHub repository'
    - 'Unlimited patch & minor updates'
    - 'Lifetime access'
  button:
    label: 'Buy now'
  highlight: true
  class: 'w-96'
---
::

### Scale

`scale`プロパティを使用して、PricingPlanを他よりも大きくします。

::note{to="/docs/components/pricing-plans#scale"}
PricingPlansの`scale`の例をチェックして、それだけではデモンストレーションするのは難しいので、どのように動作するかを確認してください。
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
