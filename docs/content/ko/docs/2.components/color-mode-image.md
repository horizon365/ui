---
title: ColorModeImage 이미지
description: '밝은 모드와 어두운 모드에 대해 소스가 다른 이미지 요소.'
category: color-mode
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeImage.vue
---

##  사용

ColorModeImage 구성 요소는 [`@nuxt/image`PH05https://github.com/nuxt/image)가 설치되어 있으면 `img`로 다시 돌아갑니다.

::component-code{prefix="color-mode"}
---
상품명 : True
무시하기:
  -  width
  -  높이
소품 :
  라이트: 'https://picsum.photos/id/29/400'
  dark: 'https://picsum.photos/id/46/400'
  폭: 200
  높이 : 200
---
::

::note
밝은 모드와 어두운 모드 사이를 전환하여 다른 이미지를 보십시오. :u-color-mode-select {size="sm"}
::

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<img>`HTML 속성을 지원합니다.
::

##  Changelog

: component-changelog {prefix="color-mode"}
