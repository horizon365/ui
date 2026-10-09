---
description: Embla를 사용하여 제작된 모션 및 스와이프가 있는 회전목마.
category: data
keywords:
  - swiper
  - gallery
  - image slider
  - slideshow
links:
  - label: 엠블라
    to: https://www.embla-carousel.com/docs/v8/api
    icon: i-custom-embla-carousel
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Carousel.vue
---

## Usage

회전목마 구성요소를 사용하여 회전목마의 항목 목록을 표시합니다.

::component-example
---
collapse: true
overflowHidden: true
name: 'carousel-example'
class: '!p-0'
---
::

::note
마우스를 사용하여 바탕 화면에서 회전목마를 수평으로 끕니다.
::

### Items 이미지

`items` Prop을 배열로 사용하고 기본 슬롯을 사용하여 각 항목을 렌더링합니다.

::component-example
---
name: 'carousel-items-example'
class: 'p-8'
---
::

또한 다음 속성을 사용하여 객체 배열을 전달할 수 있습니다.

- `class?: any`{lang="ts-type"} - `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue }`{lang="ts-type"}

`item`에서 [`basis`](https://tailwindcss.com/docs/flex-basis)/[`width`](https://tailwindcss.com/docs/width) 유틸리티 클래스를 사용하여 표시되는 항목 수를 제어할 수 있습니다.

::component-example
---
name: 'carousel-items-multiple-example'
class: 'p-8 px-16'
---
::

### 방향 지정

`orientation` Prop을 사용하여 Progress의 방향을 변경합니다. 기본값은 `horizontal`입니다.

::note
마우스를 사용하여 회전 목마를 바탕 화면에서 세로로 끕니다.
::

::component-example
---
name: 'carousel-orientation-example'
class: 'p-8'
---
::

::caution
컨테이너에 `height`를 수직 방향으로 지정해야 합니다.
::

### Arrows

`arrows` prop을 사용하여 prev 및 next 버튼을 표시합니다.

::component-example
---
name: 'carousel-arrows-example'
class: 'p-8'
---
::

### Prev/다음

`prev` 및 `next` props를 사용하여 [Button](/docs/components/button) props를 사용하여 prev 및 next 버튼을 사용자 정의합니다.

::component-example
---
name: 'carousel-prev-next-example'
class: 'p-8'
---
::

### Prev/다음 아이콘

`prev-icon` 및 `next-icon` 소품을 사용하여 [Icon](/docs/components/icon) 버튼을 사용자 정의합니다. 기본값은 `i-lucide-arrow-left`/`i-lucide-arrow-right`입니다.

::component-example
---
name: 'carousel-prev-next-icon-example'
class: 'p-8'
options:
  - name: 'prevIcon'
    label: 'prevIcon'
    default: 'i-lucide-chevron-left'
  - name: 'nextIcon'
    label: 'nextIcon'
    default: 'i-lucide-chevron-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`app.config.ts`에서 `ui.icons.arrowLeft`/`ui.icons.arrowRight` 키 아래의 이러한 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.arrowLeft`/`ui.icons.arrowRight` 키 아래의 `vite.config.ts`에서 이러한 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Dots 파일

`dots` 소품을 사용하여 특정 슬라이드로 스크롤할 점 목록을 표시합니다.

::component-example
---
name: 'carousel-dots-example'
class: 'p-8 pb-12'
---
::

점 수는 뷰에 표시되는 슬라이드 수에 따라 결정됩니다.

::component-example
---
name: 'carousel-dots-multiple-example'
class: 'p-8 px-16 pb-12'
---
::

## 플러그인 Name

Carousel 컴포넌트는 공식 [Embla Carousel plugins](https://www.embla-carousel.com/docs/v8/plugins)를 구현합니다.

### 자동 재생

이 플러그인은 **autoplay** 기능을 사용하여 Embla Carousel을 확장하는 데 사용됩니다.

`autoplay` prop를 boolean 또는 객체로 사용하여 [Autoplay plugin](https://www.embla-carousel.com/docs/v8/plugins/autoplay)를 구성합니다.

::component-example
---
name: 'carousel-autoplay-example'
class: 'p-8 px-16 pb-12'
---
::

::note
이 예제에서는 무한 회전목마를 위해 `loop` prop을 사용하고 있습니다.
::

### 자동으로 스크롤

이 플러그인은 **auto scroll** 기능을 사용하여 Embla Carousel을 확장하는 데 사용됩니다.

`auto-scroll` prop을 부울 또는 객체로 사용하여 [Auto Scroll plugin](xph19x)를 구성합니다.

::component-example
---
name: 'carousel-auto-scroll-example'
class: 'p-8 px-16 pb-12'
---
::

::note
이 예제에서는 무한 회전목마를 위해 `loop` prop을 사용하고 있습니다.
::

### 자동 높이

이 플러그인은 Embla Carousel을 **auto height** 기능으로 확장하는 데 사용되며, 회전목마 컨테이너의 높이를 보는 가장 높은 슬라이드의 높이에 맞게 변경합니다.

`auto-height` prop를 부울 또는 객체로 사용하여 [Auto Height plugin](https://www.embla-carousel.com/docs/v8/plugins/auto-height)를 구성합니다.

::component-example
---
name: 'carousel-auto-height-example'
class: 'p-8 pt-16'
---
::

::note
이 예제에서는 컨테이너에 `transition-[height]` 클래스를 추가하여 높이 변화를 애니메이션합니다.
::

### 클래스 이름

Class Names 는 Embla Carousel 용 **class name toggle** 유틸리티 플러그인으로 회전목마에서 클래스 이름의 토글을 자동화 할 수 있습니다.

`class-names` prop을 부울 또는 객체로 사용하여 [Class Names plugin](https://www.embla-carousel.com/docs/v8/plugins/class-names)를 구성합니다.

::component-example
---
name: 'carousel-class-names-example'
class: 'p-8'
---
::

::note
이 예제에서는 `item`에 `transition-opacity [&:not(.is-snapped)]:opacity-10` 클래스를 추가하여 불투명도 변화를 애니메이션합니다.
::

### Fade 의 발음을 ### Fade [en]

이 플러그인은 Embla Carousel 스크롤 기능을 **fade transitions**로 대체하는 데 사용됩니다.

`fade` prop를 부울 또는 객체로 사용하여 [Fade plugin](https://www.embla-carousel.com/docs/v8/plugins/fade)를 구성합니다.

::component-example
---
name: 'carousel-fade-example'
class: 'p-8 pb-12'
---
::

### Wheel 동작

이 플러그인은 Embla Carousel을 확장하는 데 사용되며 **use 마우스 / 트랙패드 wheel**를 사용하여 회전목마를 탐색 할 수 있습니다.

`wheel-gestures` prop를 부울 또는 객체로 사용하여 [Wheel Gestures plugin](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures)를 구성합니다.

::note
마우스 휠을 사용하여 회전목마를 회전합니다.
::

::component-example
---
name: 'carousel-wheel-gestures-example'
class: 'p-8 px-16'
---
::

## examples 예제

### 썸네일 포함

[`emblaApi`](#expose)에서 [`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto) 메서드를 사용하여 특정 슬라이드로 이동하는 회전목마 아래에 축소판을 표시할 수 있습니다.

::component-example
---
name: 'carousel-thumbnails-example'
class: 'p-8 px-16'
---
::

## API 파일

### Props (### Props)

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

### 노출

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)를 사용하여 입력된 구성 요소 인스턴스에 액세스할 수 있습니다.

```vue
<script setup lang="ts">
const carousel = useTemplateRef('carousel')
</script>

<template>
  <UCarousel ref="carousel" />
</template>
```

이렇게 하면 다음 항목에 액세스할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `emblaRef`{lang="ts-type"}| `Ref<HTMLElement \| null>`{lang="ts-type"}|
| `emblaApi`{lang="ts-type"} 파일| [`Ref<EmblaCarouselType \| null>`{lang="ts-type"}](https://www.embla-carousel.com/docs/v8/api/methods#typescript)|

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
