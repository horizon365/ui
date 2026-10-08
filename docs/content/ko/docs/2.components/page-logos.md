---
title: PageLogos 페이지로고
description: '페이지에 표시할 로고 또는 이미지 목록입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

##  사용

PageLogos 구성 요소는 페이지에 로고 또는 이미지 목록을 표시할 수 있는 유연한 방법을 제공합니다.

::component-code
---
축소: true
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
소품 :
  프로젝트:
    - i-simple-icons-github
    - i-simple-icons-discord @ i-simple-icons-discord (으)로 이동
    - i-simple-icons-x
    - i-simple-icons-instagram @ i-simple-icons - 인스타그램
    - i-simple-icons-linkedin
    - i-simple-icons-페이스북
  클래스 : MB-10
---
::

###  제목

`title`prop을 사용하여 로고 위에 제목을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
숨기기 (Hide):
  -  클래스
소품 :
  제목 : "최고의 프론트 엔드 팀으로부터 신뢰받는"
  프로젝트:
    - i-simple-icons-github
    - i-simple-icons-discord @ i-simple-icons-discord (으)로 검색 제한하기.
    - i-simple-icons-x
    - i-simple-icons-instagram @ i-simple-icons - 인스타그램
    - i-simple-icons-linkedin
    - i-simple-icons-페이스북
  클래스: "My-10"
---
::

###  프로젝트

로고는 다음 두 가지 방법으로 표시할 수 있습니다.

1.  `items`prop을 사용하여 로고 목록을 제공합니다. 각 항목은 다음 중 하나가 될 수 있습니다.
  - 아이콘 이름 (예: `i-simple-icons-github`)
  -  이미지에 대한 `src` 및 `alt` 속성이 포함된 개체로, `UAvatar` 구성 요소에 사용됩니다.
2.  기본 슬롯을 사용하여 컨텐츠를 완벽하게 제어

::tabs{class="gap-0"}

::component-example{label="항목 포함"}
---
이름: 'page-logos-with-items'
class: '[&>div]:my-10'
---
::

::component-example{label="슬롯 포함"}
---
이름: 'page-logos-with-slot'
class: '[&>div]:my-10'
---
::

::

###  Marquee

`marquee`prop을 사용하여 로고의 선택 윤곽 효과를 활성화합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - marquee - marquee
숨기기 (Hide):
  -  클래스
소품 :
  제목 : "최고의 프론트 엔드 팀으로부터 신뢰받는"
  선택 윤곽: true
  프로젝트:
    - i-simple-icons-github
    - i-simple-icons-discord @ i-simple-icons-discord (으)로 이동
    - i-simple-icons-x @ i-simple-icons -x 이미지
    - i-simple-icons-instagram @ i-simple-icons - 인스타그램
    - i-simple-icons-linkedin
    - i-simple-icons-페이스북
  클래스: "My-10"
---
::

::note{to="/docs/components/marquee"}
`marquee` 모드를 사용할 때 props를 전달하여 동작을 사용자 정의할 수 있습니다. 자세한 내용은 `Marquee` 구성 요소를 참조하십시오.
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
