---
description: '이름, 설명 및 아바타와 함께 사용자 정보를 표시합니다.'
category: data
keywords:
  - profile
  - person
  - account
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/User.vue
---

##  사용

###  이름

`name`prop을 사용하여 사용자의 이름을 표시합니다.

::component-code
---
소품 :
  이름: John Doe
---
::

###  설명

`description`prop을 사용하여 사용자에 대한 설명을 표시합니다.

::component-code
---
소품 :
  이름: John Doe
  사진: "Software Engineer"
---
::

###  Avatar

`avatar`prop을 사용하여 [Avatar](/docs/components/avatar) 구성요소를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  name
  -  설명
소품 :
  이름: John Doe
  설명: "Software Engineer"
  아바타 (Avatar):
    src: 'https://i.pravatar.cc/150?u=john-doe'
    로드: Lazy
    아이콘: i-lucide-image
---
::

::collapsible{name="all avatar properties"}

::component-props
---
제목: Avatar
무시하기:
  -  크기
  -  as
---
::

::

###  칩

`chip`prop을 사용하여 [Chip](/docs/components/chip) 구성요소를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  name
  -  설명
  -  avatar. src
프로젝트:
  chip.color:
    -  기본
    -  secondary
    -  성공
    -  info
    -  경고
    -  오류
    -  neutral
  chip.position:
    - 왼쪽 위
    -  오른쪽 위
    - 왼쪽 아래
    -  오른쪽 아래
소품 :
  이름: John Doe
  사진: "Software Engineer"
  avatar.src: 'https://i.pravatar.cc/150?u=john-doe'
  칩 :
    색상 : primary
    위치:오른쪽 위
---
::

::collapsible{name="all chip properties"}

::component-props
---
이름: Chip
무시하기:
  -  as
  -  크기
  -  독립 형
---
::

::

###  크기

`size`prop을 사용하여 사용자 아바타 및 텍스트의 크기를 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  이름
  -  설명
  -  avatar. src
  -  칩
소품 :
  이름: John Doe
  사진: "Software Engineer"
  avatar.src: 'https://i.pravatar.cc/150?u=john-doe'
  칩 : True
  크기: xl
---
::

###  방향

방향을 변경하려면 `orientation`prop을 사용합니다. 기본값은 `horizontal`입니다.

::component-code
---
상품명 : True
무시하기:
  -  avatar. src
소품 :
  방향: 수직
  이름: John Doe
  설명: "Software Engineer"
  avatar.src: 'https://i.pravatar.cc/150?u=john-doe'
---
::

###  링크

당신은 [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) 구성 요소에서 모든 속성을 전달할 수 있습니다 `to`, `target`, `rel`, etc.

::component-code
---
상품명 : True
무시하기:
  -  이름
  -  설명
  -  avatar. src
  -  target
소품 :
  다음 주소: 'https://github.com/benjamincanac'
  대상: '_blank'
  이름 : Benjamin Canac
  설명: "Software Engineer"
  avatar.src: 'https://github.com/benjamincanac.png'
---
::

::note
`NuxtLink` 구성 요소는 `User` 구성 요소에 전달된 다른 모든 속성을 상속합니다.
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
