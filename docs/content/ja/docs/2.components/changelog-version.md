---
title: ChangelogVersion
description: '変更履歴に表示するカスタマイズ可能な記事。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersion.vue
---

## 使用法

ChangelogVersionコンポーネントは、タイトル、説明、画像などのカスタマイズ可能なコンテンツを含む`<article>`要素を柔軟に表示する方法を提供します。

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
`ChangelogVersions`コンポーネントを使用して、左側にインジケータバーを持つタイムラインに複数の変更履歴バージョンを表示します。
::

### Title

`title`プロパティを使用して、ChangelogVersionのタイトルを表示します。

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

### Description

`description`プロパティを使用して、ChangelogVersionの説明を表示します。

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

ChangelogVersionの日付を表示するには、`date`プロパティを使用します。

::tip
日付は自動的に[current locale](/docs/getting-started/integrations/i18n/nuxt#locale)にフォーマットされます。`Date`オブジェクトまたは文字列を渡すことができます。
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

### バッジ

`badge`プロパティを使用して、[Badge](/docs/components/badge)をChangelogVersionに表示します。

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

[Badge](/docs/components/badge#props)コンポーネントの任意のプロパティを渡してカスタマイズできます。

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

### 著者

`authors`プロパティを使用して、ChangelogVersion内の[User](/docs/components/user)のリストを次のプロパティを持つオブジェクトの配列として表示します。

- `name?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `avatar?: Omit<AvatarProps, 'size'>`{lang="ts-type"}
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{lang="ts-type"}
- `size?: UserProps['size']`{lang="ts-type"}
- `orientation?: UserProps['orientation']`{lang="ts-type"}

`to`、`target`など、[Link](/docs/components/link#props)コンポーネントから任意のプロパティを渡すことができます。

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

`to`、`target`、`rel`など、[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネントから任意のプロパティを渡すことができます。

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

### Indicator

`indicator`プロパティを使用して、左側のインディケータドットを非表示にします。デフォルトは`true`です。

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
`indicator`プロパティが`false`の場合、タイトルの上に日付が表示されます。
::

## 例

### ボディスロット付

`body`スロットを使用して、画像と作者の間にカスタムコンテンツを表示できます。

-  [ Markdown](https://comark.dev/rendering/vue)コンポーネントを`@comark/vue`からマークダウンを表示します。
-  [ContentRender](https://content.nuxt.com/docs/components/content-renderer)コンポーネントを`@nuxt/content`からページまたはリストのコンテンツをレンダリングします。
- orは、`body`スロット内のmarkdownを使用して、コンテンツ内で直接`:u-changelog-version`コンポーネントを使用します。Nuxt UIはあらかじめスタイル付けられた散文コンポーネントを提供します。

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

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
