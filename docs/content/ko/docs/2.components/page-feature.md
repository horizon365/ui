---
title: PageFeature 페이지기능
description: '응용 프로그램의 주요 기능을 보여주는 구성 요소입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageFeature.vue
---

##  사용

PageFeature 구성 요소는 [PageSection](/docs/components/page-section) 구성 요소에서 사용되어 [features](/docs/components/page-section#features)를 표시합니다.

###  제목

`title`prop을 사용하여 기능 제목을 설정합니다.

::component-code
---
숨기기 (Hide):
  - class 클래스
소품 :
  제목: Theme
  클래스: 'w-96'
---
::

###  설명

`description`prop을 사용하여 기능에 대한 설명을 설정합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
소품 :
  제목: Theme
  설명: "사용자 고유의 색상, 글꼴 등으로 Nuxt UI 사용자 정의"
  클래스: 'w-96'
---
::

###  아이콘

`icon`prop을 사용하여 기능 아이콘을 설정합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  제목
  -  설명
소품 :
  제목: Theme
  설명: "사용자 고유의 색상, 글꼴 등으로 Nuxt UI 사용자 정의"
  아이콘 : i-lucide-swatch-book
  클래스: 'w-96'
---
::

###  링크

당신은 [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `to`, `target`, `rel`, etc.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  icon
  -  target
소품 :
  제목: Theme
  설명: "사용자 고유의 색상, 글꼴 등으로 Nuxt UI 사용자 정의"
  아이콘 : i-lucide-swatch-book
  to: '/docs/getting-started/theme/design-system' /docs/getting-started/theme/design-system' 에 대한 정보
  target: _blank 대상
  클래스: 'W-96'
---
::

###  방향

`orientation`prop을 사용하여 피쳐 방향을 변경합니다. 기본값은 `horizontal`입니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  icon
소품 :
  방향: 수직
  제목: Theme
  설명: "사용자 고유의 색상, 글꼴 등으로 Nuxt UI 사용자 정의"
  아이콘 : i-lucide-swatch-book
  클래스: 'w-96'
---
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
