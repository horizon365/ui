---
title: ProseCardGroup (프로세카드그룹)
description: '더 나은 콘텐츠 표현을 위해 반응형 그리드 레이아웃에 여러 카드를 구성합니다.'
category: components
navigation.title: CardGroup
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CardGroup.vue
---

## 사용

`card`  구성   요소 를  `card-group`  구성   요소 로   래핑 하 여   그리드   레이아웃 으로   함께   그룹 화 합니다 .

::code-preview

:::card-group{class="w-full my-0"}

::card
---
제목   :   Dashboard
아이콘   :   i - simple - icons - github
대상 :https://github.com/nuxt-ui-templates/dashboard
target :   _ blank   대상
---
다중   열   레이아웃 이   있 는   대시보드 입니다 .
::

::card
---
제목 :   SaaS
아이콘 :   i - simple - icons - github
대상 :https://github.com/nuxt-ui-templates/saas
target :   _ blank   대상
---
랜딩 ,   가격 ,   문서   및   블로그 가   포함 된   템플 릿 입니다 .
::

::card
---
제목   :   Docs
아이콘 :   i - simple - icons - github
대상 :https://github.com/nuxt-ui-templates/docs
target :   _ blank   대상
---
문서  `@nuxt/content`
::

::card
---
제목   :   Landing
아이콘   :   i - simple - icons - github
대상   :https://github.com/nuxt-ui-templates/landing
target :   _ blank   대상
---
시작점 으로   사용 할   수   있 는   랜딩   페이지 입니다 .
::

:::

#   코드

```mdc
::card-group

::card
---
title: Dashboard
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/dashboard
target: _blank
---
A dashboard with multi-column layout.
::

::card
---
title: SaaS
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/saas
target: _blank
---
A template with landing, pricing, docs and blog.
::

::card
---
title: Docs
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/docs
target: _blank
---
A documentation with `@nuxt/content`.
::

::card
---
title: Landing
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/landing
target: _blank
---
A landing page you can use as starting point.
::

::
```

::

## API

### Props

: component-props {prose}

###  슬롯

: component-slots {prose}

##  테마

:component-theme {prose}

##  Changelog

: component-changelog{prefix="prose"}
