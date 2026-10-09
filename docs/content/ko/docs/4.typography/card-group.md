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

## Usage

`card` 구성 요소를 `card-group` 구성 요소로 래핑하여 그리드 레이아웃에서 함께 그룹화합니다.

::code-preview

:::card-group{class="w-full my-0"}

::card
---
title: Dashboard
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/dashboard
target: _blank
---
다중 열 레이아웃이 있는 대시보드입니다.
::

::card
---
title: SaaS
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/saas
target: _blank
---
랜딩, 가격, 문서 및 블로그가 포함된 템플릿입니다.
::

::card
---
title: Docs
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/docs
target: _blank
---
`@nuxt/content`를 사용하는 문서
::

::card
---
title: Landing
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/landing
target: _blank
---
시작점으로 사용할 수 있는 랜딩 페이지입니다.
::

:::

#code

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

## API 사용

### Props 코드

:component-props{prose}

### Slots

:component-slots{prose}

## Theme 테마

:component-theme{prose}

## 변경 로그

:component-changelog{prefix="prose"}
