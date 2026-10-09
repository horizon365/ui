---
title: 페이지사이드 PageAside
description: '페이지 네비게이션을 표시하기 위해 옆으로 고정됩니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageAside.vue
---

## Usage

PageAside 구성 요소는 [`lg` breakpoint](https://tailwindcss.com/docs/breakpoints)부터 시작하여 표시되는 고정 `<aside>` 요소입니다.

::tip{to="/docs/getting-started/theme/css-variables#header"}
PageAside 구성 요소는 `--ui-header-height` CSS 변수를 사용하여 `Header` 아래에 정확하게 위치합니다.
::

[Page](/docs/components/page) 구성 요소의 `left` 또는 `right` 슬롯 내부에서 사용합니다.

```vue {4}
<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>
  </UPage>
</template>
```

## 예

::note
이러한 예제에서는 [Nuxt Content](https://content.nuxt.com)를 사용하지만 구성 요소는 모든 콘텐츠 관리 시스템과 통합 할 수 있습니다.
::

### 레이아웃 내에서

레이아웃의 PageAside 구성 요소를 사용하여 탐색을 표시합니다.

```vue [layouts/docs.vue]{9-13}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

::note
이 예제에서는 `ContentNavigation` 구성 요소를 사용하여 `app.vue`에 주입된 탐색을 표시합니다.
::

## API

### Props

:component-props

### 슬롯

:component-slots

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
