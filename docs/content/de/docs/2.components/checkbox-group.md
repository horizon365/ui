---
title: Die CheckboxGroup
description: Eine Reihe von Kontrollkästchen zum Auswählen mehrerer Optionen aus einer Liste.
category: form
keywords:
  - multi select
  - checklist
links:
  - label: Die Checkbox-Gruppe
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox#group-root
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CheckboxGroup.vue
---


## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert der CheckboxGroup zu steuern, oder die `default-value`-Prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

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
  modelValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Einträge

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
  modelValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

- `label?: string`{lang="ts-type"} (nicht vorhanden)
- `description?: string`{lang="ts-type"} (englisch)
04.04.2018 00:43:45 00:45:46 00:46:47:48
- `disabled?: boolean`{lang="ts-type"} (englisch)
05.05.2019 00:55:55 00:55:55 00:55:55:55 00:55:55:55:55
- `class?: any`{lang="ts-type"} (englisch)
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

::component-code
---
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - CheckboxGroupItem[]
props:
  modelValue:
    - 'system'
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

### Value Key (englisch)

Sie können die Eigenschaft ändern, die zum Festlegen des Werts verwendet wird, indem Sie die Prop `value-key` verwenden.

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
  - CheckboxGroupItem[]
props:
  modelValue:
    - 'light'
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

Verwenden Sie die `legend` prop, um die Legende der CheckboxGroup zu setzen.

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
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Color (englisch)

Verwenden Sie die `color`-Prop, um die Farbe der CheckboxGroup zu ändern.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  color: neutral
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um die Variante der CheckboxGroup zu ändern.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
externalTypes:
  - CheckboxGroupItem[]
items:
  color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  variant:
    - list
    - card
    - table
props:
  color: 'primary'
  variant: 'card'
  defaultValue:
    - 'system'
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

Verwenden Sie die `size`-prop, um die Größe der CheckboxGroup zu ändern.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
items:
  variant:
    - list
    - card
    - table
props:
  size: 'xl'
  variant: 'list'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Orientierung

Verwenden Sie die `orientation`-prop, um die Ausrichtung der CheckboxGroup. Defaults auf `vertical` zu ändern.

::component-code
---
prettier: true
ignore:
  - defaultValue
  - items
external:
  - items
items:
  variant:
    - list
    - card
    - table
props:
  orientation: 'horizontal'
  variant: 'list'
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

### Indicator (englisch)

Verwenden Sie die `indicator`-Stütze, um die Position zu ändern oder den Indikator auszublenden. Standardmäßig ist `start`.

::note
Das `icon` eines Elements ersetzt das Häkchen, solange die Anzeige sichtbar ist, und wird über dem Etikett angezeigt, wenn es `hidden` ist.
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
  - CheckboxGroupItem[]
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
  defaultValue:
    - 'System'
  items:
    - label: 'System'
      icon: 'i-lucide-monitor'
      value: 'System'
      class: 'w-20'
    - label: 'Light'
      icon: 'i-lucide-sun'
      class: 'w-20'
      value: 'Light'
    - label: 'Dark'
      icon: 'i-lucide-moon'
      class: 'w-20'
      value: 'Dark'
---
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um die CheckboxGroup zu deaktivieren.

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
  defaultValue:
    - 'System'
  items:
    - 'System'
    - 'Light'
    - 'Dark'
---
::

## API

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits Bearbeiten

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
