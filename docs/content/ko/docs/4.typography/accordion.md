---
title: 프로세아코디온
description: '확장 가능한 컨텐츠 섹션을 작성하여 보다 효율적인 정보 구성을 수행할 수 있습니다.'
category: components
navigation.title: Accordion
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Accordion.vue
---

##  사용

`accordion` 및 `accordion-item` 구성 요소를 사용하여 콘텐츠에 [Accordion](/docs/components/accordion) 를 표시합니다.

::code-preview{class="[&>div]:*:my-0"}

:::accordion
---
defaultValue :
  -  1 '
---

::accordion-item{label="Nuxt UI는 무료로 사용할 수 있습니까?" icon="i-lucide-circle-help"}
Nuxt UI는 MIT 라이센스에 따라 완전히 무료이며 오픈 소스이며 모든 125 개 이상의 구성 요소는 모두가 사용할 수 있습니다.
::

::accordion-item{label="Nuxt 없이 Vue와 Nuxt UI를 사용할 수 있습니까?" icon="i-lucide-circle-help"}
- 그래! Nuxt에 최적화되어 있지만 Nuxt UI는 Vite 플러그인을 통해 독립형 Vue 프로젝트와 완벽하게 작동합니다. [설치 가이드](/docs/getting-started/installation/vue)를 따라 시작할 수 있습니다.
::

::accordion-item{label="Nuxt UI 프로덕션 준비가 되었습니까?" icon="i-lucide-circle-help"}
Nuxt UI는 광범위한 테스트, 정기적인 업데이트 및 활성 유지 관리를 통해 수천 개의 응용 프로그램에서 프로덕션에 사용됩니다.
::

:::

# 코드

```mdc
::accordion
---
defaultValue:
  - '1'
---

::accordion-item{label="Is Nuxt UI free to use?" icon="i-lucide-circle-help"}
Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.
::

::accordion-item{label="Can I use Nuxt UI with Vue without Nuxt?" icon="i-lucide-circle-help"}
Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.
::

::accordion-item{label="Is Nuxt UI production-ready?" icon="i-lucide-circle-help"}
Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.
::

::
```

::

##  API

###  Props

: component-props {prose}

###  슬롯

:component-slots {prose}

##  테마

::component-theme{prose}
---
추가:
  -  accordionItem
---
::

##  Changelog

: component-changelog{prefix="prose"}
