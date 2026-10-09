---
description: Trennt Inhalte horizontal oder vertikal.
category: element
keywords:
  - divider
  - hr
  - horizontal rule
links:
  - label: Separator
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Separator.vue
---

## Bearbeiten

Verwenden Sie die Separator-Komponente unverändert, um Inhalte zu trennen.

::component-code
---
class: 'p-8'
---
::

### Orientierung

Verwenden Sie die `orientation`-prop, um die Ausrichtung des Separators zu ändern. Standardmäßig auf `horizontal`.

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  orientation: vertical
  class: 'h-48'
---
::

### Label ist

Verwenden Sie die `label` prop, um ein Etikett in der Mitte des Separators anzuzeigen.

::component-code
---
class: 'p-8'
props:
  label: 'Hello World'
---
::

### Position: badge{label="4.8+" class="align-text-top"}

Verwenden Sie die `position`-prop, um die Position des Inhalts des Separators zu ändern.

::component-code
---
ignore:
  - class
class: 'p-8'
props:
  position: start
  label: 'Hello World'
---
::

### Icon (nicht)

Verwenden Sie die `icon` prop, um ein Symbol in der Mitte des Separators anzuzeigen.

::component-code
---
class: 'p-8'
props:
  icon: 'i-simple-icons-nuxtdotjs'
---
::

### Avatar (englisch)

Verwenden Sie die `avatar`-Prop, um einen Avatar in der Mitte des Separators anzuzeigen.

::component-code
---
prettier: true
class: 'p-8'
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
---
::

### Farbe

Verwenden Sie die `color`-prop, um die Farbe des Separators zu ändern. Standardmäßig ist `neutral`.

::component-code
---
class: 'p-8'
props:
  color: primary
  type: solid
---
::

### type ist ein

Verwenden Sie die `type`-prop, um den Typ des Separator. Defaults auf `solid` zu ändern.

::component-code
---
class: 'p-8'
props:
  type: dashed
---
::

### Size

Verwenden Sie die `size` prop, um die Größe des Separators zu ändern. Standardmäßig auf `xs`.

::component-code
---
class: 'p-8'
props:
  size: lg
---
::

## API (Englisch)

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
