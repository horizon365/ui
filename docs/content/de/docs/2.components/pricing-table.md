---
title: Preisliste
description: 'Eine responsive Preistabellenkomponente, die abgestufte Preispläne mit Feature-Vergleichen anzeigt.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingTable.vue
---

## Bearbeiten

Die PricingTable-Komponente bietet eine reaktionsschnelle und anpassbare Möglichkeit, Preispläne in einem Tabellenformat anzuzeigen und automatisch zwischen einem horizontalen Tabellenlayout auf dem Desktop für einen einfachen Vergleich und einem vertikalen Kartenlayout auf dem Handy für eine bessere Lesbarkeit zu wechseln.

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

### Tiers (englisch)

Verwenden Sie die `tiers`-prop als Array von Objekten, um Ihre Preispläne zu definieren. Jedes Tier-Objekt unterstützt die folgenden Eigenschaften:

- `id: string`{lang="ts-type"}-Eindeutige Kennung für die Ebene (erforderlich)
- `title?: string`{lang="ts-type"}-Name des Preisplans
- `description?: string`{lang="ts-type"}-Kurzbeschreibung des Plans
- `price?: string`{lang="ts-type"}-Der aktuelle Preis des Plans (z. B."99 $","99 €","Free")
- `discount?: string`{lang="ts-type"}-Der ermäßigte Preis, der den `price` mit Durchstreichen anzeigt (z. B."$79","€ 79")
- `billingCycle?: string`{lang="ts-type"}-Der Einheitspreiszeitraum, der neben dem Preis angezeigt wird (z. B."/Monat","/Sitz/Monat")
- `billingPeriod?: string`{lang="ts-type"}-Zusätzlicher Abrechnungskontext, der über dem Abrechnungszeitraum angezeigt wird (z. B."monatlich in Rechnung gestellt")
- `badge?: string | BadgeProps`{lang="ts-type"}-Zeigt ein Abzeichen neben dem Titel `{ color: 'primary', variant: 'subtle' }`{lang="ts-type"} an
- `button?: ButtonProps`{lang="ts-type"}-Konfigurieren der CTA-Taste `{ size: 'lg', block: true }`{lang="ts-type"}
- `highlight?: boolean`{lang="ts-type"}-Ob diese Ebene als empfohlene Option visuell hervorgehoben werden soll

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

### Sections Bearbeiten

Verwenden Sie die `sections`-prop zu organisieren features in logische groups. Each Abschnitt stellt eine Kategorie von features, die Sie vergleichen möchten, über verschiedene Preisstufen.

- `title: string`{lang="ts-type"}-Die Überschrift für den Feature Abschnitt
- `features: PricingTableSectionFeature[]`{lang="ts-type"}-Eine Reihe von Funktionen mit ihrer Verfügbarkeit in jeder Ebene:
  - Jedes Feature erfordert eine `title`-und eine `tiers`-Objekt-Zuordnungs-Tier-IDs zu Werten
  - Boolesche Werte (`true`/`false`) werden als Häkchen (✓) oder Minuszeichen (-) angezeigt.
  - String-Werte werden als Text angezeigt (z.B."Unbegrenzt","Bis zu 5 Benutzer")
  - Numerische Werte werden so angezeigt wie sie sind (z.B. 10, 100)

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

## Examples (Beispiele)

### Mit Steckplätze

Die PricingTable-Komponente bietet leistungsstarke Slot-Anpassungsoptionen, um die Anzeige Ihrer Inhalte anzupassen. Sie können einzelne Elemente mit generischen Slots anpassen oder bestimmte Elemente mit ihren IDs ansprechen.

::component-example
---
prettier: true
name: 'pricing-table-slots-example'
collapse: true
---
::

Die Komponente unterstützt verschiedene Slottypen für maximale Anpassungsflexibilität:

| Der Slot Typ| pattern| Description| beispiel|
|-----------|---------|-------------|---------|
| **Tier slots** (Deutsche Übersetzung)| x235x Bearbeiten| Spezifische Ziele für Dritte| `#team-title`, `#solo-price`, `#team-title` und `#solo-price`|
| **Section slots** (Deutsche Ausgabe)| x240x Bearbeiten| Spezifische Target-Abschnitte| x241x Bearbeiten|
| **Feature slots**| X244x Bearbeiten| Spezifische Targets| X245x Bearbeiten|
| **Generic slots** (Deutsche Übersetzung)| `#tier-title`, `#section-title`, usw.| Gilt für alle Items| XP250X Bearbeiten|

::note
Wenn kein `id` angegeben ist, wird der Slot-Name automatisch aus dem Titel generiert (z. B. wird aus "Premium Features!" `#section-premium-features-title`).
::

## API Bearbeiten

### Props (nicht)

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
