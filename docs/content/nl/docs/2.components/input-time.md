---
title: Inputtijd
description: 'Een ingang voor het selecteren van een tijd.'
category: form
keywords:
  - time picker
  - clock
  - hour
links:
  - label: Tijdveld
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-field
  - label: Tijdbereikveld
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-range-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTime.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de geselecteerde tijd te regelen.

::component-code
---
cast:
  modelValue: TimeValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [12, 30, 0]
---
::

Gebruik de `default-value` prop om de beginwaarde in te stellen wanneer u de status niet hoeft te controleren.

::component-code
---
cast:
  defaultValue: TimeValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [9, 45, 0]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Dit onderdeel gebruikt het `@internationalized/date`-pakket voor locale-bewuste opmaak. Het tijdformaat wordt bepaald door de `locale`-prop van de App-component.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Dit onderdeel gebruikt het `@internationalized/date`-pakket voor locale-bewuste opmaak. Het tijdformaat wordt bepaald door de `locale`-prop van de App-component.
:::
::

### Bereik

Gebruik de `range` prop om de selectie van het tijdbereik met begin- en eindtijden mogelijk te maken.

::component-code
---
prettier: true
cast:
  modelValue: TimeRangeValue
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [9, 0, 0]
    end: [17, 30, 0]
---
::

### Hour Cyclus

Gebruik de `hour-cycle` prop om de uurcyclus van de InputTime te wijzigen. Standaard is `12`.

::component-code
---
cast:
  defaultValue: TimeValue
ignore:
  - hourCycle
  - defaultValue
external:
  - defaultValue
props:
  hourCycle: 24
  defaultValue: [16, 30, 0]
---
::

### Kleur

Gebruik de `color` prop om de kleur van de InputTime te wijzigen.

::component-code
---
props:
  color: neutral
  highlight: true
---
::

::note
De `highlight` prop wordt hier gebruikt om de focusstatus weer te geven. Het wordt intern gebruikt wanneer er een validatiefout optreedt.
::

### Variant

Gebruik de `variant` prop om de variant van de InputTime te wijzigen.

::component-code
---
props:
  variant: subtle
---
::

### Grootte

Gebruik de `size` prop om de grootte van de InputTime te wijzigen.

::component-code
---
props:
  size: xl
---
::

### Icoon

Gebruik de `icon` prop om een [Icon](/docs/components/icon) in de InputTime weer te geven.

::component-code
---
props:
  icon: 'i-lucide-clock'
---
::

::note
Gebruik de `leading` en `trailing` rekwisieten om de pictogrampositie in te stellen of de `leading-icon` en `trailing-icon` rekwisieten om voor elke positie een ander pictogram in te stellen.
::

### Afscheider pictogram

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
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.minus`-toets.
:::
::

### Avatar [bewerken]

Gebruik de `avatar` prop om een [Avatar](/docs/components/avatar) in de InputTime weer te geven.

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

Gebruik de `disabled` prop om de InputTime uit te schakelen.

::component-code
---
props:
  disabled: true
---
::

## Voorbeelden

### Binnen een FormField

U kunt de InputTime binnen een [FormField](/docs/components/form-field) onderdeel gebruiken om een label, helptekst, vereiste indicator, enz. Weer te geven.

::component-example
---
name: 'input-time-form-field-example'
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

## Changelog

:component-changelog
