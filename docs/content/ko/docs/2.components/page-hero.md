---
title: PageHero 페이지 영웅
description: '당신의 페이지에 대한 반응 영웅.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHero.vue
---

## Usage

PageHero 구성 요소는 전체 폭의 유연성을 유지하면서 내용을 [Container](/docs/components/containerxph04x로 래핑하여 배경색, 이미지 또는 패턴을 쉽게 추가할 수 있습니다. 기본 슬롯에 그림으로 내용을 표시할 수 있는 유연한 방법을 제공합니다.

::code-preview

:::u-page-hero
---
title: 'Ultimate Vue UI library'
description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
---

::::u-page-card{variant="subtle" class="rounded-lg"}

![App 스크린 샷](/blocks/image4.png){width="960" height="540" class="rounded-sm shadow-2xl ring ring-default"}

::::

:::

::

### Title 파일

`title` 소품을 사용하여 영웅의 제목을 설정합니다.

::component-code
---
props:
  title: 'Ultimate Vue UI library'
---
::

### 설명

`description` 소품을 사용하여 영웅의 묘사를 설정합니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
---
::

### 헤더 라인

`headline` 소품을 사용하여 영웅의 헤드 라인을 설정합니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
---
::

### Links 링크

`links` prop을 사용하여 설명 아래에 [Button](/docs/components/button) 목록을 표시합니다.

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/docs/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

### 방향 지정

`orientation` 소품을 사용하여 기본 슬롯을 사용하여 방향을 변경합니다. 기본값은 `vertical`입니다.

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - headline
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
  orientation: horizontal
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/docs/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
---

![App 스크린샷](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

### 역

`reverse` 소품을 사용하여 기본 슬롯의 방향을 반대로 합니다.

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - headline
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
  orientation: horizontal
  reverse: true
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/docs/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
---

![App 스크린샷](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

## API

### Props (### Props)

:component-props

### 슬롯

:component-slots

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
