---
title: PricePlans
description: 'Affichez une liste de plans tarifaires dans une mise en page de grille réactive.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlans.vue
---

## Utilisation

Le composant PricingPlans fournit une disposition flexible pour afficher une liste de composants [PricingPlan](/docs/components/pricing-plan) en utilisant soit l'emplacement par défaut, soit le prop `plans`.

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
Les colonnes de la grille seront automatiquement calculées en fonction du nombre de plans, cela fonctionne avec le prop `plans` mais aussi avec le slot par défaut.
::

### Plans

Utilisez la prop `plans` comme un tableau d'objets avec les propriétés du composant [PricingPlan](/docs/components/pricing-plan#props).

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

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation des prix. Defaults sur `horizontal`.

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
Lorsque vous utilisez le prop `plans` au lieu de l'emplacement par défaut, le `orientation` des plans est automatiquement inversé, de `horizontal` à `vertical` et vice versa.
::

### Compact équipement

Utilisez le prop `compact` pour réduire le rembourrage entre les plans lorsque l'un des plans est mis à l'échelle pour un meilleur équilibre visuel.

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

### Scale

Utilisez le prop `scale` pour ajuster l'espacement entre les plans lorsque l'un des plans est mis à l'échelle pour un meilleur équilibre visuel.

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

## exemples

::note
Bien que ces exemples utilisent [Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu.
::

### Dans une page

Utilisez le composant Fixation des prix dans une page pour créer une page de tarification:

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
Dans cet exemple, les `plans` sont récupérés à l'aide de `queryCollection` à partir du module `@nuxt/content`.
::

## API

### Props and

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
