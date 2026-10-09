---
title: ColorModeAvatar의 지도
description: '빛과 어둠 모드를 위한 다른 소스를 가진 아바타.'
category: color-mode
links:
  - label: 아바타 Avatar
    to: /docs/components/avatar
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeAvatar.vue
---

## Usage

ColorModeAvatar 구성 요소는 [Avatar](xph05x) 구성 요소를 확장하므로 `size`, `icon` 등과 같은 속성을 전달할 수 있습니다.

`light` 및 `dark` 소품을 사용하여 밝은 모드와 어두운 모드의 소스를 정의합니다.

::component-code{prefix="color-mode"}
---
props:
  light: 'https://github.com/vuejs.png'
  dark: 'https://github.com/nuxt.png'
---
::

::note
밝은 모드와 어두운 모드 사이를 전환하여 다른 이미지를 확인합니다. :u-color-mode-select{size="sm"}
::

## API 파일

### Props 코드 코드

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<img>` HTML 속성도 지원합니다.
::

## Changelog 파일

:component-changelog{prefix="color-mode"}
