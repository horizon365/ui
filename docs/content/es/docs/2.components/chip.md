---
description: Indicador de un valor numérico o de un estado.
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Chip.vue
---

xph0000xUso

Envuelva cualquier componente con un chip para mostrar un indicador.

::component-code
---
prettier: true
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Color (Edición española)

Utilice el accesorio `color` para cambiar el color del chip.

::component-code
---
prettier: true
props:
  color: neutral
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del chip.

::component-code
---
prettier: true
props:
  size: 3xl
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Text (Edición española)

Utilice el prop `text` para establecer el texto del chip.

::component-code
---
prettier: true
props:
  text: 5
  size: 3xl
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Ubicación

Utilice el prop `position` para cambiar la posición del chip.

::component-code
---
prettier: true
props:
  position: 'bottom-left'
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Inset (Edición española)

Utilice el soporte `inset` para mostrar el chip dentro del componente. Esto es útil cuando se trata de componentes redondeados.

::component-code
---
prettier: true
props:
  inset: true
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" loading="lazy" />
---
:u-avatar{src="https://github.com/benjamincanac.png" loading="lazy"}
::

### Autonomía

Utilice el soporte `standalone` junto al soporte `inset` para mostrar el chip en línea.

::component-code
---
props:
  standalone: true
  inset: true
---
::

::note
Se utiliza de esta manera en los componentes [x`CommandPalette`](/docs/components/command-palette), [`InputMenu`](/docs/components/input-menu), [`Select`](/docs/components/select) o xph0888x`SelectMenu`](/docs/components/select-menu), por ejemplo.
::

## Ejemplos

### Control visibilidad

Puede controlar la visibilidad del chip utilizando el accesorio `show`.

:component-example{name="chip-show-example"}

::note
En este ejemplo, el chip tiene un color por estado y se muestra cuando el estado no es `offline`.
::

## API (Edición española)

### Accesorios

:component-props

### Slots (Edición española)

:component-slots

### Emisiones

:component-emits

## Theme (Edición española)

:component-theme

## Changelog (Edición española)

:component-changelog
