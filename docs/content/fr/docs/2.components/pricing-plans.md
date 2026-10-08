---
title: PricePlans
description: 'Affichez une liste de plans tarifaires dans une mise en page de grille réactive.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlans.vue
---

@@ph000@utilisation

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

@18@@Plans électriques

Utilisez le prop `plans` comme un tableau d'objets avec les propriétés du composant [PricingPlan](/docs/components/pricing-plan#props).

::component-code
---
Collapse: vrai
ignorer:
  @@24@plans
Extérieur:
  @@25@plans
Extérieurs:
  - PricingPlanProps []
Props:
  Plans:
    - title: Réalisateur
      Description: "Tailored pour les hackers indépendants."
      Prix: 249 $
      Caractéristiques:
        - 'Un développeur '
        - 'Accès à vie '
      Bouton:
        Étiquette:"acheter maintenant"
    - title: Démarrage
      Description: "Mieux adapté aux petites équipes."
      Prix: 499 $
      Caractéristiques:
        - 'Jusqu'à 5 développeurs '
        - "Tout est en solo"
      Bouton:
        Étiquette:"Acheter maintenant"
    - title: Organisation
      Description: 'Idéal pour les grandes équipes et organisations.'
      Prix: 999 €
      Caractéristiques:
        - 'Jusqu'à 20 développeurs '
        - 'Tout dans Startup '
      Bouton:
        Étiquette:"acheter maintenant"
---
::

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation de la Pricing Plans. Defaults à `horizontal`.

::component-code
---
Collapse: vrai
Caché:
  @@ph039@classe
Ignorer:
  - projets
Extérieur:
  @@401@projets
Extérieurs:
  - PricingPlanProps []
Props:
  Orientation: verticale
  Plans:
    - title: Réalisateur
      Description: "Tailored pour les hackers indépendants."
      Prix: 249 $
      Caractéristiques:
        - 'Un développeur '
        - 'Accès à vie '
      Bouton:
        Étiquette:"Acheter maintenant"
    - title: Démarrage
      Description: "Mieux adapté aux petites équipes."
      Prix: 499 $
      Caractéristiques:
        - 'Jusqu'à 5 développeurs '
        - 'Tout est en Solo'
      Bouton:
        Étiquette:"acheter maintenant"
    - title: Réseau
      Description: 'Idéal pour les grandes équipes et organisations.'
      Prix: 999 €
      Caractéristiques:
        - 'Jusqu'à 20 développeurs '
        - 'Tout dans Startup '
      Bouton:
        Étiquette:"Acheter maintenant"
  Catégorie: w-full
---
::

::tip
Lorsque vous utilisez le prop `plans` à la place de l'emplacement par défaut, le `orientation` des plans est automatiquement inversé, de `horizontal` à `vertical` et vice versa.
::

### Compact

Utilisez le prop `compact` pour réduire le rembourrage entre les plans lorsque l'un des plans est mis à l'échelle pour un meilleur équilibre visuel.

::component-code
---
Collapse: vrai
ignorer:
  @@508@plans
  - compact
Extérieure:
  @@pH060@@plans
Extérieurs:
  - PricingPlanProps []
Catégorie: P-8
Props:
  Compact: vrai
  Plans:
    - title: Réalisateur
      Description: "Tailored pour les hackers indépendants."
      Prix: 249 $
      Caractéristiques:
        - 'Un développeur '
        - 'Accès à vie '
      Bouton:
        Étiquette:"acheter maintenant"
    - title: Démarrage
      Description: "Mieux adapté aux petites équipes."
      Prix: 499 $
      Échelle: True
      Caractéristiques:
        - 'Jusqu'à 5 développeurs '
        - "Tout est en solo"
      Bouton:
        Étiquette:"Acheter maintenant"
    - title: Référence
      Description: 'Idéal pour les grandes équipes et organisations.'
      Prix: 999 €
      Caractéristiques:
        - 'Jusqu'à 20 développeurs '
        - 'Tout dans Startup '
      Bouton:
        Étiquette:"acheter maintenant"
---
::

@@71@@échelle

Utilisez le prop `scale` pour ajuster l'espacement entre les plans lorsque l'un des plans est mis à l'échelle pour un meilleur équilibre visuel.

::component-code
---
Collapse: vrai
Ignorer:
  @@773@réalisateurs
  @@700@scalar
Extérieure:
  @@75@plans
Extérieurs:
  - PricingPlanProps []
Catégorie: P-8
Props:
  Échelle: True
  Plans:
    - title: Réalisateur
      Description: "Tailored pour les hackers indépendants."
      Prix: 249 $
      Caractéristiques:
        - 'Un développeur '
        - 'Accès à vie '
      Bouton:
        Étiquette:"Acheter maintenant"
    - title: Démarrage
      Description: "Mieux adapté aux petites équipes."
      Prix: 499 $
      Échelle: True
      Caractéristiques:
        - 'Jusqu'à 5 développeurs '
        - "Tout est en solo"
      Bouton:
        Étiquette:"acheter maintenant"
    - title: Référence
      Description: 'Idéal pour les grandes équipes et organisations.'
      Prix: 999 €
      Caractéristiques:
        - 'Jusqu'à 20 développeurs '
        - 'Tout dans Startup '
      Bouton:
        Étiquette:"Acheter maintenant"
---
::

@@ph086@exemples

::note
Bien que ces exemples utilisent [Nuxt Content](https://content.nuxt.com), les composants peuvent être intégrés à n'importe quel système de gestion de contenu.
::

### Au sein d'une page

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
Dans cet exemple, les `plans` sont récupérés en utilisant `queryCollection` du module `@nuxt/content`.
::

@@ph112@api

@113@113@113

Composants-props

@@ph114@@Slots

Composants slots

@@ph115@thème

Composant-thème

@116@changements

Composant-changelog
