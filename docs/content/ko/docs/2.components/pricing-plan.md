---
title: PricingPlan 가격계획
description: '가격책정 페이지에 표시할 사용자 정의된 가격책정 계획.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlan.vue
---

## Usage

PricingPlan 구성요소는 제목, 설명, 가격, 기능 등을 포함하여 사용자 정의 가능한 컨텐츠가 있는 가격책정 계획을 유연하게 표시할 수 있는 방법을 제공합니다.

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
`PricingPlans` 구성요소를 사용하여 응답형 그리드 레이아웃에 여러 가격책정 계획을 표시합니다.
::

### 제목

`title` prop을 사용하여 PricingPlan의 제목을 설정합니다.

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

`description` prop를 사용하여 PricingPlan에 대한 설명을 설정합니다.

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

`badge` prop를 사용하여 PricingPlan 제목 옆에 [Badge](/docs/components/badge)를 표시합니다.

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

[Badge](/docs/components/badge#props) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

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

### Price 가격

`price` prop을 사용하여 PricingPlan의 가격을 설정합니다.

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

### Discount 할인

`discount` prop을 사용하여 원래 가격과 함께 표시 될 할인 된 가격을 설정합니다 (취소 선으로 표시됩니다).

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

### Billing 결제

`billing-cycle` 및/또는 `billing-period` props를 사용하여 PricingPlan의 청구 정보를 표시합니다.

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

### features 기능

`features` prop을 문자열 배열로 사용하여 PricingPlan에 기능 목록을 표시합니다.

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
`ui.icons.success` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.success` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

또한 다음 속성을 사용하여 객체 배열을 전달할 수 있습니다.

- `title: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"} (- `icon?: string`{lang="ts-type"})

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

### Button (### Button)

PricingPlan의 맨 아래에 버튼을 표시하려면 [Button](/docs/components/button) 구성 요소의 속성과 함께 `button` prop을 사용합니다.

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
`onClick` 필드를 사용하여 계획 구매를 트리거하는 클릭 처리기를 추가합니다.
::

### Variant (### Variant)

`variant` prop을 사용하여 PricingPlan의 변형을 변경합니다.

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

### 방향

`orientation` prop을 사용하여 PricingPlan.Defaults의 방향을 `vertical`로 변경합니다.

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

### 태그라인

`tagline` prop을 사용하여 가격 위에 태그 라인 텍스트를 표시합니다.

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

### Terms (### Terms)

`terms` prop를 사용하여 가격 아래의 용어를 표시합니다.

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

### 하이라이트

`highlight` prop을 사용하여 PricingPlan 주위에 강조 표시된 테두리를 표시합니다.

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

### Scale (### Scale)

`scale` prop을 사용하여 PricingPlan을 다른 것보다 크게 만듭니다.

::note{to="/docs/components/pricing-plans#scale"}
PricingPlans의 `scale` 예제를 확인하여 자체적으로 입증하기가 어렵기 때문에 어떻게 작동하는지 확인하십시오.
::

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
