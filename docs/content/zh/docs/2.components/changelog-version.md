---
title: ChangelogVersion
description: '一个可定制的文章显示在一个更新日志。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersion.vue
---

## 用法

ChangelogVersion组件提供了一种灵活的方式来显示`<article>`元素，该元素具有可定制的内容，包括标题、描述、图像等。

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
使用`ChangelogVersions`组件可以在时间轴中显示多个版本的更新日志，并在左侧显示一个指示条。
::

### 标题

使用`title`属性显示ChangelogVersion的标题。

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

### 说明

使用`description`属性显示ChangelogVersion的描述。

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

### Date

使用`date`属性显示ChangelogVersion的日期。

::tip
日期自动格式化为[当前locale](/docs/getting-started/integrations/i18n/nuxt#locale)。您可以传递`Date`对象或字符串。
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

### 徽章

使用`badge`道具在ChangelogVersion上显示[Badge](/docs/components/badge)。

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

您可以从[Badge](/docs/components/badge#props)组件传递任何属性来对其进行自定义。

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

### 作者

使用`authors`属性在ChangelogVersion中显示[User](/docs/components/user)的列表，作为具有以下属性的对象数组：

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

### Link

您可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)组件传递任何属性，如`to`、`target`、`rel`等。

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

### 指示灯

使用`indicator`属性隐藏左侧的指示点。将其转换为`true`。

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
当`indicator`属性为`false`时，日期将显示在标题上方。
::

## 示例

### 带机身插槽

您可以使用`body`插槽来显示图像和作者之间的自定义内容：

-  [Markdown](https://comark.dev/rendering/vue)组件从`@comark/vue`显示一些标记。
- 从`@nuxt/content`调用[ContentRenderer](https://content.nuxt.com/docs/components/content-renderer)组件来呈现页面或列表的内容。
- 或直接在您的内容中使用`:u-changelog-version`组件，并在`body`插槽中使用markdown，因为Nuxt UI提供了预样式的散文组件。

::component-example
---
prettier: true
name: 'changelog-version-markdown-example'
collapse: true
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
