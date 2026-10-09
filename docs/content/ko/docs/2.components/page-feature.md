---
title: PageFeature 페이지 기능
description: '응용 프로그램의 주요 기능을 보여주는 구성 요소입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageFeature.vue
---

## Usage

PageFeature 구성 요소는 [PageSection](/docs/components/page-section) 구성 요소에서 [feature](xph07x)를 표시하는 데 사용됩니다.

### Title 파일

`title` prop 을 사용하여 기능의 제목을 설정합니다.

::component-code
---
hide:
  - class
props:
  title: 'Theme'
  class: 'w-96'
---
::

### Description

`description` prop 을 사용하여 기능에 대한 설명을 설정합니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
props:
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  class: 'w-96'
---
::

### Icon

`icon` 소품을 사용하여 기능의 아이콘을 설정합니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  icon: 'i-lucide-swatch-book'
  class: 'w-96'
---
::

### 링크

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) 구성 요소(예: `to`, `target`, `rel` 등)에서 모든 속성을 전달할 수 있습니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - target
props:
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  icon: 'i-lucide-swatch-book'
  to: '/docs/getting-started/theme/design-system'
  target: _blank
  class: 'w-96'
---
::

### 방향 지정

`orientation` 소품을 사용하여 피쳐 방향을 변경합니다. 기본값은 `horizontal`입니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
props:
  orientation: 'vertical'
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  icon: 'i-lucide-swatch-book'
  class: 'w-96'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
