---
description: Ein Indikator für einen numerischen Wert oder einen Zustand.
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Chip.vue
---

@@@ph000@Verwendung

Wickeln Sie ein beliebiges Bauteil mit einem Chip ein, um eine Anzeige anzuzeigen.

::component-code
---
Schöner: wahr
Slots auf:
  Default:|

    @@001
---
: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@@003@Farbe

Verwenden Sie die `color` prop, um die Farbe des Chips zu ändern.

::component-code
---
Schöner: wahr
Props:
  Farbe: neutral
Die Slots:
  Default:|

    @@@@005
---
: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@@007@00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Verwenden Sie die `size` prop, um die Größe des Chips zu ändern.

::component-code
---
Schöner: wahr
Props:
  Größe: 3xl
Slots auf:
  Default:|

    @@009 @
---
: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@@ph011@@text

Verwenden Sie `text` prop, um den Text des Chips festzulegen.

::component-code
---
Schöner: wahr
Props:
  Text: 5
  Größe: 3xl
Slots auf:
  Default:|

    @@ph013 @
---
: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@@ph015@@Einwurf

Verwenden Sie die `position` prop, um die Position des Chips zu ändern.

::component-code
---
Schöner: wahr
Props:
  Position: „ links unten "
Die Slots:
  Default:|

    @@ph017
---
: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@@ph019@inset

Verwenden Sie die `inset` prop, um den Chip innerhalb der Komponente anzuzeigen.

::component-code
---
Schöner: wahr
Props:
  Einschub: true
Die Slots:
  Default:|

    @@ph021 @
---
: u-avatar {src="https://github.com/benjamincanac.png" loading="lazy"}
::

### Standalone@@@Standalone### Standalone

Verwenden Sie `standalone` prop neben dem `inset` prop, um den Chip inline anzuzeigen.

::component-code
---
Props:
  Standalone: echt
  Einschub: true
---
::

::note
Es wird auf diese Weise in der [`CommandPalette`](/docs/components/command-palette),[`InputMenu`](/docs/components/input-menu),[`Select`](/docs/components/select) oder [](/docs/components/select-menu) Komponenten zum Beispiel.
::

## Beispiele

### Kontrollsichtbarkeit

Sie können die Sichtbarkeit des Chips mit der `show` prop steuern.

: component-beispiel {name="chip-show-example"}

::note
In diesem Beispiel hat der Chip eine Farbe pro Status und wird angezeigt, wenn der Status nicht `offline` ist.
::

@@@@@@@511@@@bpb

@@ph052@@@props

Komponenten-Props

@@ph053@gmail.de

Die Komponenten-Slots

@@ph054@@emits

Komponenten emittieren

@@@@@@@555@@@@@@555@55@@@555@@@@55@@@@555@@@@55@@@@@@55@@@@@@@@@@@@@Themes

Das Komponenten-Theme

@@ph056@@changelog @@changelog

Das Component-Changelog
