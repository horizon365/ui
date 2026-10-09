---
title: PrijzenPlannen
description: 'Toon een lijst met prijsplannen in een responsieve rasterlay-out.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlans.vue
---

## Gebruik

De PricingPlans-component biedt een flexibele lay-out om een lijst met [PricingPlan](/docs/components/pricing-plan) componenten weer te geven met behulp van de standaardsleuf of de `plans`-prop.

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
De rasterkolommen worden automatisch berekend op basis van het aantal plannen, dit werkt met de `plans` prop maar ook met de standaard slot.
::

### Plannen

Gebruik de `plans` prop als een array van objecten met de eigenschappen van de [PricingPlan](/docs/components/pricing-plan#props) component.

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

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van de PricingPlans te wijzigen. Standaard `horizontal`.

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
Bij gebruik van de `plans` prop in plaats van de standaard slot wordt de `orientation` van de plannen automatisch omgekeerd, `horizontal` naar `vertical` en vice versa.
::

### Compact

Gebruik de `compact` prop om de opvulling tussen de plannen te verminderen wanneer een van de plannen is geschaald voor een betere visuele balans.

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

### Schaal

Gebruik de `scale` prop om de afstand tussen de plannen aan te passen wanneer een van de plannen wordt geschaald voor een betere visuele balans.

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

## Voorbeelden

::note
Hoewel deze voorbeelden [Nuxt Content](https://content.nuxt.com) gebruiken, kunnen de componenten worden geïntegreerd met elk contentbeheersysteem.
::

### Binnen een pagina

Gebruik het onderdeel PricingPlans op een pagina om een prijspagina te maken:

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
In dit voorbeeld worden de `plans` opgehaald met `queryCollection` uit de `@nuxt/content` module.
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
