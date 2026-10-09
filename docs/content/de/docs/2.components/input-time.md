---
title: Inputzeit
description: 'Ein Input zur Auswahl einer Zeit.'
category: form
keywords:
  - time picker
  - clock
  - hour
links:
  - label: Timefield Bearbeiten
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-field
  - label: Zeitfeld
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-range-field
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTime.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um die ausgewählte Zeit zu steuern.

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

Verwenden Sie die `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

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
Diese Komponente verwendet das `@internationalized/date`-Paket für die lokalbezogene Formatierung. Das Zeitformat wird durch die `locale`-Prop der App-Komponente bestimmt.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
Diese Komponente verwendet das `@internationalized/date`-Paket für die lokalbezogene Formatierung. Das Zeitformat wird durch die `locale`-Prop der App-Komponente bestimmt.
:::
::

### Range-Funktion

Verwenden Sie die `range`-Prop, um die Zeitbereichsauswahl mit Start-und Endzeit zu aktivieren.

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

### Hour Zyklus

Verwenden Sie die `hour-cycle`-prop, um den Stundenzyklus der InputTime. Defaults auf `12` zu ändern.

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

### color-

Verwenden Sie die `color`-prop, um die Farbe der Eingabezeit zu ändern.

::component-code
---
props:
  color: neutral
  highlight: true
---
::

::note
Die `highlight`-prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

### Variant Übersetzung

Verwenden Sie die `variant` prop, um die Variante der InputTime zu ändern.

::component-code
---
props:
  variant: subtle
---
::

### Größe

Verwenden Sie die `size` prop, um die Größe der InputTime zu ändern.

::component-code
---
props:
  size: xl
---
::

### Icon (nicht)

Verwenden Sie die `icon`-Prop, um eine [Icon](/docs/components/icon) innerhalb der InputTime anzuzeigen.

::component-code
---
props:
  icon: 'i-lucide-clock'
---
::

::note
Verwenden Sie die `leading`-und `trailing`-Requisiten, um die Symbolposition festzulegen, oder die `leading-icon`-und `trailing-icon`-Requisiten, um für jede Position ein anderes Symbol festzulegen.
::

### Separator-Icon (englisch)

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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.minus`-Taste.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter der `ui.icons.minus`-Taste.
:::
::

### Avatar (englisch)

Verwenden Sie die `avatar`-Prop, um ein [Avatar](/docs/components/avatar) innerhalb der InputTime anzuzeigen.

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

Verwenden Sie die `disabled` prop, um die InputTime zu deaktivieren.

::component-code
---
props:
  disabled: true
---
::

## Examples [Bearbeiten]

### Innerhalb eines Formularfelds

Sie können die InputTime innerhalb einer [FormField](/docs/components/form-field)-Komponente verwenden, um eine Beschriftung, einen Hilfetext, eine erforderliche Anzeige usw. anzuzeigen.

::component-example
---
name: 'input-time-form-field-example'
---
::

## API (Englisch)

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
