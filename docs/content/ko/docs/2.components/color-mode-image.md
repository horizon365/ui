---
title: ColorModeImage 이미지
description: '밝은 모드와 어두운 모드에 대해 소스가 다른 이미지 요소.'
category: color-mode
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeImage.vue
---

## Usage

ColorModeImage 구성 요소는 [`@nuxt/image`](https://github.com/nuxt/image)를 설치할 때 `<NuxtImg>` 구성 요소를 사용하며 그렇지 않으면 `img`로 대체됩니다.

::component-code{prefix="color-mode"}
---
prettier: true
ignore:
  - width
  - height
props:
  light: 'https://picsum.photos/id/29/400'
  dark: 'https://picsum.photos/id/46/400'
  width: 200
  height: 200
---
::

::note
밝은 모드와 어두운 모드 사이를 전환하여 다른 이미지를 확인합니다. :u-color-mode-select{size="sm"}
::

## API 사용

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<img>` HTML 속성도 지원합니다.
::

## 변경 로그

:component-changelog{prefix="color-mode"}
