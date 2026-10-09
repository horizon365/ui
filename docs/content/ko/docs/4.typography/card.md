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

## Usage

`card` 구성 요소의 기본 슬롯에서 markdown을 사용하여 내용을 강조 표시합니다.

`title`, `icon` 및 `color` props를 사용하여 사용자 정의할 수 있습니다. [`<NuxtLink>`xph08xhttps://nuxt.com/docs/api/components/nuxt-link) 또는 [`<RouterLink>`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html) 구성 요소의 속성을 전달할 수도 있습니다.

::component-code{slug="card" prose}
---
hide:
  - class
ignore:
  - target
props:
  class: 'my-0 w-96'
  title: Startup
  icon: i-lucide-users
  color: primary
  to: 'https://nuxt.lemonsqueezy.com'
  target: '_blank'
slots:
  default: Best suited for small teams, startups and agencies with up to 5 developers.
---

최대 5명의 개발자가 있는 소규모 팀, 스타트업 및 에이전시에 가장 적합합니다.
::

## API 파일

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Theme 주제

:component-theme{prose}

## 변경 로그

:component-changelog{prefix="prose"}
