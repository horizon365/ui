---
title: El blogpost
description: 'Un artículo personalizable para mostrar en una página de blog.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPost.vue
---

xph0000xUso

El componente BlogPost proporciona una forma flexible de mostrar un elemento `<article>` con contenido personalizable que incluye título, descripción, imagen, etc.

::code-preview

::u-blog-post
---
title: 'Introducing Nuxt Icon v1'
description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
date: 2024-11-25
authors:
  - name: Anthony Fu
    description: antfu7
    avatar:
      src: https://github.com/antfu.png
      loading: lazy
    to: https://github.com/antfu
    target: _blank
to: 'https://nuxt.com/blog/nuxt-icon-v1-0'
target: '_blank'
class: 'w-96'
---
::

::

::tip{to="/docs/components/blog-posts"}
Utilice el componente `BlogPosts` para mostrar varias entradas de blog en un diseño de cuadrícula sensible.
::

### Nombre

Utilice el prop `title` para mostrar el título de la entrada de blog.

::component-code
---
prettier: true
hide:
  - class
props:
  title: 'Introducing Nuxt Icon v1'
  class: 'w-96'
---
::

### Descripción

Utilice el prop `description` para mostrar la descripción de la entrada de blog.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
props:
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  class: 'w-96'
---
::

### Fecha

Utilice el prop `date` para mostrar la fecha de la entrada de blog.

::tip
La fecha se formatea automáticamente con el locale](/docs/getting-started/integrations/i18n/nuxt#locale). Puede pasar un objeto `Date` o una cadena.
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  date: 2024-11-25
  class: 'w-96'
---
::

### Badge (Edición española)

Utilice el prop `badge` para mostrar un [Badge](/docs/components/badge) en el BlogPost.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  badge: 'Release'
  class: 'w-96'
---
::

Puede pasar cualquier propiedad del componente [Badge](/docs/components/badge#props) para personalizarlo.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - badge.label
  - badge.color
  - badge.variant
props:
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  badge:
    label: 'Release'
    color: primary
    variant: solid
  class: 'w-96'
---
::

### imagen

Utilice el prop `image` para mostrar una imagen en el BlogPost.

::note
Si está instalado [`@nuxt/image`xph11xhttps://image.nuxt.com/get-started/installation), se utilizará el componente `<NuxtImg>` en lugar de la etiqueta nativa `img`.
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - date
props:
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  date: 2024-11-25
  class: 'w-96'
---
::

### Artículos

Utilice la prop `authors` para mostrar una lista de [User](xph133) en el BlogPost como una matriz de objetos con las siguientes propiedades:

- x`name?: string`x{lang="ts-type"}
- x`description?: string`x{lang="ts-type"} (Edición española)
- x`avatar?: Omit<AvatarProps, 'size'>`x{lang="ts-type"} (Edición española)
- x`chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`x{lang="ts-type"}
- x`size?: UserProps['size']`x{lang="ts-type"} (Edición española)
- x`orientation?: UserProps['orientation']`x{lang="ts-type"} (Edición española)

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`, `target`, etc.

::component-code
---
prettier: true
hide:
  - class
external:
  - authors
externalTypes:
  - UserProps[]
ignore:
  - title
  - description
  - date
  - image
  - authors
props:
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  date: 2024-11-25
  authors:
    - name: Anthony Fu
      description: antfu7
      avatar:
        src: https://github.com/antfu.png
        loading: lazy
      to: https://github.com/antfu
      target: _blank
  class: 'w-96'
---
::

Cuando el prop `authors` tiene más de un elemento, se utiliza el componente [AvatarGroup](/docs/components/avatar-group).

::component-code
---
prettier: true
hide:
  - class
external:
  - authors
externalTypes:
  - UserProps[]
ignore:
  - title
  - description
  - date
  - image
  - authors
props:
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  date: 2024-11-25
  authors:
    - name: Anthony Fu
      description: antfu7
      avatar:
        src: https://github.com/antfu.png
        loading: lazy
      to: https://github.com/antfu
      target: _blank
    - name: Benjamin Canac
      description: benjamincanac
      avatar:
        src: https://github.com/benjamincanac.png
        loading: lazy
      to: https://github.com/benjamincanac
      target: _blank
  class: 'w-96'
---
::

### Enlace

Puede pasar cualquier propiedad del componente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) como `to`, `target`, `rel`, etc.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - date
  - image
  - target
props:
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  date: 2024-11-25
  to: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  target: _blank
  class: 'w-96'
---
::

### Variante

Utilice el soporte `variant` para cambiar el estilo del BlogPost.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - date
  - image
  - to
  - target
props:
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  date: 2024-11-25
  to: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  target: _blank
  variant: naked
  class: 'w-96'
---
::

::note
El estilo será diferente si proporciona un accesorio `to` o un `image`.
::

### Orientación

Utilice el prop `orientation` para cambiar la orientación de BlogPost. Predeterminados a `vertical`.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - date
  - image
  - to
  - target
props:
  title: 'Introducing Nuxt Icon v1'
  description: 'Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.'
  image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  date: 2024-11-25
  to: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  target: _blank
  orientation: horizontal
  variant: outline
---
::

## API (Edición española)

### Props (accesorios)

:component-props

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
