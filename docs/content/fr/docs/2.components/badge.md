---
description: Un texte court pour représenter un statut ou une catégorie.
category: element
keywords:
  - tag
  - pill
  - label
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Badge.vue
---

## Utilisation

Utilisez l'emplacement par défaut pour définir l'étiquette du badge.

::component-code
---
slots:
  default: Badge
---
::

### étiquette

Utilisez le prop `label` pour définir l'étiquette du badge.

::component-code
---
props:
  label: Badge
---
::

### couleur

Utilisez le prop `color` pour changer la couleur du badge.

::component-code
---
props:
  color: neutral
slots:
  default: Badge
---
::

### Variant

Utilisez les accessoires `variant` pour changer la variante du badge.

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Badge
---
::

### taille

Utilisez le prop `size` pour changer la taille du badge.

::component-code
---
props:
  size: xl
slots:
  default: Badge
---
::

### Icône

Utilisez la prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur du badge.

::component-code
---
props:
  icon: i-lucide-rocket
  size: md
  color: primary
  variant: solid
slots:
  default: Badge
---
::

Utilisez les accessoires `leading` et `trailing` pour définir la position de l'icône ou les accessoires `leading-icon` et `trailing-icon` pour définir une icône différente pour chaque position.

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Badge
---
::

### Avatars

Utilisez la prop `avatar` pour afficher un [Avatar](xph066) à l'intérieur du badge.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
slots:
  default: |

    Badge
---
::

## exemples

### x`class` prop

Utilisez le prop `class` pour remplacer les styles de base du badge.

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Badge
---
::

## api

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
