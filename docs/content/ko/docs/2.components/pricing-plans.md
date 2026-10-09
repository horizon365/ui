---
title: PricingPlans 가격 계획
description: '응답 그리드 레이아웃에 가격책정 계획 목록을 표시합니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlans.vue
---

## Usage

PricingPlans 구성 요소는 기본 슬롯 또는 `plans` prop를 사용하여 [PricingPlanxph03xxph04x) 구성 요소 목록을 표시하는 유연한 레이아웃을 제공합니다.

```vue {2,8}
<template>
  <UPricingPlans>
    <UPricingPlan
      v-for="(plan, index) in plans"
      :key="index"
      v-bind="plan"
    />
  </UPricingPlans>
</template>
```

::tip
그리드 기둥은 계획 수에 따라 자동으로 계산되며, 이것은 `plans` prop에서 작동하지만 기본 슬롯에서도 작동합니다.
::

### Plans 계획

`plans` prop을 [PricingPlan](/docs/components/pricing-plan#props) 구성 요소의 속성이 있는 오브젝트 배열로 사용합니다.

::component-code
---
collapse: true
ignore:
  - plans
external:
  - plans
externalTypes:
  - PricingPlanProps[]
props:
  plans:
    - title: Solo
      description: 'Tailored for indie hackers.'
      price: '$249'
      features:
        - 'One developer'
        - 'Lifetime access'
      button:
        label: 'Buy now'
    - title: Startup
      description: 'Best suited for small teams.'
      price: '$499'
      features:
        - 'Up to 5 developers'
        - 'Everything in Solo'
      button:
        label: 'Buy now'
    - title: Organization
      description: 'Ideal for larger teams and organizations.'
      price: '$999'
      features:
        - 'Up to 20 developers'
        - 'Everything in Startup'
      button:
        label: 'Buy now'
---
::

### 방향 지정

`orientation` prop를 사용하여 PricingPlans.default의 방향을 `horizontal`로 변경합니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - plans
external:
  - plans
externalTypes:
  - PricingPlanProps[]
props:
  orientation: vertical
  plans:
    - title: Solo
      description: 'Tailored for indie hackers.'
      price: '$249'
      features:
        - 'One developer'
        - 'Lifetime access'
      button:
        label: 'Buy now'
    - title: Startup
      description: 'Best suited for small teams.'
      price: '$499'
      features:
        - 'Up to 5 developers'
        - 'Everything in Solo'
      button:
        label: 'Buy now'
    - title: Organization
      description: 'Ideal for larger teams and organizations.'
      price: '$999'
      features:
        - 'Up to 20 developers'
        - 'Everything in Startup'
      button:
        label: 'Buy now'
  class: 'w-full'
---
::

::tip
기본 슬롯 대신 `plans` 소품을 사용하면 계획의 `orientation`가 자동으로 반전되고 `horizontal`가 `vertical`로 또는 그 반대도 마찬가지입니다.
::

### 컴팩트

계획 중 하나가 더 나은 시각적 균형을 위해 크기를 조정할 때 `compact` Prop을 사용하여 계획 사이의 패딩을 줄입니다.

::component-code
---
collapse: true
ignore:
  - plans
  - compact
external:
  - plans
externalTypes:
  - PricingPlanProps[]
class: 'p-8'
props:
  compact: true
  plans:
    - title: Solo
      description: 'Tailored for indie hackers.'
      price: '$249'
      features:
        - 'One developer'
        - 'Lifetime access'
      button:
        label: 'Buy now'
    - title: Startup
      description: 'Best suited for small teams.'
      price: '$499'
      scale: true
      features:
        - 'Up to 5 developers'
        - 'Everything in Solo'
      button:
        label: 'Buy now'
    - title: Organization
      description: 'Ideal for larger teams and organizations.'
      price: '$999'
      features:
        - 'Up to 20 developers'
        - 'Everything in Startup'
      button:
        label: 'Buy now'
---
::

### Scale 크기

계획 중 하나가 더 나은 시각적 균형을 위해 크기를 조정할 때 `scale` 소품을 사용하여 계획 사이의 간격을 조정합니다.

::component-code
---
collapse: true
ignore:
  - plans
  - scale
external:
  - plans
externalTypes:
  - PricingPlanProps[]
class: 'p-8'
props:
  scale: true
  plans:
    - title: Solo
      description: 'Tailored for indie hackers.'
      price: '$249'
      features:
        - 'One developer'
        - 'Lifetime access'
      button:
        label: 'Buy now'
    - title: Startup
      description: 'Best suited for small teams.'
      price: '$499'
      scale: true
      features:
        - 'Up to 5 developers'
        - 'Everything in Solo'
      button:
        label: 'Buy now'
    - title: Organization
      description: 'Ideal for larger teams and organizations.'
      price: '$999'
      features:
        - 'Up to 20 developers'
        - 'Everything in Startup'
      button:
        label: 'Buy now'
---
::

## examples 예제

::note
이러한 예제에서는 [Nuxt Content](https://content.nuxt.com)를 사용하지만 구성 요소는 모든 콘텐츠 관리 시스템과 통합 할 수 있습니다.
::

### Page 페이지 내

페이지의 PricingPlans 구성요소를 사용하여 가격책정 페이지를 생성합니다.

```vue [pages/pricing/index.vue]{11}
<script setup lang="ts">
const { data: plans } = await useAsyncData('plans', () => queryCollection('plans').all())
</script>

<template>
  <UPage>
    <UPageHero title="Pricing" />

    <UPageBody>
      <UContainer>
        <UPricingPlans :plans="plans" />
      </UContainer>
    </UPageBody>
  </UPage>
</template>
```

::note
이 예제에서는 `plans`가 `@nuxt/content` 모듈에서 `queryCollection`를 사용하여 가져올 수 있습니다.
::

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## Changelog 파일

:component-changelog
