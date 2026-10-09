---
title: Die Radiogruppe
description: Eine Reihe von Radiobuttons, um eine einzelne Option aus einer Liste auszuwählen.
category: form
keywords:
  - radio buttons
  - single choice
links:
  - label: Radiogruppe
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/radio-group
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/RadioGroup.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert der RadioGroup zu steuern, oder die `default-value`-prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
props:
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Strings oder Zahlen:

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
props:
  modelValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

- `label?: string`{lang="ts-type"} (nicht vorhanden)
- `description?: string`{lang="ts-type"} (nicht vorhanden)
04.04.2018 00:43:44:45 00:46:46:46
- `disabled?: boolean`{lang="ts-type"} (nicht vorhanden)
05.05.2017 00:55 - 05.05.2018 00:55:55 00:55:56
- `class?: any`{lang="ts-type"} (nicht vorhanden)
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, icon?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

::component-code
---
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - RadioGroupItem[]
props:
  modelValue: 'system'
  items:
    - label: 'System'
      description: 'Matches your device settings.'
      value: 'system'
    - label: 'Light'
      description: 'Always uses the light theme.'
      value: 'light'
    - label: 'Dark'
      description: 'Always uses the dark theme.'
      value: 'dark'
---
::

::caution
Wenn Sie Objekte verwenden, müssen Sie auf die `value`-Eigenschaft des Objekts in der `v-model`-Direktive oder der `default-value`-Prop verweisen.
::

### value Schlüssel

Sie können die Eigenschaft ändern, die zum Festlegen des Werts verwendet wird, indem Sie die `value-key`-Prop verwenden.

::component-code
---
ignore:
  - modelValue
  - items
  - valueKey
external:
  - items
  - modelValue
externalTypes:
  - RadioGroupItem[]
props:
  modelValue: 'light'
  valueKey: 'id'
  items:
    - label: 'System'
      description: 'Matches your device settings.'
      id: 'system'
    - label: 'Light'
      description: 'Always uses the light theme.'
      id: 'light'
    - label: 'Dark'
      description: 'Always uses the dark theme.'
      id: 'dark'
---
::

### Legend Bearbeiten

Verwenden Sie die `legend` prop, um die Legende der RadioGroup zu setzen.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  legend: 'Theme'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Color Bearbeiten

Verwenden Sie die `color`-Prop, um die Farbe der RadioGroup zu ändern.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  color: neutral
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Variant Bearbeiten

Verwenden Sie die `variant`-Prop, um die Variante der RadioGroup zu ändern.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
props:
  color: 'primary'
  variant: 'card'
  defaultValue: 'system'
  items:
    - label: 'System'
      value: 'system'
      description: 'Matches your device settings.'
    - label: 'Light'
      value: 'light'
      description: 'Always uses the light theme.'
    - label: 'Dark'
      value: 'dark'
      description: 'Always uses the dark theme.'
---
::

### Size

Verwenden Sie die `size`-Prop, um die Größe der RadioGroup zu ändern.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  size: 'xl'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Orientierung

Verwenden Sie die `orientation`-prop, um die Ausrichtung der RadioGroup. Defaults auf `vertical` zu ändern.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  orientation: 'horizontal'
  variant: 'list'
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Indicator (Englisch)

Verwenden Sie die `indicator`-Stütze, um die Position zu ändern oder den Indikator auszublenden. Standardmäßig `start`.

::note
Der `icon` eines Elements wird nur angezeigt, wenn `indicator` `hidden` ist, über dem Etikett, da ein Radio kein Symbol in seinem Indikator hat.
::

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - RadioGroupItem[]
items:
  indicator:
    - start
    - end
    - hidden
  variant:
    - list
    - card
    - table
props:
  indicator: 'hidden'
  orientation: 'horizontal'
  variant: 'table'
  defaultValue: 'System'
  items:
    - label: 'System'
      icon: 'i-lucide-monitor'
      value: 'System'
      class: 'w-20'
    - label: 'Light'
      icon: 'i-lucide-sun'
      value: 'Light'
      class: 'w-20'
    - label: 'Dark'
      icon: 'i-lucide-moon'
      value: 'Dark'
      class: 'w-20'
---
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um die RadioGroup zu deaktivieren.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
props:
  disabled: true
  defaultValue: 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

## API

### Props (englisch)

:component-props

### Slots (englisch)

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
