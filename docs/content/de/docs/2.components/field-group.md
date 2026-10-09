---
title: Fieldgroup Bearbeiten
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

## Bearbeiten

Wickeln Sie mehrere [Button](/docs/components/button) in eine FieldGroup, um sie zu gruppieren.

::component-code
---
prettier: true
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="Der Button"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Größe

Verwenden Sie die `size`-Prop, um die Größe aller Tasten zu ändern.

::component-code
---
prettier: true
props:
  size: xl
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="Der Button"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Ausrichtung

Verwenden Sie die `orientation`-prop, um die Ausrichtung der Tasten zu ändern. Standardmäßig `horizontal`.

::component-code
---
prettier: true
props:
  orientation: vertical
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Submit" />
    <UButton color="neutral" variant="outline" label="Cancel" />
---
:u-button{color="neutral" variant="subtle" label="submit"}
:u-button{color="neutral" variant="outline" label="Annullierung"}
::

## Examples (Beispiele)

### Mit Input

Sie können Komponenten wie [Input](/docs/components/input), [InputMenu](/docs/components/input-menu), [Select](/docs/components/select) [SelectMenu](/docs/components/select-menu) usw. in einer Feldgruppe verwenden.

::component-code
---
prettier: true
slots:
  default: |

    <UInput color="neutral" variant="outline" placeholder="Enter token" />

    <UButton color="neutral" variant="subtle" icon="i-lucide-clipboard" />
---
:u-input{color="neutral" variant="outline" placeholder="Enter token"}
:u-button{color="neutral" variant="subtle" icon="i-lucide-clipboard"}
::

### With Tooltip Übersetzung

Sie können einen [Tooltip](/docs/components/tooltip) innerhalb einer Feldgruppe verwenden.

:component-example{name="field-group-tooltip-example"}

### Mit dem Dropdown-Menü

Sie können ein [DropdownMenu](/docs/components/dropdown-menu) in einer Feldgruppe verwenden.

:component-example{name="field-group-dropdown-example"}

### Mit Badge

Sie können einen [Badge](/docs/components/badge) innerhalb einer Feldgruppe verwenden.

:component-example{name="field-group-badge-example"}

## API (englisch)

### Props (nicht)

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog Übersetzung

:component-changelog
