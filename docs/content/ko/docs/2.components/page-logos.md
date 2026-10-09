---
title: PageLogos 페이지로고
description: '페이지에 표시할 로고 또는 이미지 목록입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

## Usage

PageLogos 구성 요소는 페이지에 로고 또는 이미지 목록을 표시할 수 있는 유연한 방법을 제공합니다.

::component-code
---
collapse: true
prettier: true
hide:
  - class
ignore:
  - items
props:
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'mb-10'
---
::

### 제목

`title` Prop을 사용하여 로고 위에 제목을 설정합니다.

::component-code
---
prettier: true
ignore:
  - items
hide:
  - class
props:
  title: 'Trusted by the best front-end teams'
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'my-10'
---
::

### Items 파일

로고는 다음 두 가지 방법으로 표시할 수 있습니다.

1. x`items` prop을 사용하여 로고 목록을 제공합니다. 각 항목은 다음 중 하나일 수 있습니다.
  - An 아이콘 이름 (예: `i-simple-icons-github`)
  - xx`UAvatar` 구성 요소에서 사용되는 이미지에 대한 `src` 및 `alt` 속성을 포함하는 개체
2. 기본 슬롯을 사용하여 콘텐츠를 완전히 제어할 수 있습니다.

::tabs{class="gap-0"}

::component-example{label="항목 포함"}
---
name: 'page-logos-with-items'
class: '[&>div]:my-10'
---
::

::component-example{label="슬롯 포함"}
---
name: 'page-logos-with-slot'
class: '[&>div]:my-10'
---
::

::

### Marquee

`marquee` 소품을 사용하여 로고에 선택 윤곽 효과를 활성화합니다.

::component-code
---
prettier: true
ignore:
  - items
  - marquee
hide:
  - class
props:
  title: 'Trusted by the best front-end teams'
  marquee: true
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'my-10'
---
::

::note{to="/docs/components/marquee"}
`marquee` 모드를 사용할 때 props를 전달하여 동작을 사용자 정의할 수 있습니다. 자세한 내용은 `Marquee` 구성 요소를 참조하십시오.
::

## API

### Props 코드

:component-props

### 슬롯

:component-slots

## Theme 주제

:component-theme

## 변경 로그

:component-changelog
