---
title: 프로세카드 (ProseCard)
description: '선택적 링크 및 탐색을 사용하여 강조 표시된 컨텐츠 블록을 만듭니다.'
category: components
navigation.title: Card
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Card.vue
---

## 사용

`card`  구성   요소 의   기본   슬롯 에서   markdown 을   사용 하 여   콘텐츠 를   강조   표시 합니다 .

`title``icon`  및  `color`props 를   사용 하 여   사용자   정의 할   수   있 습니다 .   또한  [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)  또는  [PH 06)  구성   요소 에서   속성 을   전달 할   수   있 습니다 .

::component-code{slug="card" prose}
---
숨기 기 (Hide) :
  - 클래스
무시 하 기 :
  - target
소품   :
  클래스 :   ' my - 0   w - 96 '
  제목   :   Startup
  아이콘 :   i - lucide - users
  색상 :   기본
  https ://  https ://nuxt.lemonsqueezy.com'
  대상 :   '_ blank '
슬롯   :
  default :   소규모   팀 ,   스타트업   및   최대   5 명 의   개발자 가   있 는   에이전시 에   가장   적합 합니다 .
---

최대   5 명 의   개발자 가   있 는   소규모   팀 ,   스타트업   및   에이전시 에   가장   적합 합니다 .
::

## API

### Props

:   component - props  {prose}

### 슬롯

:   component - slots  {prose}

##   테마

:   component - theme  {prose}

## Changelog

: component-changelog{prefix="prose"}
