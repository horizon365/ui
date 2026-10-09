---
description: Eine Reihe von Schritten, die verwendet werden, um den Fortschritt in einem mehrstufigen Prozess anzuzeigen.
category: navigation
keywords:
  - wizard
links:
  - label: Stepper sein
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/stepper
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Stepper.vue
---

## Bearbeiten

Verwenden Sie die Stepper-Komponente, um eine Liste der Elemente in einem Stepper anzuzeigen.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `title?: string`{lang="ts-type"} (nicht)
- `description?: AvatarProps`{lang="ts-type"} (nicht vorhanden)
- `content?: string`{lang="ts-type"} (nicht vorhanden)
- `icon?: string`{lang="ts-type"} (nicht vorhanden)
- `value?: string | number`{lang="ts-type"} (nicht vorhanden)
- `disabled?: boolean`{lang="ts-type"} (englisch)
- [`slot?: string`{lang="ts-type"}](#with-custom-slot) )
- `class?: any`{lang="ts-type"} (nicht vorhanden)
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

::note
Klicken Sie auf die Elemente, um durch die Schritte zu navigieren.
::

### Farbe

Verwenden Sie die `color`-Stütze, um die Farbe des Steppers zu ändern.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  color: neutral
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

x101xSize

Verwenden Sie die `size`-Prop, um die Größe des Steppers zu ändern.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  size: xl
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Orientation Übersetzung

Verwenden Sie die `orientation`-prop, um die Ausrichtung des Stepper. Defaults auf `horizontal` zu ändern.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  orientation: vertical
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
  class: 'w-full'
---
::

### Disabled (englisch)

Verwenden Sie die `disabled`-Prop, um die Navigation durch die Schritte zu deaktivieren.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - StepperItem[]
props:
  disabled: true
  items:
    - title: 'Address'
      description: 'Add your address here'
      icon: 'i-lucide-house'
    - title: 'Shipping'
      description: 'Set your preferred shipping method'
      icon: 'i-lucide-truck'
    - title: 'Checkout'
      description: 'Confirm your order'
---
::

::note{to="#with-controls"}
Dies kann nützlich sein, wenn Sie die Navigation mit Steuerelementen erzwingen möchten.
::

## Examples [Bearbeiten]

### With Steuerung

Sie können zusätzliche Steuerelemente für den Stepper mithilfe von Tasten hinzufügen.

:component-example{name="stepper-with-controls-example"}

### Control Aktiver Eintrag

Sie können das aktive Element steuern, indem Sie die `default-value` prop oder die `v-model` Direktive mit dem `value` des Elements verwenden.

:component-example{name="stepper-model-value-example"}

::tip
Verwenden Sie die `value-key`-Prop, um den Schlüssel zu ändern, der für die Übereinstimmung mit Elementen verwendet wird, wenn ein `v-model` oder `default-value` bereitgestellt wird.
::

### With Inhalts-Slot

Verwenden Sie den `#content`-Slot, um den Inhalt jedes Elements anzupassen.

:component-example{name="stepper-content-slot-example"}

### Mit benutzerdefiniertem Slot

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

- `#{{ item.slot }}`{lang="ts-type"} (englisch)

:component-example{name="stepper-custom-slot-example"}

## API Bearbeiten

### Props (englisch)

:component-props

### Slots (englisch)

:component-slots

### Emits (nicht)

:component-emits

### Expose (englisch)

Sie können auf die typisierte Komponenteninstanz mit [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) zugreifen.

```vue
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <UStepper ref="stepper" />
</template>
```

Dies gibt Ihnen Zugang zu den folgenden:

| Vorname| Typen|
| ---- | ---- |
| `next`{lang="ts-type"} Bearbeiten| `() => void`{lang="ts-type"} nicht|
| `prev`{lang="ts-type"} Bearbeiten| `() => void`{lang="ts-type"} nicht|
| `hasNext`{lang="ts-type"} (nicht)| `Ref<boolean>`{lang="ts-type"} (nicht)|
| `hasPrev`{lang="ts-type"} (nicht)| `Ref<boolean>`{lang="ts-type"}|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
