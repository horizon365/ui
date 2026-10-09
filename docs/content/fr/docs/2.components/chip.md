---
description: Un indicateur d'une valeur numérique ou d'un état.
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Chip.vue
---

## Utilisation

Enveloppez tout composant avec une puce pour afficher un indicateur.

::component-code
---
prettier: true
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Couleur

Utilisez le prop `color` pour changer la couleur de la puce.

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

### taille

Utilisez le prop `size` pour changer la taille de la puce.

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

### Texte écrit

Utilisez le prop `text` pour définir le texte de la puce.

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

### Position

Utilisez le prop `position` pour changer la position de la puce.

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

### Inset

Utilisez le prop `inset` pour afficher la puce à l'intérieur du composant. Ceci est utile lorsque vous traitez avec des composants arrondis.

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

### Séparé

Utilisez le prop `standalone` à côté du prop `inset` pour afficher la puce en ligne.

::component-code
---
props:
  standalone: true
  inset: true
---
::

::note
Il est utilisé de cette façon dans les composants [x`CommandPalette`](/docs/components/command-palette), [`InputMenu`](/docs/components/input-menu), [`Select`](xph086) ou xph0888x`SelectMenu`x](/docs/components/select-menux) par exemple.
::

## Exemples

### Control visibilité

Vous pouvez contrôler la visibilité de la puce en utilisant le prop `show`.

:component-example{name="chip-show-example"}

::note
Dans cet exemple, la puce a une couleur par état et est affichée lorsque l'état n'est pas `offline`.
::

## api

### Props équipement

:component-props

### Slots

:component-slots

### Emis

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog
