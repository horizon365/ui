---
description: 숫자 값 또는 상태를 나타내는 표시기.
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Chip.vue
---

##  사용

칩으로 구성요소를 감싸서 표시기를 표시합니다.

::component-code
---
상품명 : True
슬롯 :
  기본값 :|

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

###  색상

`color`prop을 사용하여 칩의 색상을 변경합니다.

::component-code
---
상품명 : True
소품 :
  색상: 중립
슬롯 :
  기본 값:|

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

###  크기

`size`prop을 사용하여 칩의 크기를 변경합니다.

::component-code
---
상품명 : True
소품 :
  크기: 3xl
슬롯 :
  기본 값:|

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

###  텍스트

`text`prop을 사용하여 칩 텍스트를 설정합니다.

::component-code
---
상품명 : True
소품 :
  문자: 5
  크기: 3xl
슬롯 :
  기본값 :|

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

###  위치

`position`prop 을 사용하여 칩의 위치를 변경합니다.

::component-code
---
상품명 : True
소품 :
  사진: "bottom left"
슬롯 :
  기본 값:|

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Inset 이미지

`inset`prop을 사용하여 컴포넌트 내부에 Chip을 표시합니다. 이 기능은 반올림된 컴포넌트를 처리할 때 유용합니다.

::component-code
---
상품명 : True
소품 :
  삽입: True
슬롯 :
  기본값 :|

    <UAvatar src="https://github.com/benjamincanac.png" loading="lazy" />
---
:u-avatar {src="https://github.com/benjamincanac.png" loading="lazy"}
::

### 독립 실행형

`standalone`prop을 `inset`prop과 함께 사용하여 Chip 인라인을 표시합니다.

::component-code
---
소품 :
  독립형: true
  삽입: True
---
::

::note
[`CommandPalette`](/docs/components/command-palette)[`InputMenu`](/docs/components/input-menu))))))))[](/docs/components/input-menu))))))[`Select`](/docs/components/select) 또는 [`SelectMenu`](/docs/components/select-menu) 구성 요소 예를 들어 .
::

##  예

### 가시성 제어

칩의 가시성은 `show`prop을 사용하여 제어할 수 있습니다.

: component-example {name="chip-show-example"}

::note
이 예제에서 Chip은 상태별로 색상을 가지며 상태가 `offline`가 아닐 때 표시됩니다.
::

##  API

### Props 이미지

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

### Emits @ 에미츠

:구성요소 - 방출

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
