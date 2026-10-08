---
title: Feldgruppe
description: Gruppieren Sie mehrere knopfähnliche Elemente zusammen.
category: element
keywords:
  - segmented control
  - toggle group
  - button group
  - input group
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FieldGroup.vue
---

@@@ph000@Verwendung

Wickeln Sie mehrere [Button](/docs/components/button) innerhalb einer Feldgruppe ein, um sie zusammenzufassen.

::component-code
---
Schöner: wahr
Die Slots:
  Default:|

    @@@@005
    @@@@006 @
---
: u-button {color="neutral" variant="subtle" label="Button"}
: u-button {color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

@@ph009 @ Größe

Verwenden Sie die `size` prop, um die Größe aller Tasten zu ändern.

::component-code
---
Schöner: wahr
Props:
  Größe: XL
Slots auf:
  Default:|

    @@11
    @@ph012
---
: u-button {color="neutral" variant="subtle" label="Button"}
: u-button {color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

@@ph015@@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung der Schaltflächen zu ändern. Standardmäßig `horizontal`.

::component-code
---
Schöner: wahr
Props:
  Ausrichtung: vertikal
Slots auf:
  Default:|

    @@ph018
    @@ph019
---
: u-button {color="neutral" variant="subtle" label="Submit"}
: u-button {color="neutral" variant="outline" label="Cancel"}
::

@@ph022@@@Beispiele

@@ph023@@Mit Eingabe

Sie können Komponenten wie [Input](/docs/components/input),[InputMenu](/docs/components/input-menu),[](/docs/components/select)[](PH03))))))))))))))))))))PH0339@

::component-code
---
Schöner: wahr
Die Slots:
  Default:|

    @@040

    @@041
---
: u-input {color="neutral" variant="outline" placeholder="Enter token"}
: u-button {color="neutral" variant="subtle" icon="i-lucide-clipboard"}
::

@@ph044@@mit tooltip

Sie können ein [Tooltip](/docs/components/tooltip) innerhalb einer Feldgruppe verwenden.

: component-example {name="field-group-tooltip-example"}

### Mit Dropdown-Menü

Sie können ein [DropdownMenu](/docs/components/dropdown-menu) innerhalb einer Feldgruppe verwenden.

: component-beispiel {name="field-group-dropdown-example"}

### Mit Abzeichen

Sie können ein [Badge](/docs/components/badge) innerhalb einer Feldgruppe verwenden.

: component-beispiel {name="field-group-badge-example"}

## api

### Props

Komponenten Props

### Slots

Die Komponenten-Slots

@@ph065@gmail.de

Das Komponenten-Theme

@@ph066@@changelog @@changelog

Das Component-Changelog
