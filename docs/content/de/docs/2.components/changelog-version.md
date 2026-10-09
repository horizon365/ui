---
title: Changelog Version Bearbeiten
description: 'Ein anpassbarer Artikel, der in einem Changelog angezeigt werden soll.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersion.vue
---

## Bearbeiten

Die ChangelogVersion-Komponente bietet eine flexible Möglichkeit, ein `<article>`-Element mit anpassbaren Inhalten wie Titel, Beschreibung, Bild usw. anzuzeigen.

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
Verwenden Sie die `ChangelogVersions`-Komponente, um mehrere Changelog-Versionen in einer Zeitleiste mit einer Indikatorleiste auf der linken Seite anzuzeigen.
::

### title

Verwenden Sie die `title`-Prop, um den Titel der ChangelogVersion anzuzeigen.

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

### Beschreibung

Verwenden Sie die `description`-Prop, um die Beschreibung der ChangelogVersion anzuzeigen.

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

### Date (nicht)

Verwenden Sie die `date`-Prop, um das Datum der ChangelogVersion anzuzeigen.

::tip
Das Datum wird automatisch in das Format [current locale](/docs/getting-started/integrations/i18n/nuxt#locale) formatiert. Sie können entweder ein `Date`-Objekt oder eine Zeichenfolge übergeben.
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

### Abzeichen

Verwenden Sie die `badge`-Prop, um eine [Badge](/docs/components/badge) auf der ChangelogVersion anzuzeigen.

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

Sie können jede Eigenschaft der Komponente [Badge](/docs/components/badge#props) übergeben, um sie anzupassen.

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

### Bild

Verwenden Sie die `image`-Prop, um ein Bild im BlogPost anzuzeigen.

::note
Wenn [`@nuxt/image`](https://image.nuxt.com/get-started/installation) installiert ist, wird die `<NuxtImg>`-Komponente anstelle des nativen `img`-Tags verwendet.
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

### Authors Bearbeiten

Verwenden Sie die `authors`-prop, um eine Liste von [User](/docs/components/user) in der ChangelogVersion als Array von Objekten mit den folgenden Eigenschaften anzuzeigen:

- `name?: string`{lang="ts-type"} (englisch)
- `description?: string`{lang="ts-type"} (englisch)
- `avatar?: Omit<AvatarProps, 'size'>`{lang="ts-type"} (nicht vorhanden)
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{lang="ts-type"} (englisch)
- `size?: UserProps['size']`{lang="ts-type"} (nicht)
- `orientation?: UserProps['orientation']`{lang="ts-type"} (nicht)

Sie können jede Eigenschaft der Komponente [Link](/docs/components/link#props) übergeben, z. B. `to`, `target` usw.

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

### Link ist

Sie können jede Eigenschaft der Komponente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) übergeben, z. B. `to`, `target`, `rel` usw.

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

### Indicator (Englisch)

Verwenden Sie die `indicator`-Stütze, um den Indikatorpunkt auf der linken Seite auszublenden. Standardmäßig ist `true`.

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
Wenn die `indicator`-Prop `false` ist, wird das Datum über dem Titel angezeigt.
::

## Beispiele

### Mit Body-Slot

Sie können den `body`-Steckplatz verwenden, um benutzerdefinierte Inhalte zwischen dem Bild und den Autoren anzuzeigen:

- the [Markdown](https://comark.dev/rendering/vue) component from `@comark/vue` to display some markdown. [Markdown](https://comark.dev/rendering/vue) component from `@comark/vue` to display some markdown. `@comark/vue`. [Markdownx](https://comark.dev/rendering/vue) component from `@comark/vue` to display some markdown.
-  die [ContentRenderer](https://content.nuxt.com/docs/components/content-renderer)-Komponente von `@nuxt/content`, um den Inhalt der Seite oder Liste darzustellen.
- or verwenden Sie die `:u-changelog-version`-Komponente direkt in Ihren Inhalten mit Markdown innerhalb des `body`-Steckplatzes, da Nuxt UI vorgefertigte Prosa-Komponenten bereitstellt.

::component-example
---
prettier: true
name: 'changelog-version-markdown-example'
collapse: true
---
::

## API Bearbeiten

### Props Bearbeiten

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
