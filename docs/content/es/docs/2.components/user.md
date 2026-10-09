---
description: 'Mostrar información del usuario con nombre, descripción y avatar.'
category: data
keywords:
  - profile
  - person
  - account
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/User.vue
---

xph0000xUso

### Nombre

Utilice el prop `name` para mostrar un nombre para el usuario.

::component-code
---
props:
  name: 'John Doe'
---
::

### Descripción

Utilice el prop `description` para mostrar una descripción para el usuario.

::component-code
---
props:
  name: 'John Doe'
  description: 'Software Engineer'
---
::

### Avatar en Español

Utilice el prop `avatar` para mostrar un componente [Avatar](/docs/components/avatar).

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

### Chip (Edición española)

Utilice el prop `chip` para mostrar un componente [Chip](/docs/components/chip).

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

### Tamaño

Utilice el prop `size` para cambiar el tamaño del avatar del usuario y el texto.

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

### Orientación

Utilice el prop `orientation` para cambiar la orientación. Predeterminados a `horizontal`.

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

### Link (Edición española)

Puede pasar cualquier propiedad del componente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) como `to`, `target`, `rel`, etc.

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
El componente `NuxtLink` heredará todos los demás atributos que pase al componente `User`.
::

## API (Edición española)

### Props (accesorios)

:component-props

### Slots en línea

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
