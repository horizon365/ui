---
description: '이름, 설명 및 아바타와 함께 사용자 정보를 표시합니다.'
category: data
keywords:
  - profile
  - person
  - account
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/User.vue
---

## Usage

### Name

`name` prop을 사용하여 사용자의 이름을 표시합니다.

::component-code
---
props:
  name: 'John Doe'
---
::

### Description

`description` prop을 사용하여 사용자에 대한 설명을 표시합니다.

::component-code
---
props:
  name: 'John Doe'
  description: 'Software Engineer'
---
::

### Avatar 이미지

`avatar` Prop을 사용하여 [Avatar](/docs/components/avatar) 구성 요소를 표시합니다.

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

### chip

`chip` 소품을 사용하여 [Chip](/docs/components/chip) 구성 요소를 표시합니다.

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

### Size 크기

`size` Prop을 사용하여 사용자 아바타와 텍스트의 크기를 변경합니다.

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

### 방향 지정

`orientation` Prop을 사용하여 방향을 변경합니다. 기본값은 `horizontal`입니다.

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

### Link 링크

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) 구성 요소에서 `to`, `target`, `rel` 등의 속성을 전달할 수 있습니다.

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
`NuxtLink` 구성 요소는 `User` 구성 요소에 전달하는 다른 모든 속성을 상속합니다.
::

## API

### Props (### Props)

:component-props

### 슬롯

:component-slots

## Theme 본문

:component-theme

## 변경 로그

:component-changelog
