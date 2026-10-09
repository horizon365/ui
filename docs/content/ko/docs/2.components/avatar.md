---
description: fallback 및 Nuxt Image를 지원하는 img 요소입니다.
category: element
keywords:
  - profile picture
  - user image
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Avatar.vue
---

## Usage

아바타는 [`@nuxt/image`](https://github.com/nuxt/image)를 설치할 때 `<NuxtImg>` 구성 요소를 사용하며, 그렇지 않으면 `img`로 다시 돌아갑니다.

::component-code
---
ignore:
  - src
props:
  src: 'https://github.com/benjamincanac.png'
---
::

::note
HTML `<img>` 요소에서 `alt`, `loading` 등의 모든 속성을 전달할 수 있습니다.
::

::tip
`@nuxt/image`를 옵트아웃하려면 `as` prop:`:as="{ img: 'img' }"`를 사용합니다.
::

### Src (### Src)

`src` prop을 사용하여 이미지 URL을 설정합니다.

::component-code
---
ignore:
  - loading
props:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
---
::

### Size

`size` prop을 사용하여 Avatar의 크기를 설정합니다.

::component-code
---
ignore:
  - src
  - loading
props:
  src: 'https://github.com/benjamincanac.png'
  size: xl
  loading: lazy
---
::

::note
`<img>` 요소의 `width` 및 `height`는 `size` prop을 기반으로 자동으로 설정됩니다.
::

### Icon 이미지

`icon` 소품을 사용하여 대체 [Icon](/docs/components/icon) 를 표시합니다.

::component-code
---
props:
  icon: 'i-lucide-image'
  size: md
---
::

### Text 파일

`text` prop을 사용하여 대체 텍스트를 표시합니다.

::component-code
---
props:
  text: '+1'
  size: md
---
::

### Alt

아이콘이나 텍스트가 제공되지 않으면 `alt` prop의 **initials**가 대체 기능으로 사용됩니다.

::component-code
---
props:
  alt: 'Benjamin Canac'
  size: md
---
::

::note
`alt` prop 은 `img` 요소에 `alt` 속성으로 전달됩니다.
::

### Color : badge{label="4.8+" class="align-text-top"}

`color` prop을 사용하여 아바타의 색상을 변경합니다.

::component-code
---
props:
  color: primary
  alt: 'Benjamin Canac'
---
::

### Chip 칩

`chip` prop을 사용하여 아바타 주위에 칩을 표시합니다.

::component-code
---
prettier: true
ignore:
  - src
  - loading
  - chip.inset
props:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
  chip:
    inset: true
---
::

## 예제

### 툴팁 사용

아바타를 마우스로 이동할 때 [Tooltip](/docs/components/tooltip) 구성 요소를 사용하여 툴팁을 표시할 수 있습니다.

:component-example{name="avatar-tooltip-example"}

### With 마스크

CSS 마스크를 사용하여 간단한 원이 아닌 사용자 정의 모양으로 아바타를 표시할 수 있습니다.

:component-example{name="avatar-mask-example"}

## API

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<img>` HTML 속성을 지원합니다.
::

## 테마

:component-theme

## 변경 로그

:component-changelog
