---
description: '显示用户信息，包括名称、描述和头像。'
category: data
keywords:
  - profile
  - person
  - account
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/User.vue
---

## 用法

### 名称

使用`name`属性显示用户名。

::component-code
---
props:
  name: 'John Doe'
---
::

### 说明

使用`description`属性显示用户的描述。

::component-code
---
props:
  name: 'John Doe'
  description: 'Software Engineer'
---
::

### 头像

使用`avatar`道具显示[Avatar](/docs/components/avatar)组件。

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

### 芯片

使用`chip`道具显示[Chip](/docs/components/chip)组件。

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

### Size

使用`size`道具更改用户头像和文本的大小。

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

### 方向

使用`orientation`道具将方向. px更改为`horizontal`。

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

您可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)组件传递任何属性，如`to`、`target`、`rel`等。

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
`NuxtLink`组件将继承您传递给`User`组件的所有其他属性。
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
