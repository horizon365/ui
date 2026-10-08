---
title: ProseCallout 구문 콜아웃
description: '눈에 띄는 색상의 상자와 아이콘으로 중요한 정보를 강조합니다.'
category: components
navigation.title: Callout
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Callout.vue
---

##  사용

`callout` 구성 요소의 기본 슬롯에서 markdown을 사용하여 콘텐츠에 눈길을 끄는 컨텍스트를 추가합니다.

::component-code{slug="callout" prose}
---
소품 :
  클래스: 'w-full my-0'
숨기기 (Hide):
  -  클래스
슬롯 :
  기본값: 전체 **markdown**지원을 포함하는 `callout`입니다.
---
::

###  Icon

`icon`prop을 사용하여 콘텐츠 옆에 아이콘을 표시합니다.

::component-code{slug="callout" prose}
---
소품 :
  아이콘 : i-lucide-square-play
  클래스: 'w-full my-0'
숨기기 (Hide):
  -  클래스
슬롯 :
  기본값: 아이콘이 있는 `callout`입니다.
---
::

###  색상

`color`prop을 사용하여 콜아웃 색상을 변경합니다.

::component-code{slug="callout" prose}
---
무시하기:
  -  icon
소품 :
  아이콘: i-lucide-info
  색상: 정보
  클래스: 'w-full my-0'
숨기기 (Hide):
  -  클래스
슬롯 :
  기본값: 사용자 정의 색상이 있는 `callout`입니다.
---
::

###  링크

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) 구성요소(예: `to` 및 `target` )의 속성을 전달하여 콜아웃을 링크로 만들 수 있습니다.

::component-code{slug="callout" prose}
---
숨기기 (Hide):
  -  클래스
무시하기:
  -  icon
  -  target
소품 :
  아이콘 : i-lucide-square-play
  to: '/docs/getting-started/installation/nuxt' 로 이동
  색상: 중립
  클래스: 'w-full my-0'
슬롯 :
  default: 프로젝트에 `@nuxt/ui`를 설치하는 방법에 대해 알아봅니다.
---
::

##  바로가기

또한 미리 정의된 아이콘과 색상이 있는 `note`, `tip``warning` 및 `caution` 바로 가기를 사용할 수 있습니다.

::code-preview

:::div{class="flex flex-col gap-4 w-full"}

::note{class="w-full my-0"}
여기 추가 정보가 있습니다.
::

::tip{class="w-full my-0"}
여기 도움이 되는 제안이 있습니다.
::

::warning{class="w-full my-0"}
예상치 못한 결과가 발생할 수 있으므로 이 작업을 수행하는 데 주의하십시오.
::

::caution{class="w-full my-0"}
이 작업은 취소할 수 없습니다.
::

:::

# 코드

```mdc
::note
Here's some additional information.
::

::tip
Here's a helpful suggestion.
::

::warning
Be careful with this action as it might have unexpected results.
::

::caution
This action cannot be undone.
::
```

::

##  API

###  Props

: component-props {prose}

###  슬롯

: component-slots {prose}

##  테마

:component-theme {prose}

##  Changelog

: component-changelog{prefix="prose"}
