---
description: Een selecteerbare lijst met items met zoeken, virtualisatie en rich item rendering.
category: form
keywords:
  - option list
  - picker
  - selection
links:
  - label: Lijstkast
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Listbox.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de waarde van de Listbox te bepalen of de `default-value`-prop om de beginwaarde in te stellen wanneer u de status niet hoeft te controleren.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - modelValue.label
  - modelValue.icon
  - modelValue.value
  - items
external:
  - items
  - modelValue
externalTypes:
  - ListboxItem[]
props:
  modelValue:
    label: 'France'
    icon: 'i-lucide-map-pin'
    value: 'FR'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
    - label: 'Netherlands'
      icon: 'i-lucide-map-pin'
      value: 'NL'
    - label: 'Poland'
      icon: 'i-lucide-map-pin'
      value: 'PL'
    - label: 'Belgium'
      icon: 'i-lucide-map-pin'
      value: 'BE'
    - label: 'Portugal'
      icon: 'i-lucide-map-pin'
      value: 'PT'
    - label: 'Austria'
      icon: 'i-lucide-map-pin'
      value: 'AT'
    - label: 'Sweden'
      icon: 'i-lucide-map-pin'
      value: 'SE'
  class: 'w-full'
---
::

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- `label?: string`{lang="ts-type"}
- [`description?: string`{lang="ts-type"}](#with-description-in-items)
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"}](#with-icon-in-items)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
- `disabled?: boolean`{lang="ts-type"}
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, ... }`{lang="ts-type"}

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'France'
      description: 'The Hexagon'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      description: 'The Federal Republic'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      description: 'The Boot'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      description: 'The Bull Skin'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

U kunt ook een reeks arrays doorgeven aan de `items` prop om afzonderlijke groepen items weer te geven.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[][]
props:
  items:
    - - label: 'France'
        icon: 'i-lucide-map-pin'
        value: 'FR'
      - label: 'Germany'
        icon: 'i-lucide-map-pin'
        value: 'DE'
      - label: 'Italy'
        icon: 'i-lucide-map-pin'
        value: 'IT'
    - - label: 'Brazil'
        icon: 'i-lucide-map-pin'
        value: 'BR'
      - label: 'Argentina'
        icon: 'i-lucide-map-pin'
        value: 'AR'
  class: 'w-full'
---
::

### Meerdere

Gebruik de `multiple` prop om meerdere items te kunnen selecteren. Indien ingeschakeld, zal de `v-model` een array zijn.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
  - multiple
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  multiple: true
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### Value-sleutel

U kunt ervoor kiezen om een enkele eigenschap van het object te binden in plaats van het hele object met behulp van de `value-key` prop. Standaard `undefined`.

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - ListboxItem[]
props:
  modelValue: 'FR'
  valueKey: 'value'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### Filter

Gebruik de `filter` prop om een filterinvoer weer te geven of geef een object door om de [Input](/docs/components/input) component aan te passen. Standaard `false`.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  filter:
    placeholder: 'Filter...'
    icon: 'i-lucide-search'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
    - label: 'Netherlands'
      icon: 'i-lucide-map-pin'
      value: 'NL'
    - label: 'Poland'
      icon: 'i-lucide-map-pin'
      value: 'PL'
  class: 'w-full'
---
::

### Geselecteerd pictogram

Gebruik de `selected-icon` prop om het pictogram aan te passen wanneer een item is geselecteerd. Standaard `i-lucide-check`.

::component-code
---
collapse: true
ignore:
  - items
  - modelValue
  - valueKey
  - class
external:
  - items
  - modelValue
externalTypes:
  - ListboxItem[]
props:
  modelValue: 'FR'
  selectedIcon: 'i-lucide-flame'
  valueKey: 'value'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### Grootte

Gebruik de `size` prop om de grootte van de Listbox te wijzigen.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  size: xl
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### Bezig met laden

Gebruik de `loading` prop om een laadindicator weer te geven. Gebruik de `loading-icon` prop om het pictogram aan te passen.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  loading: true
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
  class: 'w-full'
---
::

### Uitgeschakeld

Gebruik de `disabled` prop om elke gebruikersinteractie met de Listbox te voorkomen.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  disabled: true
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

## Voorbeelden

### Met items type

U kunt de eigenschap `type` met `separator` gebruiken om een scheidingsteken tussen items weer te geven of `label` om een label weer te geven.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[][]
props:
  items:
    - - type: 'label'
        label: 'Fruits'
      - label: 'Apple'
      - label: 'Banana'
      - label: 'Blueberry'
      - label: 'Grapes'
      - label: 'Pineapple'
    - - type: 'label'
        label: 'Vegetables'
      - label: 'Aubergine'
      - label: 'Broccoli'
      - label: 'Carrot'
      - label: 'Courgette'
      - label: 'Leek'
  class: 'w-full'
---
::

::note
Wanneer u `label`-items als groepskoppen gebruikt, geeft u een reeks arrays door, zodat een label samen met zijn groep wordt uitgefilterd tijdens het zoeken.
::

### Met pictogram in items

U kunt de eigenschap `icon` gebruiken om een [Icon](/docs/components/icon) in de items weer te geven.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'Backlog'
      icon: 'i-lucide-circle-help'
      value: 'backlog'
    - label: 'Todo'
      icon: 'i-lucide-circle-plus'
      value: 'todo'
    - label: 'In Progress'
      icon: 'i-lucide-circle-arrow-up'
      value: 'in_progress'
    - label: 'Done'
      icon: 'i-lucide-circle-check'
      value: 'done'
  class: 'w-full'
---
::

### Met avatar in items

U kunt de eigenschap `avatar` gebruiken om een [Avatar](/docs/components/avatar) in de items weer te geven.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'benjamincanac'
      avatar:
        src: 'https://github.com/benjamincanac.png'
    - label: 'HugoRCD'
      avatar:
        src: 'https://github.com/HugoRCD.png'
    - label: 'atinux'
      avatar:
        src: 'https://github.com/atinux.png'
    - label: 'romhml'
      avatar:
        src: 'https://github.com/romhml.png'
  class: 'w-full'
---
::

### Met chip in artikelen

U kunt de eigenschap `chip` gebruiken om een [Chip](/docs/components/chip) in de items weer te geven.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'bug'
      chip:
        color: 'error'
    - label: 'feature'
      chip:
        color: 'success'
    - label: 'enhancement'
      chip:
        color: 'info'
  class: 'w-full'
---
::

### Met beschrijving in items

U kunt de eigenschap `description` gebruiken om extra tekst onder het label weer te geven.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'France'
      description: 'The Hexagon'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      description: 'The Federal Republic'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      description: 'The Boot'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      description: 'The Bull Skin'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### Controle geselecteerde item (s)

U kunt het geselecteerde item bedienen met behulp van de `default-value` prop of de `v-model` richtlijn.

::component-example
---
name: 'listbox-model-value-example'
collapse: true
---
::

### Controle zoekterm

Gebruik de `v-model:search-term`-richtlijn om de zoekterm te beheren.

::component-example
---
name: 'listbox-search-term-example'
---
::

### Met filter negeren

Stel de `ignore-filter` prop in op `true` om het interne zoeken uit te schakelen en gebruik je eigen zoeklogica.

::component-example
---
collapse: true
name: 'listbox-ignore-filter-example'
---
::

::note
Dit voorbeeld gebruikt [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) om de API-aanroepen te debounteren.
::

### Met filtervelden

Gebruik de `filter-fields`-prop met een reeks velden om op te filteren. Standaard `[labelKey]`.

::component-example
---
collapse: true
name: 'listbox-filter-fields-example'
---
::

### Met virtualisatie

Gebruik de `virtualize` prop om virtualisatie in te schakelen voor grote lijsten als een boolean of een object met opties zoals `{ estimateSize: 32, overscan: 12 }`.

::component-example
---
name: 'listbox-virtualize-example'
collapse: true
---
::

### Als een transferlijst

U kunt twee Listbox-componenten samenstellen met [Button](/docs/components/button) om een overdrachtslijstpatroon op te bouwen.

::component-example
---
name: 'listbox-transfer-list-example'
collapse: true
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
