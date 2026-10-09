---
title: Preisplan
description: 'Ein anpassbarer Preisplan, der auf einer Preisseite angezeigt wird.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlan.vue
---

## Bearbeiten

Die PricingPlan-Komponente bietet eine flexible Möglichkeit, einen Preisplan mit anpassbaren Inhalten wie Titel, Beschreibung, Preis, Funktionen usw. anzuzeigen.

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
Verwenden Sie die `PricingPlans`-Komponente, um mehrere Preispläne in einem responsiven Rasterlayout anzuzeigen.
::

xph019title Übersetzung

Verwenden Sie die `title`-Prop, um den Titel des Preisplans festzulegen.

::component-code
---
ignore:
  - class
props:
  title: 'Solo'
  class: 'w-96'
---
::

### Beschreibung

Verwenden Sie die `description`-prop, um die Beschreibung des PricingPlan festzulegen.

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

### Badge Bearbeiten

Verwenden Sie die `badge`-Prop, um ein [Badge](/docs/components/badge) neben dem Titel des PricingPlans anzuzeigen.

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

Sie können jede Eigenschaft der Komponente [Badge](/docs/components/badge#props) übergeben, um sie anzupassen.

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

### Price

Verwenden Sie die `price`-Prop, um den Preis des PricingPlan festzulegen.

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

### Discount (englisch)

Verwenden Sie die `discount`-Prop, um einen ermäßigten Preis festzulegen, der neben dem ursprünglichen Preis angezeigt wird (der mit einem Durchstreichen angezeigt wird).

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

### Billing (englisch)

Verwenden Sie die `billing-cycle` und/oder `billing-period` Requisiten, um die Rechnungsinformationen des PricingPlan anzuzeigen.

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

### Features Bearbeiten

Verwenden Sie die `features` prop als Array von String, um eine Liste von Funktionen auf dem PricingPlan anzuzeigen:

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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.success` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.success` Schlüssel anpassen.
:::
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

- `title: string`{lang="ts-type"} (englisch)
- `icon?: string`{lang="ts-type"} (englisch)

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

### Button (englisch)

Verwenden Sie die `button`-Prop mit einer beliebigen Eigenschaft aus der Komponente [Button](/docs/components/button), um eine Schaltfläche am unteren Rand des Preisplans anzuzeigen.

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
Verwenden Sie das Feld `onClick`, um einen Klick-Handler hinzuzufügen, um den Plankauf auszulösen.
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um die Variante des PricingPlan zu ändern.

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

### Orientierung.

Verwenden Sie die `orientation`-prop, um die Ausrichtung der PricingPlan. Defaults auf `vertical` zu ändern.

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

### Tagline (englisch)

Verwenden Sie die `tagline`-Stütze, um einen Tagline-Text über dem Preis anzuzeigen.

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

### Terms (englisch)

Verwenden Sie die `terms`-Prop, um Begriffe unter dem Preis anzuzeigen.

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

### Highlight

Verwenden Sie die `highlight`-Prop, um einen hervorgehobenen Rahmen um den PricingPlan anzuzeigen.

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

### Scale ist ein

Verwenden Sie die `scale`-Prop, um einen PricingPlan größer als die anderen zu machen.

::note{to="/docs/components/pricing-plans#scale"}
Schauen Sie sich das Beispiel von PricingPlans für `scale` an, um zu sehen, wie es funktioniert, da es selbst schwer zu demonstrieren ist.
::

## API Bearbeiten

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
