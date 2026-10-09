---
description: '名前、説明、アバターでユーザー情報を表示します。'
category: data
keywords:
  - profile
  - person
  - account
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/User.vue
---

## 使用法

### Name

`name`プロパティを使用して、ユーザの名前を表示します。

::component-code
---
props:
  name: 'John Doe'
---
::

### Description

`description`プロパティを使用して、ユーザの説明を表示します。

::component-code
---
props:
  name: 'John Doe'
  description: 'Software Engineer'
---
::

### アバター

`avatar`プロパティを使用して、[Avatar](/docs/components/avatar)コンポーネントを表示します。

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

### Chip

`chip`プロパティを使用して、[Chip](/docs/components/chip)コンポーネントを表示します。

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

### サイズ

`size`プロパティを使用して、ユーザーのアバターとテキストのサイズを変更します。

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

### Orientation

向きを変更するには`orientation`プロパティを使用します。デフォルトは`horizontal`です。

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

### Link

`to`、`target`、`rel`など、[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネントから任意のプロパティを渡すことができます。

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
`NuxtLink`コンポーネントは、`User`コンポーネントに渡す他のすべての属性を継承します。
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
