---
title: PageSection 페이지섹션
description: '당신의 페이지에 대한 응답 섹션입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageSection.vue
---

## Usage

PageSection 구성 요소는 전체 너비 유연성을 유지하면서 배경색, 이미지 또는 패턴을 쉽게 추가할 수 있도록 컨텐츠를 [Container](/docs/components/containerxph04x로 래핑합니다. 이 구성 요소는 기본 슬롯에 그림과 함께 컨텐츠를 표시하는 유연한 방법을 제공합니다.

::code-preview

::u-page-section
---
title: 'Beautiful Vue UI components'
description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
headline: 'Features'
features:
  - title: 'Icons'
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
    icon: 'i-lucide-smile'
    to: '/docs/getting-started/integrations/icons'
  - title: 'Fonts'
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
    icon: 'i-lucide-a-large-small'
    to: '/docs/getting-started/integrations/fonts'
  - title: 'Color Mode'
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
    icon: 'i-lucide-sun-moon'
    to: '/docs/getting-started/integrations/color-mode'
---
::

::

[PageHero](/docs/components/page-hero) 구성 요소 다음에 사용합니다.

```vue {4}
<template>
  <UPageHero />

  <UPageSection />
</template>
```

### Title 파일

`title` prop 을 사용하여 섹션의 제목을 설정합니다.

::component-code
---
props:
  title: 'Beautiful Vue UI components'
---
::

### 설명

`description` prop 을 사용하여 섹션에 대한 설명을 설정합니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
---
::

### 헤더 라인

`headline` Prop을 사용하여 섹션의 제목을 설정합니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  headline: 'Features'
---
::

### Icon

`icon` prop 을 사용하여 섹션의 아이콘을 설정합니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  icon: 'i-lucide-rocket'
---
::

### 기능

`features` 소품을 사용하여 설명 아래에 [PageFeature](/docs/components/page-feature) 목록을 다음 속성을 가진 객체 배열로 표시합니다.

- `title?: string`{lang="ts-type"} (- `title?: string`{lang="ts-type"})
- `description?: string`{lang="ts-type"} - {lang="ts-type"}
- `icon?: string`{lang="ts-type"} (- `icon?: string`{lang="ts-type"})
- `orientation?: 'horizontal' | 'vertical'`{lang="ts-type"} / - {lang="ts-type"}

[Link](/docs/components/link#props) 구성 요소(예: `to`, `target` 등)에서 모든 속성을 전달할 수 있습니다.

::component-code
---
prettier: true
external:
  - features
externalTypes:
  - PageFeatureProps[]
ignore:
  - title
  - description
  - features
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  features:
    - title: 'Icons'
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
      icon: 'i-lucide-smile'
      to: '/docs/getting-started/integrations/icons'
    - title: 'Fonts'
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
      icon: 'i-lucide-a-large-small'
      to: '/docs/getting-started/integrations/fonts'
    - title: 'Color Mode'
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
      icon: 'i-lucide-sun-moon'
      to: '/docs/getting-started/integrations/color-mode'
---
::

### 링크 링크

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
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
      color: 'neutral'
    - label: 'Explore components'
      to: '/docs/components/app'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

### 방향 성

`orientation` 소품을 사용하여 기본 슬롯을 사용하여 방향을 변경합니다. 기본값은 `vertical`입니다.

::component-code
---
prettier: true
external:
  - features
  - links
externalTypes:
  - PageFeatureProps[]
  - ButtonProps[]
ignore:
  - title
  - description
  - icon
  - features
  - links
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  icon: 'i-lucide-rocket'
  orientation: horizontal
  features:
    - title: 'Icons'
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
      icon: 'i-lucide-smile'
      to: '/docs/getting-started/integrations/icons'
    - title: 'Fonts'
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
      icon: 'i-lucide-a-large-small'
      to: '/docs/getting-started/integrations/fonts'
    - title: 'Color Mode'
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
      icon: 'i-lucide-sun-moon'
      to: '/docs/getting-started/integrations/color-mode'
  links:
    - label: 'Explore components'
      to: '/docs/components/app'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

### 역

`reverse` 소품을 사용하여 기본 슬롯의 방향을 반대로 합니다.

::component-code
---
prettier: true
external:
  - features
  - links
externalTypes:
  - PageFeatureProps[]
  - ButtonProps[]
ignore:
  - title
  - description
  - icon
  - features
  - links
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  icon: 'i-lucide-rocket'
  orientation: horizontal
  reverse: true
  features:
    - title: 'Icons'
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
      icon: 'i-lucide-smile'
      to: '/docs/getting-started/integrations/icons'
    - title: 'Fonts'
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
      icon: 'i-lucide-a-large-small'
      to: '/docs/getting-started/integrations/fonts'
    - title: 'Color Mode'
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
      icon: 'i-lucide-sun-moon'
      to: '/docs/getting-started/integrations/color-mode'
  links:
    - label: 'Explore components'
      to: '/docs/components/app'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme (## Theme)

:component-theme

## 변경 로그

:component-changelog
