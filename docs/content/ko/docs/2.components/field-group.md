---
title: 필드 그룹(FieldGroup)
description: 여러 단추와 같은 요소를 함께 그룹화합니다.
category: element
keywords:
  - segmented control
  - toggle group
  - button group
  - input group
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FieldGroup.vue
---

##  사용

FieldGroup 내에서 여러 [Button](PH03) 줄바꿈하여 그룹화합니다.

::component-code
---
상품명 : True
슬롯 :
  기본값 :|

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
: u-button {color="neutral" variant="subtle" label="Button"}
: u-button {color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

###  크기

`size`prop을 사용하여 모든 버튼의 크기를 변경합니다.

::component-code
---
상품명 : True
소품 :
  크기: xl
슬롯 :
  기본 값:|

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
: u-button {color="neutral" variant="subtle" label="Button"}
: u-button {color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

###  방향

버튼의 방향을 변경하려면 `orientation`prop을 사용합니다. 기본값은 `horizontal`입니다.

::component-code
---
상품명 : True
소품 :
  방향: 세로
슬롯 :
  기본 값:|

    <UButton color="neutral" variant="subtle" label="Submit" />
    <UButton color="neutral" variant="outline" label="Cancel" />
---
: u-button {color="neutral" variant="subtle" label="Submit"}
: u-button {color="neutral" variant="outline" label="Cancel"}
::

##  예

###  입력으로

[ Input ](/docs/components/input) InputMenu ](/docs/components/input-menu)[ 선택 ]())))[[]()))))) 선택 [))[)[[)[]()) 선택 @@@@@

::component-code
---
상품명 : True
슬롯 :
  기본 값:|

    <UInput color="neutral" variant="outline" placeholder="Enter token" />

    <UButton color="neutral" variant="subtle" icon="i-lucide-clipboard" />
---
: u-input {color="neutral" variant="outline" placeholder="Enter token"}
: u 버튼 {color="neutral" variant="subtle" icon="i-lucide-clipboard"}
::

###  툴팁 사용

필드 그룹 내에서 [Tooltip](/docs/components/tooltip)를 사용할 수 있습니다.

:component-example {name="field-group-tooltip-example"}

###  드롭다운 메뉴 포함

필드 그룹 내에서 [DropdownMenu](/docs/components/dropdown-menu)를 사용할 수 있습니다.

:component-example {name="field-group-dropdown-example"}

### 배지 포함

필드 그룹 내에서 [Badge](/docs/components/badge)를 사용할 수 있습니다.

:component-example {name="field-group-badge-example"}

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
