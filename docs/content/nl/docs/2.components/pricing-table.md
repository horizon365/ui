---
title: Prijstabel
description: 'Een responsieve prijstabel die gelaagde prijsplannen weergeeft met functievergelijkingen.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingTable.vue
---

## Gebruik

De PricingTable-component biedt een responsieve en aanpasbare manier om prijsplannen in een tabelformaat weer te geven, waarbij automatisch wordt geschakeld tussen een horizontale tabellay-out op het bureaublad voor eenvoudige vergelijking en een verticale
 kaartindeling op mobiel voor een betere leesbaarheid.

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

Gebruik de `tiers`-prop als een reeks objecten om uw prijsplannen te definiëren. Elk tier-object ondersteunt de volgende eigenschappen:

- `id: string`{lang="ts-type"} - Unieke identificatie voor de laag (vereist)
- `title?: string`{lang="ts-type"} - Naam van het tariefplan
- `description?: string`{lang="ts-type"} - Korte omschrijving van het plan
- `price?: string`{lang="ts-type"} - De huidige prijs van het abonnement (bijv. "$99", "€99", "Gratis")
- `discount?: string`{lang="ts-type"} - De gereduceerde prijs die de `price` met doorhalen zal weergeven (bijv. "$79", "€79")
- `billingCycle?: string`{lang="ts-type"} - De eenheidsprijsperiode die naast de prijs wordt weergegeven (bijv. "/ maand", "/ stoel / maand")
- `billingPeriod?: string`{lang="ts-type"} - Aanvullende factureringscontext die boven de factureringscyclus verschijnt (bijv. "maandelijks gefactureerd")
- `badge?: string | BadgeProps`{lang="ts-type"} - Toon een badge naast de titel `{ color: 'primary', variant: 'subtle' }`{lang="ts-type"}
- `button?: ButtonProps`{lang="ts-type"} - Configureer de CTA knop `{ size: 'lg', block: true }`{lang="ts-type"}
- `highlight?: boolean`{lang="ts-type"} - Of deze laag visueel moet worden benadrukt als de aanbevolen optie

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

### Secties

Gebruik de `sections`-prop om functies in logische groepen te ordenen. Elke sectie vertegenwoordigt een categorie functies die u over verschillende prijsniveaus wilt vergelijken.

- `title: string`{lang="ts-type"} - De kop voor de rubriek feature
- `features: PricingTableSectionFeature[]`{lang="ts-type"} - Een reeks functies met hun beschikbaarheid in elke laag:
- Elke functie vereist een `title` en een `tiers` object toewijzing tier ID 's aan waarden
- Booleaanse waarden (`true` / `false`) worden weergegeven als vinkjes (✓) of min-pictogrammen (-)
- String-waarden worden weergegeven als tekst (bijv. "Onbeperkt", "Maximaal 5 gebruikers")
- Numerieke waarden worden weergegeven zoals ze zijn (bijv. 10, 100)

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

## Voorbeelden

### Met sleuven

De PricingTable-component biedt krachtige opties voor het aanpassen van slots om de weergave van uw inhoud aan te passen. U kunt individuele elementen aanpassen met behulp van generieke slots of specifieke items targeten met behulp van hun ID 's.

::component-example
---
prettier: true
name: 'pricing-table-slots-example'
collapse: true
---
::

De component ondersteunt verschillende sleuftypen voor maximale aanpassingsflexibiliteit:

| Slot Type | Patroon | Beschrijving | Voorbeeld |
|-----------|---------|-------------|---------|
| **Tier slots** | `#{tier-id}-{element}` | Doelspecifieke niveaus | `#team-title`, `#solo-price` |
| **Section slots** | `#section-{id\|formatted-title}-title` | Doelspecifieke secties | `#section-features-title` |
| **Feature slots** | `#feature-{id\|formatted-title}-{title\|value}` | Doelspecifieke kenmerken | `#feature-developers-title` |
| **Generieke slots** | `#tier-title`, `#section-title`, etc. | Toepassen op alle items | `#feature-value` |

::note
Als er geen `id` is opgegeven, wordt de slotnaam automatisch gegenereerd uit de titel (bijv. "Premium Features!" wordt `#section-premium-features-title`).
::

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Changelog

:component-changelog
