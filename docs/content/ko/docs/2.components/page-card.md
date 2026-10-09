---
title: 페이지카드 (PageCard)
description: '제목, 설명 및 선택적 링크를 표시하는 사전 스타일 카드 구성요소입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCard.vue
---

## Usage

PageCard 구성 요소는 카드의 내용을 기본 슬롯에 그림과 함께 표시하는 유연한 방법을 제공합니다.

::code-preview

::u-page-card
---
title: 'Tailwind CSS'
description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
icon: 'i-simple-icons-tailwindcss'
class: 'w-96'
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::

::tip
[PageGrid](/docs/components/page-grid), [PageColumns](/docs/components/page-columns) 또는 [PageList](/docs/components/page-list) 구성 요소를 사용하여 여러 PageCard를 표시합니다.
::

### 제목

`title` prop을 사용하여 카드의 제목을 설정합니다.

::component-code
---
hide:
  - class
props:
  title: 'Tailwind CSS'
  class: 'w-96'
---
::

### 설명

`description` prop을 사용하여 카드 설명을 설정합니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  class: 'w-96'
---
::

### Icon

`icon` prop을 사용하여 카드의 아이콘을 설정합니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  class: 'w-96'
---
::

### Link 링크

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
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  to: 'https://tailwindcss.com/blog/tailwindcss-v4'
  target: _blank
  class: 'w-96'
---
::

### 변형

`variant` Prop을 사용하여 카드 스타일을 변경합니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - to
  - target
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  to: 'https://tailwindcss.com/blog/tailwindcss-v4'
  target: _blank
  variant: soft
  class: 'w-96'
---
::

::tip
`solid` 변형을 사용하여 색상을 반대로 바꿀 때 `light` 또는 `dark` 클래스를 `links` 슬롯에 적용할 수 있습니다.
::

### 방향 성

`orientation` 소품을 사용하여 기본 슬롯을 사용하여 방향을 변경합니다. 기본값은 `vertical`입니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### 역

`reverse` Prop을 사용하여 기본 슬롯의 방향을 반대로 합니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
  reverse: true
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### Highlight 이미지

`highlight` 및 `highlight-color` 소품을 사용하여 카드 주위에 강조 표시된 테두리를 표시합니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - orientation
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
  highlight: true
  highlightColor: 'primary'
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### Spotlight 소개

`spotlight` 및 `spotlight-color` 소품을 사용하여 마우스 커서를 따라 오는 스포트라이트 효과를 표시하고 커서를 놓을 때 테두리를 강조 표시합니다.

::note
스포트라이트 효과는 `to` 소품을 사용할 때 커서를 대체하므로 `outline` 변형과 함께 사용하는 것이 좋습니다.
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - orientation
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
  spotlight: true
  spotlightColor: 'primary'
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::tip
또한 `--spotlight-color` 및 `--spotlight-size` CSS 변수를 사용하여 색상과 크기를 사용자 정의할 수 있습니다.

```vue
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

## 예제

### As 인증

`header` 또는 `footer` 슬롯의 [User](/docs/components/user) 구성 요소를 사용하여 카드를 평가 이미지처럼 만듭니다.

::component-example
---
name: 'page-card-testimonial-example'
---
::

::tip{to="/docs/components/page-columns"}
`PageColumns` 구성 요소를 사용하여 다중 열 레이아웃에서 여러 PageCard를 표시할 수 있습니다.
::

## API

### Props (### Props)

:component-props

### 슬롯

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
