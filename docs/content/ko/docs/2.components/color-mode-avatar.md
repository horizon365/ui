---
title: ColorModeAvatar의 지도
description: '빛과 어둠 모드를 위한 다른 소스를 가진 아바타.'
category: color-mode
links:
  - label: 아바타 (Avatar)
    to: /docs/components/avatar
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeAvatar.vue
---

##  사용

ColorModeAvatar 컴포넌트는 [Avatar](/docs/components/avatar) 컴포넌트를 확장하므로 `size`, `icon` 등의 속성을 전달할 수 있습니다.

`light` 및 `dark`props를 사용하여 빛과 어두운 모드의 소스를 정의합니다.

::component-code{prefix="color-mode"}
---
소품 :
  light: 'https://github.com/vuejs.png'
  dark : 'https://github.com/nuxt.png'
---
::

::note
밝은 모드와 어두운 모드 사이를 전환하여 다른 이미지를 보십시오. :u-color-mode-select {size="sm"}
::

##  API

### Props 이미지

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<img>`HTML 속성을 지원합니다.
::

##  Changelog

: component-changelog {prefix="color-mode"}
