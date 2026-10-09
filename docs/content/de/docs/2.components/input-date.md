---
title: Inputdaten
description: 'Eine Eingabekomponente zur Datumsauswahl.'
category: form
keywords:
  - date picker
  - datepicker
  - calendar input
links:
  - label: Datumsfeld
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/date-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputDate.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um das ausgewählte Datum zu steuern.

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

Verwenden Sie die `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

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
Diese Komponente verwendet das `@internationalized/date`-Paket für die lokalbezogene Formatierung. Das Datumsformat wird durch die `locale`-Prop der App-Komponente bestimmt.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Diese Komponente verwendet das `@internationalized/date`-Paket für die lokalbezogene Formatierung. Das Datumsformat wird durch die `locale`-Prop der App-Komponente bestimmt.
:::
::

### Range-Funktion

Verwenden Sie die `range`-prop, um einen Datumsbereich auszuwählen.

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

### Farbe

Verwenden Sie die `color`-prop, um die Farbe des Eingabedatums zu ändern.

::component-code
---
props:
  color: neutral
  highlight: true
---
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um die Variante des Eingabedatums zu ändern.

::component-code
---
props:
  variant: subtle
---
::

### Größe

Verwenden Sie die `size`-Prop, um die Größe des Eingabedatums zu ändern.

::component-code
---
props:
  size: xl
---
::

### Icon (Deutsche Ausgabe)

Verwenden Sie die `icon`-Prop, um ein [Icon](/docs/components/icon) innerhalb des InputDate anzuzeigen.

::component-code
---
props:
  icon: 'i-lucide-calendar'
---
::

::note
Verwenden Sie die `leading` und `trailing` props, um die Symbolposition festzulegen, oder die `leading-icon` und `trailing-icon` props, um für jede Position ein anderes Symbol festzulegen.
::

### Separator-Symbol

Verwenden Sie die `separator-icon`-prop, um die [Icon](/docs/components/icon) des Bereichsseparators zu ändern.

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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.minus` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.minus` Schlüssel anpassen.
:::
::

### Avatar (englisch)

Verwenden Sie die `avatar`-Prop, um eine [Avatar](/docs/components/avatar) innerhalb des Eingabedatums anzuzeigen.

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

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-prop, um das Eingabedatum zu deaktivieren.

::component-code
---
props:
  disabled: true
---
::

## Beispiele

### With unavailable dates (Datum nicht verfügbar)

Verwenden Sie die `is-date-unavailable`-Prop mit einer Funktion, um bestimmte Daten als nicht verfügbar zu markieren.

::component-example
---
name: 'input-date-unavailable-dates-example'
---
::

### Mit min/max Daten

Verwenden Sie die Props `min-value` und `max-value`, um die Datumsangaben zu begrenzen.

::component-example
---
name: 'input-date-min-max-dates-example'
---
::

### As eine Datumsauswahl

Verwenden Sie eine [Calendar](/docs/components/calendar) und eine [Popover](/docs/components/popover) Komponente, um eine Datumsauswahl zu erstellen.

::component-example
---
name: 'input-date-date-picker-example'
---
::

### Als Datumsbereich-Auswahl

Verwenden Sie eine Komponente [Calendar](/docs/components/calendar) und eine Komponente [Popover](/docs/components/popover), um eine Datumsbereich-Auswahl zu erstellen.

::component-example
---
name: 'input-date-date-range-picker-example'
---
::

## API Bearbeiten

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

## Theme (englisch)

:component-theme

## Changelog (englisch)

:component-changelog
