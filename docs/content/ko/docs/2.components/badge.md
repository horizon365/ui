---
description: 상태 또는 범주를 나타내는 짧은 텍스트입니다.
category: element
keywords:
  - tag
  - pill
  - label
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Badge.vue
---

##  사용

기본 슬롯을 사용하여 배지의 레이블을 설정합니다.

::component-code
---
슬롯 :
  기본 값: 배지
---
::

###  레이블

`label`prop을 사용하여 배지의 레이블을 설정합니다.

::component-code
---
소품 :
  상표: Badge
---
::

###  색상

`color`prop을 사용하여 배지 색상을 변경합니다.

::component-code
---
소품 :
  색상: 중립
슬롯 :
  기본 값: 배지
---
::

###  변형

`variant`props 를 사용하여 배지의 변형을 변경합니다.

::component-code
---
소품 :
  색상: 중립
  변형: 윤곽선
슬롯 :
  기본값: 배지
---
::

###  크기

`size`prop을 사용하여 배지 크기를 변경합니다.

::component-code
---
소품 :
  크기: xl
슬롯 :
  기본값: 배지
---
::

###  Icon

`icon`prop을 사용하여 배지 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
소품 :
  아이콘 : i-lucide-rocket
  크기: MD
  색상: 기본
  변형: 솔리드
슬롯 :
  기본값: 배지
---
::

`leading` 및 `trailing`props를 사용하여 아이콘 위치를 설정하거나 `leading-icon` 및 `trailing-icon`props를 사용하여 각 위치에 대해 다른 아이콘을 설정합니다.

::component-code
---
소품 :
  trailingIcon: i-lucide-arrow-right 이미지
  크기: MD
슬롯 :
  기본값: 배지
---
::

###  Avatar

`avatar`prop을 사용하여 배지 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  - avatar.loading - avatar.loading (으)로 이동
소품 :
  아바타 (Avatar):
    src: 'https://github.com/nuxt.png'
    로드: Lazy
  크기: md
  색상: 중립
  변형: 윤곽선
슬롯 :
  기본값 :|

    배지 (Badge)
---
::

##  예제

### `class`prop

`class`prop 을 사용하여 배지의 기본 스타일을 재정의합니다.

::component-code
---
소품 :
  class: 'font-bold rounded-full' (글꼴 굵게 둥근 모양)
슬롯 :
  기본값: 배지
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
