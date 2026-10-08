---
description: '무한 스크롤 내용을 만드는 구성 요소입니다.'
category: data
keywords:
  - ticker
  - scroller
  - carousel
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Marquee.vue
---

##  사용

콘텐츠와 함께 기본 슬롯을 사용하여 무한 스크롤 애니메이션을 만듭니다.

::component-code
---
상품명 : True
슬롯 :
  기본 값:|

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

::tip
사용자가 모션을 줄이는 것을 선호하면 애니메이션이 자동으로 비활성화되고 대신 정적으로 내용이 나타납니다.
::

### Hover에서 일시 중지

`pause-on-hover`prop을 사용하여 사용자가 콘텐츠 위에 마우스를 놓을 때 애니메이션을 일시 중지합니다.

::component-code
---
상품명 : True
소품 :
  pauseOnHover: true : puseOnHover : true
슬롯 :
  기본값 :|

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

###  반전

`reverse`prop 을 사용하여 애니메이션의 방향을 반대로 바꿉니다.

::component-code
---
상품명 : True
소품 :
  반전: true
슬롯 :
  기본값 :|

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

###  방향

`orientation`prop을 사용하여 스크롤 방향을 변경합니다.

::component-code
---
상품명 : True
클래스: H-96
소품 :
  방향: 수직
슬롯 :
  기본 값:|

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

###  반복

`repeat`prop을 사용하여 애니메이션에서 내용이 반복되는 횟수를 지정합니다.

::component-code
---
상품명 : True
소품 :
  반복 : 6
슬롯 :
  기본 값:|

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

###  오버레이

`overlay`prop 을 사용하여 선택 윤곽의 가장자리에서 그라디언트 오버레이를 제거합니다.

::component-code
---
상품명 : True
소품 :
  오버레이: false
슬롯 :
  기본값 :|

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

##  예제

###  평가

`Marquee` 구성 요소를 사용하여 평가에 대한 무한 스크롤 애니메이션을 만듭니다.

::component-example{label="항목 사용"}
---
상품명 : True
사진: "marquee-testimonials"
축소: true
overflowHidden: true
클래스 : 'px-0'
---
::

###  스크린샷

`Marquee` 구성 요소를 사용하여 스크린 샷에 대한 무한 스크롤 애니메이션을 만듭니다.

::component-example{label="스크린샷 사용Using Screenshots"}
---
상품명 : True
제목: "marquee-screenshots"
축소: true
overflowHidden: true
클래스 : "!p-0"
---
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
