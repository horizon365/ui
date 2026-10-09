---
title: Blogpost zu
description: 'Ein anpassbarer Artikel, der in einer Blog-Seite angezeigt werden soll.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPost.vue
---

## Bearbeiten

Die BlogPost-Komponente bietet eine flexible Möglichkeit, ein `<article>`-Element mit anpassbaren Inhalten wie Titel, Beschreibung, Bild usw. anzuzeigen.

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
Verwenden Sie die `BlogPosts`-Komponente, um mehrere Blog-Posts in einem responsiven Rasterlayout anzuzeigen.
::

### Titel

Verwenden Sie die `title`-Prop, um den Titel des BlogPosts anzuzeigen.

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

### Beschreibung

Verwenden Sie die `description` prop, um die Beschreibung des BlogPost anzuzeigen.

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

### Date (englisch)

Verwenden Sie die `date`-Prop, um das Datum des BlogPosts anzuzeigen.

::tip
Das Datum wird automatisch mit dem Format [current locale](/docs/getting-started/integrations/i18n/nuxt#locale) formatiert. Sie können entweder ein `Date`-Objekt oder eine Zeichenfolge übergeben.
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

### Abzeichen

Verwenden Sie die `badge`-Prop, um eine [Badge](/docs/components/badge) im BlogPost anzuzeigen.

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

Sie können jede Eigenschaft der Komponente [Badge](/docs/components/badge#props) übergeben, um sie anzupassen.

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

### Bild

Verwenden Sie die `image`-Prop, um ein Bild im BlogPost anzuzeigen.

::note
Wenn [`@nuxt/image`xph11xxph11xhttps://image.nuxt.com/get-started/installation) installiert ist, wird die `<NuxtImg>`-Komponente anstelle des nativen `img`-Tags verwendet.
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

### Authors (englisch)

Verwenden Sie die `authors`-prop, um eine Liste von [User](/docs/components/user) im BlogPost als Array von Objekten mit den folgenden Eigenschaften anzuzeigen:

- `name?: string`{lang="ts-type"} (nicht)
- `description?: string`{lang="ts-type"} (nicht)
- `avatar?: Omit<AvatarProps, 'size'>`{lang="ts-type"} (englisch)
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{lang="ts-type"} (englisch)
- `size?: UserProps['size']`{lang="ts-type"} (nicht)
- `orientation?: UserProps['orientation']`{lang="ts-type"} (englisch)

Sie können jede Eigenschaft der Komponente [Link](/docs/components/link#props) übergeben, z. B. `to`, `target` usw.

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

Wenn die `authors`-Prop mehr als ein Element enthält, wird die [AvatarGroup](/docs/components/avatar-group)-Komponente verwendet.

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

### Link ist

Sie können jede Eigenschaft der Komponente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) übergeben, z. B. `to`, `target`, `rel` usw.

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

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um den Stil des BlogPost zu ändern.

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
Das Styling wird unterschiedlich sein, ob Sie eine `to`-Stütze oder eine `image` zur Verfügung stellen.
::

### Orientierung.

Verwenden Sie die `orientation`-prop, um die BlogPost-Ausrichtung zu ändern. Standardmäßig auf `vertical`.

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

x306xAPI

### Props (nicht)

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
