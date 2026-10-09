---
title: ChangelogVersion 변경
description: '변경 로그에 표시할 사용자 지정 가능한 문서입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersion.vue
---

## Usage

ChangelogVersion 구성 요소는 제목, 설명, 이미지 등을 포함하여 사용자 정의 가능한 컨텐츠가 포함된 `<article>` 요소를 유연하게 표시할 수 있는 방법을 제공합니다.

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
`ChangelogVersions` 구성 요소를 사용하여 왼쪽에 표시기 막대가 있는 타임라인에 여러 변경 로그 버전을 표시합니다.
::

### 제목

`title` prop 를 사용하여 ChangelogVersion 의 제목을 표시합니다.

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

`description` prop를 사용하여 ChangelogVersion에 대한 설명을 표시합니다.

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

### Date 날짜

`date` prop 를 사용하여 ChangelogVersion 의 날짜를 표시합니다.

::tip
날짜 형식은 [current locale](/docs/getting-started/integrations/i18n/nuxt#locale)로 자동으로 지정됩니다. `Date` 객체 또는 문자열을 전달할 수 있습니다.
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

### 배지

`badge` prop를 사용하여 ChangelogVersion에 [Badge](/docs/components/badge)를 표시합니다.

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

[Badge](xph12x) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

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

### Image 이미지

`image` prop를 사용하여 BlogPost에 이미지를 표시합니다.

::note
[`@nuxt/image`](https://image.nuxt.com/get-started/installation)가 설치되어 있는 경우 기본 `img` 태그 대신 `<NuxtImg>` 구성 요소가 사용됩니다.
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

### authors 작성자

`authors` prop을 사용하여 ChangelogVersion에 [User](/docs/components/user) 목록을 다음 속성을 가진 객체 배열로 표시합니다.

- `name?: string`{lang="ts-type"} (- `name?: string`{lang="ts-type"})
- `description?: string`{lang="ts-type"} (- `description?: string`{lang="ts-type"})
- `avatar?: Omit<AvatarProps, 'size'>`{lang="ts-type"} (- `avatar?: Omit<AvatarProps, 'size'>`{lang="ts-type"})
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{lang="ts-type"}
- `size?: UserProps['size']`{lang="ts-type"}
- `orientation?: UserProps['orientation']`{lang="ts-type"}

[Link](/docs/components/link#props) 구성 요소에서 `to`, `target` 등의 속성을 전달할 수 있습니다.

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

### Link 링크

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) 구성 요소에서 `to`, `target`, `rel` 등의 속성을 전달할 수 있습니다.

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

### Indicator (### 표시기)

`indicator` 소품을 사용하여 왼쪽에 있는 지시자 점을 숨깁니다. 기본값은 `true`입니다.

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
`indicator` prop이 `false`일 때, 날짜는 제목 위에 표시됩니다.
::

## examples 예제

###  본체 슬롯

`body` 슬롯을 사용하여 다음과 같은 기능을 사용하여 이미지와 작성자 간에 사용자 정의 콘텐츠를 표시할 수 있습니다.

- x[Markdown](https://comark.dev/rendering/vue) 구성 요소 `@comark/vue`에서 일부 Markdown을 표시합니다.
- x[ContentRendererr](https://content.nuxt.com/docs/components/content-renderer) 구성 요소는 페이지 또는 목록의 내용을 렌더링합니다.
- or는 `body` 슬롯 내부의 markdown과 함께 콘텐츠에서 직접 `:u-changelog-version` 구성 요소를 사용하여 Nuxt UI가 사전 스타일의 산문 구성 요소를 제공합니다.- or use the `:u-changelog-version` component directly in your content with markdown inside the `body` slot as Nuxt UI provides pre-styled prose components.

::component-example
---
prettier: true
name: 'changelog-version-markdown-example'
collapse: true
---
::

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
