---
description: Een kalendercomponent voor het selecteren van enkele datums, meerdere datums of datumbereiken.
category: element
keywords:
  - date picker
  - datepicker
  - schedule
links:
  - label: Kalender
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/calendar
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Calendar.vue
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

### Type: badge{label="4.9+" class="align-text-top"}

Gebruik de `type`-prop om te wijzigen wat de kalender selecteert. Standaard `date`.

Wanneer u `date` gebruikt, klikt u op de kop om over te schakelen van de dagweergave naar een maand en vervolgens naar een jaarweergave voor snelle navigatie en gaat u vervolgens weer naar beneden om een datum te kiezen.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: month
  modelValue: [2022, 2, 1]
---
::

Gebruik `type="year"` om een zelfstandige jaarkiezer weer te geven.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: year
  modelValue: [2022, 1, 1]
---
::

### Meerdere

Gebruik de `multiple` prop om meerdere selecties toe te staan.

::component-code
---
prettier: true
cast:
  modelValue: DateValue[]
ignore:
  - multiple
  - modelValue
external:
  - modelValue
props:
  multiple: true
  modelValue: [[2022, 2, 4], [2022, 2, 6], [2022, 2, 8]]
---
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

De `range` prop werkt ook met `type="month"` en `type="year"`, zodat je een bereik van maanden of jaren kunt selecteren.

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - type
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  type: month
  range: true
  modelValue:
    start: [2022, 2, 1]
    end: [2022, 6, 1]
---
::

### Aantal maanden

Gebruik de `numberOfMonths` prop om het aantal maanden in de kalender te wijzigen.

::component-code
---
props:
  numberOfMonths: 3
---
::

### Maand Besturing

Gebruik de `month-controls`-prop om de maandbesturingselementen weer te geven. Standaard `true`.

::component-code
---
props:
  monthControls: false
---
::

Gebruik de `prev-month` en `next-month` props om de maand knoppen te overschrijven.

::component-code
---
prettier: true
ignore:
  - prevMonth.color
  - prevMonth.variant
  - nextMonth.color
  - nextMonth.variant
props:
  prevMonth:
    color: primary
    variant: soft
  nextMonth:
    color: primary
    variant: soft
---
::

### Year-besturingselementen

Gebruik de `year-controls` prop om de jaarbesturingselementen weer te geven. Standaard `true`.

::component-code
---
props:
  yearControls: false
---
::

Gebruik de `prev-year` en `next-year` rekwisieten om de jaarknoppen te overschrijven.

::component-code
---
prettier: true
ignore:
  - prevYear.color
  - prevYear.variant
  - nextYear.color
  - nextYear.variant
props:
  prevYear:
    color: primary
    variant: soft
  nextYear:
    color: primary
    variant: soft
---
::

### Beeldcontrole: badge{label="4.9+" class="align-text-top"}

Gebruik de `view-control` prop om van de kop een knop te maken die schakelt tussen de dag-, maand- en jaarweergaven. Standaard `true`.

::component-code
---
items:
  viewControl:
    - true
    - false
props:
  viewControl: false
---
::

Stel de `view-control` prop in op een object om de kopknop te overschrijven.

::component-code
---
prettier: true
ignore:
  - viewControl.color
  - viewControl.variant
props:
  viewControl:
    color: primary
    variant: soft
---
::

### Vaste weken

Gebruik de `fixed-weeks` prop om de kalender met vaste weken weer te geven.

::component-code
---
props:
  fixedWeeks: false
---
::

### Weeknummers: badge{label="4.4+" class="align-text-top"}

Gebruik de `week-numbers` prop om weeknummers in de kalender weer te geven.

::component-code
---
props:
  weekNumbers: true
  fixedWeeks: true
---
::

### Kleur

Gebruik de `color` prop om de kleur van de kalender te wijzigen.

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  color: neutral
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Variant

Gebruik de `variant` prop om de variant van de kalender te wijzigen.

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  variant: subtle
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Grootte

Gebruik de `size` prop om de grootte van de kalender te wijzigen.

::component-code
---
props:
  size: xl
---
::

### Uitgeschakeld

Gebruik de `disabled` prop om de kalender uit te schakelen.

::component-code
---
props:
  disabled: true
---
::

## Voorbeelden

### Met chip gebeurtenissen

Gebruik de [Chip](/docs/components/chip) om evenementen aan specifieke dagen toe te voegen.

::component-example
---
name: 'calendar-events-example'
---
::

### Met data uitgeschakeld

Gebruik de `is-date-disabled` prop met een functie om specifieke datums als uitgeschakeld te markeren. Gebruik bij gebruik van `type="month"` of `type="year"` in plaats daarvan de `is-month-disabled` of `is-year-disabled` prop.

::component-example
---
name: 'calendar-disabled-dates-example'
---
::

### Met niet beschikbare data

Gebruik de `is-date-unavailable` prop met een functie om specifieke datums als niet beschikbaar te markeren. Gebruik bij gebruik van `type="month"` of `type="year"` in plaats daarvan de `is-month-unavailable` of `is-year-unavailable` prop.

::component-example
---
name: 'calendar-unavailable-dates-example'
---
::

### Met min / max datums

Gebruik de `min-value` en `max-value` rekwisieten om de datums te beperken.

::component-example
---
name: 'calendar-min-max-dates-example'
---
::

### Met andere kalendersystemen

U kunt andere kalenders van `@internationalized/date` gebruiken om een ander kalendersysteem te implementeren.

::component-example
---
name: 'calendar-other-system-example'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
U kunt alle beschikbare agenda 's bekijken op `@internationalized/date` docs.
::

### Met externe bedieningselementen

U kunt de kalender bedienen met externe bedieningselementen door de datum te manipuleren die is doorgegeven in de `v-model`.

::component-example
---
name: 'calendar-external-controls-example'
---
::

### Met de datum van vandaag

Gebruik de `today` functie van `@internationalized/date` met `getLocalTimeZone` om de waarde op de huidige datum in te stellen.

::component-example
---
name: 'calendar-today-example'
---
::

### Als datumkiezer

Gebruik een [Button](/docs/components/button) en een [Popover](/docs/components/popover) om een datumkiezer te maken.

::component-example
---
name: 'calendar-date-picker-example'
---
::

### Als een datumbereikkiezer

Gebruik een [Button](/docs/components/button) en een [Popover](/docs/components/popover) om een datumbereikkiezer met vooraf ingestelde bereiken te maken.

::component-example
---
name: 'calendar-date-range-picker-example'
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
