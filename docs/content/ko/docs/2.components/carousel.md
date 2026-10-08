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

##  사용

회전목마 구성요소를 사용하여 회전목마의 항목 목록을 표시합니다.

::component-example
---
축소: true
overflowHidden: true
이름: carousel-example
클래스 : "!p-0"
---
::

::note
마우스를 사용하여 바탕 화면에서 회전목마를 수평으로 끕니다.
::

###  프로젝트

`items`prop을 배열로 사용하고 기본 슬롯을 사용하여 각 항목을 렌더링합니다.

::component-example
---
이름: 'carousel-items-example'
분류: P-8
---
::

또한 다음 속성을 사용하여 객체 배열을 전달할 수 있습니다.

- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue }`{lang="ts-type"}

[`basis`](https://tailwindcss.com/docs/flex-basis)[`width`](]( https://tailwindcss.com/docs/width ) 유틸리티 클래스를 사용하여 표시되는 항목의 수를 제어할 수 있습니다.

::component-example
---
이름: 'carousel-items-multiple-example'
클래스: 'p-8 px-16'
---
::

###  방향

`orientation`prop을 사용하여 Progress.기본값은 `horizontal`로 변경됩니다.

::note
마우스를 사용하여 회전 목마를 바탕 화면에서 세로로 끕니다.
::

::component-example
---
이름: 'carousel-orientientation-example'
클래스: P-8
---
::

::caution
컨테이너에 `height`를 수직 방향으로 지정해야 합니다.
::

###  Arrows

`arrows`prop을 사용하여 prev 및 next 버튼을 표시합니다.

::component-example
---
이름: carousel-arrows-example
분류: P-8
---
::

###  Prev/다음

`prev` 및 `next`props를 사용하여 prev 및 다음 버튼을 [Button](/docs/components/button)props로 사용자 지정합니다.

::component-example
---
이름: 'carousel-prev-next-example'
분류: P-8
---
::

### Prev/다음 아이콘

`prev-icon` 및 `next-icon`props를 사용하여 [Icon](/docs/components/icon) 기본값은 `i-lucide-arrow-left`/`i-lucide-arrow-right`입니다.

::component-example
---
이름: 'carousel-prev-next-icon-example'
분류: P-8
선택 사항:
  -  이름: 'prevIcon'
    라벨: 'prevIcon'
    기본값: 'i-lucide-chevron-left'
  -  이름: 'nextIcon'
    레이블: 'nexticon'
    기본값: 'i-lucide-chevron-right'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이러한 아이콘은 `app.config.ts` 아래 `ui.icons.arrowLeft`/`ui.icons.arrowRight` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이러한 아이콘은 `vite.config.ts` 아래 `ui.icons.arrowLeft`/`ui.icons.arrowRight` 키에서 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Dots ### Dots

`dots`prop 을 사용하여 특정 슬라이드로 스크롤할 점 목록을 표시합니다.

::component-example
---
제목: carousel-dots-example
클래스: 'P-8 pb-12'
---
::

점 수는 뷰에 표시되는 슬라이드 수를 기준으로 합니다.

::component-example
---
이름: 'carousel-dots-multi-example'
클래스 : 'p-8 px-16 pb-12'
---
::

##  플러그인

Carousel 구성 요소는 공식 [Embla Carousel 플러그인 ](https://www.embla-carousel.com/docs/v8/plugins)을 구현합니다.

### 자동 실행

이 플러그인은 Embla Carousel을 **autoplay** 기능으로 확장하는 데 사용됩니다.

`autoplay`prop을 부울 또는 객체로 사용하여 [Autoplay plugin](https://www.embla-carousel.com/docs/v8/plugins/autoplay)를 설정합니다.

::component-example
---
이름: 'carousel-autoplay-example'
클래스: 'p-8 px-16 pb-12'
---
::

::note
이 예제에서는 `loop`prop을 무한 캐러셀에 사용합니다.
::

###  자동 스크롤

이 플러그인은 엠블라 회전목마를 **auto scroll**기능으로 확장하는 데 사용됩니다.

`auto-scroll`prop을 부울 또는 객체로 사용하여 [Auto Scroll plugin](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll)를 설정합니다.

::component-example
---
이름: 'carousel-auto-scroll-example'
클래스 : 'p-8 px-16 pb-12'
---
::

::note
이 예제에서는 `loop`prop을 무한 회전목마에 사용하고 있습니다.
::

### 자동 높이

이 플러그인은 Embla Carousel을 **auto height** 기능으로 확장하는 데 사용됩니다. 회전목마 컨테이너의 높이를 보는 가장 높은 슬라이드의 높이에 맞게 변경합니다.

`auto-height`prop을 부울 또는 객체로 사용하여 [Auto Height 플러그인](https://www.embla-carousel.com/docs/v8/plugins/auto-height)를 구성합니다.

::component-example
---
이름: 'carousel-auto-height-example'
클래스: 'P-8 pt-16'
---
::

::note
이 예제에서는 컨테이너에 `transition-[height]` 클래스를 추가하여 높이 변경을 애니메이션합니다.
::

###  클래스 이름

Class Names는 Embla Carousel을 위한 **class name toggle** 유틸리티 플러그인으로, 여러분의 회전목마에서 클래스 이름의 토글을 자동화할 수 있습니다.

`class-names`prop을 부울 또는 객체로 사용하여 [클래스 이름 plugin](https://www.embla-carousel.com/docs/v8/plugins/class-names)를 구성합니다.

::component-example
---
name: 'carousel-class-name-example'에 해당되는 글 1건
클래스: P-8
---
::

::note
이 예제에서는 `transition-opacity [&:not(.is-snapped)]:opacity-10` 클래스를 `item`에 추가하여 불투명도 변경을 애니메이션합니다.
::

### Fade @ 파데

이 플러그인은 Embla Carousel의 스크롤 기능을 **fade transitions**로 대체하는 데 사용됩니다.

`fade`prop을 부울 또는 객체로 사용하여 [Fade plugin](https://www.embla-carousel.com/docs/v8/plugins/fade)을 설정합니다.

::component-example
---
이름: 'carousel-fade-example'
클래스: 'P-8 pb-12'
---
::

### 휠 제스처

이 플러그인은 Embla Carousel을 확장하는 데 사용되며, 마우스 / 트랙패드 wheel **를 사용하여 회전목마를 탐색 할 수있는 기능을 제공합니다.

`wheel-gestures`prop을 부울 또는 객체로 사용하여 [Wheel Gestures plugin](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures)를 설정합니다.

::note
마우스 휠을 사용하여 회전목마를 회전합니다.
::

::component-example
---
이름: 'carousel-wheel-gestures-example'
클래스: 'p-8 px-16'
---
::

##  예제

### 썸네일 포함

[`emblaApi`](#expose) 에 [`scrollTo` 메소드를 사용하여 특정 슬라이드로 이동하는 축소판 그림을 표시할 수 있습니다.

::component-example
---
이름: 'carousel-thumbnails-example'
클래스: 'p-8 px-16'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

###  에미츠

:구성요소 - 방출

###  노출

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)를 사용하여 유형 구성요소 인스턴스에 액세스할 수 있습니다.

```vue
<script setup lang="ts">
const carousel = useTemplateRef('carousel')
</script>

<template>
  <UCarousel ref="carousel" />
</template>
```

이렇게 하면 다음 항목에 액세스할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `emblaRef`{lang="ts-type"}| `Ref<HTMLElement \| null>`{lang="ts-type"}|
| `emblaApi`{lang="ts-type"}| [ `Ref<EmblaCarouselType \| null>` @ {lang="ts-type"} @ ]( @ https://www.embla-carousel.com/docs/v8/api/methods#typescript @ )|

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
