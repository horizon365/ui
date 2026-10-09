---
title: El Avatargrupo
description: Apila varios avatares en un grupo.
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AvatarGroup.vue
---

xph0000xUso

Envuelva varios [Avatar](/docs/components/avatar) dentro de un AvatarGroup para apilarlos.

::component-code
---
prettier: true
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" />
---
:u-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
:u-avatar{src="https://github.com/HugoRCD.png" alt="Hugo Richard"}
:u-avatar{src="https://github.com/atinux.png" alt="Sébastien Chopin"}
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño de todos los avatares.

::component-code
---
prettier: true
props:
  size: xl
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
---
:u-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
:u-avatar{src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
:u-avatar{src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### Max (Español)

Utilice el prop `max` para limitar el número de avatares que se muestran. El resto se muestra como un avatar `+X`.

::component-code
---
prettier: true
props:
  max: 2
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
---
:u-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
:u-avatar{src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
:u-avatar{src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### Color: badge{label="4.8+" class="align-text-top"} (Edición española)

Utilice el prop `color` para cambiar el color de todos los avatares.

::component-code
---
prettier: true
props:
  color: primary
slots:
  default: |

    <UAvatar alt="Benjamin Canac" />
    <UAvatar alt="Hugo Richard" />
    <UAvatar alt="Sébastien Chopin" />
---
:u-avatar{alt="Benjamin Canac"}
:u-avatar{alt="Hugo Richard"}
:u-avatar{alt="Sébastien Chopin"}
::

## Ejemplos

### Con información

Envuelva cada avatar con un [Tooltip](/docs/components/tooltip) para mostrar una información sobre herramientas al flotar.

:component-example{name="avatar-group-tooltip-example"}

### Con el chip

Envuelve cada avatar con un [Chip](/docs/components/chip) para mostrar un chip alrededor del avatar.

:component-example{name="avatar-group-chip-example"}

### Con el enlace

Envuelve cada avatar con un [Link](/docs/components/link) para que se pueda hacer clic en ellos.

:component-example{name="avatar-group-link-example"}

### Con máscara

Envuelve un avatar con una máscara CSS para mostrarlo con una forma personalizada.

:component-example{name="avatar-group-mask-example"}

::warning
El accesorio `chip` no funciona correctamente cuando se utiliza una máscara. Las virutas pueden cortarse dependiendo de la forma de la máscara.
::

## API (Edición española)

### Accesorios

:component-props

### Slots (Edición española)

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
