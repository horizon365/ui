---
title: PriceTable
description: 'Un composant de tableau de tarification réactif qui affiche des plans de tarification à plusieurs niveaux avec des comparaisons de fonctionnalités.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingTable.vue
---

## Utilisation

Le composant PricingTable fournit un moyen réactif et personnalisable d'afficher les plans de tarification dans un format de tableau, basculant automatiquement entre une disposition de tableau horizontal sur le bureau pour une comparaison facile et une disposition de carte verticale sur mobile pour une meilleure lisibilité.

::code-preview

::u-pricing-table
---
tiers:
  - id: 'solo'
    title: 'Solo'
    description: 'For indie hackers.'
    price: '$249'
    billingCycle: '/month'
    billingPeriod: 'billed annually'
    badge: 'Most popular'
    button:
      label: 'Buy now'
      variant: 'subtle'
  - id: 'team'
    title: 'Team'
    description: 'For growing teams.'
    price: '$499'
    billingCycle: '/month'
    billingPeriod: 'billed annually'
    button:
      label: 'Buy now'
    highlight: true
  - id: 'enterprise'
    title: 'Enterprise'
    description: 'For large organizations.'
    price: 'Custom'
    button:
      label: 'Contact sales'
      color: 'neutral'
sections:
  - title: 'Features'
    features:
      - title: 'Number of developers'
        tiers:
          solo: '1'
          team: '5'
          enterprise: 'Unlimited'
      - title: 'Projects'
        tiers:
          solo: true
          team: true
          enterprise: true
      - title: 'GitHub repository access'
        tiers:
          solo: true
          team: true
          enterprise: true
      - title: 'Updates'
        tiers:
          solo: 'Patch & minor'
          team: 'All updates'
          enterprise: 'All updates'
      - title: 'Support'
        tiers:
          solo: 'Community'
          team: 'Priority'
          enterprise: '24/7'
  - title: 'Security'
    features:
      - title: 'SSO'
        tiers:
          solo: false
          team: true
          enterprise: true
      - title: 'Audit logs'
        tiers:
          solo: false
          team: true
          enterprise: true
      - title: 'Custom security review'
        tiers:
          solo: false
          team: false
          enterprise: true
---
::

::

### Tiers

Utilisez le prop `tiers` comme un tableau d'objets pour définir vos plans de tarification. Chaque objet de niveau prend en charge les propriétés suivantes:

- `id: string`{lang="ts-type"}-Identifiant unique du niveau (obligatoire)
- `title?: string`{lang="ts-type"}-Nom du plan de tarification
- `description?: string`{lang="ts-type"}-Brève description du plan
- `price?: string`{lang="ts-type"}-Le prix actuel du forfait (par exemple,"$99","€ 99","Gratuit")
- `discount?: string`{lang="ts-type"}-Le prix réduit qui affichera le `price` avec barré (par exemple,"$79","€ 79")
- `billingCycle?: string`{lang="ts-type"}-La période de prix unitaire qui apparaît à côté du prix (par exemple,"/mois","/siège/mois")
- `billingPeriod?: string`{lang="ts-type"}-Contexte de facturation supplémentaire qui apparaît au-dessus du cycle de facturation (par exemple,"facturé mensuellement")
- `badge?: string | BadgeProps`{lang="ts-type"}-Afficher un badge à côté du titre `{ color: 'primary', variant: 'subtle' }`{lang="ts-type"}
- `button?: ButtonProps`{lang="ts-type"}-Configurer le bouton CTA `{ size: 'lg', block: true }`{lang="ts-type"}
- `highlight?: boolean`{lang="ts-type"}-Souligner visuellement ce niveau comme option recommandée

::component-code
---
prettier: true
collapse: true
external:
  - tiers
externalTypes:
  - PricingTableTier[]
hide:
  - class
ignore:
  - tiers
props:
  tiers:
    - id: 'solo'
      title: 'Solo'
      description: 'For indie hackers.'
      price: '$249'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      badge: 'Most popular'
      button:
        label: 'Buy now'
        variant: 'subtle'
    - id: 'team'
      title: 'Team'
      description: 'For growing teams.'
      price: '$499'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      button:
        label: 'Buy now'
      highlight: true
    - id: 'enterprise'
      title: 'Enterprise'
      description: 'For large organizations.'
      price: 'Custom'
      button:
        label: 'Contact sales'
        color: 'neutral'
  class: 'border-b border-default'
---
::

### Sections

Utilisez la prop `sections` pour organiser les fonctionnalités en groupes logiques. Chaque section représente une catégorie de fonctionnalités que vous souhaitez comparer entre différents niveaux de tarification.

- `title: string`{lang="ts-type"}-L'en-tête de la section des fonctionnalités
- `features: PricingTableSectionFeature[]`{lang="ts-type"}-Une gamme de fonctionnalités avec leur disponibilité dans chaque niveau:
  - Chaque fonctionnalité nécessite un identifiant de niveau de mappage d'objet `title` et `tiers` aux valeurs
  - Les valeurs booléennes (`true`/`false`) s'affichent sous forme de coche (✓) ou de moins (-).
  - String values will be displayed as text (e.g."Unlimited","Up to 5 users")
  - Les valeurs numériques seront affichées telles quelles (par exemple, 10, 100)

::component-code
---
prettier: true
collapse: true
external:
  - tiers
  - sections
externalTypes:
  - PricingTableTier[]
  - PricingTableSection[]
hide:
  - class
ignore:
  - tiers
  - sections
props:
  tiers:
    - id: 'solo'
      title: 'Solo'
      price: '$249'
      description: 'For indie hackers.'
      billingCycle: '/month'
      button:
        label: 'Buy now'
        variant: 'subtle'
    - id: 'team'
      title: 'Team'
      price: '$499'
      description: 'For growing teams.'
      billingCycle: '/month'
      button:
        label: 'Buy now'
    - id: 'enterprise'
      title: 'Enterprise'
      price: 'Custom'
      description: 'For large organizations.'
      button:
        label: 'Contact sales'
        color: 'neutral'
  sections:
    - title: 'Features'
      features:
        - title: 'Number of developers'
          tiers:
            solo: '1'
            team: '5'
            enterprise: 'Unlimited'
        - title: 'Projects'
          tiers:
            solo: true
            team: true
            enterprise: true
    - title: 'Security'
      features:
        - title: 'SSO'
          tiers:
            solo: false
            team: true
            enterprise: true
---
::

## Exemples

### Avec slots

Le composant PricingTable fournit de puissantes options de personnalisation des emplacements pour personnaliser l'affichage de votre contenu. Vous pouvez personnaliser des éléments individuels à l'aide d'emplacements génériques ou cibler des éléments spécifiques à l'aide de leurs ID.

::component-example
---
prettier: true
name: 'pricing-table-slots-example'
collapse: true
---
::

Le composant prend en charge différents types de fentes pour une flexibilité de personnalisation maximale:

| Type de slot| Pattern| Description| exemple|
|-----------|---------|-------------|---------|
| **Tier slots**| `#{tier-id}-{element}`| Cible spécifique Tiers| Xph236x et Xph237x|
| **Section slots**| `#section-{id\|formatted-title}-title`| Sections ciblées spécifiques| `#section-features-title` and|
| **Feature slots**| `#feature-{id\|formatted-title}-{title\|value}` and| Caractéristiques spécifiques cibles| `#feature-developers-title`|
| **Générique slots**| `#tier-title`, `#section-title`, etc.| Applicable à tous les items| `#feature-value`|

::note
Lorsqu 'aucun `id` n'est fourni, le nom de la machine à sous est généré automatiquement à partir du titre (par exemple,"Premium Features!" devient `#section-premium-features-title`).
::

## API

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
