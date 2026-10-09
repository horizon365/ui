---
title: Voortgangsgroep
description: Een voortgangsbalk opgesplitst in meerdere segmenten die oplopen tot een totaal.
category: element
navigation.badge: New
keywords:
  - meter
  - meter group
  - segmented progress
  - stacked bar
  - breakdown
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ProgressGroup.vue
---

## Gebruik

Gebruik de ProgressGroup-component om meerdere waarden weer te geven als segmenten van een enkele voortgangsbalk.

::component-code
---
collapse: true
ignore:
  - items
  - max
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  max: 128
  items:
    - label: 'System'
      value: 24
      color: 'neutral'
      icon: 'i-lucide-cog'
    - label: 'Apps'
      value: 8
      color: 'error'
      icon: 'i-lucide-app-window'
    - label: 'Documents'
      value: 12
      color: 'warning'
      icon: 'i-lucide-file'
    - label: 'Multimedia'
      value: 42
      color: 'success'
      icon: 'i-lucide-film'
  class: 'w-96'
---
::

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `value?: number`{lang="ts-type"}
- [`color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | (string & {})`{lang="ts-type"}](#with-custom-colors)
- `slot?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { segment?: ClassNameValue, indicator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingDot?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue }`{lang="ts-type"}

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  items:
    - label: 'Compute'
      value: 42
      color: 'primary'
    - label: 'Storage'
      value: 18
      color: 'info'
    - label: 'Bandwidth'
      value: 9
      color: 'warning'
  class: 'w-96'
---
::

::note
Items zonder een `icon` krijgen in plaats daarvan een gekleurde stip in de lijst.
::

### Max

Gebruik de `max` prop om de waarde in te stellen die alle items optellen. Standaard `100`.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  max: 512
  items:
    - label: 'Used'
      value: 128
      color: 'primary'
    - label: 'Reserved'
      value: 64
      color: 'neutral'
  class: 'w-96'
---
::

::note
Waarden worden geklemd tussen `0` en `max`, en segmenten die oplopen tot meer dan `max` delen de track proportioneel.
::

### Status

Gebruik de `status` prop om de opgetelde waarde boven de balk weer te geven.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  status: true
  max: 128
  items:
    - label: 'System'
      value: 24
      color: 'neutral'
    - label: 'Apps'
      value: 8
      color: 'error'
    - label: 'Multimedia'
      value: 42
      color: 'success'
  class: 'w-96'
---
::

::tip
De status volgt het einde van de balk, gebruik `:ui="{ status: 'w-full' }"` om het in plaats daarvan de volledige breedte te laten overspannen.
::

### Kleur

Gebruik de `color` prop om de kleur te veranderen van elk segment dat niet van zichzelf is ingesteld.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  color: neutral
  items:
    - label: 'Read'
      value: 42
    - label: 'Write'
      value: 18
  class: 'w-96'
---
::

::tip
Zowel deze prop als de `color` van elk item accepteren elke CSS-kleurwaarde, wat handig is voor paletten buiten het thema.
::

### Grootte

Gebruik de `size` prop om de grootte van de ProgressGroup te wijzigen.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  size: xl
  items:
    - label: 'Read'
      value: 42
      color: 'primary'
    - label: 'Write'
      value: 18
      color: 'info'
  class: 'w-96'
---
::

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van de ProgressGroup te wijzigen. Standaard is `horizontal`.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  orientation: vertical
  items:
    - label: 'Read'
      value: 42
      color: 'primary'
    - label: 'Write'
      value: 18
      color: 'info'
  class: 'h-48'
---
::

## Voorbeelden

### Met status slot

Gebruik de `#status`-sleuf om het opgetelde percentage te vervangen door uw eigen inhoud.

::component-example
---
collapse: true
name: progress-group-status-example
---
::

### Met item slots

Gebruik de `#item-label`- en `#item-trailing`-slots om te wijzigen wat elk item weergeeft. Beide ontvangen de `item`, de `index` en de `percent`.

::component-example
---
collapse: true
name: progress-group-item-example
---
::

### Met aangepaste kleuren

Geef elk item een CSS-kleur om een uitsplitsing te maken buiten het themapalet.

::component-example
---
collapse: true
name: progress-group-custom-color-example
---
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
