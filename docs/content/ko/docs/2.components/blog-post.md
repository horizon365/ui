---
title: 블로그포스트 (BlogPost)
description: '블로그 페이지에 표시할 사용자 정의 가능한 기사입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPost.vue
---

## 사용

BlogPost   구성   요소 는   제목 ,   설명 ,   이미지   등 을   포함 하 여   사용자   정의   가능 한   콘텐츠 를   가진  `<article>`  요소 를   유연 하 게   표시 할   수   있 는   방법 을   제공 합니다 .

::code-preview

::u-blog-post
---
제목   :   Introducing   Nuxt   Icon   v 1
Nuxt   Icon   v 1   -   Nuxt   프로젝트 를 위한   현대 적 이 고   다재다능 하 며   사용자   정의   가능 한   아이콘   솔루션 입니다 . Discover   Nuxt   Icon   v 1   -   a   modern ,   versatile ,   and   customizable   icon   solution   for   your   Nuxt   projects .
이미지   :   ' https ://nuxt . com/assets/blog/nuxt - icon/cover . png '
날짜   :   2024 - 11 - 25
작성자   :
  -   이름 :   Anthony   Fu
    모델   번호 : antfu 7
    아바타 (Avatar) :
      src :https://github.com/antfu.png
      로드 : Lazy
    대상   :https://github.com/antfu
    target :   _ blank   대상
주소 :   ' https ://nuxt . com/blog/nuxt - icon - v 1 - 0 '
대상 :   '_ blank '
클래스 :   ' W - 96 '
---
::

::

::tip{to="/docs/components/blog-posts"}
`BlogPosts`  구성   요소 를   사용 하 여   응답 형   그리드   레이아웃 에   여러   블로그   게시물 을   표시 합니다 .
::

### 제목

`title`prop 을   사용 하 여   BlogPost 의   제목 을   표시 합니다 .

::component-code
---
상품명   :   True
숨기 기 (Hide) :
  - 클래스
소품   :
  제목   :   Introducing   Nuxt   Icon   v 1
  클래스: 'W-96'
---
::

###  설명

`description`prop 을 사용하여 BlogPost 설명을 표시합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
소품 :
  제목 : Introducing Nuxt Icon v1
  Nuxt Icon v1 - Nuxt 프로젝트를위한 현대적이고 다재다능하며 사용자 정의 가능한 아이콘 솔루션입니다.Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.
  클래스: 'w-96'
---
::

###  날짜

`date`prop을 사용하여 BlogPost의 날짜를 표시합니다.

::tip
날짜는 자동으로 [현재 로케일](/docs/getting-started/integrations/i18n/nuxt#locale)로 형식이 지정됩니다. `Date` 개체 또는 문자열을 전달할 수 있습니다.
::

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  제목
  -  설명
소품 :
  제목 : Introducing Nuxt Icon v1
  Nuxt Icon v1 - Nuxt 프로젝트를위한 현대적이고 다재다능하며 사용자 정의 가능한 아이콘 솔루션입니다.Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.
  날짜 : 2024-11-25
  클래스: 'W-96'
---
::

###  배지

`badge`prop을 사용하여 BlogPost에 [Badge](/docs/components/badge)를 표시합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
소품 :
  제목 : Introducing Nuxt Icon v1
  Nuxt Icon v1 - Nuxt 프로젝트를위한 현대적이고 다재다능하며 사용자 정의 가능한 아이콘 솔루션입니다.Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.
  사진: "Release"
  클래스: 'w-96'
---
::

[Badge](/docs/components/badge#props) 구성 요소에서 모든 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  badge. label
  -  badge. color
  - badge.variant - badge.variant - badge.variant - badge. variant - badge. 변수
소품 :
  제목: Introducing Nuxt Icon v1
  Nuxt Icon v1 - Nuxt 프로젝트를위한 현대적이고 다재다능하며 사용자 정의 가능한 아이콘 솔루션입니다.Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.
  뱃지:
    사진: "release"
    색상: 기본
    변형: 솔리드
  클래스: 'W-96'
---
::

###  사진

`image`prop을 사용하여 BlogPost에 이미지를 표시합니다.

::note
[`@nuxt/image`](https://image.nuxt.com/get-started/installation) 이(가) 설치된 경우 기본 `img` 태그 대신 `<NuxtImg>` 구성 요소가 사용됩니다.
::

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  date
소품 :
  제목: Introducing Nuxt Icon v1
  Nuxt Icon v1 - Nuxt 프로젝트를위한 현대적이고 다재다능하며 사용자 정의 가능한 아이콘 솔루션입니다.Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.
  이미지: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  날짜 : 2024-11-25
  클래스: 'W-96'
---
::

###  작성자

`authors`prop을 사용하여 BlogPost에 [User](/docs/components/user)의 목록을 다음과 같은 속성을 가진 객체 배열로 표시합니다.

- `name?: string` {lang="ts-type"}
-  @ `description?: string` @ @ {lang="ts-type"} @
- `avatar?: Omit<AvatarProps, 'size'>`{lang="ts-type"}
-  @ `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>` @ {lang="ts-type"}
-  @ `size?: UserProps['size']` @ @ {lang="ts-type"} @
-  @ `orientation?: UserProps['orientation']` @ {lang="ts-type"}

당신은 [Link](/docs/components/link#props) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `to`, `target` 등.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
외부:
  -  작성자
externalTypes:
  -  UserProps []
무시하기:
  -  title
  -  설명
  -  date
  -  사진
  -  작성자
소품 :
  제목 : Introducing Nuxt Icon v1
  Nuxt Icon v1 - Nuxt 프로젝트를위한 현대적이고 다재다능하며 사용자 정의 가능한 아이콘 솔루션입니다.Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.
  이미지: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  날짜 : 2024-11-25
  작성자   :
    - 이름 :   Anthony   Fu
      모델   번호 : antfu 7
      아바타 (Avatar) :
        src   :https://github.com/antfu.png
        로드 : Lazy
      대상   :https://github.com/antfu
      target :   _ blank   대상
  클래스 :   ' W - 96 '
---
::

`authors`prop 에   하나   이상 의   항목 이   있 는   경우 ,  [AvatarGroup](/docs/components/avatar-group)  컴포넌트 가   사용 됩니다 .

::component-code
---
상품명   :   True
숨기 기 (Hide) :
  - 클래스
외부 :
  - authors
externalTypes :
  - UserProps [ ]
무시 하 기 :
  - title
  - 설명
  - date
  - 사진
  - 작성자
소품   :
  제목   :   Introducing   Nuxt   Icon   v 1
  Nuxt   Icon   v 1   -   Nuxt   프로젝트 를 위한   현대 적 이 고   다재다능 하 며   사용자   정의   가능 한   아이콘   솔루션 입니다 . Discover   Nuxt   Icon   v 1   -   a   modern ,   versatile ,   and   customizable   icon   solution   for   your   Nuxt   projects .
  이미지 :   ' https ://nuxt . com/assets/blog/nuxt - icon/cover . png '
  날짜   :   2024 - 11 - 25
  작성자   :
    -   이름 :   Anthony   Fu
      모델   번호 : antfu 7
      아바타 (Avatar) :
        src :https://github.com/antfu.png
        로드 : Lazy
      대상 :https://github.com/antfu
      target :   _ blank   대상
    -   이름 :   벤자민   카낙
      모델   번호 : benjamincanac
      아바타 (Avatar) :
        src   :https://github.com/benjamincanac.png
        로드 : Lazy
      대상   :https://github.com/benjamincanac
      target :   _ blank   대상
  클래스 :   ' W - 96 '
---
::

### 링크

당신 은  [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)  구성   요소 에서   모든   속성 을   전달 할   수   있 습니다  `to`,  `target`,  `rel`,   etc .

::component-code
---
상품명   :   True
숨기 기 (Hide) :
  - 클래스
무시 하 기 :
  -  title
  -  설명
  -  date
  -  사진
  -  target
소품 :
  제목 : Introducing Nuxt Icon v1
  Nuxt Icon v1 - Nuxt 프로젝트를위한 현대적이고 다재다능하며 사용자 정의 가능한 아이콘 솔루션입니다.Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.
  이미지: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  날짜 : 2024-11-25
  주소: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  target: _blank 대상
  클래스: 'w-96'
---
::

###  Variant

`variant`prop을 사용하여 BlogPost의 스타일을 변경합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  date
  -  사진
  - 에 대하여
  -  target
소품 :
  제목 : Introducing Nuxt Icon v1
  Nuxt Icon v1 - Nuxt 프로젝트를위한 현대적이고 다재다능하며 사용자 정의 가능한 아이콘 솔루션입니다.Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.
  이미지: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  날짜 : 2024-11-25
  주소: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  target: _blank 대상
  변형: 벌거벗 은
  클래스: 'w-96'
---
::

::note
스타일링은 당신이 제공하는 `to`prop 또는 `image`와 다른 wether가 될 것입니다.
::

###  방향

BlogPost 방향을 변경하려면 `orientation`prop을 사용합니다. 기본값은 `vertical`입니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  date
  -  사진
  - 에 대하여
  -  target
소품 :
  제목 : Introducing Nuxt Icon v1
  Nuxt Icon v1 - Nuxt 프로젝트를위한 현대적이고 다재다능하며 사용자 정의 가능한 아이콘 솔루션입니다.Discover Nuxt Icon v1 - a modern, versatile, and customizable icon solution for your Nuxt projects.
  이미지 : 'https://nuxt.com/assets/blog/nuxt-icon/cover.png'
  날짜 : 2024-11-25
  주소: 'https://nuxt.com/blog/nuxt-icon-v1-0'
  target: _blank 대상
  방향: 수평
  변형: 윤곽선
---
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
