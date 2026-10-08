---
title: PageCTA 페이지
description: '페이지에 표시할 작업 호출 섹션입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCTA.vue
---

##  사용

PageCTA 구성 요소는 기본 슬롯에 그림과 함께 페이지에 작업 활용 방안을 표시할 수있는 유연한 방법을 제공합니다.

::code-preview

::u-page-c-t-a
---
제목 : "우리의 놀라운 커뮤니티에 의해 신뢰되고 지원됩니다"
설명: '최신 Tailwind CSS를 미리 보고 Nuxt UI를 시작하십시오.'
방향: 수평
링크:
  - label: '시작하기'
    색상 : Neutral
  - label: '자세히 알아보기'
    색상 : Neutral
    variant: '미묘한'
    trailingIcon: 'i-lucide-arrow-right'
---

: img{src="https://picsum.photos/640/616" width="320" height="308" alt="Illustration" class="w-full rounded-lg"}
::

::

[PageSection](/docs/components/page-section) 구성 요소 내에서 사용하거나 페이지에서 직접 사용하십시오.

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
`px-0` 및 `rounded-none` 클래스를 사용하여 CTA가 모바일 페이지의 가장자리를 채우도록 만듭니다.
::

###  제목

`title`prop을 사용하여 CTA의 제목을 설정합니다.

::component-code{slug="page-CTA"}
---
소품 :
  제목: "우리의 놀라운 커뮤니티에 의해 신뢰되고 지원됩니다"
---
::

###  설명

`description`prop을 사용하여 CTA에 대한 설명을 설정합니다.

::component-code{slug="page-CTA"}
---
상품명 : True
무시하기:
  -  title
소품 :
  제목: "우리의 놀라운 커뮤니티에 의해 신뢰되고 지원됩니다"
  "우리는 강력하고 지속적인 파트너십을 구축했습니다. 그들의 신뢰는 우리의 원동력이며, 공동의 성공을 향해 우리를 추진합니다."
---
::

###  링크

`links`prop을 사용하여 설명 아래에 [Button](/docs/components/button)의 목록을 표시합니다.

::component-code{slug="page-CTA"}
---
상품명 : True
외부:
  -  링크
externalTypes:
  - ButtonProps []
무시하기:
  -  title
  -  Description
  -  링크
소품 :
  제목: "우리의 놀라운 커뮤니티에 의해 신뢰되고 지원됩니다"
  "우리는 강력하고 지속적인 파트너십을 구축했습니다. 그들의 신뢰는 우리의 원동력이며, 공동의 성공을 향해 우리를 추진합니다."
  링크:
    - label: '시작하기'
      색상 : Neutral
    - label: '자세히 알아보기'
      색상: Neutral
      variant: '미묘한'
      trailingIcon: 'i-lucide-arrow-right'
---
::

###  변형

`variant`prop을 사용하여 CTA 스타일을 변경합니다.

::component-code{slug="page-CTA"}
---
상품명 : True
외부:
  -  링크
externalTypes:
  - ButtonProps []
무시하기:
  -  title
  -  설명
  -  링크
소품 :
  제목 : "우리의 놀라운 커뮤니티에 의해 신뢰되고 지원됩니다"
  "우리는 강력하고 지속적인 파트너십을 구축했습니다. 그들의 신뢰는 우리의 원동력이며, 공동의 성공을 향해 우리를 추진합니다."
  변형: 소프트
  링크:
    - label: '시작하기'
      색상: Neutral
    - label: '자세히 알아보기'
      색상 : Neutral
      variant: '미묘한'
      trailingIcon: 'i-lucide-arrow-right'
---
::

::tip
`solid` 변형을 사용하여 색상을 반대로 바꿀 때 `light` 또는 `dark` 클래스를 `links` 슬롯에 적용할 수 있습니다.
::

###  방향

`orientation`prop을 사용하여 기본 슬롯을 사용하여 방향을 변경합니다. 기본값은 `vertical`입니다.

::component-code{slug="page-CTA"}
---
상품명 : True
외부:
  -  링크
externalTypes:
  - ButtonProps []
무시하기:
  -  title
  -  설명
  -  링크
소품 :
  제목: "우리의 놀라운 커뮤니티에 의해 신뢰되고 지원됩니다"
  "우리는 강력하고 지속적인 파트너십을 구축했습니다. 그들의 신뢰는 우리의 원동력이며, 공동의 성공을 향해 우리를 추진합니다."
  방향: 수평
  링크:
    - label: '시작하기'
      색상 : Neutral
    - label: '자세히 알아보기'
      색상: Neutral
      variant: '미묘한'
      trailingIcon: 'i-lucide-arrow-right'
슬롯 :
  기본 값:|

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

: img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

###  반전

`reverse`prop 을 사용하여 기본 슬롯의 방향을 반대로 바꿉니다.

::component-code{slug="page-CTA"}
---
상품명 : True
외부:
  -  링크
externalTypes:
  - ButtonProps []
무시하기:
  -  title
  -  설명
  -  링크
소품 :
  제목: "우리의 놀라운 커뮤니티에 의해 신뢰되고 지원됩니다"
  "우리는 강력하고 지속적인 파트너십을 구축했습니다. 그들의 신뢰는 우리의 원동력이며, 공동의 성공을 향해 우리를 추진합니다."
  방향: 수평
  반전: true
  링크:
    - label: '시작하기'
      색상 : Neutral
    - label: '자세히 알아보기'
      색상: Neutral
      variant: '미묘한'
      trailingIcon: 'i-lucide-arrow-right'
슬롯 :
  기본값 :|

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

: img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

##  API

###  Props

: component-props {slug="page-CTA"}

###  슬롯

: component-slots {slug="page-CTA"}

##  테마

: component-theme {slug="page-CTA"}

##  Changelog

:component-changelog 구성요소 변경 로그
