---
title: PageHero 페이지히어로
description: '당신의 페이지에 대한 반응 영웅.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHero.vue
---

##  사용

PageHero 구성 요소는 콘텐츠를 [Container](/docs/components/container)로 래핑하면서 전체 폭의 유연성을 유지하여 배경색, 이미지 또는 패턴을 쉽게 추가할 수 있습니다. 기본 슬롯에 그림으로 콘텐츠를 표시할 수 있는 유연한 방법을 제공합니다.

::code-preview

:::u-page-hero
---
제목 : Ultimate Vue UI Library
설명 : 최신 웹 응용 프로그램을 빌드하기 위한 풍부한 스타일의 풀 스타일, 액세스할 수 있으며 고도로 사용자 지정할 수 있는 구성 요소를 제공하는 Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.
---

::::u-page-card{variant="subtle" class="rounded-lg"}

![앱 스크린샷](/blocks/image4.pngPH08{width="960" height="540" class="rounded-sm shadow-2xl ring ring-default"}

::::

:::

::

###  제목

`title`prop을 사용하여 영웅의 제목을 설정합니다.

::component-code
---
소품 :
  제목 : Ultimate Vue UI Library
---
::

###  설명

`description`prop을 사용하여 영웅에 대한 설명을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  제목 : Ultimate Vue UI Library
  설명 : 최신 웹 응용 프로그램을 빌드하기 위한 풍부한 스타일의 풀 스타일, 액세스할 수 있으며 고도로 사용자 지정할 수 있는 구성 요소를 제공하는 Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.
---
::

###  헤드라인

`headline`prop을 사용하여 영웅의 헤드 라인을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
소품 :
  제목 : Ultimate Vue UI Library
  설명 : 최신 웹 응용 프로그램을 빌드하기 위한 풍부한 스타일의 풀 스타일, 액세스할 수 있고 고도로 사용자 지정할 수 있는 구성 요소를 제공하는 Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.
  사진: "New release"
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
  제목 : Ultimate Vue UI Library
  설명 : 최신 웹 응용 프로그램을 빌드하기 위한 풍부한 스타일의 풀 스타일, 액세스할 수 있으며 고도로 사용자 지정할 수 있는 구성 요소를 제공하는 Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.
  링크:
    - label: '시작하기'
      to: '/docs/getting-started' 로 이동
      아이콘 : i-lucide-square-play
    - label: '자세히 알아보기'
      to: '/docs/getting-started/theme/design-system' /docs/getting-started/theme/design-system' 에 대한 정보
      색상 : Neutral
      variant: '미묘한'
      trailingIcon: 'i-lucide-arrow-right'
---
::

###  방향

기본 슬롯으로 방향을 변경하려면 `orientation`prop을 사용합니다. 기본값은 `vertical`입니다.

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
  -  headline
  -  링크
소품 :
  제목 : Ultimate Vue UI Library
  설명 : 최신 웹 응용 프로그램을 빌드하기 위한 풍부한 스타일의 풀 스타일, 액세스할 수 있고 고도로 사용자 지정할 수 있는 구성 요소를 제공하는 Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.
  사진: "New Release"
  방향: 수평
  링크:
    - label: '시작하기'
      to: '/docs/getting-started' 로 이동
      아이콘 : i-lucide-square-play
    - label: '자세히 알아보기'
      to: '/docs/getting-started/theme/design-system' /docs/getting-started/theme/design-system' 에 대한 정보
      색상: Neutral
      variant: '미묘한'
      trailingIcon: 'i-lucide-arrow-right'
슬롯 :
  기본 값:|

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
---

![앱 스크린샷](/blocks/image4.png)
::

###  반전

`reverse`prop 을 사용하여 기본 슬롯의 방향을 반대로 바꿉니다.

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
  -  headline
  -  링크
소품 :
  제목 : Ultimate Vue UI Library
  설명 : 최신 웹 응용 프로그램을 빌드하기 위한 풍부한 스타일의 풀 스타일, 액세스할 수 있고 고도로 사용자 지정할 수 있는 구성 요소를 제공하는 Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.
  사진: "New release"
  방향: 수평
  반전: true
  링크:
    - label: '시작하기'
      to: '/docs/getting-started' 로 이동
      아이콘: i-lucide-square-play
    - label: '자세히 알아보기'
      to: '/docs/getting-started/theme/design-system' /docs/getting-started/theme/design-system' 에 대한 정보
      색상: Neutral
      variant: '미묘한'
      trailingIcon: 'i-lucide-arrow-right'
슬롯 :
  기본값 :|

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
---

![앱 스크린샷](/blocks/image4.png) {class="rounded-lg shadow-2xl ring ring-default"}
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
