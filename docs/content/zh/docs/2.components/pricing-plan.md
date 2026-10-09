---
title: 价格计划
description: '要在定价页面中显示的可自定义定价计划。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlan.vue
---

## 用法

PricingPlan组件提供了一种灵活的方式来显示定价计划，其中包含可自定义的内容，包括标题、描述、价格、功能等。

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
使用`PricingPlans`组件可以在响应式网格布局中显示多个定价计划。
::

### 标题

使用`title`属性设置PricingPlan的标题。

::component-code
---
ignore:
  - class
props:
  title: 'Solo'
  class: 'w-96'
---
::

### 说明

使用`description`属性设置PricingPlan的描述。

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

### Badge

使用`badge`道具在PricingPlan标题旁边显示[Badge](/docs/components/badge)。

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

您可以从[Badge](/docs/components/badge#props)组件传递任何属性来对其进行自定义。

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

### 价格

使用`price`属性设置PricingPlan的价格。

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

### 折扣

使用`discount`道具设置折扣价格，该价格将与原始价格一起显示（原始价格将以删除线显示）。

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

### 计费

使用`billing-cycle`和/或`billing-period`道具显示PricingPlan的计费信息。

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

### 特点

使用`features` prop作为字符串数组来显示PricingPlan上的功能列表：

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
你可以在你的`app.config.ts`下的`ui.icons.success`键全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`中的`ui.icons.success`键下全局自定义这个图标。
:::
::

您也可以传递具有下列属性的物件数组：

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

将`button` prop与[Button](/docs/components/button)组件中的任何属性一起使用，以在PricingPlan的底部显示一个按钮。

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
使用`onClick`字段添加点击处理程序以触发计划购买。
::

### Variant

使用`variant` prop更改PricingPlan的变体。

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

### 方向

使用`orientation`属性将PricingPlan.xml的方向更改为`vertical`。

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

### 标签

使用`tagline` prop在价格上方显示标语文本。

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

### 条款

使用`terms` prop显示价格下面的条款。

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

### 亮点

使用`highlight`道具在PricingPlan周围显示突出显示的边框。

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

使用`scale`道具使PricingPlan比其他计划更大。

::note{to="/docs/components/pricing-plans#scale"}
看看PricingPlans的`scale`示例，看看它是如何工作的，因为它本身很难演示。
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
