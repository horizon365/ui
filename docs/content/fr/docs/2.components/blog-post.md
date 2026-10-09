---
title: Le blogpost
description: 'Un article personnalisable à afficher dans une page de blog.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPost.vue
---

## Utilisation

Le composant BlogPost fournit un moyen flexible d'afficher un élément `<article>` avec un contenu personnalisable, y compris le titre, la description, l'image, etc.

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
Utilisez le composant `BlogPosts` pour afficher plusieurs articles de blog dans une mise en page de grille réactive.
::

### Titre

Utilisez le prop `title` pour afficher le titre de l'article.

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

### Description

Utilisez le prop `description` pour afficher la description du BlogPost.

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

### Date

Utilisez la prop `date` pour afficher la date du BlogPost.

::tip
La date est automatiquement formatée avec la valeur [current locale](/docs/getting-started/integrations/i18n/nuxt#locale). Vous pouvez passer un objet `Date` ou une chaîne.
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

### badge référence

Utilisez la prop `badge` pour afficher un [Badge](/docs/components/badge) dans le BlogPost.

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

Vous pouvez passer n'importe quelle propriété du composant [Badge](/docs/components/badge#props) pour le personnaliser.

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

### image

Utilisez le prop `image` pour afficher une image dans le BlogPost.

::note
Si [`@nuxt/image`xph11xhttps://image.nuxt.com/get-started/installation) est installé, le composant `<NuxtImg>` sera utilisé à la place de la balise native `img`.
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

### Auteurs

Utilisez la prop `authors` pour afficher une liste de [User](xph133) dans le BlogPost sous la forme d'un tableau d'objets avec les propriétés suivantes:

- x`name?: string`x{lang="ts-type"}
- x`description?: string`x{lang="ts-type"}
- x`avatar?: Omit<AvatarProps, 'size'>`x{lang="ts-type"}
- x`chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`x{lang="ts-type"}
- x`size?: UserProps['size']`x{lang="ts-type"}
- x`orientation?: UserProps['orientation']`x{lang="ts-type"}

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) telle que `to`, `target`, etc.

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

Lorsque la prop `authors` a plus d'un élément, le composant [AvatarGroup](/docs/components/avatar-group) est utilisé.

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

### Link

Vous pouvez passer n'importe quelle propriété du composant [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) telle que `to`, `target`, `rel`, etc.

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

### Variant

Utilisez le prop `variant` pour modifier le style du BlogPost.

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
Le style sera différent si vous fournissez un accessoire `to` ou un `image`.
::

### Orientation

Utilisez la prop `orientation` pour changer l'orientation de BlogPost. Par défaut à `vertical`.

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

## API

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog écrit

:component-changelog
