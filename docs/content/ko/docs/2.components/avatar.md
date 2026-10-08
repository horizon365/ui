---
description: fallback 및 Nuxt Image를 지원하는 img 요소입니다.
category: element
keywords:
  - profile picture
  - user image
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Avatar.vue
---

##  사용

Avatar는 [`@nuxt/image`](https://github.com/nuxt/image) 가 설치되면 `<NuxtImg>` 구성요소를 사용하며, 그렇지 않으면 `img`로 다시 돌아갑니다.

::component-code
---
무시하기:
  -  src
소품 :
  src: 'https://github.com/benjamincanac.png'
---
::

::note
HTML `<img>` 요소에서 `alt`, `loading` 등의 속성을 전달할 수 있습니다.
::

::tip
`@nuxt/image`를 선택 해제하려면 `as`prop:`:as="{ img: 'img' }"`를 사용하십시오.
::

###  Src

`src`prop 을 사용하여 이미지 URL을 설정합니다.

::component-code
---
무시하기:
  -  loading
소품 :
  src: 'https://github.com/benjamincanac.png'
  로드: Lazy
---
::

###  크기

`size`prop을 사용하여 아바타의 크기를 설정합니다.

::component-code
---
무시하기:
  -  src
  -  loading
소품 :
  src: 'https://github.com/benjamincanac.png'
  크기: xl
  로드: Lazy
---
::

::note
`<img>` 요소의 `width` 및 `height` 는 `size`prop 에 따라 자동으로 설정됩니다.
::

###  아이콘

`icon`prop을 사용하여 폴백 [Icon](/docs/components/icon)을 표시합니다.

::component-code
---
소품 :
  아이콘: i-lucide-image
  크기: MD
---
::

###  텍스트

`text`prop 을 사용하여 대체 텍스트를 표시합니다.

::component-code
---
소품 :
  텍스트: '+1'
  크기: md
---
::

###  Alt

아이콘이나 텍스트가 제공되지 않으면 `alt`prop의 **initials** 이 대체 기능으로 사용됩니다.

::component-code
---
소품 :
  본명: Benjamin Canac
  크기: MD
---
::

::note
`alt`prop은 `img` 요소에 `alt` 속성으로 전달됩니다.
::

### 색상: badge{label="4.8+" class="align-text-top"}

`color`prop을 사용하여 아바타의 색상을 변경합니다.

::component-code
---
소품 :
  색상: 기본
  본명: Benjamin Canac
---
::

###  칩

`chip`prop을 사용하여 아바타 주위에 칩을 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  src
  -  loading
  - chip.inset - chip.inset
소품 :
  src: 'https://github.com/benjamincanac.png'
  로드: Lazy
  칩:
    삽입: True
---
::

##  예제

###  툴팁 포함

[Tooltip](/docs/components/tooltip) 구성요소를 사용하여 아바타를 마우스로 이동할 때 툴팁을 표시할 수 있습니다.

:component-example {name="avatar-tooltip-example"}

### 마스크 사용

CSS 마스크를 사용하여 간단한 원이 아닌 사용자 정의 모양으로 아바타를 표시할 수 있습니다.

: component-example {name="avatar-mask-example"}

##  API

### Props 이미지

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<img>`HTML 속성을 지원합니다.
::

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
