---
title: AvatarGroup 이미지
description: 그룹에 여러 아바타를 쌓습니다.
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AvatarGroup.vue
---

##  사용

여러 [Avatar](/docs/components/avatar) 을 AvatarGroup 내에서 랩하여 스택합니다.

::component-code
---
상품명 : True
슬롯 :
  기본 값:|

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" />
---
: u-avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
: u-avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard"}
: u-avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin"}
::

###  크기

`size`prop 을 사용하여 모든 아바타의 크기를 변경합니다.

::component-code
---
상품명 : True
소품 :
  크기: xl
슬롯 :
  기본 값:|

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
---
: u-avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
: u-avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
: u-avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

###  Max

`max`prop을 사용하여 표시되는 아바타 수를 제한합니다. 나머지는 `+X`avatar로 표시됩니다.

::component-code
---
상품명 : True
소품 :
  최대 : 2
슬롯 :
  기본 값:|

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
---
: u-avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
: u-avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
:u-avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### 색상: badge{label="4.8+" class="align-text-top"}

`color`prop 을 사용하여 모든 아바타의 색상을 변경합니다.

::component-code
---
상품명 : True
소품 :
  색상: 기본
슬롯 :
  기본 값:|

    <UAvatar alt="Benjamin Canac" />
    <UAvatar alt="Hugo Richard" />
    <UAvatar alt="Sébastien Chopin" />
---
: u-avatar {alt="Benjamin Canac"}
: u-avatar {alt="Hugo Richard"}
: u-avatar {alt="Sébastien Chopin"}
::

##  예제

###  툴팁 포함

각 아바타를 [Tooltip](/docs/components/tooltip)로 감싸면 마우스 위에 툴팁이 표시됩니다.

: component-example {name="avatar-group-tooltip-example"}

### 칩 포함

각 아바타를 [Chip](/docs/components/chip)로 감싸서 아바타 주위에 칩을 표시합니다.

:component-example {name="avatar-group-chip-example"}

###  링크 포함

각 아바타를 [Link](/docs/components/link)로 감싸서 클릭할 수 있도록 합니다.

:component-example {name="avatar-group-link-example"}

### 마스크 사용

CSS 마스크로 아바타를 감싸서 사용자 정의 모양으로 표시합니다.

: component-example {name="avatar-group-mask-example"}

::warning
마스크를 사용할 때 `chip`prop이 제대로 작동하지 않습니다. 마스크 모양에 따라 칩이 잘릴 수 있습니다.
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
