---
title: Inputdatum
description: 'Een invoercomponent voor datumselectie.'
category: form
keywords:
  - date picker
  - datepicker
  - calendar input
links:
  - label: Datumveld
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/date-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputDate.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de geselecteerde datum te regelen.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [2022, 2, 3]
---
::

Gebruik de `default-value` prop om de beginwaarde in te stellen wanneer u de status niet hoeft te controleren.

::component-code
---
cast:
  defaultValue: DateValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [2022, 2, 6]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Dit onderdeel gebruikt het `@internationalized/date`-pakket voor locale-bewuste opmaak. Het datumformaat wordt bepaald door de `locale`-prop van het App-onderdeel.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Dit onderdeel gebruikt het `@internationalized/date`-pakket voor locale-bewuste opmaak. Het datumformaat wordt bepaald door de `locale`-prop van het App-onderdeel.
:::
::

### Bereik

Gebruik de `range` prop om een reeks datums te selecteren.

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Kleur

Gebruik de `color` prop om de kleur van de InputDate te wijzigen.

::component-code
---
props:
  color: neutral
  highlight: true
---
::

### Variant

Gebruik de `variant` prop om de variant van de InputDate te wijzigen.

::component-code
---
props:
  variant: subtle
---
::

### Grootte

Gebruik de `size` prop om de grootte van de InputDate te wijzigen.

::component-code
---
props:
  size: xl
---
::

### Icoon

Gebruik de `icon` prop om een [Icon](/docs/components/icon) in de InputDate te tonen.

::component-code
---
props:
  icon: 'i-lucide-calendar'
---
::

::note
Gebruik de `leading`- en `trailing`-rekwisieten om de pictogrampositie in te stellen of de `leading-icon`- en `trailing-icon`-rekwisieten om voor elke positie een ander pictogram in te stellen.
::

### Scheidingsteken pictogram

Gebruik de `separator-icon` prop om de [Icon](/docs/components/icon) van de range separator te wijzigen. Standaard `i-lucide-minus`.

::component-code
---
ignore:
  - range
props:
  range: true
  separatorIcon: 'i-lucide-arrow-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.minus`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.minus`-sleutel.
:::
::

### Avatar

Gebruik de `avatar` prop om een [Avatar](/docs/components/avatar) in de InputDate weer te geven.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/vuejs.png'
    loading: lazy
  size: md
  variant: outline
---
::

### Uitgeschakeld

Gebruik de `disabled` prop om de InputDate uit te schakelen.

::component-code
---
props:
  disabled: true
---
::

## Voorbeelden

### Met niet beschikbare data

Gebruik de `is-date-unavailable` prop met een functie om specifieke datums als niet beschikbaar te markeren.

::component-example
---
name: 'input-date-unavailable-dates-example'
---
::

### Met min / max datums

Gebruik de `min-value` en `max-value` rekwisieten om de datums te beperken.

::component-example
---
name: 'input-date-min-max-dates-example'
---
::

### Als datumkiezer

Gebruik een [Calendar](/docs/components/calendar) en een [Popover](/docs/components/popover) om een datumkiezer te maken.

::component-example
---
name: 'input-date-date-picker-example'
---
::

### Als een datumbereikkiezer

Gebruik een [Calendar](/docs/components/calendar) en een [Popover](/docs/components/popover) om een datumbereikkiezer te maken.

::component-example
---
name: 'input-date-date-range-picker-example'
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
