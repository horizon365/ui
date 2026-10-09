---
description: Eine Liste von Schaltflächen oder Links zum Navigieren durch Seiten.
category: navigation
keywords:
  - pager
  - page navigation
links:
  - label: Paginierung
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pagination
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Pagination.vue
---

## Bearbeiten

Verwenden Sie die `default-page` prop oder die `v-model:page` Direktive, um die aktuelle Seite zu steuern.

::component-code
---
external:
  - page
model:
  - page
ignore:
  - page
  - total
props:
  page: 5
  total: 100
---
::

::note
Die Pagination-Komponente verwendet einige [`Button`](/docs/components/button), um die Seiten anzuzeigen, verwenden Sie [`color`](#color), [`variant`](#variant) und [`size`](](), um sie zu stylen.
::

### Total Bearbeiten

Verwenden Sie die `total`-prop, um die Gesamtzahl der Elemente in der Liste festzulegen.

::component-code
---
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
---
::

### Elemente pro Seite

Verwenden Sie die `items-per-page`-prop, um die Anzahl der Elemente pro Seite festzulegen. Standardmäßig ist `10`.

::component-code
---
ignore:
  - page
external:
  - page
model:
  - page
props:
  page: 5
  itemsPerPage: 20
  total: 100
---
::

### Sibling Count (englisch)

Verwenden Sie die `sibling-count`-prop, um die Anzahl der Geschwister zu zeigen. Standardmäßig auf `2`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  siblingCount: 1
  total: 100
---
::

### Show Kanten

Verwenden Sie die `show-edges`-prop, um immer die Auslassungspunkte, die erste und die letzte Seite anzuzeigen.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showEdges: true
  siblingCount: 1
  total: 100
---
::

### Show Steuerung

Verwenden Sie die `show-controls`-prop, um die ersten, prev, next und last Tasten anzuzeigen. Standardmäßig ist `true`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  showControls: false
  showEdges: true
  total: 100
---
::

### Color (englisch)

Verwenden Sie die `color`-prop, um die Farbe der inaktiven Steuerelemente einzustellen. Standardmäßig ist `neutral`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
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
  page: 5
  color: primary
  total: 100
---
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um die Variante der inaktiven Steuerelemente festzulegen. Standardmäßig `outline`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
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
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  color: neutral
  variant: subtle
  total: 100
---
::

### Active Color (englisch)

Verwenden Sie die `active-color`-Prop, um die Farbe des aktiven Steuerelements einzustellen. Standardmäßig ist `primary`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
props:
  page: 5
  activeColor: neutral
  total: 100
---
::

### Active Variante Bearbeiten

Verwenden Sie die `active-variant`-prop, um die Variante der aktiven Steuerung einzustellen. Standardmäßig ist `solid`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  page: 5
  activeColor: primary
  activeVariant: subtle
  total: 100
---
::

### Size

Verwenden Sie die `size`-prop, um die Größe der Steuerelemente einzustellen. Standardmäßig ist `md`.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  page: 5
  size: xl
  total: 100
---
::

### Disabled (englisch)

Verwenden Sie die `disabled`-Prop, um die Paginierungskontrollen zu deaktivieren.

::component-code
---
ignore:
  - page
  - total
external:
  - page
model:
  - page
props:
  page: 5
  total: 100
  disabled: true
---
::

## Examples [Bearbeiten]

### mit Links

Verwenden Sie die prop `to`, um Schaltflächen in Links zu verwandeln. Übergeben Sie eine Funktion, die die Seitenzahl empfängt und ein Routenziel zurückgibt.

::component-example
---
name: 'pagination-links-example'
---
::

::note
In diesem Beispiel fügen wir den `#with-links`-Hash hinzu, um zu vermeiden, dass der Anfang der Seite angezeigt wird.
::

## API ist

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
