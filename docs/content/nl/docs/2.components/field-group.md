---
title: VeldGroep
description: Groepeer meerdere knopachtige elementen bij elkaar.
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

## Gebruik

Wikkel meerdere [Button](/docs/components/button) binnen een FieldGroup om ze te groeperen.

::component-code
---
prettier: true
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="Knop"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Grootte

Gebruik de `size` prop om de grootte van alle knoppen te wijzigen.

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
:u-button{color="neutral" variant="subtle" label="Knop"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van de knoppen te wijzigen. Standaard `horizontal`.

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
:u-button{color="neutral" variant="subtle" label="Inzenden"}
:u-button{color="neutral" variant="outline" label="Annuleren"}
::

## Voorbeelden

### Met invoer

U kunt componenten zoals [Input](/docs/components/input), [InputMenu](/docs/components/input-menu), [Select](/docs/components/select) [SelectMenu](/docs/components/select-menu), etc. gebruiken binnen een veldgroep.

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

### Met tooltip

Je kunt een [Tooltip](/docs/components/tooltip) gebruiken binnen een veldgroep.

:component-example{name="field-group-tooltip-example"}

### Met dropdown menu

Je kunt een [DropdownMenu](/docs/components/dropdown-menu) gebruiken binnen een veldgroep.

:component-example{name="field-group-dropdown-example"}

### Met badge

Je kunt een [Badge](/docs/components/badge) gebruiken binnen een veldgroep.

:component-example{name="field-group-badge-example"}

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
