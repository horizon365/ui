---
title: PricePlans
description: 'Mostrar una lista de planes de precios en un diseño de cuadrícula sensible.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlans.vue
---

xph0000xUso

El componente PricingPlans proporciona un diseño flexible para mostrar una lista de componentes [PricingPlan](/docs/components/pricing-plan) utilizando la ranura predeterminada o la prop. `plans`.

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
Las columnas de la cuadrícula se calcularán automáticamente en función del número de planos, esto funciona con el accesorio `plans` pero también con la ranura predeterminada.
::

### Proyectos

Utilice el prop `plans` como una matriz de objetos con las propiedades del componente [PricingPlan](/docs/components/pricing-plan#props).

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

### Orientación

Utilice el prop `orientation` para cambiar la orientación de los planes de precios. Predeterminados a `horizontal`.

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
Cuando se utiliza el accesorio `plans` en lugar de la ranura predeterminada, el `orientation` de los planes se invierte automáticamente, de `horizontal` a `vertical` y viceversa.
::

### Compact (Edición española)

Utilice el accesorio `compact` para reducir el relleno entre los planos cuando uno de los planos se escala para un mejor equilibrio visual.

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

### Scale (Edición española)

Utilice el soporte `scale` para ajustar el espaciado entre los planos cuando uno de los planos se escala para un mejor equilibrio visual.

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

## Ejemplos

::note
Si bien estos ejemplos utilizan [Nuxt Content](https://content.nuxt.com), los componentes se pueden integrar con cualquier sistema de gestión de contenido.
::

### En una página

Utilice el componente Planes de precios en una página para crear una página de precios:

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
En este ejemplo, los `plans` se obtienen utilizando `queryCollection` desde el módulo `@nuxt/content`.
::

## API

### Props (accesorios)

:component-props

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
