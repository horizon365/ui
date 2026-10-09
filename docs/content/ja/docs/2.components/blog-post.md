---
title: ブログ投稿
description: 'ブログページに表示するカスタマイズ可能な記事。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPost.vue
---

## 使用法

BlogPostコンポーネントは、タイトル、説明、画像などのカスタマイズ可能なコンテンツを含む`<article>`要素を柔軟に表示する方法を提供します。

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
`BlogPosts`コンポーネントを使用して、複数のブログ投稿をレスポンシブグリッドレイアウトで表示します。
::

### Title

`title`プロパティを使用してBlogPostのタイトルを表示します。

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

BlogPostの説明を表示するには`description`プロパティを使用します。

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

BlogPostの日付を表示するには、`date`プロパティを使用します。

::tip
日付は自動的に[current locale](/docs/getting-started/integrations/i18n/nuxt#locale)にフォーマットされます。`Date`オブジェクトまたは文字列を渡すことができます。
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

### バッジ

`badge`プロパティを使用して、BlogPostに[Badge](/docs/components/badge)を表示します。

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

[Badge](/docs/components/badge#props)コンポーネントの任意のプロパティを渡してカスタマイズできます。

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

### Image

BlogPostに画像を表示するには、`image`プロパティを使用します。

::note
[`@nuxt/image`](https://image.nuxt.com/get-started/installation)がインストールされている場合、ネイティブの`img`タグの代わりに`<NuxtImg>`コンポーネントが使用されます。
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

### Authors

`authors`プロパティを使用して、BlogPostに[User](/docs/components/user)のリストを次のプロパティを持つオブジェクトの配列として表示します。

- `name?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `avatar?: Omit<AvatarProps, 'size'>`{lang="ts-type"}
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{lang="ts-type"}
- `size?: UserProps['size']`{lang="ts-type"}
- `orientation?: UserProps['orientation']`{lang="ts-type"}

[Link](/docs/components/link#props)コンポーネントから、`to`、`target`などの任意のプロパティを渡すことができます。

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

`authors`プロパティが複数のアイテムを持つ場合、[AvatarGroup](/docs/components/avatar-group)コンポーネントが使用されます。

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

`to`、`target`、`rel`など、[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネントから任意のプロパティを渡すことができます。

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

`variant`プロパティを使用してBlogPostのスタイルを変更します。

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
`to`プロップまたは`image`を提供することで、スタイリングは異なります。
::

### Orientation

BlogPostの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`vertical`です。

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

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
