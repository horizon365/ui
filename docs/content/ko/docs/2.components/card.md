---
description: 카드의 내용을 머리글, 본문 및 바닥글과 함께 표시합니다.
category: element
keywords:
  - panel
  - box
  - container
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Card.vue
---

##  사용

`header``default` 및 `footer` 슬롯을 사용하여 카드에 콘텐츠를 추가합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
소품 :
  클래스 : 'w-full'
슬롯 :
  헤더 (Header):|

    <Placeholder class="h-8" />

  기본 값:|

    <Placeholder class="h-32" />

  바닥글:|

    <Placeholder class="h-8" />
---

#헤더
: placeholder{class="h-8"}

#기본 값
: placeholder{class="h-32"}

# 바닥글
: placeholder{class="h-8"}
::

###  제목: badge{label="4.7+" class="align-text-top"}

`title`prop을 사용하여 카드 헤더의 제목을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  클래스
소품 :
  제목 : "Card with title"
  클래스 : 'w-full'
슬롯 :
  기본값 :|

    <Placeholder class="h-32" />
---

#기본 값
: placeholder{class="h-32"}
::

### 설명: badge{label="4.7+" class="align-text-top"}

`description`prop을 사용하여 카드의 헤더에 대한 설명을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  class
소품 :
  사진: "Card with Description"
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit" (로렘 ipsum dolor sit amet, consectetur adipiscing elit)" 이라는 문구가 있다.
  클래스 : 'w-full'
슬롯 :
  기본 값:|

    <Placeholder class="h-32" />
---

#기본 값
: placeholder{class="h-32"}
::

###  변형

`variant`prop 을 사용하여 카드의 변형을 변경합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
소품 :
  변형: 미묘한
  클래스: 'w-full'
슬롯 :
  헤더 (Header):|

    <Placeholder class="h-8" />

  기본값 :|

    <Placeholder class="h-32" />

  바닥글:|

    <Placeholder class="h-8" />
---

# 헤더
: placeholder{class="h-8"}

#기본 값
: placeholder{class="h-32"}

# 바닥글
: placeholder{class="h-8"}
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
