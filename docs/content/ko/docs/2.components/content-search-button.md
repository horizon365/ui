---
title: ContentSearchButton의 경우
description: 'ContentSearch 모달을 여는 미리 스타일된 Button입니다.A pre-styled Button to open the ContentSearch modal.'
category: content
framework: nuxt
links:
  - label: 단추
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearchButton.vue
---

::warning{to="/docs/getting-started/integrations/content"}
이 구성 요소는 `@nuxt/content` 모듈이 설치된 경우에만 사용할 수 있습니다.
::

## Usage

ContentSearchButton 구성 요소는 [ContentSearch](xph04x) 모달을 여는 데 사용됩니다.

:component-code{prefix="content"}

[Button](/docs/components/button) 구성 요소를 확장하므로 `color`, `variant`, `size` 등과 같은 속성을 전달할 수 있습니다.

::component-code{prefix="content"}
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note{to="#collapsed"}
기본적으로 버튼은 축소되지 않은 경우 `color="neutral"` 및 `variant="outline"`로 설정되고 축소된 경우 `variant="ghost"`입니다.
::

### Collapsed 종료

`collapsed` 소품을 사용하여 버튼의 레이블과 [kbds](#kbds)를 표시합니다. 기본값은 `true`입니다.

::component-code{prefix="content"}
---
prettier: true
props:
  collapsed: false
---
::

### Kbds 파일

`kbds` 소품을 사용하여 단추에 키보드 키를 표시합니다. [ContentSearch](/docs/components/content-search#shortcut) 구성 요소의 기본 바로 가기와 일치하도록 기본값은 `['meta', 'K']`{lang="ts-type"}입니다.

::component-code{prefix="content"}
---
prettier: true
ignore:
  - kbds
props:
  collapsed: false
  kbds:
    - 'alt'
    - 'O'
---
::

## API

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<button>` HTML 속성도 지원합니다.
::

### Slots

:component-slots

## Theme 주제

:component-theme

## Changelog 파일

:component-changelog{prefix="content"}
