---
title: BlogPost
description: '一个可定制的文章显示在博客页面。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPost.vue
---

## 用法

BlogPost组件提供了一种灵活的方式来显示`<article>`元素，该元素具有可定制的内容，包括标题、描述、图像等。

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
使用`BlogPosts`组件在响应式网格布局中显示多篇博客文章。
::

### 标题

使用`title` prop显示BlogPost的标题。

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

### 说明

使用`description` prop显示BlogPost的描述。

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

### 日期

使用`date`属性显示BlogPost的日期。

::tip
日期自动格式化为[当前locale](/docs/getting-started/integrations/i18n/nuxt#locale)。您可以传递`Date`对象或字符串。
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

### 徽章

使用`badge` prop在BlogPost中显示[Badge](/docs/components/badge)。

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

您可以从[Badge](/docs/components/badge#props)组件传递任何属性来对其进行自定义。

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

### 图片

使用`image` prop在BlogPost中显示图像。

::note
如果安装了[`@nuxt/image`](https://image.nuxt.com/get-started/installation)，则将使用`<NuxtImg>`组件而不是本机`img`标记。
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

### 作者

使用`authors` prop在BlogPost中显示[User](/docs/components/user)的列表，作为具有以下属性的对象数组：

- `name?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `avatar?: Omit<AvatarProps, 'size'>`{lang="ts-type"}
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{lang="ts-type"}
- `size?: UserProps['size']`{lang="ts-type"}
- `orientation?: UserProps['orientation']`{lang="ts-type"}

您可以从[Link](/docs/components/link#props)组件传递任何属性，如`to`、`target`等。

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

当`authors`道具有多个项目时，将使用[AvatarGroup](/docs/components/avatar-group)组件。

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

您可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)组件传递任何属性，如`to`、`target`、`rel`等。

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

使用`variant` prop更改BlogPost的样式。

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
风格将是不同的，无论你提供一个`to`道具或`image`。
::

### 方向

使用`orientation`属性将BlogPost的方向. png更改为`vertical`。

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

## Theme

:component-theme

## Changelog

:component-changelog
