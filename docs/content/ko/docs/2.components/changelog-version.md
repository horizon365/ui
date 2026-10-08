---
title: ChangelogVersion 변경
description: '변경 로그에 표시할 사용자 지정 가능한 문서입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersion.vue
---

## 사용

ChangelogVersion   구성   요소 는   제목 ,   설명 ,   이미지   등 을   포함 하 여   사용자   정의   가능 한   콘텐츠 를   가진  `<article>`  요소 를   유연 하 게   표시 할   수   있 는   방법 을   제공 합니다 .

::code-preview

::u-changelog-version
---
제목 :   Introducing   Nuxt   UI   v 3
설명   :' Nuxt   UI   v 3 가   나왔 습니다 ! 1500 개   이상 의   커밋   후 ,   이   주요   재 설계 는   향상 된   접근성 ,   Tailwind   CSS   지원   및   완전 한   Vue   호환 성 을   제공 합니다 .
이미지 :   ' https ://nuxt . com/assets/blog/nuxt - ui - v 3 . png '
날짜   :   2025 - 03 - 12
작성자   :
  -   이름 :   Benjamin   Canac
    설명 :   '@benjamincanac '
    아바타 (Avatar) :
      src :https://github.com/benjamincanac.png
      로드 : Lazy
    대상   :https://x.com/benjamincanac
    target :   _ blank   대상
  -   이름 :   Sebastien   Chopin
    설명 :   "@atinux "
    아바타 (Avatar) :
      src :https://github.com/atinux.png
      로드 : Lazy
    대상   :https://x.com/atinux
    target :   _ blank   대상
  -   이름 :   Hugo   Richard
    설명 :   '@hugorcd '
    아바타 (Avatar) :
      src :https://github.com/hugorcd.png
      로드 : Lazy
    대상   :https://x.com/hugorcd
    target :   _ blank   대상
다음   주소 :   ' https ://nuxt . com/blog/nuxt - ui - v 3 '
대상 :   '_ blank '
클래스 :   ' w - full '
ui . container :   ' max - w - lg '
---
::

::

::tip{to="/docs/components/changelog-versions"}
`ChangelogVersions`  구성   요소 를   사용 하 여   왼쪽 에   표시기   막대 가   있 는   타임 라인 에   여러   변경   로그   버전 을   표시 합니다 .
::

###   제목

`title`prop 을   사용 하 여   ChangelogVersion 의   제목 을   표시 합니다 .

::component-code
---
숨기 기 (Hide) :
  - 클래스
  - ui
  - ui . container  - ui . container  @  UI 010@@  컨테이너
소품   :
  제목 :   Introducing   Nuxt   UI   v 3
  클래스   :   ' w - full '
  ui . container :   ' max - w - lg '
---
::

### 설명

`description`prop 을   사용 하 여   ChangelogVersion 에   대한   설명 을   표시 합니다 .

::component-code
---
상품명   :   True
숨기 기 (Hide) :
  - 클래스
  - ui
  - ui . container  - ui . container
무시하기:
  -  title
소품 :
  제목: Introducing Nuxt UI v3
  설명 :'Nuxt UI v3가 나왔습니다! 1500개 이상의 커밋 후, 이 주요 재설계는 향상된 접근성, Tailwind CSS 지원 및 완전한 Vue 호환성을 제공합니다.
  클래스: 'w-full'
  ui.container: 'max-w-lg'
---
::

###  날짜

`date`prop을 사용하여 ChangelogVersion의 날짜를 표시합니다.

::tip
날짜는 자동으로 [현재 로케일](/docs/getting-started/integrations/i18n/nuxt#locale)로 형식이 지정됩니다. `Date` 개체 또는 문자열을 전달할 수 있습니다.
::

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
  -  ui
  - ui.container - ui.container
무시하기:
  -  title
  -  설명
소품 :
  제목: Introducing Nuxt UI v3
  설명 :'Nuxt UI v3가 나왔습니다! 1500개 이상의 커밋 후, 이 주요 재설계는 향상된 접근성, Tailwind CSS 지원 및 완전한 Vue 호환성을 제공합니다.
  날짜 : 2025-03-12
  클래스 : 'w-full'
  ui.container: 'max-w-lg'
---
::

###  배지

`badge`prop을 사용하여 ChangelogVersion에서 [Badge](/docs/components/badge)를 표시합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
  -  ui
  - ui.container - ui.container
무시하기:
  -  title
  -  Description
  -  date
소품 :
  제목: Introducing Nuxt UI v3
  설명 :'Nuxt UI v3가 나왔습니다! 1500개 이상의 커밋 후, 이 주요 재설계는 향상된 접근성, Tailwind CSS 지원 및 완전한 Vue 호환성을 제공합니다.
  날짜 : 2025-03-12
  사진: "Release"
  클래스 : 'w-full'
  ui.container: 'max-w-lg'
---
::

[Badge](/docs/components/badge#props) 구성 요소에서 모든 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
  -  ui
  - ui.container - ui.container (으)로 이동
무시하기:
  -  title
  -  설명
  -  date
  -  badge. label
  -  badge. color
  - badge.variant - badge.variant - badge.variant @ badge @ badge. variant -  badge. variant -  badge. variant -  badge. @ badge. variant @ 월 25일 @ 월 25일
소품 :
  제목: Introducing Nuxt UI v3
  설명 :'Nuxt UI v3가 나왔습니다! 1500개 이상의 커밋 후, 이 주요 재설계는 향상된 접근성, Tailwind CSS 지원 및 완전한 Vue 호환성을 제공합니다.
  날짜 : 2025-03-12
  뱃지:
    사진: "Release"
    색상: 기본
    변형: 외곽 선
  클래스 : 'w-full'
  ui.container: 'max-w-lg'
---
::

###  사진

`image`prop 을 사용하여 BlogPost 에 이미지를 표시합니다.

::note
[`@nuxt/image`](https://image.nuxt.com/get-started/installation) 가 설치된 경우 기본 `img` 태그 대신 `<NuxtImg>` 구성 요소가 사용됩니다.
::

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
  -  ui
  - ui.container - ui.container @ UI065 컨테이너
무시하기:
  -  title
  -  설명
  -  날짜
소품 :
  제목: Introducing Nuxt UI v3
  설명 :'Nuxt UI v3가 나왔습니다! 1500개 이상의 커밋 후, 이 주요 재설계는 향상된 접근성, Tailwind CSS 지원 및 완전한 Vue 호환성을 제공합니다.
  날짜 : 2025-03-12
  이미지: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  클래스 : 'w-full'
  ui.container: 'max-w-lg'
---
::

###  작성자

`authors`prop을 사용하여 ChangelogVersion에서 [User](/docs/components/user)의 목록을 다음과 같은 속성을 가진 객체 배열로 표시합니다.

-  @ `name?: string` @ {lang="ts-type"}
-  @ `description?: string` @ {lang="ts-type"}
- `avatar?: Omit<AvatarProps, 'size'>`{lang="ts-type"}
- `chip?: boolean | Omit<ChipProps, 'size' | 'inset'>`{lang="ts-type"}
- `size?: UserProps['size']`{lang="ts-type"}
- `orientation?: UserProps['orientation']`{lang="ts-type"}

당신은 [Link](/docs/components/link#props) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `to`, `target` 등.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
  -  ui
  - ui.container - ui.container @UI101 컨테이너
외부:
  -  authors
externalTypes :
  - UserProps [ ]
무시 하 기 :
  - title
  - 설명
  - date
  - 사진
  - authors
소품   :
  제목 :   Introducing   Nuxt   UI   v 3
  설명   :' Nuxt   UI   v 3 가   나왔 습니다 ! 1500 개   이상 의   커밋   후 ,   이   주요   재 설계 는   향상 된   접근성 ,   Tailwind   CSS   지원   및   완전 한   Vue   호환 성 을   제공 합니다 .
  날짜   :   2025 - 03 - 12
  이미지 :   ' https ://nuxt . com/assets/blog/nuxt - ui - v 3 . png '
  작성자   :
    -   이름 :   벤자민   카낙
      설명 :   '@benjamincanac '
      아바타 (Avatar) :
        src :https://github.com/benjamincanac.png
        로드 : Lazy
      대상 :https://x.com/benjamincanac
      target :   _ blank   대상
    - 이름 : Sebastien   Chopin
      설명 :   "@atinux "
      아바타 (Avatar) :
        src :https://github.com/atinux.png
        로드 : Lazy
      대상   :https://x.com/atinux
      target :   _ blank   대상
    -   이름 :   Hugo   Richard
      설명 :   "@hugorcd "
      아바타 (Avatar) :
        src   :https://github.com/hugorcd.png
        로드 : Lazy
      대상   :https://x.com/hugorcd
      target :   _ blank   대상
  클래스   :   ' w - full '
  ui . container :   ' max - w - lg '
---
::

### 링크

당신 은  [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)  구성   요소 에서   모든   속성 을   전달   할   수   있 습니다  `to`,  `target`,  `rel`,   etc .

::component-code
---
상품명   :   True
숨기 기 (Hide) :
  - class
  - ui
  - ui . container  - ui . container
무시 하 기 :
  - title
  - 설명
  -   날짜
  - 사진
  - target
소품 :
  제목: Introducing Nuxt UI v3
  설명 :'Nuxt UI v3가 나왔습니다! 1500개 이상의 커밋 후, 이 주요 재설계는 향상된 접근성, Tailwind CSS 지원 및 완전한 Vue 호환성을 제공합니다.
  날짜 : 2025-03-12
  이미지: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  다음 주소: 'https://nuxt.com/blog/nuxt-ui-v3'
  target: _blank 대상
  클래스: 'w-full'
  ui.container: 'max-w-lg'
---
::

###  표시기

`indicator`prop을 사용하여 왼쪽의 지시자 점을 숨깁니다. 기본값은 `true`입니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  - class 클래스
  -  ui
  - ui.container - ui.container
무시하기:
  -  title
  -  설명
  -  날짜
  -  사진
소품 :
  제목: Introducing Nuxt UI v3
  설명 :'Nuxt UI v3가 나왔습니다! 1500개 이상의 커밋 후, 이 주요 재설계는 향상된 접근성, Tailwind CSS 지원 및 완전한 Vue 호환성을 제공합니다.
  날짜 : 2025-03-12
  이미지: 'https://nuxt.com/assets/blog/nuxt-ui-v3.png'
  지시자: false
  클래스 : 'w-full'
  ui.container: 'max-w-lg'
---
::

::note
`indicator`prop이 `false`일 때, 날짜는 제목 위에 표시됩니다.
::

##  예제

###  바디 슬롯

`body`slot을 사용하여 이미지와 작성자 사이에 사용자 정의 콘텐츠를 표시할 수 있습니다.

- the[Markdown](https://comark.dev/rendering/vue 구성요소 `@comark/vue` 에서 일부 Markdown을 표시합니다.
- the[ContentRenderer](https://content.nuxt.com/docs/components/content-renderer)component from `@nuxt/content` 페이지 또는 목록의 내용을 렌더링합니다.
-  또는 `:u-changelog-version` 구성 요소를 콘텐츠에 직접 사용하여 `body` 슬롯 내에 markdown을 사용하여 Nuxt UI가 사전 스타일 산문 구성 요소를 제공합니다.

::component-example
---
상품명 : True
이름: 'changelog-version-markdown-example'
축소: true
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
