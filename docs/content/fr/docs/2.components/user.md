---
description: 'Afficher les informations de l'utilisateur avec le nom, la description et l'avatar.'
category: data
keywords:
  - profile
  - person
  - account
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/User.vue
---

## Utilisation

### Nom

Utilisez la prop `name` pour afficher un nom pour l'utilisateur.

::component-code
---
props:
  name: 'John Doe'
---
::

### Description

Utilisez le prop `description` pour afficher une description pour l'utilisateur.

::component-code
---
props:
  name: 'John Doe'
  description: 'Software Engineer'
---
::

### Avatars

Utilisez la prop `avatar` pour afficher un composant [Avatar](/docs/components/avatar).

::component-code
---
prettier: true
ignore:
  - name
  - description
props:
  name: 'John Doe'
  description: 'Software Engineer'
  avatar:
    src: 'https://i.pravatar.cc/150?u=john-doe'
    loading: lazy
    icon: i-lucide-image
---
::

::collapsible{name="all avatar properties"}

::component-props
---
name: Avatar
ignore:
  - size
  - as
---
::

::

### Chip équipé

Utilisez le prop `chip` pour afficher un composant [Chip](xph043).

::component-code
---
prettier: true
ignore:
  - name
  - description
  - avatar.src
items:
  chip.color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  chip.position:
    - top-left
    - top-right
    - bottom-left
    - bottom-right
props:
  name: 'John Doe'
  description: 'Software Engineer'
  avatar.src: 'https://i.pravatar.cc/150?u=john-doe'
  chip:
    color: 'primary'
    position: top-right
---
::

::collapsible{name="all chip properties"}

::component-props
---
name: Chip
ignore:
  - as
  - size
  - standalone
---
::

::

### taille

Utilisez le prop `size` pour modifier la taille de l'avatar de l'utilisateur et du texte.

::component-code
---
prettier: true
ignore:
  - name
  - description
  - avatar.src
  - chip
props:
  name: 'John Doe'
  description: 'Software Engineer'
  avatar.src: 'https://i.pravatar.cc/150?u=john-doe'
  chip: true
  size: xl
---
::

### Définition

Utilisez la prop `orientation` pour modifier l'orientation. Par défaut à `horizontal`.

::component-code
---
prettier: true
ignore:
  - avatar.src
props:
  orientation: 'vertical'
  name: 'John Doe'
  description: 'Software Engineer'
  avatar.src: 'https://i.pravatar.cc/150?u=john-doe'
---
::

### Link équipé

Vous pouvez passer n'importe quelle propriété du composant [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) telle que `to`, `target`, `rel`, etc.

::component-code
---
prettier: true
ignore:
  - name
  - description
  - avatar.src
  - target
props:
  to: 'https://github.com/benjamincanac'
  target: '_blank'
  name: 'Benjamin Canac'
  description: 'Software Engineer'
  avatar.src: 'https://github.com/benjamincanac.png'
---
::

::note
Le composant `NuxtLink` héritera de tous les autres attributs que vous passez au composant `User`.
::

## API

### Props équipement

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog écrit

:component-changelog
