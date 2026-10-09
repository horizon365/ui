---
title: PricePlan
description: 'Un plan de tarification personnalisable à afficher dans une page de tarification.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlan.vue
---

## Utilisation

Le composant Pricing Plan offre un moyen flexible d'afficher un plan de tarification avec un contenu personnalisable, y compris le titre, la description, le prix, les fonctionnalités, etc.

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
Utilisez le composant `PricingPlans` pour afficher plusieurs plans tarifaires dans une mise en page de grille réactive.
::

### Titre

Utilisez la prop `title` pour définir le titre du plan de prix.

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

Utilisez la prop `description` pour définir la description du plan de prix.

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

### badge référence

Utilisez la prop `badge` pour afficher un [Badge](xph044) à côté du titre du plan de prix.

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

Vous pouvez passer n'importe quelle propriété du composant [Badge](/docs/components/badge#props) pour le personnaliser.

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

### Prix

Utilisez le prop `price` pour définir le prix du plan de prix.

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

### Discount

Utilisez le prop `discount` pour définir un prix réduit qui sera affiché à côté du prix d'origine (qui sera affiché avec une barre).

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

### Facturation

Utilisez les accessoires `billing-cycle` et/ou `billing-period` pour afficher les informations de facturation du plan de prix.

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

### Caractéristiques

Utilisez le prop `features` comme tableau de chaînes pour afficher une liste de fonctionnalités sur le plan de prix:

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
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.success`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.success`.
:::
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

- x`title: string`x{lang="ts-type"}
- x`icon?: string`x{lang="ts-type"}

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

### Bouton

Utilisez la prop `button` avec n'importe quelle propriété du composant [Button](/docs/components/button) pour afficher un bouton en bas du plan de prix.

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
Utilisez le champ `onClick` pour ajouter un gestionnaire de clics pour déclencher l'achat du plan.
::

### Variant équivalent

Utilisez le prop `variant` pour modifier la variante du plan de prix.

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

Utilisez la prop `orientation` pour modifier l'orientation de l'option. Defaults sur `vertical`.

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

### Télécharger

Utilisez le prop `tagline` pour afficher un texte de slogan au-dessus du prix.

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

Utilisez le prop `terms` pour afficher les termes en dessous du prix.

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

### highlight

Utilisez le prop `highlight` pour afficher une bordure en surbrillance autour du plan de prix.

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

### échelle

Utilisez le prop `scale` pour rendre un plan de prix plus grand que les autres.

::note{to="/docs/components/pricing-plans#scale"}
Consultez l'exemple `scale` de PricingPlans pour voir comment cela fonctionne, car il est difficile de le démontrer par lui-même.
::

## API

### Props équipements

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog écrit

:component-changelog
