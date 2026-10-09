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

## Usage

콘텐츠와 함께 기본 슬롯을 사용하여 무한 스크롤 애니메이션을 만듭니다.

::component-code
---
prettier: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

::tip
사용자가 모션을 줄이는 것을 선호하면 애니메이션이 자동으로 비활성화되고 대신 정적으로 내용이 나타납니다.
::

### Hover 에서 일시 중지

`pause-on-hover` 소품을 사용하여 사용자가 내용 위에 마우스를 놓을 때 애니메이션을 일시 중지합니다.

::component-code
---
prettier: true
props:
  pauseOnHover: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### 역

`reverse` 소품을 사용하여 애니메이션의 방향을 반전합니다.

::component-code
---
prettier: true
props:
  reverse: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### 방향 지정

`orientation` Prop을 사용하여 스크롤 방향을 변경합니다.

::component-code
---
prettier: true
class: 'h-96'
props:
  orientation: 'vertical'
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### 반복

`repeat` 소품을 사용하여 애니메이션에서 내용이 반복되는 횟수를 지정합니다.

::component-code
---
prettier: true
props:
  repeat: 6
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### 오버레이

`overlay` 소품을 사용하여 선택 윤곽의 가장자리에서 그라디언트 오버레이를 제거합니다.

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

## 예제

### 리뷰

`Marquee` 구성 요소를 사용하여 평가에 대한 무한 스크롤 애니메이션을 만들 수 있습니다.

::component-example{label="항목 사용"}
---
prettier: true
name: 'marquee-testimonials'
collapse: true
overflowHidden: true
class: 'px-0'
---
::

### Screenshots 이미지

`Marquee` 구성 요소를 사용하여 스크린샷의 무한 스크롤 애니메이션을 만듭니다.

::component-example{label="스크린샷 사용Using Screenshots"}
---
prettier: true
name: 'marquee-screenshots'
collapse: true
overflowHidden: true
class: '!p-0'
---
::

## API

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
