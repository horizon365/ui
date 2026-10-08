---
description: 키보드 키를 표시하는 kbd 요소입니다.
category: element
keywords:
  - keyboard shortcut
  - hotkey
  - keybinding
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Kbd.vue
---

##  사용

기본 슬롯을 사용하여 Kbd 값을 설정합니다.

::component-code
---
슬롯 :
  기본값: K
---
::

###  값

`value`prop을 사용하여 Kbd 값을 설정합니다.

::component-code
---
소품 :
  값: k
---
::

[`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts)컴포블을 통해 전달되는 특수 키를 `value`prop에 전달할 수 있습니다. 예를 들어, `meta`키는 macOS에서는 `⌘`로, 다른 플랫폼에서는 `Ctrl`로 표시됩니다.

::component-code
---
소품 :
  값: 메타
프로젝트:
  값 :
    -  meta
    -  win
    -  명령
    -  shift
    -  ctrl
    -  옵션
    -  alt
    -  enter
    -  삭제
    - backspace @ 백스페이스
    - escape @ 탈출
    -  tab
    -  capslock
    -  arrowup
    - arrowright @ 아로우라이트
    -  arrowdown
    -  arrowleft
    -  pageup
    - pagedown @pagedown
    -  home
    -  끝
---
::

###  색상

`color`prop을 사용하여 Kbd의 색상을 변경합니다.

::component-code
---
소품 :
  색상: 중립
슬롯 :
  기본값: K
---
::

###  변형

`variant`prop을 사용하여 Kbd의 변형을 변경합니다.

::component-code
---
소품 :
  색상: 중립
  변형: 본체
슬롯 :
  기본값: K
---
::

###  크기

`size`prop을 사용하여 Kbd의 크기를 변경합니다.

::component-code
---
소품 :
  사이즈: LG
슬롯 :
  기본값: K
---
::

##  예제

### `class`prop

`class`prop 을 사용하여 배지의 기본 스타일을 재정의합니다.

::component-code
---
소품 :
  class: 'font-bold rounded-full' (글꼴 굵게 둥근 모양)
  변형: 미묘한
슬롯 :
  기본값: K
---
::

##  API

### Props 이미지

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
