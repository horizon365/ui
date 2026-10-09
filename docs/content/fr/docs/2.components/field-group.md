---
title: Groupe FieldGroup
description: Groupe plusieurs éléments de type bouton.
category: element
keywords:
  - segmented control
  - toggle group
  - button group
  - input group
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FieldGroup.vue
---

## Utilisation

Enveloppez plusieurs [Button](/docs/components/button) dans un groupe de champs pour les regrouper.

::component-code
---
prettier: true
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="bouton"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### taille

Utilisez le prop `size` pour modifier la taille de tous les boutons.

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
:u-button{color="neutral" variant="subtle" label="bouton"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Définition

Utilisez la prop `orientation` pour changer l'orientation des boutons. Par défaut, `horizontal`.

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
:u-button{color="neutral" variant="subtle" label="soumis"}
:u-button{color="neutral" variant="outline" label="Annuler"}
::

## Exemples

### Avec entrée

Vous pouvez utiliser des composants tels que [Input](/docs/components/input), [InputMenu](xph050), [Select](xph054) [SelectMenu](xph058), etc. au sein d'un groupe de champs.

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

### Avec tooltip

Vous pouvez utiliser un [Tooltip](/docs/components/tooltip) dans un groupe de champs.

:component-example{name="field-group-tooltip-example"}

### With menu déroulant

Vous pouvez utiliser un [DropdownMenu](xph077) dans un groupe de champs.

:component-example{name="field-group-dropdown-example"}

### Avec badge

Vous pouvez utiliser un [Badge](/docs/components/badge) dans un groupe de champs.

:component-example{name="field-group-badge-example"}

## api

### Props

:component-props

### Slots

:component-slots

## thème

:component-theme

## Changelog

:component-changelog
