---
description: 내용을 가로 또는 세로로 구분합니다.
category: element
keywords:
  - divider
  - hr
  - horizontal rule
links:
  - label: 구분 자
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/separator
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Separator.vue
---

##  사용

구분 기호 구성 요소를 있는 그대로 사용하여 내용을 구분합니다.

::component-code
---
분류: P-8
---
::

###  방향

`orientation`prop을 사용하여 Separator.기본값은 `horizontal`로 변경합니다.

::component-code
---
무시하기:
  -  클래스
클래스: P-8
소품 :
  방향: 수직
  클래스: H-48
---
::

###  레이블

`label`prop을 사용하여 구분 기호 가운데에 레이블을 표시합니다.

::component-code
---
클래스: P-8
소품 :
  사진: "Hello world"
---
::

### 위치: badge{label="4.8+" class="align-text-top"}

`position`prop을 사용하여 Separator. 기본값은 `center`로 변경합니다.

::component-code
---
무시하기:
  - class 클래스
클래스: P-8
소품 :
  위치: 시작
  사진: "Hello World"
---
::

###  아이콘

`icon`prop을 사용하여 구분 기호 가운데에 아이콘을 표시합니다.

::component-code
---
클래스: P-8
소품 :
  아이콘 : 'i-simple-icons-nuxtdotjs'
---
::

###  Avatar

`avatar`prop을 사용하여 구분자 중간에 아바타를 표시합니다.

::component-code
---
상품명 : True
클래스: P-8
무시하기:
  - avatar.loading - avatar.loading
소품 :
  아바타 (Avatar):
    src: 'https://github.com/nuxt.png'
    로드: Lazy
---
::

###  색상

`color`prop을 사용하여 Separator. 기본값은 `neutral`로 변경합니다.

::component-code
---
분류: P-8
소품 :
  색상: 기본
  문자: 솔리드
---
::

###  타입

`type`prop을 사용하여 Separator.default의 유형을 `solid`로 변경합니다.

::component-code
---
분류: P-8
소품 :
  문자: 파선
---
::

###  크기

`size`prop을 사용하여 Separator.기본값을 `xs`로 변경합니다.

::component-code
---
분류: P-8
소품 :
  사이즈: LG
---
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
