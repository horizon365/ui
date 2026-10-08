---
title: PricePlans
description: 'Mostrar una lista de planes de precios en un diseño de cuadrícula sensible.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlans.vue
---

@@pH000@@Uso del producto

El componente PricingPlans proporciona un diseño flexible para mostrar una lista de [PricingPlan](/docs/components/pricing-plan) componentes utilizando la ranura predeterminada o el prop `plans`.

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
Las columnas de la cuadrícula se calcularán automáticamente en función del número de planes, esto funciona con el `plans` prop pero también con la ranura predeterminada.
::

@@18000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `plans` como una matriz de objetos con las propiedades del componente [PricingPlan](/docs/components/pricing-plan#props).

::component-code
---
Colapso: Verdad
Ignora:
  @@24@proyectos
Externo:
  @@25000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  - PricingPlanProps [en inglés]
Props:
  Planos:
    - title: Sólo en Español
      Descripción:'Diseñado para hackers indie'.
      Precio: $249 dólares
      Features:
        - 'Un desarrollador '
        - 'Acceso de por vida '
      Botón:
        Etiqueta: "Comprar ahora"
    - title: Inicio
      Descripción:"Ideal para equipos pequeños".
      Precio: 499 dólares
      Features:
        - 'Hasta 5 desarrolladores '
        - 'Todo en Solo'
      Botón:
        Etiqueta: "Comprar ahora"
    - title: Organización
      Descripción:'Ideal para equipos y organizaciones más grandes.'
      Precio: 999 dólares
      Features:
        - 'Hasta 20 desarrolladores '
        - 'Todo en Startup'
      Botón:
        Etiqueta: "Comprar ahora"
---
::

### Orientación

Utilice el `orientation` prop para cambiar la orientación de los planes de precios. Predeterminados a `horizontal`.

::component-code
---
Colapso: Verdad
Escondido:
  @@39@clase
Ignora:
  @400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @@401@proyectos
Externalidades:
  - PricingPlanProps (en inglés)
Props:
  Orientación: Vertical
  Planos:
    - title: Sólo en Español
      Descripción:'Diseñado para hackers indie'.
      Precio: $249 dólares
      Características:
        - 'Un desarrollador '
        - 'Acceso de por vida '
      Botón:
        Etiqueta: "Comprar ahora"
    - title: Inicio
      Descripción:"Ideal para equipos pequeños".
      Precio: 499 dólares
      Features:
        - 'Hasta 5 desarrolladores '
        - 'Todo en Solo'
      Botón:
        Etiqueta: "Comprar ahora"
    - title: Organización
      Descripción:'Ideal para equipos y organizaciones más grandes.'
      Precio: 999 dólares
      Características:
        - 'Hasta 20 desarrolladores '
        - 'Todo en Startup'
      Botón:
        Etiqueta: "Comprar ahora"
  Categoría: w-full
---
::

::tip
Cuando se utiliza el prop `plans` en lugar de la ranura predeterminada, el `orientation` de los planos se invierte automáticamente,`horizontal` a `vertical` y viceversa.
::

@@pH056@Compacto

Utilice el prop `compact` para reducir el relleno entre los planos cuando uno de los planos se escala para un mejor equilibrio visual.

::component-code
---
Colapso: Verdad
Ignora:
  @@508@proyectos
  @@pH059@compacto
Externo:
  @060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  - PricingPlanProps [en inglés]
Categoría: P-8
Props:
  Compacto: verdadero
  Planos:
    - title: Sólo en Español
      Descripción:'Diseñado para hackers indie'.
      Precio: $249 dólares
      Características:
        - 'Un desarrollador '
        - 'Acceso de por vida '
      Botón:
        Etiqueta: "Comprar ahora"
    - title: Inicio
      Descripción:"Ideal para equipos pequeños".
      Precio: 499 dólares
      Escala: Verdad
      Features:
        - 'Hasta 5 desarrolladores '
        - 'Todo en Solo'
      Botón:
        Etiqueta: "Comprar ahora"
    - title: Organización
      Descripción:'Ideal para equipos y organizaciones más grandes.'
      Precio: 999 dólares
      Características:
        - 'Hasta 20 desarrolladores '
        - 'Todo en Startup'
      Botón:
        Etiqueta: "Comprar ahora"
---
::

@710@@Scala

Utilice el prop `scale` para ajustar el espaciado entre los planos cuando uno de los planos se escala para un mejor equilibrio visual.

::component-code
---
Colapso: Verdad
Ignora:
  @@73@proyectos
  @@700@scalar
Externo:
  @@75000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  - PricingPlanProps (en inglés)
Categoría: P-8
Props:
  Escala: Verdad
  Planos:
    - title: Sólo en Español
      Descripción:'Diseñado para hackers indie'.
      Precio: $249 dólares
      Features:
        - 'Un desarrollador '
        - 'Acceso de por vida '
      Botón:
        Etiqueta: "Comprar ahora"
    - title: Inicio
      Descripción:"Ideal para equipos pequeños".
      Precio: 499 dólares
      Escala: Verdad
      Features:
        - 'Hasta 5 desarrolladores '
        - 'Todo en Solo'
      Botón:
        Etiqueta: "Comprar ahora"
    - title: Organización
      Descripción:'Ideal para equipos y organizaciones más grandes.'
      Precio: 999 dólares
      Características:
        - 'Hasta 20 desarrolladores '
        - 'Todo en Startup'
      Botón:
        Etiqueta: "Comprar ahora"
---
::

@@ph086@@Ejemplos

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
En este ejemplo, el `plans` se obtiene utilizando `queryCollection` desde el módulo `@nuxt/content`.
::

@112

@@113@113@113

Componentes Props

@@114@114@114

Componentes de slots

@115 @@ Temas

Componente Tema

@116@Changelog

Categoría: component-changelog
