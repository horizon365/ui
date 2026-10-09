---
title: El FieldGroup
description: Agrupa varios elementos tipo botón juntos.
category: element
keywords:
  - segmented control
  - toggle group
  - button group
  - input group
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FieldGroup.vue
---

xph0000xUso

Envuelva varios [Button](/docs/components/button) dentro de un FieldGroup para agruparlos juntos.

::component-code
---
prettier: true
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="botón"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Tamaño

Utilice el accesorio `size` para cambiar el tamaño de todos los botones.

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
:u-button{color="neutral" variant="subtle" label="Botón"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación de los botones. Predeterminados a `horizontal`.

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
:u-button{color="neutral" variant="subtle" label="Supuesto"}
:u-button{color="neutral" variant="outline" label="Cancelación"}
::

## ejemplos

### Con entrada

Puede usar componentes como [Input](/docs/components/input), [InputMenu](/docs/components/input-menu), [Select](ph054) [SelectMenu](xph058), etc. dentro de un grupo de campos.

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

### Con herramienta

Puede usar un [Tooltip](/docs/components/tooltip) dentro de un grupo de campos.

:component-example{name="field-group-tooltip-example"}

### Con menú desplegable

Puede usar un [DropdownMenu](/docs/components/dropdown-menu) dentro de un grupo de campos.

:component-example{name="field-group-dropdown-example"}

### Con insignia

Puede usar un [Badge](/docs/components/badge) dentro de un grupo de campos.

:component-example{name="field-group-badge-example"}

## API

### Accesorios

:component-props

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
