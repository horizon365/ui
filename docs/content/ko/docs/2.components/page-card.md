---
title: 페이지카드 (PageCard)
description: '제목, 설명 및 선택적 링크를 표시하는 사전 스타일 카드 구성요소입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCard.vue
---

##  사용

PageCard 구성 요소는 카드의 내용을 기본 슬롯에 그림과 함께 표시하는 유연한 방법을 제공합니다.

::code-preview

::u-page-card
---
제목: Tailwind CSS
설명: 'Nuxt UI는 최신 Tailwind CSS와 통합되어 상당한 개선을 가져왔습니다.'
아이콘 : 'i-simple-icons-tailwindcss'
클래스: 'w-96'
---

: img {src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::

::tip
[PageGrid](/docs/components/page-grid)[PageColumns](/docs/components/page-columns) 또는 [List](/docs/components/page-list 페이지 카드를 여러 구성 요소로 표시하려면 ) 페이지 카드를 사용하십시오.
::

###  제목

`title`prop을 사용하여 카드 제목을 설정합니다.

::component-code
---
숨기기 (Hide):
  -  클래스
소품 :
  제목 : Tailwind CSS
  클래스: 'w-96'
---
::

###  설명

`description`prop을 사용하여 카드 설명을 설정합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
소품 :
  제목 : Tailwind CSS
  설명: 'Nuxt UI는 최신 Tailwind CSS와 통합되어 상당한 개선을 가져왔습니다.'
  클래스: 'w-96'
---
::

###  아이콘

`icon`prop을 사용하여 카드 아이콘을 설정합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
소품 :
  제목 : Tailwind CSS
  설명: 'Nuxt UI는 최신 Tailwind CSS와 통합되어 상당한 개선을 가져왔습니다.'
  아이콘 : 'i-simple-icons-tailwindcss'
  클래스: 'W-96'
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
  제목 : Tailwind CSS
  설명: 'Nuxt UI는 최신 Tailwind CSS와 통합되어 상당한 개선을 가져왔습니다.'
  아이콘 : 'i-simple-icons-tailwindcss'
  받는 사람: 'https://tailwindcss.com/blog/tailwindcss-v4'
  target: _blank 대상
  클래스: 'W-96'
---
::

###  변형

`variant`prop을 사용하여 카드 스타일을 변경합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  icon
  - 에 대한
  -  target
소품 :
  제목: Tailwind CSS
  설명: 'Nuxt UI는 최신 Tailwind CSS와 통합되어 상당한 개선을 가져왔습니다.'
  아이콘 : 'i-simple-icons-tailwindcss'
  받는 사람: 'https://tailwindcss.com/blog/tailwindcss-v4'
  target: _blank 대상
  변형: 소프트
  클래스: 'W-96'
---
::

::tip
`solid` 변형을 사용하여 색상을 반대로 바꿀 때 `light` 또는 `dark` 클래스를 `links` 슬롯에 적용할 수 있습니다.
::

###  방향

기본 슬롯으로 방향을 변경하려면 `orientation`prop을 사용합니다. 기본값은 `vertical`입니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
  -  아이콘
소품 :
  제목 : Tailwind CSS
  설명: 'Nuxt UI는 최신 Tailwind CSS와 통합되어 상당한 개선을 가져왔습니다.'
  아이콘 : 'i-simple-icons-tailwindcss'
  방향: 수평
슬롯 :
  기본 값:|

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

###  반전

`reverse`prop 을 사용하여 기본 슬롯의 방향을 반대로 바꿉니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
  -  icon
소품 :
  제목 : Tailwind CSS
  설명: 'Nuxt UI는 최신 Tailwind CSS와 통합되어 상당한 개선을 가져왔습니다.'
  아이콘 : 'i-simple-icons-tailwindcss'
  방향: 수평
  반전: true
슬롯 :
  기본값 :|

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

###  하이라이트

`highlight` 및 `highlight-color`props를 사용하여 카드 주위에 강조 표시된 테두리를 표시합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  icon
  -  orientation
소품 :
  제목 : Tailwind CSS
  설명: 'Nuxt UI는 최신 Tailwind CSS와 통합되어 상당한 개선을 가져왔습니다.'
  아이콘 : 'i-simple-icons-tailwindcss'
  방향: 수평
  강조 표시:true
  highlightColor: '기본'
슬롯 :
  기본값 :|

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

###  스포트라이트

`spotlight` 및 `spotlight-color`props를 사용하여 마우스 커서를 따라 이동하는 스포트라이트 효과를 표시하고 커서를 놓을 때 테두리를 강조 표시합니다.

::note
스포트라이트 효과는 `to`prop을 사용할 때 오버 효과를 대신합니다. `outline` 변형과 함께 사용하는 것이 가장 좋습니다.
::

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  icon
  -  orientation
소품 :
  제목: Tailwind CSS
  설명: 'Nuxt UI는 최신 Tailwind CSS와 통합되어 상당한 개선을 가져왔습니다.'
  아이콘 : 'i-simple-icons-tailwindcss'
  방향: 수평
  스폿 라이트: True
  spotlightColor: 'primary'
슬롯 :
  기본값 :|

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

: img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::tip
또한 `--spotlight-color` 및 `--spotlight-size`CSS 변수를 사용하여 색상과 크기를 사용자 정의할 수 있습니다.

```vue
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

##  예

###  인증

[User](/docs/components/user) 구성 요소를 `header` 또는 `footer` 슬롯에 사용하여 카드를 평가 이미지로 만듭니다.

::component-example
---
이름: 'page-card-testimonial-example'
---
::

::tip{to="/docs/components/page-columns"}
`PageColumns` 구성 요소를 사용하여 여러 개의 PageCard를 여러 열 레이아웃으로 표시할 수 있습니다.
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
