---
title: PageCTA
description: '페이지에 표시할 작업 호출 섹션입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCTA.vue
---

## Usage

PageCTA 구성 요소는 기본 슬롯에 그림과 함께 페이지에 작업 활용 방안을 표시할 수있는 유연한 방법을 제공합니다.

::code-preview

::u-page-c-t-a
---
title: 'Trusted and supported by our amazing community'
description: 'Preview the latest Tailwind CSS and get started with Nuxt UI.'
orientation: horizontal
links:
  - label: 'Get started'
    color: 'neutral'
  - label: 'Learn more'
    color: 'neutral'
    variant: 'subtle'
    trailingIcon: 'i-lucide-arrow-right'
---

:img{src="https://picsum.photos/640/616" width="320" height="308" alt="Illustration" class="w-full rounded-lg"}
::

::

[PageSection](/docs/components/page-section) 구성 요소 내에서 사용하거나 페이지에서 직접 사용합니다.

```vue {4,8-10}
<template>
  <UPageHero />

  <UPageCTA class="rounded-none" />

  <UPageSection />

  <UPageSection :ui="{ container: 'px-0' }">
    <UPageCTA class="rounded-none sm:rounded-xl" />
  </UPageSection>

  <UPageSection />
</template>
```

::tip
`px-0` 및 `rounded-none` 클래스를 사용하여 CTA가 모바일에서 페이지 가장자리를 채우도록합니다.
::

### Title 파일

`title` prop을 사용하여 CTA 제목을 설정합니다.

::component-code{slug="page-CTA"}
---
props:
  title: 'Trusted and supported by our amazing community'
---
::

### 설명

`description` prop을 사용하여 CTA 설명을 설정합니다.

::component-code{slug="page-CTA"}
---
prettier: true
ignore:
  - title
props:
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
---
::

### 링크

`links` prop를 사용하여 설명 아래에 [Button](/docs/components/button) 목록을 표시합니다.

::component-code{slug="page-CTA"}
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
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

### 변형

`variant` prop을 사용하여 CTA 스타일을 변경합니다.

::component-code{slug="page-CTA"}
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
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  variant: soft
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

::tip
`solid` 변형을 사용하여 색상을 반대로 바꿀 때 `light` 또는 `dark` 클래스를 `links` 슬롯에 적용할 수 있습니다.
::

### 방향

`orientation` 소품을 사용하여 기본 슬롯을 사용하여 방향을 변경합니다. 기본값은 `vertical`입니다.

::component-code{slug="page-CTA"}
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
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  orientation: horizontal
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

### 반전

`reverse` 소품을 사용하여 기본 슬롯의 방향을 반대로 합니다.

::component-code{slug="page-CTA"}
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
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  orientation: horizontal
  reverse: true
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

## API

### Props (### Props)

:component-props{slug="page-CTA"}

### Slots

:component-slots{slug="page-CTA"}

## Theme 테마

:component-theme{slug="page-CTA"}

## 변경 로그

:component-changelog
