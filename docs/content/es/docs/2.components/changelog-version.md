---
title: Changelogversión
description: 'Un artículo personalizable para mostrar en un changelog.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersion.vue
---

xph0000xUso

El componente ChangelogVersion proporciona una forma flexible de mostrar un elemento `<article>` con contenido personalizable que incluye título, descripción, imagen, etc.

::code-preview

::u-changelog-version
---
title: 'Introducing Nuxt UI v3'
description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
date: 2025-03-12
authors:
  - name: Benjamin Canac
    description: '@benjamincanac'
    avatar:
      src: https://github.com/benjamincanac.png
      loading: lazy
    to: https://x.com/benjamincanac
    target: _blank
  - name: Sebastien Chopin
    description: '@atinux'
    avatar:
      src: https://github.com/atinux.png
      loading: lazy
    to: https://x.com/atinux
    target: _blank
  - name: Hugo Richard
    description: '@hugorcd'
    avatar:
      src: https://github.com/hugorcd.png
      loading: lazy
    to: https://x.com/hugorcd
    target: _blank
to: 'https://nuxt.com/blog/nuxt-ui-v3'
target: '_blank'
class: 'w-full'
ui.container: 'max-w-lg'
---
::

::

::tip{to="/docs/components/changelog-versions"}
Utilice el componente `ChangelogVersions` para mostrar varias versiones del registro de cambios en una línea de tiempo con una barra indicadora a la izquierda.
::

### Nombre

Utilice el prop `title` para mostrar el título de la versión de cambio.

::component-code
---
hide:
  - class
  - ui
  - ui.container
props:
  title: 'Introducing Nuxt UI v3'
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

xph07xDescripción

Utilice el prop `description` para mostrar la descripción de la versión del registro de cambios.

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Fecha

Utilice el prop `date` para mostrar la fecha de la versión del registro de cambios.

::tip
La fecha se formatea automáticamente con el locale](/docs/getting-started/integrations/i18n/nuxt#locale). Puede pasar un objeto `Date` o una cadena.
::

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
  - description
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Badge (Edición española)

Utilice el prop `badge` para mostrar un [Badge](/docs/components/badge) en el ChangelogVersion.

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
  - description
  - date
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  badge: 'Release'
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

Puede pasar cualquier propiedad del componente [Badge](/docs/components/badge#props) para personalizarlo.

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
  - description
  - date
  - badge.label
  - badge.color
  - badge.variant
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  badge:
    label: 'Release'
    color: primary
    variant: outline
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Imágenes

Utilice el prop `image` para mostrar una imagen en el BlogPost.

::note
Si [`@nuxt/image`](https://image.nuxt.com/get-started/installation) está instalado, se utilizará el componente `<NuxtImg>` en lugar de la etiqueta nativa `img`.
::

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
  - description
  - date
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Artículos

Utilice la prop `authors` para mostrar una lista de [User](/docs/components/user) en el Changelog Version como una matriz de objetos con las siguientes propiedades:

- x`name?: string`x{lang="ts-type"} (Edición española)
- x`description?: string`x{lang="ts-type"} (Edición española)
- x`avatar?: Omit<AvatarProps, 'size'>`xx{lang="ts-type"}
- x`chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`x{lang="ts-type"} (Edición española)
- x`size?: UserProps['size']`x{lang="ts-type"}
- x`orientation?: UserProps['orientation']`xx{lang="ts-type"}

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`, `target`, etc.

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
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
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  authors:
    - name: Benjamin Canac
      description: '@benjamincanac'
      avatar:
        src: https://github.com/benjamincanac.png
        loading: lazy
      to: https://x.com/benjamincanac
      target: _blank
    - name: Sebastien Chopin
      description: '@atinux'
      avatar:
        src: https://github.com/atinux.png
        loading: lazy
      to: https://x.com/atinux
      target: _blank
    - name: Hugo Richard
      description: '@hugorcd'
      avatar:
        src: https://github.com/hugorcd.png
        loading: lazy
      to: https://x.com/hugorcd
      target: _blank
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Enlace

Puede pasar cualquier propiedad del componente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) como `to`, `target`, `rel`, etc.

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
  - description
  - date
  - image
  - target
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  to: 'https://nuxt.com/blog/nuxt-ui-v3'
  target: _blank
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

### Indicador

Utilice el prop `indicator` para ocultar el punto indicador de la izquierda.

::component-code
---
prettier: true
hide:
  - class
  - ui
  - ui.container
ignore:
  - title
  - description
  - date
  - image
props:
  title: 'Introducing Nuxt UI v3'
  description: 'Nuxt UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, Tailwind CSS support, and full Vue compatibility.'
  date: 2025-03-12
  image: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  indicator: false
  class: 'w-full'
  ui.container: 'max-w-lg'
---
::

::note
Cuando el prop `indicator` es `false`, la fecha se mostrará sobre el título.
::

##  Ejemplos

### Con ranura para el cuerpo

Puede utilizar la ranura `body` para mostrar contenido personalizado entre la imagen y los autores con:

-  El componente [Markdown](https://comark.dev/rendering/vue) de `@comark/vue` para mostrar algunos descuentos.
-  El componente [ContentRenderer](https://content.nuxt.com/docs/components/content-renderer) de `@nuxt/content` para renderizar el contenido de la página o lista.
-  o utilice el componente `:u-changelog-version` directamente en su contenido con una reducción de precios dentro de la ranura `body`, ya que la interfaz de usuario de Nuxt proporciona componentes de prosa prediseñados.

::component-example
---
prettier: true
name: 'changelog-version-markdown-example'
collapse: true
---
::

## API (Edición española)

### Props (Edición española)

:component-props

### Slots en línea

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
