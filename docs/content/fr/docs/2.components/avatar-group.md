---
title: avatargroupe
description: Plusieurs avatars dans un groupe.
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AvatarGroup.vue
---

## Utilisation

Enveloppez plusieurs [Avatar](/docs/components/avatar) dans un AvatarGroup pour les empiler.

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

### taille

Utilisez le prop `size` pour modifier la taille de tous les avatars.

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

### max

Utilisez la prop `max` pour limiter le nombre d'avatars affichés. Le reste est affiché comme un avatar `+X`.

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

Couleur: badge{label="4.8+" class="align-text-top"}

Utilisez le prop `color` pour changer la couleur de tous les avatars.

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

## exemples

### Avec tooltip

Enveloppez chaque avatar avec un [Tooltip](/docs/components/tooltip) pour afficher une infobulle en survol.

:component-example{name="avatar-group-tooltip-example"}

### Avec chip

Enveloppez chaque avatar avec un [Chip](/docs/components/chip) pour afficher une puce autour de l'avatar.

:component-example{name="avatar-group-chip-example"}

### Avec le lien

Envelopper chaque avatar avec un [Link](/docs/components/link) pour les rendre cliquables.

:component-example{name="avatar-group-link-example"}

### avec masque

Enveloppez un avatar avec un masque CSS pour l'afficher avec une forme personnalisée.

:component-example{name="avatar-group-mask-example"}

::warning
Le prop `chip` ne fonctionne pas correctement lors de l'utilisation d'un masque. Des copeaux peuvent être coupés en fonction de la forme du masque.
::

## api

### Projets

:component-props

### Slots électroniques

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
