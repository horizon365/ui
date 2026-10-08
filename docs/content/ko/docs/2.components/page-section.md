---
title: PageSection 페이지섹션
description: '당신의 페이지에 대한 응답 섹션입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageSection.vue
---

##  사용

PageSection 구성 요소는 콘텐츠를 [Container](/docs/components/container)로 래핑하면서 전체 폭의 유연성을 유지하여 배경색, 이미지 또는 패턴을 쉽게 추가할 수 있습니다. 기본 슬롯에 그림과 함께 콘텐츠를 표시하는 유연한 방법을 제공합니다.

::code-preview

::u-page-section
---
제목 : Beautiful Vue UI Components
설명 :"Nuxt UI는 Vue 및 Nuxt를 사용하여 아름답고 액세스 가능한 웹 응용 프로그램을 빌드하는 데 도움이되는 포괄적 인 구성 요소 및 유틸리티 제품군을 제공합니다."
사진: "Features"
특징:
  - title: '아이콘'
    Nuxt UI는 Nuxt Icon과 통합되어 Iconify에서 200,000개 이상의 아이콘에 액세스합니다.
    사진: "i-lucide-smile"
    to: '/docs/getting-started/integrations/icons' /docs/getting-started/integrations/icons'에 해당되는 글 1건
  - title: '글꼴'
    설명: 'Nuxt UI는 Nuxt Fonts와 통합되어 플러그인 앤 플레이 글꼴 최적화를 제공합니다.'
    아이콘 : i-lucide-a-large-small
    to: '/docs/getting-started/integrations/fonts' 로 이동
  - title: '컬러 모드'
    설명: 'Nuxt UI는 Nuxt Color Mode와 통합되어 빛과 어둠 사이를 전환합니다.'
    아이콘 : i-lucide-sun-moon
    to: '/docs/getting-started/integrations/color-mode' /docs/getting-started/integrations/color-mode' 로 이동
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

###  제목

`title`prop을 사용하여 섹션의 제목을 설정합니다.

::component-code
---
소품 :
  제목 : Beautiful Vue UI Components
---
::

###  설명

`description`prop을 사용하여 섹션에 대한 설명을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  제목 : Beautiful Vue UI Components
  설명 :"Nuxt UI는 Vue 및 Nuxt를 사용하여 아름답고 액세스 가능한 웹 응용 프로그램을 빌드하는 데 도움이되는 포괄적 인 구성 요소 및 유틸리티 제품군을 제공합니다."
---
::

###  헤드라인

`headline`prop을 사용하여 섹션의 헤드 라인을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
소품 :
  제목 : Beautiful Vue UI Components
  설명 :"Nuxt UI는 Vue 및 Nuxt를 사용하여 아름답고 액세스 가능한 웹 응용 프로그램을 빌드하는 데 도움이되는 포괄적 인 구성 요소 및 유틸리티 제품군을 제공합니다."
  사진: "Features"
---
::

###  아이콘

`icon`prop을 사용하여 섹션 아이콘을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
소품 :
  제목 : Beautiful Vue UI Components
  설명 :"Nuxt UI는 Vue 및 Nuxt를 사용하여 아름답고 액세스 가능한 웹 응용 프로그램을 빌드하는 데 도움이되는 포괄적 인 구성 요소 및 유틸리티 제품군을 제공합니다."
  아이콘 : i-lucide-rocket
---
::

###  특징

`features`prop을 사용하여 설명 아래에 [PageFeature](/docs/components/page-feature) 목록을 다음 속성을 가진 객체 배열로 표시합니다.

-  @ `title?: string` @ {lang="ts-type"}
- `description?: string` {lang="ts-type"} @
-  @ `icon?: string` @ {lang="ts-type"} @
-  @ `orientation?: 'horizontal' | 'vertical'` @ {lang="ts-type"}

당신은 [Link](/docs/components/link#props) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `to`, `target` 등.

::component-code
---
상품명 : True
외부:
  -  기능
externalTypes:
  -  PageFeatureProps []
무시하기:
  -  title
  -  설명
  -  기능
소품 :
  제목 : Beautiful Vue UI Components
  설명 :"Nuxt UI는 Vue 및 Nuxt를 사용하여 아름답고 액세스 가능한 웹 응용 프로그램을 빌드하는 데 도움이되는 포괄적 인 구성 요소 및 유틸리티 제품군을 제공합니다."
  특징:
    - title: '아이콘'
      Nuxt UI는 Nuxt Icon과 통합되어 Iconify에서 200,000개 이상의 아이콘에 액세스합니다.
      사진: "i-lucide-smile"
      to: '/docs/getting-started/integrations/icons' /docs/getting-started/integrations/icons'에 해당되는 글 1건
    - title: '글꼴'
      설명: 'Nuxt UI는 Nuxt Fonts와 통합되어 플러그인 앤 플레이 글꼴 최적화를 제공합니다.'
      아이콘 : i-lucide-a-large-small
      to: '/docs/getting-started/integrations/fonts' 로 이동
    - title: '색상 모드'
      설명: 'Nuxt UI는 Nuxt Color Mode와 통합되어 빛과 어둠 사이를 전환합니다.'
      아이콘: i-lucide-sun-moon
      to: '/docs/getting-started/integrations/color-mode' /docs/getting-started/integrations/color-mode' 로 이동
---
::

###  링크

`links`prop을 사용하여 설명 아래에 [Button](/docs/components/button)의 목록을 표시합니다.

::component-code
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
  제목 : Beautiful Vue UI Components
  설명 :"Nuxt UI는 Vue 및 Nuxt를 사용하여 아름답고 액세스 가능한 웹 응용 프로그램을 빌드하는 데 도움이되는 포괄적 인 구성 요소 및 유틸리티 제품군을 제공합니다."
  링크:
    - label: '시작하기'
      to: '/docs/getting-started' 로 이동
      아이콘: i-lucide-square-play
      색상 : Neutral
    - label: '구성 요소 탐색'
      대상: '/docs/components/app'
      색상: Neutral
      variant: '미묘한'
      trailingIcon: 'i-lucide-arrow-right'
---
::

###  방향

`orientation`prop을 사용하여 기본 슬롯을 사용하여 방향을 변경합니다. 기본값은 `vertical`입니다.

::component-code
---
상품명 : True
외부:
  -  기능
  -  링크
externalTypes:
  -  PageFeatureProps []
  - ButtonProps []
무시하기:
  -  title
  -  설명
  -  icon
  -  기능
  -  링크
소품 :
  제목 : Beautiful Vue UI Components
  설명 :"Nuxt UI는 Vue 및 Nuxt를 사용하여 아름답고 액세스 가능한 웹 응용 프로그램을 빌드하는 데 도움이되는 포괄적 인 구성 요소 및 유틸리티 제품군을 제공합니다."
  아이콘 : i-lucide-rocket
  방향: 수평
  특징:
    - title: '아이콘'
      Nuxt UI는 Nuxt Icon과 통합되어 Iconify에서 200,000개 이상의 아이콘에 액세스합니다.
      사진: "i-lucide-smile"
      to: '/docs/getting-started/integrations/icons' /docs/getting-started/integrations/icons'에 해당되는 글 1건
    - title: '글꼴'
      설명: 'Nuxt UI는 Nuxt Fonts와 통합되어 플러그인 앤 플레이 글꼴 최적화를 제공합니다.'
      아이콘 : i-lucide-a-large-small
      to: '/docs/getting-started/integrations/fonts' 로 이동
    - title: '컬러 모드'
      설명: 'Nuxt UI는 Nuxt Color Mode와 통합되어 빛과 어둠 사이를 전환합니다.'
      아이콘: i-lucide-sun-moon
      to: '/docs/getting-started/integrations/color-mode' /docs/getting-started/integrations/color-mode' 로 이동
  링크:
    - label: '구성 요소 탐색'
      대상: '/docs/components/app'
      색상 : Neutral
      variant: '미묘한'
      trailingIcon: 'i-lucide-arrow-right'
슬롯 :
  기본 값:|

    <img src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

: img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

###  반전

`reverse`prop 을 사용하여 기본 슬롯의 방향을 반대로 바꿉니다.

::component-code
---
상품명 : True
외부:
  -  기능
  -  링크
externalTypes:
  -  PageFeatureProps []
  - ButtonProps []
무시하기:
  -  title
  -  설명
  -  icon
  -  기능
  -  링크
소품 :
  제목 : Beautiful Vue UI Components
  설명 :"Nuxt UI는 Vue 및 Nuxt를 사용하여 아름답고 액세스 가능한 웹 응용 프로그램을 빌드하는 데 도움이되는 포괄적 인 구성 요소 및 유틸리티 제품군을 제공합니다."
  아이콘 : i-lucide-rocket
  방향: 수평
  반전: true
  특징:
    - title: '아이콘'
      Nuxt UI는 Nuxt Icon과 통합되어 Iconify에서 200,000개 이상의 아이콘에 액세스합니다.
      사진: "i-lucide-smile"
      to: '/docs/getting-started/integrations/icons' /docs/getting-started/integrations/icons'에 해당되는 글 1건
    - title: '글꼴'
      설명: 'Nuxt UI는 Nuxt Fonts와 통합되어 플러그인 앤 플레이 글꼴 최적화를 제공합니다.'
      아이콘 : i-lucide-a-large-small
      to: '/docs/getting-started/integrations/fonts' 로 이동
    - title: '색상 모드'
      설명: 'Nuxt UI는 Nuxt Color Mode와 통합되어 빛과 어둠 사이를 전환합니다.'
      아이콘: i-lucide-sun-moon
      to: '/docs/getting-started/integrations/color-mode' /docs/getting-started/integrations/color-mode' 로 이동
  링크:
    - label: '구성 요소 탐색'
      대상: '/docs/components/app'
      색상: Neutral
      variant: '미묘한'
      trailingIcon: 'i-lucide-arrow-right'
슬롯 :
  기본값 :|

    <img src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

: img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
