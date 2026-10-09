---
description: Ein kurzer Text, der einen Status oder eine Kategorie darstellt.
category: element
keywords:
  - tag
  - pill
  - label
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Badge.vue
---

## Bearbeiten

Verwenden Sie den Standardslot, um das Etikett des Badges festzulegen.

::component-code
---
slots:
  default: Badge
---
::

### Label

Verwenden Sie die `label`-Prop, um das Etikett des Badges festzulegen.

::component-code
---
props:
  label: Badge
---
::

### Farbe

Verwenden Sie die `color` prop, um die Farbe des Badge zu ändern.

::component-code
---
props:
  color: neutral
slots:
  default: Badge
---
::

### Variant Bearbeiten

Verwenden Sie die `variant`-Requisiten, um die Variante des Badges zu ändern.

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Badge
---
::

### Größe

Verwenden Sie die `size`-Stütze, um die Größe des Badges zu ändern.

::component-code
---
props:
  size: xl
slots:
  default: Badge
---
::

### Icon (nicht)

Verwenden Sie die `icon`-Prop, um ein [Icon](/docs/components/icon) im Badge anzuzeigen.

::component-code
---
props:
  icon: i-lucide-rocket
  size: md
  color: primary
  variant: solid
slots:
  default: Badge
---
::

Verwenden Sie die `leading` und `trailing` props, um die Symbolposition festzulegen, oder die `leading-icon` und `trailing-icon` props, um für jede Position ein anderes Symbol festzulegen.

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Badge
---
::

### Avatar (englisch)

Verwenden Sie die `avatar`-Prop, um ein [Avatar](/docs/components/avatar) im Inneren des Badge anzuzeigen.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
slots:
  default: |

    Badge
---
::

## Beispiele

### `class` prop (englisch)

Verwenden Sie die `class`-Prop, um die Basisstile des Badges zu überschreiben.

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Badge
---
::

## API (Englisch)

### Props Bearbeiten

:component-props

### Slots (englisch)

:component-slots

## Theme (englisch)

:component-theme

## Changelog (englisch)

:component-changelog
