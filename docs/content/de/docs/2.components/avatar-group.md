---
title: Die AvatarGroup
description: Mehrere Avatare in einer Gruppe.
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AvatarGroup.vue
---

## Bearbeiten

Wickeln Sie mehrere [Avatar](/docs/components/avatar) in eine AvatarGroup ein, um sie zu stapeln.

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

### Größe

Verwenden Sie die `size`-prop, um die Größe aller Avatare zu ändern.

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

### Max ist

Verwenden Sie die `max`-Prop, um die Anzahl der angezeigten Avatare zu begrenzen.

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

### Farbe: badgexx042x

Verwenden Sie die `color`-prop, um die Farbe aller Avatare zu ändern.

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

## Examples [Bearbeiten]

### With Tooltip Übersetzung

Wickeln Sie jeden Avatar mit einem [Tooltip](/docs/components/tooltip) ein, um einen Tooltip beim Hover anzuzeigen.

:component-example{name="avatar-group-tooltip-example"}

### With Chip (englisch)

Wickeln Sie jeden Avatar mit einem [Chip](/docs/components/chip) ein, um einen Chip um den Avatar herum anzuzeigen.

:component-example{name="avatar-group-chip-example"}

### mit Link

Wickeln Sie jeden Avatar mit einem [Link](/docs/components/link), um sie anklickbar zu machen.

:component-example{name="avatar-group-link-example"}

### With Maske

Wickeln Sie einen Avatar mit einer CSS-Maske, um ihn mit einer benutzerdefinierten Form anzuzeigen.

:component-example{name="avatar-group-mask-example"}

::warning
Die `chip` prop funktioniert nicht richtig, wenn Sie eine Maske verwenden. Chips können je nach Maskenform geschnitten werden.
::

## API (englisch)

### Props (englisch)

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
