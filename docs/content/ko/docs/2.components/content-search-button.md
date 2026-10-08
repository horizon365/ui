---
title: ContentSearchButton의 경우
description: 'ContentSearch 모달을 여는 미리 스타일된 Button입니다.A pre-styled Button to open the ContentSearch modal.'
category: content
framework: nuxt
links:
  - label: 버튼 (Button)
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearchButton.vue
---

::warning{to="/docs/getting-started/integrations/content"}
이 구성요소는 `@nuxt/content` 모듈이 설치된 경우에만 사용할 수 있습니다.
::

##  사용

ContentSearchButton 구성 요소는 [ContentSearch](/docs/components/content-search)modal을 여는 데 사용됩니다.

: component-code{prefix="content"}

그것은 [Button](/docs/components/button) 구성 요소를 확장하여 `color`, `variant`, `size` 등과 같은 속성을 전달할 수 있습니다.

::component-code{prefix="content"}
---
무시하기:
  -  variant
소품 :
  variant: '미묘한'
---
::

::note{to="#collapsed"}
단추의 기본값은 `color="neutral"`이고 축소되지 않은 경우 `variant="outline"`이고 축소된 경우 `variant="ghost"`입니다.
::

###  종료

`collapsed`prop을 사용하여 버튼의 레이블을 표시하고 [kbds](#kbds) 기본값은 `true`입니다.

::component-code{prefix="content"}
---
상품명 : True
소품 :
  축소: false
---
::

###  Kbds

`kbds`prop을 사용하여 단추에 키보드 키를 표시합니다. 기본값은 `['meta', 'K']`{lang="ts-type"}입니다. [ContentSearch](/docs/components/content-search#shortcut) 구성 요소의 기본 바로 가기와 일치합니다.

::component-code{prefix="content"}
---
상품명 : True
무시하기:
  -  kbds
소품 :
  축소: false
  kbds :
    -  alt '
    -  'O'
---
::

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<button>`HTML 속성을 지원합니다.
::

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

: component-changelog{prefix="content"}
