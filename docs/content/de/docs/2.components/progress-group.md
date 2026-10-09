---
title: Fortschrittsgruppe
description: Ein Fortschrittsbalken, der in mehrere Segmente unterteilt ist, die sich zu einer Gesamtsumme addieren.
category: element
navigation.badge: New
keywords:
  - meter
  - meter group
  - segmented progress
  - stacked bar
  - breakdown
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ProgressGroup.vue
---

## Bearbeiten

Verwenden Sie die ProgressGroup-Komponente, um mehrere Werte als Segmente eines einzelnen Fortschrittsbalkens anzuzeigen.

::component-code
---
collapse: true
ignore:
  - items
  - max
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  max: 128
  items:
    - label: 'System'
      value: 24
      color: 'neutral'
      icon: 'i-lucide-cog'
    - label: 'Apps'
      value: 8
      color: 'error'
      icon: 'i-lucide-app-window'
    - label: 'Documents'
      value: 12
      color: 'warning'
      icon: 'i-lucide-file'
    - label: 'Multimedia'
      value: 42
      color: 'success'
      icon: 'i-lucide-film'
  class: 'w-96'
---
::

### Einträge

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `label?: string`{lang="ts-type"} (englisch)
- `icon?: string`{lang="ts-type"} (nicht vorhanden)
- `value?: number`{lang="ts-type"} (englisch)
04.04.2018 00:43:45 00:45:46 00:46:47:48
- `slot?: string`{lang="ts-type"} (englisch)
- `class?: any`{lang="ts-type"} (englisch)
- `ui?: { segment?: ClassNameValue, indicator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingDot?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  items:
    - label: 'Compute'
      value: 42
      color: 'primary'
    - label: 'Storage'
      value: 18
      color: 'info'
    - label: 'Bandwidth'
      value: 9
      color: 'warning'
  class: 'w-96'
---
::

::note
Elemente ohne einen `icon` erhalten stattdessen einen farbigen Punkt in der Liste.
::

### Max ist

Verwenden Sie die Prop `max`, um den Wert aller Elemente auf. Defaults auf `100` zu setzen.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  max: 512
  items:
    - label: 'Used'
      value: 128
      color: 'primary'
    - label: 'Reserved'
      value: 64
      color: 'neutral'
  class: 'w-96'
---
::

::note
Die Werte werden zwischen `0` und `max` eingespannt, und Segmente, die sich zu mehr als `max` addieren, teilen sich die Spur proportional.
::

### Status Bearbeiten

Verwenden Sie die `status`-Prop, um den summierten Wert über dem Balken anzuzeigen.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  status: true
  max: 128
  items:
    - label: 'System'
      value: 24
      color: 'neutral'
    - label: 'Apps'
      value: 8
      color: 'error'
    - label: 'Multimedia'
      value: 42
      color: 'success'
  class: 'w-96'
---
::

::tip
Der Status verfolgt das Ende der Leiste, verwenden Sie stattdessen `:ui="{ status: 'w-full' }"`, um die volle Breite zu überspannen.
::

### Color (englisch)

Verwenden Sie die `color`-prop, um die Farbe jedes Segments zu ändern, das keine eigene setzt.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  color: neutral
  items:
    - label: 'Read'
      value: 42
    - label: 'Write'
      value: 18
  class: 'w-96'
---
::

::tip
Sowohl diese Requisite als auch das `color` jedes Elements akzeptieren jeden CSS-Farbwert, was für Paletten außerhalb des Themas praktisch ist.
::

### Size ist

Verwenden Sie die `size`-Prop, um die Größe der ProgressGroup zu ändern.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  size: xl
  items:
    - label: 'Read'
      value: 42
      color: 'primary'
    - label: 'Write'
      value: 18
      color: 'info'
  class: 'w-96'
---
::

### Orientierung.

Verwenden Sie die `orientation` prop, um die Ausrichtung der ProgressGroup. Defaults auf `horizontal` zu ändern.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - ProgressGroupItem[]
props:
  orientation: vertical
  items:
    - label: 'Read'
      value: 42
      color: 'primary'
    - label: 'Write'
      value: 18
      color: 'info'
  class: 'h-48'
---
::

## Examples Bearbeiten

### With Status-Steckplatz

Verwenden Sie den `#status`-Slot, um den summierten Prozentsatz durch Ihren eigenen Inhalt zu ersetzen.

::component-example
---
collapse: true
name: progress-group-status-example
---
::

### With item-Steckplätze

Verwenden Sie die `#item-label` und `#item-trailing` Steckplätze zu ändern, was jeder Eintrag displays. Both empfangen die `item`, seine `index` und seine `percent`.

::component-example
---
collapse: true
name: progress-group-item-example
---
::

### With benutzerdefinierte Farben

Geben Sie jedem Element eine CSS-Farbe, um eine Gliederung außerhalb der Themenpalette zu erstellen.

::component-example
---
collapse: true
name: progress-group-custom-color-example
---
::

## API Bearbeiten

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
